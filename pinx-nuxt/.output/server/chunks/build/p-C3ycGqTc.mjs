import { defineComponent, h, computed } from 'vue';
import { u as useConfig, s as useTheme, aX as typographyLight, j as cB, x as useThemeClass, l as c$1 } from './server.mjs';

const style = cB("p", `
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`, [c$1("&:first-child", "margin-top: 0;"), c$1("&:last-child", "margin-bottom: 0;")]);
const pProps = Object.assign(Object.assign({}, useTheme.props), {
  depth: [String, Number]
});
const NP = defineComponent({
  name: "P",
  props: pProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-p", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        depth
      } = props;
      const typeSafeDepth = depth || "1";
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          pFontSize,
          pLineHeight,
          pMargin,
          pTextColor,
          [`pTextColor${typeSafeDepth}Depth`]: depthTextColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": pFontSize,
        "--n-line-height": pLineHeight,
        "--n-margin": pMargin,
        "--n-text-color": depth === void 0 ? pTextColor : depthTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("p", computed(() => `${props.depth || ""}`), cssVarsRef, props) : void 0;
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
    return h("p", {
      class: [`${this.mergedClsPrefix}-p`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
});

export { NP as N };
//# sourceMappingURL=p-C3ycGqTc.mjs.map
