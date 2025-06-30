import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, c as NText, B as Button, v as useConfig, x as useTheme, Z as inputLight, k as cB, y as createKey, z as useThemeClass, n as cE } from './server.mjs';
import { N as NInputNumber } from './InputNumber-DqG6K7UX.mjs';
import { N as NCascader } from './Cascader-yKo5Q2Yh.mjs';
import { N as NDatePicker } from './DatePicker-Bg-EPps0.mjs';
import { N as NTimePicker } from './TimePicker-BCfmsXF5.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { N as NInputGroup } from './InputGroup-D2B2JN7i.mjs';
import { N as NSelect } from './Select-Cn-19BJa.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-S6SsK5xW.mjs';
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
import './Add-niv5NbQA.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkbox-DOjB2S1h.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './use-resize-COzDFWWZ.mjs';
import './utils-DMBa_qdR.mjs';
import './SelectMenu-OKwjnwtS.mjs';
import './Selection-DmCMUIfq.mjs';
import './Suffix-CHHaPGTv.mjs';
import './utils-Dsl_XouJ.mjs';
import './getDefaultOptions-B-S4FfjT.mjs';
import './Forward-ggOyj9WR.mjs';
import './index-CdFfausA.mjs';
import './get-slot-BIpdyb5h.mjs';
import './Eye-DafrR3c8.mjs';

