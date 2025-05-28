import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as _sfc_main$s } from './server.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import { N as NRadio } from './Radio-h1-xnT2t.mjs';
import { N as NRadioGroup } from './RadioGroup-DaOAh_3e.mjs';
import { N as NRadioButton } from './RadioButton-Q5FfHslP.mjs';
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
  __name: "Radio",
  __ssrInlineRender: true,
  setup(__props) {
    const checkedValue = ref(null);
    function handleChange(e) {
      checkedValue.value = e.target.value;
    }
    const value = ref(null);
    const songs = [
      {
        value: "Rock'n'Roll Star",
        label: "Rock'n'Roll Star"
      },
      {
        value: "Shakermaker",
        label: "Shakermaker"
      },
      {
        value: "Live Forever",
        label: "Live Forever"
      },
      {
        value: "Up in the Sky",
        label: "Up in the Sky"
      },
      {
        value: "...",
        label: "..."
      }
    ].map((s) => {
      s.value = s.value.toLowerCase();
      return s;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Radio</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/radio" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-radio
							:checked="checkedValue === 'Definitely Maybe'"
							value="Definitely Maybe"
							name="basic-demo"
							@change="handleChange"
						>
							Definitely Maybe
						</n-radio>
						<n-radio
							:checked="checkedValue === 'Be Here Now'"
							value="Be Here Now"
							name="basic-demo"
							@change="handleChange"
						>
							Be Here Now
						</n-radio>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const checkedValue = ref<string | null>(null)

						function handleChange(e: Event) {
							checkedValue.value = (e.target as HTMLInputElement).value
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-radio
							:checked="checkedValue === 'Definitely Maybe'"
							value="Definitely Maybe"
							name="basic-demo"
							@change="handleChange"
						>
							Definitely Maybe
						</n-radio>
						<n-radio
							:checked="checkedValue === 'Be Here Now'"
							value="Be Here Now"
							name="basic-demo"
							@change="handleChange"
						>
							Be Here Now
						</n-radio>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const checkedValue = ref<string | null>(null)

						function handleChange(e: Event) {
							checkedValue.value = (e.target as HTMLInputElement).value
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
                  _push3(ssrRenderComponent(unref(NRadio), {
                    checked: checkedValue.value === "Definitely Maybe",
                    value: "Definitely Maybe",
                    name: "basic-demo",
                    onChange: handleChange
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Definitely Maybe `);
                      } else {
                        return [
                          createTextVNode(" Definitely Maybe ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NRadio), {
                    checked: checkedValue.value === "Be Here Now",
                    value: "Be Here Now",
                    name: "basic-demo",
                    onChange: handleChange
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Be Here Now `);
                      } else {
                        return [
                          createTextVNode(" Be Here Now ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NRadio), {
                      checked: checkedValue.value === "Definitely Maybe",
                      value: "Definitely Maybe",
                      name: "basic-demo",
                      onChange: handleChange
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Definitely Maybe ")
                      ]),
                      _: 1
                    }, 8, ["checked"]),
                    createVNode(unref(NRadio), {
                      checked: checkedValue.value === "Be Here Now",
                      value: "Be Here Now",
                      name: "basic-demo",
                      onChange: handleChange
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Be Here Now ")
                      ]),
                      _: 1
                    }, 8, ["checked"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NRadio), {
                    checked: checkedValue.value === "Definitely Maybe",
                    value: "Definitely Maybe",
                    name: "basic-demo",
                    onChange: handleChange
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Definitely Maybe ")
                    ]),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(unref(NRadio), {
                    checked: checkedValue.value === "Be Here Now",
                    value: "Be Here Now",
                    name: "basic-demo",
                    onChange: handleChange
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Be Here Now ")
                    ]),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Button group" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sometimes a radio button group can look more elegant.`);
          } else {
            return [
              createTextVNode("Sometimes a radio button group can look more elegant.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-radio-group v-model:value="value" name="radiobuttongroup">
							<n-radio-button
								v-for="song in songs"
								:key="song.value"
								:value="song.value"
								:label="song.label"
							/>
						</n-radio-group>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const value = ref(null)

						const songs = [
							{
								value: "Rock'n'Roll Star",
								label: "Rock'n'Roll Star"
							},
							{
								value: "Shakermaker",
								label: "Shakermaker"
							},
							{
								value: "Live Forever",
								label: "Live Forever"
							},
							{
								value: "Up in the Sky",
								label: "Up in the Sky"
							},
							{
								value: "...",
								label: "..."
							}
						].map(s => {
							s.value = s.value.toLowerCase()
							return s
						})
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-radio-group v-model:value="value" name="radiobuttongroup">
							<n-radio-button
								v-for="song in songs"
								:key="song.value"
								:value="song.value"
								:label="song.label"
							/>
						</n-radio-group>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const value = ref(null)

						const songs = [
							{
								value: "Rock'n'Roll Star",
								label: "Rock'n'Roll Star"
							},
							{
								value: "Shakermaker",
								label: "Shakermaker"
							},
							{
								value: "Live Forever",
								label: "Live Forever"
							},
							{
								value: "Up in the Sky",
								label: "Up in the Sky"
							},
							{
								value: "...",
								label: "..."
							}
						].map(s => {
							s.value = s.value.toLowerCase()
							return s
						})
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NRadioGroup), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    name: "radiobuttongroup"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(songs), (song) => {
                          _push4(ssrRenderComponent(unref(NRadioButton), {
                            key: song.value,
                            value: song.value,
                            label: song.label
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(songs), (song) => {
                            return openBlock(), createBlock(unref(NRadioButton), {
                              key: song.value,
                              value: song.value,
                              label: song.label
                            }, null, 8, ["value", "label"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NRadioGroup), {
                      value: value.value,
                      "onUpdate:value": ($event) => value.value = $event,
                      name: "radiobuttongroup"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(songs), (song) => {
                          return openBlock(), createBlock(unref(NRadioButton), {
                            key: song.value,
                            value: song.value,
                            label: song.label
                          }, null, 8, ["value", "label"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NRadioGroup), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    name: "radiobuttongroup"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(songs), (song) => {
                        return openBlock(), createBlock(unref(NRadioButton), {
                          key: song.value,
                          value: song.value,
                          label: song.label
                        }, null, 8, ["value", "label"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Radio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Radio-BtorU-lF.mjs.map
