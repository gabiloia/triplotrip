import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { a as _export_sfc, _ as _sfc_main$o, aE as NTag, c as NText } from './server.mjs';
import { N as NAffix } from './Affix-DLzQfSWJ.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BP2F26pm.mjs';
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
  __name: "Affix",
  __ssrInlineRender: true,
  setup(__props) {
    const containerRef = ref(void 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-483d7121><div class="page-header" data-v-483d7121><div class="title" data-v-483d7121>Affix</div><div class="links" data-v-483d7121><a href="https://www.naiveui.com/en-US/light/components/affix" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-483d7121>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-483d7121>`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        dscription: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Affix can be `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`absolute`);
                } else {
                  return [
                    createTextVNode("absolute")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` or `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`fixed`);
                } else {
                  return [
                    createTextVNode("fixed")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` positioned. You may need some css tricks to make it works as following. By default position is set to fixed, because in most cases scrolled element is `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`document`);
                } else {
                  return [
                    createTextVNode("document")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` . `);
          } else {
            return [
              createTextVNode(" Affix can be "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("absolute")
                ]),
                _: 1
              }),
              createTextVNode(" or "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("fixed")
                ]),
                _: 1
              }),
              createTextVNode(" positioned. You may need some css tricks to make it works as following. By default position is set to fixed, because in most cases scrolled element is "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("document")
                ]),
                _: 1
              }),
              createTextVNode(" . ")
            ];
          }
        }),
        code: withCtx(({ html, css }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div class="absolute-anchor-container">
						<div ref="containerRef" class="container">
							<div class="padding" />
							<div class="content">
								<div style="display: inline-block; width: 50%">
									<n-affix :trigger-top="50" position="absolute" :listen-to="containerRef">
										<n-tag>Affix Trigger Top 50px</n-tag>
									</n-affix>
								</div>
								<div style="display: inline-block; width: 50%">
									<n-affix :trigger-bottom="60" position="absolute" :listen-to="containerRef">
										<n-tag>Affix Trigger Bottom 60px</n-tag>
									</n-affix>
								</div>
							</div>
						</div>
					</div>
					`))} ${ssrInterpolate(css(`
						.absolute-anchor-container {
							width: 100%;
							height: 200px;
							position: relative;
						}

						.anchor-container {
							height: 200px;
							background-color: rgba(128, 128, 128, 0.3);
							border-radius: 3px;
							overflow: auto;
						}

						.padding {
							height: 150px;
							width: 100%;
							background-color: rgba(128, 128, 128, 0.15);
						}

						.content {
							height: 600px;
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div class="absolute-anchor-container">
						<div ref="containerRef" class="container">
							<div class="padding" />
							<div class="content">
								<div style="display: inline-block; width: 50%">
									<n-affix :trigger-top="50" position="absolute" :listen-to="containerRef">
										<n-tag>Affix Trigger Top 50px</n-tag>
									</n-affix>
								</div>
								<div style="display: inline-block; width: 50%">
									<n-affix :trigger-bottom="60" position="absolute" :listen-to="containerRef">
										<n-tag>Affix Trigger Bottom 60px</n-tag>
									</n-affix>
								</div>
							</div>
						</div>
					</div>
					`)) + " " + toDisplayString(css(`
						.absolute-anchor-container {
							width: 100%;
							height: 200px;
							position: relative;
						}

						.anchor-container {
							height: 200px;
							background-color: rgba(128, 128, 128, 0.3);
							border-radius: 3px;
							overflow: auto;
						}

						.padding {
							height: 150px;
							width: 100%;
							background-color: rgba(128, 128, 128, 0.15);
						}

						.content {
							height: 600px;
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute-anchor-container" data-v-483d7121${_scopeId}><div class="anchor-container" data-v-483d7121${_scopeId}><div class="padding" data-v-483d7121${_scopeId}></div><div class="content" data-v-483d7121${_scopeId}>`);
            if (containerRef.value) {
              _push2(`<div style="${ssrRenderStyle({ "display": "inline-block", "width": "50%" })}" data-v-483d7121${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NAffix), {
                "trigger-top": 50,
                position: "absolute",
                "listen-to": containerRef.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(NTag), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Affix Trigger Top 50px`);
                        } else {
                          return [
                            createTextVNode("Affix Trigger Top 50px")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(NTag), null, {
                        default: withCtx(() => [
                          createTextVNode("Affix Trigger Top 50px")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div style="${ssrRenderStyle({ "display": "inline-block", "width": "50%" })}" data-v-483d7121${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NAffix), {
              "trigger-bottom": 60,
              position: "absolute",
              "listen-to": containerRef.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTag), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Affix Trigger Bottom 60px`);
                      } else {
                        return [
                          createTextVNode("Affix Trigger Bottom 60px")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTag), null, {
                      default: withCtx(() => [
                        createTextVNode("Affix Trigger Bottom 60px")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute-anchor-container" }, [
                createVNode("div", {
                  ref_key: "containerRef",
                  ref: containerRef,
                  class: "anchor-container"
                }, [
                  createVNode("div", { class: "padding" }),
                  createVNode("div", { class: "content" }, [
                    containerRef.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      style: { "display": "inline-block", "width": "50%" }
                    }, [
                      createVNode(unref(NAffix), {
                        "trigger-top": 50,
                        position: "absolute",
                        "listen-to": containerRef.value
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NTag), null, {
                            default: withCtx(() => [
                              createTextVNode("Affix Trigger Top 50px")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["listen-to"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { style: { "display": "inline-block", "width": "50%" } }, [
                      createVNode(unref(NAffix), {
                        "trigger-bottom": 60,
                        position: "absolute",
                        "listen-to": containerRef.value
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NTag), null, {
                            default: withCtx(() => [
                              createTextVNode("Affix Trigger Bottom 60px")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["listen-to"])
                    ])
                  ])
                ], 512)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Affix.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Affix = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-483d7121"]]);

export { Affix as default };
//# sourceMappingURL=Affix-xP1c5_ss.mjs.map
