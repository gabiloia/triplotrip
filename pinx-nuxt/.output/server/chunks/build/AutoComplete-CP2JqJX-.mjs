import { getPreciseEventTarget } from 'seemly';
import { createTreeMate } from 'treemate';
import { clickoutside } from 'vdirs';
import { useMergedState, useIsMounted } from 'vooks';
import { defineComponent, h, Transition, withDirectives, ref, toRef, computed } from 'vue';
import { c as createTmOptions } from './utils-DMBa_qdR.mjs';
import { ak as Binder, al as VTarget, a_ as getFirstSlotVNodeWithTypedProps, am as VFollower, an as useAdjustedTo, v as useConfig, L as useFormItem, x as useTheme, a$ as autoCompleteLight, m as c$1, z as useThemeClass, k as cB, a3 as fadeInScaleUpTransition, C as call } from './server.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { N as NInternalSelectMenu } from './SelectMenu-BGzY6WVh.mjs';

const style = c$1([cB("auto-complete", `
 z-index: auto;
 position: relative;
 display: inline-flex;
 width: 100%;
 `), cB("auto-complete-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [fadeInScaleUpTransition({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]);
function mapAutoCompleteOptionsToSelectOptions(options) {
  return options.map(convertAutoCompleteOptionToSelectOption);
}
function convertAutoCompleteOptionToSelectOption(option) {
  var _a, _b;
  if (typeof option === "string") {
    return {
      label: option,
      value: option
    };
  } else if (option.type === "group") {
    const groupOption = {
      type: "group",
      label: (_a = option.label) !== null && _a !== void 0 ? _a : option.name,
      value: (_b = option.value) !== null && _b !== void 0 ? _b : option.name,
      key: option.key || option.name,
      children: option.children.map((groupOption2) => convertAutoCompleteOptionToSelectOption(groupOption2))
    };
    return groupOption;
  } else {
    return option;
  }
}
const autoCompleteProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  menuProps: Object,
  append: Boolean,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: {
    type: Boolean,
    default: void 0
  },
  defaultValue: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  placeholder: String,
  placement: {
    type: String,
    default: "bottom-start"
  },
  value: String,
  blurAfterSelect: Boolean,
  clearAfterSelect: Boolean,
  getShow: Function,
  showEmpty: Boolean,
  inputProps: Object,
  renderOption: Function,
  renderLabel: Function,
  size: String,
  options: {
    type: Array,
    default: () => []
  },
  zIndex: Number,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onSelect: [Function, Array],
  onBlur: [Function, Array],
  onFocus: [Function, Array],
  // deprecated
  onInput: [Function, Array]
});
const NAutoComplete = defineComponent({
  name: "AutoComplete",
  props: autoCompleteProps,
  slots: Object,
  setup(props) {
    const {
      mergedBorderedRef,
      namespaceRef,
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const triggerElRef = ref(null);
    const menuInstRef = ref(null);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const canBeActivatedRef = ref(false);
    const isComposingRef = ref(false);
    const themeRef = useTheme("AutoComplete", "-auto-complete", style, autoCompleteLight, props, mergedClsPrefixRef);
    const selectOptionsRef = computed(() => {
      return mapAutoCompleteOptionsToSelectOptions(props.options);
    });
    const mergedShowOptionsRef = computed(() => {
      const {
        getShow
      } = props;
      if (getShow) {
        return getShow(mergedValueRef.value || "");
      }
      return !!mergedValueRef.value;
    });
    const activeRef = computed(() => {
      return mergedShowOptionsRef.value && canBeActivatedRef.value && (props.showEmpty ? true : !!selectOptionsRef.value.length);
    });
    const treeMateRef = computed(() => createTreeMate(selectOptionsRef.value, createTmOptions("value", "children")));
    function doUpdateValue(value) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue,
        onInput
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      if (onInput) call(onInput, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function doSelect(value) {
      const {
        onSelect
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onSelect) call(onSelect, value);
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function doBlur(e) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur) call(onBlur, e);
      nTriggerFormBlur();
    }
    function doFocus(e) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus) call(onFocus, e);
      nTriggerFormFocus();
    }
    function handleCompositionStart() {
      isComposingRef.value = true;
    }
    function handleCompositionEnd() {
      (void 0).setTimeout(() => {
        isComposingRef.value = false;
      }, 0);
    }
    function handleKeyDown(e) {
      var _a, _b, _c;
      switch (e.key) {
        case "Enter":
          if (!isComposingRef.value) {
            const pendingOptionTmNode = (_a = menuInstRef.value) === null || _a === void 0 ? void 0 : _a.getPendingTmNode();
            if (pendingOptionTmNode) {
              select(pendingOptionTmNode.rawNode);
              e.preventDefault();
            }
          }
          break;
        case "ArrowDown":
          (_b = menuInstRef.value) === null || _b === void 0 ? void 0 : _b.next();
          break;
        case "ArrowUp":
          (_c = menuInstRef.value) === null || _c === void 0 ? void 0 : _c.prev();
          break;
      }
    }
    function select(option) {
      if ((option === null || option === void 0 ? void 0 : option.value) !== void 0) {
        doSelect(option.value);
        if (props.clearAfterSelect) {
          doUpdateValue(null);
        } else if (option.label !== void 0) {
          doUpdateValue(props.append ? `${mergedValueRef.value}${option.label}` : option.label);
        }
        canBeActivatedRef.value = false;
        if (props.blurAfterSelect) {
          blur();
        }
      }
    }
    function handleClear() {
      doUpdateValue(null);
    }
    function handleFocus(e) {
      canBeActivatedRef.value = true;
      doFocus(e);
    }
    function handleBlur(e) {
      canBeActivatedRef.value = false;
      doBlur(e);
    }
    function handleInput(value) {
      canBeActivatedRef.value = true;
      doUpdateValue(value);
    }
    function handleToggle(option) {
      select(option.rawNode);
    }
    function handleClickOutsideMenu(e) {
      var _a;
      if (!((_a = triggerElRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e)))) {
        canBeActivatedRef.value = false;
      }
    }
    function blur() {
      var _a, _b;
      if ((_a = triggerElRef.value) === null || _a === void 0 ? void 0 : _a.contains((void 0).activeElement)) {
        (_b = (void 0).activeElement) === null || _b === void 0 ? void 0 : _b.blur();
      }
    }
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          menuBoxShadow
        }
      } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow,
        "--n-bezier": cubicBezierEaseInOut
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("auto-complete", void 0, cssVarsRef, props) : void 0;
    const inputInstRef = ref(null);
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
    return {
      focus: exposedMethods.focus,
      blur: exposedMethods.blur,
      inputInstRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      isMounted: useIsMounted(),
      adjustedTo: useAdjustedTo(props),
      menuInstRef,
      triggerElRef,
      treeMate: treeMateRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      active: activeRef,
      mergedStatus: mergedStatusRef,
      handleClear,
      handleFocus,
      handleBlur,
      handleInput,
      handleToggle,
      handleClickOutsideMenu,
      handleCompositionStart,
      handleCompositionEnd,
      handleKeyDown,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-auto-complete`,
      ref: "triggerElRef",
      onKeydown: this.handleKeyDown,
      onCompositionstart: this.handleCompositionStart,
      onCompositionend: this.handleCompositionEnd
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => {
          const defaultSlot = this.$slots.default;
          if (defaultSlot) {
            return getFirstSlotVNodeWithTypedProps("default", defaultSlot, {
              handleInput: this.handleInput,
              handleFocus: this.handleFocus,
              handleBlur: this.handleBlur,
              value: this.mergedValue
            });
          }
          const {
            mergedTheme
          } = this;
          return h(NInput, {
            ref: "inputInstRef",
            status: this.mergedStatus,
            theme: mergedTheme.peers.Input,
            themeOverrides: mergedTheme.peerOverrides.Input,
            bordered: this.mergedBordered,
            value: this.mergedValue,
            placeholder: this.placeholder,
            size: this.mergedSize,
            disabled: this.mergedDisabled,
            clearable: this.clearable,
            loading: this.loading,
            inputProps: this.inputProps,
            onClear: this.handleClear,
            onFocus: this.handleFocus,
            onUpdateValue: this.handleInput,
            onBlur: this.handleBlur
          }, {
            suffix: () => {
              var _a, _b;
              return (_b = (_a = this.$slots).suffix) === null || _b === void 0 ? void 0 : _b.call(_a);
            },
            prefix: () => {
              var _a, _b;
              return (_b = (_a = this.$slots).prefix) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
          });
        }
      }), h(VFollower, {
        show: this.active,
        to: this.adjustedTo,
        containerClass: this.namespace,
        zIndex: this.zIndex,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        placement: this.placement,
        width: "target"
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            var _a;
            (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
            if (!this.active) return null;
            const {
              menuProps
            } = this;
            return withDirectives(h(NInternalSelectMenu, Object.assign({}, menuProps, {
              clsPrefix: mergedClsPrefix,
              ref: "menuInstRef",
              theme: this.mergedTheme.peers.InternalSelectMenu,
              themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
              "auto-pending": true,
              class: [`${mergedClsPrefix}-auto-complete-menu`, this.themeClass, menuProps === null || menuProps === void 0 ? void 0 : menuProps.class],
              style: [menuProps === null || menuProps === void 0 ? void 0 : menuProps.style, this.cssVars],
              treeMate: this.treeMate,
              multiple: false,
              renderLabel: this.renderLabel,
              renderOption: this.renderOption,
              size: "medium",
              onToggle: this.handleToggle
            }), {
              empty: () => {
                var _a2, _b;
                return (_b = (_a2 = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a2);
              }
            }), [[clickoutside, this.handleClickOutsideMenu, void 0, {
              capture: true
            }]]);
          }
        })
      })]
    }));
  }
});

export { NAutoComplete as N };
//# sourceMappingURL=AutoComplete-CP2JqJX-.mjs.map
