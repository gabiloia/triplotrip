import { defineComponent, h, computed } from 'vue';
import { v as useConfig, x as useTheme, aX as tableLight, m as c$1, X as useRtl, y as createKey, z as useThemeClass, k as cB, aE as insideModal, aF as insidePopover, l as cM, p as cNotM } from './server.mjs';

const style = c$1([cB("table", `
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `, [c$1("th", `
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `, [c$1("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), c$1("td", `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `, [c$1("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [c$1("tr", [c$1("&:last-child", [c$1("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), cM("single-line", [c$1("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), c$1("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("single-column", [c$1("tr", [c$1("&:not(:last-child)", [c$1("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), cM("striped", [c$1("tr:nth-of-type(even)", [c$1("td", "background-color: var(--n-td-color-striped)")])]), cNotM("bottom-bordered", [c$1("tr", [c$1("&:last-child", [c$1("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), insideModal(cB("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [c$1("th", `
 background-color: var(--n-th-color-modal);
 `), c$1("td", `
 background-color: var(--n-td-color-modal);
 `)])), insidePopover(cB("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [c$1("th", `
 background-color: var(--n-th-color-popover);
 `), c$1("td", `
 background-color: var(--n-td-color-popover);
 `)]))]);
const tableProps = Object.assign(Object.assign({}, useTheme.props), {
  bordered: {
    type: Boolean,
    default: true
  },
  bottomBordered: {
    type: Boolean,
    default: true
  },
  singleLine: {
    type: Boolean,
    default: true
  },
  striped: Boolean,
  singleColumn: Boolean,
  size: {
    type: String,
    default: "medium"
  }
});
const NTable = defineComponent({
  name: "Table",
  props: tableProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Table", "-table", style, tableLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Table", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        self: {
          borderColor,
          tdColor,
          tdColorModal,
          tdColorPopover,
          thColor,
          thColorModal,
          thColorPopover,
          thTextColor,
          tdTextColor,
          borderRadius,
          thFontWeight,
          lineHeight,
          borderColorModal,
          borderColorPopover,
          tdColorStriped,
          tdColorStripedModal,
          tdColorStripedPopover,
          [createKey("fontSize", size)]: fontSize,
          [createKey("tdPadding", size)]: tdPadding,
          [createKey("thPadding", size)]: thPadding
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-td-color": tdColor,
        "--n-td-color-modal": tdColorModal,
        "--n-td-color-popover": tdColorPopover,
        "--n-td-text-color": tdTextColor,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-border-radius": borderRadius,
        "--n-font-size": fontSize,
        "--n-th-color": thColor,
        "--n-th-color-modal": thColorModal,
        "--n-th-color-popover": thColorPopover,
        "--n-th-font-weight": thFontWeight,
        "--n-th-text-color": thTextColor,
        "--n-line-height": lineHeight,
        "--n-td-padding": tdPadding,
        "--n-th-padding": thPadding,
        "--n-td-color-striped": tdColorStriped,
        "--n-td-color-striped-modal": tdColorStripedModal,
        "--n-td-color-striped-popover": tdColorStripedPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("table", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
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
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("table", {
      class: [`${mergedClsPrefix}-table`, this.themeClass, {
        [`${mergedClsPrefix}-table--rtl`]: this.rtlEnabled,
        [`${mergedClsPrefix}-table--bottom-bordered`]: this.bottomBordered,
        [`${mergedClsPrefix}-table--bordered`]: this.bordered,
        [`${mergedClsPrefix}-table--single-line`]: this.singleLine,
        [`${mergedClsPrefix}-table--single-column`]: this.singleColumn,
        [`${mergedClsPrefix}-table--striped`]: this.striped
      }],
      style: this.cssVars
    }, this.$slots);
  }
});

export { NTable as N };
//# sourceMappingURL=Table-DHR5Jp8n.mjs.map
