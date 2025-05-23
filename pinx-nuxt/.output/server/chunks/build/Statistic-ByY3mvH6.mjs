import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$s } from './server.mjs';
import { N as NStatistic } from './Statistic-CU3SUvqv.mjs';
import { N as NRow, a as NCol } from './Col-CyPtjl9C.mjs';
import './LtrContext-DmPOw2ck.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
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
const Save = "carbon:save";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Statistic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Statistic</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/statistic" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-lg"
      }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-row>
						<n-col :span="12">
							<n-statistic label="Statistic" :value="99">
								<template #prefix>
									<n-icon>
										<Save />
									</n-icon>
								</template>
								<template #suffix>/ 100</template>
							</n-statistic>
						</n-col>
						<n-col :span="12">
							<n-statistic label="Active Users">1,234,123</n-statistic>
						</n-col>
					</n-row>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-row>
						<n-col :span="12">
							<n-statistic label="Statistic" :value="99">
								<template #prefix>
									<n-icon>
										<Save />
									</n-icon>
								</template>
								<template #suffix>/ 100</template>
							</n-statistic>
						</n-col>
						<n-col :span="12">
							<n-statistic label="Active Users">1,234,123</n-statistic>
						</n-col>
					</n-row>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NRow), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NStatistic), {
                          label: "Statistic",
                          value: 99
                        }, {
                          prefix: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$s, { name: Save }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$s, { name: Save })
                              ];
                            }
                          }),
                          suffix: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`/ 100`);
                            } else {
                              return [
                                createTextVNode("/ 100")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NStatistic), {
                            label: "Statistic",
                            value: 99
                          }, {
                            prefix: withCtx(() => [
                              createVNode(_sfc_main$s, { name: Save })
                            ]),
                            suffix: withCtx(() => [
                              createTextVNode("/ 100")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NStatistic), { label: "Active Users" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`1,234,123`);
                            } else {
                              return [
                                createTextVNode("1,234,123")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NStatistic), { label: "Active Users" }, {
                            default: withCtx(() => [
                              createTextVNode("1,234,123")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NStatistic), {
                          label: "Statistic",
                          value: 99
                        }, {
                          prefix: withCtx(() => [
                            createVNode(_sfc_main$s, { name: Save })
                          ]),
                          suffix: withCtx(() => [
                            createTextVNode("/ 100")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NStatistic), { label: "Active Users" }, {
                          default: withCtx(() => [
                            createTextVNode("1,234,123")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NRow), null, {
                default: withCtx(() => [
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NStatistic), {
                        label: "Statistic",
                        value: 99
                      }, {
                        prefix: withCtx(() => [
                          createVNode(_sfc_main$s, { name: Save })
                        ]),
                        suffix: withCtx(() => [
                          createTextVNode("/ 100")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NStatistic), { label: "Active Users" }, {
                        default: withCtx(() => [
                          createTextVNode("1,234,123")
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Statistic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Statistic-ByY3mvH6.mjs.map
