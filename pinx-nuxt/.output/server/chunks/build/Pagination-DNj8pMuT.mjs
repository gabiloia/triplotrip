import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { N as NPagination } from './Pagination-pP1u_ela.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
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
import './Input-VW15MloS.mjs';
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-Cn-19BJa.mjs';
import './utils-DMBa_qdR.mjs';
import './Selection-DmCMUIfq.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-OKwjnwtS.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './Forward-ggOyj9WR.mjs';
import './Popselect-oknqzXag.mjs';
import './prop-CovD8_bW.mjs';
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref(2);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Pagination</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/pagination" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="small"
							show-quick-jumper
							show-size-picker
						/>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="medium"
							show-quick-jumper
							show-size-picker
						/>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="large"
							show-quick-jumper
							show-size-picker
						/>
					</n-space>
					`))} ${ssrInterpolate(js(`const page = ref(2)`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="small"
							show-quick-jumper
							show-size-picker
						/>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="medium"
							show-quick-jumper
							show-size-picker
						/>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="large"
							show-quick-jumper
							show-size-picker
						/>
					</n-space>
					`)) + " " + toDisplayString(js(`const page = ref(2)`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NPagination), {
                    page: page.value,
                    "onUpdate:page": ($event) => page.value = $event,
                    "page-count": 100,
                    size: "small",
                    "show-quick-jumper": "",
                    "show-size-picker": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NPagination), {
                    page: page.value,
                    "onUpdate:page": ($event) => page.value = $event,
                    "page-count": 100,
                    size: "medium",
                    "show-quick-jumper": "",
                    "show-size-picker": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NPagination), {
                    page: page.value,
                    "onUpdate:page": ($event) => page.value = $event,
                    "page-count": 100,
                    size: "large",
                    "show-quick-jumper": "",
                    "show-size-picker": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NPagination), {
                      page: page.value,
                      "onUpdate:page": ($event) => page.value = $event,
                      "page-count": 100,
                      size: "small",
                      "show-quick-jumper": "",
                      "show-size-picker": ""
                    }, null, 8, ["page", "onUpdate:page"]),
                    createVNode(unref(NPagination), {
                      page: page.value,
                      "onUpdate:page": ($event) => page.value = $event,
                      "page-count": 100,
                      size: "medium",
                      "show-quick-jumper": "",
                      "show-size-picker": ""
                    }, null, 8, ["page", "onUpdate:page"]),
                    createVNode(unref(NPagination), {
                      page: page.value,
                      "onUpdate:page": ($event) => page.value = $event,
                      "page-count": 100,
                      size: "large",
                      "show-quick-jumper": "",
                      "show-size-picker": ""
                    }, null, 8, ["page", "onUpdate:page"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NPagination), {
                    page: page.value,
                    "onUpdate:page": ($event) => page.value = $event,
                    "page-count": 100,
                    size: "small",
                    "show-quick-jumper": "",
                    "show-size-picker": ""
                  }, null, 8, ["page", "onUpdate:page"]),
                  createVNode(unref(NPagination), {
                    page: page.value,
                    "onUpdate:page": ($event) => page.value = $event,
                    "page-count": 100,
                    size: "medium",
                    "show-quick-jumper": "",
                    "show-size-picker": ""
                  }, null, 8, ["page", "onUpdate:page"]),
                  createVNode(unref(NPagination), {
                    page: page.value,
                    "onUpdate:page": ($event) => page.value = $event,
                    "page-count": 100,
                    size: "large",
                    "show-quick-jumper": "",
                    "show-size-picker": ""
                  }, null, 8, ["page", "onUpdate:page"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Pagination-DNj8pMuT.mjs.map
