import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import Shepherd from 'shepherd.js';
import { N as NCard, B as Button } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tour",
  __ssrInlineRender: true,
  setup(__props) {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        scrollTo: { behavior: "smooth", block: "center" }
      }
    });
    function startTour() {
      tour.start();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Tour</div></div>`);
      _push(ssrRenderComponent(unref(NCard), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Using <a href="https://shepherdjs.dev/" target="_blank" alt="docs" rel="nofollow noopener noreferrer"${_scopeId}> shepherd.js </a> , you can instantly create beautiful tours that explain the features of your application. Here&#39;s an example. <div class="demo mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              size: "large",
              onClick: ($event) => startTour()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Start tour`);
                } else {
                  return [
                    createTextVNode("Start tour")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createTextVNode(" Using "),
              createVNode("a", {
                href: "https://shepherdjs.dev/",
                target: "_blank",
                alt: "docs",
                rel: "nofollow noopener noreferrer"
              }, " shepherd.js "),
              createTextVNode(" , you can instantly create beautiful tours that explain the features of your application. Here's an example. "),
              createVNode("div", { class: "demo mt-4" }, [
                createVNode(unref(Button), {
                  type: "primary",
                  size: "large",
                  onClick: ($event) => startTour()
                }, {
                  default: withCtx(() => [
                    createTextVNode("Start tour")
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Toolbox/Tour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tour-xvqxYpCd.mjs.map
