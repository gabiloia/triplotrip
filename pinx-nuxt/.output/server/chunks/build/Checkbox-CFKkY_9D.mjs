import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button } from './server.mjs';
import { N as NCheckbox, a as NCheckboxGroup } from './Checkbox-PH_UPMG8.mjs';
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
  __name: "Checkbox",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(false);
    const disabled = ref(true);
    const cities = ref(null);
    const indeterminate = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Checkbox</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/checkbox" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space item-style="display: flex;" align="center">
						<n-checkbox v-model:checked="value">Checkbox</n-checkbox>
						<n-checkbox v-model:checked="value" />
						<n-checkbox v-model:checked="value" :disabled="disabled">Checkbox</n-checkbox>
						<n-button size="small" @click="disabled = !disabled">Disabled</n-button>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const value = ref(false)
						const disabled = ref(true)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space item-style="display: flex;" align="center">
						<n-checkbox v-model:checked="value">Checkbox</n-checkbox>
						<n-checkbox v-model:checked="value" />
						<n-checkbox v-model:checked="value" :disabled="disabled">Checkbox</n-checkbox>
						<n-button size="small" @click="disabled = !disabled">Disabled</n-button>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const value = ref(false)
						const disabled = ref(true)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), {
              "item-style": "display: flex;",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Checkbox`);
                      } else {
                        return [
                          createTextVNode("Checkbox")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event,
                    disabled: disabled.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Checkbox`);
                      } else {
                        return [
                          createTextVNode("Checkbox")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    onClick: ($event) => disabled.value = !disabled.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Disabled`);
                      } else {
                        return [
                          createTextVNode("Disabled")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCheckbox), {
                      checked: value.value,
                      "onUpdate:checked": ($event) => value.value = $event
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Checkbox")
                      ]),
                      _: 1
                    }, 8, ["checked", "onUpdate:checked"]),
                    createVNode(unref(NCheckbox), {
                      checked: value.value,
                      "onUpdate:checked": ($event) => value.value = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode(unref(NCheckbox), {
                      checked: value.value,
                      "onUpdate:checked": ($event) => value.value = $event,
                      disabled: disabled.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Checkbox")
                      ]),
                      _: 1
                    }, 8, ["checked", "onUpdate:checked", "disabled"]),
                    createVNode(unref(Button), {
                      size: "small",
                      onClick: ($event) => disabled.value = !disabled.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Disabled")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), {
                "item-style": "display: flex;",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Checkbox")
                    ]),
                    _: 1
                  }, 8, ["checked", "onUpdate:checked"]),
                  createVNode(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event,
                    disabled: disabled.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Checkbox")
                    ]),
                    _: 1
                  }, 8, ["checked", "onUpdate:checked", "disabled"]),
                  createVNode(unref(Button), {
                    size: "small",
                    onClick: ($event) => disabled.value = !disabled.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Disabled")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Checkbox group" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-checkbox-group v-model:value="cities">
						<n-space item-style="display: flex;">
							<n-checkbox value="Beijing" label="Beijing" />
							<n-checkbox value="Shanghai" label="Shanghai" />
							<n-checkbox value="Guangzhou" label="Guangzhou" />
							<n-checkbox value="Shenzen" label="Shenzhen" />
						</n-space>
					</n-checkbox-group>
					`))} ${ssrInterpolate(js(`
						const cities = ref(null)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-checkbox-group v-model:value="cities">
						<n-space item-style="display: flex;">
							<n-checkbox value="Beijing" label="Beijing" />
							<n-checkbox value="Shanghai" label="Shanghai" />
							<n-checkbox value="Guangzhou" label="Guangzhou" />
							<n-checkbox value="Shenzen" label="Shenzhen" />
						</n-space>
					</n-checkbox-group>
					`)) + " " + toDisplayString(js(`
						const cities = ref(null)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCheckboxGroup), {
              value: cities.value,
              "onUpdate:value": ($event) => cities.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSpace), { "item-style": "display: flex;" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          value: "Beijing",
                          label: "Beijing"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          value: "Shanghai",
                          label: "Shanghai"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          value: "Guangzhou",
                          label: "Guangzhou"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          value: "Shenzen",
                          label: "Shenzhen"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NCheckbox), {
                            value: "Beijing",
                            label: "Beijing"
                          }),
                          createVNode(unref(NCheckbox), {
                            value: "Shanghai",
                            label: "Shanghai"
                          }),
                          createVNode(unref(NCheckbox), {
                            value: "Guangzhou",
                            label: "Guangzhou"
                          }),
                          createVNode(unref(NCheckbox), {
                            value: "Shenzen",
                            label: "Shenzhen"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSpace), { "item-style": "display: flex;" }, {
                      default: withCtx(() => [
                        createVNode(unref(NCheckbox), {
                          value: "Beijing",
                          label: "Beijing"
                        }),
                        createVNode(unref(NCheckbox), {
                          value: "Shanghai",
                          label: "Shanghai"
                        }),
                        createVNode(unref(NCheckbox), {
                          value: "Guangzhou",
                          label: "Guangzhou"
                        }),
                        createVNode(unref(NCheckbox), {
                          value: "Shenzen",
                          label: "Shenzhen"
                        })
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
              createVNode(unref(NCheckboxGroup), {
                value: cities.value,
                "onUpdate:value": ($event) => cities.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), { "item-style": "display: flex;" }, {
                    default: withCtx(() => [
                      createVNode(unref(NCheckbox), {
                        value: "Beijing",
                        label: "Beijing"
                      }),
                      createVNode(unref(NCheckbox), {
                        value: "Shanghai",
                        label: "Shanghai"
                      }),
                      createVNode(unref(NCheckbox), {
                        value: "Guangzhou",
                        label: "Guangzhou"
                      }),
                      createVNode(unref(NCheckbox), {
                        value: "Shenzen",
                        label: "Shenzhen"
                      })
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Indeterminate" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space item-style="display: flex;" align="center">
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate">checkbox</n-checkbox>
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate" />
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate" disabled />
						<n-button size="small" @click="value = !value">Check</n-button>
						<n-button size="small" @click="indeterminate = !indeterminate">Indeterminate</n-button>
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space item-style="display: flex;" align="center">
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate">checkbox</n-checkbox>
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate" />
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate" disabled />
						<n-button size="small" @click="value = !value">Check</n-button>
						<n-button size="small" @click="indeterminate = !indeterminate">Indeterminate</n-button>
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), {
              "item-style": "display: flex;",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event,
                    indeterminate: indeterminate.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`checkbox`);
                      } else {
                        return [
                          createTextVNode("checkbox")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event,
                    indeterminate: indeterminate.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event,
                    indeterminate: indeterminate.value,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    onClick: ($event) => value.value = !value.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Check`);
                      } else {
                        return [
                          createTextVNode("Check")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "small",
                    onClick: ($event) => indeterminate.value = !indeterminate.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Indeterminate`);
                      } else {
                        return [
                          createTextVNode("Indeterminate")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCheckbox), {
                      checked: value.value,
                      "onUpdate:checked": ($event) => value.value = $event,
                      indeterminate: indeterminate.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("checkbox")
                      ]),
                      _: 1
                    }, 8, ["checked", "onUpdate:checked", "indeterminate"]),
                    createVNode(unref(NCheckbox), {
                      checked: value.value,
                      "onUpdate:checked": ($event) => value.value = $event,
                      indeterminate: indeterminate.value
                    }, null, 8, ["checked", "onUpdate:checked", "indeterminate"]),
                    createVNode(unref(NCheckbox), {
                      checked: value.value,
                      "onUpdate:checked": ($event) => value.value = $event,
                      indeterminate: indeterminate.value,
                      disabled: ""
                    }, null, 8, ["checked", "onUpdate:checked", "indeterminate"]),
                    createVNode(unref(Button), {
                      size: "small",
                      onClick: ($event) => value.value = !value.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Check")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      size: "small",
                      onClick: ($event) => indeterminate.value = !indeterminate.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Indeterminate")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), {
                "item-style": "display: flex;",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event,
                    indeterminate: indeterminate.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("checkbox")
                    ]),
                    _: 1
                  }, 8, ["checked", "onUpdate:checked", "indeterminate"]),
                  createVNode(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event,
                    indeterminate: indeterminate.value
                  }, null, 8, ["checked", "onUpdate:checked", "indeterminate"]),
                  createVNode(unref(NCheckbox), {
                    checked: value.value,
                    "onUpdate:checked": ($event) => value.value = $event,
                    indeterminate: indeterminate.value,
                    disabled: ""
                  }, null, 8, ["checked", "onUpdate:checked", "indeterminate"]),
                  createVNode(unref(Button), {
                    size: "small",
                    onClick: ($event) => value.value = !value.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Check")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    size: "small",
                    onClick: ($event) => indeterminate.value = !indeterminate.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Indeterminate")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Checkbox-CFKkY_9D.mjs.map
