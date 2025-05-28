import { defineComponent, computed, ref, watch, watchEffect, resolveComponent, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { ab as useThemeStore, a as _sfc_main$s, N as NCard, ac as NSpin } from './server.mjs';
import { useWindowSize, useResizeObserver } from '@vueuse/core';
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
import 'vooks';
import 'lodash/set.js';
import 'seemly';
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

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VectorMap",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const options = ref(getOption());
    const loading = ref(true);
    const card = ref(null);
    const loadingTimer = ref(null);
    const { width } = useWindowSize();
    function getOption() {
      return {
        map: "world_merc",
        regionStyle: { initial: { fill: style.value["bg-body-color"] } },
        markers: [
          { name: "Japan", coords: [36.48491549755618, 138.57517718545] },
          { name: "Canada", coords: [56.1304, -106.3468] },
          { name: "Greenland", coords: [71.7069, -42.6043] },
          {
            name: "Egypt",
            coords: [26.8206, 30.8025],
            style: { initial: { fill: style.value["extra3-color"] } }
          },
          {
            name: "Brazil",
            coords: [-14.235, -51.9253],
            style: { initial: { fill: style.value["extra3-color"] } }
          },
          {
            name: "Australia",
            coords: [-24.017090500279256, 134.57941295147762],
            style: { initial: { fill: style.value["extra3-color"] } }
          },
          { name: "United States", coords: [37.0902, -95.7129] },
          {
            name: "Norway",
            coords: [60.472024, 8.468946],
            style: { initial: { fill: style.value["extra3-color"] } }
          },
          {
            name: "Ukraine",
            coords: [48.379433, 31.16558],
            style: { initial: { fill: style.value["extra3-color"] } }
          }
        ],
        lines: [
          { from: "Japan", to: "Greenland" },
          { from: "Japan", to: "United States" },
          { from: "Japan", to: "Canada" },
          { from: "Brazil", to: "Norway" },
          { from: "Brazil", to: "Ukraine" },
          { from: "Brazil", to: "Egypt" },
          { from: "Brazil", to: "Australia" }
        ],
        markerStyle: {
          initial: { fill: style.value["primary-color"] },
          selected: { fill: style.value["extra1-color"] }
        },
        markerLabelStyle: {
          initial: {
            fontFamily: style.value["font-family"],
            fontSize: 13,
            fill: style.value["fg-default-color"]
          }
        },
        lineStyle: {
          strokeDasharray: "6 3 6",
          animation: true
        },
        labels: {
          markers: {
            render(marker) {
              return marker.name;
            }
          }
        },
        showTooltip: true
      };
    }
    function loaded(map) {
      useResizeObserver(card, () => {
        map.updateSize();
      });
    }
    function refresh() {
      loading.value = true;
      if (loadingTimer.value) {
        clearTimeout(loadingTimer.value);
      }
      loadingTimer.value = setTimeout(() => {
        loading.value = false;
      }, 1500);
      options.value = getOption();
    }
    function regionTooltipShow(_, tooltip) {
      tooltip.css({ backgroundColor: style.value["primary-color"] });
    }
    watch(width, () => {
      refresh();
    });
    watchEffect(() => {
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vuevectormap = resolveComponent("vuevectormap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Vector Map</div><div class="links"><a href="https://jvm-docs.vercel.app/" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div>`);
      _push(ssrRenderComponent(unref(NCard), {
        ref_key: "card",
        ref: card,
        "content-class": "p-0!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpin), { show: loading.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-[60vh] w-full overflow-hidden p-5"${_scopeId2}>`);
                  if (!loading.value) {
                    _push3(ssrRenderComponent(_component_vuevectormap, {
                      map: "world",
                      width: "100%",
                      height: "100%",
                      options: options.value,
                      onLoaded: loaded,
                      onRegionTooltipShow: regionTooltipShow
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-[60vh] w-full overflow-hidden p-5" }, [
                      !loading.value ? (openBlock(), createBlock(_component_vuevectormap, {
                        key: 0,
                        map: "world",
                        width: "100%",
                        height: "100%",
                        options: options.value,
                        onLoaded: loaded,
                        onRegionTooltipShow: regionTooltipShow
                      }, null, 8, ["options"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpin), { show: loading.value }, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-[60vh] w-full overflow-hidden p-5" }, [
                    !loading.value ? (openBlock(), createBlock(_component_vuevectormap, {
                      key: 0,
                      map: "world",
                      width: "100%",
                      height: "100%",
                      options: options.value,
                      onLoaded: loaded,
                      onRegionTooltipShow: regionTooltipShow
                    }, null, 8, ["options"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Maps/VectorMap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=VectorMap-2mLIG5ne.mjs.map
