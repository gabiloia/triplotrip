import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s } from './server.mjs';
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
const Airplane = "ion:airplane";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Alert</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/alert" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical :size="12">
						<n-alert title="Default Text" type="default">
							<template #icon>
								<n-icon>
									<Airplane />
								</n-icon>
							</template>
							Gee it's good to be back home
						</n-alert>
						<n-alert title="Info Text" type="info">Gee it's good to be back home</n-alert>
						<n-alert title="Success Text" type="success" closable>
							Leave it till tomorrow to unpack my case
						</n-alert>
						<n-alert title="Warning Text" type="warning" closable>Honey disconnect the phone</n-alert>
						<n-alert title="Error Text" type="error" closable>I'm back in the U.S.S.R.</n-alert>
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical :size="12">
						<n-alert title="Default Text" type="default">
							<template #icon>
								<n-icon>
									<Airplane />
								</n-icon>
							</template>
							Gee it's good to be back home
						</n-alert>
						<n-alert title="Info Text" type="info">Gee it's good to be back home</n-alert>
						<n-alert title="Success Text" type="success" closable>
							Leave it till tomorrow to unpack my case
						</n-alert>
						<n-alert title="Warning Text" type="warning" closable>Honey disconnect the phone</n-alert>
						<n-alert title="Error Text" type="error" closable>I'm back in the U.S.S.R.</n-alert>
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), {
              vertical: "",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NAlert), {
                    title: "Default Text",
                    type: "default"
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$s, { name: Airplane }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$s, { name: Airplane })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Gee it&#39;s good to be back home `);
                      } else {
                        return [
                          createTextVNode(" Gee it's good to be back home ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NAlert), {
                    title: "Info Text",
                    type: "info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Gee it&#39;s good to be back home`);
                      } else {
                        return [
                          createTextVNode("Gee it's good to be back home")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NAlert), {
                    title: "Success Text",
                    type: "success",
                    closable: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Leave it till tomorrow to unpack my case `);
                      } else {
                        return [
                          createTextVNode(" Leave it till tomorrow to unpack my case ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NAlert), {
                    title: "Warning Text",
                    type: "warning",
                    closable: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Honey disconnect the phone`);
                      } else {
                        return [
                          createTextVNode("Honey disconnect the phone")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NAlert), {
                    title: "Error Text",
                    type: "error",
                    closable: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`I&#39;m back in the U.S.S.R.`);
                      } else {
                        return [
                          createTextVNode("I'm back in the U.S.S.R.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NAlert), {
                      title: "Default Text",
                      type: "default"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$s, { name: Airplane })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Gee it's good to be back home ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NAlert), {
                      title: "Info Text",
                      type: "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Gee it's good to be back home")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NAlert), {
                      title: "Success Text",
                      type: "success",
                      closable: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Leave it till tomorrow to unpack my case ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NAlert), {
                      title: "Warning Text",
                      type: "warning",
                      closable: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Honey disconnect the phone")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NAlert), {
                      title: "Error Text",
                      type: "error",
                      closable: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("I'm back in the U.S.S.R.")
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
              createVNode(unref(NSpace), {
                vertical: "",
                size: 12
              }, {
                default: withCtx(() => [
                  createVNode(unref(NAlert), {
                    title: "Default Text",
                    type: "default"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$s, { name: Airplane })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Gee it's good to be back home ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NAlert), {
                    title: "Info Text",
                    type: "info"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Gee it's good to be back home")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NAlert), {
                    title: "Success Text",
                    type: "success",
                    closable: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Leave it till tomorrow to unpack my case ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NAlert), {
                    title: "Warning Text",
                    type: "warning",
                    closable: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Honey disconnect the phone")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NAlert), {
                    title: "Error Text",
                    type: "error",
                    closable: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("I'm back in the U.S.S.R.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Alert-IgnYPdTB.mjs.map
