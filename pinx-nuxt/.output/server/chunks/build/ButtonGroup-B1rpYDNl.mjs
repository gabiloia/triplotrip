import { defineComponent, h, provide } from 'vue';
import { v as useConfig, a0 as useStyle, b8 as style$f, b9 as buttonGroupInjectionKey, Y as useRtl } from './server.mjs';

const buttonGroupProps = {
  size: {
    type: String,
    default: void 0
  },
  vertical: Boolean
};
const NButtonGroup = defineComponent({
  name: "ButtonGroup",
  props: buttonGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    useStyle("-button-group", style$f, mergedClsPrefixRef);
    provide(buttonGroupInjectionKey, props);
    const rtlEnabledRef = useRtl("ButtonGroup", mergedRtlRef, mergedClsPrefixRef);
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-button-group`, this.rtlEnabled && `${mergedClsPrefix}-button-group--rtl`, this.vertical && `${mergedClsPrefix}-button-group--vertical`],
      role: "group"
    }, this.$slots);
  }
});

export { NButtonGroup as N };
//# sourceMappingURL=ButtonGroup-B1rpYDNl.mjs.map
