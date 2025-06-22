import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { aB as useMessage, _ as _sfc_main$o, B as Button, bx as dialogApiInjectionKey, t as throwError } from './server.mjs';
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

function useDialog() {
  const dialog = inject(dialogApiInjectionKey, null);
  if (dialog === null) {
    throwError("use-dialog", "No outer <n-dialog-provider /> founded.");
  }
  return dialog;
}
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    const dialog = useDialog();
    function handleConfirm() {
      dialog.warning({
        title: "Confirm",
        content: "Are you sure?",
        positiveText: "Sure",
        negativeText: "Not Sure",
        onPositiveClick: () => {
          message.success("Sure");
        },
        onNegativeClick: () => {
          message.error("Not Sure");
        }
      });
    }
    function handleSuccess() {
      dialog.success({
        title: "Success",
        content: "Cool",
        positiveText: "Wow!",
        onPositiveClick: () => {
          message.success("Great!");
        }
      });
    }
    function handleError() {
      dialog.error({
        title: "Error",
        content: "A mistake.",
        positiveText: "Ahhh!",
        onPositiveClick: () => {
          message.success("I knew it...");
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Dialog</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/dialog" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
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
					<n-space>
						<n-button @click="handleConfirm">Confirm</n-button>
						<n-button @click="handleSuccess">Success</n-button>
						<n-button @click="handleError">Error</n-button>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const message = useMessage()
						const dialog = useDialog()

						function handleConfirm() {
							dialog.warning({
								title: "Confirm",
								content: "Are you sure?",
								positiveText: "Sure",
								negativeText: "Not Sure",
								onPositiveClick: () => {
									message.success("Sure")
								},
								onNegativeClick: () => {
									message.error("Not Sure")
								}
							})
						}
						function handleSuccess() {
							dialog.success({
								title: "Success",
								content: "Cool",
								positiveText: "Wow!",
								onPositiveClick: () => {
									message.success("Great!")
								}
							})
						}
						function handleError() {
							dialog.error({
								title: "Error",
								content: "A mistake.",
								positiveText: "Ahhh!",
								onPositiveClick: () => {
									message.success("I knew it...")
								}
							})
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-button @click="handleConfirm">Confirm</n-button>
						<n-button @click="handleSuccess">Success</n-button>
						<n-button @click="handleError">Error</n-button>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const message = useMessage()
						const dialog = useDialog()

						function handleConfirm() {
							dialog.warning({
								title: "Confirm",
								content: "Are you sure?",
								positiveText: "Sure",
								negativeText: "Not Sure",
								onPositiveClick: () => {
									message.success("Sure")
								},
								onNegativeClick: () => {
									message.error("Not Sure")
								}
							})
						}
						function handleSuccess() {
							dialog.success({
								title: "Success",
								content: "Cool",
								positiveText: "Wow!",
								onPositiveClick: () => {
									message.success("Great!")
								}
							})
						}
						function handleError() {
							dialog.error({
								title: "Error",
								content: "A mistake.",
								positiveText: "Ahhh!",
								onPositiveClick: () => {
									message.success("I knew it...")
								}
							})
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
                  _push3(ssrRenderComponent(unref(Button), { onClick: handleConfirm }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Confirm`);
                      } else {
                        return [
                          createTextVNode("Confirm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { onClick: handleSuccess }, {
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
                  _push3(ssrRenderComponent(unref(Button), { onClick: handleError }, {
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
                } else {
                  return [
                    createVNode(unref(Button), { onClick: handleConfirm }, {
                      default: withCtx(() => [
                        createTextVNode("Confirm")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { onClick: handleSuccess }, {
                      default: withCtx(() => [
                        createTextVNode("Success")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { onClick: handleError }, {
                      default: withCtx(() => [
                        createTextVNode("Error")
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
                  createVNode(unref(Button), { onClick: handleConfirm }, {
                    default: withCtx(() => [
                      createTextVNode("Confirm")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { onClick: handleSuccess }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { onClick: handleError }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Dialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Dialog-DGY57El-.mjs.map
