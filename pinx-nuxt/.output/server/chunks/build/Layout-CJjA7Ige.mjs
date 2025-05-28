import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, h, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s, u as useConfig, s as useTheme, br as layoutLight, j as cB, x as useThemeClass, bs as positionProp, k as cM } from './server.mjs';
import { N as NH2 } from './headers-Dfr-Z6Fq.mjs';
import { N as NLayout, a as NLayoutSider } from './LayoutSider-CCVSJ-hS.mjs';
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

const style$1 = cB("layout-footer", `
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`, [cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `), cM("bordered", `
 border-top: solid 1px var(--n-border-color);
 `)]);
const layoutFooterProps = Object.assign(Object.assign({}, useTheme.props), {
  inverted: Boolean,
  position: positionProp,
  bordered: Boolean
});
const NLayoutFooter = defineComponent({
  name: "LayoutFooter",
  props: layoutFooterProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-footer", style$1, layoutLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut
      };
      if (props.inverted) {
        vars["--n-color"] = self.footerColorInverted;
        vars["--n-text-color"] = self.textColorInverted;
        vars["--n-border-color"] = self.footerBorderColorInverted;
      } else {
        vars["--n-color"] = self.footerColor;
        vars["--n-text-color"] = self.textColor;
        vars["--n-border-color"] = self.footerBorderColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-footer", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
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
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-layout-footer`, this.themeClass, this.position && `${mergedClsPrefix}-layout-footer--${this.position}-positioned`, this.bordered && `${mergedClsPrefix}-layout-footer--bordered`],
      style: this.cssVars
    }, this.$slots);
  }
});
const style = cB("layout-header", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`, [cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `), cM("bordered", `
 border-bottom: solid 1px var(--n-border-color);
 `)]);
const headerProps = {
  position: positionProp,
  inverted: Boolean,
  bordered: {
    type: Boolean,
    default: false
  }
};
const NLayoutHeader = defineComponent({
  name: "LayoutHeader",
  props: Object.assign(Object.assign({}, useTheme.props), headerProps),
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-header", style, layoutLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut
      };
      if (props.inverted) {
        vars["--n-color"] = self.headerColorInverted;
        vars["--n-text-color"] = self.textColorInverted;
        vars["--n-border-color"] = self.headerBorderColorInverted;
      } else {
        vars["--n-color"] = self.headerColor;
        vars["--n-text-color"] = self.textColor;
        vars["--n-border-color"] = self.headerBorderColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-header", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
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
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-layout-header`, this.themeClass, this.position && `${mergedClsPrefix}-layout-header--${this.position}-positioned`, this.bordered && `${mergedClsPrefix}-layout-header--bordered`],
      style: this.cssVars
    }, this.$slots);
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Layout</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/layout" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-layout style="height: 360px">
						<n-layout-header style="height: 64px; padding: 24px" bordered>Header</n-layout-header>
						<n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
							<n-layout-sider
								content-style="padding: 24px;"
								:native-scrollbar="false"
								bordered
								collapse-mode="width"
								:collapsed-width="120"
								:width="240"
								show-trigger="bar"
							>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
							</n-layout-sider>
							<n-layout content-style="padding: 24px;" :native-scrollbar="false">
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
							</n-layout>
						</n-layout>
						<n-layout-footer position="absolute" style="height: 64px; padding: 24px" bordered>
							Footer
						</n-layout-footer>
					</n-layout>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-layout style="height: 360px">
						<n-layout-header style="height: 64px; padding: 24px" bordered>Header</n-layout-header>
						<n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
							<n-layout-sider
								content-style="padding: 24px;"
								:native-scrollbar="false"
								bordered
								collapse-mode="width"
								:collapsed-width="120"
								:width="240"
								show-trigger="bar"
							>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
							</n-layout-sider>
							<n-layout content-style="padding: 24px;" :native-scrollbar="false">
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
							</n-layout>
						</n-layout>
						<n-layout-footer position="absolute" style="height: 64px; padding: 24px" bordered>
							Footer
						</n-layout-footer>
					</n-layout>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NLayout), { style: { "height": "360px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NLayoutHeader), {
                    style: { "height": "64px", "padding": "24px" },
                    bordered: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Header`);
                      } else {
                        return [
                          createTextVNode("Header")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLayout), {
                    position: "absolute",
                    style: { "top": "64px", "bottom": "64px" },
                    "has-sider": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NLayoutSider), {
                          "content-style": "padding: 24px;",
                          "native-scrollbar": false,
                          bordered: "",
                          "collapse-mode": "width",
                          "collapsed-width": 120,
                          width: 240,
                          "show-trigger": "bar"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Handian Bridge`);
                                  } else {
                                    return [
                                      createTextVNode("Handian Bridge")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Handian Bridge")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NLayout), {
                          "content-style": "padding: 24px;",
                          "native-scrollbar": false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NH2), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pingshan Road`);
                                  } else {
                                    return [
                                      createTextVNode("Pingshan Road")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NH2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pingshan Road")
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
                          createVNode(unref(NLayoutSider), {
                            "content-style": "padding: 24px;",
                            "native-scrollbar": false,
                            bordered: "",
                            "collapse-mode": "width",
                            "collapsed-width": 120,
                            width: 240,
                            "show-trigger": "bar"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Handian Bridge")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NLayout), {
                            "content-style": "padding: 24px;",
                            "native-scrollbar": false
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NH2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pingshan Road")
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
                  _push3(ssrRenderComponent(unref(NLayoutFooter), {
                    position: "absolute",
                    style: { "height": "64px", "padding": "24px" },
                    bordered: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Footer `);
                      } else {
                        return [
                          createTextVNode(" Footer ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NLayoutHeader), {
                      style: { "height": "64px", "padding": "24px" },
                      bordered: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Header")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLayout), {
                      position: "absolute",
                      style: { "top": "64px", "bottom": "64px" },
                      "has-sider": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NLayoutSider), {
                          "content-style": "padding: 24px;",
                          "native-scrollbar": false,
                          bordered: "",
                          "collapse-mode": "width",
                          "collapsed-width": 120,
                          width: 240,
                          "show-trigger": "bar"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Handian Bridge")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NLayout), {
                          "content-style": "padding: 24px;",
                          "native-scrollbar": false
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NH2), null, {
                              default: withCtx(() => [
                                createTextVNode("Pingshan Road")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLayoutFooter), {
                      position: "absolute",
                      style: { "height": "64px", "padding": "24px" },
                      bordered: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Footer ")
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
              createVNode(unref(NLayout), { style: { "height": "360px" } }, {
                default: withCtx(() => [
                  createVNode(unref(NLayoutHeader), {
                    style: { "height": "64px", "padding": "24px" },
                    bordered: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Header")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLayout), {
                    position: "absolute",
                    style: { "top": "64px", "bottom": "64px" },
                    "has-sider": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NLayoutSider), {
                        "content-style": "padding: 24px;",
                        "native-scrollbar": false,
                        bordered: "",
                        "collapse-mode": "width",
                        "collapsed-width": 120,
                        width: 240,
                        "show-trigger": "bar"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Handian Bridge")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NLayout), {
                        "content-style": "padding: 24px;",
                        "native-scrollbar": false
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NH2), null, {
                            default: withCtx(() => [
                              createTextVNode("Pingshan Road")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLayoutFooter), {
                    position: "absolute",
                    style: { "height": "64px", "padding": "24px" },
                    bordered: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Footer ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Layout-CJjA7Ige.mjs.map
