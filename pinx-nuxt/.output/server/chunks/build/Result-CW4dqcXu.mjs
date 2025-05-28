import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s, bK as NResult, B as Button } from './server.mjs';
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

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Result",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Result</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/result" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "404" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-result status="404" title="404 Not Found" description="You know life is always ridiculous.">
						<template #footer>
							<n-button>Find Something Funny</n-button>
						</template>
					</n-result>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-result status="404" title="404 Not Found" description="You know life is always ridiculous.">
						<template #footer>
							<n-button>Find Something Funny</n-button>
						</template>
					</n-result>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NResult), {
              status: "404",
              title: "404 Not Found",
              description: "You know life is always ridiculous."
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Find Something Funny`);
                      } else {
                        return [
                          createTextVNode("Find Something Funny")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Find Something Funny")
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
              createVNode(unref(NResult), {
                status: "404",
                title: "404 Not Found",
                description: "You know life is always ridiculous."
              }, {
                footer: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Find Something Funny")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "403" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-result
						status="403"
						title="403 Forbidden"
						description="Some of the doors are always close to you."
					>
						<template #footer>
							<n-button>Take It Easy</n-button>
						</template>
					</n-result>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-result
						status="403"
						title="403 Forbidden"
						description="Some of the doors are always close to you."
					>
						<template #footer>
							<n-button>Take It Easy</n-button>
						</template>
					</n-result>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NResult), {
              status: "403",
              title: "403 Forbidden",
              description: "Some of the doors are always close to you."
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Take It Easy`);
                      } else {
                        return [
                          createTextVNode("Take It Easy")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Take It Easy")
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
              createVNode(unref(NResult), {
                status: "403",
                title: "403 Forbidden",
                description: "Some of the doors are always close to you."
              }, {
                footer: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Take It Easy")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "500" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-result
						status="500"
						title="500 Server Error"
						description="Server error may prove that you need hiring more developers."
					>
						<template #footer>
							<n-button>Speard Money Out</n-button>
						</template>
					</n-result>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-result
						status="500"
						title="500 Server Error"
						description="Server error may prove that you need hiring more developers."
					>
						<template #footer>
							<n-button>Speard Money Out</n-button>
						</template>
					</n-result>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NResult), {
              status: "500",
              title: "500 Server Error",
              description: "Server error may prove that you need hiring more developers."
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Speard Money Out`);
                      } else {
                        return [
                          createTextVNode("Speard Money Out")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Speard Money Out")
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
              createVNode(unref(NResult), {
                status: "500",
                title: "500 Server Error",
                description: "Server error may prove that you need hiring more developers."
              }, {
                footer: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Speard Money Out")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "418" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-result
						status="418"
						title="418 I'm a Teapot"
						description="In Chinese, teapot is a kind of 'Beiju', which means 'tragedy'."
					>
						<template #footer>
							<n-button>It Is Easy to Take the Truth</n-button>
						</template>
					</n-result>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-result
						status="418"
						title="418 I'm a Teapot"
						description="In Chinese, teapot is a kind of 'Beiju', which means 'tragedy'."
					>
						<template #footer>
							<n-button>It Is Easy to Take the Truth</n-button>
						</template>
					</n-result>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NResult), {
              status: "418",
              title: "418 I'm a Teapot",
              description: "In Chinese, teapot is a kind of 'Beiju', which means 'tragedy'."
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`It Is Easy to Take the Truth`);
                      } else {
                        return [
                          createTextVNode("It Is Easy to Take the Truth")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("It Is Easy to Take the Truth")
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
              createVNode(unref(NResult), {
                status: "418",
                title: "418 I'm a Teapot",
                description: "In Chinese, teapot is a kind of 'Beiju', which means 'tragedy'."
              }, {
                footer: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("It Is Easy to Take the Truth")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Info" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-result
						status="info"
						title="Information"
						description="In this era, info is about money and money is about info."
					>
						<template #footer>
							<n-button>I Want Information</n-button>
						</template>
					</n-result>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-result
						status="info"
						title="Information"
						description="In this era, info is about money and money is about info."
					>
						<template #footer>
							<n-button>I Want Information</n-button>
						</template>
					</n-result>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NResult), {
              status: "info",
              title: "Information",
              description: "In this era, info is about money and money is about info."
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`I Want Information`);
                      } else {
                        return [
                          createTextVNode("I Want Information")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("I Want Information")
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
              createVNode(unref(NResult), {
                status: "info",
                title: "Information",
                description: "In this era, info is about money and money is about info."
              }, {
                footer: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("I Want Information")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Success" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-result status="success" title="Success" description="child of failure">
						<template #footer>
							<n-button>I like it</n-button>
						</template>
					</n-result>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-result status="success" title="Success" description="child of failure">
						<template #footer>
							<n-button>I like it</n-button>
						</template>
					</n-result>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NResult), {
              status: "success",
              title: "Success",
              description: "child of failure"
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`I like it`);
                      } else {
                        return [
                          createTextVNode("I like it")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("I like it")
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
              createVNode(unref(NResult), {
                status: "success",
                title: "Success",
                description: "child of failure"
              }, {
                footer: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("I like it")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Warning" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-result status="warning" title="Warning" description="People seldom see it until it comes true.">
						<template #footer>
							<n-button>Hmm, Truly Sad, Isn't It?</n-button>
						</template>
					</n-result>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-result status="warning" title="Warning" description="People seldom see it until it comes true.">
						<template #footer>
							<n-button>Hmm, Truly Sad, Isn't It?</n-button>
						</template>
					</n-result>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NResult), {
              status: "warning",
              title: "Warning",
              description: "People seldom see it until it comes true."
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Hmm, Truly Sad, Isn&#39;t It?`);
                      } else {
                        return [
                          createTextVNode("Hmm, Truly Sad, Isn't It?")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Hmm, Truly Sad, Isn't It?")
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
              createVNode(unref(NResult), {
                status: "warning",
                title: "Warning",
                description: "People seldom see it until it comes true."
              }, {
                footer: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Hmm, Truly Sad, Isn't It?")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Error" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-result status="error" title="Error" description="It's red">
						<template #footer>
							<n-button>I Don't Like It</n-button>
						</template>
					</n-result>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-result status="error" title="Error" description="It's red">
						<template #footer>
							<n-button>I Don't Like It</n-button>
						</template>
					</n-result>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NResult), {
              status: "error",
              title: "Error",
              description: "It's red"
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`I Don&#39;t Like It`);
                      } else {
                        return [
                          createTextVNode("I Don't Like It")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("I Don't Like It")
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
              createVNode(unref(NResult), {
                status: "error",
                title: "Error",
                description: "It's red"
              }, {
                footer: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("I Don't Like It")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Result-CW4dqcXu.mjs.map
