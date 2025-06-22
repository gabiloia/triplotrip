import { useMergedState } from 'vooks';
import { defineComponent, h, renderList, toRef, ref, computed } from 'vue';
import { i as NBaseIcon, v as useConfig, x as useTheme, b6 as themeLight$4, k as cB, L as useFormItem, y as createKey, z as useThemeClass, b5 as color2Class, m as c$1, n as cE, p as cNotM, l as cM, C as call } from './server.mjs';

const renderStarIcon = () => h("svg", {
  viewBox: "0 0 512 512"
}, h("path", {
  d: "M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
}));
const style = cB("rate", {
  display: "inline-flex",
  flexWrap: "nowrap"
}, [c$1("&:hover", [cE("item", `
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), cE("item", `
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `, [c$1("&:not(:first-child)", `
 margin-left: 6px;
 `), cM("active", `
 color: var(--n-item-color-active);
 `)]), cNotM("readonly", `
 cursor: pointer;
 `, [cE("item", [c$1("&:hover", `
 transform: scale(1.05);
 `), c$1("&:active", `
 transform: scale(0.96);
 `)])]), cE("half", `
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `, [cM("active", `
 color: var(--n-item-color-active);
 `)])]);
const rateProps = Object.assign(Object.assign({}, useTheme.props), {
  allowHalf: Boolean,
  count: {
    type: Number,
    default: 5
  },
  value: Number,
  defaultValue: {
    type: Number,
    default: null
  },
  readonly: Boolean,
  size: {
    type: [String, Number],
    default: "medium"
  },
  clearable: Boolean,
  color: String,
  onClear: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array]
});
const NRate = defineComponent({
  name: "Rate",
  props: rateProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Rate", "-rate", style, themeLight$4, props, mergedClsPrefixRef);
    const controlledValueRef = toRef(props, "value");
    const uncontrolledValueRef = ref(props.defaultValue);
    const hoverIndexRef = ref(null);
    const formItem = useFormItem(props);
    const mergedValue = useMergedState(controlledValueRef, uncontrolledValueRef);
    function doUpdateValue(value) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      if (_onUpdateValue) {
        call(_onUpdateValue, value);
      }
      if (onUpdateValue) {
        call(onUpdateValue, value);
      }
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function getDerivedValue(index, e) {
      if (props.allowHalf) {
        if (e.offsetX >= Math.floor(e.currentTarget.offsetWidth / 2)) {
          return index + 1;
        } else {
          return index + 0.5;
        }
      } else {
        return index + 1;
      }
    }
    let cleared = false;
    function handleMouseMove(index, e) {
      if (cleared) return;
      hoverIndexRef.value = getDerivedValue(index, e);
    }
    function handleMouseLeave() {
      hoverIndexRef.value = null;
    }
    function handleClick(index, e) {
      var _a;
      const {
        clearable
      } = props;
      const derivedValue = getDerivedValue(index, e);
      if (clearable && derivedValue === mergedValue.value) {
        cleared = true;
        (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
        hoverIndexRef.value = null;
        doUpdateValue(null);
      } else {
        doUpdateValue(derivedValue);
      }
    }
    function handleMouseEnterSomeStar() {
      cleared = false;
    }
    const mergedSizeRef = computed(() => {
      const {
        size
      } = props;
      const {
        self
      } = themeRef.value;
      if (typeof size === "number") {
        return `${size}px`;
      } else {
        return self[createKey("size", size)];
      }
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      const {
        itemColor,
        itemColorActive
      } = self;
      const {
        color
      } = props;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-item-color": itemColor,
        "--n-item-color-active": color || itemColorActive,
        "--n-item-size": mergedSizeRef.value
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("rate", computed(() => {
      const size = mergedSizeRef.value;
      const {
        color
      } = props;
      let hash = "";
      if (size) {
        hash += size[0];
      }
      if (color) {
        hash += color2Class(color);
      }
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue,
      hoverIndex: hoverIndexRef,
      handleMouseMove,
      handleClick,
      handleMouseLeave,
      handleMouseEnterSomeStar,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      readonly,
      hoverIndex,
      mergedValue,
      mergedClsPrefix,
      onRender,
      $slots: {
        default: defaultSlot
      }
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-rate`, {
        [`${mergedClsPrefix}-rate--readonly`]: readonly
      }, this.themeClass],
      style: this.cssVars,
      onMouseleave: this.handleMouseLeave
    }, renderList(this.count, (_, index) => {
      const icon = defaultSlot ? defaultSlot({
        index
      }) : h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: renderStarIcon
      });
      const entireStarActive = hoverIndex !== null ? index + 1 <= hoverIndex : index + 1 <= (mergedValue || 0);
      return h("div", {
        key: index,
        class: [`${mergedClsPrefix}-rate__item`, entireStarActive && `${mergedClsPrefix}-rate__item--active`],
        onClick: readonly ? void 0 : (e) => {
          this.handleClick(index, e);
        },
        onMouseenter: this.handleMouseEnterSomeStar,
        onMousemove: readonly ? void 0 : (e) => {
          this.handleMouseMove(index, e);
        }
      }, icon, this.allowHalf ? h("div", {
        class: [`${mergedClsPrefix}-rate__half`, {
          [`${mergedClsPrefix}-rate__half--active`]: !entireStarActive && hoverIndex !== null ? index + 0.5 <= hoverIndex : index + 0.5 <= (mergedValue || 0)
        }]
      }, icon) : null);
    }));
  }
});

export { NRate as N };
//# sourceMappingURL=Rate-De5ezZTm.mjs.map
