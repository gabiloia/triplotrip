import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button, c as NText, v as useConfig, x as useTheme, bG as elementLight, z as useThemeClass } from './server.mjs';
import { kebabCase } from 'lodash-es';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NProgress } from './Progress-CTmj2S_J.mjs';
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

const elementProps = Object.assign(Object.assign({}, useTheme.props), {
  tag: {
    type: String,
    default: "div"
  }
});
const NEl = defineComponent({
  name: "Element",
  alias: ["El"],
  props: elementProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Element", "-element", void 0, elementLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common
      } = themeRef.value;
      return Object.keys(common).reduce((prevValue, key) => {
        prevValue[`--${kebabCase(key)}`] = common[key];
        return prevValue;
      }, {});
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("element", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      tag,
      mergedClsPrefix,
      cssVars,
      themeClass,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(tag, {
      role: "none",
      class: [`${mergedClsPrefix}-element`, themeClass],
      style: cssVars
    }, (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots));
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Progress",
  __ssrInlineRender: true,
  setup(__props) {
    const percentage = ref(0);
    function add() {
      percentage.value += 10;
      if (percentage.value > 100) {
        percentage.value = 0;
      }
    }
    function minus() {
      percentage.value -= 10;
      if (percentage.value < 0) {
        percentage.value = 100;
      }
    }
    const percentage1 = ref(0);
    function add1() {
      percentage1.value += 10;
      if (percentage1.value > 100) {
        percentage1.value = 0;
      }
    }
    function minus1() {
      percentage1.value -= 10;
      if (percentage1.value < 0) {
        percentage1.value = 100;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Progress</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/progress" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Circle" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Progress can be a circle. It can be `);
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
            _push2(` or `);
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
            _push2(` status. `);
          } else {
            return [
              createTextVNode(" Progress can be a circle. It can be "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("default")
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
              createTextVNode(" or "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("error")
                ]),
                _: 1
              }),
              createTextVNode(" status. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-space>
							<n-progress type="circle" :percentage="percentage" />
							<n-progress type="circle" status="info" :percentage="percentage" />
							<n-progress type="circle" status="success" :percentage="percentage" />
							<n-progress type="circle" status="warning" :percentage="percentage" />
							<n-progress type="circle" status="error" :percentage="percentage" />
						</n-space>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-space>
							<n-progress type="circle" :percentage="percentage" />
							<n-progress type="circle" status="info" :percentage="percentage" />
							<n-progress type="circle" status="success" :percentage="percentage" />
							<n-progress type="circle" status="warning" :percentage="percentage" />
							<n-progress type="circle" status="error" :percentage="percentage" />
						</n-space>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NProgress), {
                          type: "circle",
                          percentage: percentage.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NProgress), {
                          type: "circle",
                          status: "info",
                          percentage: percentage.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NProgress), {
                          type: "circle",
                          status: "success",
                          percentage: percentage.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NProgress), {
                          type: "circle",
                          status: "warning",
                          percentage: percentage.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NProgress), {
                          type: "circle",
                          status: "error",
                          percentage: percentage.value
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NProgress), {
                            type: "circle",
                            percentage: percentage.value
                          }, null, 8, ["percentage"]),
                          createVNode(unref(NProgress), {
                            type: "circle",
                            status: "info",
                            percentage: percentage.value
                          }, null, 8, ["percentage"]),
                          createVNode(unref(NProgress), {
                            type: "circle",
                            status: "success",
                            percentage: percentage.value
                          }, null, 8, ["percentage"]),
                          createVNode(unref(NProgress), {
                            type: "circle",
                            status: "warning",
                            percentage: percentage.value
                          }, null, 8, ["percentage"]),
                          createVNode(unref(NProgress), {
                            type: "circle",
                            status: "error",
                            percentage: percentage.value
                          }, null, 8, ["percentage"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { onClick: minus }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Minus 10%`);
                            } else {
                              return [
                                createTextVNode("Minus 10%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { onClick: add }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Add 10%`);
                            } else {
                              return [
                                createTextVNode("Add 10%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { onClick: minus }, {
                            default: withCtx(() => [
                              createTextVNode("Minus 10%")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: add }, {
                            default: withCtx(() => [
                              createTextVNode("Add 10%")
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
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(NProgress), {
                          type: "circle",
                          percentage: percentage.value
                        }, null, 8, ["percentage"]),
                        createVNode(unref(NProgress), {
                          type: "circle",
                          status: "info",
                          percentage: percentage.value
                        }, null, 8, ["percentage"]),
                        createVNode(unref(NProgress), {
                          type: "circle",
                          status: "success",
                          percentage: percentage.value
                        }, null, 8, ["percentage"]),
                        createVNode(unref(NProgress), {
                          type: "circle",
                          status: "warning",
                          percentage: percentage.value
                        }, null, 8, ["percentage"]),
                        createVNode(unref(NProgress), {
                          type: "circle",
                          status: "error",
                          percentage: percentage.value
                        }, null, 8, ["percentage"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { onClick: minus }, {
                          default: withCtx(() => [
                            createTextVNode("Minus 10%")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { onClick: add }, {
                          default: withCtx(() => [
                            createTextVNode("Add 10%")
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
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(NProgress), {
                        type: "circle",
                        percentage: percentage.value
                      }, null, 8, ["percentage"]),
                      createVNode(unref(NProgress), {
                        type: "circle",
                        status: "info",
                        percentage: percentage.value
                      }, null, 8, ["percentage"]),
                      createVNode(unref(NProgress), {
                        type: "circle",
                        status: "success",
                        percentage: percentage.value
                      }, null, 8, ["percentage"]),
                      createVNode(unref(NProgress), {
                        type: "circle",
                        status: "warning",
                        percentage: percentage.value
                      }, null, 8, ["percentage"]),
                      createVNode(unref(NProgress), {
                        type: "circle",
                        status: "error",
                        percentage: percentage.value
                      }, null, 8, ["percentage"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { onClick: minus }, {
                        default: withCtx(() => [
                          createTextVNode("Minus 10%")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { onClick: add }, {
                        default: withCtx(() => [
                          createTextVNode("Add 10%")
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
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Line" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` In fact, progress of line type don&#39;t need four different styles. However, since UI has designed it, I finally implemented them all. It also support `);
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
            _push2(` or `);
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
            _push2(` status. `);
          } else {
            return [
              createTextVNode(" In fact, progress of line type don't need four different styles. However, since UI has designed it, I finally implemented them all. It also support "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("default")
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
              createTextVNode(" or "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("error")
                ]),
                _: 1
              }),
              createTextVNode(" status. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-progress type="line" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" :percentage="percentage" />
						<n-progress type="line" :percentage="percentage" :indicator-placement="'inside'" />
						<n-progress type="line" status="info" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="info" :percentage="percentage" />
						<n-progress
							type="line"
							status="info"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="success" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="success" :percentage="percentage" />
						<n-progress
							type="line"
							status="success"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="warning" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="warning" :percentage="percentage" />
						<n-progress
							type="line"
							status="warning"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="error" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="error" :percentage="percentage" />
						<n-progress
							type="line"
							status="error"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-progress type="line" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" :percentage="percentage" />
						<n-progress type="line" :percentage="percentage" :indicator-placement="'inside'" />
						<n-progress type="line" status="info" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="info" :percentage="percentage" />
						<n-progress
							type="line"
							status="info"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="success" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="success" :percentage="percentage" />
						<n-progress
							type="line"
							status="success"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="warning" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="warning" :percentage="percentage" />
						<n-progress
							type="line"
							status="warning"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="error" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="error" :percentage="percentage" />
						<n-progress
							type="line"
							status="error"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    percentage: percentage1.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "info",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "info",
                    percentage: percentage1.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "info",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "success",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "success",
                    percentage: percentage1.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "success",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "warning",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "warning",
                    percentage: percentage1.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "warning",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "error",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "error",
                    percentage: percentage1.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NProgress), {
                    type: "line",
                    status: "error",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { onClick: minus1 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Minus 10%`);
                            } else {
                              return [
                                createTextVNode("Minus 10%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { onClick: add1 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Add 10%`);
                            } else {
                              return [
                                createTextVNode("Add 10%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { onClick: minus1 }, {
                            default: withCtx(() => [
                              createTextVNode("Minus 10%")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: add1 }, {
                            default: withCtx(() => [
                              createTextVNode("Add 10%")
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
                    createVNode(unref(NProgress), {
                      type: "line",
                      percentage: percentage1.value,
                      "show-indicator": false
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      percentage: percentage1.value
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      percentage: percentage1.value,
                      "indicator-placement": "inside"
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "info",
                      percentage: percentage1.value,
                      "show-indicator": false
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "info",
                      percentage: percentage1.value
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "info",
                      percentage: percentage1.value,
                      "indicator-placement": "inside"
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "success",
                      percentage: percentage1.value,
                      "show-indicator": false
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "success",
                      percentage: percentage1.value
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "success",
                      percentage: percentage1.value,
                      "indicator-placement": "inside"
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "warning",
                      percentage: percentage1.value,
                      "show-indicator": false
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "warning",
                      percentage: percentage1.value
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "warning",
                      percentage: percentage1.value,
                      "indicator-placement": "inside"
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "error",
                      percentage: percentage1.value,
                      "show-indicator": false
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "error",
                      percentage: percentage1.value
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: "error",
                      percentage: percentage1.value,
                      "indicator-placement": "inside"
                    }, null, 8, ["percentage"]),
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { onClick: minus1 }, {
                          default: withCtx(() => [
                            createTextVNode("Minus 10%")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { onClick: add1 }, {
                          default: withCtx(() => [
                            createTextVNode("Add 10%")
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
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NProgress), {
                    type: "line",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    percentage: percentage1.value
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "info",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "info",
                    percentage: percentage1.value
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "info",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "success",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "success",
                    percentage: percentage1.value
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "success",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "warning",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "warning",
                    percentage: percentage1.value
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "warning",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "error",
                    percentage: percentage1.value,
                    "show-indicator": false
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "error",
                    percentage: percentage1.value
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NProgress), {
                    type: "line",
                    status: "error",
                    percentage: percentage1.value,
                    "indicator-placement": "inside"
                  }, null, 8, ["percentage"]),
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { onClick: minus1 }, {
                        default: withCtx(() => [
                          createTextVNode("Minus 10%")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { onClick: add1 }, {
                        default: withCtx(() => [
                          createTextVNode("Add 10%")
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
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Multiple circle" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-el>
							<n-progress
								type="multiple-circle"
								:stroke-width="6"
								:circle-gap="0.5"
								:percentage="[
									percentage,
									(percentage + 10) % 100,
									(percentage + 20) % 100,
									(percentage + 30) % 100
								]"
								:color="[
									'var(--info-color)',
									'var(--success-color)',
									'var(--warning-color)',
									'var(--error-color)'
								]"
								:rail-style="[
									{ stroke: 'var(--info-color)', opacity: 0.3 },
									{ stroke: 'var(--success-color)', opacity: 0.3 },
									{ stroke: 'var(--warning-color)', opacity: 0.3 },
									{ stroke: 'var(--error-color)', opacity: 0.3 }
								]"
							>
								<div style="text-align: center">Circle racing!</div>
							</n-progress>
						</n-el>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-el>
							<n-progress
								type="multiple-circle"
								:stroke-width="6"
								:circle-gap="0.5"
								:percentage="[
									percentage,
									(percentage + 10) % 100,
									(percentage + 20) % 100,
									(percentage + 30) % 100
								]"
								:color="[
									'var(--info-color)',
									'var(--success-color)',
									'var(--warning-color)',
									'var(--error-color)'
								]"
								:rail-style="[
									{ stroke: 'var(--info-color)', opacity: 0.3 },
									{ stroke: 'var(--success-color)', opacity: 0.3 },
									{ stroke: 'var(--warning-color)', opacity: 0.3 },
									{ stroke: 'var(--error-color)', opacity: 0.3 }
								]"
							>
								<div style="text-align: center">Circle racing!</div>
							</n-progress>
						</n-el>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NEl), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NProgress), {
                          type: "multiple-circle",
                          "stroke-width": 6,
                          "circle-gap": 0.5,
                          percentage: [
                            percentage.value,
                            (percentage.value + 10) % 100,
                            (percentage.value + 20) % 100,
                            (percentage.value + 30) % 100
                          ],
                          color: [
                            "var(--info-color)",
                            "var(--success-color)",
                            "var(--warning-color)",
                            "var(--error-color)"
                          ],
                          "rail-style": [
                            { stroke: "var(--info-color)", opacity: 0.3 },
                            { stroke: "var(--success-color)", opacity: 0.3 },
                            { stroke: "var(--warning-color)", opacity: 0.3 },
                            { stroke: "var(--error-color)", opacity: 0.3 }
                          ]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId4}>Circle racing!</div>`);
                            } else {
                              return [
                                createVNode("div", { style: { "text-align": "center" } }, "Circle racing!")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NProgress), {
                            type: "multiple-circle",
                            "stroke-width": 6,
                            "circle-gap": 0.5,
                            percentage: [
                              percentage.value,
                              (percentage.value + 10) % 100,
                              (percentage.value + 20) % 100,
                              (percentage.value + 30) % 100
                            ],
                            color: [
                              "var(--info-color)",
                              "var(--success-color)",
                              "var(--warning-color)",
                              "var(--error-color)"
                            ],
                            "rail-style": [
                              { stroke: "var(--info-color)", opacity: 0.3 },
                              { stroke: "var(--success-color)", opacity: 0.3 },
                              { stroke: "var(--warning-color)", opacity: 0.3 },
                              { stroke: "var(--error-color)", opacity: 0.3 }
                            ]
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { style: { "text-align": "center" } }, "Circle racing!")
                            ]),
                            _: 1
                          }, 8, ["percentage"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { onClick: minus }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Minus 10%`);
                            } else {
                              return [
                                createTextVNode("Minus 10%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { onClick: add }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Add 10%`);
                            } else {
                              return [
                                createTextVNode("Add 10%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { onClick: minus }, {
                            default: withCtx(() => [
                              createTextVNode("Minus 10%")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: add }, {
                            default: withCtx(() => [
                              createTextVNode("Add 10%")
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
                    createVNode(unref(NEl), null, {
                      default: withCtx(() => [
                        createVNode(unref(NProgress), {
                          type: "multiple-circle",
                          "stroke-width": 6,
                          "circle-gap": 0.5,
                          percentage: [
                            percentage.value,
                            (percentage.value + 10) % 100,
                            (percentage.value + 20) % 100,
                            (percentage.value + 30) % 100
                          ],
                          color: [
                            "var(--info-color)",
                            "var(--success-color)",
                            "var(--warning-color)",
                            "var(--error-color)"
                          ],
                          "rail-style": [
                            { stroke: "var(--info-color)", opacity: 0.3 },
                            { stroke: "var(--success-color)", opacity: 0.3 },
                            { stroke: "var(--warning-color)", opacity: 0.3 },
                            { stroke: "var(--error-color)", opacity: 0.3 }
                          ]
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { style: { "text-align": "center" } }, "Circle racing!")
                          ]),
                          _: 1
                        }, 8, ["percentage"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { onClick: minus }, {
                          default: withCtx(() => [
                            createTextVNode("Minus 10%")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { onClick: add }, {
                          default: withCtx(() => [
                            createTextVNode("Add 10%")
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
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NEl), null, {
                    default: withCtx(() => [
                      createVNode(unref(NProgress), {
                        type: "multiple-circle",
                        "stroke-width": 6,
                        "circle-gap": 0.5,
                        percentage: [
                          percentage.value,
                          (percentage.value + 10) % 100,
                          (percentage.value + 20) % 100,
                          (percentage.value + 30) % 100
                        ],
                        color: [
                          "var(--info-color)",
                          "var(--success-color)",
                          "var(--warning-color)",
                          "var(--error-color)"
                        ],
                        "rail-style": [
                          { stroke: "var(--info-color)", opacity: 0.3 },
                          { stroke: "var(--success-color)", opacity: 0.3 },
                          { stroke: "var(--warning-color)", opacity: 0.3 },
                          { stroke: "var(--error-color)", opacity: 0.3 }
                        ]
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "text-align": "center" } }, "Circle racing!")
                        ]),
                        _: 1
                      }, 8, ["percentage"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { onClick: minus }, {
                        default: withCtx(() => [
                          createTextVNode("Minus 10%")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { onClick: add }, {
                        default: withCtx(() => [
                          createTextVNode("Add 10%")
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
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Processing" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-progress type="line" :percentage="60" :indicator-placement="'inside'" processing />
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-progress type="line" :percentage="60" :indicator-placement="'inside'" processing />
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NProgress), {
              type: "line",
              percentage: 60,
              "indicator-placement": "inside",
              processing: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NProgress), {
                type: "line",
                percentage: 60,
                "indicator-placement": "inside",
                processing: ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Progress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Progress-BfmRMvis.mjs.map
