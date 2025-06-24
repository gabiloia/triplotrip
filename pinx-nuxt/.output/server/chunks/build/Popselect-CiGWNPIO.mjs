import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button } from './server.mjs';
import { N as NPopselect } from './Popselect-C4dDToix.mjs';
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
import './utils-DMBa_qdR.mjs';
import './SelectMenu-BGzY6WVh.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './use-resize-COzDFWWZ.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Popselect",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("Drive My Car");
    const value1 = ref(null);
    const options = [
      {
        label: "Drive My Car",
        value: "Drive My Car"
      },
      {
        label: "Norwegian Wood",
        value: "Norwegian Wood"
      },
      {
        label: "You Won't See",
        value: "You Won't See",
        disabled: true
      },
      {
        label: "Nowhere Man",
        value: "Nowhere Man"
      },
      {
        label: "Think For Yourself",
        value: "Think For Yourself"
      },
      {
        label: "The Word",
        value: "The Word"
      },
      {
        label: "Michelle",
        value: "Michelle",
        disabled: true
      },
      {
        label: "What goes on",
        value: "What goes on"
      },
      {
        label: "Girl",
        value: "Girl"
      },
      {
        label: "I'm looking through you",
        value: "I'm looking through you"
      },
      {
        label: "In My Life",
        value: "In My Life"
      },
      {
        label: "Wait",
        value: "Wait"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Popselect</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/popselect" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-popselect v-model:value="value" :options>
						<n-button>{{ value || "Popselect" }}</n-button>
					</n-popselect>
					`))} ${ssrInterpolate(js(`
						const value = ref("Drive My Car")
						const options = [
							{
								label: "Drive My Car",
								value: "Drive My Car"
							},
							{
								label: "Norwegian Wood",
								value: "Norwegian Wood"
							},
							{
								label: "You Won't See",
								value: "You Won't See",
								disabled: true
							},
							{
								label: "Nowhere Man",
								value: "Nowhere Man"
							},
							{
								label: "Think For Yourself",
								value: "Think For Yourself"
							},
							{
								label: "The Word",
								value: "The Word"
							},
							{
								label: "Michelle",
								value: "Michelle",
								disabled: true
							},
							{
								label: "What goes on",
								value: "What goes on"
							},
							{
								label: "Girl",
								value: "Girl"
							},
							{
								label: "I'm looking through you",
								value: "I'm looking through you"
							},
							{
								label: "In My Life",
								value: "In My Life"
							},
							{
								label: "Wait",
								value: "Wait"
							}
						]
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-popselect v-model:value="value" :options>
						<n-button>{{ value || "Popselect" }}</n-button>
					</n-popselect>
					`)) + " " + toDisplayString(js(`
						const value = ref("Drive My Car")
						const options = [
							{
								label: "Drive My Car",
								value: "Drive My Car"
							},
							{
								label: "Norwegian Wood",
								value: "Norwegian Wood"
							},
							{
								label: "You Won't See",
								value: "You Won't See",
								disabled: true
							},
							{
								label: "Nowhere Man",
								value: "Nowhere Man"
							},
							{
								label: "Think For Yourself",
								value: "Think For Yourself"
							},
							{
								label: "The Word",
								value: "The Word"
							},
							{
								label: "Michelle",
								value: "Michelle",
								disabled: true
							},
							{
								label: "What goes on",
								value: "What goes on"
							},
							{
								label: "Girl",
								value: "Girl"
							},
							{
								label: "I'm looking through you",
								value: "I'm looking through you"
							},
							{
								label: "In My Life",
								value: "In My Life"
							},
							{
								label: "Wait",
								value: "Wait"
							}
						]
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NPopselect), {
              value: value.value,
              "onUpdate:value": ($event) => value.value = $event,
              options
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(value.value || "Popselect")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(value.value || "Popselect"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(value.value || "Popselect"), 1)
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
              createVNode(unref(NPopselect), {
                value: value.value,
                "onUpdate:value": ($event) => value.value = $event,
                options
              }, {
                default: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value.value || "Popselect"), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Multiple" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-popselect v-model:value="value1" :options multiple scrollable>
						<n-button>{{ Array.isArray(value1) && value1.length ? value1 : "Nothing" }}</n-button>
					</n-popselect>
					`))} ${ssrInterpolate(js(`
							const value1 = ref<string[] | null>(null)
							const options = [
								{
									label: "Drive My Car",
									value: "Drive My Car"
								},
								{
									label: "Norwegian Wood",
									value: "Norwegian Wood"
								},
								{
									label: "You Won't See",
									value: "You Won't See",
									disabled: true
								},
								{
									label: "Nowhere Man",
									value: "Nowhere Man"
								},
								{
									label: "Think For Yourself",
									value: "Think For Yourself"
								},
								{
									label: "The Word",
									value: "The Word"
								},
								{
									label: "Michelle",
									value: "Michelle",
									disabled: true
								},
								{
									label: "What goes on",
									value: "What goes on"
								},
								{
									label: "Girl",
									value: "Girl"
								},
								{
									label: "I'm looking through you",
									value: "I'm looking through you"
								},
								{
									label: "In My Life",
									value: "In My Life"
								},
								{
									label: "Wait",
									value: "Wait"
								}
							]
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-popselect v-model:value="value1" :options multiple scrollable>
						<n-button>{{ Array.isArray(value1) && value1.length ? value1 : "Nothing" }}</n-button>
					</n-popselect>
					`)) + " " + toDisplayString(js(`
							const value1 = ref<string[] | null>(null)
							const options = [
								{
									label: "Drive My Car",
									value: "Drive My Car"
								},
								{
									label: "Norwegian Wood",
									value: "Norwegian Wood"
								},
								{
									label: "You Won't See",
									value: "You Won't See",
									disabled: true
								},
								{
									label: "Nowhere Man",
									value: "Nowhere Man"
								},
								{
									label: "Think For Yourself",
									value: "Think For Yourself"
								},
								{
									label: "The Word",
									value: "The Word"
								},
								{
									label: "Michelle",
									value: "Michelle",
									disabled: true
								},
								{
									label: "What goes on",
									value: "What goes on"
								},
								{
									label: "Girl",
									value: "Girl"
								},
								{
									label: "I'm looking through you",
									value: "I'm looking through you"
								},
								{
									label: "In My Life",
									value: "In My Life"
								},
								{
									label: "Wait",
									value: "Wait"
								}
							]
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NPopselect), {
              value: value1.value,
              "onUpdate:value": ($event) => value1.value = $event,
              options,
              multiple: "",
              scrollable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(Array.isArray(value1.value) && value1.value.length ? value1.value : "Nothing")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(Array.isArray(value1.value) && value1.value.length ? value1.value : "Nothing"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(Array.isArray(value1.value) && value1.value.length ? value1.value : "Nothing"), 1)
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
              createVNode(unref(NPopselect), {
                value: value1.value,
                "onUpdate:value": ($event) => value1.value = $event,
                options,
                multiple: "",
                scrollable: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(Array.isArray(value1.value) && value1.value.length ? value1.value : "Nothing"), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value", "onUpdate:value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Popselect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Popselect-CiGWNPIO.mjs.map
