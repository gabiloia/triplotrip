import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, computed, createBlock, createCommentVNode, openBlock, withDirectives, vShow, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { a as _export_sfc, u as useNotification, N as NCard, d as NAvatar, _ as _sfc_main$o, e as NTooltip, B as Button, b as NModal, c as NText } from './server.mjs';
import { CircleStencil, RectangleStencil, Cropper } from 'vue-advanced-cropper';
import { N as NUpload, a as NUploadDragger } from './Upload-BtnKw5D8.mjs';
import qs from 'qs';
import { u as useDialog } from './composables-BaHNx5xN.mjs';
import { N as NForm, a as NFormItem } from './FormItem-BD_bmr5c.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { N as NP } from './p-CRyTtbND.mjs';
import { N as NTabs, a as NTab, b as NTabPane } from './Tabs-utWLgCyk.mjs';
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
import './Progress-CTmj2S_J.mjs';
import './Image-CiL9m40l.mjs';
import './download-aNT-DO08.mjs';
import './Eye-DafrR3c8.mjs';
import './Add-niv5NbQA.mjs';
import 'async-validator';
import './use-collection-Dfn99m8m.mjs';
import './Suffix-CHHaPGTv.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ImageCropper",
  __ssrInlineRender: true,
  props: {
    placeholder: { default: "Select an image" },
    shape: { default: "circle" }
  },
  emits: ["crop"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const stencil = computed(() => __props.shape === "circle" ? CircleStencil : RectangleStencil);
    const img = ref("");
    const showCropper = ref(false);
    const cropper = ref(null);
    const stencilSize = ref({
      width: 300,
      height: 300
    });
    const stencilProps = ref({
      handlers: {},
      movable: false,
      scalable: false,
      aspectRatio: 1
    });
    const resizeImage = ref({
      adjustStencil: false
    });
    function closeCropper() {
      showCropper.value = false;
      img.value = "";
    }
    function openCropper() {
      showCropper.value = true;
      img.value = "";
    }
    function setImage(data) {
      var _a;
      if ((_a = data == null ? void 0 : data.file) == null ? void 0 : _a.file) {
        const reader = new FileReader();
        reader.readAsDataURL(data.file.file);
        reader.onload = () => {
          var _a2;
          img.value = ((_a2 = reader.result) == null ? void 0 : _a2.toString()) || "";
        };
      }
    }
    function emitCrop() {
      if (cropper.value) {
        const result = cropper.value.getResult();
        emit("crop", result);
      }
      closeCropper();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-cropper" }, _attrs))} data-v-08d56b3c>`);
      ssrRenderSlot(_ctx.$slots, "default", { openCropper }, null, _push, _parent);
      _push(ssrRenderComponent(unref(NModal), {
        show: showCropper.value,
        "onUpdate:show": ($event) => showCropper.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCard), {
              class: "image-cropper-modal flex flex-col",
              "content-class": "p-5!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="aspect-square" data-v-08d56b3c${_scopeId2}>`);
                  if (!img.value) {
                    _push3(`<div class="upload-box" data-v-08d56b3c${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(NUpload), {
                      style: !img.value ? null : { display: "none" },
                      accept: "image/*",
                      "show-file-list": false,
                      onChange: setImage
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(NUploadDragger), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-08d56b3c${_scopeId4}>${ssrInterpolate(_ctx.placeholder)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, toDisplayString(_ctx.placeholder), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(NUploadDragger), null, {
                              default: withCtx(() => [
                                createVNode("div", null, toDisplayString(_ctx.placeholder), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (img.value) {
                    _push3(`<div class="crop-box" data-v-08d56b3c${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Cropper), {
                      ref_key: "cropper",
                      ref: cropper,
                      class: "cropper aspect-square",
                      src: img.value,
                      "stencil-size": stencilSize.value,
                      "stencil-props": stencilProps.value,
                      "resize-image": resizeImage.value,
                      "image-restriction": "stencil",
                      "stencil-component": stencil.value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="mt-4 flex justify-end gap-4" data-v-08d56b3c${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Button), {
                    secondary: "",
                    onClick: ($event) => closeCropper()
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Close`);
                      } else {
                        return [
                          createTextVNode("Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (img.value) {
                    _push3(ssrRenderComponent(unref(Button), {
                      type: "primary",
                      onClick: ($event) => emitCrop()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Save`);
                        } else {
                          return [
                            createTextVNode("Save")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "aspect-square" }, [
                      !img.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "upload-box"
                      }, [
                        withDirectives(createVNode(unref(NUpload), {
                          accept: "image/*",
                          "show-file-list": false,
                          onChange: setImage
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NUploadDragger), null, {
                              default: withCtx(() => [
                                createVNode("div", null, toDisplayString(_ctx.placeholder), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512), [
                          [vShow, !img.value]
                        ])
                      ])) : createCommentVNode("", true),
                      img.value ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "crop-box"
                      }, [
                        createVNode(unref(Cropper), {
                          ref_key: "cropper",
                          ref: cropper,
                          class: "cropper aspect-square",
                          src: img.value,
                          "stencil-size": stencilSize.value,
                          "stencil-props": stencilProps.value,
                          "resize-image": resizeImage.value,
                          "image-restriction": "stencil",
                          "stencil-component": stencil.value
                        }, null, 8, ["src", "stencil-size", "stencil-props", "resize-image", "stencil-component"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-4 flex justify-end gap-4" }, [
                      createVNode(unref(Button), {
                        secondary: "",
                        onClick: ($event) => closeCropper()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Close")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      img.value ? (openBlock(), createBlock(unref(Button), {
                        key: 0,
                        type: "primary",
                        onClick: ($event) => emitCrop()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Save")
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCard), {
                class: "image-cropper-modal flex flex-col",
                "content-class": "p-5!"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "aspect-square" }, [
                    !img.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "upload-box"
                    }, [
                      withDirectives(createVNode(unref(NUpload), {
                        accept: "image/*",
                        "show-file-list": false,
                        onChange: setImage
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NUploadDragger), null, {
                            default: withCtx(() => [
                              createVNode("div", null, toDisplayString(_ctx.placeholder), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 512), [
                        [vShow, !img.value]
                      ])
                    ])) : createCommentVNode("", true),
                    img.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "crop-box"
                    }, [
                      createVNode(unref(Cropper), {
                        ref_key: "cropper",
                        ref: cropper,
                        class: "cropper aspect-square",
                        src: img.value,
                        "stencil-size": stencilSize.value,
                        "stencil-props": stencilProps.value,
                        "resize-image": resizeImage.value,
                        "image-restriction": "stencil",
                        "stencil-component": stencil.value
                      }, null, 8, ["src", "stencil-size", "stencil-props", "resize-image", "stencil-component"])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "mt-4 flex justify-end gap-4" }, [
                    createVNode(unref(Button), {
                      secondary: "",
                      onClick: ($event) => closeCropper()
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Close")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    img.value ? (openBlock(), createBlock(unref(Button), {
                      key: 0,
                      type: "primary",
                      onClick: ($event) => emitCrop()
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Save")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/ImageCropper.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ImageCropper = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-08d56b3c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProfileSettings",
  __ssrInlineRender: true,
  setup(__props) {
    const propiedades = ref([]);
    const showModal = ref(false);
    const isEditing = ref(false);
    const editingDocumentId = ref(null);
    const form = ref({ Titulo: "", Descripcion: "", FotoPrincipal: null });
    const currentUser = ref(null);
    const notification = useNotification();
    const dialog = useDialog();
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
      } catch (e) {
        console.error("Error cargando propiedades:", e);
      }
    }
    function handleFileChange({ file }) {
      form.value.FotoPrincipal = file.file;
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
    function confirmDelete() {
      dialog.warning({
        title: "\xBFEliminar propiedad?",
        content: "Esta acci\xF3n no se puede deshacer.",
        positiveText: "Eliminar",
        negativeText: "Cancelar",
        onPositiveClick: () => deletePropiedad()
      });
    }
    async function deletePropiedad() {
      try {
        const token = localStorage.getItem("auth_token");
        if (!token || !editingDocumentId.value) return;
        const response = await fetch(`https://admin.triplotrip.com/api/propiedades/${editingDocumentId.value}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Error borrando propiedad: ${response.statusText}`);
        }
        propiedades.value = propiedades.value.filter((p) => p.documentId !== editingDocumentId.value);
        notification.success({ title: "Propiedad eliminada" });
        showModal.value = false;
        editingDocumentId.value = null;
        isEditing.value = false;
      } catch (err) {
        console.error(err);
        notification.error({ title: "Error", content: err.message || "No se pudo eliminar" });
      }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "activity" }, _attrs))} data-v-132b007c><div class="mb-4 flex justify-end" data-v-132b007c>`);
      _push(ssrRenderComponent(unref(Button), {
        type: "primary",
        onClick: openNewModal
      }, {
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
      _push(`</div><div class="masonry" data-v-132b007c><!--[-->`);
      ssrRenderList(propiedades.value, (prop, index) => {
        _push(`<div class="card-wrap" data-v-132b007c>`);
        _push(ssrRenderComponent(unref(NCard), {
          hoverable: "",
          class: "property-card"
        }, {
          cover: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="property-image"${ssrRenderAttr("alt", prop.Titulo || "Imagen")}${ssrRenderAttr("src", getImageUrl(prop.FotoPrincipal))} data-v-132b007c${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "property-image",
                  alt: prop.Titulo || "Imagen",
                  src: getImageUrl(prop.FotoPrincipal)
                }, null, 8, ["alt", "src"])
              ];
            }
          }),
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-132b007c${_scopeId}>${ssrInterpolate(prop.Titulo)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(prop.Titulo), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-132b007c${_scopeId}>${ssrInterpolate(prop.Descripcion)}</p>`);
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
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "T\xEDtulo",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: form.value.Titulo,
                          "onUpdate:value": ($event) => form.value.Titulo = $event,
                          placeholder: "T\xEDtulo de la propiedad"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: form.value.Titulo,
                            "onUpdate:value": ($event) => form.value.Titulo = $event,
                            placeholder: "T\xEDtulo de la propiedad"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Descripci\xF3n",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: form.value.Descripcion,
                          "onUpdate:value": ($event) => form.value.Descripcion = $event,
                          type: "textarea",
                          placeholder: "Descripci\xF3n de la propiedad"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: form.value.Descripcion,
                            "onUpdate:value": ($event) => form.value.Descripcion = $event,
                            type: "textarea",
                            placeholder: "Descripci\xF3n de la propiedad"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), { label: "Imagen principal" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NUpload), {
                          max: 1,
                          "default-upload": false,
                          onChange: handleFileChange
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NUploadDragger), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(NText), { style: { "font-size": "16px" } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Click o arrastr\xE1 una imagen para subir`);
                                        } else {
                                          return [
                                            createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(NP), {
                                      depth: "3",
                                      style: { "margin": "8px 0 0 0" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`M\xE1ximo 1 imagen.`);
                                        } else {
                                          return [
                                            createTextVNode("M\xE1ximo 1 imagen.")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                        default: withCtx(() => [
                                          createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(NP), {
                                        depth: "3",
                                        style: { "margin": "8px 0 0 0" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("M\xE1ximo 1 imagen.")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NUploadDragger), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(NP), {
                                      depth: "3",
                                      style: { "margin": "8px 0 0 0" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("M\xE1ximo 1 imagen.")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NUpload), {
                            max: 1,
                            "default-upload": false,
                            onChange: handleFileChange
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NUploadDragger), null, {
                                default: withCtx(() => [
                                  createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(NP), {
                                    depth: "3",
                                    style: { "margin": "8px 0 0 0" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("M\xE1ximo 1 imagen.")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (isEditing.value) {
                          _push4(ssrRenderComponent(unref(Button), { onClick: confirmDelete }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Eliminar`);
                              } else {
                                return [
                                  createTextVNode("Eliminar")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(unref(Button), {
                          type: "primary",
                          "attr-type": "submit"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Guardar`);
                            } else {
                              return [
                                createTextVNode("Guardar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          isEditing.value ? (openBlock(), createBlock(unref(Button), {
                            key: 0,
                            onClick: confirmDelete
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Eliminar")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(unref(Button), {
                            type: "primary",
                            "attr-type": "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Guardar")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NFormItem), {
                      label: "T\xEDtulo",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: form.value.Titulo,
                          "onUpdate:value": ($event) => form.value.Titulo = $event,
                          placeholder: "T\xEDtulo de la propiedad"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Descripci\xF3n",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: form.value.Descripcion,
                          "onUpdate:value": ($event) => form.value.Descripcion = $event,
                          type: "textarea",
                          placeholder: "Descripci\xF3n de la propiedad"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), { label: "Imagen principal" }, {
                      default: withCtx(() => [
                        createVNode(unref(NUpload), {
                          max: 1,
                          "default-upload": false,
                          onChange: handleFileChange
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NUploadDragger), null, {
                              default: withCtx(() => [
                                createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NP), {
                                  depth: "3",
                                  style: { "margin": "8px 0 0 0" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("M\xE1ximo 1 imagen.")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), null, {
                      default: withCtx(() => [
                        isEditing.value ? (openBlock(), createBlock(unref(Button), {
                          key: 0,
                          onClick: confirmDelete
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Eliminar")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(Button), {
                          type: "primary",
                          "attr-type": "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Guardar")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NForm), {
                model: form.value,
                onSubmit: withModifiers(submitForm, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(NFormItem), {
                    label: "T\xEDtulo",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: form.value.Titulo,
                        "onUpdate:value": ($event) => form.value.Titulo = $event,
                        placeholder: "T\xEDtulo de la propiedad"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), {
                    label: "Descripci\xF3n",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: form.value.Descripcion,
                        "onUpdate:value": ($event) => form.value.Descripcion = $event,
                        type: "textarea",
                        placeholder: "Descripci\xF3n de la propiedad"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), { label: "Imagen principal" }, {
                    default: withCtx(() => [
                      createVNode(unref(NUpload), {
                        max: 1,
                        "default-upload": false,
                        onChange: handleFileChange
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NUploadDragger), null, {
                            default: withCtx(() => [
                              createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                default: withCtx(() => [
                                  createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NP), {
                                depth: "3",
                                style: { "margin": "8px 0 0 0" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("M\xE1ximo 1 imagen.")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), null, {
                    default: withCtx(() => [
                      isEditing.value ? (openBlock(), createBlock(unref(Button), {
                        key: 0,
                        onClick: confirmDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Eliminar")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(unref(Button), {
                        type: "primary",
                        "attr-type": "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Guardar")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/ProfileSettings.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileSettings = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-132b007c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfileActivity",
  __ssrInlineRender: true,
  setup(__props) {
    const propiedades = ref([]);
    const showModal = ref(false);
    const isEditing = ref(false);
    const editingDocumentId = ref(null);
    const form = ref({ Titulo: "", Descripcion: "", FotoPrincipal: null });
    const currentUser = ref(null);
    const notification = useNotification();
    const dialog = useDialog();
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
      } catch (e) {
        console.error("Error cargando propiedades:", e);
      }
    }
    function handleFileChange({ file }) {
      form.value.FotoPrincipal = file.file;
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
    function confirmDelete() {
      dialog.warning({
        title: "\xBFEliminar propiedad?",
        content: "Esta acci\xF3n no se puede deshacer.",
        positiveText: "Eliminar",
        negativeText: "Cancelar",
        onPositiveClick: () => deletePropiedad()
      });
    }
    async function deletePropiedad() {
      try {
        const token = localStorage.getItem("auth_token");
        if (!token || !editingDocumentId.value) return;
        const response = await fetch(`https://admin.triplotrip.com/api/propiedades/${editingDocumentId.value}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Error borrando propiedad: ${response.statusText}`);
        }
        propiedades.value = propiedades.value.filter((p) => p.documentId !== editingDocumentId.value);
        notification.success({ title: "Propiedad eliminada" });
        showModal.value = false;
        editingDocumentId.value = null;
        isEditing.value = false;
      } catch (err) {
        console.error(err);
        notification.error({ title: "Error", content: err.message || "No se pudo eliminar" });
      }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "activity" }, _attrs))} data-v-28af8daf><div class="mb-4 flex justify-end" data-v-28af8daf>`);
      _push(ssrRenderComponent(unref(Button), {
        type: "primary",
        onClick: openNewModal
      }, {
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
      _push(`</div><div class="masonry" data-v-28af8daf><!--[-->`);
      ssrRenderList(propiedades.value, (prop, index) => {
        _push(`<div class="card-wrap" data-v-28af8daf>`);
        _push(ssrRenderComponent(unref(NCard), {
          hoverable: "",
          class: "property-card"
        }, {
          cover: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="property-image"${ssrRenderAttr("alt", prop.Titulo || "Imagen")}${ssrRenderAttr("src", getImageUrl(prop.FotoPrincipal))} data-v-28af8daf${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "property-image",
                  alt: prop.Titulo || "Imagen",
                  src: getImageUrl(prop.FotoPrincipal)
                }, null, 8, ["alt", "src"])
              ];
            }
          }),
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-28af8daf${_scopeId}>${ssrInterpolate(prop.Titulo)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(prop.Titulo), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-28af8daf${_scopeId}>${ssrInterpolate(prop.Descripcion)}</p>`);
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
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "T\xEDtulo",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: form.value.Titulo,
                          "onUpdate:value": ($event) => form.value.Titulo = $event,
                          placeholder: "T\xEDtulo de la propiedad"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: form.value.Titulo,
                            "onUpdate:value": ($event) => form.value.Titulo = $event,
                            placeholder: "T\xEDtulo de la propiedad"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Descripci\xF3n",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: form.value.Descripcion,
                          "onUpdate:value": ($event) => form.value.Descripcion = $event,
                          type: "textarea",
                          placeholder: "Descripci\xF3n de la propiedad"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: form.value.Descripcion,
                            "onUpdate:value": ($event) => form.value.Descripcion = $event,
                            type: "textarea",
                            placeholder: "Descripci\xF3n de la propiedad"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), { label: "Imagen principal" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NUpload), {
                          max: 1,
                          "default-upload": false,
                          onChange: handleFileChange
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NUploadDragger), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(NText), { style: { "font-size": "16px" } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Click o arrastr\xE1 una imagen para subir`);
                                        } else {
                                          return [
                                            createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(NP), {
                                      depth: "3",
                                      style: { "margin": "8px 0 0 0" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`M\xE1ximo 1 imagen.`);
                                        } else {
                                          return [
                                            createTextVNode("M\xE1ximo 1 imagen.")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                        default: withCtx(() => [
                                          createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(NP), {
                                        depth: "3",
                                        style: { "margin": "8px 0 0 0" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("M\xE1ximo 1 imagen.")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NUploadDragger), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(NP), {
                                      depth: "3",
                                      style: { "margin": "8px 0 0 0" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("M\xE1ximo 1 imagen.")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NUpload), {
                            max: 1,
                            "default-upload": false,
                            onChange: handleFileChange
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NUploadDragger), null, {
                                default: withCtx(() => [
                                  createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(NP), {
                                    depth: "3",
                                    style: { "margin": "8px 0 0 0" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("M\xE1ximo 1 imagen.")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    type: "primary",
                    quaternary: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Details`);
                      } else {
                        return [
                          createTextVNode("Details")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (isEditing.value) {
                    _push3(ssrRenderComponent(unref(Button), {
                      size: "tiny",
                      onClick: confirmDelete
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Eliminar`);
                        } else {
                          return [
                            createTextVNode("Eliminar")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(Button), { type: "primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Guardar `);
                      } else {
                        return [
                          createTextVNode(" Guardar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NFormItem), {
                      label: "T\xEDtulo",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: form.value.Titulo,
                          "onUpdate:value": ($event) => form.value.Titulo = $event,
                          placeholder: "T\xEDtulo de la propiedad"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Descripci\xF3n",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: form.value.Descripcion,
                          "onUpdate:value": ($event) => form.value.Descripcion = $event,
                          type: "textarea",
                          placeholder: "Descripci\xF3n de la propiedad"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), { label: "Imagen principal" }, {
                      default: withCtx(() => [
                        createVNode(unref(NUpload), {
                          max: 1,
                          "default-upload": false,
                          onChange: handleFileChange
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NUploadDragger), null, {
                              default: withCtx(() => [
                                createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NP), {
                                  depth: "3",
                                  style: { "margin": "8px 0 0 0" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("M\xE1ximo 1 imagen.")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      type: "primary",
                      quaternary: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Details")
                      ]),
                      _: 1
                    }),
                    isEditing.value ? (openBlock(), createBlock(unref(Button), {
                      key: 0,
                      size: "tiny",
                      onClick: confirmDelete
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Eliminar")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(unref(Button), { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode(" Guardar ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NForm), {
                model: form.value,
                onSubmit: withModifiers(submitForm, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(NFormItem), {
                    label: "T\xEDtulo",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: form.value.Titulo,
                        "onUpdate:value": ($event) => form.value.Titulo = $event,
                        placeholder: "T\xEDtulo de la propiedad"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), {
                    label: "Descripci\xF3n",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: form.value.Descripcion,
                        "onUpdate:value": ($event) => form.value.Descripcion = $event,
                        type: "textarea",
                        placeholder: "Descripci\xF3n de la propiedad"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), { label: "Imagen principal" }, {
                    default: withCtx(() => [
                      createVNode(unref(NUpload), {
                        max: 1,
                        "default-upload": false,
                        onChange: handleFileChange
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NUploadDragger), null, {
                            default: withCtx(() => [
                              createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                                default: withCtx(() => [
                                  createTextVNode("Click o arrastr\xE1 una imagen para subir")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NP), {
                                depth: "3",
                                style: { "margin": "8px 0 0 0" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("M\xE1ximo 1 imagen.")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    type: "primary",
                    quaternary: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Details")
                    ]),
                    _: 1
                  }),
                  isEditing.value ? (openBlock(), createBlock(unref(Button), {
                    key: 0,
                    size: "tiny",
                    onClick: confirmDelete
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Eliminar")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(unref(Button), { type: "primary" }, {
                    default: withCtx(() => [
                      createTextVNode(" Guardar ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/ProfileActivity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProfileActivity = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-28af8daf"]]);
const MailIcon = "tabler:mail";
const EditIcon = "uil:image-edit";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const tabActive = ref("settings");
    const propic = ref("/images/avatar-200.jpg");
    const user = ref(null);
    const propiedades = ref([]);
    const error = ref(null);
    const notification = useNotification();
    async function setCroppedImage(result) {
      const canvas = result.canvas;
      const dataUrl = canvas.toDataURL();
      propic.value = dataUrl;
      try {
        const token = localStorage.getItem("auth_token");
        if (!token) throw new Error("No est\xE1s autenticado");
        const blob = await (await fetch(dataUrl)).blob();
        const formData = new FormData();
        formData.append("files", blob, "avatar.jpg");
        const uploadRes = await $fetch("https://admin.triplotrip.com/api/upload", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData
        });
        const uploaded = Array.isArray(uploadRes) ? uploadRes[0] : uploadRes;
        const avatarId = uploaded.id;
        const userRes = await $fetch("https://admin.triplotrip.com/api/users/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        await $fetch(`https://admin.triplotrip.com/api/users/${userRes.id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: { avatar: avatarId }
        });
        notification.success({
          title: "Imagen actualizada",
          content: "Tu foto de perfil fue guardada correctamente."
        });
        await loadUser();
      } catch (err) {
        console.error(err);
        notification.error({
          title: "Error al subir imagen",
          content: err.message || "Ocurri\xF3 un error"
        });
      }
    }
    async function loadUser() {
      var _a;
      try {
        const token = localStorage.getItem("auth_token");
        if (!token) {
          error.value = "No est\xE1s autenticado";
          return;
        }
        const currentUser = await $fetch("https://admin.triplotrip.com/api/users/me?populate=avatar", {
          headers: { Authorization: `Bearer ${token}` }
        });
        user.value = currentUser;
        propic.value = ((_a = currentUser.avatar) == null ? void 0 : _a.url) ? `https://admin.triplotrip.com${currentUser.avatar.url}` : "/images/avatar-200.jpg";
        const query = qs.stringify({
          filters: {
            owner: {
              documentId: {
                $eq: currentUser.documentId
              }
            }
          },
          populate: ["owner"]
        }, { encodeValuesOnly: true });
        const res = await $fetch(`https://admin.triplotrip.com/api/propiedades?${query}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        propiedades.value = res.data || [];
      } catch (e) {
        error.value = "Error cargando perfil: " + (e.message || e);
        console.error(e);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-140cffd8>`);
      _push(ssrRenderComponent(unref(NCard), {
        class: "header flex flex-col",
        "content-class": "p-0!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="user-info flex flex-wrap" data-v-140cffd8${_scopeId}><div class="propic" data-v-140cffd8${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NAvatar), {
              size: 100,
              src: propic.value,
              round: "",
              "img-props": { alt: "avatar" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ImageCropper, { onCrop: setCroppedImage }, {
              default: withCtx(({ openCropper }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, {
                    name: EditIcon,
                    size: 16,
                    class: "edit",
                    onClick: ($event) => openCropper()
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, {
                      name: EditIcon,
                      size: 16,
                      class: "edit",
                      onClick: ($event) => openCropper()
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="info flex grow flex-col justify-center" data-v-140cffd8${_scopeId}><div class="name" data-v-140cffd8${_scopeId}><h1 data-v-140cffd8${_scopeId}>${ssrInterpolate(((_a = user.value) == null ? void 0 : _a.name) || "Usuario")}</h1></div><div class="details flex flex-wrap" data-v-140cffd8${_scopeId}><div class="item" data-v-140cffd8${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NTooltip), { placement: "top" }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<div class="tooltip-wrap" data-v-140cffd8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$o, { name: MailIcon }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-140cffd8${_scopeId2}>${ssrInterpolate(((_a2 = user.value) == null ? void 0 : _a2.email) || "Sin email")}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tooltip-wrap" }, [
                      createVNode(_sfc_main$o, { name: MailIcon }),
                      createVNode("span", null, toDisplayString(((_b2 = user.value) == null ? void 0 : _b2.email) || "Sin email"), 1)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-140cffd8${_scopeId2}>Email</span>`);
                } else {
                  return [
                    createVNode("span", null, "Email")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="actions" data-v-140cffd8${_scopeId}>`);
            _push2(ssrRenderComponent(ImageCropper, { onCrop: setCroppedImage }, {
              default: withCtx(({ openCropper }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "large",
                    type: "primary",
                    onClick: ($event) => openCropper()
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Cambiar imagen`);
                      } else {
                        return [
                          createTextVNode("Cambiar imagen")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "large",
                      type: "primary",
                      onClick: ($event) => openCropper()
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cambiar imagen")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="section-selector" data-v-140cffd8${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NTabs), {
              value: tabActive.value,
              "onUpdate:value": ($event) => tabActive.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTab), { name: "settings" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Configuraci\xF3n`);
                      } else {
                        return [
                          createTextVNode("Configuraci\xF3n")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTab), { name: "activity" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Propiedades`);
                      } else {
                        return [
                          createTextVNode("Propiedades")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTab), { name: "settings" }, {
                      default: withCtx(() => [
                        createTextVNode("Configuraci\xF3n")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTab), { name: "activity" }, {
                      default: withCtx(() => [
                        createTextVNode("Propiedades")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "user-info flex flex-wrap" }, [
                createVNode("div", { class: "propic" }, [
                  createVNode(unref(NAvatar), {
                    size: 100,
                    src: propic.value,
                    round: "",
                    "img-props": { alt: "avatar" }
                  }, null, 8, ["src"]),
                  createVNode(ImageCropper, { onCrop: setCroppedImage }, {
                    default: withCtx(({ openCropper }) => [
                      createVNode(_sfc_main$o, {
                        name: EditIcon,
                        size: 16,
                        class: "edit",
                        onClick: ($event) => openCropper()
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "info flex grow flex-col justify-center" }, [
                  createVNode("div", { class: "name" }, [
                    createVNode("h1", null, toDisplayString(((_b = user.value) == null ? void 0 : _b.name) || "Usuario"), 1)
                  ]),
                  createVNode("div", { class: "details flex flex-wrap" }, [
                    createVNode("div", { class: "item" }, [
                      createVNode(unref(NTooltip), { placement: "top" }, {
                        trigger: withCtx(() => {
                          var _a2;
                          return [
                            createVNode("div", { class: "tooltip-wrap" }, [
                              createVNode(_sfc_main$o, { name: MailIcon }),
                              createVNode("span", null, toDisplayString(((_a2 = user.value) == null ? void 0 : _a2.email) || "Sin email"), 1)
                            ])
                          ];
                        }),
                        default: withCtx(() => [
                          createVNode("span", null, "Email")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "actions" }, [
                  createVNode(ImageCropper, { onCrop: setCroppedImage }, {
                    default: withCtx(({ openCropper }) => [
                      createVNode(unref(Button), {
                        size: "large",
                        type: "primary",
                        onClick: ($event) => openCropper()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cambiar imagen")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "section-selector" }, [
                createVNode(unref(NTabs), {
                  value: tabActive.value,
                  "onUpdate:value": ($event) => tabActive.value = $event
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NTab), { name: "settings" }, {
                      default: withCtx(() => [
                        createTextVNode("Configuraci\xF3n")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTab), { name: "activity" }, {
                      default: withCtx(() => [
                        createTextVNode("Propiedades")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value", "onUpdate:value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main" data-v-140cffd8>`);
      _push(ssrRenderComponent(unref(NTabs), {
        value: tabActive.value,
        "onUpdate:value": ($event) => tabActive.value = $event,
        "tab-class": "hidden!",
        animated: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTabPane), { name: "settings" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(ProfileSettings, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(ProfileSettings)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NTabPane), { name: "activity" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(ProfileActivity, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(ProfileActivity)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTabPane), { name: "settings" }, {
                default: withCtx(() => [
                  createVNode(ProfileSettings)
                ]),
                _: 1
              }),
              createVNode(unref(NTabPane), { name: "activity" }, {
                default: withCtx(() => [
                  createVNode(ProfileActivity)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (error.value) {
        _push(`<div style="${ssrRenderStyle({ "color": "red" })}" class="mt-4 text-center" data-v-140cffd8>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-140cffd8"]]);

export { Profile as default };
//# sourceMappingURL=Profile-62EfGiHQ.mjs.map
