import { createId, happensIn } from 'seemly';
import { useMergedState, useMemo, useFalseUntilTruthy } from 'vooks';
import { defineComponent, h, ref, computed, provide, inject, toRef, withDirectives, vShow } from 'vue';
import { v as useConfig, x as useTheme, aL as collapseLight, k as cB, h as createInjectionKey, X as useRtl, z as useThemeClass, T as resolveSlotWithTypedProps, i as NBaseIcon, aN as ChevronRightIcon, aM as resolveWrappedSlotWithProps, t as throwError, l as cM, m as c$1, n as cE, p as cNotM, E as fadeInHeightExpandTransition, G as NFadeInExpandTransition, C as call } from './server.mjs';

const ChevronLeftIcon = defineComponent({
  name: "ChevronLeft",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",
      fill: "currentColor"
    }));
  }
});
const style = cB("collapse", "width: 100%;", [cB("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [cM("disabled", [cE("header", "cursor: not-allowed;", [cE("header-main", `
 color: var(--n-title-text-color-disabled);
 `), cB("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), cB("collapse-item", "margin-left: 32px;"), c$1("&:first-child", "margin-top: 0;"), c$1("&:first-child >", [cE("header", "padding-top: 0;")]), cM("left-arrow-placement", [cE("header", [cB("collapse-item-arrow", "margin-right: 4px;")])]), cM("right-arrow-placement", [cE("header", [cB("collapse-item-arrow", "margin-left: 4px;")])]), cE("content-wrapper", [cE("content-inner", "padding-top: 16px;"), fadeInHeightExpandTransition({
  duration: "0.15s"
})]), cM("active", [cE("header", [cM("active", [cB("collapse-item-arrow", "transform: rotate(90deg);")])])]), c$1("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), cNotM("disabled", [cM("trigger-area-main", [cE("header", [cE("header-main", "cursor: pointer;"), cB("collapse-item-arrow", "cursor: default;")])]), cM("trigger-area-arrow", [cE("header", [cB("collapse-item-arrow", "cursor: pointer;")])]), cM("trigger-area-extra", [cE("header", [cE("header-extra", "cursor: pointer;")])])]), cE("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [cE("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), cE("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cB("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);
const collapseProps = Object.assign(Object.assign({}, useTheme.props), {
  defaultExpandedNames: {
    type: [Array, String],
    default: null
  },
  expandedNames: [Array, String],
  arrowPlacement: {
    type: String,
    default: "left"
  },
  accordion: {
    type: Boolean,
    default: false
  },
  displayDirective: {
    type: String,
    default: "if"
  },
  triggerAreas: {
    type: Array,
    default: () => ["main", "extra", "arrow"]
  },
  onItemHeaderClick: [Function, Array],
  "onUpdate:expandedNames": [Function, Array],
  onUpdateExpandedNames: [Function, Array],
  // deprecated
  onExpandedNamesChange: {
    type: [Function, Array],
    validator: () => {
      return true;
    },
    default: void 0
  }
});
const collapseInjectionKey = createInjectionKey("n-collapse");
const NCollapse = defineComponent({
  name: "Collapse",
  props: collapseProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const uncontrolledExpandedNamesRef = ref(props.defaultExpandedNames);
    const controlledExpandedNamesRef = computed(() => props.expandedNames);
    const mergedExpandedNamesRef = useMergedState(controlledExpandedNamesRef, uncontrolledExpandedNamesRef);
    const themeRef = useTheme("Collapse", "-collapse", style, collapseLight, props, mergedClsPrefixRef);
    function doUpdateExpandedNames(names) {
      const {
        "onUpdate:expandedNames": _onUpdateExpandedNames,
        onUpdateExpandedNames,
        onExpandedNamesChange
      } = props;
      if (onUpdateExpandedNames) {
        call(onUpdateExpandedNames, names);
      }
      if (_onUpdateExpandedNames) {
        call(_onUpdateExpandedNames, names);
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, names);
      }
      uncontrolledExpandedNamesRef.value = names;
    }
    function doItemHeaderClick(info) {
      const {
        onItemHeaderClick
      } = props;
      if (onItemHeaderClick) {
        call(onItemHeaderClick, info);
      }
    }
    function toggleItem(collapse, name, event) {
      const {
        accordion
      } = props;
      const {
        value: expandedNames
      } = mergedExpandedNamesRef;
      if (accordion) {
        if (collapse) {
          doUpdateExpandedNames([name]);
          doItemHeaderClick({
            name,
            expanded: true,
            event
          });
        } else {
          doUpdateExpandedNames([]);
          doItemHeaderClick({
            name,
            expanded: false,
            event
          });
        }
      } else {
        if (!Array.isArray(expandedNames)) {
          doUpdateExpandedNames([name]);
          doItemHeaderClick({
            name,
            expanded: true,
            event
          });
        } else {
          const activeNames = expandedNames.slice();
          const index = activeNames.findIndex((activeName) => name === activeName);
          if (~index) {
            activeNames.splice(index, 1);
            doUpdateExpandedNames(activeNames);
            doItemHeaderClick({
              name,
              expanded: false,
              event
            });
          } else {
            activeNames.push(name);
            doUpdateExpandedNames(activeNames);
            doItemHeaderClick({
              name,
              expanded: true,
              event
            });
          }
        }
      }
    }
    provide(collapseInjectionKey, {
      props,
      mergedClsPrefixRef,
      expandedNamesRef: mergedExpandedNamesRef,
      slots,
      toggleItem
    });
    const rtlEnabledRef = useRtl("Collapse", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          titleFontWeight,
          dividerColor,
          titlePadding,
          titleTextColor,
          titleTextColorDisabled,
          textColor,
          arrowColor,
          fontSize,
          titleFontSize,
          arrowColorDisabled,
          itemMargin
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-divider-color": dividerColor,
        "--n-title-padding": titlePadding,
        "--n-title-font-size": titleFontSize,
        "--n-title-text-color": titleTextColor,
        "--n-title-text-color-disabled": titleTextColorDisabled,
        "--n-title-font-weight": titleFontWeight,
        "--n-arrow-color": arrowColor,
        "--n-arrow-color-disabled": arrowColorDisabled,
        "--n-item-margin": itemMargin
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("collapse", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedTheme: themeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${this.mergedClsPrefix}-collapse`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
});
const NCollapseItemContent = defineComponent({
  name: "CollapseItemContent",
  props: {
    displayDirective: {
      type: String,
      required: true
    },
    show: Boolean,
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const onceTrueRef = useFalseUntilTruthy(toRef(props, "show"));
    return {
      onceTrue: onceTrueRef
    };
  },
  render() {
    return h(NFadeInExpandTransition, null, {
      default: () => {
        const {
          show,
          displayDirective,
          onceTrue,
          clsPrefix
        } = this;
        const useVShow = displayDirective === "show" && onceTrue;
        const contentNode = h("div", {
          class: `${clsPrefix}-collapse-item__content-wrapper`
        }, h("div", {
          class: `${clsPrefix}-collapse-item__content-inner`
        }, this.$slots));
        return useVShow ? withDirectives(contentNode, [[vShow, show]]) : show ? contentNode : null;
      }
    });
  }
});
const collapseItemProps = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
};
const NCollapseItem = defineComponent({
  name: "CollapseItem",
  props: collapseItemProps,
  setup(props) {
    const {
      mergedRtlRef
    } = useConfig(props);
    const randomName = createId();
    const mergedNameRef = useMemo(() => {
      var _a;
      return (_a = props.name) !== null && _a !== void 0 ? _a : randomName;
    });
    const NCollapse2 = inject(collapseInjectionKey);
    if (!NCollapse2) {
      throwError("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    }
    const {
      expandedNamesRef,
      props: collapseProps2,
      mergedClsPrefixRef,
      slots: collapseSlots
    } = NCollapse2;
    const collapsedRef = computed(() => {
      const {
        value: expandedNames
      } = expandedNamesRef;
      if (Array.isArray(expandedNames)) {
        const {
          value: name
        } = mergedNameRef;
        return !~expandedNames.findIndex((expandedName) => expandedName === name);
      } else if (expandedNames) {
        const {
          value: name
        } = mergedNameRef;
        return name !== expandedNames;
      }
      return true;
    });
    const rtlEnabledRef = useRtl("Collapse", mergedRtlRef, mergedClsPrefixRef);
    return {
      rtlEnabled: rtlEnabledRef,
      collapseSlots,
      randomName,
      mergedClsPrefix: mergedClsPrefixRef,
      collapsed: collapsedRef,
      triggerAreas: toRef(collapseProps2, "triggerAreas"),
      mergedDisplayDirective: computed(() => {
        const {
          displayDirective
        } = props;
        if (displayDirective) {
          return displayDirective;
        } else {
          return collapseProps2.displayDirective;
        }
      }),
      arrowPlacement: computed(() => {
        return collapseProps2.arrowPlacement;
      }),
      handleClick(e) {
        let happensInArea = "main";
        if (happensIn(e, "arrow")) happensInArea = "arrow";
        if (happensIn(e, "extra")) happensInArea = "extra";
        if (!collapseProps2.triggerAreas.includes(happensInArea)) {
          return;
        }
        if (NCollapse2 && !props.disabled) {
          NCollapse2.toggleItem(collapsedRef.value, mergedNameRef.value, e);
        }
      }
    };
  },
  render() {
    const {
      collapseSlots,
      $slots,
      arrowPlacement,
      collapsed,
      mergedDisplayDirective,
      mergedClsPrefix,
      disabled,
      triggerAreas
    } = this;
    const headerNode = resolveSlotWithTypedProps($slots.header, {
      collapsed
    }, () => [this.title]);
    const headerExtraSlot = $slots["header-extra"] || collapseSlots["header-extra"];
    const arrowSlot = $slots.arrow || collapseSlots.arrow;
    return h("div", {
      class: [`${mergedClsPrefix}-collapse-item`, `${mergedClsPrefix}-collapse-item--${arrowPlacement}-arrow-placement`, disabled && `${mergedClsPrefix}-collapse-item--disabled`, !collapsed && `${mergedClsPrefix}-collapse-item--active`, triggerAreas.map((area) => {
        return `${mergedClsPrefix}-collapse-item--trigger-area-${area}`;
      })]
    }, h("div", {
      class: [`${mergedClsPrefix}-collapse-item__header`, !collapsed && `${mergedClsPrefix}-collapse-item__header--active`]
    }, h("div", {
      class: `${mergedClsPrefix}-collapse-item__header-main`,
      onClick: this.handleClick
    }, arrowPlacement === "right" && headerNode, h("div", {
      class: `${mergedClsPrefix}-collapse-item-arrow`,
      key: this.rtlEnabled ? 0 : 1,
      "data-arrow": true
    }, resolveSlotWithTypedProps(arrowSlot, {
      collapsed
    }, () => [h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: () => this.rtlEnabled ? h(ChevronLeftIcon, null) : h(ChevronRightIcon, null)
    })])), arrowPlacement === "left" && headerNode), resolveWrappedSlotWithProps(headerExtraSlot, {
      collapsed
    }, (children) => h("div", {
      class: `${mergedClsPrefix}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": true
    }, children))), h(NCollapseItemContent, {
      clsPrefix: mergedClsPrefix,
      displayDirective: mergedDisplayDirective,
      show: !collapsed
    }, $slots));
  }
});

export { ChevronLeftIcon as C, NCollapse as N, NCollapseItem as a };
//# sourceMappingURL=CollapseItem-BZVO93eO.mjs.map
