import { defineComponent, ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, aN as NTag, B as Button, a as _sfc_main$s, ba as NPopselect } from './server.mjs';
import { faker } from '@faker-js/faker';
import _orderBy from 'lodash/orderBy.js';
import { N as NTable } from './Table-lFpRjk1j.mjs';
import dayjs from 'dayjs';
import { a as NImage } from './Image-CRKx2FUb.mjs';
import { N as NProgress } from './Progress-iOzX4hFw.mjs';

const DeleteIcon = "carbon:delete";
const MenuIcon = "carbon:overflow-menu-vertical";
const DownloadIcon = "carbon:cloud-download";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Base",
  __ssrInlineRender: true,
  props: {
    rows: { default: 5 },
    showActions: { type: Boolean, default: false },
    showDate: { type: Boolean, default: false }
  },
  setup(__props) {
    const stock = [
      {
        name: "In stock",
        type: "success"
      },
      {
        name: "Out stock",
        type: "error"
      },
      {
        name: "Only 30",
        type: "warning"
      }
    ];
    const data = Array.from({ length: __props.rows }, () => ({
      id: faker.string.nanoid(),
      name: faker.commerce.productName(),
      category: faker.commerce.product(),
      photo: faker.image.urlPicsumPhotos({ width: 240, height: 240 }),
      price: faker.commerce.price({ symbol: "$" }),
      stock: faker.helpers.arrayElement(stock),
      orders: faker.number.int({ min: 13, max: 1836 }),
      percentage: faker.number.int({ min: 0, max: 100 }),
      date: dayjs(faker.date.between({ from: dayjs().subtract(2, "w").toDate(), to: dayjs().toDate() })).format(
        "DD MMM YYYY"
      )
    }));
    const list = ref(_orderBy(data, ["date"], ["desc"]));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NTable), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead data-v-1460ed4d${_scopeId}><tr data-v-1460ed4d${_scopeId}><th data-v-1460ed4d${_scopeId}>Product</th><th data-v-1460ed4d${_scopeId}>Price</th>`);
            if (_ctx.showDate) {
              _push2(`<th data-v-1460ed4d${_scopeId}>Date</th>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<th data-v-1460ed4d${_scopeId}>Stock</th><th class="!text-right" data-v-1460ed4d${_scopeId}>Orders</th>`);
            if (_ctx.showActions) {
              _push2(`<th class="!text-right" data-v-1460ed4d${_scopeId}>Actions</th>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tr></thead><tbody data-v-1460ed4d${_scopeId}><!--[-->`);
            ssrRenderList(list.value, (item) => {
              _push2(`<tr data-v-1460ed4d${_scopeId}><td data-v-1460ed4d${_scopeId}><div class="product flex items-center gap-3" data-v-1460ed4d${_scopeId}><div class="product-image flex items-center" data-v-1460ed4d${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NImage), {
                lazy: "",
                src: item.photo,
                width: 50,
                height: 50,
                "img-props": { alt: "product-image" }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="product-info" data-v-1460ed4d${_scopeId}><div class="product-name" data-v-1460ed4d${_scopeId}>${ssrInterpolate(item.name)}</div><div class="product-category" data-v-1460ed4d${_scopeId}>${ssrInterpolate(item.category)}</div></div></div></td><td data-v-1460ed4d${_scopeId}><div class="price" data-v-1460ed4d${_scopeId}>${ssrInterpolate(item.price)}</div></td>`);
              if (_ctx.showDate) {
                _push2(`<td data-v-1460ed4d${_scopeId}><div class="date" data-v-1460ed4d${_scopeId}>${ssrInterpolate(item.date)}</div></td>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<td data-v-1460ed4d${_scopeId}><div class="stock" data-v-1460ed4d${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NTag), {
                type: item.stock.type
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.stock.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.stock.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td><td data-v-1460ed4d${_scopeId}><div class="orders flex items-center justify-end gap-3" data-v-1460ed4d${_scopeId}><div class="orders-value" data-v-1460ed4d${_scopeId}>${ssrInterpolate(item.orders)}</div><div class="orders-percentage flex items-center" data-v-1460ed4d${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NProgress), {
                type: "circle",
                percentage: item.percentage,
                "show-indicator": false,
                "stroke-width": 18,
                class: "w-5!"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></td>`);
              if (_ctx.showActions) {
                _push2(`<td data-v-1460ed4d${_scopeId}><div class="actions flex items-center justify-end gap-2" data-v-1460ed4d${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Button), { secondary: "" }, {
                  icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$s, { name: DeleteIcon }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$s, { name: DeleteIcon })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(Button), { secondary: "" }, {
                  icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$s, { name: DownloadIcon }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$s, { name: DownloadIcon })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(NPopselect), { options: [
                  { label: "Share", value: "Share" },
                  { label: "View", value: "View" }
                ] }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Button), { secondary: "" }, {
                        icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_sfc_main$s, { name: MenuIcon }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_sfc_main$s, { name: MenuIcon })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(Button), { secondary: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$s, { name: MenuIcon })
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></td>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", null, "Product"),
                  createVNode("th", null, "Price"),
                  _ctx.showDate ? (openBlock(), createBlock("th", { key: 0 }, "Date")) : createCommentVNode("", true),
                  createVNode("th", null, "Stock"),
                  createVNode("th", { class: "!text-right" }, "Orders"),
                  _ctx.showActions ? (openBlock(), createBlock("th", {
                    key: 1,
                    class: "!text-right"
                  }, "Actions")) : createCommentVNode("", true)
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item) => {
                  return openBlock(), createBlock("tr", {
                    key: item.id
                  }, [
                    createVNode("td", null, [
                      createVNode("div", { class: "product flex items-center gap-3" }, [
                        createVNode("div", { class: "product-image flex items-center" }, [
                          createVNode(unref(NImage), {
                            lazy: "",
                            src: item.photo,
                            width: 50,
                            height: 50,
                            "img-props": { alt: "product-image" }
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "product-info" }, [
                          createVNode("div", { class: "product-name" }, toDisplayString(item.name), 1),
                          createVNode("div", { class: "product-category" }, toDisplayString(item.category), 1)
                        ])
                      ])
                    ]),
                    createVNode("td", null, [
                      createVNode("div", { class: "price" }, toDisplayString(item.price), 1)
                    ]),
                    _ctx.showDate ? (openBlock(), createBlock("td", { key: 0 }, [
                      createVNode("div", { class: "date" }, toDisplayString(item.date), 1)
                    ])) : createCommentVNode("", true),
                    createVNode("td", null, [
                      createVNode("div", { class: "stock" }, [
                        createVNode(unref(NTag), {
                          type: item.stock.type
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.stock.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])
                      ])
                    ]),
                    createVNode("td", null, [
                      createVNode("div", { class: "orders flex items-center justify-end gap-3" }, [
                        createVNode("div", { class: "orders-value" }, toDisplayString(item.orders), 1),
                        createVNode("div", { class: "orders-percentage flex items-center" }, [
                          createVNode(unref(NProgress), {
                            type: "circle",
                            percentage: item.percentage,
                            "show-indicator": false,
                            "stroke-width": 18,
                            class: "w-5!"
                          }, null, 8, ["percentage"])
                        ])
                      ])
                    ]),
                    _ctx.showActions ? (openBlock(), createBlock("td", { key: 1 }, [
                      createVNode("div", { class: "actions flex items-center justify-end gap-2" }, [
                        createVNode(unref(Button), { secondary: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$s, { name: DeleteIcon })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { secondary: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$s, { name: DownloadIcon })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NPopselect), { options: [
                          { label: "Share", value: "Share" },
                          { label: "View", value: "View" }
                        ] }, {
                          default: withCtx(() => [
                            createVNode(unref(Button), { secondary: "" }, {
                              icon: withCtx(() => [
                                createVNode(_sfc_main$s, { name: MenuIcon })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])) : createCommentVNode("", true)
                  ]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tables/Base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TableBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1460ed4d"]]);

export { TableBase as T };
//# sourceMappingURL=Base-BK8jgjt_.mjs.map
