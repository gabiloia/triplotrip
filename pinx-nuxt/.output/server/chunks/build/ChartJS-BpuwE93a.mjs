import { defineComponent, mergeProps, computed, ref, watch, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { a as _export_sfc, _ as _sfc_main$o, ab as useThemeStore } from './server.mjs';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Bar, Line } from 'vue-chartjs';
import './LtrContext-CUHPU62m.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BML65SQa.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Bar",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Data One",
          backgroundColor: style.value["primary-color"],
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    };
    function getOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        color: style.value["fg-default-color"],
        scales: {
          y: {
            ticks: { color: style.value["fg-secondary-color"] },
            grid: { color: style.value["hover-color"] }
          },
          x: {
            ticks: { color: style.value["fg-secondary-color"] },
            grid: { color: style.value["hover-color"] }
          }
        }
      };
    }
    const options = ref(getOptions());
    watch(style, () => {
      options.value = getOptions();
    });
    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Bar" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Bar), {
              data,
              options: options.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Bar), {
                data,
                options: options.value
              }, null, 8, ["options"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/demo-pages/chartjs-components/Bar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Line",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: style.value["primary-color"],
          borderColor: style.value["primary-color"],
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    };
    function getOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        color: style.value["fg-default-color"],
        scales: {
          y: {
            ticks: { color: style.value["fg-secondary-color"] },
            grid: { color: style.value["hover-color"] }
          },
          x: {
            ticks: { color: style.value["fg-secondary-color"] },
            grid: { color: style.value["hover-color"] }
          }
        }
      };
    }
    const options = ref(getOptions());
    watch(style, () => {
      options.value = getOptions();
    });
    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Line" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Line), {
              data,
              options: options.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Line), {
                data,
                options: options.value
              }, null, 8, ["options"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/demo-pages/chartjs-components/Line.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChartJS",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-e80b8f75><div class="page-header" data-v-e80b8f75><div class="title" data-v-e80b8f75>ChartJS</div><div class="links" data-v-e80b8f75><a href="https://vue-chartjs.org/" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-e80b8f75>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-e80b8f75>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Charts/ChartJS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChartJS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e80b8f75"]]);

export { ChartJS as default };
//# sourceMappingURL=ChartJS-BpuwE93a.mjs.map
