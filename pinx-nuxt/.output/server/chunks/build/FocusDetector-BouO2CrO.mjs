import { defineComponent, h } from 'vue';

const FocusDetector = defineComponent({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(props) {
    return () => h("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    });
  }
});

export { FocusDetector as F };
//# sourceMappingURL=FocusDetector-BouO2CrO.mjs.map
