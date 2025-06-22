import { defineComponent, h, computed } from 'vue';
import { s as resolveWrappedSlot, v as useConfig, x as useTheme, bJ as statisticLight, k as cB, X as useRtl, z as useThemeClass, n as cE } from './server.mjs';

const style = cB("statistic", [cE("label", `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `), cB("statistic-value", `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [cE("prefix", `
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [cB("icon", {
  verticalAlign: "-0.125em"
})]), cE("content", `
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `), cE("suffix", `
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [cB("icon", {
  verticalAlign: "-0.125em"
})])])]);
const statisticProps = Object.assign(Object.assign({}, useTheme.props), {
  tabularNums: Boolean,
  label: String,
  value: [String, Number]
});
const NStatistic = defineComponent({
  name: "Statistic",
  props: statisticProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Statistic", "-statistic", style, statisticLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Statistic", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          labelFontWeight,
          valueFontSize,
          valueFontWeight,
          valuePrefixTextColor,
          labelTextColor,
          valueSuffixTextColor,
          valueTextColor,
          labelFontSize
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-label-font-size": labelFontSize,
        "--n-label-font-weight": labelFontWeight,
        "--n-label-text-color": labelTextColor,
        "--n-value-font-weight": valueFontWeight,
        "--n-value-font-size": valueFontSize,
        "--n-value-prefix-text-color": valuePrefixTextColor,
        "--n-value-suffix-text-color": valueSuffixTextColor,
        "--n-value-text-color": valueTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("statistic", void 0, cssVarsRef, props) : void 0;
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
      mergedClsPrefix,
      $slots: {
        default: defaultSlot,
        label: labelSlot,
        prefix: prefixSlot,
        suffix: suffixSlot
      }
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-statistic`, this.themeClass, this.rtlEnabled && `${mergedClsPrefix}-statistic--rtl`],
      style: this.cssVars
    }, resolveWrappedSlot(labelSlot, (children) => h("div", {
      class: `${mergedClsPrefix}-statistic__label`
    }, this.label || children)), h("div", {
      class: `${mergedClsPrefix}-statistic-value`,
      style: {
        fontVariantNumeric: this.tabularNums ? "tabular-nums" : ""
      }
    }, resolveWrappedSlot(prefixSlot, (children) => children && h("span", {
      class: `${mergedClsPrefix}-statistic-value__prefix`
    }, children)), this.value !== void 0 ? h("span", {
      class: `${mergedClsPrefix}-statistic-value__content`
    }, this.value) : resolveWrappedSlot(defaultSlot, (children) => children && h("span", {
      class: `${mergedClsPrefix}-statistic-value__content`
    }, children)), resolveWrappedSlot(suffixSlot, (children) => children && h("span", {
      class: `${mergedClsPrefix}-statistic-value__suffix`
    }, children))));
  }
});

export { NStatistic as N };
//# sourceMappingURL=Statistic-cTIAyhBf.mjs.map
