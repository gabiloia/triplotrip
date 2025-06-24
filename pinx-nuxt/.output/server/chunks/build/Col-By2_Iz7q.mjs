import { defineComponent, h, provide, toRef, inject, computed } from 'vue';
import { useMemo } from 'vooks';
import { repeat } from 'seemly';
import { v as useConfig, a0 as useStyle, m as c$1, Y as useRtl, h as createInjectionKey, S as formatLength, t as throwError, k as cB, n as cE, l as cM } from './server.mjs';

const positionStyles = repeat(24, null).map((_, index) => {
  const prefixIndex = index + 1;
  const percent = `calc(100% / 24 * ${prefixIndex})`;
  return [cM(`${prefixIndex}-span`, {
    width: percent
  }), cM(`${prefixIndex}-offset`, {
    marginLeft: percent
  }), cM(`${prefixIndex}-push`, {
    left: percent
  }), cM(`${prefixIndex}-pull`, {
    right: percent
  })];
});
const style = c$1([cB("row", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap"
}), cB("col", {
  verticalAlign: "top",
  boxSizing: "border-box",
  display: "inline-block",
  position: "relative",
  zIndex: "auto"
}, [cE("box", {
  position: "relative",
  zIndex: "auto",
  width: "100%",
  height: "100%"
}), positionStyles])]);
const rowInjectionKey = createInjectionKey("n-row");
const rowProps = {
  gutter: {
    type: [Array, Number, String],
    default: 0
  },
  alignItems: String,
  justifyContent: String
};
const NRow = defineComponent({
  name: "Row",
  props: rowProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    useStyle("-legacy-grid", style, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Row", mergedRtlRef, mergedClsPrefixRef);
    const verticalGutterRef = useMemo(() => {
      const {
        gutter
      } = props;
      if (Array.isArray(gutter)) {
        return gutter[1] || 0;
      }
      return 0;
    });
    const horizontalGutterRef = useMemo(() => {
      const {
        gutter
      } = props;
      if (Array.isArray(gutter)) {
        return gutter[0];
      }
      return Number(gutter);
    });
    provide(rowInjectionKey, {
      mergedClsPrefixRef,
      gutterRef: toRef(props, "gutter"),
      verticalGutterRef,
      horizontalGutterRef
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      styleMargin: useMemo(() => `-${formatLength(verticalGutterRef.value, {
        c: 0.5
      })} -${formatLength(horizontalGutterRef.value, {
        c: 0.5
      })}`),
      styleWidth: useMemo(() => `calc(100% + ${formatLength(horizontalGutterRef.value)})`)
    };
  },
  render() {
    return h("div", {
      class: [`${this.mergedClsPrefix}-row`, this.rtlEnabled && `${this.mergedClsPrefix}-row--rtl`],
      style: {
        margin: this.styleMargin,
        width: this.styleWidth,
        alignItems: this.alignItems,
        justifyContent: this.justifyContent
      }
    }, this.$slots);
  }
});
const colProps = {
  span: {
    type: [String, Number],
    default: 1
  },
  push: {
    type: [String, Number],
    default: 0
  },
  pull: {
    type: [String, Number],
    default: 0
  },
  offset: {
    type: [String, Number],
    default: 0
  }
};
const NCol = defineComponent({
  name: "Col",
  props: colProps,
  setup(props) {
    const NRow2 = inject(rowInjectionKey, null);
    if (!NRow2) throwError("col", "`n-col` must be placed inside `n-row`.");
    return {
      mergedClsPrefix: NRow2.mergedClsPrefixRef,
      gutter: NRow2.gutterRef,
      stylePadding: computed(() => `${formatLength(NRow2.verticalGutterRef.value, {
        c: 0.5
      })} ${formatLength(NRow2.horizontalGutterRef.value, {
        c: 0.5
      })}`),
      mergedPush: computed(() => Number(props.push) - Number(props.pull))
    };
  },
  render() {
    const {
      $slots,
      span,
      mergedPush,
      offset,
      stylePadding,
      gutter,
      mergedClsPrefix
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-col`, {
        [`${mergedClsPrefix}-col--${span}-span`]: true,
        [`${mergedClsPrefix}-col--${mergedPush}-push`]: mergedPush > 0,
        [`${mergedClsPrefix}-col--${-mergedPush}-pull`]: mergedPush < 0,
        [`${mergedClsPrefix}-col--${offset}-offset`]: offset
      }],
      style: {
        padding: stylePadding
      }
    }, gutter ? h("div", null, $slots) : $slots);
  }
});

export { NRow as N, NCol as a };
//# sourceMappingURL=Col-By2_Iz7q.mjs.map
