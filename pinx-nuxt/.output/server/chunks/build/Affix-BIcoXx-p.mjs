import { defineComponent, h, ref, computed } from 'vue';
import { M as keysOf, u as useConfig, X as useStyle, j as cB, k as cM } from './server.mjs';

const style = cB("affix", [cM("affixed", {
  position: "fixed"
}, [cM("absolute-positioned", {
  position: "absolute"
})])]);
const affixProps = {
  listenTo: [String, Object, Function],
  top: Number,
  bottom: Number,
  triggerTop: Number,
  triggerBottom: Number,
  position: {
    type: String,
    default: "fixed"
  },
  // deprecated
  offsetTop: {
    type: Number,
    validator: () => {
      return true;
    },
    default: void 0
  },
  offsetBottom: {
    type: Number,
    validator: () => {
      return true;
    },
    default: void 0
  },
  target: {
    type: Function,
    validator: () => {
      return true;
    },
    default: void 0
  }
};
const affixPropKeys = keysOf(affixProps);
const NAffix = defineComponent({
  name: "Affix",
  props: affixProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    useStyle("-affix", style, mergedClsPrefixRef);
    const stickToTopRef = ref(false);
    const stickToBottomRef = ref(false);
    ref(null);
    ref(null);
    const affixedRef = computed(() => {
      return stickToBottomRef.value || stickToTopRef.value;
    });
    const mergedOffsetTopRef = computed(() => {
      var _a, _b;
      return (_b = (_a = props.triggerTop) !== null && _a !== void 0 ? _a : props.offsetTop) !== null && _b !== void 0 ? _b : props.top;
    });
    const mergedTopRef = computed(() => {
      var _a, _b;
      return (_b = (_a = props.top) !== null && _a !== void 0 ? _a : props.triggerTop) !== null && _b !== void 0 ? _b : props.offsetTop;
    });
    const mergedBottomRef = computed(() => {
      var _a, _b;
      return (_b = (_a = props.bottom) !== null && _a !== void 0 ? _a : props.triggerBottom) !== null && _b !== void 0 ? _b : props.offsetBottom;
    });
    const mergedOffsetBottomRef = computed(() => {
      var _a, _b;
      return (_b = (_a = props.triggerBottom) !== null && _a !== void 0 ? _a : props.offsetBottom) !== null && _b !== void 0 ? _b : props.bottom;
    });
    const selfRef = ref(null);
    return {
      selfRef,
      affixed: affixedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedstyle: computed(() => {
        const style2 = {};
        if (stickToTopRef.value && mergedOffsetTopRef.value !== void 0 && mergedTopRef.value !== void 0) {
          style2.top = `${mergedTopRef.value}px`;
        }
        if (stickToBottomRef.value && mergedOffsetBottomRef.value !== void 0 && mergedBottomRef.value !== void 0) {
          style2.bottom = `${mergedBottomRef.value}px`;
        }
        return style2;
      })
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      ref: "selfRef",
      class: [`${mergedClsPrefix}-affix`, {
        [`${mergedClsPrefix}-affix--affixed`]: this.affixed,
        [`${mergedClsPrefix}-affix--absolute-positioned`]: this.position === "absolute"
      }],
      style: this.mergedstyle
    }, this.$slots);
  }
});

export { NAffix as N, affixPropKeys as a, affixProps as b };
//# sourceMappingURL=Affix-BIcoXx-p.mjs.map
