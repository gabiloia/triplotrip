import { defineComponent, provide, h, inject, computed } from 'vue';
import { v as useConfig, x as useTheme, b3 as timelineLight, k as cB, h as createInjectionKey, s as resolveWrappedSlot, K as resolveSlot, t as throwError, y as createKey, S as formatLength, z as useThemeClass, l as cM, m as c$1, n as cE } from './server.mjs';

const lineHeight = 1.25;
const style = cB("timeline", `
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${lineHeight};
`, [cM("horizontal", `
 flex-direction: row;
 `, [c$1(">", [cB("timeline-item", `
 flex-shrink: 0;
 padding-right: 40px;
 `, [cM("dashed-line-type", [c$1(">", [cB("timeline-item-timeline", [cE("line", `
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]), c$1(">", [cB("timeline-item-content", `
 margin-top: calc(var(--n-icon-size) + 12px);
 `, [c$1(">", [cE("meta", `
 margin-top: 6px;
 margin-bottom: unset;
 `)])]), cB("timeline-item-timeline", `
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `, [cE("line", `
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]), cM("right-placement", [cB("timeline-item", [cB("timeline-item-content", `
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `), cB("timeline-item-timeline", `
 width: var(--n-icon-size);
 right: 0;
 `)])]), cM("left-placement", [cB("timeline-item", [cB("timeline-item-content", `
 margin-left: calc(var(--n-icon-size) + 12px);
 `), cB("timeline-item-timeline", `
 left: 0;
 `)])]), cB("timeline-item", `
 position: relative;
 `, [c$1("&:last-child", [cB("timeline-item-timeline", [cE("line", `
 display: none;
 `)]), cB("timeline-item-content", [cE("meta", `
 margin-bottom: 0;
 `)])]), cB("timeline-item-content", [cE("title", `
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), cE("content", `
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `), cE("meta", `
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]), cM("dashed-line-type", [cB("timeline-item-timeline", [cE("line", `
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]), cB("timeline-item-timeline", `
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${lineHeight} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `, [cE("circle", `
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `), cE("icon", `
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `), cE("line", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]);
const timelineProps = Object.assign(Object.assign({}, useTheme.props), {
  horizontal: Boolean,
  itemPlacement: {
    type: String,
    default: "left"
  },
  size: {
    type: String,
    default: "medium"
  },
  iconSize: Number
});
const timelineInjectionKey = createInjectionKey("n-timeline");
const NTimeline = defineComponent({
  name: "Timeline",
  props: timelineProps,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Timeline", "-timeline", style, timelineLight, props, mergedClsPrefixRef);
    provide(timelineInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      mergedClsPrefixRef
    });
    return () => {
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return h("div", {
        class: [`${mergedClsPrefix}-timeline`, props.horizontal && `${mergedClsPrefix}-timeline--horizontal`, `${mergedClsPrefix}-timeline--${props.size}-size`, !props.horizontal && `${mergedClsPrefix}-timeline--${props.itemPlacement}-placement`]
      }, slots);
    };
  }
});
const timelineItemProps = {
  time: [String, Number],
  title: String,
  content: String,
  color: String,
  lineType: {
    type: String,
    default: "default"
  },
  type: {
    type: String,
    default: "default"
  }
};
const NTimelineItem = defineComponent({
  name: "TimelineItem",
  props: timelineItemProps,
  slots: Object,
  setup(props) {
    const NTimeline2 = inject(timelineInjectionKey);
    if (!NTimeline2) {
      throwError("timeline-item", "`n-timeline-item` must be placed inside `n-timeline`.");
    }
    const {
      inlineThemeDisabled
    } = useConfig();
    const cssVarsRef = computed(() => {
      const {
        props: {
          size,
          iconSize: iconSizeProp
        },
        mergedThemeRef
      } = NTimeline2;
      const {
        type
      } = props;
      const {
        self: {
          titleTextColor,
          contentTextColor,
          metaTextColor,
          lineColor,
          titleFontWeight,
          contentFontSize,
          [createKey("iconSize", size)]: iconSize,
          [createKey("titleMargin", size)]: titleMargin,
          [createKey("titleFontSize", size)]: titleFontSize,
          [createKey("circleBorder", type)]: circleBorder,
          [createKey("iconColor", type)]: iconColor
        },
        common: {
          cubicBezierEaseInOut
        }
      } = mergedThemeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-circle-border": circleBorder,
        "--n-icon-color": iconColor,
        "--n-content-font-size": contentFontSize,
        "--n-content-text-color": contentTextColor,
        "--n-line-color": lineColor,
        "--n-meta-text-color": metaTextColor,
        "--n-title-font-size": titleFontSize,
        "--n-title-font-weight": titleFontWeight,
        "--n-title-margin": titleMargin,
        "--n-title-text-color": titleTextColor,
        "--n-icon-size": formatLength(iconSizeProp) || iconSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("timeline-item", computed(() => {
      const {
        props: {
          size,
          iconSize: iconSizeProp
        }
      } = NTimeline2;
      const {
        type
      } = props;
      return `${size[0]}${iconSizeProp || "a"}${type[0]}`;
    }), cssVarsRef, NTimeline2.props) : void 0;
    return {
      mergedClsPrefix: NTimeline2.mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      color,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-timeline-item`, this.themeClass, `${mergedClsPrefix}-timeline-item--${this.type}-type`, `${mergedClsPrefix}-timeline-item--${this.lineType}-line-type`],
      style: this.cssVars
    }, h("div", {
      class: `${mergedClsPrefix}-timeline-item-timeline`
    }, h("div", {
      class: `${mergedClsPrefix}-timeline-item-timeline__line`
    }), resolveWrappedSlot($slots.icon, (children) => {
      return children ? h("div", {
        class: `${mergedClsPrefix}-timeline-item-timeline__icon`,
        style: {
          color
        }
      }, children) : h("div", {
        class: `${mergedClsPrefix}-timeline-item-timeline__circle`,
        style: {
          borderColor: color
        }
      });
    })), h("div", {
      class: `${mergedClsPrefix}-timeline-item-content`
    }, resolveWrappedSlot($slots.header, (children) => {
      const mergedChildren = children || this.title;
      if (mergedChildren) {
        return h("div", {
          class: `${mergedClsPrefix}-timeline-item-content__title`
        }, children || this.title);
      }
      return null;
    }), h("div", {
      class: `${mergedClsPrefix}-timeline-item-content__content`
    }, resolveSlot($slots.default, () => [this.content])), h("div", {
      class: `${mergedClsPrefix}-timeline-item-content__meta`
    }, resolveSlot($slots.footer, () => [this.time]))));
  }
});

export { NTimeline as N, NTimelineItem as a };
//# sourceMappingURL=TimelineItem-CcJ4XnJT.mjs.map
