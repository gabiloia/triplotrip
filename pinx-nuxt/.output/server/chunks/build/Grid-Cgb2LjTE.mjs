import { ref, defineAsyncComponent, computed, mergeProps, unref, withCtx, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, ab as useThemeStore, a as _sfc_main$s, N as NCard, ac as NSpin } from './server.mjs';
import { generateFakeDataDemo } from './dataGenerate-Cb3v_E4-.mjs';
import people from './peopleSample-DNZzLl6g.mjs';
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
const _sfc_main = {
  __name: "Grid",
  __ssrInlineRender: true,
  setup(__props) {
    const mounted = ref(false);
    const VGrid = defineAsyncComponent(() => import('@revolist/vue3-datagrid'));
    const data = generateFakeDataDemo(people, 50, (void 0).innerWidth > 700);
    const dataSource = data.source;
    const dataColumns = data.columns;
    const columnTypes = ref({});
    const themeStore = useThemeStore();
    const source = ref(dataSource);
    const pinnedBottomRows = ref([]);
    const columns = ref(dataColumns);
    const pinnedTopRows = ref([]);
    const theme = computed(() => themeStore.isThemeDark ? "darkMaterial" : "material");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped flex flex-col" }, _attrs))} data-v-7d236dad><div class="page-header" data-v-7d236dad><div class="title" data-v-7d236dad>RevoGrid</div><div class="links" data-v-7d236dad><a href="https://revolist.github.io/revogrid/" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-7d236dad>`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list scrollbar-styled grow" data-v-7d236dad>`);
      _push(ssrRenderComponent(unref(NCard), {
        class: "card",
        "content-class": "p-0!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (mounted.value) {
              _push2(ssrRenderComponent(unref(VGrid), {
                class: "grid-component",
                "auto-size-column": true,
                source: source.value,
                columns: columns.value,
                "column-types": columnTypes.value,
                "pinned-top-rows": pinnedTopRows.value,
                "pinned-bottom-rows": pinnedBottomRows.value,
                filter: true,
                theme: theme.value,
                resize: true,
                range: true,
                "row-class": "highlighted"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(NSpin), { class: "h-full w-full" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              mounted.value ? (openBlock(), createBlock(unref(VGrid), {
                key: 0,
                class: "grid-component",
                "auto-size-column": true,
                source: source.value,
                columns: columns.value,
                "column-types": columnTypes.value,
                "pinned-top-rows": pinnedTopRows.value,
                "pinned-bottom-rows": pinnedBottomRows.value,
                filter: true,
                theme: theme.value,
                resize: true,
                range: true,
                "row-class": "highlighted"
              }, null, 8, ["source", "columns", "column-types", "pinned-top-rows", "pinned-bottom-rows", "theme"])) : (openBlock(), createBlock(unref(NSpin), {
                key: 1,
                class: "h-full w-full"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/Grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d236dad"]]);

export { Grid as default };
//# sourceMappingURL=Grid-Cgb2LjTE.mjs.map
