import { defineComponent, ref, computed, unref, mergeProps, createSlots, withCtx, renderSlot, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { a as _export_sfc, aN as renderIcon, N as NCard, ab as Scrollbar, ag as NDropdown, _ as _sfc_main$o, aM as useThemeStore, d as NAvatar } from './server.mjs';
import { faker } from '@faker-js/faker';
import { P as Percentage } from './Percentage-8fbktz-4.mjs';
import { colord } from 'colord';

const MenuIcon = "carbon:overflow-menu-vertical";
const ContractIcon = "fluent:contract-down-left-24-regular";
const ExpandIcon = "fluent:expand-up-right-24-regular";
const ReloadIcon = "tabler:refresh";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardActions",
  __ssrInlineRender: true,
  props: {
    showImage: { type: Boolean },
    hideSubtitle: { type: Boolean },
    actionBoxTransparent: { type: Boolean },
    hideMenu: { type: Boolean },
    reload: { type: Function },
    expand: { type: Function },
    isExpand: { type: Function },
    title: {},
    image: {}
  },
  setup(__props) {
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
      var _a, _b, _c;
      if (key === "expand") {
        (_a = __props.expand) == null ? void 0 : _a.call(__props, true);
      }
      if (key === "collapse") {
        (_b = __props.expand) == null ? void 0 : _b.call(__props, false);
      }
      if (key === "reload") {
        (_c = __props.reload) == null ? void 0 : _c.call(__props, true);
        if (reloadTimeout) {
          clearTimeout(reloadTimeout);
        }
        reloadTimeout = setTimeout(() => {
          var _a2;
          (_a2 = __props.reload) == null ? void 0 : _a2.call(__props, false);
        }, 1e3);
      }
    }
    const headerTitle = __props.title || faker.company.catchPhrase();
    const subtitle = faker.company.buzzPhrase();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        hoverable: "",
        size: "large",
        class: { actionBoxTransparent: _ctx.actionBoxTransparent }
      }, _attrs), createSlots({
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="title" data-v-1f9cffe2${_scopeId}>${ssrInterpolate(unref(headerTitle))}</div>`);
            if (!_ctx.hideSubtitle && unref(subtitle)) {
              _push2(`<div class="subtitle" data-v-1f9cffe2${_scopeId}>${ssrInterpolate(unref(subtitle))}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "title" }, toDisplayString(unref(headerTitle)), 1),
              !_ctx.hideSubtitle && unref(subtitle) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "subtitle"
              }, toDisplayString(unref(subtitle)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        "header-extra": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.hideMenu) {
              _push2(ssrRenderComponent(unref(NDropdown), {
                options: menuOptions.value,
                placement: "bottom-end",
                to: "body",
                onSelect: menuSelect
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$o, {
                      size: 20,
                      name: MenuIcon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$o, {
                        size: 20,
                        name: MenuIcon
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !_ctx.hideMenu ? (openBlock(), createBlock(unref(NDropdown), {
                key: 0,
                options: menuOptions.value,
                placement: "bottom-end",
                to: "body",
                onSelect: menuSelect
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$o, {
                    size: 20,
                    name: MenuIcon
                  })
                ]),
                _: 1
              }, 8, ["options"])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full overflow-hidden" data-v-1f9cffe2${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "w-full!",
              trigger: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full overflow-hidden" }, [
                createVNode(unref(Scrollbar), {
                  "x-scrollable": "",
                  class: "w-full!",
                  trigger: "none"
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ]),
                  _: 3
                })
              ])
            ];
          }
        }),
        _: 2
      }, [
        _ctx.showImage ? {
          name: "cover",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img alt="cover"${ssrRenderAttr("src", _ctx.image || "https://picsum.photos/seed/IqZMU/900/300")} width="900" height="300" data-v-1f9cffe2${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  alt: "cover",
                  src: _ctx.image || "https://picsum.photos/seed/IqZMU/900/300",
                  width: "900",
                  height: "300"
                }, null, 8, ["src"])
              ];
            }
          }),
          key: "0"
        } : void 0,
        _ctx.$slots.footer ? {
          name: "footer",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "footer", {}, void 0, true)
              ];
            }
          }),
          key: "1"
        } : void 0,
        _ctx.$slots.action ? {
          name: "action",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "action", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "action", {}, void 0, true)
              ];
            }
          }),
          key: "2"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/CardActions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1f9cffe2"]]);
