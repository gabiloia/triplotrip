import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$s, d as NTooltip, B as Button } from './server.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import './LtrContext-DmPOw2ck.mjs';
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
  __name: "Tooltip",
  __ssrInlineRender: true,
  setup(__props) {
    const showPopover = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Tooltip</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/tooltip" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-lg"
      }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-tooltip placement="top-start" trigger="hover">
							<template #trigger>
								<n-button>Hover</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
						<n-tooltip placement="bottom" trigger="click">
							<template #trigger>
								<n-button>Click</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
						<n-tooltip :show="showPopover" placement="top-end">
							<template #trigger>
								<n-button @click="showPopover = !showPopover">Manual</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
					</n-space>
					`))} ${ssrInterpolate(js(`const showPopover = ref(false)`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-tooltip placement="top-start" trigger="hover">
							<template #trigger>
								<n-button>Hover</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
						<n-tooltip placement="bottom" trigger="click">
							<template #trigger>
								<n-button>Click</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
						<n-tooltip :show="showPopover" placement="top-end">
							<template #trigger>
								<n-button @click="showPopover = !showPopover">Manual</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
					</n-space>
					`)) + " " + toDisplayString(js(`const showPopover = ref(false)`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTooltip), {
                    placement: "top-start",
                    trigger: "hover"
                  }, {
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
                        _push4(`<span${_scopeId3}>I wish they all could be California girls</span>`);
                      } else {
                        return [
                          createVNode("span", null, "I wish they all could be California girls")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTooltip), {
                    placement: "bottom",
                    trigger: "click"
                  }, {
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
                        _push4(`<span${_scopeId3}>I wish they all could be California girls</span>`);
                      } else {
                        return [
                          createVNode("span", null, "I wish they all could be California girls")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTooltip), {
                    show: showPopover.value,
                    placement: "top-end"
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
                        _push4(`<span${_scopeId3}>I wish they all could be California girls</span>`);
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
                    createVNode(unref(NTooltip), {
                      placement: "top-start",
                      trigger: "hover"
                    }, {
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
                    createVNode(unref(NTooltip), {
                      placement: "bottom",
                      trigger: "click"
                    }, {
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
                    createVNode(unref(NTooltip), {
                      show: showPopover.value,
                      placement: "top-end"
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
                  createVNode(unref(NTooltip), {
                    placement: "top-start",
                    trigger: "hover"
                  }, {
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
                  createVNode(unref(NTooltip), {
                    placement: "bottom",
                    trigger: "click"
                  }, {
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
                  createVNode(unref(NTooltip), {
                    show: showPopover.value,
                    placement: "top-end"
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tooltip-CYZfnacR.mjs.map
