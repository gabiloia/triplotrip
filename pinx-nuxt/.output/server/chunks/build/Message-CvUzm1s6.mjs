import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { aB as useMessage, _ as _sfc_main$o, B as Button } from './server.mjs';
import { N as NSpace } from './Space-BkDN_nha.mjs';
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
  __name: "Message",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    function info() {
      message.info("I don't know why nobody told you how to unfold your love", {
        keepAliveOnHover: true,
        closable: true
      });
    }
    function error() {
      message.error("Once upon a time you dressed so fine", { closable: true });
    }
    function warning() {
      message.warning("How many roads must a man walk down", { closable: true });
    }
    function success() {
      message.success("'Cause you walked hand in hand With another man in my place");
    }
    function loading() {
      message.loading("If I were you, I will realize that I love you more than any other guy");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Message</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/message" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-2xl"
      }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-button @click="info">Info(Hover will keep alive)</n-button>
						<n-button @click="error">Error</n-button>
						<n-button @click="warning">Warning</n-button>
						<n-button @click="success">Success</n-button>
						<n-button @click="loading">Loading</n-button>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const message = useMessage()

						function info() {
							message.info("I don't know why nobody told you how to unfold your love", {
								keepAliveOnHover: true,
								closable: true
							})
						}
						function error() {
							message.error("Once upon a time you dressed so fine", { closable: true })
						}
						function warning() {
							message.warning("How many roads must a man walk down", { closable: true })
						}
						function success() {
							message.success("'Cause you walked hand in hand With another man in my place")
						}
						function loading() {
							message.loading("If I were you, I will realize that I love you more than any other guy")
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-button @click="info">Info(Hover will keep alive)</n-button>
						<n-button @click="error">Error</n-button>
						<n-button @click="warning">Warning</n-button>
						<n-button @click="success">Success</n-button>
						<n-button @click="loading">Loading</n-button>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const message = useMessage()

						function info() {
							message.info("I don't know why nobody told you how to unfold your love", {
								keepAliveOnHover: true,
								closable: true
							})
						}
						function error() {
							message.error("Once upon a time you dressed so fine", { closable: true })
						}
						function warning() {
							message.warning("How many roads must a man walk down", { closable: true })
						}
						function success() {
							message.success("'Cause you walked hand in hand With another man in my place")
						}
						function loading() {
							message.loading("If I were you, I will realize that I love you more than any other guy")
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
                  _push3(ssrRenderComponent(unref(Button), { onClick: info }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Info(Hover will keep alive)`);
                      } else {
                        return [
                          createTextVNode("Info(Hover will keep alive)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { onClick: error }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Error`);
                      } else {
                        return [
                          createTextVNode("Error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { onClick: warning }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Warning`);
                      } else {
                        return [
                          createTextVNode("Warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { onClick: success }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Success`);
                      } else {
                        return [
                          createTextVNode("Success")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { onClick: loading }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Loading`);
                      } else {
                        return [
                          createTextVNode("Loading")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), { onClick: info }, {
                      default: withCtx(() => [
                        createTextVNode("Info(Hover will keep alive)")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { onClick: error }, {
                      default: withCtx(() => [
                        createTextVNode("Error")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { onClick: warning }, {
                      default: withCtx(() => [
                        createTextVNode("Warning")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { onClick: success }, {
                      default: withCtx(() => [
                        createTextVNode("Success")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { onClick: loading }, {
                      default: withCtx(() => [
                        createTextVNode("Loading")
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
                  createVNode(unref(Button), { onClick: info }, {
                    default: withCtx(() => [
                      createTextVNode("Info(Hover will keep alive)")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { onClick: error }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { onClick: warning }, {
                    default: withCtx(() => [
                      createTextVNode("Warning")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { onClick: success }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { onClick: loading }, {
                    default: withCtx(() => [
                      createTextVNode("Loading")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Message.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Message-CvUzm1s6.mjs.map
