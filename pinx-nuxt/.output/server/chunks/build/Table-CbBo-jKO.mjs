import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { N as NTable } from './Table-B4kFBfKo.mjs';
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

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Table</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/table" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-table :bordered="false" :single-line="false">
						<thead>
							<tr>
								<th>Abandon</th>
								<th>Abnormal</th>
								<th>Abolish</th>
								<th>...</th>
								<th>It's hard to learn words</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>hard</td>
								<td>those</td>
								<td>words</td>
								<td>...</td>
								<td>Damn it! I can't remember those words.</td>
							</tr>
							<tr>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
							</tr>
						</tbody>
					</n-table>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-table :bordered="false" :single-line="false">
						<thead>
							<tr>
								<th>Abandon</th>
								<th>Abnormal</th>
								<th>Abolish</th>
								<th>...</th>
								<th>It's hard to learn words</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>hard</td>
								<td>those</td>
								<td>words</td>
								<td>...</td>
								<td>Damn it! I can't remember those words.</td>
							</tr>
							<tr>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
							</tr>
						</tbody>
					</n-table>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTable), {
              bordered: false,
              "single-line": false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th${_scopeId2}>Abandon</th><th${_scopeId2}>Abnormal</th><th${_scopeId2}>Abolish</th><th${_scopeId2}>...</th><th${_scopeId2}>It&#39;s hard to learn words</th></tr></thead><tbody${_scopeId2}><tr${_scopeId2}><td${_scopeId2}>hard</td><td${_scopeId2}>those</td><td${_scopeId2}>words</td><td${_scopeId2}>...</td><td${_scopeId2}>Damn it! I can&#39;t remember those words.</td></tr><tr${_scopeId2}><td${_scopeId2}>...</td><td${_scopeId2}>...</td><td${_scopeId2}>...</td><td${_scopeId2}>...</td><td${_scopeId2}>...</td></tr></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", null, "Abandon"),
                        createVNode("th", null, "Abnormal"),
                        createVNode("th", null, "Abolish"),
                        createVNode("th", null, "..."),
                        createVNode("th", null, "It's hard to learn words")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", null, [
                        createVNode("td", null, "hard"),
                        createVNode("td", null, "those"),
                        createVNode("td", null, "words"),
                        createVNode("td", null, "..."),
                        createVNode("td", null, "Damn it! I can't remember those words.")
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "..."),
                        createVNode("td", null, "..."),
                        createVNode("td", null, "..."),
                        createVNode("td", null, "..."),
                        createVNode("td", null, "...")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTable), {
                bordered: false,
                "single-line": false
              }, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "Abandon"),
                      createVNode("th", null, "Abnormal"),
                      createVNode("th", null, "Abolish"),
                      createVNode("th", null, "..."),
                      createVNode("th", null, "It's hard to learn words")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", null, "hard"),
                      createVNode("td", null, "those"),
                      createVNode("td", null, "words"),
                      createVNode("td", null, "..."),
                      createVNode("td", null, "Damn it! I can't remember those words.")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "..."),
                      createVNode("td", null, "..."),
                      createVNode("td", null, "..."),
                      createVNode("td", null, "..."),
                      createVNode("td", null, "...")
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Table-CbBo-jKO.mjs.map
