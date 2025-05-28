import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, N as NCard, B as Button, a as _sfc_main$s, b as NModal } from './server.mjs';
import { N as NInput } from './Input-DOxGe8j0.mjs';
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
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModalEditarPropiedad",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    propiedad: {}
  },
  emits: ["update:show", "guardar"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const propiedadLocal = ref({});
    watch(() => props.propiedad, (nueva) => {
      propiedadLocal.value = { ...nueva };
    }, { immediate: true });
    async function guardarCambios() {
      try {
        const res = await fetch(`https://admin.triplotrip.com/api/propiedades/${propiedadLocal.value.documentId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: {
              Titulo: propiedadLocal.value.Titulo,
              Descripcion: propiedadLocal.value.Descripcion
            }
          })
        });
        if (!res.ok) throw new Error("Error al guardar en Strapi");
        const res2 = await fetch(`https://admin.triplotrip.com/api/propiedades/${propiedadLocal.value.documentId}?populate=FotoPrincipal`);
        const json = await res2.json();
        const actualizada = {
          ...json.data,
          ...json.data.attributes,
          documentId: propiedadLocal.value.documentId
        };
        emit("guardar", actualizada);
        emit("update:show", false);
      } catch (err) {
        console.error("Error al guardar cambios:", err);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NModal), mergeProps({
        show: _ctx.show,
        preset: "dialog",
        title: "Editar Propiedad",
        "onUpdate:show": ($event) => _ctx.$emit("update:show", $event)
      }, _attrs), {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-2 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              onClick: ($event) => _ctx.$emit("update:show", false)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancelar`);
                } else {
                  return [
                    createTextVNode("Cancelar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              onClick: guardarCambios
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Guardar`);
                } else {
                  return [
                    createTextVNode("Guardar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                createVNode(unref(Button), {
                  onClick: ($event) => _ctx.$emit("update:show", false)
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cancelar")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(unref(Button), {
                  type: "primary",
                  onClick: guardarCambios
                }, {
                  default: withCtx(() => [
                    createTextVNode("Guardar")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NInput), {
              value: propiedadLocal.value.Titulo,
              "onUpdate:value": ($event) => propiedadLocal.value.Titulo = $event,
              placeholder: "T\xEDtulo"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NInput), {
              value: propiedadLocal.value.Descripcion,
              "onUpdate:value": ($event) => propiedadLocal.value.Descripcion = $event,
              type: "textarea",
              placeholder: "Descripci\xF3n",
              rows: "4"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(unref(NInput), {
                  value: propiedadLocal.value.Titulo,
                  "onUpdate:value": ($event) => propiedadLocal.value.Titulo = $event,
                  placeholder: "T\xEDtulo"
                }, null, 8, ["value", "onUpdate:value"]),
                createVNode(unref(NInput), {
                  value: propiedadLocal.value.Descripcion,
                  "onUpdate:value": ($event) => propiedadLocal.value.Descripcion = $event,
                  type: "textarea",
                  placeholder: "Descripci\xF3n",
                  rows: "4"
                }, null, 8, ["value", "onUpdate:value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/propiedades/ModalEditarPropiedad.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EditIcon = "tabler:edit";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Propiedades",
  __ssrInlineRender: true,
  setup(__props) {
    const propiedades = ref([]);
    const mostrarModal = ref(false);
    const propiedadSeleccionada = ref(null);
    function getImagenUrl(prop) {
      var _a, _b, _c, _d;
      const imagen = ((_c = (_b = (_a = prop.FotoPrincipal) == null ? void 0 : _a.formats) == null ? void 0 : _b.medium) == null ? void 0 : _c.url) || ((_d = prop.FotoPrincipal) == null ? void 0 : _d.url);
      return imagen ? `https://admin.triplotrip.com${imagen}` : null;
    }
    function abrirModal(prop) {
      propiedadSeleccionada.value = prop;
      mostrarModal.value = true;
    }
    function guardarEdicion(propEditada) {
      const index = propiedades.value.findIndex((p) => p.documentId === propEditada.documentId);
      if (index !== -1) {
        propiedades.value[index] = { ...propEditada };
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-d62a2cc2><h1 data-v-d62a2cc2>Propiedades</h1><div class="masonry" data-v-d62a2cc2><!--[-->`);
      ssrRenderList(propiedades.value, (prop) => {
        _push(`<div class="card-wrap" data-v-d62a2cc2>`);
        _push(ssrRenderComponent(unref(NCard), { hoverable: "" }, {
          cover: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (getImagenUrl(prop)) {
                _push2(`<img${ssrRenderAttr("src", getImagenUrl(prop))} alt="Foto principal" width="900" height="400" data-v-d62a2cc2${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                getImagenUrl(prop) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: getImagenUrl(prop),
                  alt: "Foto principal",
                  width: "900",
                  height: "400"
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ];
            }
          }),
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-d62a2cc2${_scopeId}>${ssrInterpolate(prop.Titulo || "Cargando t\xEDtulo...")}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(prop.Titulo || "Cargando t\xEDtulo..."), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d62a2cc2${_scopeId}>${ssrInterpolate(prop.Descripcion || "Cargando descripcion...")}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(prop.Descripcion || "Cargando descripcion..."), 1)
              ];
            }
          }),
          action: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between" data-v-d62a2cc2${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Button), {
                type: "primary",
                onClick: ($event) => abrirModal(prop)
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, { name: EditIcon }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, { name: EditIcon })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Editar `);
                  } else {
                    return [
                      createTextVNode(" Editar ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(unref(Button), {
                    type: "primary",
                    onClick: ($event) => abrirModal(prop)
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$s, { name: EditIcon })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Editar ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: mostrarModal.value,
        propiedad: propiedadSeleccionada.value,
        "onUpdate:show": ($event) => mostrarModal.value = $event,
        onGuardar: guardarEdicion
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Propiedades.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Propiedades = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d62a2cc2"]]);

export { Propiedades as default };
//# sourceMappingURL=Propiedades-DN21VXSn.mjs.map
