import { defineComponent, computed, ref, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as _export_sfc, aN as renderIcon, N as NCard, ab as Scrollbar, af as NDropdown, _ as _sfc_main$o } from './server.mjs';
import { T as TableBase } from './Base-C1YldzQp.mjs';

const MenuIcon = "carbon:overflow-menu-vertical";
const ExpandIcon = "fluent:expand-up-right-24-regular";
const ContractIcon = "fluent:contract-down-left-24-regular";
const ReloadIcon = "tabler:refresh";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardExtra6",
  __ssrInlineRender: true,
  props: {
    showActions: { type: Boolean },
    showDate: { type: Boolean },
    minWidth: {},
    tableRows: {},
    reload: { type: Function },
    expand: { type: Function },
    isExpand: { type: Function }
  },
  setup(__props) {
    const tableMinWidth = computed(() => __props.minWidth ? `${__props.minWidth}px` : "480px");
    let reloadTimeout = null;
    const showExpandButton = ref(true);
    const menuOptions = computed(
      () => showExpandButton.value ? [
        {
          label: "Expand",
          key: "expand",
          icon: renderIcon(ExpandIcon)
        },
        {
          label: "Reload",
          key: "reload",
          icon: renderIcon(ReloadIcon)
        }
      ] : [
        {
          label: "Collapse",
          key: "collapse",
          icon: renderIcon(ContractIcon)
        },
        {
          label: "Reload",
          key: "reload",
          icon: renderIcon(ReloadIcon)
        }
      ]
    );
    function menuSelect(key) {
      switch (key) {
        case "expand":
          if (__props.expand) {
            __props.expand(true);
          }
          break;
        case "collapse":
          if (__props.expand) {
            __props.expand(true);
          }
          break;
        case "reload":
          if (__props.reload) {
            __props.reload(true);
            if (reloadTimeout) {
              clearTimeout(reloadTimeout);
            }
            reloadTimeout = setTimeout(() => {
              if (__props.reload) {
                __props.reload(false);
              }
            }, 1e3);
          }
          break;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--4ec03500": tableMinWidth.value
      } };
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        hoverable: "",
        "content-class": "p-0!",
        title: `Last ${_ctx.tableRows || 5} orders`,
        class: "overflow-hidden"
      }, _attrs, _cssVars), {
        "header-extra": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDropdown), {
              options: menuOptions.value,
              placement: "bottom-end",
              onSelect: menuSelect
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, {
                    size: 20,
                    name: MenuIcon,
                    class: "ml-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, {
                      size: 20,
                      name: MenuIcon,
                      class: "ml-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NDropdown), {
                options: menuOptions.value,
                placement: "bottom-end",
                onSelect: menuSelect
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$o, {
                    size: 20,
                    name: MenuIcon,
                    class: "ml-3"
                  })
                ]),
                _: 1
              }, 8, ["options"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content-wrapper" data-v-9451a776${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "w-full",
              trigger: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TableBase, {
                    bordered: false,
                    "show-actions": _ctx.showActions,
                    "show-date": _ctx.showDate,
                    rows: _ctx.tableRows
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TableBase, {
                      bordered: false,
                      "show-actions": _ctx.showActions,
                      "show-date": _ctx.showDate,
                      rows: _ctx.tableRows
                    }, null, 8, ["show-actions", "show-date", "rows"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "content-wrapper" }, [
                createVNode(unref(Scrollbar), {
                  "x-scrollable": "",
                  class: "w-full",
                  trigger: "none"
                }, {
                  default: withCtx(() => [
                    createVNode(TableBase, {
                      bordered: false,
                      "show-actions": _ctx.showActions,
                      "show-date": _ctx.showDate,
                      rows: _ctx.tableRows
                    }, null, 8, ["show-actions", "show-date", "rows"])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9451a776"]]);

export { __nuxt_component_9 as _ };
//# sourceMappingURL=CardExtra6-CJ7Pw88o.mjs.map
