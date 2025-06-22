import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, Transition, ref, watchEffect, watch, toRef, computed, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, a3 as LazyTeleport, K as resolveSlot, i as NBaseIcon, v as useConfig, R as formatLength, bC as lockHtmlScrollRightCompensationRef, x as useTheme, bD as backTopLight, k as cB, z as useThemeClass, a2 as fadeInScaleUpTransition, l as cM, m as c$1 } from './server.mjs';
import { useMergedState, useIsMounted } from 'vooks';
import './LtrContext-CjyxPKj1.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BZVO93eO.mjs';
import 'seemly';
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

function isDocument(node) {
  return node.nodeName === "#document";
}
const renderBackTopIcon = () => h("svg", {
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xlinkHref: "http://www.w3.org/1999/xlink"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  transform: "translate(-139.000000, -4423.000000)",
  "fill-rule": "nonzero"
}, h("g", {
  transform: "translate(120.000000, 4285.000000)"
}, h("g", {
  transform: "translate(7.000000, 126.000000)"
}, h("g", {
  transform: "translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"
}, h("g", {
  transform: "translate(4.000000, 2.000000)"
}, h("path", {
  d: "M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"
}), h("path", {
  d: "M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"
}))))))));
const style = cB("back-top", `
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`, [fadeInScaleUpTransition(), cM("transition-disabled", {
  transition: "none !important"
}), cB("base-icon", `
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `), c$1("svg", {
  pointerEvents: "none"
}), c$1("&:hover", {
  boxShadow: "var(--n-box-shadow-hover)"
}, [cB("base-icon", {
  color: "var(--n-icon-color-hover)"
})]), c$1("&:active", {
  boxShadow: "var(--n-box-shadow-pressed)"
}, [cB("base-icon", {
  color: "var(--n-icon-color-pressed)"
})])]);
const backTopProps = Object.assign(Object.assign({}, useTheme.props), {
  show: {
    type: Boolean,
    default: void 0
  },
  right: {
    type: [Number, String],
    default: 40
  },
  bottom: {
    type: [Number, String],
    default: 40
  },
  to: {
    type: [String, Object],
    default: "body"
  },
  visibilityHeight: {
    type: Number,
    default: 180
  },
  listenTo: [String, Object, Function],
  "onUpdate:show": {
    type: Function,
    default: () => {
    }
  },
  // deprecated
  target: Function,
  onShow: Function,
  onHide: Function
});
const NBackTop = defineComponent({
  name: "BackTop",
  // make style applied to back-top button
  inheritAttrs: false,
  props: backTopProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const scrollTopRef = ref(null);
    const uncontrolledShowRef = ref(false);
    watchEffect(() => {
      const {
        value: scrollTop
      } = scrollTopRef;
      if (scrollTop === null) {
        uncontrolledShowRef.value = false;
        return;
      }
      uncontrolledShowRef.value = scrollTop >= props.visibilityHeight;
    });
    const DomInfoReadyRef = ref(false);
    watch(uncontrolledShowRef, (value) => {
      var _a;
      if (DomInfoReadyRef.value) {
        (_a = props["onUpdate:show"]) === null || _a === void 0 ? void 0 : _a.call(props, value);
      }
    });
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const transitionDisabledRef = ref(true);
    const placeholderRef = ref(null);
    const styleRef = computed(() => {
      return {
        right: `calc(${formatLength(props.right)} + ${lockHtmlScrollRightCompensationRef.value})`,
        bottom: formatLength(props.bottom)
      };
    });
    let scrollElement;
    watch(mergedShowRef, (value) => {
      var _a, _b;
      if (DomInfoReadyRef.value) {
        if (value) {
          (_a = props.onShow) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        (_b = props.onHide) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    });
    const themeRef = useTheme("BackTop", "-back-top", style, backTopLight, props, mergedClsPrefixRef);
    function handleClick() {
      (isDocument(scrollElement) ? (void 0).documentElement : scrollElement).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    function handleScroll() {
      scrollTopRef.value = (isDocument(scrollElement) ? (void 0).documentElement : scrollElement).scrollTop;
      if (!DomInfoReadyRef.value) {
        void nextTick(() => {
          DomInfoReadyRef.value = true;
        });
      }
    }
    function handleAfterEnter() {
      transitionDisabledRef.value = false;
    }
    const cssVarsRef = computed(() => {
      const {
        self: {
          color,
          boxShadow,
          boxShadowHover,
          boxShadowPressed,
          iconColor,
          iconColorHover,
          iconColorPressed,
          width,
          height,
          iconSize,
          borderRadius,
          textColor
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-width": width,
        "--n-box-shadow": boxShadow,
        "--n-box-shadow-hover": boxShadowHover,
        "--n-box-shadow-pressed": boxShadowPressed,
        "--n-color": color,
        "--n-icon-size": iconSize,
        "--n-icon-color": iconColor,
        "--n-icon-color-hover": iconColorHover,
        "--n-icon-color-pressed": iconColorPressed,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("back-top", void 0, cssVarsRef, props) : void 0;
    return {
      placeholderRef,
      style: styleRef,
      mergedShow: mergedShowRef,
      isMounted: useIsMounted(),
      scrollElement: ref(null),
      scrollTop: scrollTopRef,
      DomInfoReady: DomInfoReadyRef,
      transitionDisabled: transitionDisabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      handleAfterEnter,
      handleScroll,
      handleClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      ref: "placeholderRef",
      class: `${mergedClsPrefix}-back-top-placeholder`,
      style: "display: none",
      "aria-hidden": true
    }, h(LazyTeleport, {
      to: this.to,
      show: this.mergedShow
    }, {
      default: () => h(Transition, {
        name: "fade-in-scale-up-transition",
        appear: this.isMounted,
        onAfterEnter: this.handleAfterEnter
      }, {
        default: () => {
          var _a;
          (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
          return this.mergedShow ? h("div", mergeProps(this.$attrs, {
            class: [`${mergedClsPrefix}-back-top`, this.themeClass, this.transitionDisabled && `${mergedClsPrefix}-back-top--transition-disabled`],
            style: [this.style, this.cssVars],
            onClick: this.handleClick
          }), resolveSlot(this.$slots.default, () => [h(NBaseIcon, {
            clsPrefix: mergedClsPrefix
          }, {
            default: renderBackTopIcon
          })])) : null;
        }
      })
    }));
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackTop",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Back Top</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/back-top" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-lg"
      }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` BackTop will find its first scrollable ascendant element and listen scroll event on it. `);
          } else {
            return [
              createTextVNode(" BackTop will find its first scrollable ascendant element and listen scroll event on it. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-back-top :show="true" />
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-back-top :show="true" />
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NBackTop), { show: true }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NBackTop), { show: true })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/BackTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=BackTop-XLVVEGIy.mjs.map
