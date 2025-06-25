import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import qs from 'qs';
import { a as _export_sfc, u as useNotification, B as Button, N as NCard, b as NModal, c as NText } from './server.mjs';
import { u as useDialog } from './composables-BaHNx5xN.mjs';
import { N as NForm, a as NFormItem } from './FormItem-BD_bmr5c.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { N as NUpload, a as NUploadDragger } from './Upload-BtnKw5D8.mjs';
import { N as NP } from './p-CRyTtbND.mjs';
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
import 'async-validator';
import './use-collection-Dfn99m8m.mjs';
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';
import './Progress-CTmj2S_J.mjs';
import './Image-CiL9m40l.mjs';
import './download-aNT-DO08.mjs';
import './Add-niv5NbQA.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-71a86f97><div class="page-header" data-v-71a86f97><div class="title" data-v-71a86f97>Propiedades</div></div><div class="main" data-v-71a86f97><div class="mb-4 flex" data-v-71a86f97>`);
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
      _push(`</div><div class="masonry" data-v-71a86f97><!--[-->`);
      ssrRenderList(propiedades.value, (prop, index) => {
        _push(`<div class="card-wrap" data-v-71a86f97>`);
        _push(ssrRenderComponent(unref(NCard), {
          hoverable: "",
          class: "property-card"
        }, {
          cover: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="property-image"${ssrRenderAttr("alt", prop.Titulo || "Imagen")}${ssrRenderAttr("src", getImageUrl(prop.FotoPrincipal))} data-v-71a86f97${_scopeId}>`);
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
              _push2(`<span data-v-71a86f97${_scopeId}>${ssrInterpolate(prop.Titulo)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(prop.Titulo), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-71a86f97${_scopeId}>${ssrInterpolate(prop.Descripcion)}</p>`);
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
const Propiedades = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71a86f97"]]);

export { Propiedades as default };
//# sourceMappingURL=Propiedades-8UKKSFPN.mjs.map
