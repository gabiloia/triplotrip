import { defineComponent, ref, mergeProps, unref, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { a as _export_sfc, aH as NSpin, b as NModal } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardWrapper",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const showSpin = ref(false);
    function expand(state) {
      showModal.value = state;
    }
    function reload(state) {
      showSpin.value = state;
    }
    function isExpand() {
      return showModal.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-wrapper" }, _attrs))} data-v-bf37f375>`);
      _push(ssrRenderComponent(unref(NSpin), {
        show: showSpin.value,
        class: "h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              expand,
              reload,
              isExpand
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                expand,
                reload,
                isExpand
              }, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NModal), {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event,
        "display-directive": "show",
        class: "card-modal-wrapper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpin), { show: showSpin.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {
                    expand,
                    reload,
                    isExpand
                  }, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {
                      expand,
                      reload,
                      isExpand
                    }, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpin), { show: showSpin.value }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {
                    expand,
                    reload,
                    isExpand
                  }, void 0, true)
                ]),
                _: 3
              }, 8, ["show"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/CardWrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf37f375"]]);

export { __nuxt_component_8 as _ };
//# sourceMappingURL=CardWrapper-dWihTu_I.mjs.map
