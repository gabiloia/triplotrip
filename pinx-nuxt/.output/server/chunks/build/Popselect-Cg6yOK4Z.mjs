import { defineComponent, h, ref, provide, inject, computed, watch, toRef, nextTick } from 'vue';
import { as as NPopover, o as omit, P as keysOf, v as useConfig, x as useTheme, aR as popselectLight, h as createInjectionKey, aU as popoverBaseProps, aS as keep, aT as createRefSetter, k as cB, z as useThemeClass, C as call } from './server.mjs';
import { happensIn } from 'seemly';
import { createTreeMate } from 'treemate';
import { c as createTmOptions } from './utils-DMBa_qdR.mjs';
import { m as mergeEventHandlers, N as NInternalSelectMenu } from './SelectMenu-CI2DF0Y8.mjs';

const popselectInjectionKey = createInjectionKey("n-popselect");
const style = cB("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`);
const panelProps = {
  multiple: Boolean,
  value: {
    type: [String, Number, Array],
    default: null
  },
  cancelable: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: "medium"
  },
  scrollable: Boolean,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onMouseenter: Function,
  onMouseleave: Function,
  renderLabel: Function,
  showCheckmark: {
    type: Boolean,
    default: void 0
  },
  nodeProps: Function,
  virtualScroll: Boolean,
  // deprecated
  onChange: [Function, Array]
};
const panelPropKeys = keysOf(panelProps);
const NPopselectPanel = defineComponent({
  name: "PopselectPanel",
  props: panelProps,
  setup(props) {
    const NPopselect2 = inject(popselectInjectionKey);
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Popselect", "-pop-select", style, popselectLight, NPopselect2.props, mergedClsPrefixRef);
    const treeMateRef = computed(() => {
      return createTreeMate(props.options, createTmOptions("value", "children"));
    });
    function doUpdateValue(value, option) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onChange
      } = props;
      if (onUpdateValue) call(onUpdateValue, value, option);
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option);
      }
      if (onChange) call(onChange, value, option);
    }
    function handleToggle(tmNode) {
      toggle(tmNode.key);
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action") && !happensIn(e, "empty") && !happensIn(e, "header")) {
        e.preventDefault();
      }
    }
    function toggle(value) {
      const {
        value: {
          getNode
        }
      } = treeMateRef;
      if (props.multiple) {
        if (Array.isArray(props.value)) {
          const newValue = [];
          const newOptions = [];
          let shouldAddValue = true;
          props.value.forEach((v) => {
            if (v === value) {
              shouldAddValue = false;
              return;
            }
            const tmNode = getNode(v);
            if (tmNode) {
              newValue.push(tmNode.key);
              newOptions.push(tmNode.rawNode);
            }
          });
          if (shouldAddValue) {
            newValue.push(value);
            newOptions.push(getNode(value).rawNode);
          }
          doUpdateValue(newValue, newOptions);
        } else {
          const tmNode = getNode(value);
          if (tmNode) {
            doUpdateValue([value], [tmNode.rawNode]);
          }
        }
      } else {
        if (props.value === value && props.cancelable) {
          doUpdateValue(null, null);
        } else {
          const tmNode = getNode(value);
          if (tmNode) {
            doUpdateValue(value, tmNode.rawNode);
          }
          const {
            "onUpdate:show": _onUpdateShow,
            onUpdateShow
          } = NPopselect2.props;
          if (_onUpdateShow) call(_onUpdateShow, false);
          if (onUpdateShow) call(onUpdateShow, false);
          NPopselect2.setShow(false);
        }
      }
      void nextTick(() => {
        NPopselect2.syncPosition();
      });
    }
    watch(toRef(props, "options"), () => {
      void nextTick(() => {
        NPopselect2.syncPosition();
      });
    });
    const cssVarsRef = computed(() => {
      const {
        self: {
          menuBoxShadow
        }
      } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, NPopselect2.props) : void 0;
    return {
      mergedTheme: NPopselect2.mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      treeMate: treeMateRef,
      handleToggle,
      handleMenuMousedown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(NInternalSelectMenu, {
      clsPrefix: this.mergedClsPrefix,
      focusable: true,
      nodeProps: this.nodeProps,
      class: [`${this.mergedClsPrefix}-popselect-menu`, this.themeClass],
      style: this.cssVars,
      theme: this.mergedTheme.peers.InternalSelectMenu,
      themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
      multiple: this.multiple,
      treeMate: this.treeMate,
      size: this.size,
      value: this.value,
      virtualScroll: this.virtualScroll,
      scrollable: this.scrollable,
      renderLabel: this.renderLabel,
      onToggle: this.handleToggle,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseenter,
      onMousedown: this.handleMenuMousedown,
      showCheckmark: this.showCheckmark
    }, {
      header: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      },
      action: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      },
      empty: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      }
    });
  }
});
const popselectProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), omit(popoverBaseProps, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, popoverBaseProps.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), panelProps);
const NPopselect = defineComponent({
  name: "Popselect",
  props: popselectProps,
  slots: Object,
  inheritAttrs: false,
  __popover__: true,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Popselect", "-popselect", void 0, popselectLight, props, mergedClsPrefixRef);
    const popoverInstRef = ref(null);
    function syncPosition() {
      var _a;
      (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function setShow(value) {
      var _a;
      (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(value);
    }
    provide(popselectInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      syncPosition,
      setShow
    });
    const exposedMethods = {
      syncPosition,
      setShow
    };
    return Object.assign(Object.assign({}, exposedMethods), {
      popoverInstRef,
      mergedTheme: themeRef
    });
  },
  render() {
    const {
      mergedTheme
    } = this;
    const popoverProps = {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: {
        padding: "0"
      },
      ref: "popoverInstRef",
      internalRenderBody: (className, ref2, style2, onMouseenter, onMouseleave) => {
        const {
          $attrs
        } = this;
        return h(NPopselectPanel, Object.assign({}, $attrs, {
          class: [$attrs.class, className],
          style: [$attrs.style, ...style2]
        }, keep(this.$props, panelPropKeys), {
          ref: createRefSetter(ref2),
          onMouseenter: mergeEventHandlers([onMouseenter, $attrs.onMouseenter]),
          onMouseleave: mergeEventHandlers([onMouseleave, $attrs.onMouseleave])
        }), {
          header: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a);
          },
          action: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a);
          },
          empty: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a);
          }
        });
      }
    };
    return h(NPopover, Object.assign({}, omit(this.$props, panelPropKeys), popoverProps, {
      internalDeactivateImmediately: true
    }), {
      trigger: () => {
        var _a, _b;
        return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
  }
});

export { NPopselect as N };
//# sourceMappingURL=Popselect-Cg6yOK4Z.mjs.map
