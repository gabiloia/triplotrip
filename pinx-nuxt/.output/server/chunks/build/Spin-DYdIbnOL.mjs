import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s, ac as NSpin, aW as NText, B as Button } from './server.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import { N as NAlert } from './Alert-B8qTsRQd.mjs';
import './LtrContext-CQINXXZ7.mjs';
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
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Spin",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Spin</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/spin" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Here are `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`small`);
                } else {
                  return [
                    createTextVNode("small")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`medium`);
                } else {
                  return [
                    createTextVNode("medium")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` and `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`large`);
                } else {
                  return [
                    createTextVNode("large")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` spins. `);
          } else {
            return [
              createTextVNode(" Here are "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("small")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("medium")
                ]),
                _: 1
              }),
              createTextVNode(" and "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("large")
                ]),
                _: 1
              }),
              createTextVNode(" spins. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-spin size="small" />
						<n-spin size="medium" />
						<n-spin size="large" />
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-spin size="small" />
						<n-spin size="medium" />
						<n-spin size="large" />
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSpin), { size: "small" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSpin), { size: "medium" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSpin), { size: "large" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSpin), { size: "small" }),
                    createVNode(unref(NSpin), { size: "medium" }),
                    createVNode(unref(NSpin), { size: "large" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NSpin), { size: "small" }),
                  createVNode(unref(NSpin), { size: "medium" }),
                  createVNode(unref(NSpin), { size: "large" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Wrap" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`You can wrap a component inside spin.`);
          } else {
            return [
              createTextVNode("You can wrap a component inside spin.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-spin :show="show">
							<n-alert title="La La La" type="success">
								Leave it till tomorrow to unpack my case. Honey disconnect the phone.
							</n-alert>
						</n-spin>
						<n-button @click="show = !show">Click to Spin</n-button>
					</n-space>
					`))} ${ssrInterpolate(js(`const show = ref(false)`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-spin :show="show">
							<n-alert title="La La La" type="success">
								Leave it till tomorrow to unpack my case. Honey disconnect the phone.
							</n-alert>
						</n-spin>
						<n-button @click="show = !show">Click to Spin</n-button>
					</n-space>
					`)) + " " + toDisplayString(js(`const show = ref(false)`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSpin), { show: show.value }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NAlert), {
                          title: "La La La",
                          type: "success"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Leave it till tomorrow to unpack my case. Honey disconnect the phone. `);
                            } else {
                              return [
                                createTextVNode(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NAlert), {
                            title: "La La La",
                            type: "success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => show.value = !show.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Click to Spin`);
                      } else {
                        return [
                          createTextVNode("Click to Spin")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSpin), { show: show.value }, {
                      default: withCtx(() => [
                        createVNode(unref(NAlert), {
                          title: "La La La",
                          type: "success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["show"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => show.value = !show.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Click to Spin")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NSpin), { show: show.value }, {
                    default: withCtx(() => [
                      createVNode(unref(NAlert), {
                        title: "La La La",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => show.value = !show.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Click to Spin")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Spin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Spin-DYdIbnOL.mjs.map
