import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, h, provide, toRef, computed, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button, v as useConfig, Y as useRtl, x as useTheme, bf as listLight, m as c$1, h as createInjectionKey, z as useThemeClass, t as throwError, k as cB, aj as insideModal, ak as insidePopover, l as cM, n as cE } from './server.mjs';
import { N as NThing } from './Thing-BCT0vZnI.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BP2F26pm.mjs';
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

const style = c$1([cB("list", `
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `, [cM("show-divider", [cB("list-item", [c$1("&:not(:last-child)", [cE("divider", `
 background-color: var(--n-merged-border-color);
 `)])])]), cM("clickable", [cB("list-item", `
 cursor: pointer;
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), cM("hoverable", [cB("list-item", `
 border-radius: var(--n-border-radius);
 `, [c$1("&:hover", `
 background-color: var(--n-merged-color-hover);
 `, [cE("divider", `
 background-color: transparent;
 `)])])]), cM("bordered, hoverable", [cB("list-item", `
 padding: 12px 20px;
 `), cE("header, footer", `
 padding: 12px 20px;
 `)]), cE("header, footer", `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [c$1("&:not(:last-child)", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), cB("list-item", `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cE("prefix", `
 margin-right: 20px;
 flex: 0;
 `), cE("suffix", `
 margin-left: 20px;
 flex: 0;
 `), cE("main", `
 flex: 1;
 `), cE("divider", `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), insideModal(cB("list", `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), insidePopover(cB("list", `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);
const listProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: Boolean,
  clickable: Boolean,
  hoverable: Boolean,
  showDivider: {
    type: Boolean,
    default: true
  }
});
const listInjectionKey = createInjectionKey("n-list");
const NList = defineComponent({
  name: "List",
  props: listProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("List", mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme("List", "-list", style, listLight, props, mergedClsPrefixRef);
    provide(listInjectionKey, {
      showDividerRef: toRef(props, "showDivider"),
      mergedClsPrefixRef
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          textColor,
          color,
          colorModal,
          colorPopover,
          borderColor,
          borderColorModal,
          borderColorPopover,
          borderRadius,
          colorHover,
          colorHoverModal,
          colorHoverPopover
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-border-radius": borderRadius,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-color-modal": colorModal,
        "--n-color-popover": colorPopover,
        "--n-color-hover": colorHover,
        "--n-color-hover-modal": colorHoverModal,
        "--n-color-hover-popover": colorHoverPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("list", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("ul", {
      class: [`${mergedClsPrefix}-list`, this.rtlEnabled && `${mergedClsPrefix}-list--rtl`, this.bordered && `${mergedClsPrefix}-list--bordered`, this.showDivider && `${mergedClsPrefix}-list--show-divider`, this.hoverable && `${mergedClsPrefix}-list--hoverable`, this.clickable && `${mergedClsPrefix}-list--clickable`, this.themeClass],
      style: this.cssVars
    }, $slots.header ? h("div", {
      class: `${mergedClsPrefix}-list__header`
    }, $slots.header()) : null, (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots), $slots.footer ? h("div", {
      class: `${mergedClsPrefix}-list__footer`
    }, $slots.footer()) : null);
  }
});
const NListItem = defineComponent({
  name: "ListItem",
  slots: Object,
  setup() {
    const listInjection = inject(listInjectionKey, null);
    if (!listInjection) {
      throwError("list-item", "`n-list-item` must be placed in `n-list`.");
    }
    return {
      showDivider: listInjection.showDividerRef,
      mergedClsPrefix: listInjection.mergedClsPrefixRef
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix
    } = this;
    return h("li", {
      class: `${mergedClsPrefix}-list-item`
    }, $slots.prefix ? h("div", {
      class: `${mergedClsPrefix}-list-item__prefix`
    }, $slots.prefix()) : null, $slots.default ? h("div", {
      class: `${mergedClsPrefix}-list-item__main`
    }, $slots) : null, $slots.suffix ? h("div", {
      class: `${mergedClsPrefix}-list-item__suffix`
    }, $slots.suffix()) : null, this.showDivider && h("div", {
      class: `${mergedClsPrefix}-list-item__divider`
    }));
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">List</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/list" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-list>
						<template #header>header</template>
						<template #footer>footer</template>
						<n-list-item>
							<template #prefix>
								<n-button>Prefix</n-button>
							</template>
							<template #suffix>
								<n-button>Suffix</n-button>
							</template>
							<n-thing title="Thing" title-extra="extra" description="description">
								Biu
								<br />
								Biu
								<br />
								Biu
								<br />
							</n-thing>
						</n-list-item>
						<n-list-item>
							<n-thing title="Thing" title-extra="extra" description="description" />
						</n-list-item>
					</n-list>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-list>
						<template #header>header</template>
						<template #footer>footer</template>
						<n-list-item>
							<template #prefix>
								<n-button>Prefix</n-button>
							</template>
							<template #suffix>
								<n-button>Suffix</n-button>
							</template>
							<n-thing title="Thing" title-extra="extra" description="description">
								Biu
								<br />
								Biu
								<br />
								Biu
								<br />
							</n-thing>
						</n-list-item>
						<n-list-item>
							<n-thing title="Thing" title-extra="extra" description="description" />
						</n-list-item>
					</n-list>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NList), null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`header`);
                } else {
                  return [
                    createTextVNode("header")
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`footer`);
                } else {
                  return [
                    createTextVNode("footer")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NListItem), null, {
                    prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Prefix`);
                            } else {
                              return [
                                createTextVNode("Prefix")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Prefix")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Suffix`);
                            } else {
                              return [
                                createTextVNode("Suffix")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Suffix")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NThing), {
                          title: "Thing",
                          "title-extra": "extra",
                          description: "description"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Biu <br${_scopeId4}> Biu <br${_scopeId4}> Biu <br${_scopeId4}>`);
                            } else {
                              return [
                                createTextVNode(" Biu "),
                                createVNode("br"),
                                createTextVNode(" Biu "),
                                createVNode("br"),
                                createTextVNode(" Biu "),
                                createVNode("br")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NThing), {
                            title: "Thing",
                            "title-extra": "extra",
                            description: "description"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Biu "),
                              createVNode("br"),
                              createTextVNode(" Biu "),
                              createVNode("br"),
                              createTextVNode(" Biu "),
                              createVNode("br")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NListItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NThing), {
                          title: "Thing",
                          "title-extra": "extra",
                          description: "description"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NThing), {
                            title: "Thing",
                            "title-extra": "extra",
                            description: "description"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NListItem), null, {
                      prefix: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Prefix")
                          ]),
                          _: 1
                        })
                      ]),
                      suffix: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Suffix")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(unref(NThing), {
                          title: "Thing",
                          "title-extra": "extra",
                          description: "description"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Biu "),
                            createVNode("br"),
                            createTextVNode(" Biu "),
                            createVNode("br"),
                            createTextVNode(" Biu "),
                            createVNode("br")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NListItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(NThing), {
                          title: "Thing",
                          "title-extra": "extra",
                          description: "description"
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
              createVNode(unref(NList), null, {
                header: withCtx(() => [
                  createTextVNode("header")
                ]),
                footer: withCtx(() => [
                  createTextVNode("footer")
                ]),
                default: withCtx(() => [
                  createVNode(unref(NListItem), null, {
                    prefix: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Prefix")
                        ]),
                        _: 1
                      })
                    ]),
                    suffix: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Suffix")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(unref(NThing), {
                        title: "Thing",
                        "title-extra": "extra",
                        description: "description"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Biu "),
                          createVNode("br"),
                          createTextVNode(" Biu "),
                          createVNode("br"),
                          createTextVNode(" Biu "),
                          createVNode("br")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NListItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(NThing), {
                        title: "Thing",
                        "title-extra": "extra",
                        description: "description"
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=List-7NIo6fkQ.mjs.map
