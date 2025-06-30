import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createBlock, createCommentVNode, openBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, bo as NBadge, d as NAvatar, B as Button, c as NText } from './server.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NButtonGroup } from './ButtonGroup-B1rpYDNl.mjs';
import { N as NCheckbox } from './Checkbox-DOjB2S1h.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-S6SsK5xW.mjs';
import 'seemly';
import 'vooks';
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
import 'qs';
import '@css-render/vue3-ssr';
import 'deep-pick-omit';
import 'colord';
import 'lodash/get.js';
import '@vueuse/core';
import 'lodash/set.js';
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
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const Add = "ion:add";
const Remove = "ion:remove";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(5);
    const raw = ref(false);
    const processing = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Badge</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/badge" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space :size="24" align="center">
						<n-badge :value="value" :max="15" :processing="processing">
							<n-avatar :img-props="{ alt: 'avatar' }" v-if="!raw" />
						</n-badge>
						<n-badge :value="value" dot :processing="processing">
							<n-avatar :img-props="{ alt: 'avatar' }" v-if="!raw" />
						</n-badge>
						<n-button-group>
							<n-button @click="value = Math.min(16, value + 1)">
								<template #icon>
									<n-icon><add /></n-icon>
								</template>
							</n-button>
							<n-button @click="value = Math.max(0, value - 1)">
								<template #icon>
									<n-icon><remove /></n-icon>
								</template>
							</n-button>
						</n-button-group>
						<n-checkbox v-model:checked="raw">Raw</n-checkbox>
						<n-checkbox v-model:checked="processing">Processing</n-checkbox>
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { Add, Remove } from "@vicons/ionicons5"
						const value = ref(5)
						const raw = ref(false)
						const processing = ref(false)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space :size="24" align="center">
						<n-badge :value="value" :max="15" :processing="processing">
							<n-avatar :img-props="{ alt: 'avatar' }" v-if="!raw" />
						</n-badge>
						<n-badge :value="value" dot :processing="processing">
							<n-avatar :img-props="{ alt: 'avatar' }" v-if="!raw" />
						</n-badge>
						<n-button-group>
							<n-button @click="value = Math.min(16, value + 1)">
								<template #icon>
									<n-icon><add /></n-icon>
								</template>
							</n-button>
							<n-button @click="value = Math.max(0, value - 1)">
								<template #icon>
									<n-icon><remove /></n-icon>
								</template>
							</n-button>
						</n-button-group>
						<n-checkbox v-model:checked="raw">Raw</n-checkbox>
						<n-checkbox v-model:checked="processing">Processing</n-checkbox>
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { Add, Remove } from "@vicons/ionicons5"
						const value = ref(5)
						const raw = ref(false)
						const processing = ref(false)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), {
              size: 24,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NBadge), {
                    value: value.value,
                    max: 15,
                    processing: processing.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!raw.value) {
                          _push4(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          !raw.value ? (openBlock(), createBlock(unref(NAvatar), {
                            key: 0,
                            "img-props": { alt: "avatar" }
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NBadge), {
                    value: value.value,
                    dot: "",
                    processing: processing.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!raw.value) {
                          _push4(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          !raw.value ? (openBlock(), createBlock(unref(NAvatar), {
                            key: 0,
                            "img-props": { alt: "avatar" }
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NButtonGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), {
                          onClick: ($event) => value.value = Math.min(16, value.value + 1)
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: Add }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: Add })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), {
                          onClick: ($event) => value.value = Math.max(0, value.value - 1)
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: Remove }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: Remove })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), {
                            onClick: ($event) => value.value = Math.min(16, value.value + 1)
                          }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: Add })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(unref(Button), {
                            onClick: ($event) => value.value = Math.max(0, value.value - 1)
                          }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: Remove })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: raw.value,
                    "onUpdate:checked": ($event) => raw.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Raw`);
                      } else {
                        return [
                          createTextVNode("Raw")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: processing.value,
                    "onUpdate:checked": ($event) => processing.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Processing`);
                      } else {
                        return [
                          createTextVNode("Processing")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NBadge), {
                      value: value.value,
                      max: 15,
                      processing: processing.value
                    }, {
                      default: withCtx(() => [
                        !raw.value ? (openBlock(), createBlock(unref(NAvatar), {
                          key: 0,
                          "img-props": { alt: "avatar" }
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["value", "processing"]),
                    createVNode(unref(NBadge), {
                      value: value.value,
                      dot: "",
                      processing: processing.value
                    }, {
                      default: withCtx(() => [
                        !raw.value ? (openBlock(), createBlock(unref(NAvatar), {
                          key: 0,
                          "img-props": { alt: "avatar" }
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["value", "processing"]),
                    createVNode(unref(NButtonGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), {
                          onClick: ($event) => value.value = Math.min(16, value.value + 1)
                        }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: Add })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(unref(Button), {
                          onClick: ($event) => value.value = Math.max(0, value.value - 1)
                        }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: Remove })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCheckbox), {
                      checked: raw.value,
                      "onUpdate:checked": ($event) => raw.value = $event
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Raw")
                      ]),
                      _: 1
                    }, 8, ["checked", "onUpdate:checked"]),
                    createVNode(unref(NCheckbox), {
                      checked: processing.value,
                      "onUpdate:checked": ($event) => processing.value = $event
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Processing")
                      ]),
                      _: 1
                    }, 8, ["checked", "onUpdate:checked"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), {
                size: 24,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NBadge), {
                    value: value.value,
                    max: 15,
                    processing: processing.value
                  }, {
                    default: withCtx(() => [
                      !raw.value ? (openBlock(), createBlock(unref(NAvatar), {
                        key: 0,
                        "img-props": { alt: "avatar" }
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["value", "processing"]),
                  createVNode(unref(NBadge), {
                    value: value.value,
                    dot: "",
                    processing: processing.value
                  }, {
                    default: withCtx(() => [
                      !raw.value ? (openBlock(), createBlock(unref(NAvatar), {
                        key: 0,
                        "img-props": { alt: "avatar" }
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["value", "processing"]),
                  createVNode(unref(NButtonGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), {
                        onClick: ($event) => value.value = Math.min(16, value.value + 1)
                      }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: Add })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(unref(Button), {
                        onClick: ($event) => value.value = Math.max(0, value.value - 1)
                      }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: Remove })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCheckbox), {
                    checked: raw.value,
                    "onUpdate:checked": ($event) => raw.value = $event
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Raw")
                    ]),
                    _: 1
                  }, 8, ["checked", "onUpdate:checked"]),
                  createVNode(unref(NCheckbox), {
                    checked: processing.value,
                    "onUpdate:checked": ($event) => processing.value = $event
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Processing")
                    ]),
                    _: 1
                  }, 8, ["checked", "onUpdate:checked"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Type" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Badge has `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`default`);
                } else {
                  return [
                    createTextVNode("default")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`error`);
                } else {
                  return [
                    createTextVNode("error")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`info`);
                } else {
                  return [
                    createTextVNode("info")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`success`);
                } else {
                  return [
                    createTextVNode("success")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`warning`);
                } else {
                  return [
                    createTextVNode("warning")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` types. `);
          } else {
            return [
              createTextVNode(" Badge has "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("default")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("error")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("info")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("success")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("warning")
                ]),
                _: 1
              }),
              createTextVNode(" types. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space :size="24" align="center">
						<n-badge dot>
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="error">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="info">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="success">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="warning">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space :size="24" align="center">
						<n-badge dot>
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="error">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="info">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="success">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="warning">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), {
              size: 24,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NBadge), { dot: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NBadge), {
                    dot: "",
                    type: "error"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NBadge), {
                    dot: "",
                    type: "info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NBadge), {
                    dot: "",
                    type: "success"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NBadge), {
                    dot: "",
                    type: "warning"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NBadge), { dot: "" }, {
                      default: withCtx(() => [
                        createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NBadge), {
                      dot: "",
                      type: "error"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NBadge), {
                      dot: "",
                      type: "info"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NBadge), {
                      dot: "",
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NBadge), {
                      dot: "",
                      type: "warning"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
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
              createVNode(unref(NSpace), {
                size: 24,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NBadge), { dot: "" }, {
                    default: withCtx(() => [
                      createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NBadge), {
                    dot: "",
                    type: "error"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NBadge), {
                    dot: "",
                    type: "info"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NBadge), {
                    dot: "",
                    type: "success"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NBadge), {
                    dot: "",
                    type: "warning"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } })
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
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Badge-C0EJ6644.mjs.map
