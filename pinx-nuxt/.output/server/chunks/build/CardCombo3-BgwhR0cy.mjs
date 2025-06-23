import { defineComponent, ref, computed, watch, unref, mergeProps, withCtx, createVNode, renderSlot, createBlock, createCommentVNode, toDisplayString, openBlock, Fragment, createTextVNode, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './Apex-Sc81I4Gd.mjs';
import { a as _export_sfc, aa as useThemeStore, N as NCard, _ as _sfc_main$o, B as Button, aH as NSpin } from './server.mjs';
import { faker } from '@faker-js/faker';
import NumberFlow from '@number-flow/vue';
import { useElementHover, onClickOutside } from '@vueuse/core';
import dayjs from 'dayjs';
import { D as DemoChart, P as Percentage } from './Percentage-mylKLD0M.mjs';
import { N as NPopselect } from './Popselect-Cg6yOK4Z.mjs';

const InfoIcon = "carbon:information";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardCombo1",
  __ssrInlineRender: true,
  props: {
    type: { default: "area" },
    title: {},
    currency: {},
    chartColor: {},
    chartHeight: { default: 80 },
    dataCount: {},
    chartPaddingTop: { default: "0px" },
    chartBarGradient: { type: Boolean, default: false }
  },
  setup(__props) {
    const currentTitle = ref(null);
    const currentValue = ref(null);
    const chart = ref();
    const isHovered = useElementHover(chart);
    const hoveredTimer = ref(null);
    const themeStore = useThemeStore();
    const primaryColor = computed(() => themeStore.style["primary-color"]);
    const data = ref([]);
    let lastDate = dayjs().valueOf();
    const counter = __props.dataCount || (__props.type === "bar" ? 25 : 30);
    for (let i = 0; i < counter; i++) {
      lastDate = dayjs(lastDate).subtract(1, "day").valueOf();
      data.value.push([lastDate, faker.number.int({ min: 500, max: 800 })]);
    }
    const totalValues = computed(() => data.value.map((i) => i[1]).reduce((a, c) => a + c, 0));
    const valueString = computed(() => {
      var _a, _b;
      if (__props.currency) {
        return new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(
          (_a = currentValue.value) != null ? _a : totalValues.value
        );
      } else {
        return new Intl.NumberFormat("en-EN").format((_b = currentValue.value) != null ? _b : totalValues.value);
      }
    });
    const series = ref([
      {
        data: data.value.reverse()
      }
    ]);
    function getOption() {
      const fillArea = {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 100]
        }
      };
      const fillBar = __props.chartBarGradient ? {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 0,
          opacityFrom: 0.8,
          opacityTo: 0.4,
          stops: [0, 100]
        }
      } : {
        opacity: 0.7
      };
      const fill = __props.type === "bar" ? fillBar : fillArea;
      return {
        chart: {
          type: __props.type,
          sparkline: {
            enabled: true
          },
          offsetX: __props.type === "bar" ? -3 : 0
        },
        grid: {
          padding: {
            top: 10,
            bottom: __props.type === "bar" ? 8 : 0
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "75%",
            borderRadius: 0
          }
        },
        stroke: {
          width: __props.type === "bar" ? 0 : 2,
          curve: "straight"
        },
        fill,
        colors: [__props.chartColor || primaryColor.value],
        tooltip: {
          enabled: true,
          custom({
            ctx,
            dataPointIndex
          }) {
            const value = ctx.data.twoDSeries[dataPointIndex];
            const label = ctx.data.twoDSeriesX[dataPointIndex];
            currentValue.value = value;
            currentTitle.value = dayjs(label).format("DD MMMM");
            if (hoveredTimer.value) {
              clearTimeout(hoveredTimer.value);
            }
            hoveredTimer.value = setTimeout(() => {
              resetTooltip();
            }, 1e3);
            return "";
          }
        },
        xaxis: {
          type: "datetime",
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        }
      };
    }
    const chartOptions = ref(getOption());
    function resetTooltip() {
      currentValue.value = null;
      currentTitle.value = null;
    }
    watch([primaryColor, () => __props.chartHeight, () => __props.chartColor, () => __props.chartPaddingTop], () => {
      chartOptions.value = getOption();
    });
    watch(isHovered, (val) => {
      if (!val) {
        resetTooltip();
      }
    });
    onClickOutside(chart, () => {
      resetTooltip();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--541989b0": _ctx.chartPaddingTop
      } };
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        "content-class": "p-0!",
        hoverable: "",
        bordered: true
      }, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="card-wrap flex flex-col justify-between" data-v-8ed617ba${_scopeId}><div class="header flex gap-4" data-v-8ed617ba${_scopeId}><div class="icon" data-v-8ed617ba${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="info grow" data-v-8ed617ba${_scopeId}><div class="title flex justify-between" data-v-8ed617ba${_scopeId}><span class="text truncate" data-v-8ed617ba${_scopeId}>${ssrInterpolate((_a = currentTitle.value) != null ? _a : _ctx.title)}</span>`);
            if (!unref(isHovered)) {
              _push2(`<span class="hint flex items-center gap-2" data-v-8ed617ba${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$o, {
                size: 12,
                name: InfoIcon
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-8ed617ba${_scopeId}>hover to see details</span></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="value h-10" data-v-8ed617ba${_scopeId}>`);
            if (!currentValue.value) {
              _push2(`<!--[-->${ssrInterpolate(valueString.value)}<!--]-->`);
            } else {
              _push2(ssrRenderComponent(unref(NumberFlow), {
                value: currentValue.value,
                continuous: ""
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div></div><div style="${ssrRenderStyle({ height: `${_ctx.chartHeight}px` })}" class="${ssrRenderClass([`type-${_ctx.type}`, "chart-box"])}" data-v-8ed617ba${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              ref_key: "chart",
              ref: chart,
              type: _ctx.type,
              height: "100%",
              options: chartOptions.value,
              series: series.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-wrap flex flex-col justify-between" }, [
                createVNode("div", { class: "header flex gap-4" }, [
                  createVNode("div", { class: "icon" }, [
                    renderSlot(_ctx.$slots, "icon", {}, void 0, true)
                  ]),
                  createVNode("div", { class: "info grow" }, [
                    createVNode("div", { class: "title flex justify-between" }, [
                      createVNode("span", { class: "text truncate" }, toDisplayString((_b = currentTitle.value) != null ? _b : _ctx.title), 1),
                      !unref(isHovered) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "hint flex items-center gap-2"
                      }, [
                        createVNode(_sfc_main$o, {
                          size: 12,
                          name: InfoIcon
                        }),
                        createVNode("span", null, "hover to see details")
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "value h-10" }, [
                      !currentValue.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(valueString.value), 1)
                      ], 64)) : (openBlock(), createBlock(unref(NumberFlow), {
                        key: 1,
                        value: currentValue.value,
                        continuous: ""
                      }, null, 8, ["value"]))
                    ])
                  ])
                ]),
                createVNode("div", {
                  class: ["chart-box", `type-${_ctx.type}`],
                  style: { height: `${_ctx.chartHeight}px` }
                }, [
                  createVNode(_sfc_main$4, {
                    ref_key: "chart",
                    ref: chart,
                    type: _ctx.type,
                    height: "100%",
                    options: chartOptions.value,
                    series: series.value
                  }, null, 8, ["type", "options", "series"])
                ], 6)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/combo/CardCombo1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8ed617ba"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardComboIcon",
  __ssrInlineRender: true,
  props: {
    boxSize: { default: 40 },
    iconSize: { default: 28 },
    iconName: {},
    boxed: { type: Boolean, default: false },
    color: {}
  },
  setup(__props) {
    const themeStore = useThemeStore();
    const primaryColor = computed(() => themeStore.style["primary-color"]);
    const iconColor = computed(() => __props.color || primaryColor.value);
    const iconBoxedSize = computed(() => __props.boxSize / 100 * 45);
    const iconFinalSize = computed(() => __props.boxed ? iconBoxedSize.value : __props.iconSize);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--8c293d6a": iconColor.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["icon", { boxed: _ctx.boxed }],
        style: `--size:${_ctx.boxSize}px`
      }, _attrs, _cssVars))} data-v-3dc28b76>`);
      if (_ctx.boxed) {
        _push(`<div class="bg" data-v-3dc28b76></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.default) {
        _push(ssrRenderComponent(_sfc_main$o, { size: iconFinalSize.value }, {
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
      } else {
        _push(ssrRenderComponent(_sfc_main$o, {
          size: iconFinalSize.value,
          name: _ctx.iconName
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/combo/CardComboIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3dc28b76"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardCombo4",
  __ssrInlineRender: true,
  props: {
    title: {},
    val: {},
    valString: {},
    currency: {},
    cardWrap: { type: Boolean },
    vertical: { type: Boolean },
    percentage: { type: Boolean },
    percentageProps: {}
  },
  setup(__props) {
    const randomTitle = ref(faker.commerce.department());
    const isBordered = computed(() => __props.cardWrap);
    const contentClass = computed(() => __props.cardWrap ? "" : "p-0! !bg-transparent");
    const valueString = computed(() => {
      if (__props.valString) {
        return __props.valString;
      }
      const value = __props.val || faker.number.int({ min: 1e3, max: 5e3 });
      if (!value) return "";
      if (__props.currency) {
        return new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(value);
      } else {
        return new Intl.NumberFormat("en-EN").format(value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        bordered: isBordered.value,
        "content-class": contentClass.value,
        class: contentClass.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "flex-col": _ctx.vertical }, "card-wrap flex gap-4"])}" data-v-f3dc43ee${_scopeId}>`);
            if (_ctx.$slots.icon) {
              _push2(`<div class="icon-box" data-v-f3dc43ee${_scopeId}><div class="icon" data-v-f3dc43ee${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="info flex grow flex-col" data-v-f3dc43ee${_scopeId}><div class="header flex items-center justify-between gap-2" data-v-f3dc43ee${_scopeId}><div class="title grow" data-v-f3dc43ee${_scopeId}>${ssrInterpolate(_ctx.title || randomTitle.value)}</div>`);
            if (_ctx.percentage && _ctx.percentageProps) {
              _push2(ssrRenderComponent(Percentage, _ctx.percentageProps, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="value" data-v-f3dc43ee${_scopeId}>${ssrInterpolate(valueString.value)}</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["card-wrap flex gap-4", { "flex-col": _ctx.vertical }]
              }, [
                _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "icon-box"
                }, [
                  createVNode("div", { class: "icon" }, [
                    renderSlot(_ctx.$slots, "icon", {}, void 0, true)
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "info flex grow flex-col" }, [
                  createVNode("div", { class: "header flex items-center justify-between gap-2" }, [
                    createVNode("div", { class: "title grow" }, toDisplayString(_ctx.title || randomTitle.value), 1),
                    _ctx.percentage && _ctx.percentageProps ? (openBlock(), createBlock(Percentage, mergeProps({ key: 0 }, _ctx.percentageProps), null, 16)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "value" }, toDisplayString(valueString.value), 1)
                ])
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/combo/CardCombo4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f3dc43ee"]]);
const DotIcon = "carbon:circle-solid";
const TimeIcon = "carbon:time";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardCombo3",
  __ssrInlineRender: true,
  props: {
    oneSeries: { type: Boolean, default: false }
  },
  setup(__props) {
    const themeStore = useThemeStore();
    const twoSeries = computed(() => !__props.oneSeries);
    const textSecondaryColor = computed(() => themeStore.style["fg-secondary-color"]);
    const loaded = ref(false);
    const updateTime = ref(dayjs().format("DD-MM-YYYY HH:mm"));
    const chartTypeValue = ref("years");
    const chartCTX = ref(null);
    const chartSeries = ref([]);
    function setChartContext(ctx) {
      chartCTX.value = ctx;
      getSeries();
    }
    function toggleSeries(series) {
      if (chartCTX.value) {
        series.active = !series.active;
        chartCTX.value.toggleSeries(series.name);
      }
    }
    function getSeries() {
      var _a, _b, _c;
      const chartColors = ((_b = (_a = chartCTX.value) == null ? void 0 : _a.options) == null ? void 0 : _b.colors) || [];
      chartSeries.value = (((_c = chartCTX.value) == null ? void 0 : _c.series) || []).map((s, index) => {
        return {
          active: true,
          // @ts-expect-error expect "s" as series
          name: s.name,
          color: chartColors[index % chartColors.length]
        };
      });
    }
    function capitalized(text) {
      const capitalizedFirst = text[0].toUpperCase();
      const rest = text.slice(1);
      return capitalizedFirst + rest;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCombo4 = __nuxt_component_7;
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        "content-class": "p-0!",
        hoverable: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-wrap flex flex-col" data-v-bbec1b88${_scopeId}><div class="${ssrRenderClass([{ twoSeries: twoSeries.value }, "overlay"])}" data-v-bbec1b88${_scopeId}><div class="info" data-v-bbec1b88${_scopeId}><div class="title" data-v-bbec1b88${_scopeId}><span data-v-bbec1b88${_scopeId}>Updated at</span><span class="time" data-v-bbec1b88${_scopeId}>\xA0${ssrInterpolate(updateTime.value)}</span></div><div class="box-wrapper flex" data-v-bbec1b88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardCombo4, {
              title: "Users",
              "val-string": "248.3K",
              percentage: "",
              "percentage-props": {
                value: 2.45,
                direction: "up"
              }
            }, null, _parent2, _scopeId));
            if (twoSeries.value) {
              _push2(ssrRenderComponent(_component_CardCombo4, {
                title: "Sales",
                "val-string": "$37.5K",
                percentage: "",
                "percentage-props": {
                  value: 1.96,
                  direction: "down"
                }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="toolbar flex gap-2" data-v-bbec1b88${_scopeId}>`);
            if (twoSeries.value) {
              _push2(`<div class="flex gap-2" data-v-bbec1b88${_scopeId}><!--[-->`);
              ssrRenderList(chartSeries.value, (series) => {
                _push2(ssrRenderComponent(unref(Button), {
                  key: series.name,
                  secondary: "",
                  type: series.active ? "default" : "tertiary",
                  onClick: ($event) => toggleSeries(series)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center gap-2" data-v-bbec1b88${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$o, {
                        size: 12,
                        color: series.color,
                        name: DotIcon
                      }, null, _parent3, _scopeId2));
                      _push3(`<span data-v-bbec1b88${_scopeId2}>${ssrInterpolate(series.name)}</span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_sfc_main$o, {
                            size: 12,
                            color: series.color,
                            name: DotIcon
                          }, null, 8, ["color"]),
                          createVNode("span", null, toDisplayString(series.name), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(NPopselect), {
              value: chartTypeValue.value,
              "onUpdate:value": ($event) => chartTypeValue.value = $event,
              options: [
                { label: "Years", value: "years" },
                { label: "Months", value: "months" },
                { label: "Week", value: "week" }
              ]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), { secondary: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-2" data-v-bbec1b88${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          size: 14,
                          name: TimeIcon
                        }, null, _parent4, _scopeId3));
                        _push4(`<span data-v-bbec1b88${_scopeId3}>${ssrInterpolate(capitalized(chartTypeValue.value))}</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_sfc_main$o, {
                              size: 14,
                              name: TimeIcon
                            }),
                            createVNode("span", null, toDisplayString(capitalized(chartTypeValue.value)), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), { secondary: "" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_sfc_main$o, {
                            size: 14,
                            name: TimeIcon
                          }),
                          createVNode("span", null, toDisplayString(capitalized(chartTypeValue.value)), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(NSpin), {
              show: !loaded.value,
              class: "chart grow"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (loaded.value) {
                    _push3(ssrRenderComponent(DemoChart, {
                      type: "area",
                      "series-list": twoSeries.value ? ["Users", "Sales"] : ["Users"],
                      "use-palette": "",
                      "data-type": chartTypeValue.value,
                      "stroke-width": 2,
                      "hide-legend": "",
                      "legend-offset": 130,
                      "font-color": textSecondaryColor.value,
                      onMounted: setChartContext
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    loaded.value ? (openBlock(), createBlock(DemoChart, {
                      key: 0,
                      type: "area",
                      "series-list": twoSeries.value ? ["Users", "Sales"] : ["Users"],
                      "use-palette": "",
                      "data-type": chartTypeValue.value,
                      "stroke-width": 2,
                      "hide-legend": "",
                      "legend-offset": 130,
                      "font-color": textSecondaryColor.value,
                      onMounted: setChartContext
                    }, null, 8, ["series-list", "data-type", "font-color"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-wrap flex flex-col" }, [
                createVNode("div", {
                  class: ["overlay", { twoSeries: twoSeries.value }]
                }, [
                  createVNode("div", { class: "info" }, [
                    createVNode("div", { class: "title" }, [
                      createVNode("span", null, "Updated at"),
                      createVNode("span", { class: "time" }, "\xA0" + toDisplayString(updateTime.value), 1)
                    ]),
                    createVNode("div", { class: "box-wrapper flex" }, [
                      createVNode(_component_CardCombo4, {
                        title: "Users",
                        "val-string": "248.3K",
                        percentage: "",
                        "percentage-props": {
                          value: 2.45,
                          direction: "up"
                        }
                      }),
                      twoSeries.value ? (openBlock(), createBlock(_component_CardCombo4, {
                        key: 0,
                        title: "Sales",
                        "val-string": "$37.5K",
                        percentage: "",
                        "percentage-props": {
                          value: 1.96,
                          direction: "down"
                        }
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "toolbar flex gap-2" }, [
                    twoSeries.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex gap-2"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(chartSeries.value, (series) => {
                        return openBlock(), createBlock(unref(Button), {
                          key: series.name,
                          secondary: "",
                          type: series.active ? "default" : "tertiary",
                          onClick: ($event) => toggleSeries(series)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_sfc_main$o, {
                                size: 12,
                                color: series.color,
                                name: DotIcon
                              }, null, 8, ["color"]),
                              createVNode("span", null, toDisplayString(series.name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["type", "onClick"]);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    createVNode(unref(NPopselect), {
                      value: chartTypeValue.value,
                      "onUpdate:value": ($event) => chartTypeValue.value = $event,
                      options: [
                        { label: "Years", value: "years" },
                        { label: "Months", value: "months" },
                        { label: "Week", value: "week" }
                      ]
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { secondary: "" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_sfc_main$o, {
                                size: 14,
                                name: TimeIcon
                              }),
                              createVNode("span", null, toDisplayString(capitalized(chartTypeValue.value)), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"])
                  ])
                ], 2),
                createVNode(unref(NSpin), {
                  show: !loaded.value,
                  class: "chart grow"
                }, {
                  default: withCtx(() => [
                    loaded.value ? (openBlock(), createBlock(DemoChart, {
                      key: 0,
                      type: "area",
                      "series-list": twoSeries.value ? ["Users", "Sales"] : ["Users"],
                      "use-palette": "",
                      "data-type": chartTypeValue.value,
                      "stroke-width": 2,
                      "hide-legend": "",
                      "legend-offset": 130,
                      "font-color": textSecondaryColor.value,
                      onMounted: setChartContext
                    }, null, 8, ["series-list", "data-type", "font-color"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["show"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/combo/CardCombo3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bbec1b88"]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a, __nuxt_component_6 as b, __nuxt_component_7 as c };
//# sourceMappingURL=CardCombo3-BgwhR0cy.mjs.map
