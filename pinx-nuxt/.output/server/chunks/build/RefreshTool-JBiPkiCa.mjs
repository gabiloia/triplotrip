import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { bI as useMainStore, N as NCard, B as Button } from './server.mjs';
import { N as NTime } from './Time-Tnt26cb5.mjs';
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
import './index-CdFfausA.mjs';
import './getDefaultOptions-B-S4FfjT.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RefreshTool",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const time = ref((/* @__PURE__ */ new Date()).getTime());
    function reload(e) {
      mainStore.softReload();
      return e;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Refresh tool</div></div>`);
      _push(ssrRenderComponent(unref(NCard), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` This tool allows you to refresh only the view, not the entire app. It can be useful in various situations. Here&#39;s an example: <div class="demo mt-4"${_scopeId}><div class="mb-5 text-lg"${_scopeId}><strong class="mr-2"${_scopeId}>Timestamp page load:</strong>`);
            _push2(ssrRenderComponent(unref(NTime), {
              time: time.value,
              format: "HH:mm:ss"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              size: "large",
              onClick: reload
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Refresh view tool`);
                } else {
                  return [
                    createTextVNode("Refresh view tool")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createTextVNode(" This tool allows you to refresh only the view, not the entire app. It can be useful in various situations. Here's an example: "),
              createVNode("div", { class: "demo mt-4" }, [
                createVNode("div", { class: "mb-5 text-lg" }, [
                  createVNode("strong", { class: "mr-2" }, "Timestamp page load:"),
                  createVNode(unref(NTime), {
                    time: time.value,
                    format: "HH:mm:ss"
                  }, null, 8, ["time"])
                ]),
                createVNode(unref(Button), {
                  type: "primary",
                  size: "large",
                  onClick: reload
                }, {
                  default: withCtx(() => [
                    createTextVNode("Refresh view tool")
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Toolbox/RefreshTool.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=RefreshTool-JBiPkiCa.mjs.map