function getRandomColor({ palette, alphaFG, alphaBG }) {
  const color = faker.helpers.arrayElement(palette);
  const fgcolor = colord(color).alpha(alphaFG != null ? alphaFG : 0.5).toHex();
  const bgcolor = colord(color).alpha(alphaBG != null ? alphaBG : 0.1).toHex();
  return {
    color,
    fgcolor,
    bgcolor
  };
}
function getCompany(count, colorOption) {
  return Array.from({ length: count }, () => {
    const { fgcolor, bgcolor } = getRandomColor(colorOption);
    return {
      id: faker.string.nanoid(),
      code: faker.string.alpha(3).toUpperCase(),
      fgcolor,
      bgcolor,
      image: faker.image.urlPicsumPhotos({ width: 80, height: 80 }),
      name: faker.company.name(),
      adjective: faker.company.catchPhraseAdjective(),
      amount: faker.finance.amount({ min: 200, max: 3e3, dec: 2, symbol: "$", autoFormat: true }),
      percentage: faker.number.int({ min: 5, max: 100 }),
      direction: faker.datatype.boolean() ? "up" : "down"
    };
  });
}
function getAirline(count, colorOption) {
  return Array.from({ length: count }, () => {
    const { fgcolor, bgcolor } = getRandomColor(colorOption);
    const { name, iataCode } = faker.airline.airline();
    const airplane = faker.airline.airplane().name;
    return {
      id: faker.string.nanoid(),
      code: iataCode,
      fgcolor,
      bgcolor,
      image: faker.image.urlLoremFlickr({ width: 80, height: 80, category: "airplane" }),
      name,
      adjective: airplane,
      amount: faker.finance.amount({ min: 200, max: 3e3, dec: 0, symbol: "", autoFormat: true }),
      percentage: faker.number.int({ min: 5, max: 100 }),
      direction: faker.datatype.boolean() ? "up" : "down"
    };
  });
}
function getColors(count) {
  const colors = [
    {
      name: "Pink",
      value: "#FF61C9"
    },
    {
      name: "Blue",
      value: "#6267FF"
    },
    {
      name: "Yellow",
      value: "#FFB600"
    },
    {
      name: "Red",
      value: "#FF0156"
    },
    {
      name: "Black",
      value: "#000"
    },
    {
      name: "Latte",
      value: "#f5f5f5"
    }
  ];
  return Array.from({ length: count }, (_, i) => {
    const color = colors[i % colors.length];
    return {
      id: faker.string.nanoid(),
      code: "",
      fgcolor: color.value,
      bgcolor: color.value,
      name: color.name,
      amount: i === 0 ? "4.303" : faker.finance.amount({ min: 200, max: 3e3, dec: 0, symbol: "", autoFormat: true }),
      percentage: faker.number.int({ min: 5, max: 100 }),
      direction: faker.datatype.boolean() ? "up" : "down"
    };
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    dataType: { default: "company" },
    image: { type: Boolean, default: false },
    hideValue: { type: Boolean, default: false },
    hideSubtitle: { type: Boolean, default: false },
    percentage: { default: () => ({
      hide: false,
      useColor: true,
      useBackground: false,
      useOpacity: false,
      icon: "arrow",
      progress: false
    }) },
    minWidth: { default: "initial" }
  },
  setup(__props) {
    const themeStore = useThemeStore();
    const palette = computed(() => [
      themeStore.style["extra1-color"],
      themeStore.style["extra2-color"],
      themeStore.style["extra3-color"],
      themeStore.style["extra4-color"]
    ]);
    let data = getCompany(8, {
      palette: palette.value,
      alphaFG: 1,
      alphaBG: 0.1
    });
    if (__props.dataType === "company") {
      data = getCompany(8, {
        palette: palette.value,
        alphaFG: 1,
        alphaBG: 0.1
      });
    }
    if (__props.dataType === "airline") {
      data = getAirline(8, {
        palette: palette.value,
        alphaFG: 1,
        alphaBG: 0.1
      });
    }
    if (__props.dataType === "colors") {
      data = getColors(6);
    }
    const list = ref(data);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--a0dc1e86": _ctx.minWidth
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "list flex flex-col gap-4" }, _attrs, _cssVars))} data-v-8fd811b3><!--[-->`);
      ssrRenderList(list.value, (item) => {
        _push(`<div class="item flex items-center" data-v-8fd811b3><div class="image flex items-center" data-v-8fd811b3>`);
        if (_ctx.image) {
          _push(`<img${ssrRenderAttr("alt", item.name)}${ssrRenderAttr("src", item.image)} width="40" height="40" data-v-8fd811b3>`);
        } else {
          _push(`<!---->`);
        }
        if (!_ctx.image) {
          _push(ssrRenderComponent(unref(NAvatar), {
            size: 40,
            style: {
              color: item.fgcolor,
              backgroundColor: item.bgcolor
            },
            "img-props": { alt: "avatar" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.code)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.code), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="info grow" data-v-8fd811b3><div class="name" data-v-8fd811b3>${ssrInterpolate(item.name)}</div>`);
        if (!_ctx.hideSubtitle) {
          _push(`<div class="adjective" data-v-8fd811b3>${ssrInterpolate(item.adjective)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="${ssrRenderClass([item.direction, "value flex items-center"])}" data-v-8fd811b3>`);
        if (!_ctx.hideValue) {
          _push(`<div class="amount" data-v-8fd811b3>${ssrInterpolate(item.amount)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!_ctx.percentage.hide) {
          _push(ssrRenderComponent(Percentage, mergeProps({ ref_for: true }, _ctx.percentage, {
            direction: item.direction,
            value: item.percentage
          }), null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DemoList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8fd811b3"]]);

export { DemoList as D, __nuxt_component_4 as _ };
//# sourceMappingURL=List-Ca3pbAjY.mjs.map
