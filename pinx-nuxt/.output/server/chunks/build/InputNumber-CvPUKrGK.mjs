import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s, aW as NText } from './server.mjs';
import { N as NInputNumber } from './InputNumber-Cvi2mysZ.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
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
import './Input-DOxGe8j0.mjs';
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';
import './Add-niv5NbQA.mjs';
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputNumber",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(0);
    function parse(input) {
      const nums = input.replace(/,/g, "").trim();
      if (/^\d+(?:\.\d*)?$/.test(nums)) return Number(nums);
      return nums === "" ? null : Number.NaN;
    }
    function format(value2) {
      if (value2 === null) return "";
      return value2.toLocaleString("en-US");
    }
    function parseCurrency(input) {
      const nums = input.replace(/([,$\s])/g, "").trim();
      if (/^\d+(?:\.\d*)?$/.test(nums)) return Number(nums);
      return nums === "" ? null : Number.NaN;
    }
    function formatCurrency(value2) {
      if (value2 === null) return "";
      return `${value2.toLocaleString("en-US")} $`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">InputNumber</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/input-number" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-input-number v-model:value="value" clearable />
					`))} ${ssrInterpolate(js(`
						const value = ref(0)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-input-number v-model:value="value" clearable />
					`)) + " " + toDisplayString(js(`
						const value = ref(0)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NInputNumber), {
              value: value.value,
              "onUpdate:value": ($event) => value.value = $event,
              clearable: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NInputNumber), {
                value: value.value,
                "onUpdate:value": ($event) => value.value = $event,
                clearable: ""
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Custom parsing" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` You can use `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`parse`);
                } else {
                  return [
                    createTextVNode("parse")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` and `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`format`);
                } else {
                  return [
                    createTextVNode("format")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` to custom parsing &amp; display. For example add thousand separator. Usually they should be set together, especially you have a custom `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`validator`);
                } else {
                  return [
                    createTextVNode("validator")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` set. <br${_scopeId}><br${_scopeId}> Use `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`parse`);
                } else {
                  return [
                    createTextVNode("parse")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` and `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`format`);
                } else {
                  return [
                    createTextVNode("format")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` will disable `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`update-value-on-input`);
                } else {
                  return [
                    createTextVNode("update-value-on-input")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` . `);
          } else {
            return [
              createTextVNode(" You can use "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("parse")
                ]),
                _: 1
              }),
              createTextVNode(" and "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("format")
                ]),
                _: 1
              }),
              createTextVNode(" to custom parsing & display. For example add thousand separator. Usually they should be set together, especially you have a custom "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("validator")
                ]),
                _: 1
              }),
              createTextVNode(" set. "),
              createVNode("br"),
              createVNode("br"),
              createTextVNode(" Use "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("parse")
                ]),
                _: 1
              }),
              createTextVNode(" and "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("format")
                ]),
                _: 1
              }),
              createTextVNode(" will disable "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("update-value-on-input")
                ]),
                _: 1
              }),
              createTextVNode(" . ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-input-number :default-value="1075" :parse="parse" :format="format" />
						<n-input-number :default-value="1075" :parse="parseCurrency" :format="formatCurrency" />
					</n-space>
					`))} ${ssrInterpolate(js(`
						function parse(input: string) {
							const nums = input.replace(/,/g, "").trim()
							if (/^d+(.(d+)?)?$/.test(nums)) return Number(nums)
							return nums === "" ? null : Number.NaN
						}
						function format(value: number | null) {
							if (value === null) return ""
							return value.toLocaleString("en-US")
						}
						function parseCurrency(input: string) {
							const nums = input.replace(/(,|$|s)/g, "").trim()
							if (/^d+(.(d+)?)?$/.test(nums)) return Number(nums)
							return nums === "" ? null : Number.NaN
						}
						function formatCurrency(value: number | null) {
							if (value === null) return ""
							return \`\${value.toLocaleString("en-US")} $\`
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input-number :default-value="1075" :parse="parse" :format="format" />
						<n-input-number :default-value="1075" :parse="parseCurrency" :format="formatCurrency" />
					</n-space>
					`)) + " " + toDisplayString(js(`
						function parse(input: string) {
							const nums = input.replace(/,/g, "").trim()
							if (/^d+(.(d+)?)?$/.test(nums)) return Number(nums)
							return nums === "" ? null : Number.NaN
						}
						function format(value: number | null) {
							if (value === null) return ""
							return value.toLocaleString("en-US")
						}
						function parseCurrency(input: string) {
							const nums = input.replace(/(,|$|s)/g, "").trim()
							if (/^d+(.(d+)?)?$/.test(nums)) return Number(nums)
							return nums === "" ? null : Number.NaN
						}
						function formatCurrency(value: number | null) {
							if (value === null) return ""
							return \`\${value.toLocaleString("en-US")} $\`
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInputNumber), {
                    "default-value": 1075,
                    parse,
                    format
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInputNumber), {
                    "default-value": 1075,
                    parse: parseCurrency,
                    format: formatCurrency
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInputNumber), {
                      "default-value": 1075,
                      parse,
                      format
                    }),
                    createVNode(unref(NInputNumber), {
                      "default-value": 1075,
                      parse: parseCurrency,
                      format: formatCurrency
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NInputNumber), {
                    "default-value": 1075,
                    parse,
                    format
                  }),
                  createVNode(unref(NInputNumber), {
                    "default-value": 1075,
                    parse: parseCurrency,
                    format: formatCurrency
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Button placement" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Button can be placed at both ends.`);
          } else {
            return [
              createTextVNode("Button can be placed at both ends.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-input-number v-model:value="value" button-placement="both" />
						<n-input-number v-model:value="value" button-placement="both">
							<template #prefix>$</template>
						</n-input-number>
						<n-input-number v-model:value="value" button-placement="both">
							<template #suffix>\u0E3F</template>
						</n-input-number>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const value = ref(0)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input-number v-model:value="value" button-placement="both" />
						<n-input-number v-model:value="value" button-placement="both">
							<template #prefix>$</template>
						</n-input-number>
						<n-input-number v-model:value="value" button-placement="both">
							<template #suffix>\u0E3F</template>
						</n-input-number>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const value = ref(0)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInputNumber), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    "button-placement": "both"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInputNumber), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    "button-placement": "both"
                  }, {
                    prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`$`);
                      } else {
                        return [
                          createTextVNode("$")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInputNumber), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    "button-placement": "both"
                  }, {
                    suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0E3F`);
                      } else {
                        return [
                          createTextVNode("\u0E3F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInputNumber), {
                      value: value.value,
                      "onUpdate:value": ($event) => value.value = $event,
                      "button-placement": "both"
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NInputNumber), {
                      value: value.value,
                      "onUpdate:value": ($event) => value.value = $event,
                      "button-placement": "both"
                    }, {
                      prefix: withCtx(() => [
                        createTextVNode("$")
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NInputNumber), {
                      value: value.value,
                      "onUpdate:value": ($event) => value.value = $event,
                      "button-placement": "both"
                    }, {
                      suffix: withCtx(() => [
                        createTextVNode("\u0E3F")
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
                  createVNode(unref(NInputNumber), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    "button-placement": "both"
                  }, null, 8, ["value", "onUpdate:value"]),
                  createVNode(unref(NInputNumber), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    "button-placement": "both"
                  }, {
                    prefix: withCtx(() => [
                      createTextVNode("$")
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"]),
                  createVNode(unref(NInputNumber), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    "button-placement": "both"
                  }, {
                    suffix: withCtx(() => [
                      createTextVNode("\u0E3F")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/InputNumber.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=InputNumber-CvPUKrGK.mjs.map
