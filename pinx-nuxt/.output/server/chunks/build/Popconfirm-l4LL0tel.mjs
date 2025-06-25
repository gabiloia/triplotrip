import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { aV as useMessage, _ as _sfc_main$o, B as Button } from './server.mjs';
import { N as NPopconfirm } from './Popconfirm-D9UCQSOm.mjs';
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
  __name: "Popconfirm",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    function handlePositiveClick() {
      message.info("Yes");
    }
    function handleNegativeClick() {
      message.info("No");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Popconfirm</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/popconfirm" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-lg"
      }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
						<template #trigger>
							<n-button>Quote</n-button>
						</template>
						Things pass us by. Nobody can catch them. That's the way we live our lives.
					</n-popconfirm>
					`))} ${ssrInterpolate(js(`
						const message = useMessage()
						function handlePositiveClick() {
							message.info("Yes")
						}
						function handleNegativeClick() {
							message.info("No")
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
						<template #trigger>
							<n-button>Quote</n-button>
						</template>
						Things pass us by. Nobody can catch them. That's the way we live our lives.
					</n-popconfirm>
					`)) + " " + toDisplayString(js(`
						const message = useMessage()
						function handlePositiveClick() {
							message.info("Yes")
						}
						function handleNegativeClick() {
							message.info("No")
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NPopconfirm), {
              onPositiveClick: handlePositiveClick,
              onNegativeClick: handleNegativeClick
            }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Quote`);
                      } else {
                        return [
                          createTextVNode("Quote")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Quote")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Things pass us by. Nobody can catch them. That&#39;s the way we live our lives. `);
                } else {
                  return [
                    createTextVNode(" Things pass us by. Nobody can catch them. That's the way we live our lives. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NPopconfirm), {
                onPositiveClick: handlePositiveClick,
                onNegativeClick: handleNegativeClick
              }, {
                trigger: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Quote")
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createTextVNode(" Things pass us by. Nobody can catch them. That's the way we live our lives. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Popconfirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Popconfirm-l4LL0tel.mjs.map