const style = cB("input-group-label", `
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [cE("border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]);
const inputGroupLabelProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
});
const NInputGroupLabel = defineComponent({
  name: "InputGroupLabel",
  props: inputGroupLabelProps,
  setup(props) {
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Input", "-input-group-label", style, inputLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          groupLabelColor,
          borderRadius,
          groupLabelTextColor,
          lineHeight,
          groupLabelBorder,
          [createKey("fontSize", size)]: fontSize,
          [createKey("height", size)]: height
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-group-label-color": groupLabelColor,
        "--n-group-label-border": groupLabelBorder,
        "--n-border-radius": borderRadius,
        "--n-group-label-text-color": groupLabelTextColor,
        "--n-font-size": fontSize,
        "--n-line-height": lineHeight,
        "--n-height": height
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("input-group-label", computed(() => props.size[0]), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-input-group-label`, this.themeClass],
      style: this.cssVars
    }, (_c = (_b = this.$slots).default) === null || _c === void 0 ? void 0 : _c.call(_b), this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-input-group-label__border`
    }) : null);
  }
});
const ExternalIcon = "tabler:external-link";
const FlashOutline = "ion:flash-outline";
const GlassesOutline = "ion:glasses-outline";
const Glasses = "ion:glasses";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(null);
    const selectOptions = ref([
      {
        label: "option",
        value: "option"
      }
    ]);
    const cascaderOptions = ref([
      {
        label: "option-1",
        value: "option-1",
        children: [
          {
            label: "option-1-1",
            value: "option-1-1"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Input</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/input" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Basic use of `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`n-input`);
                } else {
                  return [
                    createTextVNode("n-input")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` . `);
          } else {
            return [
              createTextVNode(" Basic use of "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("n-input")
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
						<n-input v-model:value="value" type="text" placeholder="Basic Input" />
						<n-input v-model:value="value" type="textarea" placeholder="Basic Textarea" />
					</n-space>
					`))} ${ssrInterpolate(js(`
						const value = ref(null)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input v-model:value="value" type="text" placeholder="Basic Input" />
						<n-input v-model:value="value" type="textarea" placeholder="Basic Textarea" />
					</n-space>
					`)) + " " + toDisplayString(js(`
						const value = ref(null)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    type: "text",
                    placeholder: "Basic Input"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    type: "textarea",
                    placeholder: "Basic Textarea"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      value: value.value,
                      "onUpdate:value": ($event) => value.value = $event,
                      type: "text",
                      placeholder: "Basic Input"
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NInput), {
                      value: value.value,
                      "onUpdate:value": ($event) => value.value = $event,
                      type: "textarea",
                      placeholder: "Basic Textarea"
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    type: "text",
                    placeholder: "Basic Input"
                  }, null, 8, ["value", "onUpdate:value"]),
                  createVNode(unref(NInput), {
                    value: value.value,
                    "onUpdate:value": ($event) => value.value = $event,
                    type: "textarea",
                    placeholder: "Basic Textarea"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Size" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-input type="text" size="tiny" placeholder="Tiny Input" />
						<n-input type="text" size="small" placeholder="Small Input" />
						<n-input type="text" placeholder="Medium Input" />
						<n-input type="text" size="large" placeholder="Large Input" />
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input type="text" size="tiny" placeholder="Tiny Input" />
						<n-input type="text" size="small" placeholder="Small Input" />
						<n-input type="text" placeholder="Medium Input" />
						<n-input type="text" size="large" placeholder="Large Input" />
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "text",
                    size: "tiny",
                    placeholder: "Tiny Input"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "text",
                    size: "small",
                    placeholder: "Small Input"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "text",
                    placeholder: "Medium Input"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "text",
                    size: "large",
                    placeholder: "Large Input"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      type: "text",
                      size: "tiny",
                      placeholder: "Tiny Input"
                    }),
                    createVNode(unref(NInput), {
                      type: "text",
                      size: "small",
                      placeholder: "Small Input"
                    }),
                    createVNode(unref(NInput), {
                      type: "text",
                      placeholder: "Medium Input"
                    }),
                    createVNode(unref(NInput), {
                      type: "text",
                      size: "large",
                      placeholder: "Large Input"
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
                  createVNode(unref(NInput), {
                    type: "text",
                    size: "tiny",
                    placeholder: "Tiny Input"
                  }),
                  createVNode(unref(NInput), {
                    type: "text",
                    size: "small",
                    placeholder: "Small Input"
                  }),
                  createVNode(unref(NInput), {
                    type: "text",
                    placeholder: "Medium Input"
                  }),
                  createVNode(unref(NInput), {
                    type: "text",
                    size: "large",
                    placeholder: "Large Input"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Prefix & suffix" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-input placeholder="Flash">
							<template #prefix>
								<n-icon :component="FlashOutline" />
							</template>
						</n-input>
						<n-input round placeholder="1,400,000">
							<template #suffix>$</template>
						</n-input>
						<n-input round placeholder="Flash">
							<template #suffix>
								<n-icon :component="FlashOutline" />
							</template>
						</n-input>
						<n-input type="text" placeholder="Basic Input" loading />
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { FlashOutline } from '@vicons/ionicons5'
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input placeholder="Flash">
							<template #prefix>
								<n-icon :component="FlashOutline" />
							</template>
						</n-input>
						<n-input round placeholder="1,400,000">
							<template #suffix>$</template>
						</n-input>
						<n-input round placeholder="Flash">
							<template #suffix>
								<n-icon :component="FlashOutline" />
							</template>
						</n-input>
						<n-input type="text" placeholder="Basic Input" loading />
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { FlashOutline } from '@vicons/ionicons5'
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), { placeholder: "Flash" }, {
                    prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: FlashOutline }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: FlashOutline })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    round: "",
                    placeholder: "1,400,000"
                  }, {
                    suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
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
                  _push3(ssrRenderComponent(unref(NInput), {
                    round: "",
                    placeholder: "Flash"
                  }, {
                    suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: FlashOutline }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: FlashOutline })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "text",
                    placeholder: "Basic Input",
                    loading: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), { placeholder: "Flash" }, {
                      prefix: withCtx(() => [
                        createVNode(_sfc_main$o, { name: FlashOutline })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInput), {
                      round: "",
                      placeholder: "1,400,000"
                    }, {
                      suffix: withCtx(() => [
                        createTextVNode("$")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInput), {
                      round: "",
                      placeholder: "Flash"
                    }, {
                      suffix: withCtx(() => [
                        createVNode(_sfc_main$o, { name: FlashOutline })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInput), {
                      type: "text",
                      placeholder: "Basic Input",
                      loading: ""
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
                  createVNode(unref(NInput), { placeholder: "Flash" }, {
                    prefix: withCtx(() => [
                      createVNode(_sfc_main$o, { name: FlashOutline })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInput), {
                    round: "",
                    placeholder: "1,400,000"
                  }, {
                    suffix: withCtx(() => [
                      createTextVNode("$")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInput), {
                    round: "",
                    placeholder: "Flash"
                  }, {
                    suffix: withCtx(() => [
                      createVNode(_sfc_main$o, { name: FlashOutline })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInput), {
                    type: "text",
                    placeholder: "Basic Input",
                    loading: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Password & Clearable" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-input type="password" show-password-on="mousedown" placeholder="Password" :maxlength="8" />
						<n-input
							type="password"
							show-password-on="click"
							placeholder="Custom Password Toggle Icon"
							:maxlength="8"
						>
							<template #password-visible-icon>
								<n-icon :size="16" :component="GlassesOutline" />
							</template>
							<template #password-invisible-icon>
								<n-icon :size="16" :component="Glasses" />
							</template>
						</n-input>
						<n-input type="text" placeholder="Content is clearable" clearable />
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { GlassesOutline, Glasses } from '@vicons/ionicons5'
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input type="password" show-password-on="mousedown" placeholder="Password" :maxlength="8" />
						<n-input
							type="password"
							show-password-on="click"
							placeholder="Custom Password Toggle Icon"
							:maxlength="8"
						>
							<template #password-visible-icon>
								<n-icon :size="16" :component="GlassesOutline" />
							</template>
							<template #password-invisible-icon>
								<n-icon :size="16" :component="Glasses" />
							</template>
						</n-input>
						<n-input type="text" placeholder="Content is clearable" clearable />
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { GlassesOutline, Glasses } from '@vicons/ionicons5'
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "password",
                    "show-password-on": "mousedown",
                    placeholder: "Password",
                    maxlength: 8
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "password",
                    "show-password-on": "click",
                    placeholder: "Custom Password Toggle Icon",
                    maxlength: 8
                  }, {
                    "password-visible-icon": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          size: 16,
                          name: GlassesOutline
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, {
                            size: 16,
                            name: GlassesOutline
                          })
                        ];
                      }
                    }),
                    "password-invisible-icon": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          size: 16,
                          name: Glasses
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, {
                            size: 16,
                            name: Glasses
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "text",
                    placeholder: "Content is clearable",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      type: "password",
                      "show-password-on": "mousedown",
                      placeholder: "Password",
                      maxlength: 8
                    }),
                    createVNode(unref(NInput), {
                      type: "password",
                      "show-password-on": "click",
                      placeholder: "Custom Password Toggle Icon",
                      maxlength: 8
                    }, {
                      "password-visible-icon": withCtx(() => [
                        createVNode(_sfc_main$o, {
                          size: 16,
                          name: GlassesOutline
                        })
                      ]),
                      "password-invisible-icon": withCtx(() => [
                        createVNode(_sfc_main$o, {
                          size: 16,
                          name: Glasses
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInput), {
                      type: "text",
                      placeholder: "Content is clearable",
                      clearable: ""
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
                  createVNode(unref(NInput), {
                    type: "password",
                    "show-password-on": "mousedown",
                    placeholder: "Password",
                    maxlength: 8
                  }),
                  createVNode(unref(NInput), {
                    type: "password",
                    "show-password-on": "click",
                    placeholder: "Custom Password Toggle Icon",
                    maxlength: 8
                  }, {
                    "password-visible-icon": withCtx(() => [
                      createVNode(_sfc_main$o, {
                        size: 16,
                        name: GlassesOutline
                      })
                    ]),
                    "password-invisible-icon": withCtx(() => [
                      createVNode(_sfc_main$o, {
                        size: 16,
                        name: Glasses
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInput), {
                    type: "text",
                    placeholder: "Content is clearable",
                    clearable: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Autosize" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-input placeholder="Autosizable" autosize style="min-width: 50%" />
						<n-input
							placeholder="Autosizable"
							type="textarea"
							size="small"
							:autosize="{
								minRows: 3,
								maxRows: 5
							}"
						/>
						<n-input
							type="textarea"
							placeholder="Autosizable"
							:autosize="{
								minRows: 3
							}"
						/>
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input placeholder="Autosizable" autosize style="min-width: 50%" />
						<n-input
							placeholder="Autosizable"
							type="textarea"
							size="small"
							:autosize="{
								minRows: 3,
								maxRows: 5
							}"
						/>
						<n-input
							type="textarea"
							placeholder="Autosizable"
							:autosize="{
								minRows: 3
							}"
						/>
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    placeholder: "Autosizable",
                    autosize: "",
                    style: { "min-width": "50%" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    placeholder: "Autosizable",
                    type: "textarea",
                    size: "small",
                    autosize: {
                      minRows: 3,
                      maxRows: 5
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "textarea",
                    placeholder: "Autosizable",
                    autosize: {
                      minRows: 3
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      placeholder: "Autosizable",
                      autosize: "",
                      style: { "min-width": "50%" }
                    }),
                    createVNode(unref(NInput), {
                      placeholder: "Autosizable",
                      type: "textarea",
                      size: "small",
                      autosize: {
                        minRows: 3,
                        maxRows: 5
                      }
                    }),
                    createVNode(unref(NInput), {
                      type: "textarea",
                      placeholder: "Autosizable",
                      autosize: {
                        minRows: 3
                      }
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
                  createVNode(unref(NInput), {
                    placeholder: "Autosizable",
                    autosize: "",
                    style: { "min-width": "50%" }
                  }),
                  createVNode(unref(NInput), {
                    placeholder: "Autosizable",
                    type: "textarea",
                    size: "small",
                    autosize: {
                      minRows: 3,
                      maxRows: 5
                    }
                  }),
                  createVNode(unref(NInput), {
                    type: "textarea",
                    placeholder: "Autosizable",
                    autosize: {
                      minRows: 3
                    }
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Input group" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-input-group>
							<n-input :style="{ width: '33%' }" />
							<n-input-number :style="{ width: '33%' }" />
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
						<n-input-group>
							<n-input-group-label>https://www.</n-input-group-label>
							<n-input :style="{ width: '33%' }" />
							<n-input-group-label>.com</n-input-group-label>
						</n-input-group>
						<n-input-group>
							<n-select :style="{ width: '33%' }" :options="selectOptions" />
							<n-cascader :style="{ width: '33%' }" :options="cascaderOptions" />
							<n-select :style="{ width: '33%' }" multiple :options="selectOptions" />
						</n-input-group>
						<n-input-group>
							<n-button type="primary">Search</n-button>
							<n-input :style="{ width: '50%' }" />
							<n-button type="primary" ghost>Search</n-button>
						</n-input-group>
						<n-input-group>
							<n-date-picker />
							<n-time-picker />
						</n-input-group>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const selectOptions = ref([
							{
								label: "option",
								value: "option"
							}
						])
						const cascaderOptions = ref([
							{
								label: "option-1",
								value: "option-1",
								children: [
									{
										label: "option-1-1",
										value: "option-1-1"
									}
								]
							}
						])`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input-group>
							<n-input :style="{ width: '33%' }" />
							<n-input-number :style="{ width: '33%' }" />
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
						<n-input-group>
							<n-input-group-label>https://www.</n-input-group-label>
							<n-input :style="{ width: '33%' }" />
							<n-input-group-label>.com</n-input-group-label>
						</n-input-group>
						<n-input-group>
							<n-select :style="{ width: '33%' }" :options="selectOptions" />
							<n-cascader :style="{ width: '33%' }" :options="cascaderOptions" />
							<n-select :style="{ width: '33%' }" multiple :options="selectOptions" />
						</n-input-group>
						<n-input-group>
							<n-button type="primary">Search</n-button>
							<n-input :style="{ width: '50%' }" />
							<n-button type="primary" ghost>Search</n-button>
						</n-input-group>
						<n-input-group>
							<n-date-picker />
							<n-time-picker />
						</n-input-group>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const selectOptions = ref([
							{
								label: "option",
								value: "option"
							}
						])
						const cascaderOptions = ref([
							{
								label: "option-1",
								value: "option-1",
								children: [
									{
										label: "option-1-1",
										value: "option-1-1"
									}
								]
							}
						])`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInputGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), { style: { width: "33%" } }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NInputNumber), { style: { width: "33%" } }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NInput), { style: { width: "33%" } }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), { style: { width: "33%" } }),
                          createVNode(unref(NInputNumber), { style: { width: "33%" } }),
                          createVNode(unref(NInput), { style: { width: "33%" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInputGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInputGroupLabel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`https://www.`);
                            } else {
                              return [
                                createTextVNode("https://www.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NInput), { style: { width: "33%" } }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NInputGroupLabel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`.com`);
                            } else {
                              return [
                                createTextVNode(".com")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInputGroupLabel), null, {
                            default: withCtx(() => [
                              createTextVNode("https://www.")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NInput), { style: { width: "33%" } }),
                          createVNode(unref(NInputGroupLabel), null, {
                            default: withCtx(() => [
                              createTextVNode(".com")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInputGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NSelect), {
                          style: { width: "33%" },
                          options: selectOptions.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NCascader), {
                          style: { width: "33%" },
                          options: cascaderOptions.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NSelect), {
                          style: { width: "33%" },
                          multiple: "",
                          options: selectOptions.value
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NSelect), {
                            style: { width: "33%" },
                            options: selectOptions.value
                          }, null, 8, ["options"]),
                          createVNode(unref(NCascader), {
                            style: { width: "33%" },
                            options: cascaderOptions.value
                          }, null, 8, ["options"]),
                          createVNode(unref(NSelect), {
                            style: { width: "33%" },
                            multiple: "",
                            options: selectOptions.value
                          }, null, 8, ["options"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInputGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { type: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Search`);
                            } else {
                              return [
                                createTextVNode("Search")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NInput), { style: { width: "50%" } }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), {
                          type: "primary",
                          ghost: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Search`);
                            } else {
                              return [
                                createTextVNode("Search")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { type: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode("Search")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NInput), { style: { width: "50%" } }),
                          createVNode(unref(Button), {
                            type: "primary",
                            ghost: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Search")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInputGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NDatePicker), null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTimePicker), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NDatePicker)),
                          createVNode(unref(NTimePicker))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInputGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), { style: { width: "33%" } }),
                        createVNode(unref(NInputNumber), { style: { width: "33%" } }),
                        createVNode(unref(NInput), { style: { width: "33%" } })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInputGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(NInputGroupLabel), null, {
                          default: withCtx(() => [
                            createTextVNode("https://www.")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NInput), { style: { width: "33%" } }),
                        createVNode(unref(NInputGroupLabel), null, {
                          default: withCtx(() => [
                            createTextVNode(".com")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInputGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(NSelect), {
                          style: { width: "33%" },
                          options: selectOptions.value
                        }, null, 8, ["options"]),
                        createVNode(unref(NCascader), {
                          style: { width: "33%" },
                          options: cascaderOptions.value
                        }, null, 8, ["options"]),
                        createVNode(unref(NSelect), {
                          style: { width: "33%" },
                          multiple: "",
                          options: selectOptions.value
                        }, null, 8, ["options"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInputGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { type: "primary" }, {
                          default: withCtx(() => [
                            createTextVNode("Search")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NInput), { style: { width: "50%" } }),
                        createVNode(unref(Button), {
                          type: "primary",
                          ghost: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Search")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInputGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(NDatePicker)),
                        createVNode(unref(NTimePicker))
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
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NInputGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), { style: { width: "33%" } }),
                      createVNode(unref(NInputNumber), { style: { width: "33%" } }),
                      createVNode(unref(NInput), { style: { width: "33%" } })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInputGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(NInputGroupLabel), null, {
                        default: withCtx(() => [
                          createTextVNode("https://www.")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NInput), { style: { width: "33%" } }),
                      createVNode(unref(NInputGroupLabel), null, {
                        default: withCtx(() => [
                          createTextVNode(".com")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInputGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(NSelect), {
                        style: { width: "33%" },
                        options: selectOptions.value
                      }, null, 8, ["options"]),
                      createVNode(unref(NCascader), {
                        style: { width: "33%" },
                        options: cascaderOptions.value
                      }, null, 8, ["options"]),
                      createVNode(unref(NSelect), {
                        style: { width: "33%" },
                        multiple: "",
                        options: selectOptions.value
                      }, null, 8, ["options"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInputGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { type: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("Search")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NInput), { style: { width: "50%" } }),
                      createVNode(unref(Button), {
                        type: "primary",
                        ghost: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Search")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInputGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(NDatePicker)),
                      createVNode(unref(NTimePicker))
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Pairwise value" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-input pair separator="-" :placeholder="['From', 'To']" clearable />
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-input pair separator="-" :placeholder="['From', 'To']" clearable />
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NInput), {
              pair: "",
              separator: "-",
              placeholder: ["From", "To"],
              clearable: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NInput), {
                pair: "",
                separator: "-",
                placeholder: ["From", "To"],
                clearable: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Word limit" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-input maxlength="30" show-count clearable />
						<n-input default-value="Yes" show-count clearable>
							<template #count="{ value }">
								{{ value.includes("Yes") ? "99+" : value.length }}
							</template>
						</n-input>
						<n-input type="textarea" maxlength="30" show-count />
						<n-input type="textarea" default-value="What?" show-count>
							<template #count="{ value }">
								{{ value.includes("What?") ? "99+" : value.length }}
							</template>
						</n-input>
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-input maxlength="30" show-count clearable />
						<n-input default-value="Yes" show-count clearable>
							<template #count="{ value }">
								{{ value.includes("Yes") ? "99+" : value.length }}
							</template>
						</n-input>
						<n-input type="textarea" maxlength="30" show-count />
						<n-input type="textarea" default-value="What?" show-count>
							<template #count="{ value }">
								{{ value.includes("What?") ? "99+" : value.length }}
							</template>
						</n-input>
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    maxlength: "30",
                    "show-count": "",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    "default-value": "Yes",
                    "show-count": "",
                    clearable: ""
                  }, {
                    count: withCtx(({ value: valueObj }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(valueObj.includes("Yes") ? "99+" : valueObj.length)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(valueObj.includes("Yes") ? "99+" : valueObj.length), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "textarea",
                    maxlength: "30",
                    "show-count": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    type: "textarea",
                    "default-value": "What?",
                    "show-count": ""
                  }, {
                    count: withCtx(({ value: valueObj }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(valueObj.includes("What?") ? "99+" : valueObj.length)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(valueObj.includes("What?") ? "99+" : valueObj.length), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      maxlength: "30",
                      "show-count": "",
                      clearable: ""
                    }),
                    createVNode(unref(NInput), {
                      "default-value": "Yes",
                      "show-count": "",
                      clearable: ""
                    }, {
                      count: withCtx(({ value: valueObj }) => [
                        createTextVNode(toDisplayString(valueObj.includes("Yes") ? "99+" : valueObj.length), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NInput), {
                      type: "textarea",
                      maxlength: "30",
                      "show-count": ""
                    }),
                    createVNode(unref(NInput), {
                      type: "textarea",
                      "default-value": "What?",
                      "show-count": ""
                    }, {
                      count: withCtx(({ value: valueObj }) => [
                        createTextVNode(toDisplayString(valueObj.includes("What?") ? "99+" : valueObj.length), 1)
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
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), {
                    maxlength: "30",
                    "show-count": "",
                    clearable: ""
                  }),
                  createVNode(unref(NInput), {
                    "default-value": "Yes",
                    "show-count": "",
                    clearable: ""
                  }, {
                    count: withCtx(({ value: valueObj }) => [
                      createTextVNode(toDisplayString(valueObj.includes("Yes") ? "99+" : valueObj.length), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NInput), {
                    type: "textarea",
                    maxlength: "30",
                    "show-count": ""
                  }),
                  createVNode(unref(NInput), {
                    type: "textarea",
                    "default-value": "What?",
                    "show-count": ""
                  }, {
                    count: withCtx(({ value: valueObj }) => [
                      createTextVNode(toDisplayString(valueObj.includes("What?") ? "99+" : valueObj.length), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Input-DonEGeHF.mjs.map
