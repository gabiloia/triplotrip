import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NSwitch } from './Switch-B_SrCjtw.mjs';
import { N as NCascader } from './Cascader-yKo5Q2Yh.mjs';
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
import './get-slot-BIpdyb5h.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkbox-DOjB2S1h.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './use-resize-COzDFWWZ.mjs';
import './utils-DMBa_qdR.mjs';
import './SelectMenu-OKwjnwtS.mjs';
import './Selection-DmCMUIfq.mjs';
import './Suffix-CHHaPGTv.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cascader",
  __ssrInlineRender: true,
  setup(__props) {
    const checkStrategyIsChild = ref(true);
    const cascade = ref(true);
    const multiple = ref(true);
    const showPath = ref(true);
    const hoverTrigger = ref(false);
    const value = ref(null);
    const filterable = ref(false);
    const responsiveMaxTagCount = ref(true);
    const clearFilterAfterSelect = ref(true);
    const options = getOptions();
    function getOptions(depth = 3, iterator = 1, prefix = "") {
      const length = 12;
      const options2 = [];
      for (let i = 1; i <= length; ++i) {
        if (iterator === 1) {
          options2.push({
            value: `v-${i}`,
            label: `l-${i}`,
            disabled: i % 5 === 0,
            children: getOptions(depth, iterator + 1, `${String(i)}`)
          });
        } else if (iterator === depth) {
          options2.push({
            value: `v-${prefix}-${i}`,
            label: `l-${prefix}-${i}`,
            disabled: i % 5 === 0
          });
        } else {
          options2.push({
            value: `v-${prefix}-${i}`,
            label: `l-${prefix}-${i}`,
            disabled: i % 5 === 0,
            children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
          });
        }
      }
      return options2;
    }
    function handleUpdateValue(value2, options2) {
      console.log(value2, options2);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Cascader</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/cascader" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-space>
							<n-space>
								<n-switch v-model:value="multiple" />
								Multiple
							</n-space>
							<n-space>
								<n-switch v-model:value="checkStrategyIsChild" />
								Child Check Strategy
							</n-space>
							<n-space>
								<n-switch v-model:value="cascade" />
								Cascade
							</n-space>
							<n-space>
								<n-switch v-model:value="showPath" />
								Show Path
							</n-space>
							<n-space>
								<n-switch v-model:value="hoverTrigger" />
								Hover Trigger
							</n-space>
							<n-space>
								<n-switch v-model:value="filterable" />
								Filterable
							</n-space>
							<n-space>
								<n-switch v-model:value="responsiveMaxTagCount" />
								Responsive MaxTagCount
							</n-space>
							<n-space>
								<n-switch v-model:value="clearFilterAfterSelect" />
								clearFilterAfterSelect
							</n-space>
						</n-space>
						<n-cascader
							v-model:value="value"
							:multiple="multiple"
							placeholder="Meaningless values"
							clearable
							:max-tag-count="responsiveMaxTagCount ? 'responsive' : undefined"
							:expand-trigger="hoverTrigger ? 'hover' : 'click'"
							:options
							:cascade="cascade"
							:check-strategy="checkStrategyIsChild ? 'child' : 'all'"
							:show-path="showPath"
							:filterable="filterable"
							:clear-filter-after-select="clearFilterAfterSelect"
							@update:value="handleUpdateValue"
						/>
					</n-space>
					`))} ${ssrInterpolate(js(`
						function getOptions(depth = 3, iterator = 1, prefix = "") {
							const length = 12
							const options: CascaderOption[] = []
							for (let i = 1; i <= length; ++i) {
								if (iterator === 1) {
									options.push({
										value: \`v-\${i}\`,
										label: \`l-\${i}\`,
										disabled: i % 5 === 0,
										children: getOptions(depth, iterator + 1, "" + String(i))
									})
								} else if (iterator === depth) {
									options.push({
										value: \`v-\${prefix}-\${i}\`,
										label: \`l-\${prefix}-\${i}\`,
										disabled: i % 5 === 0
									})
								} else {
									options.push({
										value: \`v-\${prefix}-\${i}\`,
										label: \`l-\${prefix}-\${i}\`,
										disabled: i % 5 === 0,
										children: getOptions(depth, iterator + 1, \`\${prefix}-\${i}\`)
									})
								}
							}
							return options
						}

						const checkStrategyIsChild = ref(true)
						const cascade = ref(true)
						const multiple = ref(true)
						const showPath = ref(true)
						const hoverTrigger = ref(false)
						const value = ref(null)
						const filterable = ref(false)
						const responsiveMaxTagCount = ref(true)
						const clearFilterAfterSelect = ref(true)
						const options = getOptions()
						function handleUpdateValue(value: string[], options: CascaderOption[]) {
							console.log(value, options)
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-space>
							<n-space>
								<n-switch v-model:value="multiple" />
								Multiple
							</n-space>
							<n-space>
								<n-switch v-model:value="checkStrategyIsChild" />
								Child Check Strategy
							</n-space>
							<n-space>
								<n-switch v-model:value="cascade" />
								Cascade
							</n-space>
							<n-space>
								<n-switch v-model:value="showPath" />
								Show Path
							</n-space>
							<n-space>
								<n-switch v-model:value="hoverTrigger" />
								Hover Trigger
							</n-space>
							<n-space>
								<n-switch v-model:value="filterable" />
								Filterable
							</n-space>
							<n-space>
								<n-switch v-model:value="responsiveMaxTagCount" />
								Responsive MaxTagCount
							</n-space>
							<n-space>
								<n-switch v-model:value="clearFilterAfterSelect" />
								clearFilterAfterSelect
							</n-space>
						</n-space>
						<n-cascader
							v-model:value="value"
							:multiple="multiple"
							placeholder="Meaningless values"
							clearable
							:max-tag-count="responsiveMaxTagCount ? 'responsive' : undefined"
							:expand-trigger="hoverTrigger ? 'hover' : 'click'"
							:options
							:cascade="cascade"
							:check-strategy="checkStrategyIsChild ? 'child' : 'all'"
							:show-path="showPath"
							:filterable="filterable"
							:clear-filter-after-select="clearFilterAfterSelect"
							@update:value="handleUpdateValue"
						/>
					</n-space>
					`)) + " " + toDisplayString(js(`
						function getOptions(depth = 3, iterator = 1, prefix = "") {
							const length = 12
							const options: CascaderOption[] = []
							for (let i = 1; i <= length; ++i) {
								if (iterator === 1) {
									options.push({
										value: \`v-\${i}\`,
										label: \`l-\${i}\`,
										disabled: i % 5 === 0,
										children: getOptions(depth, iterator + 1, "" + String(i))
									})
								} else if (iterator === depth) {
									options.push({
										value: \`v-\${prefix}-\${i}\`,
										label: \`l-\${prefix}-\${i}\`,
										disabled: i % 5 === 0
									})
								} else {
									options.push({
										value: \`v-\${prefix}-\${i}\`,
										label: \`l-\${prefix}-\${i}\`,
										disabled: i % 5 === 0,
										children: getOptions(depth, iterator + 1, \`\${prefix}-\${i}\`)
									})
								}
							}
							return options
						}

						const checkStrategyIsChild = ref(true)
						const cascade = ref(true)
						const multiple = ref(true)
						const showPath = ref(true)
						const hoverTrigger = ref(false)
						const value = ref(null)
						const filterable = ref(false)
						const responsiveMaxTagCount = ref(true)
						const clearFilterAfterSelect = ref(true)
						const options = getOptions()
						function handleUpdateValue(value: string[], options: CascaderOption[]) {
							console.log(value, options)
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
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NSpace), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NSwitch), {
                                value: multiple.value,
                                "onUpdate:value": ($event) => multiple.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(` Multiple `);
                            } else {
                              return [
                                createVNode(unref(NSwitch), {
                                  value: multiple.value,
                                  "onUpdate:value": ($event) => multiple.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" Multiple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NSpace), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NSwitch), {
                                value: checkStrategyIsChild.value,
                                "onUpdate:value": ($event) => checkStrategyIsChild.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(` Child Check Strategy `);
                            } else {
                              return [
                                createVNode(unref(NSwitch), {
                                  value: checkStrategyIsChild.value,
                                  "onUpdate:value": ($event) => checkStrategyIsChild.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" Child Check Strategy ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NSpace), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NSwitch), {
                                value: cascade.value,
                                "onUpdate:value": ($event) => cascade.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(` Cascade `);
                            } else {
                              return [
                                createVNode(unref(NSwitch), {
                                  value: cascade.value,
                                  "onUpdate:value": ($event) => cascade.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" Cascade ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NSpace), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NSwitch), {
                                value: showPath.value,
                                "onUpdate:value": ($event) => showPath.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(` Show Path `);
                            } else {
                              return [
                                createVNode(unref(NSwitch), {
                                  value: showPath.value,
                                  "onUpdate:value": ($event) => showPath.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" Show Path ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NSpace), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NSwitch), {
                                value: hoverTrigger.value,
                                "onUpdate:value": ($event) => hoverTrigger.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(` Hover Trigger `);
                            } else {
                              return [
                                createVNode(unref(NSwitch), {
                                  value: hoverTrigger.value,
                                  "onUpdate:value": ($event) => hoverTrigger.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" Hover Trigger ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NSpace), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NSwitch), {
                                value: filterable.value,
                                "onUpdate:value": ($event) => filterable.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(` Filterable `);
                            } else {
                              return [
                                createVNode(unref(NSwitch), {
                                  value: filterable.value,
                                  "onUpdate:value": ($event) => filterable.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" Filterable ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NSpace), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NSwitch), {
                                value: responsiveMaxTagCount.value,
                                "onUpdate:value": ($event) => responsiveMaxTagCount.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(` Responsive MaxTagCount `);
                            } else {
                              return [
                                createVNode(unref(NSwitch), {
                                  value: responsiveMaxTagCount.value,
                                  "onUpdate:value": ($event) => responsiveMaxTagCount.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" Responsive MaxTagCount ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NSpace), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NSwitch), {
                                value: clearFilterAfterSelect.value,
                                "onUpdate:value": ($event) => clearFilterAfterSelect.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(` clearFilterAfterSelect `);
                            } else {
                              return [
                                createVNode(unref(NSwitch), {
                                  value: clearFilterAfterSelect.value,
                                  "onUpdate:value": ($event) => clearFilterAfterSelect.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" clearFilterAfterSelect ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: multiple.value,
                                "onUpdate:value": ($event) => multiple.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" Multiple ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: checkStrategyIsChild.value,
                                "onUpdate:value": ($event) => checkStrategyIsChild.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" Child Check Strategy ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: cascade.value,
                                "onUpdate:value": ($event) => cascade.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" Cascade ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: showPath.value,
                                "onUpdate:value": ($event) => showPath.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" Show Path ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: hoverTrigger.value,
                                "onUpdate:value": ($event) => hoverTrigger.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" Hover Trigger ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: filterable.value,
                                "onUpdate:value": ($event) => filterable.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" Filterable ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: responsiveMaxTagCount.value,
                                "onUpdate:value": ($event) => responsiveMaxTagCount.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" Responsive MaxTagCount ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: clearFilterAfterSelect.value,
                                "onUpdate:value": ($event) => clearFilterAfterSelect.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" clearFilterAfterSelect ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCascader), {
                    value: value.value,
                    "onUpdate:value": [($event) => value.value = $event, handleUpdateValue],
                    multiple: multiple.value,
                    placeholder: "Meaningless values",
                    clearable: "",
                    "max-tag-count": responsiveMaxTagCount.value ? "responsive" : void 0,
                    "expand-trigger": hoverTrigger.value ? "hover" : "click",
                    options: unref(options),
                    cascade: cascade.value,
                    "check-strategy": checkStrategyIsChild.value ? "child" : "all",
                    "show-path": showPath.value,
                    filterable: filterable.value,
                    "clear-filter-after-select": clearFilterAfterSelect.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(NSpace), null, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: multiple.value,
                              "onUpdate:value": ($event) => multiple.value = $event
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" Multiple ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NSpace), null, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: checkStrategyIsChild.value,
                              "onUpdate:value": ($event) => checkStrategyIsChild.value = $event
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" Child Check Strategy ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NSpace), null, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: cascade.value,
                              "onUpdate:value": ($event) => cascade.value = $event
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" Cascade ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NSpace), null, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: showPath.value,
                              "onUpdate:value": ($event) => showPath.value = $event
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" Show Path ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NSpace), null, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: hoverTrigger.value,
                              "onUpdate:value": ($event) => hoverTrigger.value = $event
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" Hover Trigger ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NSpace), null, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: filterable.value,
                              "onUpdate:value": ($event) => filterable.value = $event
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" Filterable ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NSpace), null, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: responsiveMaxTagCount.value,
                              "onUpdate:value": ($event) => responsiveMaxTagCount.value = $event
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" Responsive MaxTagCount ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NSpace), null, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: clearFilterAfterSelect.value,
                              "onUpdate:value": ($event) => clearFilterAfterSelect.value = $event
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" clearFilterAfterSelect ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCascader), {
                      value: value.value,
                      "onUpdate:value": [($event) => value.value = $event, handleUpdateValue],
                      multiple: multiple.value,
                      placeholder: "Meaningless values",
                      clearable: "",
                      "max-tag-count": responsiveMaxTagCount.value ? "responsive" : void 0,
                      "expand-trigger": hoverTrigger.value ? "hover" : "click",
                      options: unref(options),
                      cascade: cascade.value,
                      "check-strategy": checkStrategyIsChild.value ? "child" : "all",
                      "show-path": showPath.value,
                      filterable: filterable.value,
                      "clear-filter-after-select": clearFilterAfterSelect.value
                    }, null, 8, ["value", "onUpdate:value", "multiple", "max-tag-count", "expand-trigger", "options", "cascade", "check-strategy", "show-path", "filterable", "clear-filter-after-select"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(NSwitch), {
                            value: multiple.value,
                            "onUpdate:value": ($event) => multiple.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" Multiple ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(NSwitch), {
                            value: checkStrategyIsChild.value,
                            "onUpdate:value": ($event) => checkStrategyIsChild.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" Child Check Strategy ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(NSwitch), {
                            value: cascade.value,
                            "onUpdate:value": ($event) => cascade.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" Cascade ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(NSwitch), {
                            value: showPath.value,
                            "onUpdate:value": ($event) => showPath.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" Show Path ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(NSwitch), {
                            value: hoverTrigger.value,
                            "onUpdate:value": ($event) => hoverTrigger.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" Hover Trigger ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(NSwitch), {
                            value: filterable.value,
                            "onUpdate:value": ($event) => filterable.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" Filterable ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(NSwitch), {
                            value: responsiveMaxTagCount.value,
                            "onUpdate:value": ($event) => responsiveMaxTagCount.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" Responsive MaxTagCount ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(NSwitch), {
                            value: clearFilterAfterSelect.value,
                            "onUpdate:value": ($event) => clearFilterAfterSelect.value = $event
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" clearFilterAfterSelect ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCascader), {
                    value: value.value,
                    "onUpdate:value": [($event) => value.value = $event, handleUpdateValue],
                    multiple: multiple.value,
                    placeholder: "Meaningless values",
                    clearable: "",
                    "max-tag-count": responsiveMaxTagCount.value ? "responsive" : void 0,
                    "expand-trigger": hoverTrigger.value ? "hover" : "click",
                    options: unref(options),
                    cascade: cascade.value,
                    "check-strategy": checkStrategyIsChild.value ? "child" : "all",
                    "show-path": showPath.value,
                    filterable: filterable.value,
                    "clear-filter-after-select": clearFilterAfterSelect.value
                  }, null, 8, ["value", "onUpdate:value", "multiple", "max-tag-count", "expand-trigger", "options", "cascade", "check-strategy", "show-path", "filterable", "clear-filter-after-select"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Cascader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Cascader-BHqIkC8t.mjs.map
