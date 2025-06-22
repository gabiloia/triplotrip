import { defineComponent, defineAsyncComponent, ref, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as _export_sfc, aa as useThemeStore, _ as _sfc_main$o, N as NCard, aH as NSpin } from './server.mjs';
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
import 'vooks';
import '@vueuse/core';
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
  __name: "Leaflet",
  __ssrInlineRender: true,
  setup(__props) {
    const Map = defineAsyncComponent(() => import('./Map-Bc_sJY7h.mjs'));
    const mounted = ref(false);
    useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-44940ea2><div class="page-header" data-v-44940ea2><div class="title" data-v-44940ea2>Leaflet</div><div class="links" data-v-44940ea2><a href="https://github.com/vue-leaflet/vue-leaflet" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-44940ea2>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div>`);
      _push(ssrRenderComponent(unref(NCard), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[60vh] w-full" data-v-44940ea2${_scopeId}>`);
            if (mounted.value) {
              _push2(ssrRenderComponent(unref(Map), null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(NSpin), { class: "h-full w-full" }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-[60vh] w-full" }, [
                mounted.value ? (openBlock(), createBlock(unref(Map), { key: 0 })) : (openBlock(), createBlock(unref(NSpin), {
                  key: 1,
                  class: "h-full w-full"
                }))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Maps/Leaflet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Leaflet = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-44940ea2"]]);

export { Leaflet as default };
//# sourceMappingURL=Leaflet-Bzb3YEAs.mjs.map
