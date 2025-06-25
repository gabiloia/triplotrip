import { useMergedState } from 'vooks';
import { defineComponent, h, ref, provide, computed, inject, toRef } from 'vue';
import { W as Scrollbar$1, v as useConfig, x as useTheme, bh as layoutLight, k as cB, h as createInjectionKey, z as useThemeClass, bi as positionProp, S as formatLength, bj as layoutSiderInjectionKey, l as cM, i as NBaseIcon, ad as ChevronRightIcon, n as cE, m as c$1, C as call } from './server.mjs';

const style$1 = cB("layout", `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [cB("layout-scroll-container", `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);
const layoutProps = {
  embedded: Boolean,
  position: positionProp,
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  scrollbarProps: Object,
  onScroll: Function,
  contentClass: String,
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  hasSider: Boolean,
  siderPlacement: {
    type: String,
    default: "left"
  }
};
const layoutInjectionKey = createInjectionKey("n-layout");
function createLayoutComponent(isContent) {
  return defineComponent({
    name: "Layout",
    props: Object.assign(Object.assign({}, useTheme.props), layoutProps),
    setup(props) {
      const scrollableElRef = ref(null);
      const scrollbarInstRef = ref(null);
      const {
        mergedClsPrefixRef,
        inlineThemeDisabled
      } = useConfig(props);
      const themeRef = useTheme("Layout", "-layout", style$1, layoutLight, props, mergedClsPrefixRef);
      function scrollTo(options, y) {
        if (props.nativeScrollbar) {
          const {
            value: scrollableEl
          } = scrollableElRef;
          if (scrollableEl) {
            if (y === void 0) {
              scrollableEl.scrollTo(options);
            } else {
              scrollableEl.scrollTo(options, y);
            }
          }
        } else {
          const {
            value: scrollbarInst
          } = scrollbarInstRef;
          if (scrollbarInst) {
            scrollbarInst.scrollTo(options, y);
          }
        }
      }
      provide(layoutInjectionKey, props);
      const handleNativeElScroll = (e) => {
        var _a;
        const target = e.target;
        target.scrollLeft;
        target.scrollTop;
        (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
      };
      const hasSiderStyle = {
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        flexDirection: "row"
      };
      const exposedMethods = {
        scrollTo
      };
      const cssVarsRef = computed(() => {
        const {
          common: {
            cubicBezierEaseInOut
          },
          self
        } = themeRef.value;
        return {
          "--n-bezier": cubicBezierEaseInOut,
          "--n-color": props.embedded ? self.colorEmbedded : self.color,
          "--n-text-color": self.textColor
        };
      });
      const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout", computed(() => {
        return props.embedded ? "e" : "";
      }), cssVarsRef, props) : void 0;
      return Object.assign({
        mergedClsPrefix: mergedClsPrefixRef,
        scrollableElRef,
        scrollbarInstRef,
        hasSiderStyle,
        mergedTheme: themeRef,
        handleNativeElScroll,
        cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
        themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
        onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
      }, exposedMethods);
    },
    render() {
      var _a;
      const {
        mergedClsPrefix,
        hasSider
      } = this;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      const hasSiderStyle = hasSider ? this.hasSiderStyle : void 0;
      const layoutClass = [this.themeClass, isContent, `${mergedClsPrefix}-layout`, `${mergedClsPrefix}-layout--${this.position}-positioned`];
      return h("div", {
        class: layoutClass,
        style: this.cssVars
      }, this.nativeScrollbar ? h("div", {
        ref: "scrollableElRef",
        class: [`${mergedClsPrefix}-layout-scroll-container`, this.contentClass],
        style: [this.contentStyle, hasSiderStyle],
        onScroll: this.handleNativeElScroll
      }, this.$slots) : h(Scrollbar$1, Object.assign({}, this.scrollbarProps, {
        onScroll: this.onScroll,
        ref: "scrollbarInstRef",
        theme: this.mergedTheme.peers.Scrollbar,
        themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
        contentClass: this.contentClass,
        contentStyle: [this.contentStyle, hasSiderStyle]
      }), this.$slots));
    }
  });
}
const NLayout = createLayoutComponent(false);
const style = cB("layout-sider", `
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`, [cM("bordered", [cE("border", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]), cE("left-placement", [cM("bordered", [cE("border", `
 right: 0;
 `)])]), cM("right-placement", `
 justify-content: flex-start;
 `, [cM("bordered", [cE("border", `
 left: 0;
 `)]), cM("collapsed", [cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", [c$1("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])])]), cB("layout-toggle-button", `
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `, [cB("base-icon", `
 transform: rotate(0);
 `)]), cB("layout-toggle-bar", `
 left: -28px;
 transform: rotate(180deg);
 `, [c$1("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})])])]), cM("collapsed", [cB("layout-toggle-bar", [c$1("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])]), cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(0);
 `)])]), cB("layout-toggle-button", `
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `, [cB("base-icon", `
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", `
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `, [cE("top, bottom", `
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), cE("bottom", `
 position: absolute;
 top: 34px;
 `), c$1("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})]), cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color)"
}), c$1("&:hover", [cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color-hover)"
})])]), cE("border", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `), cB("layout-sider-scroll-container", `
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `), cM("show-content", [cB("layout-sider-scroll-container", {
  opacity: 1
})]), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]);
const ToggleBar = defineComponent({
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      onClick: this.onClick,
      class: `${clsPrefix}-layout-toggle-bar`
    }, h("div", {
      class: `${clsPrefix}-layout-toggle-bar__top`
    }), h("div", {
      class: `${clsPrefix}-layout-toggle-bar__bottom`
    }));
  }
});
const ToggleButton = defineComponent({
  name: "LayoutToggleButton",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-layout-toggle-button`,
      onClick: this.onClick
    }, h(NBaseIcon, {
      clsPrefix
    }, {
      default: () => h(ChevronRightIcon, null)
    }));
  }
});
const layoutSiderProps = {
  position: positionProp,
  bordered: Boolean,
  collapsedWidth: {
    type: Number,
    default: 48
  },
  width: {
    type: [Number, String],
    default: 272
  },
  contentClass: String,
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  collapseMode: {
    type: String,
    default: "transform"
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  defaultCollapsed: Boolean,
  showCollapsedContent: {
    type: Boolean,
    default: true
  },
  showTrigger: {
    type: [Boolean, String],
    default: false
  },
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  scrollbarProps: Object,
  triggerClass: String,
  triggerStyle: [String, Object],
  collapsedTriggerClass: String,
  collapsedTriggerStyle: [String, Object],
  "onUpdate:collapsed": [Function, Array],
  onUpdateCollapsed: [Function, Array],
  onAfterEnter: Function,
  onAfterLeave: Function,
  // deprecated
  onExpand: [Function, Array],
  onCollapse: [Function, Array],
  onScroll: Function
};
const NLayoutSider = defineComponent({
  name: "LayoutSider",
  props: Object.assign(Object.assign({}, useTheme.props), layoutSiderProps),
  setup(props) {
    const layoutProps2 = inject(layoutInjectionKey);
    const scrollableElRef = ref(null);
    const scrollbarInstRef = ref(null);
    const uncontrolledCollapsedRef = ref(props.defaultCollapsed);
    const mergedCollapsedRef = useMergedState(toRef(props, "collapsed"), uncontrolledCollapsedRef);
    const styleMaxWidthRef = computed(() => {
      return formatLength(mergedCollapsedRef.value ? props.collapsedWidth : props.width);
    });
    const scrollContainerStyleRef = computed(() => {
      if (props.collapseMode !== "transform") return {};
      return {
        minWidth: formatLength(props.width)
      };
    });
    const siderPlacementRef = computed(() => {
      return layoutProps2 ? layoutProps2.siderPlacement : "left";
    });
    function scrollTo(options, y) {
      if (props.nativeScrollbar) {
        const {
          value: scrollableEl
        } = scrollableElRef;
        if (scrollableEl) {
          if (y === void 0) {
            scrollableEl.scrollTo(options);
          } else {
            scrollableEl.scrollTo(options, y);
          }
        }
      } else {
        const {
          value: scrollbarInst
        } = scrollbarInstRef;
        if (scrollbarInst) {
          scrollbarInst.scrollTo(options, y);
        }
      }
    }
    function handleTriggerClick() {
      const {
        "onUpdate:collapsed": _onUpdateCollapsed,
        onUpdateCollapsed,
        // deprecated
        onExpand,
        onCollapse
      } = props;
      const {
        value: collapsed
      } = mergedCollapsedRef;
      if (onUpdateCollapsed) {
        call(onUpdateCollapsed, !collapsed);
      }
      if (_onUpdateCollapsed) {
        call(_onUpdateCollapsed, !collapsed);
      }
      uncontrolledCollapsedRef.value = !collapsed;
      if (collapsed) {
        if (onExpand) call(onExpand);
      } else {
        if (onCollapse) call(onCollapse);
      }
    }
    const handleNativeElScroll = (e) => {
      var _a;
      const target = e.target;
      target.scrollLeft;
      target.scrollTop;
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    provide(layoutSiderInjectionKey, {
      collapsedRef: mergedCollapsedRef,
      collapseModeRef: toRef(props, "collapseMode")
    });
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-sider", style, layoutLight, props, mergedClsPrefixRef);
    function handleTransitionend(e) {
      var _a, _b;
      if (e.propertyName === "max-width") {
        if (mergedCollapsedRef.value) {
          (_a = props.onAfterLeave) === null || _a === void 0 ? void 0 : _a.call(props);
        } else {
          (_b = props.onAfterEnter) === null || _b === void 0 ? void 0 : _b.call(props);
        }
      }
    }
    const exposedMethods = {
      scrollTo
    };
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      const {
        siderToggleButtonColor,
        siderToggleButtonBorder,
        siderToggleBarColor,
        siderToggleBarColorHover
      } = self;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-toggle-button-color": siderToggleButtonColor,
        "--n-toggle-button-border": siderToggleButtonBorder,
        "--n-toggle-bar-color": siderToggleBarColor,
        "--n-toggle-bar-color-hover": siderToggleBarColorHover
      };
      if (props.inverted) {
        vars["--n-color"] = self.siderColorInverted;
        vars["--n-text-color"] = self.textColorInverted;
        vars["--n-border-color"] = self.siderBorderColorInverted;
        vars["--n-toggle-button-icon-color"] = self.siderToggleButtonIconColorInverted;
        vars.__invertScrollbar = self.__invertScrollbar;
      } else {
        vars["--n-color"] = self.siderColor;
        vars["--n-text-color"] = self.textColor;
        vars["--n-border-color"] = self.siderBorderColor;
        vars["--n-toggle-button-icon-color"] = self.siderToggleButtonIconColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-sider", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return Object.assign({
      scrollableElRef,
      scrollbarInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      styleMaxWidth: styleMaxWidthRef,
      mergedCollapsed: mergedCollapsedRef,
      scrollContainerStyle: scrollContainerStyleRef,
      siderPlacement: siderPlacementRef,
      handleNativeElScroll,
      handleTransitionend,
      handleTriggerClick,
      inlineThemeDisabled,
      cssVars: cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      mergedCollapsed,
      showTrigger
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("aside", {
      class: [`${mergedClsPrefix}-layout-sider`, this.themeClass, `${mergedClsPrefix}-layout-sider--${this.position}-positioned`, `${mergedClsPrefix}-layout-sider--${this.siderPlacement}-placement`, this.bordered && `${mergedClsPrefix}-layout-sider--bordered`, mergedCollapsed && `${mergedClsPrefix}-layout-sider--collapsed`, (!mergedCollapsed || this.showCollapsedContent) && `${mergedClsPrefix}-layout-sider--show-content`],
      onTransitionend: this.handleTransitionend,
      style: [this.inlineThemeDisabled ? void 0 : this.cssVars, {
        maxWidth: this.styleMaxWidth,
        width: formatLength(this.width)
      }]
    }, !this.nativeScrollbar ? h(Scrollbar$1, Object.assign({}, this.scrollbarProps, {
      onScroll: this.onScroll,
      ref: "scrollbarInstRef",
      style: this.scrollContainerStyle,
      contentStyle: this.contentStyle,
      contentClass: this.contentClass,
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      // here is a hack, since in light theme the scrollbar color is dark,
      // we need to invert it in light color...
      builtinThemeOverrides: this.inverted && this.cssVars.__invertScrollbar === "true" ? {
        colorHover: "rgba(255, 255, 255, .4)",
        color: "rgba(255, 255, 255, .3)"
      } : void 0
    }), this.$slots) : h("div", {
      class: [`${mergedClsPrefix}-layout-sider-scroll-container`, this.contentClass],
      onScroll: this.handleNativeElScroll,
      style: [this.scrollContainerStyle, {
        overflow: "auto"
      }, this.contentStyle],
      ref: "scrollableElRef"
    }, this.$slots), showTrigger ? showTrigger === "bar" ? h(ToggleBar, {
      clsPrefix: mergedClsPrefix,
      class: mergedCollapsed ? this.collapsedTriggerClass : this.triggerClass,
      style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle,
      onClick: this.handleTriggerClick
    }) : h(ToggleButton, {
      clsPrefix: mergedClsPrefix,
      class: mergedCollapsed ? this.collapsedTriggerClass : this.triggerClass,
      style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle,
      onClick: this.handleTriggerClick
    }) : null, this.bordered ? h("div", {
      class: `${mergedClsPrefix}-layout-sider__border`
    }) : null);
  }
});

export { NLayout as N, NLayoutSider as a };
//# sourceMappingURL=LayoutSider-BALbawdO.mjs.map
