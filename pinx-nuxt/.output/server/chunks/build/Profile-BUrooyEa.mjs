import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, computed, toDisplayString, createBlock, createCommentVNode, openBlock, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, N as NCard, c as NAvatar, a as _sfc_main$s, d as NTooltip, B as Button, b as NModal } from './server.mjs';
import { CircleStencil, RectangleStencil, Cropper } from 'vue-advanced-cropper';
import { N as NUpload, a as NUploadDragger } from './Upload-BJgPeTqu.mjs';
import { _ as __nuxt_component_8 } from './CardSocial1-BjrmhObj.mjs';
import { N as NForm, a as NFormItem } from './FormItem-DAK_fF_C.mjs';
import { N as NInput } from './Input-DOxGe8j0.mjs';
import { N as NTabs, a as NTab, b as NTabPane } from './Tabs-CFVrpWKa.mjs';
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
import './Progress-iOzX4hFw.mjs';
import './Image-CRKx2FUb.mjs';
import './download-aNT-DO08.mjs';
import './Eye-DafrR3c8.mjs';
import './Add-niv5NbQA.mjs';
import '@faker-js/faker';
import './Time-BGDkyjxP.mjs';
import './index-CulsySW9.mjs';
import './getDefaultOptions-Badlq585.mjs';
import 'async-validator';
import './use-collection-Dfn99m8m.mjs';
import './Suffix-DBR_9G3J.mjs';

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
const cardCount = 30;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProfileActivity",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = ref([]);
    for (let i = 0; i < cardCount; i++) {
      const type = i % 3;
      switch (type) {
        case 0:
          cards.value.push({
            showImage: true,
            hideText: void 0,
            showComments: true,
            like: void 0
          });
          break;
        case 1:
          cards.value.push({
            showImage: void 0,
            hideText: void 0,
            showComments: void 0,
            like: true
          });
          break;
        case 2:
          cards.value.push({
            showImage: true,
            hideText: true,
            showComments: void 0,
            like: true
          });
          break;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "activity" }, _attrs))} data-v-bde1802a><div class="masonry" data-v-bde1802a><!--[-->`);
      ssrRenderList(cards.value, (card, index) => {
        _push(`<div class="card-wrap" data-v-bde1802a>`);
        _push(ssrRenderComponent(__nuxt_component_8, {
          "hide-text": card.hideText,
          "show-image": card.showImage,
          like: card.like,
          "show-comments": card.showComments
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/ProfileActivity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileActivity = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bde1802a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfileSettings",
  __ssrInlineRender: true,
  setup(__props) {
    const formValue = ref({
      username: "sigmund67",
      email: "sigmund67@gmail.com",
      name: "Margie Dibbert",
      location: "New York No. 1 Lake Park",
      bio: "",
      website: "",
      twitter: "",
      facebook: "",
      google: "",
      instagram: "",
      threads: "",
      github: ""
    });
    const refForm = ref();
    const formRules = {
      username: {
        required: true,
        message: "Please input username",
        trigger: "blur"
      },
      email: {
        required: true,
        message: "Please input email",
        trigger: "blur"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({ class: "settings" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NForm), {
              ref_key: "refForm",
              ref: refForm,
              "label-width": 80,
              model: formValue.value,
              rules: formRules
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="title" data-v-e1f64805${_scopeId2}>General</div><div class="flex flex-col justify-between md:flex-row md:gap-4" data-v-e1f64805${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Username",
                    path: "username",
                    class: "basis-1/2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.username,
                          "onUpdate:value": ($event) => formValue.value.username = $event,
                          placeholder: "Type username"
                        }, {
                          prefix: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`@`);
                            } else {
                              return [
                                createTextVNode("@")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.username,
                            "onUpdate:value": ($event) => formValue.value.username = $event,
                            placeholder: "Type username"
                          }, {
                            prefix: withCtx(() => [
                              createTextVNode("@")
                            ]),
                            _: 1
                          }, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Email",
                    path: "email",
                    class: "basis-1/2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.email,
                          "onUpdate:value": ($event) => formValue.value.email = $event,
                          placeholder: "Type email"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.email,
                            "onUpdate:value": ($event) => formValue.value.email = $event,
                            placeholder: "Type email"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="title" data-v-e1f64805${_scopeId2}>Profile</div>`);
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Fullname",
                    path: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.name,
                          "onUpdate:value": ($event) => formValue.value.name = $event,
                          placeholder: "Type Fullname"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.name,
                            "onUpdate:value": ($event) => formValue.value.name = $event,
                            placeholder: "Type Fullname"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col justify-between md:flex-row md:gap-4" data-v-e1f64805${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Location",
                    path: "location",
                    class: "basis-1/2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.location,
                          "onUpdate:value": ($event) => formValue.value.location = $event,
                          placeholder: "Type location"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.location,
                            "onUpdate:value": ($event) => formValue.value.location = $event,
                            placeholder: "Type location"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Website",
                    path: "website",
                    class: "basis-1/2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.website,
                          "onUpdate:value": ($event) => formValue.value.website = $event,
                          placeholder: "Type website"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.website,
                            "onUpdate:value": ($event) => formValue.value.website = $event,
                            placeholder: "Type website"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Bio",
                    path: "bio"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.bio,
                          "onUpdate:value": ($event) => formValue.value.bio = $event,
                          type: "textarea",
                          placeholder: "Type bio"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.bio,
                            "onUpdate:value": ($event) => formValue.value.bio = $event,
                            type: "textarea",
                            placeholder: "Type bio"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="title" data-v-e1f64805${_scopeId2}>Social</div><div class="flex flex-col justify-between md:flex-row md:gap-4" data-v-e1f64805${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Twitter",
                    path: "twitter",
                    class: "basis-1/3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.twitter,
                          "onUpdate:value": ($event) => formValue.value.twitter = $event,
                          placeholder: "Type twitter"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.twitter,
                            "onUpdate:value": ($event) => formValue.value.twitter = $event,
                            placeholder: "Type twitter"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Facebook",
                    path: "facebook",
                    class: "basis-1/3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.facebook,
                          "onUpdate:value": ($event) => formValue.value.facebook = $event,
                          placeholder: "Type facebook"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.facebook,
                            "onUpdate:value": ($event) => formValue.value.facebook = $event,
                            placeholder: "Type facebook"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Google",
                    path: "google",
                    class: "basis-1/3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.google,
                          "onUpdate:value": ($event) => formValue.value.google = $event,
                          placeholder: "Type google"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.google,
                            "onUpdate:value": ($event) => formValue.value.google = $event,
                            placeholder: "Type google"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col justify-between md:flex-row md:gap-4" data-v-e1f64805${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Instagram",
                    path: "instagram",
                    class: "basis-1/3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.instagram,
                          "onUpdate:value": ($event) => formValue.value.instagram = $event,
                          placeholder: "Type instagram"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.instagram,
                            "onUpdate:value": ($event) => formValue.value.instagram = $event,
                            placeholder: "Type instagram"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Github",
                    path: "github",
                    class: "basis-1/3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.github,
                          "onUpdate:value": ($event) => formValue.value.github = $event,
                          placeholder: "Type github"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.github,
                            "onUpdate:value": ($event) => formValue.value.github = $event,
                            placeholder: "Type github"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Threads",
                    path: "threads",
                    class: "basis-1/3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.threads,
                          "onUpdate:value": ($event) => formValue.value.threads = $event,
                          placeholder: "Type threads"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.threads,
                            "onUpdate:value": ($event) => formValue.value.threads = $event,
                            placeholder: "Type threads"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(NFormItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { type: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Save`);
                            } else {
                              return [
                                createTextVNode("Save")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { type: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode("Save")
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
                    createVNode("div", { class: "title" }, "General"),
                    createVNode("div", { class: "flex flex-col justify-between md:flex-row md:gap-4" }, [
                      createVNode(unref(NFormItem), {
                        label: "Username",
                        path: "username",
                        class: "basis-1/2"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.username,
                            "onUpdate:value": ($event) => formValue.value.username = $event,
                            placeholder: "Type username"
                          }, {
                            prefix: withCtx(() => [
                              createTextVNode("@")
                            ]),
                            _: 1
                          }, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NFormItem), {
                        label: "Email",
                        path: "email",
                        class: "basis-1/2"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.email,
                            "onUpdate:value": ($event) => formValue.value.email = $event,
                            placeholder: "Type email"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "title" }, "Profile"),
                    createVNode(unref(NFormItem), {
                      label: "Fullname",
                      path: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.name,
                          "onUpdate:value": ($event) => formValue.value.name = $event,
                          placeholder: "Type Fullname"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col justify-between md:flex-row md:gap-4" }, [
                      createVNode(unref(NFormItem), {
                        label: "Location",
                        path: "location",
                        class: "basis-1/2"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.location,
                            "onUpdate:value": ($event) => formValue.value.location = $event,
                            placeholder: "Type location"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NFormItem), {
                        label: "Website",
                        path: "website",
                        class: "basis-1/2"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.website,
                            "onUpdate:value": ($event) => formValue.value.website = $event,
                            placeholder: "Type website"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(NFormItem), {
                      label: "Bio",
                      path: "bio"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.bio,
                          "onUpdate:value": ($event) => formValue.value.bio = $event,
                          type: "textarea",
                          placeholder: "Type bio"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "title" }, "Social"),
                    createVNode("div", { class: "flex flex-col justify-between md:flex-row md:gap-4" }, [
                      createVNode(unref(NFormItem), {
                        label: "Twitter",
                        path: "twitter",
                        class: "basis-1/3"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.twitter,
                            "onUpdate:value": ($event) => formValue.value.twitter = $event,
                            placeholder: "Type twitter"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NFormItem), {
                        label: "Facebook",
                        path: "facebook",
                        class: "basis-1/3"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.facebook,
                            "onUpdate:value": ($event) => formValue.value.facebook = $event,
                            placeholder: "Type facebook"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NFormItem), {
                        label: "Google",
                        path: "google",
                        class: "basis-1/3"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.google,
                            "onUpdate:value": ($event) => formValue.value.google = $event,
                            placeholder: "Type google"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-col justify-between md:flex-row md:gap-4" }, [
                      createVNode(unref(NFormItem), {
                        label: "Instagram",
                        path: "instagram",
                        class: "basis-1/3"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.instagram,
                            "onUpdate:value": ($event) => formValue.value.instagram = $event,
                            placeholder: "Type instagram"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NFormItem), {
                        label: "Github",
                        path: "github",
                        class: "basis-1/3"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.github,
                            "onUpdate:value": ($event) => formValue.value.github = $event,
                            placeholder: "Type github"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NFormItem), {
                        label: "Threads",
                        path: "threads",
                        class: "basis-1/3"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formValue.value.threads,
                            "onUpdate:value": ($event) => formValue.value.threads = $event,
                            placeholder: "Type threads"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(NFormItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { type: "primary" }, {
                          default: withCtx(() => [
                            createTextVNode("Save")
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
                ref_key: "refForm",
                ref: refForm,
                "label-width": 80,
                model: formValue.value,
                rules: formRules
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "title" }, "General"),
                  createVNode("div", { class: "flex flex-col justify-between md:flex-row md:gap-4" }, [
                    createVNode(unref(NFormItem), {
                      label: "Username",
                      path: "username",
                      class: "basis-1/2"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.username,
                          "onUpdate:value": ($event) => formValue.value.username = $event,
                          placeholder: "Type username"
                        }, {
                          prefix: withCtx(() => [
                            createTextVNode("@")
                          ]),
                          _: 1
                        }, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Email",
                      path: "email",
                      class: "basis-1/2"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.email,
                          "onUpdate:value": ($event) => formValue.value.email = $event,
                          placeholder: "Type email"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "title" }, "Profile"),
                  createVNode(unref(NFormItem), {
                    label: "Fullname",
                    path: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: formValue.value.name,
                        "onUpdate:value": ($event) => formValue.value.name = $event,
                        placeholder: "Type Fullname"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col justify-between md:flex-row md:gap-4" }, [
                    createVNode(unref(NFormItem), {
                      label: "Location",
                      path: "location",
                      class: "basis-1/2"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.location,
                          "onUpdate:value": ($event) => formValue.value.location = $event,
                          placeholder: "Type location"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Website",
                      path: "website",
                      class: "basis-1/2"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.website,
                          "onUpdate:value": ($event) => formValue.value.website = $event,
                          placeholder: "Type website"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(unref(NFormItem), {
                    label: "Bio",
                    path: "bio"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: formValue.value.bio,
                        "onUpdate:value": ($event) => formValue.value.bio = $event,
                        type: "textarea",
                        placeholder: "Type bio"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "title" }, "Social"),
                  createVNode("div", { class: "flex flex-col justify-between md:flex-row md:gap-4" }, [
                    createVNode(unref(NFormItem), {
                      label: "Twitter",
                      path: "twitter",
                      class: "basis-1/3"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.twitter,
                          "onUpdate:value": ($event) => formValue.value.twitter = $event,
                          placeholder: "Type twitter"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Facebook",
                      path: "facebook",
                      class: "basis-1/3"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.facebook,
                          "onUpdate:value": ($event) => formValue.value.facebook = $event,
                          placeholder: "Type facebook"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Google",
                      path: "google",
                      class: "basis-1/3"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.google,
                          "onUpdate:value": ($event) => formValue.value.google = $event,
                          placeholder: "Type google"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between md:flex-row md:gap-4" }, [
                    createVNode(unref(NFormItem), {
                      label: "Instagram",
                      path: "instagram",
                      class: "basis-1/3"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.instagram,
                          "onUpdate:value": ($event) => formValue.value.instagram = $event,
                          placeholder: "Type instagram"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Github",
                      path: "github",
                      class: "basis-1/3"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.github,
                          "onUpdate:value": ($event) => formValue.value.github = $event,
                          placeholder: "Type github"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Threads",
                      path: "threads",
                      class: "basis-1/3"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.threads,
                          "onUpdate:value": ($event) => formValue.value.threads = $event,
                          placeholder: "Type threads"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(unref(NFormItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { type: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("Save")
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/ProfileSettings.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProfileSettings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1f64805"]]);
const RoleIcon = "tabler:user";
const LocationIcon = "tabler:map-pin";
const EditIcon = "uil:image-edit";
const MailIcon = "tabler:mail";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const tabActive = ref("activity");
    const propic = ref("/images/avatar-200.jpg");
    function setCroppedImage(result) {
      const canvas = result.canvas;
      propic.value = canvas.toDataURL();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-8a630bd4>`);
      _push(ssrRenderComponent(unref(NCard), {
        class: "header flex flex-col",
        "content-class": "p-0!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="user-info flex flex-wrap" data-v-8a630bd4${_scopeId}><div class="propic" data-v-8a630bd4${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NAvatar), {
              size: 100,
              src: propic.value,
              round: "",
              "img-props": { alt: "avatar" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ImageCropper, {
              placeholder: "Select your profile picture",
              onCrop: setCroppedImage
            }, {
              default: withCtx(({ openCropper }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    name: EditIcon,
                    size: 16,
                    class: "edit",
                    onClick: ($event) => openCropper()
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
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
            _push2(`</div><div class="info flex grow flex-col justify-center" data-v-8a630bd4${_scopeId}><div class="name" data-v-8a630bd4${_scopeId}><h1 data-v-8a630bd4${_scopeId}>Margie Dibbert</h1></div><div class="details flex flex-wrap" data-v-8a630bd4${_scopeId}><div class="item" data-v-8a630bd4${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NTooltip), { placement: "top" }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tooltip-wrap" data-v-8a630bd4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$s, { name: RoleIcon }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-8a630bd4${_scopeId2}>Editor</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tooltip-wrap" }, [
                      createVNode(_sfc_main$s, { name: RoleIcon }),
                      createVNode("span", null, "Editor")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-8a630bd4${_scopeId2}>Role</span>`);
                } else {
                  return [
                    createVNode("span", null, "Role")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="item" data-v-8a630bd4${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NTooltip), { placement: "top" }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tooltip-wrap" data-v-8a630bd4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$s, { name: LocationIcon }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-8a630bd4${_scopeId2}>New York No. 1 Lake Park</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tooltip-wrap" }, [
                      createVNode(_sfc_main$s, { name: LocationIcon }),
                      createVNode("span", null, "New York No. 1 Lake Park")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-8a630bd4${_scopeId2}>Location</span>`);
                } else {
                  return [
                    createVNode("span", null, "Location")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="item" data-v-8a630bd4${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NTooltip), { placement: "top" }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tooltip-wrap" data-v-8a630bd4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$s, { name: MailIcon }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-8a630bd4${_scopeId2}>sigmund67@gmail.com</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tooltip-wrap" }, [
                      createVNode(_sfc_main$s, { name: MailIcon }),
                      createVNode("span", null, "sigmund67@gmail.com")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-8a630bd4${_scopeId2}>Contacts</span>`);
                } else {
                  return [
                    createVNode("span", null, "Contacts")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="actions" data-v-8a630bd4${_scopeId}>`);
            _push2(ssrRenderComponent(ImageCropper, {
              placeholder: "Select your profile picture",
              onCrop: setCroppedImage
            }, {
              default: withCtx(({ openCropper }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "large",
                    type: "primary",
                    onClick: ($event) => openCropper()
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Edit profile image`);
                      } else {
                        return [
                          createTextVNode("Edit profile image")
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
                        createTextVNode("Edit profile image")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="section-selector" data-v-8a630bd4${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NTabs), {
              value: tabActive.value,
              "onUpdate:value": ($event) => tabActive.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTab), { name: "activity" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Activity`);
                      } else {
                        return [
                          createTextVNode("Activity")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTab), { name: "settings" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Settings`);
                      } else {
                        return [
                          createTextVNode("Settings")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTab), { name: "activity" }, {
                      default: withCtx(() => [
                        createTextVNode("Activity")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTab), { name: "settings" }, {
                      default: withCtx(() => [
                        createTextVNode("Settings")
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
                  createVNode(ImageCropper, {
                    placeholder: "Select your profile picture",
                    onCrop: setCroppedImage
                  }, {
                    default: withCtx(({ openCropper }) => [
                      createVNode(_sfc_main$s, {
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
                    createVNode("h1", null, "Margie Dibbert")
                  ]),
                  createVNode("div", { class: "details flex flex-wrap" }, [
                    createVNode("div", { class: "item" }, [
                      createVNode(unref(NTooltip), { placement: "top" }, {
                        trigger: withCtx(() => [
                          createVNode("div", { class: "tooltip-wrap" }, [
                            createVNode(_sfc_main$s, { name: RoleIcon }),
                            createVNode("span", null, "Editor")
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode("span", null, "Role")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "item" }, [
                      createVNode(unref(NTooltip), { placement: "top" }, {
                        trigger: withCtx(() => [
                          createVNode("div", { class: "tooltip-wrap" }, [
                            createVNode(_sfc_main$s, { name: LocationIcon }),
                            createVNode("span", null, "New York No. 1 Lake Park")
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode("span", null, "Location")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "item" }, [
                      createVNode(unref(NTooltip), { placement: "top" }, {
                        trigger: withCtx(() => [
                          createVNode("div", { class: "tooltip-wrap" }, [
                            createVNode(_sfc_main$s, { name: MailIcon }),
                            createVNode("span", null, "sigmund67@gmail.com")
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode("span", null, "Contacts")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "actions" }, [
                  createVNode(ImageCropper, {
                    placeholder: "Select your profile picture",
                    onCrop: setCroppedImage
                  }, {
                    default: withCtx(({ openCropper }) => [
                      createVNode(unref(Button), {
                        size: "large",
                        type: "primary",
                        onClick: ($event) => openCropper()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Edit profile image")
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
                    createVNode(unref(NTab), { name: "activity" }, {
                      default: withCtx(() => [
                        createTextVNode("Activity")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTab), { name: "settings" }, {
                      default: withCtx(() => [
                        createTextVNode("Settings")
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
      _push(`<div class="main" data-v-8a630bd4>`);
      _push(ssrRenderComponent(unref(NTabs), {
        value: tabActive.value,
        "onUpdate:value": ($event) => tabActive.value = $event,
        "tab-class": "hidden!",
        animated: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
          } else {
            return [
              createVNode(unref(NTabPane), { name: "activity" }, {
                default: withCtx(() => [
                  createVNode(ProfileActivity)
                ]),
                _: 1
              }),
              createVNode(unref(NTabPane), { name: "settings" }, {
                default: withCtx(() => [
                  createVNode(ProfileSettings)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8a630bd4"]]);

export { Profile as default };
//# sourceMappingURL=Profile-BUrooyEa.mjs.map
