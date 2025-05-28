import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { a_ as useMessage, a as _sfc_main$s, B as Button, aV as NDropdown, c as NAvatar, h as NBaseIcon, u as useConfig, s as useTheme, bW as pageHeaderLight, l as c$1, U as useRtl, x as useThemeClass, j as cB, m as cE } from './server.mjs';
import { N as NGrid, a as NGi } from './Grid-M9WLwUGE.mjs';
import { N as NStatistic } from './Statistic-CU3SUvqv.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import { N as NBreadcrumb, a as NBreadcrumbItem } from './BreadcrumbItem-XWCnhCFT.mjs';
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

const ArrowBackIcon = defineComponent({
  name: "ArrowBack",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, h("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), h("path", {
      d: "M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
    }));
  }
});
const style = c$1([cB("page-header-header", `
 margin-bottom: 20px;
 `), cB("page-header", `
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [cE("main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `), cE("back", `
 display: flex;
 margin-right: 16px;
 font-size: var(--n-back-size);
 cursor: pointer;
 color: var(--n-back-color);
 transition: color .3s var(--n-bezier);
 `, [c$1("&:hover", "color: var(--n-back-color-hover);"), c$1("&:active", "color: var(--n-back-color-pressed);")]), cE("avatar", `
 display: flex;
 margin-right: 12px
 `), cE("title", `
 margin-right: 16px;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), cE("subtitle", `
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 color: var(--n-subtitle-text-color);
 `)]), cB("page-header-content", `
 font-size: var(--n-font-size);
 `, [c$1("&:not(:first-child)", "margin-top: 20px;")]), cB("page-header-footer", `
 font-size: var(--n-font-size);
 `, [c$1("&:not(:first-child)", "margin-top: 20px;")])]);
const pageHeaderProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  subtitle: String,
  extra: String,
  onBack: Function
});
const NPageHeader = defineComponent({
  name: "PageHeader",
  props: pageHeaderProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("PageHeader", "-page-header", style, pageHeaderLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("PageHeader", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          titleTextColor,
          subtitleTextColor,
          backColor,
          fontSize,
          titleFontSize,
          backSize,
          titleFontWeight,
          backColorHover,
          backColorPressed
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-title-text-color": titleTextColor,
        "--n-title-font-size": titleFontSize,
        "--n-title-font-weight": titleFontWeight,
        "--n-font-size": fontSize,
        "--n-back-size": backSize,
        "--n-subtitle-text-color": subtitleTextColor,
        "--n-back-color": backColor,
        "--n-back-color-hover": backColorHover,
        "--n-back-color-pressed": backColorPressed,
        "--n-bezier": cubicBezierEaseInOut
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("page-header", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      onBack,
      title,
      subtitle,
      extra,
      mergedClsPrefix,
      cssVars,
      $slots
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const {
      title: titleSlot,
      subtitle: subtitleSlot,
      extra: extraSlot,
      default: defaultSlot,
      header: headerSlot,
      avatar: avatarSlot,
      footer: footerSlot,
      back: backSlot
    } = $slots;
    const showBack = onBack;
    const showTitle = title || titleSlot;
    const showSubtitle = subtitle || subtitleSlot;
    const showExtra = extra || extraSlot;
    return h("div", {
      style: cssVars,
      class: [`${mergedClsPrefix}-page-header-wrapper`, this.themeClass, this.rtlEnabled && `${mergedClsPrefix}-page-header-wrapper--rtl`]
    }, headerSlot ? h("div", {
      class: `${mergedClsPrefix}-page-header-header`,
      key: "breadcrumb"
    }, headerSlot()) : null, (showBack || avatarSlot || showTitle || showSubtitle || showExtra) && h("div", {
      class: `${mergedClsPrefix}-page-header`,
      key: "header"
    }, h("div", {
      class: `${mergedClsPrefix}-page-header__main`,
      key: "back"
    }, showBack ? h("div", {
      class: `${mergedClsPrefix}-page-header__back`,
      onClick: onBack
    }, backSlot ? backSlot() : h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: () => h(ArrowBackIcon, null)
    })) : null, avatarSlot ? h("div", {
      class: `${mergedClsPrefix}-page-header__avatar`
    }, avatarSlot()) : null, showTitle ? h("div", {
      class: `${mergedClsPrefix}-page-header__title`,
      key: "title"
    }, title || titleSlot()) : null, showSubtitle ? h("div", {
      class: `${mergedClsPrefix}-page-header__subtitle`,
      key: "subtitle"
    }, subtitle || subtitleSlot()) : null), showExtra ? h("div", {
      class: `${mergedClsPrefix}-page-header__extra`
    }, extra || extraSlot()) : null), defaultSlot ? h("div", {
      class: `${mergedClsPrefix}-page-header-content`,
      key: "content"
    }, defaultSlot()) : null, footerSlot ? h("div", {
      class: `${mergedClsPrefix}-page-header-footer`,
      key: "footer"
    }, footerSlot()) : null);
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    function handleBack() {
      message.info("[onBack]");
    }
    const options = [
      {
        label: "More episodes",
        key: "1"
      },
      {
        label: "More episodes",
        key: "2"
      },
      {
        label: "More episodes",
        key: "3"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Page Header</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/page-header" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-page-header subtitle="A podcast to improve designs" @back="handleBack">
						<n-grid :cols="5">
							<n-gi>
								<n-statistic label="Episodes" value="125" />
							</n-gi>
							<n-gi>
								<n-statistic label="Guests" value="22" />
							</n-gi>
							<n-gi>
								<n-statistic label="Apologies" value="36" />
							</n-gi>
							<n-gi>
								<n-statistic label="Topics" value="83" />
							</n-gi>
							<n-gi>
								<n-statistic label="Reference Links" value="2,346" />
							</n-gi>
						</n-grid>
						<template #title>
							<a href="#" style="text-decoration: none; color: inherit">Super Podcast</a>
						</template>
						<template #header>
							<n-breadcrumb>
								<n-breadcrumb-item>Podcast</n-breadcrumb-item>
								<n-breadcrumb-item>Best Collection</n-breadcrumb-item>
								<n-breadcrumb-item>Ultimate Best Collection</n-breadcrumb-item>
								<n-breadcrumb-item>Super Podcast</n-breadcrumb-item>
							</n-breadcrumb>
						</template>
						<template #avatar>
							<n-avatar :img-props="{ alt: 'avatar' }" src="https://picsum.photos/seed/6Dz4vOn/160/160" />
						</template>
						<template #extra>
							<n-space>
								<n-button>Refresh</n-button>
								<n-dropdown :options placement="bottom-start">
									<n-button :bordered="false" style="padding: 0 4px">\xB7\xB7\xB7</n-button>
								</n-dropdown>
							</n-space>
						</template>
						<template #footer>As of April 3, 2021</template>
					</n-page-header>
					`))} ${ssrInterpolate(js(`
						const message = useMessage()
						function handleBack() {
							message.info("[onBack]")
						}
						const options = [
							{
								label: "More episodes",
								key: "1"
							},
							{
								label: "More episodes",
								key: "2"
							},
							{
								label: "More episodes",
								key: "3"
							}
						]
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-page-header subtitle="A podcast to improve designs" @back="handleBack">
						<n-grid :cols="5">
							<n-gi>
								<n-statistic label="Episodes" value="125" />
							</n-gi>
							<n-gi>
								<n-statistic label="Guests" value="22" />
							</n-gi>
							<n-gi>
								<n-statistic label="Apologies" value="36" />
							</n-gi>
							<n-gi>
								<n-statistic label="Topics" value="83" />
							</n-gi>
							<n-gi>
								<n-statistic label="Reference Links" value="2,346" />
							</n-gi>
						</n-grid>
						<template #title>
							<a href="#" style="text-decoration: none; color: inherit">Super Podcast</a>
						</template>
						<template #header>
							<n-breadcrumb>
								<n-breadcrumb-item>Podcast</n-breadcrumb-item>
								<n-breadcrumb-item>Best Collection</n-breadcrumb-item>
								<n-breadcrumb-item>Ultimate Best Collection</n-breadcrumb-item>
								<n-breadcrumb-item>Super Podcast</n-breadcrumb-item>
							</n-breadcrumb>
						</template>
						<template #avatar>
							<n-avatar :img-props="{ alt: 'avatar' }" src="https://picsum.photos/seed/6Dz4vOn/160/160" />
						</template>
						<template #extra>
							<n-space>
								<n-button>Refresh</n-button>
								<n-dropdown :options placement="bottom-start">
									<n-button :bordered="false" style="padding: 0 4px">\xB7\xB7\xB7</n-button>
								</n-dropdown>
							</n-space>
						</template>
						<template #footer>As of April 3, 2021</template>
					</n-page-header>
					`)) + " " + toDisplayString(js(`
						const message = useMessage()
						function handleBack() {
							message.info("[onBack]")
						}
						const options = [
							{
								label: "More episodes",
								key: "1"
							},
							{
								label: "More episodes",
								key: "2"
							},
							{
								label: "More episodes",
								key: "3"
							}
						]
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NPageHeader), {
              subtitle: "A podcast to improve designs",
              onBack: handleBack
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="#" style="${ssrRenderStyle({ "text-decoration": "none", "color": "inherit" })}"${_scopeId2}>Super Podcast</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "#",
                      style: { "text-decoration": "none", "color": "inherit" }
                    }, "Super Podcast")
                  ];
                }
              }),
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NBreadcrumb), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Podcast`);
                            } else {
                              return [
                                createTextVNode("Podcast")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Best Collection`);
                            } else {
                              return [
                                createTextVNode("Best Collection")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ultimate Best Collection`);
                            } else {
                              return [
                                createTextVNode("Ultimate Best Collection")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Super Podcast`);
                            } else {
                              return [
                                createTextVNode("Super Podcast")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NBreadcrumbItem), null, {
                            default: withCtx(() => [
                              createTextVNode("Podcast")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NBreadcrumbItem), null, {
                            default: withCtx(() => [
                              createTextVNode("Best Collection")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NBreadcrumbItem), null, {
                            default: withCtx(() => [
                              createTextVNode("Ultimate Best Collection")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NBreadcrumbItem), null, {
                            default: withCtx(() => [
                              createTextVNode("Super Podcast")
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
                    createVNode(unref(NBreadcrumb), null, {
                      default: withCtx(() => [
                        createVNode(unref(NBreadcrumbItem), null, {
                          default: withCtx(() => [
                            createTextVNode("Podcast")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NBreadcrumbItem), null, {
                          default: withCtx(() => [
                            createTextVNode("Best Collection")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NBreadcrumbItem), null, {
                          default: withCtx(() => [
                            createTextVNode("Ultimate Best Collection")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NBreadcrumbItem), null, {
                          default: withCtx(() => [
                            createTextVNode("Super Podcast")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              avatar: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NAvatar), {
                    "img-props": { alt: "avatar" },
                    src: "https://picsum.photos/seed/6Dz4vOn/160/160"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NAvatar), {
                      "img-props": { alt: "avatar" },
                      src: "https://picsum.photos/seed/6Dz4vOn/160/160"
                    })
                  ];
                }
              }),
              extra: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Refresh`);
                            } else {
                              return [
                                createTextVNode("Refresh")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NDropdown), {
                          options,
                          placement: "bottom-start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Button), {
                                bordered: false,
                                style: { "padding": "0 4px" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\xB7\xB7\xB7`);
                                  } else {
                                    return [
                                      createTextVNode("\xB7\xB7\xB7")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Button), {
                                  bordered: false,
                                  style: { "padding": "0 4px" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\xB7\xB7\xB7")
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
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Refresh")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NDropdown), {
                            options,
                            placement: "bottom-start"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Button), {
                                bordered: false,
                                style: { "padding": "0 4px" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\xB7\xB7\xB7")
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
                } else {
                  return [
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Refresh")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NDropdown), {
                          options,
                          placement: "bottom-start"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Button), {
                              bordered: false,
                              style: { "padding": "0 4px" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\xB7\xB7\xB7")
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
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`As of April 3, 2021`);
                } else {
                  return [
                    createTextVNode("As of April 3, 2021")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NGrid), { cols: 5 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NGi), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NStatistic), {
                                label: "Episodes",
                                value: "125"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NStatistic), {
                                  label: "Episodes",
                                  value: "125"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NGi), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NStatistic), {
                                label: "Guests",
                                value: "22"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NStatistic), {
                                  label: "Guests",
                                  value: "22"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NGi), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NStatistic), {
                                label: "Apologies",
                                value: "36"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NStatistic), {
                                  label: "Apologies",
                                  value: "36"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NGi), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NStatistic), {
                                label: "Topics",
                                value: "83"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NStatistic), {
                                  label: "Topics",
                                  value: "83"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NGi), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NStatistic), {
                                label: "Reference Links",
                                value: "2,346"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NStatistic), {
                                  label: "Reference Links",
                                  value: "2,346"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NGi), null, {
                            default: withCtx(() => [
                              createVNode(unref(NStatistic), {
                                label: "Episodes",
                                value: "125"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NGi), null, {
                            default: withCtx(() => [
                              createVNode(unref(NStatistic), {
                                label: "Guests",
                                value: "22"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NGi), null, {
                            default: withCtx(() => [
                              createVNode(unref(NStatistic), {
                                label: "Apologies",
                                value: "36"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NGi), null, {
                            default: withCtx(() => [
                              createVNode(unref(NStatistic), {
                                label: "Topics",
                                value: "83"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NGi), null, {
                            default: withCtx(() => [
                              createVNode(unref(NStatistic), {
                                label: "Reference Links",
                                value: "2,346"
                              })
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
                    createVNode(unref(NGrid), { cols: 5 }, {
                      default: withCtx(() => [
                        createVNode(unref(NGi), null, {
                          default: withCtx(() => [
                            createVNode(unref(NStatistic), {
                              label: "Episodes",
                              value: "125"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NGi), null, {
                          default: withCtx(() => [
                            createVNode(unref(NStatistic), {
                              label: "Guests",
                              value: "22"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NGi), null, {
                          default: withCtx(() => [
                            createVNode(unref(NStatistic), {
                              label: "Apologies",
                              value: "36"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NGi), null, {
                          default: withCtx(() => [
                            createVNode(unref(NStatistic), {
                              label: "Topics",
                              value: "83"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NGi), null, {
                          default: withCtx(() => [
                            createVNode(unref(NStatistic), {
                              label: "Reference Links",
                              value: "2,346"
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NPageHeader), {
                subtitle: "A podcast to improve designs",
                onBack: handleBack
              }, {
                title: withCtx(() => [
                  createVNode("a", {
                    href: "#",
                    style: { "text-decoration": "none", "color": "inherit" }
                  }, "Super Podcast")
                ]),
                header: withCtx(() => [
                  createVNode(unref(NBreadcrumb), null, {
                    default: withCtx(() => [
                      createVNode(unref(NBreadcrumbItem), null, {
                        default: withCtx(() => [
                          createTextVNode("Podcast")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NBreadcrumbItem), null, {
                        default: withCtx(() => [
                          createTextVNode("Best Collection")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NBreadcrumbItem), null, {
                        default: withCtx(() => [
                          createTextVNode("Ultimate Best Collection")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NBreadcrumbItem), null, {
                        default: withCtx(() => [
                          createTextVNode("Super Podcast")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                avatar: withCtx(() => [
                  createVNode(unref(NAvatar), {
                    "img-props": { alt: "avatar" },
                    src: "https://picsum.photos/seed/6Dz4vOn/160/160"
                  })
                ]),
                extra: withCtx(() => [
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Refresh")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NDropdown), {
                        options,
                        placement: "bottom-start"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Button), {
                            bordered: false,
                            style: { "padding": "0 4px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\xB7\xB7\xB7")
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
                footer: withCtx(() => [
                  createTextVNode("As of April 3, 2021")
                ]),
                default: withCtx(() => [
                  createVNode(unref(NGrid), { cols: 5 }, {
                    default: withCtx(() => [
                      createVNode(unref(NGi), null, {
                        default: withCtx(() => [
                          createVNode(unref(NStatistic), {
                            label: "Episodes",
                            value: "125"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NGi), null, {
                        default: withCtx(() => [
                          createVNode(unref(NStatistic), {
                            label: "Guests",
                            value: "22"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NGi), null, {
                        default: withCtx(() => [
                          createVNode(unref(NStatistic), {
                            label: "Apologies",
                            value: "36"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NGi), null, {
                        default: withCtx(() => [
                          createVNode(unref(NStatistic), {
                            label: "Topics",
                            value: "83"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NGi), null, {
                        default: withCtx(() => [
                          createVNode(unref(NStatistic), {
                            label: "Reference Links",
                            value: "2,346"
                          })
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PageHeader-Cj91Lywe.mjs.map
