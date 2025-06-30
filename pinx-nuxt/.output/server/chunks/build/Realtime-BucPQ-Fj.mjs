import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Apex-DPTNaMpA.mjs';
import { aM as useThemeStore } from './server.mjs';
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
import '@vueuse/core';
import 'lodash/set.js';
import 'lodash-es';
import '@css-render/plugin-bem';
import 'css-render';
import 'evtd';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'vdirs';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const TICKINTERVAL = 864e5;
const XAXISRANGE = 7776e5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Realtime",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const chart = ref(null);
    const isThemeDark = computed(() => themeStore.isThemeDark);
    const style = computed(() => themeStore.style);
    let data = [];
    function getDayWiseTimeSeries(baseval, count, yrange) {
      let i = 0;
      while (i < count) {
        const x = baseval;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        data.push({
          x,
          y
        });
        baseval += TICKINTERVAL;
        i++;
      }
    }
    getDayWiseTimeSeries((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 10, {
      min: 10,
      max: 90
    });
    const series = ref([
      {
        data: data.slice()
      }
    ]);
    function getOptions() {
      return {
        chart: {
          id: "realtime",
          height: 350,
          type: "line",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1e3
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: [style.value["fg-default-color"]],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        stroke: {
          curve: "smooth"
        },
        grid: {
          borderColor: isThemeDark.value ? "#ffffff11" : "#00000011"
        },
        title: {
          text: "Dynamic Updating Chart",
          align: "left",
          style: {
            color: style.value["fg-default-color"],
            fontSize: "16px",
            fontFamily: style.value["font-family"]
          }
        },
        markers: {
          size: 0
        },
        tooltip: {
          theme: isThemeDark.value ? "dark" : "light"
        },
        xaxis: {
          type: "datetime",
          range: XAXISRANGE,
          labels: {
            style: {
              colors: style.value["fg-default-color"],
              fontSize: "10px",
              fontFamily: style.value["font-family-mono"]
            }
          }
        },
        yaxis: {
          max: 100,
          labels: {
            style: {
              colors: style.value["fg-default-color"],
              fontSize: "10px",
              fontFamily: style.value["font-family-mono"]
            }
          }
        },
        legend: {
          show: false
        }
      };
    }
    const chartOptions = ref(getOptions());
    watch(isThemeDark, () => {
      chartOptions.value = getOptions();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Realtime" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "line",
              height: "350",
              options: chartOptions.value,
              series: series.value,
              onMounted: ($event) => chart.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                type: "line",
                height: "350",
                options: chartOptions.value,
                series: series.value,
                onMounted: ($event) => chart.value = $event
              }, null, 8, ["options", "series", "onMounted"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/demo-pages/apex-charts-components/Realtime.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Realtime-BucPQ-Fj.mjs.map
