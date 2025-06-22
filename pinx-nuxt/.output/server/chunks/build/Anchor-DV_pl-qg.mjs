import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, computed, inject, toRef, watch, provide, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, aS as keep, v as useConfig, x as useTheme, bw as anchorLight, k as cB, z as useThemeClass, P as keysOf, h as createInjectionKey, at as getTitleAttribute, p as cNotM, l as cM, m as c$1, n as cE, U as Scrollbar$1 } from './server.mjs';
import { N as NAffix, a as affixPropKeys, b as affixProps } from './Affix-Cp80P5sj.mjs';
import { throttle } from 'lodash-es';
import { unwrapElement } from 'seemly';
import { useMemo, onFontsReady } from 'vooks';
import { a as useInjectionCollection, b as useInjectionElementCollection } from './use-collection-Dfn99m8m.mjs';
import { N as NSpace } from './Space-BkDN_nha.mjs';
import { N as NSwitch } from './Switch-DC90Lqaq.mjs';
import './LtrContext-CjyxPKj1.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BZVO93eO.mjs';
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

const anchorInjectionKey = createInjectionKey("n-anchor");
const anchorLinkProps = {
  title: String,
  href: String
};
const NAnchorLink = defineComponent({
  name: "AnchorLink",
  props: anchorLinkProps,
  setup(props, {
    slots
  }) {
    const titleRef = ref(null);
    const NAnchor2 = inject(anchorInjectionKey);
    const hrefRef = toRef(props, "href");
    const activeRef = useMemo(() => {
      return hrefRef.value && hrefRef.value === NAnchor2.activeHref.value;
    });
    useInjectionCollection(anchorInjectionKey, "collectedLinkHrefs", hrefRef);
    useInjectionElementCollection(anchorInjectionKey, "titleEls");
    watch(activeRef, (value) => {
      if (value && titleRef.value) {
        NAnchor2.updateBarPosition(titleRef.value);
      }
    });
    function handleClick() {
      if (props.href !== void 0) {
        NAnchor2.setActiveHref(props.href);
      }
    }
    return () => {
      var _a;
      const {
        value: mergedClsPrefix
      } = NAnchor2.mergedClsPrefix;
      return h("div", {
        class: [`${mergedClsPrefix}-anchor-link`, activeRef.value && `${mergedClsPrefix}-anchor-link--active`]
      }, h("a", {
        ref: titleRef,
        class: [`${mergedClsPrefix}-anchor-link__title`],
        href: props.href,
        title: getTitleAttribute(props.title),
        onClick: handleClick
      }, props.title), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
  }
});
function getOffset(el, scrollTarget) {
  const {
    top: elTop,
    height
  } = el.getBoundingClientRect();
  const scrollTargetTop = scrollTarget instanceof HTMLElement ? scrollTarget.getBoundingClientRect().top : 0;
  return {
    top: elTop - scrollTargetTop,
    height
  };
}
const baseAnchorProps = {
  type: {
    type: String,
    default: "rail"
  },
  showRail: {
    type: Boolean,
    default: true
  },
  showBackground: {
    type: Boolean,
    default: true
  },
  bound: {
    type: Number,
    default: 12
  },
  internalScrollable: Boolean,
  ignoreGap: Boolean,
  offsetTarget: [String, Object, Function]
};
const baseAnchorPropKeys = keysOf(baseAnchorProps);
const NBaseAnchor = defineComponent({
  name: "BaseAnchor",
  props: Object.assign(Object.assign({}, baseAnchorProps), {
    mergedClsPrefix: {
      type: String,
      required: true
    }
  }),
  setup(props) {
    const collectedLinkHrefs = [];
    const titleEls = [];
    const activeHrefRef = ref(null);
    const slotRef = ref(null);
    const barRef = ref(null);
    const selfRef = ref(null);
    const isBlockTypeRef = computed(() => {
      return props.type === "block";
    });
    const mergedShowRailRef = computed(() => {
      return !isBlockTypeRef.value && props.showRail;
    });
    function disableTransitionOneTick() {
      const {
        value: barEl
      } = barRef;
      const {
        value: slotEl
      } = slotRef;
      if (barEl) {
        barEl.style.transition = "none";
      }
      if (slotEl) {
        slotEl.style.transition = "none";
      }
      if (titleEls) {
        titleEls.forEach((titleEl) => {
          titleEl.style.transition = "none";
        });
      }
      void nextTick(() => {
        const {
          value: nextBarEl
        } = barRef;
        const {
          value: nextSlotEl
        } = slotRef;
        if (nextBarEl) {
          void nextBarEl.offsetWidth;
          nextBarEl.style.transition = "";
        }
        if (nextSlotEl) {
          void nextSlotEl.offsetWidth;
          nextSlotEl.style.transition = "";
        }
        if (titleEls) {
          titleEls.forEach((titleEl) => {
            void titleEl.offsetWidth;
            titleEl.style.transition = "";
          });
        }
      });
    }
    function updateBarPosition(linkTitleEl, transition = true) {
      const {
        value: barEl
      } = barRef;
      const {
        value: slotEl
      } = slotRef;
      const {
        value: selfEl
      } = selfRef;
      if (!selfEl || !barEl) return;
      if (!transition) {
        barEl.style.transition = "none";
        if (slotEl) slotEl.style.transition = "none";
      }
      const {
        offsetHeight,
        offsetWidth
      } = linkTitleEl;
      const {
        top: linkTitleClientTop,
        left: linkTitleClientLeft
      } = linkTitleEl.getBoundingClientRect();
      const {
        top: anchorClientTop,
        left: anchorClientLeft
      } = selfEl.getBoundingClientRect();
      const offsetTop = linkTitleClientTop - anchorClientTop;
      const offsetLeft = linkTitleClientLeft - anchorClientLeft;
      barEl.style.top = `${offsetTop}px`;
      barEl.style.height = `${offsetHeight}px`;
      if (slotEl) {
        slotEl.style.top = `${offsetTop}px`;
        slotEl.style.height = `${offsetHeight}px`;
        slotEl.style.maxWidth = `${offsetWidth + offsetLeft}px`;
      }
      void barEl.offsetHeight;
      if (slotEl) void slotEl.offsetHeight;
      if (!transition) {
        barEl.style.transition = "";
        if (slotEl) slotEl.style.transition = "";
      }
    }
    const handleScroll = throttle(() => {
      _handleScroll(true);
    }, 128);
    function setActiveHref(href, transition = true) {
      const idMatchResult = /^#([^#]+)$/.exec(href);
      if (!idMatchResult) return;
      const linkEl = (void 0).getElementById(idMatchResult[1]);
      if (!linkEl) return;
      activeHrefRef.value = href;
      linkEl.scrollIntoView();
      if (!transition) {
        disableTransitionOneTick();
      }
      handleScroll();
    }
    function _handleScroll(transition = true) {
      var _a;
      const links = [];
      const offsetTarget = unwrapElement((_a = props.offsetTarget) !== null && _a !== void 0 ? _a : void 0);
      collectedLinkHrefs.forEach((href) => {
        const idMatchResult = /#([^#]+)$/.exec(href);
        if (!idMatchResult) return;
        const linkEl = (void 0).getElementById(idMatchResult[1]);
        if (linkEl && offsetTarget) {
          const {
            top,
            height
          } = getOffset(linkEl, offsetTarget);
          links.push({
            top,
            height,
            href
          });
        }
      });
      links.sort((a, b) => {
        if (a.top > b.top) {
          return 1;
        } else if (a.top === b.top && a.height < b.height) {
          return -1;
        }
        return -1;
      });
      const currentActiveHref = activeHrefRef.value;
      const {
        bound,
        ignoreGap
      } = props;
      const activeLink = links.reduce((prevLink, link) => {
        if (link.top + link.height < 0) {
          if (ignoreGap) {
            return link;
          } else {
            return prevLink;
          }
        }
        if (link.top <= bound) {
          if (prevLink === null) {
            return link;
          } else if (link.top === prevLink.top) {
            if (link.href === currentActiveHref) {
              return link;
            } else {
              return prevLink;
            }
          } else if (link.top > prevLink.top) {
            return link;
          } else {
            return prevLink;
          }
        }
        return prevLink;
      }, null);
      if (!transition) disableTransitionOneTick();
      if (activeLink) {
        activeHrefRef.value = activeLink.href;
      } else {
        activeHrefRef.value = null;
      }
    }
    provide(anchorInjectionKey, {
      activeHref: activeHrefRef,
      mergedClsPrefix: toRef(props, "mergedClsPrefix"),
      updateBarPosition,
      setActiveHref,
      collectedLinkHrefs,
      titleEls
    });
    onFontsReady(() => {
      setActiveHref((void 0).location.hash);
      _handleScroll(false);
    });
    watch(activeHrefRef, (value) => {
      if (value === null) {
        const {
          value: slotEl
        } = slotRef;
        if (slotEl && !isBlockTypeRef.value) {
          slotEl.style.maxWidth = "0";
        }
      }
    });
    return {
      selfRef,
      barRef,
      slotRef,
      setActiveHref,
      activeHref: activeHrefRef,
      isBlockType: isBlockTypeRef,
      mergedShowRail: mergedShowRailRef
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      mergedShowRail,
      isBlockType,
      $slots
    } = this;
    const Anchor = h("div", {
      class: [`${mergedClsPrefix}-anchor`, isBlockType && `${mergedClsPrefix}-anchor--block`, mergedShowRail && `${mergedClsPrefix}-anchor--show-rail`],
      ref: "selfRef"
    }, mergedShowRail && this.showBackground ? h("div", {
      ref: "slotRef",
      class: `${mergedClsPrefix}-anchor-link-background`
    }) : null, mergedShowRail ? h("div", {
      class: `${mergedClsPrefix}-anchor-rail`
    }, h("div", {
      ref: "barRef",
      class: [`${mergedClsPrefix}-anchor-rail__bar`, this.activeHref !== null && `${mergedClsPrefix}-anchor-rail__bar--active`]
    })) : null, (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots));
    return this.internalScrollable ? h(Scrollbar$1, null, {
      default: () => Anchor
    }) : Anchor;
  }
});
const style = cB("anchor", `
 position: relative;
`, [cNotM("block", `
 padding-left: var(--n-rail-width);
 `, [cB("anchor-link", [c$1("+, >", [cB("anchor-link", `
 margin-top: .5em;
 `)])]), cB("anchor-link-background", `
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `), cNotM("show-rail", [c$1(">", [cB("anchor-link", "padding-left: 0;")])])]), cM("block", [cB("anchor-link", `
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `, [cM("active", `
 background-color: var(--n-link-color);
 `)])]), cB("anchor-link-background", `
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("anchor-rail", `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [cE("bar", `
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [cM("active", {
  backgroundColor: "var(--n-rail-color-active)"
})])]), cB("anchor-link", `
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `, [cM("active", [c$1(">", [cE("title", `
 color: var(--n-link-text-color-active);
 `)])]), cE("title", `
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `, [c$1("&:hover, &:focus", `
 color: var(--n-link-text-color-hover);
 `), c$1("&:active", `
 color: var(--n-link-text-color-pressed);
 `)])])]);
const anchorProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), {
  affix: Boolean
}), affixProps), baseAnchorProps);
const NAnchor = defineComponent({
  name: "Anchor",
  props: anchorProps,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Anchor", "-anchor", style, anchorLight, props, mergedClsPrefixRef);
    const anchorRef = ref(null);
    const cssVarsRef = computed(() => {
      const {
        self: {
          railColor,
          linkColor,
          railColorActive,
          linkTextColor,
          linkTextColorHover,
          linkTextColorPressed,
          linkTextColorActive,
          linkFontSize,
          railWidth,
          linkPadding,
          borderRadius
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-link-border-radius": borderRadius,
        "--n-link-color": linkColor,
        "--n-link-font-size": linkFontSize,
        "--n-link-text-color": linkTextColor,
        "--n-link-text-color-hover": linkTextColorHover,
        "--n-link-text-color-active": linkTextColorActive,
        "--n-link-text-color-pressed": linkTextColorPressed,
        "--n-link-padding": linkPadding,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-rail-color": railColor,
        "--n-rail-color-active": railColorActive,
        "--n-rail-width": railWidth
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("anchor", void 0, cssVarsRef, props) : void 0;
    return {
      scrollTo(href) {
        var _a;
        (_a = anchorRef.value) === null || _a === void 0 ? void 0 : _a.setActiveHref(href);
      },
      renderAnchor: () => {
        themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender();
        return h(NBaseAnchor, Object.assign({
          ref: anchorRef,
          style: inlineThemeDisabled ? void 0 : cssVarsRef.value,
          class: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value
        }, keep(props, baseAnchorPropKeys), {
          mergedClsPrefix: mergedClsPrefixRef.value
        }), slots);
      }
    };
  },
  render() {
    return !this.affix ? this.renderAnchor() : h(NAffix, Object.assign({}, keep(this, affixPropKeys)), {
      default: this.renderAnchor
    });
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Anchor",
  __ssrInlineRender: true,
  setup(__props) {
    const showRail = ref(true);
    const showBackground = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Anchor</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/anchor" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
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
					<n-space style="margin-bottom: 12px">
						<n-switch v-model:value="showRail" />
						Show Rail
						<n-switch v-model:value="showBackground" />
						Show Background
					</n-space>
					<n-anchor :show-rail="showRail" :show-background="showBackground">
						<n-anchor-link title="Demos" href="#Demos">
							<n-anchor-link title="Basic" href="#basic.vue" />
							<n-anchor-link title="Ignore-Gap" href="#ignore-gap.vue" />
							<n-anchor-link title="Affix" href="#affix.vue" />
							<n-anchor-link title="Scroll To" href="#scrollto.vue" />
						</n-anchor-link>
						<n-anchor-link title="API" href="#API" />
					</n-anchor>
					`))} ${ssrInterpolate(js(`
						const showRail = ref(true)
						const showBackground = ref(true)
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space style="margin-bottom: 12px">
						<n-switch v-model:value="showRail" />
						Show Rail
						<n-switch v-model:value="showBackground" />
						Show Background
					</n-space>
					<n-anchor :show-rail="showRail" :show-background="showBackground">
						<n-anchor-link title="Demos" href="#Demos">
							<n-anchor-link title="Basic" href="#basic.vue" />
							<n-anchor-link title="Ignore-Gap" href="#ignore-gap.vue" />
							<n-anchor-link title="Affix" href="#affix.vue" />
							<n-anchor-link title="Scroll To" href="#scrollto.vue" />
						</n-anchor-link>
						<n-anchor-link title="API" href="#API" />
					</n-anchor>
					`)) + " " + toDisplayString(js(`
						const showRail = ref(true)
						const showBackground = ref(true)
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { style: { "margin-bottom": "12px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSwitch), {
                    value: showRail.value,
                    "onUpdate:value": ($event) => showRail.value = $event
                  }, null, _parent3, _scopeId2));
                  _push3(` Show Rail `);
                  _push3(ssrRenderComponent(unref(NSwitch), {
                    value: showBackground.value,
                    "onUpdate:value": ($event) => showBackground.value = $event
                  }, null, _parent3, _scopeId2));
                  _push3(` Show Background `);
                } else {
                  return [
                    createVNode(unref(NSwitch), {
                      value: showRail.value,
                      "onUpdate:value": ($event) => showRail.value = $event
                    }, null, 8, ["value", "onUpdate:value"]),
                    createTextVNode(" Show Rail "),
                    createVNode(unref(NSwitch), {
                      value: showBackground.value,
                      "onUpdate:value": ($event) => showBackground.value = $event
                    }, null, 8, ["value", "onUpdate:value"]),
                    createTextVNode(" Show Background ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NAnchor), {
              "show-rail": showRail.value,
              "show-background": showBackground.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NAnchorLink), {
                    title: "Demos",
                    href: "#Demos"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NAnchorLink), {
                          title: "Basic",
                          href: "#basic.vue"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NAnchorLink), {
                          title: "Ignore-Gap",
                          href: "#ignore-gap.vue"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NAnchorLink), {
                          title: "Affix",
                          href: "#affix.vue"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NAnchorLink), {
                          title: "Scroll To",
                          href: "#scrollto.vue"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NAnchorLink), {
                            title: "Basic",
                            href: "#basic.vue"
                          }),
                          createVNode(unref(NAnchorLink), {
                            title: "Ignore-Gap",
                            href: "#ignore-gap.vue"
                          }),
                          createVNode(unref(NAnchorLink), {
                            title: "Affix",
                            href: "#affix.vue"
                          }),
                          createVNode(unref(NAnchorLink), {
                            title: "Scroll To",
                            href: "#scrollto.vue"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NAnchorLink), {
                    title: "API",
                    href: "#API"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NAnchorLink), {
                      title: "Demos",
                      href: "#Demos"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NAnchorLink), {
                          title: "Basic",
                          href: "#basic.vue"
                        }),
                        createVNode(unref(NAnchorLink), {
                          title: "Ignore-Gap",
                          href: "#ignore-gap.vue"
                        }),
                        createVNode(unref(NAnchorLink), {
                          title: "Affix",
                          href: "#affix.vue"
                        }),
                        createVNode(unref(NAnchorLink), {
                          title: "Scroll To",
                          href: "#scrollto.vue"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NAnchorLink), {
                      title: "API",
                      href: "#API"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { style: { "margin-bottom": "12px" } }, {
                default: withCtx(() => [
                  createVNode(unref(NSwitch), {
                    value: showRail.value,
                    "onUpdate:value": ($event) => showRail.value = $event
                  }, null, 8, ["value", "onUpdate:value"]),
                  createTextVNode(" Show Rail "),
                  createVNode(unref(NSwitch), {
                    value: showBackground.value,
                    "onUpdate:value": ($event) => showBackground.value = $event
                  }, null, 8, ["value", "onUpdate:value"]),
                  createTextVNode(" Show Background ")
                ]),
                _: 1
              }),
              createVNode(unref(NAnchor), {
                "show-rail": showRail.value,
                "show-background": showBackground.value
              }, {
                default: withCtx(() => [
                  createVNode(unref(NAnchorLink), {
                    title: "Demos",
                    href: "#Demos"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NAnchorLink), {
                        title: "Basic",
                        href: "#basic.vue"
                      }),
                      createVNode(unref(NAnchorLink), {
                        title: "Ignore-Gap",
                        href: "#ignore-gap.vue"
                      }),
                      createVNode(unref(NAnchorLink), {
                        title: "Affix",
                        href: "#affix.vue"
                      }),
                      createVNode(unref(NAnchorLink), {
                        title: "Scroll To",
                        href: "#scrollto.vue"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NAnchorLink), {
                    title: "API",
                    href: "#API"
                  })
                ]),
                _: 1
              }, 8, ["show-rail", "show-background"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Anchor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Anchor-DV_pl-qg.mjs.map
