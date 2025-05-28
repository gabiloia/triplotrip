import { defineComponent, unref, withCtx, createVNode, ref, computed, mergeProps, createBlock, createCommentVNode, openBlock, renderSlot, toDisplayString, watchEffect, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { P as Percentage } from './Percentage-B3F8dHr0.mjs';
import { faker } from '@faker-js/faker';
import { _ as _export_sfc, N as NCard, c as NAvatar, ab as useThemeStore } from './server.mjs';
import { N as NProgress } from './Progress-iOzX4hFw.mjs';
import { d as __nuxt_component_1, a as __nuxt_component_1$1 } from './CardCombo3-BjEPmiWZ.mjs';
import { _ as _sfc_main$4 } from './Apex-BLAQOTYv.mjs';
import { useResizeObserver } from '@vueuse/core';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardCombo7",
  __ssrInlineRender: true,
  props: {
    title: {},
    cardWrap: { type: Boolean },
    showPercentage: { type: Boolean },
    hideHeader: { type: Boolean },
    hideInfo: { type: Boolean }
  },
  setup(__props) {
    const randomTitle = ref(faker.company.name());
    const text = ref(faker.commerce.product());
    const percentageDirection = ref(faker.datatype.boolean() ? "up" : "down");
    const percentage = ref(faker.number.int({ min: 10, max: 90 }));
    const progress = ref(faker.number.int({ min: 10, max: 90 }));
    const value = ref(new Intl.NumberFormat("en-EN", {}).format(faker.number.int({ min: 1e3, max: 9e3 })));
    const isBordered = computed(() => __props.cardWrap);
    const contentClass = computed(() => __props.cardWrap ? "" : "p-0! !bg-transparent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        bordered: isBordered.value,
        "content-class": contentClass.value,
        class: contentClass.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-wrap flex flex-col gap-6" data-v-8c7f982d${_scopeId}>`);
            if (!_ctx.hideHeader) {
              _push2(`<div class="header flex items-center gap-3" data-v-8c7f982d${_scopeId}>`);
              if (_ctx.$slots.icon) {
                _push2(`<div class="icon-box" data-v-8c7f982d${_scopeId}><div class="icon" data-v-8c7f982d${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="title grow truncate" data-v-8c7f982d${_scopeId}>${ssrInterpolate(_ctx.title || randomTitle.value)}</div>`);
              if (_ctx.showPercentage) {
                _push2(`<div class="per-box" data-v-8c7f982d${_scopeId}>`);
                _push2(ssrRenderComponent(Percentage, {
                  value: percentage.value,
                  "use-color": "",
                  direction: percentageDirection.value
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="progress flex flex-col gap-2" data-v-8c7f982d${_scopeId}><div class="component" data-v-8c7f982d${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NProgress), {
              type: "line",
              status: percentageDirection.value === "up" ? "success" : "error",
              percentage: progress.value,
              "show-indicator": false,
              height: 6,
              "border-radius": 0
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (!_ctx.hideInfo) {
              _push2(`<div class="info flex justify-between" data-v-8c7f982d${_scopeId}><div class="text" data-v-8c7f982d${_scopeId}>${ssrInterpolate(value.value)} \u2022 ${ssrInterpolate(text.value)}</div><div class="value" data-v-8c7f982d${_scopeId}>${ssrInterpolate(progress.value)}%</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-wrap flex flex-col gap-6" }, [
                !_ctx.hideHeader ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "header flex items-center gap-3"
                }, [
                  _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "icon-box"
                  }, [
                    createVNode("div", { class: "icon" }, [
                      renderSlot(_ctx.$slots, "icon", {}, void 0, true)
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "title grow truncate" }, toDisplayString(_ctx.title || randomTitle.value), 1),
                  _ctx.showPercentage ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "per-box"
                  }, [
                    createVNode(Percentage, {
                      value: percentage.value,
                      "use-color": "",
                      direction: percentageDirection.value
                    }, null, 8, ["value", "direction"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "progress flex flex-col gap-2" }, [
                  createVNode("div", { class: "component" }, [
                    createVNode(unref(NProgress), {
                      type: "line",
                      status: percentageDirection.value === "up" ? "success" : "error",
                      percentage: progress.value,
                      "show-indicator": false,
                      height: 6,
                      "border-radius": 0
                    }, null, 8, ["status", "percentage"])
                  ]),
                  !_ctx.hideInfo ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "info flex justify-between"
                  }, [
                    createVNode("div", { class: "text" }, toDisplayString(value.value) + " \u2022 " + toDisplayString(text.value), 1),
                    createVNode("div", { class: "value" }, toDisplayString(progress.value) + "%", 1)
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/combo/CardCombo7.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8c7f982d"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardCombo8",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCombo7 = __nuxt_component_6;
      _push(ssrRenderComponent(unref(NCard), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-wrap flex justify-between" data-v-b51200b1${_scopeId}><div class="item-box" data-v-b51200b1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardCombo7, { "show-percentage": "" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NAvatar), {
                    round: "",
                    src: "/images/logo-1.png",
                    size: 30,
                    "img-props": { alt: "company-1-logo" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NAvatar), {
                      round: "",
                      src: "/images/logo-1.png",
                      size: 30,
                      "img-props": { alt: "company-1-logo" }
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="divider" data-v-b51200b1${_scopeId}><div class="line" data-v-b51200b1${_scopeId}></div></div><div class="item-box" data-v-b51200b1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardCombo7, { "show-percentage": "" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NAvatar), {
                    round: "",
                    src: "/images/logo-2.png",
                    size: 30,
                    "img-props": { alt: "company-2-logo" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NAvatar), {
                      round: "",
                      src: "/images/logo-2.png",
                      size: 30,
                      "img-props": { alt: "company-2-logo" }
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-wrap flex justify-between" }, [
                createVNode("div", { class: "item-box" }, [
                  createVNode(_component_CardCombo7, { "show-percentage": "" }, {
                    icon: withCtx(() => [
                      createVNode(unref(NAvatar), {
                        round: "",
                        src: "/images/logo-1.png",
                        size: 30,
                        "img-props": { alt: "company-1-logo" }
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "divider" }, [
                  createVNode("div", { class: "line" })
                ]),
                createVNode("div", { class: "item-box" }, [
                  createVNode(_component_CardCombo7, { "show-percentage": "" }, {
                    icon: withCtx(() => [
                      createVNode(unref(NAvatar), {
                        round: "",
                        src: "/images/logo-2.png",
                        size: 30,
                        "img-props": { alt: "company-2-logo" }
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/combo/CardCombo8.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b51200b1"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardCombo6",
  __ssrInlineRender: true,
  props: {
    titleLeft: {},
    titleRight: {},
    valueLeft: {},
    valueRight: {},
    cardWrap: { type: Boolean },
    showDividerLines: { type: Boolean },
    hideVersusIcon: { type: Boolean }
  },
  setup(__props) {
    const randomTitleLeft = ref(faker.commerce.department());
    const randomTitleRight = ref(faker.commerce.department());
    const percentageLeft = ref(faker.number.int({ min: 10, max: 90 }));
    const percentageRight = ref(faker.number.int({ min: 10, max: 90 }));
    const percentageDirectionLeft = ref(faker.datatype.boolean() ? "up" : "down");
    const percentageDirectionRight = ref(faker.datatype.boolean() ? "up" : "down");
    const randomValueLeft = ref(new Intl.NumberFormat("en-EN", {}).format(faker.number.int({ min: 1e3, max: 9e3 })));
    const randomValueRight = ref(new Intl.NumberFormat("en-EN", {}).format(faker.number.int({ min: 1e3, max: 9e3 })));
    const isBordered = computed(() => __props.cardWrap);
    const contentClass = computed(() => __props.cardWrap ? "" : "p-0! !bg-transparent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        bordered: isBordered.value,
        "content-class": contentClass.value,
        class: contentClass.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-wrap flex justify-between" data-v-a3d0809c${_scopeId}><div class="item-box item-left" data-v-a3d0809c${_scopeId}><div class="header flex items-center gap-3" data-v-a3d0809c${_scopeId}>`);
            if (_ctx.$slots.iconLeft) {
              _push2(`<div class="icon-box" data-v-a3d0809c${_scopeId}><div class="icon" data-v-a3d0809c${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "iconLeft", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="title grow truncate" data-v-a3d0809c${_scopeId}>${ssrInterpolate(_ctx.titleLeft || randomTitleLeft.value)}</div></div><div class="info flex flex-col gap-2" data-v-a3d0809c${_scopeId}><div class="value" data-v-a3d0809c${_scopeId}>${ssrInterpolate(_ctx.valueLeft || randomValueLeft.value)}</div>`);
            _push2(ssrRenderComponent(Percentage, {
              value: percentageLeft.value,
              "use-color": "",
              direction: percentageDirectionLeft.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="divider" data-v-a3d0809c${_scopeId}>`);
            if (_ctx.showDividerLines) {
              _push2(`<div class="line" data-v-a3d0809c${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!_ctx.hideVersusIcon) {
              _push2(`<div class="text" data-v-a3d0809c${_scopeId}>vs</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.showDividerLines) {
              _push2(`<div class="line" data-v-a3d0809c${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="item-box item-right" data-v-a3d0809c${_scopeId}><div class="header flex flex-row-reverse items-center gap-3" data-v-a3d0809c${_scopeId}>`);
            if (_ctx.$slots.iconRight) {
              _push2(`<div class="icon-box" data-v-a3d0809c${_scopeId}><div class="icon" data-v-a3d0809c${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "iconRight", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="title grow" data-v-a3d0809c${_scopeId}>${ssrInterpolate(_ctx.titleRight || randomTitleRight.value)}</div></div><div class="info flex flex-col items-end gap-2" data-v-a3d0809c${_scopeId}><div class="value" data-v-a3d0809c${_scopeId}>${ssrInterpolate(_ctx.valueRight || randomValueRight.value)}</div>`);
            _push2(ssrRenderComponent(Percentage, {
              value: percentageRight.value,
              "use-color": "",
              direction: percentageDirectionRight.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-wrap flex justify-between" }, [
                createVNode("div", { class: "item-box item-left" }, [
                  createVNode("div", { class: "header flex items-center gap-3" }, [
                    _ctx.$slots.iconLeft ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "icon-box"
                    }, [
                      createVNode("div", { class: "icon" }, [
                        renderSlot(_ctx.$slots, "iconLeft", {}, void 0, true)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "title grow truncate" }, toDisplayString(_ctx.titleLeft || randomTitleLeft.value), 1)
                  ]),
                  createVNode("div", { class: "info flex flex-col gap-2" }, [
                    createVNode("div", { class: "value" }, toDisplayString(_ctx.valueLeft || randomValueLeft.value), 1),
                    createVNode(Percentage, {
                      value: percentageLeft.value,
                      "use-color": "",
                      direction: percentageDirectionLeft.value
                    }, null, 8, ["value", "direction"])
                  ])
                ]),
                createVNode("div", { class: "divider" }, [
                  _ctx.showDividerLines ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "line"
                  })) : createCommentVNode("", true),
                  !_ctx.hideVersusIcon ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text"
                  }, "vs")) : createCommentVNode("", true),
                  _ctx.showDividerLines ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "line"
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "item-box item-right" }, [
                  createVNode("div", { class: "header flex flex-row-reverse items-center gap-3" }, [
                    _ctx.$slots.iconRight ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "icon-box"
                    }, [
                      createVNode("div", { class: "icon" }, [
                        renderSlot(_ctx.$slots, "iconRight", {}, void 0, true)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "title grow" }, toDisplayString(_ctx.titleRight || randomTitleRight.value), 1)
                  ]),
                  createVNode("div", { class: "info flex flex-col items-end gap-2" }, [
                    createVNode("div", { class: "value" }, toDisplayString(_ctx.valueRight || randomValueRight.value), 1),
                    createVNode(Percentage, {
                      value: percentageRight.value,
                      "use-color": "",
                      direction: percentageDirectionRight.value
                    }, null, 8, ["value", "direction"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/combo/CardCombo6.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a3d0809c"]]);
const ActiveUsersIcon = "carbon:activity";
const CanceledUsersIcon = "carbon:trash-can";
const AFKUsersIcon = "carbon:pause";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardCombo5",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const palette = computed(() => [
      themeStore.style["extra1-color"],
      themeStore.style["extra2-color"],
      themeStore.style["extra3-color"],
      themeStore.style["extra4-color"]
    ]);
    const trigger = ref(null);
    const chartBox = ref(null);
    const series = ref([54, 67, 93]);
    function getOption(width) {
      return {
        chart: {
          type: "radialBar",
          parentHeightOffset: 0,
          width: Math.min(width || 0, 270),
          height: Math.min(width || 0, 270)
        },
        grid: {
          padding: {
            top: width && width < 270 ? -width * 0.08 : -25,
            right: width && width < 270 ? -5 : -10,
            left: width && width < 270 ? -5 : -10,
            bottom: width && width < 270 ? 0 : -30
          }
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              size: "45%",
              background: "transparent",
              image: void 0
            },
            track: {
              margin: 8,
              show: true,
              background: style.value["bg-body-color"],
              strokeWidth: "100%",
              opacity: 1
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: "15px",
                fontFamily: style.value["font-family"],
                color: style.value["fg-default-color"],
                offsetY: -10
              },
              value: {
                show: true,
                offsetY: 1,
                fontSize: "22px",
                fontWeight: 700,
                fontFamily: style.value["font-family-display"],
                color: style.value["fg-default-color"]
              }
            }
          }
        },
        colors: palette.value,
        labels: ["Men", "Women", "Others"],
        legend: {
          show: true,
          floating: true,
          fontSize: "12px",
          fontFamily: style.value["font-family"],
          position: "left",
          offsetX: -34,
          offsetY: -22,
          labels: {
            useSeriesColors: true
          },
          formatter(seriesName, opts) {
            return ` <span>${seriesName}:  <strong>${opts.w.globals.series[opts.seriesIndex]}</strong></span>`;
          },
          itemMargin: {
            vertical: 2
          }
        }
      };
    }
    const chartOptions = ref(getOption());
    useResizeObserver(trigger, () => {
      const entry = chartBox.value;
      chartOptions.value = getOption(entry == null ? void 0 : entry.offsetWidth);
    });
    watchEffect(async () => {
      chartOptions.value = getOption();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCombo4 = __nuxt_component_1;
      const _component_CardComboIcon = __nuxt_component_1$1;
      _push(ssrRenderComponent(unref(NCard), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-wrap flex justify-between gap-14 overflow-hidden" data-v-97aacd4b${_scopeId}><div class="info-box flex basis-1/2 flex-col gap-4" data-v-97aacd4b${_scopeId}><div class="title" data-v-97aacd4b${_scopeId}>Users clusters</div><div class="list flex flex-col gap-3" data-v-97aacd4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardCombo4, {
              title: "Active users",
              size: "small",
              "val-string": "173.1K",
              "card-wrap": "",
              "percentage-props": {
                value: 2.45,
                direction: "up"
              }
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardComboIcon, {
                    boxed: "",
                    "icon-name": ActiveUsersIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardComboIcon, {
                      boxed: "",
                      "icon-name": ActiveUsersIcon
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardCombo4, {
              title: "Canceled users",
              "val-string": "56.3K",
              size: "small",
              "card-wrap": "",
              "percentage-props": {
                value: 2.45,
                direction: "up"
              }
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardComboIcon, {
                    boxed: "",
                    color: style.value["extra4-color"],
                    "icon-name": CanceledUsersIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardComboIcon, {
                      boxed: "",
                      color: style.value["extra4-color"],
                      "icon-name": CanceledUsersIcon
                    }, null, 8, ["color"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardCombo4, {
              title: "AFK users",
              "val-string": "98.6K",
              size: "small",
              "card-wrap": "",
              "percentage-props": {
                value: 2.45,
                direction: "up"
              }
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardComboIcon, {
                    boxed: "",
                    color: style.value["extra3-color"],
                    "icon-name": AFKUsersIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardComboIcon, {
                      boxed: "",
                      color: style.value["extra3-color"],
                      "icon-name": AFKUsersIcon
                    }, null, 8, ["color"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="chart-box flex basis-1/2 flex-col gap-4 overflow-hidden" data-v-97aacd4b${_scopeId}><div class="title" data-v-97aacd4b${_scopeId}>Users target</div><div class="chart overflow-hidden" data-v-97aacd4b${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              type: "radialBar",
              height: "270",
              width: "270",
              options: chartOptions.value,
              series: series.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "trigger",
                ref: trigger,
                class: "card-wrap flex justify-between gap-14 overflow-hidden"
              }, [
                createVNode("div", { class: "info-box flex basis-1/2 flex-col gap-4" }, [
                  createVNode("div", { class: "title" }, "Users clusters"),
                  createVNode("div", { class: "list flex flex-col gap-3" }, [
                    createVNode(_component_CardCombo4, {
                      title: "Active users",
                      size: "small",
                      "val-string": "173.1K",
                      "card-wrap": "",
                      "percentage-props": {
                        value: 2.45,
                        direction: "up"
                      }
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_CardComboIcon, {
                          boxed: "",
                          "icon-name": ActiveUsersIcon
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardCombo4, {
                      title: "Canceled users",
                      "val-string": "56.3K",
                      size: "small",
                      "card-wrap": "",
                      "percentage-props": {
                        value: 2.45,
                        direction: "up"
                      }
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_CardComboIcon, {
                          boxed: "",
                          color: style.value["extra4-color"],
                          "icon-name": CanceledUsersIcon
                        }, null, 8, ["color"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardCombo4, {
                      title: "AFK users",
                      "val-string": "98.6K",
                      size: "small",
                      "card-wrap": "",
                      "percentage-props": {
                        value: 2.45,
                        direction: "up"
                      }
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_CardComboIcon, {
                          boxed: "",
                          color: style.value["extra3-color"],
                          "icon-name": AFKUsersIcon
                        }, null, 8, ["color"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", {
                  ref_key: "chartBox",
                  ref: chartBox,
                  class: "chart-box flex basis-1/2 flex-col gap-4 overflow-hidden"
                }, [
                  createVNode("div", { class: "title" }, "Users target"),
                  createVNode("div", { class: "chart overflow-hidden" }, [
                    createVNode(_sfc_main$4, {
                      type: "radialBar",
                      height: "270",
                      width: "270",
                      options: chartOptions.value,
                      series: series.value
                    }, null, 8, ["options", "series"])
                  ])
                ], 512)
              ], 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/combo/CardCombo5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-97aacd4b"]]);

export { __nuxt_component_3 as _, __nuxt_component_2 as a, __nuxt_component_6 as b, __nuxt_component_7 as c };
//# sourceMappingURL=CardCombo5-vp9-dcrI.mjs.map
