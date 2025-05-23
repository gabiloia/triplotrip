import { defineComponent, h, computed } from 'vue';
import { u as useConfig, s as useTheme, aX as typographyLight, j as cB, v as createKey, x as useThemeClass, l as c$1, k as cM } from './server.mjs';

const style = cB("h", `
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [c$1("&:first-child", {
  marginTop: 0
}), cM("prefix-bar", {
  position: "relative",
  paddingLeft: "var(--n-prefix-width)"
}, [cM("align-text", {
  paddingLeft: 0
}, [c$1("&::before", {
  left: "calc(-1 * var(--n-prefix-width))"
})]), c$1("&::before", `
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `), c$1("&::before", {
  backgroundColor: "var(--n-bar-color)"
})])]);
const headerProps = Object.assign(Object.assign({}, useTheme.props), {
  type: {
    type: String,
    default: "default"
  },
  prefix: String,
  alignText: Boolean
});
const createHeader = (level) => defineComponent({
  name: `H${level}`,
  props: headerProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-h", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        type
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          headerFontWeight,
          headerTextColor,
          [createKey("headerPrefixWidth", level)]: prefixWidth,
          [createKey("headerFontSize", level)]: fontSize,
          [createKey("headerMargin", level)]: margin,
          [createKey("headerBarWidth", level)]: barWidth,
          [createKey("headerBarColor", type)]: barColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-margin": margin,
        "--n-bar-color": barColor,
        "--n-bar-width": barWidth,
        "--n-font-weight": headerFontWeight,
        "--n-text-color": headerTextColor,
        "--n-prefix-width": prefixWidth
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass(`h${level}`, computed(() => props.type[0]), cssVarsRef, props) : void 0;
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
      prefix,
      alignText,
      mergedClsPrefix,
      cssVars,
      $slots
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(`h${level}`, {
      class: [`${mergedClsPrefix}-h`, `${mergedClsPrefix}-h${level}`, this.themeClass, {
        [`${mergedClsPrefix}-h--prefix-bar`]: prefix,
        [`${mergedClsPrefix}-h--align-text`]: alignText
      }],
      style: cssVars
    }, $slots);
  }
});
const NH1 = createHeader("1");
const NH2 = createHeader("2");
const NH3 = createHeader("3");
const NH4 = createHeader("4");
const NH5 = createHeader("5");
const NH6 = createHeader("6");

export { NH2 as N, NH1 as a, NH3 as b, NH4 as c, NH5 as d, NH6 as e };
//# sourceMappingURL=headers-Dfr-Z6Fq.mjs.map
