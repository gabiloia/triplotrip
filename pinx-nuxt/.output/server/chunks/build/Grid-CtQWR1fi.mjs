import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _export_sfc, _ as _sfc_main$o } from './server.mjs';
import { N as NGrid, a as NGi } from './Grid-DHldlZwH.mjs';
import './LtrContext-CjyxPKj1.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BZVO93eO.mjs';
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
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Grid",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-aa2a3dfc><div class="page-header" data-v-aa2a3dfc><div class="title" data-v-aa2a3dfc>Grid</div><div class="links" data-v-aa2a3dfc><a href="https://www.naiveui.com/en-US/light/components/grid" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-aa2a3dfc>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-aa2a3dfc>`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, css }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-grid :x-gap="12" :y-gap="8" :cols="4">
						<n-grid-item>
							<div class="light-green" />
						</n-grid-item>
						<n-grid-item>
							<div class="green" />
						</n-grid-item>
						<n-grid-item>
							<div class="light-green" />
						</n-grid-item>
						<n-grid-item>
							<div class="green" />
						</n-grid-item>
						<n-grid-item>
							<div class="light-green" />
						</n-grid-item>
						<n-grid-item>
							<div class="green" />
						</n-grid-item>
						<n-grid-item>
							<div class="light-green" />
						</n-grid-item>
						<n-grid-item>
							<div class="green" />
						</n-grid-item>
					</n-grid>
					`))} ${ssrInterpolate(css(`
						.light-green {
							height: 108px;
							background-color: rgba(0, 128, 0, 0.12);
						}
						.green {
							height: 108px;
							background-color: rgba(0, 128, 0, 0.24);
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-grid :x-gap="12" :y-gap="8" :cols="4">
						<n-grid-item>
							<div class="light-green" />
						</n-grid-item>
						<n-grid-item>
							<div class="green" />
						</n-grid-item>
						<n-grid-item>
							<div class="light-green" />
						</n-grid-item>
						<n-grid-item>
							<div class="green" />
						</n-grid-item>
						<n-grid-item>
							<div class="light-green" />
						</n-grid-item>
						<n-grid-item>
							<div class="green" />
						</n-grid-item>
						<n-grid-item>
							<div class="light-green" />
						</n-grid-item>
						<n-grid-item>
							<div class="green" />
						</n-grid-item>
					</n-grid>
					`)) + " " + toDisplayString(css(`
						.light-green {
							height: 108px;
							background-color: rgba(0, 128, 0, 0.12);
						}
						.green {
							height: 108px;
							background-color: rgba(0, 128, 0, 0.24);
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NGrid), {
              "x-gap": 12,
              "y-gap": 8,
              cols: 4
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NGi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="light-green" data-v-aa2a3dfc${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "light-green" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NGi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="green" data-v-aa2a3dfc${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "green" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NGi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="light-green" data-v-aa2a3dfc${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "light-green" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NGi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="green" data-v-aa2a3dfc${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "green" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NGi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="light-green" data-v-aa2a3dfc${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "light-green" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NGi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="green" data-v-aa2a3dfc${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "green" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NGi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="light-green" data-v-aa2a3dfc${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "light-green" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NGi), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="green" data-v-aa2a3dfc${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "green" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NGi), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "light-green" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NGi), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "green" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NGi), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "light-green" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NGi), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "green" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NGi), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "light-green" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NGi), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "green" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NGi), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "light-green" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NGi), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "green" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NGrid), {
                "x-gap": 12,
                "y-gap": 8,
                cols: 4
              }, {
                default: withCtx(() => [
                  createVNode(unref(NGi), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "light-green" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NGi), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "green" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NGi), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "light-green" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NGi), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "green" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NGi), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "light-green" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NGi), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "green" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NGi), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "light-green" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NGi), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "green" })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aa2a3dfc"]]);

export { Grid as default };
//# sourceMappingURL=Grid-CtQWR1fi.mjs.map
