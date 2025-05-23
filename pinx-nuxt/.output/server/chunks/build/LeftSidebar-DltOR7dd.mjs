import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { S as SegmentedPage } from './SegmentedPage-C3KskJxG.mjs';
import { u as useHideLayoutFooter } from './useHideLayoutFooter-CVal8-DF.mjs';
import { a as _export_sfc } from './server.mjs';
import '@vueuse/core';
import 'evtd';
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
import 'lodash/set.js';
import 'lodash-es';
import '@css-render/plugin-bem';
import 'css-render';
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
  __name: "LeftSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    useHideLayoutFooter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped page-mobile-full page-without-footer flex flex-col" }, _attrs))} data-v-cb7002e5>`);
      _push(ssrRenderComponent(SegmentedPage, { "enable-resize": "" }, {
        "main-toolbar": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Main toolbar`);
          } else {
            return [
              createTextVNode("Main toolbar")
            ];
          }
        }),
        "main-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-cb7002e5${_scopeId}>Main content scrollable</div><div class="spacer mt-5" data-v-cb7002e5${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", null, "Main content scrollable"),
              createVNode("div", { class: "spacer mt-5" })
            ];
          }
        }),
        "main-footer": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Main footer`);
          } else {
            return [
              createTextVNode("Main footer")
            ];
          }
        }),
        "sidebar-header": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sidebar header`);
          } else {
            return [
              createTextVNode("Sidebar header")
            ];
          }
        }),
        "sidebar-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-cb7002e5${_scopeId}>Sidebar content scrollable</div><div class="spacer mt-5" data-v-cb7002e5${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", null, "Sidebar content scrollable"),
              createVNode("div", { class: "spacer mt-5" })
            ];
          }
        }),
        "sidebar-footer": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sidebar footer`);
          } else {
            return [
              createTextVNode("Sidebar footer")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Layout/LeftSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LeftSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb7002e5"]]);

export { LeftSidebar as default };
//# sourceMappingURL=LeftSidebar-DltOR7dd.mjs.map
