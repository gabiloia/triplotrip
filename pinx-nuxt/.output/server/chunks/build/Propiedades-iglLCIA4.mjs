import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import qs from 'qs';
import { a as _export_sfc, u as useNotification, B as Button, N as NCard, b as NModal } from './server.mjs';
import { u as useDialog } from './composables-BaHNx5xN.mjs';
import { N as NForm } from './Form-b1P4jfBt.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import 'lodash/castArray.js';
import '@css-render/vue3-ssr';
import 'deep-pick-omit';
import 'colord';
import 'lodash/get.js';
import 'vooks';
import '@vueuse/core';
import 'lodash/set.js';
import 'seemly';
import 'lodash-es';
import '@css-render/plugin-bem';
import 'css-render';
import 'evtd';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'vdirs';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Propiedades",
  __ssrInlineRender: true,
  setup(__props) {
    const propiedades = ref([]);
    const showModal = ref(false);
    const isEditing = ref(false);
    const editingDocumentId = ref(null);
    const form = ref({ Titulo: "", Descripcion: "", FotoPrincipal: null });
    const currentUser = ref(null);
    const notification = useNotification();
    useDialog();
    const loading = ref(true);
    let imagesToLoadCount = 0;
    function getImageUrl(media) {
      if (!media || !media.url) return "/images/default.jpg";
      return media.url.startsWith("http") ? media.url : `https://admin.triplotrip.com${media.url}`;
    }
    function openNewModal() {
      isEditing.value = false;
      editingDocumentId.value = null;
      form.value = { Titulo: "", Descripcion: "", FotoPrincipal: null };
      showModal.value = true;
    }
    async function fetchPropiedades() {
      try {
        loading.value = true;
        const token = localStorage.getItem("auth_token");
        if (!token) return;
        currentUser.value = await $fetch("https://admin.triplotrip.com/api/users/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const query = qs.stringify(
          {
            filters: {
              owner: { documentId: { $eq: currentUser.value.documentId } }
            },
            populate: ["FotoPrincipal"]
          },
          { encodeValuesOnly: true }
        );
        const res = await $fetch(`https://admin.triplotrip.com/api/propiedades?${query}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        propiedades.value = res.data || [];
        imagesToLoadCount = propiedades.value.length;
        if (imagesToLoadCount === 0) {
          loading.value = false;
        }
      } catch (e) {
        console.error("Error cargando propiedades:", e);
        loading.value = false;
      }
    }
    function onImageLoad() {
      imagesToLoadCount--;
      if (imagesToLoadCount <= 0) {
        loading.value = false;
      }
    }
    function openEditModal(prop) {
      isEditing.value = true;
      editingDocumentId.value = prop.documentId;
      form.value = {
        Titulo: prop.Titulo,
        Descripcion: prop.Descripcion,
        FotoPrincipal: null
      };
      showModal.value = true;
    }
    async function submitForm() {
      try {
        const token = localStorage.getItem("auth_token");
        if (!token || !currentUser.value) throw new Error("No autenticado");
        let uploadedFileId = null;
        if (form.value.FotoPrincipal) {
          const formData = new FormData();
          formData.append("files", form.value.FotoPrincipal);
          const uploadResponse = await fetch("https://admin.triplotrip.com/api/upload", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData
          });
          if (!uploadResponse.ok) throw new Error(`Error subiendo imagen: ${uploadResponse.statusText}`);
          const uploaded = await uploadResponse.json();
          uploadedFileId = Array.isArray(uploaded) ? uploaded[0].id : uploaded.id;
        }
        const payload = {
          Titulo: form.value.Titulo,
          Descripcion: form.value.Descripcion
        };
        if (uploadedFileId) payload.FotoPrincipal = uploadedFileId;
        if (!isEditing.value) payload.owner = { connect: [currentUser.value.id] };
        const url = isEditing.value ? `https://admin.triplotrip.com/api/propiedades/${editingDocumentId.value}` : `https://admin.triplotrip.com/api/propiedades`;
        const method = isEditing.value ? "PUT" : "POST";
        await $fetch(url, {
          method,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ data: payload })
        });
        notification.success({ title: "Propiedad guardada correctamente" });
        showModal.value = false;
        form.value = { Titulo: "", Descripcion: "", FotoPrincipal: null };
        editingDocumentId.value = null;
        isEditing.value = false;
        await fetchPropiedades();
      } catch (err) {
        console.error(err);
        notification.error({ title: "Error", content: err.message || "No se pudo guardar" });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-91e62957>`);
      if (loading.value) {
        _push(`<div class="text-center my-4" data-v-91e62957> Cargando im\xE1genes... </div>`);
      } else {
        _push(`<div class="text-center my-4 text-green-600" data-v-91e62957> Todo descargado </div>`);
      }
      _push(`<div class="page-header" data-v-91e62957><div class="title" data-v-91e62957>Propiedades</div></div><div class="main" data-v-91e62957><div class="mb-4 flex" data-v-91e62957>`);
      _push(ssrRenderComponent(unref(Button), { onClick: openNewModal }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nueva propiedad`);
          } else {
            return [
              createTextVNode("Nueva propiedad")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="masonry" data-v-91e62957><!--[-->`);
      ssrRenderList(propiedades.value, (prop, index) => {
        _push(`<div class="card-wrap" data-v-91e62957>`);
        _push(ssrRenderComponent(unref(NCard), {
          hoverable: "",
          class: "property-card"
        }, {
          cover: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="property-image"${ssrRenderAttr("alt", prop.Titulo || "Imagen")}${ssrRenderAttr("src", getImageUrl(prop.FotoPrincipal))} data-v-91e62957${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "property-image",
                  alt: prop.Titulo || "Imagen",
                  src: getImageUrl(prop.FotoPrincipal),
                  onLoad: onImageLoad,
                  onError: onImageLoad
                }, null, 40, ["alt", "src"])
              ];
            }
          }),
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-91e62957${_scopeId}>${ssrInterpolate(prop.Titulo)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(prop.Titulo), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-91e62957${_scopeId}>${ssrInterpolate(prop.Descripcion)}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(prop.Descripcion), 1)
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Button), {
                size: "small",
                onClick: ($event) => openEditModal(prop)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Editar`);
                  } else {
                    return [
                      createTextVNode("Editar")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Button), {
                  size: "small",
                  onClick: ($event) => openEditModal(prop)
                }, {
                  default: withCtx(() => [
                    createTextVNode("Editar")
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(unref(NModal), {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event,
        preset: "dialog",
        title: isEditing.value ? "Editar propiedad" : "Crear nueva propiedad"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NForm), {
              model: form.value,
              onSubmit: submitForm
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NForm), {
                model: form.value,
                onSubmit: withModifiers(submitForm, ["prevent"])
              }, null, 8, ["model"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Propiedades.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Propiedades = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-91e62957"]]);

export { Propiedades as default };
//# sourceMappingURL=Propiedades-iglLCIA4.mjs.map
