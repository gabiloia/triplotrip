import { ab as useThemeStore, aJ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Apex",
  __ssrInlineRender: true,
  props: {
    width: {},
    height: {},
    type: {},
    options: {},
    series: {}
  },
  emits: ["mounted"],
  setup(__props, { emit: __emit }) {
    ref(false);
    ref();
    useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/Apex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Apex-C8AwXlK9.mjs.map
