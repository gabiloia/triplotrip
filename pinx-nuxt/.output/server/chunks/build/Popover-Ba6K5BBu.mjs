import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, a as _sfc_main$s, aI as NPopover, B as Button, a$ as NDivider } from './server.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import { N as NSwitch } from './Switch-Ds1OeKkl.mjs';
import './LtrContext-CQINXXZ7.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Popover",
  __ssrInlineRender: true,
  setup(__props) {
    const showPopover = ref(false);
    const overlap = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-db23ad9e><div class="page-header" data-v-db23ad9e><div class="title" data-v-db23ad9e>Popover</div><div class="links" data-v-db23ad9e><a href="https://www.naiveui.com/en-US/light/components/popover" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-db23ad9e>`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-db23ad9e>`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-popover trigger="hover">
							<template #trigger>
								<n-button>Hover</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="hover" :keep-alive-on-hover="false">
							<template #trigger>
								<n-button>Hover (ignore popup)</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="click">
							<template #trigger>
								<n-button>Click</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="focus">
							<template #trigger>
								<n-button>Focus</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="manual" :show="showPopover">
							<template #trigger>
								<n-button @click="showPopover = !showPopover">Manual</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const showPopover = ref(false)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-popover trigger="hover">
							<template #trigger>
								<n-button>Hover</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="hover" :keep-alive-on-hover="false">
							<template #trigger>
								<n-button>Hover (ignore popup)</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="click">
							<template #trigger>
								<n-button>Click</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="focus">
							<template #trigger>
								<n-button>Focus</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="manual" :show="showPopover">
							<template #trigger>
								<n-button @click="showPopover = !showPopover">Manual</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const showPopover = ref(false)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NPopover), { trigger: "hover" }, {
                    trigger: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Hover`);
                            } else {
                              return [
                                createTextVNode("Hover")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Hover")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-db23ad9e${_scopeId3}>I wish they all could be California girls</span>`);
                      } else {
                        return [
                          createVNode("span", null, "I wish they all could be California girls")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NPopover), {
                    trigger: "hover",
                    "keep-alive-on-hover": false
                  }, {
                    trigger: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Hover (ignore popup)`);
                            } else {
                              return [
                                createTextVNode("Hover (ignore popup)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Hover (ignore popup)")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-db23ad9e${_scopeId3}>I wish they all could be California girls</span>`);
                      } else {
                        return [
                          createVNode("span", null, "I wish they all could be California girls")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NPopover), { trigger: "click" }, {
                    trigger: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Click`);
                            } else {
                              return [
                                createTextVNode("Click")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Click")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-db23ad9e${_scopeId3}>I wish they all could be California girls</span>`);
                      } else {
                        return [
                          createVNode("span", null, "I wish they all could be California girls")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NPopover), { trigger: "focus" }, {
                    trigger: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Focus`);
                            } else {
                              return [
                                createTextVNode("Focus")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Focus")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-db23ad9e${_scopeId3}>I wish they all could be California girls</span>`);
                      } else {
                        return [
                          createVNode("span", null, "I wish they all could be California girls")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NPopover), {
                    trigger: "manual",
                    show: showPopover.value
                  }, {
                    trigger: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), {
                          onClick: ($event) => showPopover.value = !showPopover.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Manual`);
                            } else {
                              return [
                                createTextVNode("Manual")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), {
                            onClick: ($event) => showPopover.value = !showPopover.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Manual")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-db23ad9e${_scopeId3}>I wish they all could be California girls</span>`);
                      } else {
                        return [
                          createVNode("span", null, "I wish they all could be California girls")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NPopover), { trigger: "hover" }, {
                      trigger: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Hover")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "I wish they all could be California girls")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NPopover), {
                      trigger: "hover",
                      "keep-alive-on-hover": false
                    }, {
                      trigger: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Hover (ignore popup)")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "I wish they all could be California girls")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NPopover), { trigger: "click" }, {
                      trigger: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Click")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "I wish they all could be California girls")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NPopover), { trigger: "focus" }, {
                      trigger: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Focus")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "I wish they all could be California girls")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NPopover), {
                      trigger: "manual",
                      show: showPopover.value
                    }, {
                      trigger: withCtx(() => [
                        createVNode(unref(Button), {
                          onClick: ($event) => showPopover.value = !showPopover.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Manual")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "I wish they all could be California girls")
                      ]),
                      _: 1
                    }, 8, ["show"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NPopover), { trigger: "hover" }, {
                    trigger: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Hover")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("span", null, "I wish they all could be California girls")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NPopover), {
                    trigger: "hover",
                    "keep-alive-on-hover": false
                  }, {
                    trigger: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Hover (ignore popup)")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("span", null, "I wish they all could be California girls")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NPopover), { trigger: "click" }, {
                    trigger: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Click")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("span", null, "I wish they all could be California girls")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NPopover), { trigger: "focus" }, {
                    trigger: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Focus")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("span", null, "I wish they all could be California girls")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NPopover), {
                    trigger: "manual",
                    show: showPopover.value
                  }, {
                    trigger: withCtx(() => [
                      createVNode(unref(Button), {
                        onClick: ($event) => showPopover.value = !showPopover.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Manual")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode("span", null, "I wish they all could be California girls")
                    ]),
                    _: 1
                  }, 8, ["show"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Placement" }, {
        code: withCtx(({ html, js, css }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-switch v-model:value="overlap" />
					Overlap Trigger Element
					<n-divider />
					<div class="popover-grid">
						<n-popover :overlap="overlap" placement="top-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 1 / 2 / 2">Top Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="top" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 2 / 2 / 3">Top</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="top-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 3 / 2 / 4">Top End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 2 / 1 / 3 / 2">Left Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 3 / 1 / 4 / 2">Left</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 4 / 1 / 5 / 2">Left End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 2 / 3 / 3 / 4">Right Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 3 / 3 / 4 / 4">Right</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 4 / 3 / 5 / 4">Right End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 1 / 6 / 2">Bottom Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 2 / 6 / 3">Bottom</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 3 / 6 / 4">Bottom End</n-button>
							</template>
							<div class="large-text">Oops</div>
						</n-popover>
					</div>
					`))} ${ssrInterpolate(js(`
						const overlap = ref(false)
						`))} ${ssrInterpolate(css(`
						.popover-grid {
							display: grid;
							grid-template-columns: auto auto auto auto auto;
							grid-gap: 12px;
							justify-content: center;
							align-items: center;
						}
						.large-text {
							font-size: 48px;
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-switch v-model:value="overlap" />
					Overlap Trigger Element
					<n-divider />
					<div class="popover-grid">
						<n-popover :overlap="overlap" placement="top-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 1 / 2 / 2">Top Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="top" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 2 / 2 / 3">Top</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="top-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 3 / 2 / 4">Top End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 2 / 1 / 3 / 2">Left Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 3 / 1 / 4 / 2">Left</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 4 / 1 / 5 / 2">Left End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 2 / 3 / 3 / 4">Right Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 3 / 3 / 4 / 4">Right</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 4 / 3 / 5 / 4">Right End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 1 / 6 / 2">Bottom Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 2 / 6 / 3">Bottom</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 3 / 6 / 4">Bottom End</n-button>
							</template>
							<div class="large-text">Oops</div>
						</n-popover>
					</div>
					`)) + " " + toDisplayString(js(`
						const overlap = ref(false)
						`)) + " " + toDisplayString(css(`
						.popover-grid {
							display: grid;
							grid-template-columns: auto auto auto auto auto;
							grid-gap: 12px;
							justify-content: center;
							align-items: center;
						}
						.large-text {
							font-size: 48px;
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSwitch), {
              value: overlap.value,
              "onUpdate:value": ($event) => overlap.value = $event
            }, null, _parent2, _scopeId));
            _push2(` Overlap Trigger Element `);
            _push2(ssrRenderComponent(unref(NDivider), null, null, _parent2, _scopeId));
            _push2(`<div class="popover-grid" data-v-db23ad9e${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "top-start",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "1 / 1 / 2 / 2" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Top Start`);
                      } else {
                        return [
                          createTextVNode("Top Start")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "1 / 1 / 2 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Top Start")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "top",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "1 / 2 / 2 / 3" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Top`);
                      } else {
                        return [
                          createTextVNode("Top")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "1 / 2 / 2 / 3" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Top")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "top-end",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "1 / 3 / 2 / 4" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Top End`);
                      } else {
                        return [
                          createTextVNode("Top End")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "1 / 3 / 2 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Top End")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "left-start",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "2 / 1 / 3 / 2" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Left Start`);
                      } else {
                        return [
                          createTextVNode("Left Start")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "2 / 1 / 3 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Left Start")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "left",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "3 / 1 / 4 / 2" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Left`);
                      } else {
                        return [
                          createTextVNode("Left")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "3 / 1 / 4 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Left")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "left-end",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "4 / 1 / 5 / 2" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Left End`);
                      } else {
                        return [
                          createTextVNode("Left End")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "4 / 1 / 5 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Left End")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "right-start",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "2 / 3 / 3 / 4" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Right Start`);
                      } else {
                        return [
                          createTextVNode("Right Start")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "2 / 3 / 3 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Right Start")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "right",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "3 / 3 / 4 / 4" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Right`);
                      } else {
                        return [
                          createTextVNode("Right")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "3 / 3 / 4 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Right")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "right-end",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "4 / 3 / 5 / 4" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Right End`);
                      } else {
                        return [
                          createTextVNode("Right End")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "4 / 3 / 5 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Right End")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "bottom-start",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "5 / 1 / 6 / 2" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bottom Start`);
                      } else {
                        return [
                          createTextVNode("Bottom Start")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "5 / 1 / 6 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bottom Start")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "bottom",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "5 / 2 / 6 / 3" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bottom`);
                      } else {
                        return [
                          createTextVNode("Bottom")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "5 / 2 / 6 / 3" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bottom")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops!</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NPopover), {
              overlap: overlap.value,
              placement: "bottom-end",
              trigger: "click"
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    style: { "grid-area": "5 / 3 / 6 / 4" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bottom End`);
                      } else {
                        return [
                          createTextVNode("Bottom End")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "5 / 3 / 6 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bottom End")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="large-text" data-v-db23ad9e${_scopeId2}>Oops</div>`);
                } else {
                  return [
                    createVNode("div", { class: "large-text" }, "Oops")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(NSwitch), {
                value: overlap.value,
                "onUpdate:value": ($event) => overlap.value = $event
              }, null, 8, ["value", "onUpdate:value"]),
              createTextVNode(" Overlap Trigger Element "),
              createVNode(unref(NDivider)),
              createVNode("div", { class: "popover-grid" }, [
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "top-start",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "1 / 1 / 2 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Top Start")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "top",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "1 / 2 / 2 / 3" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Top")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "top-end",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "1 / 3 / 2 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Top End")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "left-start",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "2 / 1 / 3 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Left Start")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "left",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "3 / 1 / 4 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Left")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "left-end",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "4 / 1 / 5 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Left End")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "right-start",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "2 / 3 / 3 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Right Start")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "right",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "3 / 3 / 4 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Right")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "right-end",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "4 / 3 / 5 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Right End")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "bottom-start",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "5 / 1 / 6 / 2" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bottom Start")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "bottom",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "5 / 2 / 6 / 3" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bottom")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops!")
                  ]),
                  _: 1
                }, 8, ["overlap"]),
                createVNode(unref(NPopover), {
                  overlap: overlap.value,
                  placement: "bottom-end",
                  trigger: "click"
                }, {
                  trigger: withCtx(() => [
                    createVNode(unref(Button), {
                      size: "small",
                      style: { "grid-area": "5 / 3 / 6 / 4" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bottom End")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "large-text" }, "Oops")
                  ]),
                  _: 1
                }, 8, ["overlap"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Popover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Popover = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db23ad9e"]]);

export { Popover as default };
//# sourceMappingURL=Popover-Ba6K5BBu.mjs.map
