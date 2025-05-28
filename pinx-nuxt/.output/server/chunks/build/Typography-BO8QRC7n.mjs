import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, h, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s, u as useConfig, s as useTheme, aX as typographyLight, j as cB, x as useThemeClass, l as c$1, k as cM } from './server.mjs';
import { a as NH1, N as NH2, b as NH3, c as NH4, d as NH5, e as NH6 } from './headers-Dfr-Z6Fq.mjs';
import { N as NP } from './p-C3ycGqTc.mjs';
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

const style$3 = cB("a", `
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`);
const aProps = Object.assign({}, useTheme.props);
const NA = defineComponent({
  name: "A",
  props: aProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-a", style$3, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          aTextColor
        }
      } = themeRef.value;
      return {
        "--n-text-color": aTextColor,
        "--n-bezier": cubicBezierEaseInOut
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("a", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("a", {
      class: [`${this.mergedClsPrefix}-a`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
});
const style$2 = cB("blockquote", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 margin: 0;
 margin-top: 12px;
 margin-bottom: 12px;
 box-sizing: border-box;
 padding-left: 12px;
 border-left: 4px solid var(--n-prefix-color);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [c$1("&:first-child", {
  marginTop: 0
}), c$1("&:last-child", {
  marginBottom: 0
}), cM("align-text", {
  marginLeft: "-16px"
})]);
const blockquoteProps = Object.assign(Object.assign({}, useTheme.props), {
  alignText: Boolean
});
const NBlockquote = defineComponent({
  name: "Blockquote",
  props: blockquoteProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-blockquote", style$2, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          blockquoteTextColor,
          blockquotePrefixColor,
          blockquoteLineHeight,
          blockquoteFontSize
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": blockquoteFontSize,
        "--n-line-height": blockquoteLineHeight,
        "--n-prefix-color": blockquotePrefixColor,
        "--n-text-color": blockquoteTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("blockquote", void 0, cssVarsRef, props) : void 0;
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
    return h("blockquote", {
      class: [`${mergedClsPrefix}-blockquote`, this.themeClass, this.alignText && `${mergedClsPrefix}-blockquote--align-text`],
      style: this.cssVars
    }, this.$slots);
  }
});
const style$1 = cB("hr", `
 margin: 12px 0;
 transition: border-color .3s var(--n-bezier);
 border-left: none;
 border-right: none;
 border-bottom: none;
 border-top: 1px solid var(--n-color);
`);
const NHr = defineComponent({
  name: "Hr",
  props: Object.assign({}, useTheme.props),
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-hr", style$1, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          hrColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color": hrColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("hr", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("hr", {
      class: [`${this.mergedClsPrefix}-hr`, this.themeClass],
      style: this.cssVars
    });
  }
});
const NLi = defineComponent({
  name: "Li",
  render() {
    return h("li", null, this.$slots);
  }
});
const liStyle = c$1("li", {
  transition: "color .3s var(--n-bezier)",
  lineHeight: "var(--n-line-height)",
  margin: "var(--n-li-margin)",
  marginBottom: 0,
  color: "var(--n-text-color)"
});
const childStyle = [c$1("&:first-child", `
 margin-top: 0;
 `), c$1("&:last-child", `
 margin-bottom: 0;
 `)];
const style = c$1([cB("ol", {
  fontSize: "var(--n-font-size)",
  padding: "var(--n-ol-padding)"
}, [cM("align-text", {
  paddingLeft: 0
}), liStyle, childStyle]), cB("ul", {
  fontSize: "var(--n-font-size)",
  padding: "var(--n-ul-padding)"
}, [cM("align-text", {
  paddingLeft: 0
}), liStyle, childStyle])]);
const olProps = Object.assign(Object.assign({}, useTheme.props), {
  alignText: Boolean
});
const NOl = defineComponent({
  name: "Ol",
  props: olProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-xl", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          olPadding,
          ulPadding,
          liMargin,
          liTextColor,
          liLineHeight,
          liFontSize
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": liFontSize,
        "--n-line-height": liLineHeight,
        "--n-text-color": liTextColor,
        "--n-li-margin": liMargin,
        "--n-ol-padding": olPadding,
        "--n-ul-padding": ulPadding
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("ol", void 0, cssVarsRef, props) : void 0;
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
    return h("ol", {
      class: [`${mergedClsPrefix}-ol`, this.themeClass, this.alignText && `${mergedClsPrefix}-ol--align-text`],
      style: this.cssVars
    }, this.$slots);
  }
});
const ulProps = Object.assign(Object.assign({}, useTheme.props), {
  alignText: Boolean
});
const NUl = defineComponent({
  name: "Ul",
  props: ulProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-xl", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          olPadding,
          ulPadding,
          liMargin,
          liTextColor,
          liLineHeight,
          liFontSize
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": liFontSize,
        "--n-line-height": liLineHeight,
        "--n-text-color": liTextColor,
        "--n-li-margin": liMargin,
        "--n-ol-padding": olPadding,
        "--n-ul-padding": ulPadding
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("ul", void 0, cssVarsRef, props) : void 0;
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
    return h("ul", {
      class: [`${mergedClsPrefix}-ul`, this.themeClass, this.alignText && `${mergedClsPrefix}-ul--align-text`],
      style: this.cssVars
    }, this.$slots);
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Typography",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Typography</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/typography" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Tags" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Other naive-ui built-in tags.`);
          } else {
            return [
              createTextVNode("Other naive-ui built-in tags.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-a href="https://en.wikipedia.org/wiki/Hear_the_Wind_Sing" target="_blank">
						Hear the Wind Sing
					</n-a>
					<n-h1>h1 tag</n-h1>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h2>h2 tag</n-h2>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h3>h3 tag</n-h3>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h4>h4 tag</n-h4>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h5>h5 tag</n-h5>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h6>h6 tag</n-h6>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-ul>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ul>
					<n-hr />
					<n-ol>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ol>
					<n-ul align-text>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ul>
					<n-hr />
					<n-ol align-text>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ol>
					<n-blockquote>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-blockquote>
					<n-blockquote align-text>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-blockquote>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-a href="https://en.wikipedia.org/wiki/Hear_the_Wind_Sing" target="_blank">
						Hear the Wind Sing
					</n-a>
					<n-h1>h1 tag</n-h1>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h2>h2 tag</n-h2>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h3>h3 tag</n-h3>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h4>h4 tag</n-h4>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h5>h5 tag</n-h5>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h6>h6 tag</n-h6>
					<n-p>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-ul>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ul>
					<n-hr />
					<n-ol>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ol>
					<n-ul align-text>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ul>
					<n-hr />
					<n-ol align-text>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ol>
					<n-blockquote>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-blockquote>
					<n-blockquote align-text>
						Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-blockquote>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NA), {
              href: "https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hear the Wind Sing`);
                } else {
                  return [
                    createTextVNode("Hear the Wind Sing")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NH1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`h1 tag`);
                } else {
                  return [
                    createTextVNode("h1 tag")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NP), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. `);
                } else {
                  return [
                    createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NH2), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`h2 tag`);
                } else {
                  return [
                    createTextVNode("h2 tag")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NP), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. `);
                } else {
                  return [
                    createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NH3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`h3 tag`);
                } else {
                  return [
                    createTextVNode("h3 tag")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NP), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. `);
                } else {
                  return [
                    createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NH4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`h4 tag`);
                } else {
                  return [
                    createTextVNode("h4 tag")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NP), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. `);
                } else {
                  return [
                    createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NH5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`h5 tag`);
                } else {
                  return [
                    createTextVNode("h5 tag")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NP), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. `);
                } else {
                  return [
                    createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NH6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`h6 tag`);
                } else {
                  return [
                    createTextVNode("h6 tag")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NP), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. `);
                } else {
                  return [
                    createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NUl), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NHr), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NOl), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NUl), { "align-text": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NHr), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NOl), { "align-text": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NLi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`li tag`);
                      } else {
                        return [
                          createTextVNode("li tag")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NLi), null, {
                      default: withCtx(() => [
                        createTextVNode("li tag")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NBlockquote), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. `);
                } else {
                  return [
                    createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NBlockquote), { "align-text": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. `);
                } else {
                  return [
                    createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NA), {
                href: "https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode("Hear the Wind Sing")
                ]),
                _: 1
              }),
              createVNode(unref(NH1), null, {
                default: withCtx(() => [
                  createTextVNode("h1 tag")
                ]),
                _: 1
              }),
              createVNode(unref(NP), null, {
                default: withCtx(() => [
                  createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                ]),
                _: 1
              }),
              createVNode(unref(NH2), null, {
                default: withCtx(() => [
                  createTextVNode("h2 tag")
                ]),
                _: 1
              }),
              createVNode(unref(NP), null, {
                default: withCtx(() => [
                  createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                ]),
                _: 1
              }),
              createVNode(unref(NH3), null, {
                default: withCtx(() => [
                  createTextVNode("h3 tag")
                ]),
                _: 1
              }),
              createVNode(unref(NP), null, {
                default: withCtx(() => [
                  createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                ]),
                _: 1
              }),
              createVNode(unref(NH4), null, {
                default: withCtx(() => [
                  createTextVNode("h4 tag")
                ]),
                _: 1
              }),
              createVNode(unref(NP), null, {
                default: withCtx(() => [
                  createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                ]),
                _: 1
              }),
              createVNode(unref(NH5), null, {
                default: withCtx(() => [
                  createTextVNode("h5 tag")
                ]),
                _: 1
              }),
              createVNode(unref(NP), null, {
                default: withCtx(() => [
                  createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                ]),
                _: 1
              }),
              createVNode(unref(NH6), null, {
                default: withCtx(() => [
                  createTextVNode("h6 tag")
                ]),
                _: 1
              }),
              createVNode(unref(NP), null, {
                default: withCtx(() => [
                  createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                ]),
                _: 1
              }),
              createVNode(unref(NUl), null, {
                default: withCtx(() => [
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NHr)),
              createVNode(unref(NOl), null, {
                default: withCtx(() => [
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NUl), { "align-text": "" }, {
                default: withCtx(() => [
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NHr)),
              createVNode(unref(NOl), { "align-text": "" }, {
                default: withCtx(() => [
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NLi), null, {
                    default: withCtx(() => [
                      createTextVNode("li tag")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NBlockquote), null, {
                default: withCtx(() => [
                  createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
                ]),
                _: 1
              }),
              createVNode(unref(NBlockquote), { "align-text": "" }, {
                default: withCtx(() => [
                  createTextVNode(" Hear the Wind Sing (\u98A8\u306E\u6B4C\u3092\u8074\u3051 Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki \u014Cmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Typography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Typography-BO8QRC7n.mjs.map
