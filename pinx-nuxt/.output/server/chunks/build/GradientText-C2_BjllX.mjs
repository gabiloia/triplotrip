import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, h, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s, u as useConfig, P as formatLength, s as useTheme, c1 as gradientTextLight, j as cB, v as createKey, x as useThemeClass } from './server.mjs';
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

const style = cB("gradient-text", `
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`);
const gradientTextProps = Object.assign(Object.assign({}, useTheme.props), {
  size: [String, Number],
  fontSize: [String, Number],
  type: {
    type: String,
    default: "primary"
  },
  color: [Object, String],
  gradient: [Object, String]
});
const NGradientText = defineComponent({
  name: "GradientText",
  props: gradientTextProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const compatibleTypeRef = computed(() => {
      const {
        type
      } = props;
      if (type === "danger") return "error";
      return type;
    });
    const styleFontSizeRef = computed(() => {
      let fontSize = props.size || props.fontSize;
      if (fontSize) fontSize = formatLength(fontSize);
      return fontSize || void 0;
    });
    const styleBgImageRef = computed(() => {
      const gradient = props.color || props.gradient;
      if (typeof gradient === "string") {
        return gradient;
      } else if (gradient) {
        const deg = gradient.deg || 0;
        const from = gradient.from;
        const to = gradient.to;
        return `linear-gradient(${deg}deg, ${from} 0%, ${to} 100%)`;
      }
      return void 0;
    });
    const themeRef = useTheme("GradientText", "-gradient-text", style, gradientTextLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        value: type
      } = compatibleTypeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          rotate,
          [createKey("colorStart", type)]: colorStart,
          [createKey("colorEnd", type)]: colorEnd,
          fontWeight
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-rotate": rotate,
        "--n-color-start": colorStart,
        "--n-color-end": colorEnd,
        "--n-font-weight": fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("gradient-text", computed(() => compatibleTypeRef.value[0]), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compatibleType: compatibleTypeRef,
      styleFontSize: styleFontSizeRef,
      styleBgImage: styleBgImageRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("span", {
      class: [`${mergedClsPrefix}-gradient-text`, `${mergedClsPrefix}-gradient-text--${this.compatibleType}-type`, this.themeClass],
      style: [{
        fontSize: this.styleFontSize,
        backgroundImage: this.styleBgImage
      }, this.cssVars]
    }, this.$slots);
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GradientText",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Gradient Text</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/gradient-text" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Type" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A gradient text component can have different types.`);
          } else {
            return [
              createTextVNode("A gradient text component can have different types.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-gradient-text type="error">Boom!</n-gradient-text>
					<br />
					<n-gradient-text type="info">Emmm</n-gradient-text>
					<br />
					<n-gradient-text type="warning">Oops!</n-gradient-text>
					<br />
					<n-gradient-text type="success">Haha!</n-gradient-text>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-gradient-text type="error">Boom!</n-gradient-text>
					<br />
					<n-gradient-text type="info">Emmm</n-gradient-text>
					<br />
					<n-gradient-text type="warning">Oops!</n-gradient-text>
					<br />
					<n-gradient-text type="success">Haha!</n-gradient-text>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NGradientText), { type: "error" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Boom!`);
                } else {
                  return [
                    createTextVNode("Boom!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NGradientText), { type: "info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Emmm`);
                } else {
                  return [
                    createTextVNode("Emmm")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NGradientText), { type: "warning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Oops!`);
                } else {
                  return [
                    createTextVNode("Oops!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NGradientText), { type: "success" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Haha!`);
                } else {
                  return [
                    createTextVNode("Haha!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NGradientText), { type: "error" }, {
                default: withCtx(() => [
                  createTextVNode("Boom!")
                ]),
                _: 1
              }),
              createVNode("br"),
              createVNode(unref(NGradientText), { type: "info" }, {
                default: withCtx(() => [
                  createTextVNode("Emmm")
                ]),
                _: 1
              }),
              createVNode("br"),
              createVNode(unref(NGradientText), { type: "warning" }, {
                default: withCtx(() => [
                  createTextVNode("Oops!")
                ]),
                _: 1
              }),
              createVNode("br"),
              createVNode(unref(NGradientText), { type: "success" }, {
                default: withCtx(() => [
                  createTextVNode("Haha!")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Customizing gradient" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Design it yourself.`);
          } else {
            return [
              createTextVNode("Design it yourself.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-gradient-text :size="20" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
						A Scribbled Color
					</n-gradient-text>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-gradient-text :size="20" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
						A Scribbled Color
					</n-gradient-text>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NGradientText), {
              size: 20,
              gradient: "linear-gradient(90deg, red 0%, green 50%, blue 100%)"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` A Scribbled Color `);
                } else {
                  return [
                    createTextVNode(" A Scribbled Color ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NGradientText), {
                size: 20,
                gradient: "linear-gradient(90deg, red 0%, green 50%, blue 100%)"
              }, {
                default: withCtx(() => [
                  createTextVNode(" A Scribbled Color ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/GradientText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=GradientText-C2_BjllX.mjs.map
