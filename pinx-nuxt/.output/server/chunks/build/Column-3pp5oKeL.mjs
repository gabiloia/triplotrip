import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Column",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const isThemeDark = computed(() => themeStore.isThemeDark);
    const style = computed(() => themeStore.style);
    const series = ref([
      {
        name: "Q1 Budget",
        group: "budget",
        data: [44e3, 55e3, 41e3, 67e3, 22e3, 43e3]
      },
      {
        name: "Q1 Actual",
        group: "actual",
        data: [48e3, 5e4, 4e4, 65e3, 25e3, 4e4]
      },
      {
        name: "Q2 Budget",
        group: "budget",
        data: [13e3, 36e3, 2e4, 8e3, 13e3, 27e3]
      },
      {
        name: "Q2 Actual",
        group: "actual",
        data: [2e4, 4e4, 25e3, 1e4, 12e3, 28e3]
      }
    ]);
    const palette = computed(() => [
      themeStore.style["extra1-color"],
      themeStore.style["extra2-color"],
      themeStore.style["extra3-color"],
      themeStore.style["extra4-color"]
    ]);
    function getOptions() {
      return {
        chart: {
          type: "bar",
          height: 350,
          stacked: true
        },
        stroke: {
          width: 1,
          colors: [isThemeDark.value ? "#ffffff11" : "#00000011"]
        },
        dataLabels: {
          formatter: (val) => {
            return `${val / 1e3}K`;
          }
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        grid: {
          borderColor: isThemeDark.value ? "#ffffff11" : "#00000011"
        },
        xaxis: {
          categories: [
            "Online advertising",
            "Sales Training",
            "Print advertising",
            "Catalogs",
            "Meetings",
            "Public relations"
          ],
          labels: {
            style: {
              colors: style.value["fg-default-color"],
              fontSize: "10px",
              fontFamily: style.value["font-family-mono"]
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          theme: isThemeDark.value ? "dark" : "light"
        },
        colors: palette.value,
        yaxis: {
          labels: {
            formatter: (val) => {
              return `${val / 1e3}K`;
            },
            style: {
              colors: style.value["fg-default-color"],
              fontSize: "10px",
              fontFamily: style.value["font-family-mono"]
            }
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
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
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Column" }, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/demo-pages/apex-charts-components/Column.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Column-3pp5oKeL.mjs.map
