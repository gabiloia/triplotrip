import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { aV as useMessage, _ as _sfc_main$o, aE as NTag } from './server.mjs';
import { N as NSpace } from './Space-CcGy24_j.mjs';
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
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const CheckmarkCircle = "ion:checkmark-circle";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    function handleClose() {
      message.info("tag close");
    }
    function handleClick() {
      message.info("tag click");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Tag</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/tag" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Type" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-tag>Real Love</n-tag>
						<n-tag type="success">Yes It Is</n-tag>
						<n-tag type="warning">I'm Down</n-tag>
						<n-tag type="error">Yesterday</n-tag>
						<n-tag type="info">I'm Looking Through You</n-tag>
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-tag>Real Love</n-tag>
						<n-tag type="success">Yes It Is</n-tag>
						<n-tag type="warning">I'm Down</n-tag>
						<n-tag type="error">Yesterday</n-tag>
						<n-tag type="info">I'm Looking Through You</n-tag>
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
                  _push3(ssrRenderComponent(unref(NTag), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Real Love`);
                      } else {
                        return [
                          createTextVNode("Real Love")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), { type: "success" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Yes It Is`);
                      } else {
                        return [
                          createTextVNode("Yes It Is")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), { type: "warning" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`I&#39;m Down`);
                      } else {
                        return [
                          createTextVNode("I'm Down")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), { type: "error" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Yesterday`);
                      } else {
                        return [
                          createTextVNode("Yesterday")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), { type: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`I&#39;m Looking Through You`);
                      } else {
                        return [
                          createTextVNode("I'm Looking Through You")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTag), null, {
                      default: withCtx(() => [
                        createTextVNode("Real Love")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), { type: "success" }, {
                      default: withCtx(() => [
                        createTextVNode("Yes It Is")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("I'm Down")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("Yesterday")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("I'm Looking Through You")
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
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NTag), null, {
                    default: withCtx(() => [
                      createTextVNode("Real Love")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), { type: "success" }, {
                    default: withCtx(() => [
                      createTextVNode("Yes It Is")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), { type: "warning" }, {
                    default: withCtx(() => [
                      createTextVNode("I'm Down")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), { type: "error" }, {
                    default: withCtx(() => [
                      createTextVNode("Yesterday")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), { type: "info" }, {
                    default: withCtx(() => [
                      createTextVNode("I'm Looking Through You")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Closable" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-tag closable @close="handleClose">Real Love</n-tag>
						<n-tag type="success" closable @close="handleClose">Yes It Is</n-tag>
						<n-tag type="warning" closable @close="handleClose">I'm Down</n-tag>
						<n-tag type="error" closable @close="handleClose">Yesterday</n-tag>
						<n-tag
							type="info"
							closable
							:trigger-click-on-close="false"
							@click="handleClick"
							@close="handleClose"
						>
							I'm Looking Through You
						</n-tag>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const message = useMessage()
						function handleClose() {
							message.info("tag close")
						}
						function handleClick() {
							message.info("tag click")
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-tag closable @close="handleClose">Real Love</n-tag>
						<n-tag type="success" closable @close="handleClose">Yes It Is</n-tag>
						<n-tag type="warning" closable @close="handleClose">I'm Down</n-tag>
						<n-tag type="error" closable @close="handleClose">Yesterday</n-tag>
						<n-tag
							type="info"
							closable
							:trigger-click-on-close="false"
							@click="handleClick"
							@close="handleClose"
						>
							I'm Looking Through You
						</n-tag>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const message = useMessage()
						function handleClose() {
							message.info("tag close")
						}
						function handleClick() {
							message.info("tag click")
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTag), {
                    closable: "",
                    onClose: handleClose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Real Love`);
                      } else {
                        return [
                          createTextVNode("Real Love")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), {
                    type: "success",
                    closable: "",
                    onClose: handleClose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Yes It Is`);
                      } else {
                        return [
                          createTextVNode("Yes It Is")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), {
                    type: "warning",
                    closable: "",
                    onClose: handleClose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`I&#39;m Down`);
                      } else {
                        return [
                          createTextVNode("I'm Down")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), {
                    type: "error",
                    closable: "",
                    onClose: handleClose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Yesterday`);
                      } else {
                        return [
                          createTextVNode("Yesterday")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), {
                    type: "info",
                    closable: "",
                    "trigger-click-on-close": false,
                    onClick: handleClick,
                    onClose: handleClose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` I&#39;m Looking Through You `);
                      } else {
                        return [
                          createTextVNode(" I'm Looking Through You ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTag), {
                      closable: "",
                      onClose: handleClose
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Real Love")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), {
                      type: "success",
                      closable: "",
                      onClose: handleClose
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Yes It Is")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), {
                      type: "warning",
                      closable: "",
                      onClose: handleClose
                    }, {
                      default: withCtx(() => [
                        createTextVNode("I'm Down")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), {
                      type: "error",
                      closable: "",
                      onClose: handleClose
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Yesterday")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), {
                      type: "info",
                      closable: "",
                      "trigger-click-on-close": false,
                      onClick: handleClick,
                      onClose: handleClose
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" I'm Looking Through You ")
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
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NTag), {
                    closable: "",
                    onClose: handleClose
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Real Love")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), {
                    type: "success",
                    closable: "",
                    onClose: handleClose
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Yes It Is")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), {
                    type: "warning",
                    closable: "",
                    onClose: handleClose
                  }, {
                    default: withCtx(() => [
                      createTextVNode("I'm Down")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), {
                    type: "error",
                    closable: "",
                    onClose: handleClose
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Yesterday")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), {
                    type: "info",
                    closable: "",
                    "trigger-click-on-close": false,
                    onClick: handleClick,
                    onClose: handleClose
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" I'm Looking Through You ")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Icon" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-tag type="success">
							Checked
							<template #icon>
								<n-icon :component="CheckmarkCircle" />
							</template>
						</n-tag>
						<n-tag round :bordered="false" type="success">
							Checked
							<template #icon>
								<n-icon :component="CheckmarkCircle" />
							</template>
						</n-tag>
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { CheckmarkCircle } from '@vicons/ionicons5'
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-tag type="success">
							Checked
							<template #icon>
								<n-icon :component="CheckmarkCircle" />
							</template>
						</n-tag>
						<n-tag round :bordered="false" type="success">
							Checked
							<template #icon>
								<n-icon :component="CheckmarkCircle" />
							</template>
						</n-tag>
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { CheckmarkCircle } from '@vicons/ionicons5'
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTag), { type: "success" }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CheckmarkCircle }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CheckmarkCircle })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Checked `);
                      } else {
                        return [
                          createTextVNode(" Checked ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTag), {
                    round: "",
                    bordered: false,
                    type: "success"
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CheckmarkCircle }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CheckmarkCircle })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Checked `);
                      } else {
                        return [
                          createTextVNode(" Checked ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTag), { type: "success" }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CheckmarkCircle })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Checked ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTag), {
                      round: "",
                      bordered: false,
                      type: "success"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CheckmarkCircle })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Checked ")
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
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NTag), { type: "success" }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CheckmarkCircle })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Checked ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTag), {
                    round: "",
                    bordered: false,
                    type: "success"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CheckmarkCircle })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Checked ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Tag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tag-DyRQ4fnv.mjs.map
