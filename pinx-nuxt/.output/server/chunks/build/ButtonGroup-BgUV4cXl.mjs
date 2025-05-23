import { defineComponent, h, provide } from 'vue';
import { u as useConfig, X as useStyle, am as style$g, an as buttonGroupInjectionKey, U as useRtl } from './server.mjs';

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
    useStyle("-button-group", style$g, mergedClsPrefixRef);
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
//# sourceMappingURL=ButtonGroup-BgUV4cXl.mjs.map
