import { repeat, pxfy } from 'seemly';
import { defineComponent, h, mergeProps, Fragment, computed } from 'vue';
import { v as useConfig, x as useTheme, a$ as skeletonLight, m as c$1, y as createKey, k as cB } from './server.mjs';

const style = c$1([cB("skeleton", `
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `), c$1("@keyframes skeleton-loading", `
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]);
const skeletonProps = Object.assign(Object.assign({}, useTheme.props), {
  text: Boolean,
  round: Boolean,
  circle: Boolean,
  height: [String, Number],
  width: [String, Number],
  size: String,
  repeat: {
    type: Number,
    default: 1
  },
  animated: {
    type: Boolean,
    default: true
  },
  sharp: {
    type: Boolean,
    default: true
  }
});
const NSkeleton = defineComponent({
  name: "Skeleton",
  inheritAttrs: false,
  props: skeletonProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Skeleton", "-skeleton", style, skeletonLight, props, mergedClsPrefixRef);
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      style: computed(() => {
        var _a, _b;
        const theme = themeRef.value;
        const {
          common: {
            cubicBezierEaseInOut
          }
        } = theme;
        const selfThemeVars = theme.self;
        const {
          color,
          colorEnd,
          borderRadius
        } = selfThemeVars;
        let sizeHeight;
        const {
          circle,
          sharp,
          round,
          width,
          height,
          size,
          text,
          animated
        } = props;
        if (size !== void 0) {
          sizeHeight = selfThemeVars[createKey("height", size)];
        }
        const mergedWidth = circle ? (_a = width !== null && width !== void 0 ? width : height) !== null && _a !== void 0 ? _a : sizeHeight : width;
        const mergedHeight = (_b = circle ? width !== null && width !== void 0 ? width : height : height) !== null && _b !== void 0 ? _b : sizeHeight;
        return {
          display: text ? "inline-block" : "",
          verticalAlign: text ? "-0.125em" : "",
          borderRadius: circle ? "50%" : round ? "4096px" : sharp ? "" : borderRadius,
          width: typeof mergedWidth === "number" ? pxfy(mergedWidth) : mergedWidth,
          height: typeof mergedHeight === "number" ? pxfy(mergedHeight) : mergedHeight,
          animation: !animated ? "none" : "",
          "--n-bezier": cubicBezierEaseInOut,
          "--n-color-start": color,
          "--n-color-end": colorEnd
        };
      })
    };
  },
  render() {
    const {
      repeat: repeatProp,
      style: style2,
      mergedClsPrefix,
      $attrs
    } = this;
    const child = h("div", mergeProps({
      class: `${mergedClsPrefix}-skeleton`,
      style: style2
    }, $attrs));
    if (repeatProp > 1) {
      return h(Fragment, null, repeat(repeatProp, null).map((_) => [child, "\n"]));
    }
    return child;
  }
});

export { NSkeleton as N };
//# sourceMappingURL=Skeleton-JbuVJzCI.mjs.map
