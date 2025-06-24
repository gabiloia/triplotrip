import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button, b as NModal, N as NCard } from './server.mjs';
import './LtrContext-CUHPU62m.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BML65SQa.mjs';
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
  __name: "Modal",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Modal</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/modal" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-lg"
      }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Basic usage of modal. You can put anything in modal, a card for example. `);
          } else {
            return [
              createTextVNode(" Basic usage of modal. You can put anything in modal, a card for example. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-button @click="showModal = true">Start Me up</n-button>
					<n-modal v-model:show="showModal">
						<n-card
							style="width: 600px"
							title="Modal"
							:bordered="false"
							size="huge"
							role="dialog"
							aria-modal="true"
						>
							<template #header-extra>Oops!</template>
							Content
							<template #footer>Footer</template>
						</n-card>
					</n-modal>
					`))} ${ssrInterpolate(js(`
						const showModal = ref(false)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-button @click="showModal = true">Start Me up</n-button>
					<n-modal v-model:show="showModal">
						<n-card
							style="width: 600px"
							title="Modal"
							:bordered="false"
							size="huge"
							role="dialog"
							aria-modal="true"
						>
							<template #header-extra>Oops!</template>
							Content
							<template #footer>Footer</template>
						</n-card>
					</n-modal>
					`)) + " " + toDisplayString(js(`
						const showModal = ref(false)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), {
              onClick: ($event) => showModal.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Start Me up`);
                } else {
                  return [
                    createTextVNode("Start Me up")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NModal), {
              show: showModal.value,
              "onUpdate:show": ($event) => showModal.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCard), {
                    style: { "width": "600px" },
                    title: "Modal",
                    bordered: false,
                    size: "huge",
                    role: "dialog",
                    "aria-modal": "true"
                  }, {
                    "header-extra": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Oops!`);
                      } else {
                        return [
                          createTextVNode("Oops!")
                        ];
                      }
                    }),
                    footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Footer`);
                      } else {
                        return [
                          createTextVNode("Footer")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Content `);
                      } else {
                        return [
                          createTextVNode(" Content ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCard), {
                      style: { "width": "600px" },
                      title: "Modal",
                      bordered: false,
                      size: "huge",
                      role: "dialog",
                      "aria-modal": "true"
                    }, {
                      "header-extra": withCtx(() => [
                        createTextVNode("Oops!")
                      ]),
                      footer: withCtx(() => [
                        createTextVNode("Footer")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Content ")
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
              createVNode(unref(Button), {
                onClick: ($event) => showModal.value = true
              }, {
                default: withCtx(() => [
                  createTextVNode("Start Me up")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(unref(NModal), {
                show: showModal.value,
                "onUpdate:show": ($event) => showModal.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(unref(NCard), {
                    style: { "width": "600px" },
                    title: "Modal",
                    bordered: false,
                    size: "huge",
                    role: "dialog",
                    "aria-modal": "true"
                  }, {
                    "header-extra": withCtx(() => [
                      createTextVNode("Oops!")
                    ]),
                    footer: withCtx(() => [
                      createTextVNode("Footer")
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Content ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["show", "onUpdate:show"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Modal-BrFofRar.mjs.map
