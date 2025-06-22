import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button } from './server.mjs';
import { N as NSkeleton } from './Skeleton-AZ5ghuyA.mjs';
import { N as NSpace } from './Space-BkDN_nha.mjs';
import { N as NSwitch } from './Switch-DC90Lqaq.mjs';
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
  __name: "Skeleton",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Skeleton</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/skeleton" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-skeleton text :repeat="2" />
					<n-skeleton text style="width: 60%" />
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-skeleton text :repeat="2" />
					<n-skeleton text style="width: 60%" />
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSkeleton), {
              text: "",
              repeat: 2
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NSkeleton), {
              text: "",
              style: { "width": "60%" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSkeleton), {
                text: "",
                repeat: 2
              }),
              createVNode(unref(NSkeleton), {
                text: "",
                style: { "width": "60%" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Box" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-skeleton height="40px" width="33%" />
						<n-skeleton height="40px" width="66%" :sharp="false" />
						<n-skeleton height="40px" round />
						<n-skeleton height="40px" circle />
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-skeleton height="40px" width="33%" />
						<n-skeleton height="40px" width="66%" :sharp="false" />
						<n-skeleton height="40px" round />
						<n-skeleton height="40px" circle />
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSkeleton), {
                    height: "40px",
                    width: "33%"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSkeleton), {
                    height: "40px",
                    width: "66%",
                    sharp: false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSkeleton), {
                    height: "40px",
                    round: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSkeleton), {
                    height: "40px",
                    circle: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSkeleton), {
                      height: "40px",
                      width: "33%"
                    }),
                    createVNode(unref(NSkeleton), {
                      height: "40px",
                      width: "66%",
                      sharp: false
                    }),
                    createVNode(unref(NSkeleton), {
                      height: "40px",
                      round: ""
                    }),
                    createVNode(unref(NSkeleton), {
                      height: "40px",
                      circle: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NSkeleton), {
                    height: "40px",
                    width: "33%"
                  }),
                  createVNode(unref(NSkeleton), {
                    height: "40px",
                    width: "66%",
                    sharp: false
                  }),
                  createVNode(unref(NSkeleton), {
                    height: "40px",
                    round: ""
                  }),
                  createVNode(unref(NSkeleton), {
                    height: "40px",
                    circle: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Size" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-space>
							<n-switch v-model:value="loading" />
							Loading
						</n-space>
						<n-space>
							<n-skeleton v-if="loading" :width="146" :sharp="false" size="medium" />
							<n-button v-else>Won't you fly high</n-button>
							<n-skeleton v-if="loading" :width="132" round size="medium" />
							<n-button v-else round>free bird, yeah</n-button>
							<n-skeleton v-if="loading" circle size="medium" />
							<n-button v-else circle>?</n-button>
						</n-space>
					</n-space>
					`))} ${ssrInterpolate(js(`const loading = ref(true)`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-space>
							<n-switch v-model:value="loading" />
							Loading
						</n-space>
						<n-space>
							<n-skeleton v-if="loading" :width="146" :sharp="false" size="medium" />
							<n-button v-else>Won't you fly high</n-button>
							<n-skeleton v-if="loading" :width="132" round size="medium" />
							<n-button v-else round>free bird, yeah</n-button>
							<n-skeleton v-if="loading" circle size="medium" />
							<n-button v-else circle>?</n-button>
						</n-space>
					</n-space>
					`)) + " " + toDisplayString(js(`const loading = ref(true)`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NSwitch), {
                          value: loading.value,
                          "onUpdate:value": ($event) => loading.value = $event
                        }, null, _parent4, _scopeId3));
                        _push4(` Loading `);
                      } else {
                        return [
                          createVNode(unref(NSwitch), {
                            value: loading.value,
                            "onUpdate:value": ($event) => loading.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" Loading ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (loading.value) {
                          _push4(ssrRenderComponent(unref(NSkeleton), {
                            width: 146,
                            sharp: false,
                            size: "medium"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(Button), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Won&#39;t you fly high`);
                              } else {
                                return [
                                  createTextVNode("Won't you fly high")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        if (loading.value) {
                          _push4(ssrRenderComponent(unref(NSkeleton), {
                            width: 132,
                            round: "",
                            size: "medium"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(Button), { round: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`free bird, yeah`);
                              } else {
                                return [
                                  createTextVNode("free bird, yeah")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        if (loading.value) {
                          _push4(ssrRenderComponent(unref(NSkeleton), {
                            circle: "",
                            size: "medium"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(Button), { circle: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`?`);
                              } else {
                                return [
                                  createTextVNode("?")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                            key: 0,
                            width: 146,
                            sharp: false,
                            size: "medium"
                          })) : (openBlock(), createBlock(unref(Button), { key: 1 }, {
                            default: withCtx(() => [
                              createTextVNode("Won't you fly high")
                            ]),
                            _: 1
                          })),
                          loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                            key: 2,
                            width: 132,
                            round: "",
                            size: "medium"
                          })) : (openBlock(), createBlock(unref(Button), {
                            key: 3,
                            round: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("free bird, yeah")
                            ]),
                            _: 1
                          })),
                          loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                            key: 4,
                            circle: "",
                            size: "medium"
                          })) : (openBlock(), createBlock(unref(Button), {
                            key: 5,
                            circle: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("?")
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(NSwitch), {
                          value: loading.value,
                          "onUpdate:value": ($event) => loading.value = $event
                        }, null, 8, ["value", "onUpdate:value"]),
                        createTextVNode(" Loading ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                          key: 0,
                          width: 146,
                          sharp: false,
                          size: "medium"
                        })) : (openBlock(), createBlock(unref(Button), { key: 1 }, {
                          default: withCtx(() => [
                            createTextVNode("Won't you fly high")
                          ]),
                          _: 1
                        })),
                        loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                          key: 2,
                          width: 132,
                          round: "",
                          size: "medium"
                        })) : (openBlock(), createBlock(unref(Button), {
                          key: 3,
                          round: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("free bird, yeah")
                          ]),
                          _: 1
                        })),
                        loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                          key: 4,
                          circle: "",
                          size: "medium"
                        })) : (openBlock(), createBlock(unref(Button), {
                          key: 5,
                          circle: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("?")
                          ]),
                          _: 1
                        }))
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
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(NSwitch), {
                        value: loading.value,
                        "onUpdate:value": ($event) => loading.value = $event
                      }, null, 8, ["value", "onUpdate:value"]),
                      createTextVNode(" Loading ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                        key: 0,
                        width: 146,
                        sharp: false,
                        size: "medium"
                      })) : (openBlock(), createBlock(unref(Button), { key: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("Won't you fly high")
                        ]),
                        _: 1
                      })),
                      loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                        key: 2,
                        width: 132,
                        round: "",
                        size: "medium"
                      })) : (openBlock(), createBlock(unref(Button), {
                        key: 3,
                        round: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("free bird, yeah")
                        ]),
                        _: 1
                      })),
                      loading.value ? (openBlock(), createBlock(unref(NSkeleton), {
                        key: 4,
                        circle: "",
                        size: "medium"
                      })) : (openBlock(), createBlock(unref(Button), {
                        key: 5,
                        circle: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("?")
                        ]),
                        _: 1
                      }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Skeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Skeleton-Bkpdy5uj.mjs.map
