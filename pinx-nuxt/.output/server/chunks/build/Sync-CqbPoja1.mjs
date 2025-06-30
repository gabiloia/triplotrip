import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Apex-DPTNaMpA.mjs';
import { aM as useThemeStore } from './server.mjs';
import { useResizeObserver } from '@vueuse/core';
import _clone from 'lodash/cloneDeep.js';
import _merge from 'lodash/merge.js';
import { g as generateDayWiseTimeSeries } from './utils-D5SSkWFw.mjs';
import dayjs from 'dayjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-S6SsK5xW.mjs';
import 'seemly';
import 'vooks';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import 'lodash/castArray.js';
import 'qs';
import '@css-render/vue3-ssr';
import 'deep-pick-omit';
import 'colord';
import 'lodash/get.js';
import 'lodash/set.js';
import 'lodash-es';
import '@css-render/plugin-bem';
import 'css-render';
import 'evtd';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'vdirs';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sync",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const isThemeDark = computed(() => themeStore.isThemeDark);
    const style = computed(() => themeStore.style);
    const startDate = dayjs().subtract(20, "d").valueOf();
    const card = ref(null);
    const chart1 = ref(null);
    const chart2 = ref(null);
    function getCommonOptions() {
      return {
        chart: {
          height: 160,
          toolbar: {
            show: false
          }
        },
        colors: [],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        toolbar: {
          tools: {
            selection: false
          }
        },
        markers: {
          size: 4,
          hover: {
            size: 10
          }
        },
        tooltip: {
          followCursor: false,
          theme: isThemeDark.value ? "dark" : "light",
          x: {
            show: false
          },
          marker: {
            show: false
          },
          y: {
            title: {
              formatter() {
                return "";
              }
            }
          }
        },
        grid: {
          clipMarkers: false,
          borderColor: isThemeDark.value ? "#ffffff11" : "#00000011"
        },
        yaxis: {
          tickAmount: 2,
          labels: {
            show: true,
            align: "right",
            style: {
              colors: style.value["fg-default-color"],
              fontSize: "10px",
              fontFamily: style.value["font-family-mono"]
            }
          }
        },
        xaxis: {
          type: "datetime",
          labels: {
            show: true,
            align: "right",
            style: {
              colors: style.value["fg-default-color"],
              fontSize: "10px",
              fontFamily: style.value["font-family-mono"]
            }
          }
        }
      };
    }
    const seriesLine1 = ref([
      {
        data: generateDayWiseTimeSeries(startDate, 20, {
          min: 10,
          max: 60
        })
      }
    ]);
    const seriesLine2 = ref([
      {
        data: generateDayWiseTimeSeries(startDate, 20, {
          min: 10,
          max: 30
        })
      }
    ]);
    const seriesArea1 = ref([
      {
        data: generateDayWiseTimeSeries(startDate, 20, {
          min: 10,
          max: 60
        })
      }
    ]);
    const seriesSmall1 = ref([
      {
        data: generateDayWiseTimeSeries(startDate, 20, {
          min: 10,
          max: 60
        })
      }
    ]);
    const seriesSmall2 = ref([
      {
        data: generateDayWiseTimeSeries(startDate, 20, {
          min: 10,
          max: 60
        })
      }
    ]);
    function getChartOptionsLine1() {
      return _merge(_clone(getCommonOptions()), {
        chart: {
          id: "fb",
          group: "social",
          type: "line",
          height: 160,
          toolbar: {
            show: true
          }
        },
        colors: [style.value["primary-color"]]
      });
    }
    function getChartOptionsLine2() {
      return _merge(_clone(getCommonOptions()), {
        chart: {
          id: "tw",
          group: "social",
          type: "line",
          height: 160
        },
        colors: [style.value["extra1-color"]]
      });
    }
    function getChartOptionsArea1() {
      return _merge(_clone(getCommonOptions()), {
        chart: {
          id: "yt",
          group: "social",
          type: "area",
          height: 160
        },
        colors: [style.value["extra2-color"]]
      });
    }
    function getChartOptionsSmall1() {
      return _merge(_clone(getCommonOptions()), {
        chart: {
          id: "ig",
          group: "social",
          type: "area",
          height: 160
        },
        colors: [style.value["extra3-color"]]
      });
    }
    function getChartOptionsSmall2() {
      return _merge(_clone(getCommonOptions()), {
        chart: {
          id: "li",
          group: "social",
          type: "area",
          height: 160
        },
        colors: [style.value["extra4-color"]]
      });
    }
    const chartOptionsLine1 = ref(getChartOptionsLine1());
    const chartOptionsLine2 = ref(getChartOptionsLine2());
    const chartOptionsArea1 = ref(getChartOptionsArea1());
    const chartOptionsSmall1 = ref(getChartOptionsSmall1());
    const chartOptionsSmall2 = ref(getChartOptionsSmall2());
    watch(isThemeDark, () => {
      chartOptionsLine1.value = getChartOptionsLine1();
      chartOptionsLine2.value = getChartOptionsLine2();
      chartOptionsArea1.value = getChartOptionsArea1();
      chartOptionsSmall1.value = getChartOptionsSmall1();
      chartOptionsSmall2.value = getChartOptionsSmall2();
    });
    useResizeObserver(card, () => {
      var _a, _b;
      (_a = chart1.value) == null ? void 0 : _a.refresh();
      (_b = chart2.value) == null ? void 0 : _b.refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Sync" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "line",
              height: "160",
              options: chartOptionsLine1.value,
              series: seriesLine1.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "line",
              height: "160",
              options: chartOptionsLine2.value,
              series: seriesLine2.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "area",
              height: "160",
              options: chartOptionsArea1.value,
              series: seriesArea1.value
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 sm:grid-cols-2"${_scopeId}><div class="overflow-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "area",
              height: "160",
              options: chartOptionsSmall1.value,
              series: seriesSmall1.value,
              onMounted: ($event) => chart1.value = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="overflow-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "area",
              height: "160",
              options: chartOptionsSmall2.value,
              series: seriesSmall2.value,
              onMounted: ($event) => chart2.value = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_sfc_main$1, {
                  type: "line",
                  height: "160",
                  options: chartOptionsLine1.value,
                  series: seriesLine1.value
                }, null, 8, ["options", "series"]),
                createVNode(_sfc_main$1, {
                  type: "line",
                  height: "160",
                  options: chartOptionsLine2.value,
                  series: seriesLine2.value
                }, null, 8, ["options", "series"]),
                createVNode(_sfc_main$1, {
                  type: "area",
                  height: "160",
                  options: chartOptionsArea1.value,
                  series: seriesArea1.value
                }, null, 8, ["options", "series"]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2" }, [
                  createVNode("div", { class: "overflow-hidden" }, [
                    createVNode(_sfc_main$1, {
                      type: "area",
                      height: "160",
                      options: chartOptionsSmall1.value,
                      series: seriesSmall1.value,
                      onMounted: ($event) => chart1.value = $event
                    }, null, 8, ["options", "series", "onMounted"])
                  ]),
                  createVNode("div", { class: "overflow-hidden" }, [
                    createVNode(_sfc_main$1, {
                      type: "area",
                      height: "160",
                      options: chartOptionsSmall2.value,
                      series: seriesSmall2.value,
                      onMounted: ($event) => chart2.value = $event
                    }, null, 8, ["options", "series", "onMounted"])
                  ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/demo-pages/apex-charts-components/Sync.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Sync-CqbPoja1.mjs.map
