import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Apex-BLAQOTYv.mjs';
import { a as _export_sfc, ab as useThemeStore } from './server.mjs';
import './LtrContext-DmPOw2ck.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
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
  __name: "Radar",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const isThemeDark = computed(() => themeStore.isThemeDark);
    const style = computed(() => themeStore.style);
    const series = ref([
      {
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33]
      }
    ]);
    function getOptions() {
      return {
        chart: {
          width: "100%",
          type: "radar",
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            // size: 140,
            polygons: {
              strokeColors: style.value["bg-default-color"],
              fill: {
                colors: [style.value["bg-body-color"], style.value["bg-default-color"]]
              }
            }
          }
        },
        colors: [style.value["primary-color"]],
        markers: {
          size: 4,
          colors: ["#fff"],
          strokeColors: [style.value["primary-color"]],
          strokeWidth: 2
        },
        tooltip: {
          y: {
            formatter(val) {
              return val.toString();
            }
          },
          theme: isThemeDark.value ? "dark" : "light"
        },
        xaxis: {
          categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          labels: {
            style: {
              colors: [style.value["fg-default-color"]]
            }
          }
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            style: {
              colors: [style.value["fg-default-color"]]
            },
            formatter(val, i) {
              if (i % 2 === 0) {
                return val.toString();
              } else {
                return "";
              }
            }
          }
        }
      };
    }
    const chartOptions = ref(getOptions());
    watch(style, () => {
      chartOptions.value = getOptions();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({
        title: "Radar",
        class: "card grid!"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "radar",
              width: "100%",
              options: chartOptions.value,
              series: series.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                type: "radar",
                width: "100%",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/demo-pages/apex-charts-components/Radar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Radar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d93e263f"]]);

export { Radar as default };
//# sourceMappingURL=Radar-BMUF4_aq.mjs.map
