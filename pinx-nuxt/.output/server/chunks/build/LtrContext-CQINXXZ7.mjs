import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, b3 as NConfigProvider } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LtrContext",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NConfigProvider), mergeProps({
        class: "ltr-context",
        rtl: []
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/LtrContext.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LtrContext = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0813605"]]);

export { LtrContext as L };
//# sourceMappingURL=LtrContext-CQINXXZ7.mjs.map
