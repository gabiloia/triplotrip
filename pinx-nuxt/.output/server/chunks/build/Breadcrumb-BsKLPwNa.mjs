import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$s, aW as NText, aV as NDropdown } from './server.mjs';
import { N as NBreadcrumb, a as NBreadcrumbItem } from './BreadcrumbItem-XWCnhCFT.mjs';
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
const Cash = "ion:cash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    const options1 = [
      {
        label: "David Tao",
        key: 1
      },
      {
        label: "\u9ED1\u8272\u67F3\u4E01",
        key: 2
      }
    ];
    const options2 = [
      {
        label: "\u5C0F\u9547\u59D1\u5A18",
        key: 1
      },
      {
        label: "\u666E\u901A\u670B\u53CB",
        key: 2
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Breadcrumb</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/breadcrumb" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-breadcrumb>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Home
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Account
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Category
						</n-breadcrumb-item>
					</n-breadcrumb>
					`))} ${ssrInterpolate(js(`
						import { Cash } from "@vicons/ionicons5"
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-breadcrumb>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Home
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Account
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Category
						</n-breadcrumb-item>
					</n-breadcrumb>
					`)) + " " + toDisplayString(js(`
						import { Cash } from "@vicons/ionicons5"
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NBreadcrumb), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$s, { name: Cash }, null, _parent4, _scopeId3));
                        _push4(` Home `);
                      } else {
                        return [
                          createVNode(_sfc_main$s, { name: Cash }),
                          createTextVNode(" Home ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$s, { name: Cash }, null, _parent4, _scopeId3));
                        _push4(` Account `);
                      } else {
                        return [
                          createVNode(_sfc_main$s, { name: Cash }),
                          createTextVNode(" Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$s, { name: Cash }, null, _parent4, _scopeId3));
                        _push4(` Category `);
                      } else {
                        return [
                          createVNode(_sfc_main$s, { name: Cash }),
                          createTextVNode(" Category ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NBreadcrumbItem), null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$s, { name: Cash }),
                        createTextVNode(" Home ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NBreadcrumbItem), null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$s, { name: Cash }),
                        createTextVNode(" Account ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NBreadcrumbItem), null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$s, { name: Cash }),
                        createTextVNode(" Category ")
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
              createVNode(unref(NBreadcrumb), null, {
                default: withCtx(() => [
                  createVNode(unref(NBreadcrumbItem), null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$s, { name: Cash }),
                      createTextVNode(" Home ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NBreadcrumbItem), null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$s, { name: Cash }),
                      createTextVNode(" Account ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NBreadcrumbItem), null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$s, { name: Cash }),
                      createTextVNode(" Category ")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Dropdown" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-breadcrumb>
						<n-breadcrumb-item>
							<n-dropdown :options="options1">
								<div class="trigger">I'm ok</div>
							</n-dropdown>
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-dropdown :options="options2">
								<div class="trigger">I'm ok</div>
							</n-dropdown>
						</n-breadcrumb-item>
					</n-breadcrumb>
					`))} ${ssrInterpolate(js(`
						const options1 = [
							{
								label: "David Tao",
								key: 1
							},
							{
								label: "\u9ED1\u8272\u67F3\u4E01",
								key: 2
							}
						]
						const options2 = [
							{
								label: "\u5C0F\u9547\u59D1\u5A18",
								key: 1
							},
							{
								label: "\u666E\u901A\u670B\u53CB",
								key: 2
							}
						]
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-breadcrumb>
						<n-breadcrumb-item>
							<n-dropdown :options="options1">
								<div class="trigger">I'm ok</div>
							</n-dropdown>
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-dropdown :options="options2">
								<div class="trigger">I'm ok</div>
							</n-dropdown>
						</n-breadcrumb-item>
					</n-breadcrumb>
					`)) + " " + toDisplayString(js(`
						const options1 = [
							{
								label: "David Tao",
								key: 1
							},
							{
								label: "\u9ED1\u8272\u67F3\u4E01",
								key: 2
							}
						]
						const options2 = [
							{
								label: "\u5C0F\u9547\u59D1\u5A18",
								key: 1
							},
							{
								label: "\u666E\u901A\u670B\u53CB",
								key: 2
							}
						]
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}> It is possible to pass a custom template when you want to customize the item link to be, for example a `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`dropdown`);
                } else {
                  return [
                    createTextVNode("dropdown")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` or a `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`router-link`);
                } else {
                  return [
                    createTextVNode("router-link")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` . </div>`);
            _push2(ssrRenderComponent(unref(NBreadcrumb), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NDropdown), { options: options1 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="trigger"${_scopeId4}>I&#39;m ok</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "trigger" }, "I'm ok")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NDropdown), { options: options1 }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "trigger" }, "I'm ok")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NBreadcrumbItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NDropdown), { options: options2 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="trigger"${_scopeId4}>I&#39;m ok</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "trigger" }, "I'm ok")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NDropdown), { options: options2 }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "trigger" }, "I'm ok")
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
                    createVNode(unref(NBreadcrumbItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(NDropdown), { options: options1 }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "trigger" }, "I'm ok")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NBreadcrumbItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(NDropdown), { options: options2 }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "trigger" }, "I'm ok")
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
              createVNode("div", null, [
                createTextVNode(" It is possible to pass a custom template when you want to customize the item link to be, for example a "),
                createVNode(unref(NText), { code: "" }, {
                  default: withCtx(() => [
                    createTextVNode("dropdown")
                  ]),
                  _: 1
                }),
                createTextVNode(" or a "),
                createVNode(unref(NText), { code: "" }, {
                  default: withCtx(() => [
                    createTextVNode("router-link")
                  ]),
                  _: 1
                }),
                createTextVNode(" . ")
              ]),
              createVNode(unref(NBreadcrumb), null, {
                default: withCtx(() => [
                  createVNode(unref(NBreadcrumbItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(NDropdown), { options: options1 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "trigger" }, "I'm ok")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NBreadcrumbItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(NDropdown), { options: options2 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "trigger" }, "I'm ok")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Breadcrumb-BsKLPwNa.mjs.map
