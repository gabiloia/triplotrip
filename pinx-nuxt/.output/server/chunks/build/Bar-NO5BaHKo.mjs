import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
import './CollapseItem-BP2F26pm.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Bar",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const isThemeDark = computed(() => themeStore.isThemeDark);
    const style = computed(() => themeStore.style);
    const series = ref([
      {
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21]
      },
      {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32]
      },
      {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20]
      },
      {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4]
      },
      {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10]
      }
    ]);
    function getOptions() {
      return {
        chart: {
          type: "bar",
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              total: {
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                  fontFamily: style.value["font-family-mono"],
                  color: style.value["fg-default-color"]
                }
              }
            }
          }
        },
        stroke: {
          width: 1,
          colors: [!isThemeDark.value ? "#ffffffaa" : "#000000aa"]
        },
        title: {
          text: "Fiction Books Sales",
          style: {
            color: style.value["fg-default-color"],
            fontSize: "16px",
            fontFamily: style.value["font-family"]
          }
        },
        grid: {
          borderColor: isThemeDark.value ? "#ffffff11" : "#00000011"
        },
        xaxis: {
          categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
          labels: {
            formatter(val) {
              return `${val}K`;
            },
            style: {
              colors: style.value["fg-default-color"],
              fontSize: "10px",
              fontFamily: style.value["font-family-mono"]
            }
          }
        },
        yaxis: {
          title: {
            text: void 0
          },
          labels: {
            style: {
              colors: style.value["fg-default-color"],
              fontSize: "10px",
              fontFamily: style.value["font-family-mono"]
            }
          }
        },
        tooltip: {
          y: {
            formatter(val) {
              return `${val}K`;
            }
          },
          theme: isThemeDark.value ? "dark" : "light"
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
          labels: {
            colors: style.value["fg-default-color"]
          }
        }
      };
    }
    const chartOptions = ref(getOptions());
    watch(isThemeDark, () => {
      chartOptions.value = getOptions();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Bar" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "bar",
              height: "350",
              options: chartOptions.value,
              series: series.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                type: "bar",
                height: "350",
                options: chartOptions.value,
                series: series.value
              }, null, 8, ["options", "series"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/demo-pages/apex-charts-components/Bar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Bar-NO5BaHKo.mjs.map
