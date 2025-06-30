import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { aV as useMessage, _ as _sfc_main$o, B as Button } from './server.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NRadioGroup } from './RadioGroup-rfsKDf3m.mjs';
import { N as NRadioButton } from './RadioButton-Bxt4PxAh.mjs';
import { N as NCheckbox } from './Checkbox-DOjB2S1h.mjs';
import { N as NForm } from './Form-b1P4jfBt.mjs';
import { N as NFormItem } from './FormItem-DlAzS2Nq.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
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
import 'async-validator';
import './use-collection-Dfn99m8m.mjs';
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    const size = ref("medium");
    const inline = ref(false);
    const showLabel = ref(true);
    const placement = ref("left");
    const model = ref({
      brandValue: null,
      modelValue: null
    });
    const formRef = ref(null);
    const message = useMessage();
    const formValue = ref({
      user: {
        name: "",
        age: ""
      },
      phone: ""
    });
    const rules = {
      user: {
        name: {
          required: true,
          message: "Please input your name",
          trigger: "blur"
        },
        age: {
          required: true,
          message: "Please input your age",
          trigger: ["input", "blur"]
        }
      },
      phone: {
        required: true,
        message: "Please input your number",
        trigger: ["input"]
      }
    };
    function handleValidateClick(e) {
      var _a;
      e.preventDefault();
      (_a = formRef.value) == null ? void 0 : _a.validate((errors) => {
        if (!errors) {
          message.success("Valid");
        } else {
          message.error("Invalid");
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Form</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/form" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Label placement" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space class="mb-4" align="center">
						<n-radio-group v-model:value="placement" name="placement">
							<n-radio-button value="left"> Left </n-radio-button>
							<n-radio-button value="top"> Top </n-radio-button>
						</n-radio-group>

						<n-radio-group v-model:value="size" name="size">
							<n-radio-button value="small"> Small </n-radio-button>
							<n-radio-button value="medium"> Medium </n-radio-button>
							<n-radio-button value="large"> Large </n-radio-button>
						</n-radio-group>

						<n-checkbox v-model:checked="inline">Inline</n-checkbox>
						<n-checkbox v-model:checked="showLabel">Show Label</n-checkbox>
					</n-space>

					<n-form
						:model
						:label-placement="placement"
						require-mark-placement="right-hanging"
						:size="size"
						:inline="inline"
						:show-label="showLabel"
						label-width="auto"
						:style="{
							maxWidth: '640px'
						}"
					>
						<n-form-item label="Brand" path="brandValue">
							<n-input v-model:value="model.brandValue" placeholder="Brand" />
						</n-form-item>
						<n-form-item label="Model" path="modelValue">
							<n-input v-model:value="model.modelValue" placeholder="Model" />
						</n-form-item>
						<n-form-item>
							<n-button> Validate </n-button>
						</n-form-item>
					</n-form>
					`))} ${ssrInterpolate(js(`
						const size = ref<Size | undefined>("medium")
						const inline = ref(false)
						const showLabel = ref(true)
						const placement = ref<LabelPlacement | undefined>("left")
						const model = ref({
							brandValue: null,
							modelValue: null
						})
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space class="mb-4" align="center">
						<n-radio-group v-model:value="placement" name="placement">
							<n-radio-button value="left"> Left </n-radio-button>
							<n-radio-button value="top"> Top </n-radio-button>
						</n-radio-group>

						<n-radio-group v-model:value="size" name="size">
							<n-radio-button value="small"> Small </n-radio-button>
							<n-radio-button value="medium"> Medium </n-radio-button>
							<n-radio-button value="large"> Large </n-radio-button>
						</n-radio-group>

						<n-checkbox v-model:checked="inline">Inline</n-checkbox>
						<n-checkbox v-model:checked="showLabel">Show Label</n-checkbox>
					</n-space>

					<n-form
						:model
						:label-placement="placement"
						require-mark-placement="right-hanging"
						:size="size"
						:inline="inline"
						:show-label="showLabel"
						label-width="auto"
						:style="{
							maxWidth: '640px'
						}"
					>
						<n-form-item label="Brand" path="brandValue">
							<n-input v-model:value="model.brandValue" placeholder="Brand" />
						</n-form-item>
						<n-form-item label="Model" path="modelValue">
							<n-input v-model:value="model.modelValue" placeholder="Model" />
						</n-form-item>
						<n-form-item>
							<n-button> Validate </n-button>
						</n-form-item>
					</n-form>
					`)) + " " + toDisplayString(js(`
						const size = ref<Size | undefined>("medium")
						const inline = ref(false)
						const showLabel = ref(true)
						const placement = ref<LabelPlacement | undefined>("left")
						const model = ref({
							brandValue: null,
							modelValue: null
						})
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), {
              class: "mb-4",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NRadioGroup), {
                    value: placement.value,
                    "onUpdate:value": ($event) => placement.value = $event,
                    name: "placement"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NRadioButton), { value: "left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Left `);
                            } else {
                              return [
                                createTextVNode(" Left ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadioButton), { value: "top" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Top `);
                            } else {
                              return [
                                createTextVNode(" Top ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NRadioButton), { value: "left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Left ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "top" }, {
                            default: withCtx(() => [
                              createTextVNode(" Top ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NRadioGroup), {
                    value: size.value,
                    "onUpdate:value": ($event) => size.value = $event,
                    name: "size"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NRadioButton), { value: "small" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Small `);
                            } else {
                              return [
                                createTextVNode(" Small ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadioButton), { value: "medium" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Medium `);
                            } else {
                              return [
                                createTextVNode(" Medium ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadioButton), { value: "large" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Large `);
                            } else {
                              return [
                                createTextVNode(" Large ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NRadioButton), { value: "small" }, {
                            default: withCtx(() => [
                              createTextVNode(" Small ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "medium" }, {
                            default: withCtx(() => [
                              createTextVNode(" Medium ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "large" }, {
                            default: withCtx(() => [
                              createTextVNode(" Large ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: inline.value,
                    "onUpdate:checked": ($event) => inline.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Inline`);
                      } else {
                        return [
                          createTextVNode("Inline")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: showLabel.value,
                    "onUpdate:checked": ($event) => showLabel.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Show Label`);
                      } else {
                        return [
                          createTextVNode("Show Label")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NRadioGroup), {
                      value: placement.value,
                      "onUpdate:value": ($event) => placement.value = $event,
                      name: "placement"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NRadioButton), { value: "left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Left ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NRadioButton), { value: "top" }, {
                          default: withCtx(() => [
                            createTextVNode(" Top ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NRadioGroup), {
                      value: size.value,
                      "onUpdate:value": ($event) => size.value = $event,
                      name: "size"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NRadioButton), { value: "small" }, {
                          default: withCtx(() => [
                            createTextVNode(" Small ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NRadioButton), { value: "medium" }, {
                          default: withCtx(() => [
                            createTextVNode(" Medium ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NRadioButton), { value: "large" }, {
                          default: withCtx(() => [
                            createTextVNode(" Large ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NCheckbox), {
                      checked: inline.value,
                      "onUpdate:checked": ($event) => inline.value = $event
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Inline")
                      ]),
                      _: 1
                    }, 8, ["checked", "onUpdate:checked"]),
                    createVNode(unref(NCheckbox), {
                      checked: showLabel.value,
                      "onUpdate:checked": ($event) => showLabel.value = $event
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Show Label")
                      ]),
                      _: 1
                    }, 8, ["checked", "onUpdate:checked"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NForm), {
              model: model.value,
              "label-placement": placement.value,
              "require-mark-placement": "right-hanging",
              size: size.value,
              inline: inline.value,
              "show-label": showLabel.value,
              "label-width": "auto",
              style: {
                maxWidth: "640px"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Brand",
                    path: "brandValue"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: model.value.brandValue,
                          "onUpdate:value": ($event) => model.value.brandValue = $event,
                          placeholder: "Brand"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: model.value.brandValue,
                            "onUpdate:value": ($event) => model.value.brandValue = $event,
                            placeholder: "Brand"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Model",
                    path: "modelValue"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: model.value.modelValue,
                          "onUpdate:value": ($event) => model.value.modelValue = $event,
                          placeholder: "Model"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: model.value.modelValue,
                            "onUpdate:value": ($event) => model.value.modelValue = $event,
                            placeholder: "Model"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Validate `);
                            } else {
                              return [
                                createTextVNode(" Validate ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode(" Validate ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NFormItem), {
                      label: "Brand",
                      path: "brandValue"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: model.value.brandValue,
                          "onUpdate:value": ($event) => model.value.brandValue = $event,
                          placeholder: "Brand"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Model",
                      path: "modelValue"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: model.value.modelValue,
                          "onUpdate:value": ($event) => model.value.modelValue = $event,
                          placeholder: "Model"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode(" Validate ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), {
                class: "mb-4",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NRadioGroup), {
                    value: placement.value,
                    "onUpdate:value": ($event) => placement.value = $event,
                    name: "placement"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NRadioButton), { value: "left" }, {
                        default: withCtx(() => [
                          createTextVNode(" Left ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NRadioButton), { value: "top" }, {
                        default: withCtx(() => [
                          createTextVNode(" Top ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"]),
                  createVNode(unref(NRadioGroup), {
                    value: size.value,
                    "onUpdate:value": ($event) => size.value = $event,
                    name: "size"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NRadioButton), { value: "small" }, {
                        default: withCtx(() => [
                          createTextVNode(" Small ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NRadioButton), { value: "medium" }, {
                        default: withCtx(() => [
                          createTextVNode(" Medium ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NRadioButton), { value: "large" }, {
                        default: withCtx(() => [
                          createTextVNode(" Large ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"]),
                  createVNode(unref(NCheckbox), {
                    checked: inline.value,
                    "onUpdate:checked": ($event) => inline.value = $event
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Inline")
                    ]),
                    _: 1
                  }, 8, ["checked", "onUpdate:checked"]),
                  createVNode(unref(NCheckbox), {
                    checked: showLabel.value,
                    "onUpdate:checked": ($event) => showLabel.value = $event
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Show Label")
                    ]),
                    _: 1
                  }, 8, ["checked", "onUpdate:checked"])
                ]),
                _: 1
              }),
              createVNode(unref(NForm), {
                model: model.value,
                "label-placement": placement.value,
                "require-mark-placement": "right-hanging",
                size: size.value,
                inline: inline.value,
                "show-label": showLabel.value,
                "label-width": "auto",
                style: {
                  maxWidth: "640px"
                }
              }, {
                default: withCtx(() => [
                  createVNode(unref(NFormItem), {
                    label: "Brand",
                    path: "brandValue"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: model.value.brandValue,
                        "onUpdate:value": ($event) => model.value.brandValue = $event,
                        placeholder: "Brand"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), {
                    label: "Model",
                    path: "modelValue"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: model.value.modelValue,
                        "onUpdate:value": ($event) => model.value.modelValue = $event,
                        placeholder: "Model"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode(" Validate ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model", "label-placement", "size", "inline", "show-label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Rules" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-form ref="formRef" inline :label-width="80" :model="formValue" :rules :size="size">
						<n-form-item label="Name" path="user.name">
							<n-input v-model:value="formValue.user.name" placeholder="Input Name" />
						</n-form-item>
						<n-form-item label="Age" path="user.age">
							<n-input v-model:value="formValue.user.age" placeholder="Input Age" />
						</n-form-item>
						<n-form-item label="Phone" path="phone">
							<n-input v-model:value="formValue.phone" placeholder="Phone Number" />
						</n-form-item>
						<n-form-item>
							<n-button @click="handleValidateClick"> Validate </n-button>
						</n-form-item>
					</n-form>

					<pre> {{ JSON.stringify(formValue, null, 2) }} </pre>
					`))} ${ssrInterpolate(js(`
						const formRef = ref<FormInst | null>(null)
						const message = useMessage()

						const formValue = ref({
							user: {
								name: "",
								age: ""
							},
							phone: ""
						})
						const rules = {
							user: {
								name: {
									required: true,
									message: "Please input your name",
									trigger: "blur"
								},
								age: {
									required: true,
									message: "Please input your age",
									trigger: ["input", "blur"]
								}
							},
							phone: {
								required: true,
								message: "Please input your number",
								trigger: ["input"]
							}
						}
						function handleValidateClick(e: MouseEvent) {
							e.preventDefault()
							formRef.value?.validate(errors => {
								if (!errors) {
									message.success("Valid")
								} else {
									console.log(errors)
									message.error("Invalid")
								}
							})
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-form ref="formRef" inline :label-width="80" :model="formValue" :rules :size="size">
						<n-form-item label="Name" path="user.name">
							<n-input v-model:value="formValue.user.name" placeholder="Input Name" />
						</n-form-item>
						<n-form-item label="Age" path="user.age">
							<n-input v-model:value="formValue.user.age" placeholder="Input Age" />
						</n-form-item>
						<n-form-item label="Phone" path="phone">
							<n-input v-model:value="formValue.phone" placeholder="Phone Number" />
						</n-form-item>
						<n-form-item>
							<n-button @click="handleValidateClick"> Validate </n-button>
						</n-form-item>
					</n-form>

					<pre> {{ JSON.stringify(formValue, null, 2) }} </pre>
					`)) + " " + toDisplayString(js(`
						const formRef = ref<FormInst | null>(null)
						const message = useMessage()

						const formValue = ref({
							user: {
								name: "",
								age: ""
							},
							phone: ""
						})
						const rules = {
							user: {
								name: {
									required: true,
									message: "Please input your name",
									trigger: "blur"
								},
								age: {
									required: true,
									message: "Please input your age",
									trigger: ["input", "blur"]
								}
							},
							phone: {
								required: true,
								message: "Please input your number",
								trigger: ["input"]
							}
						}
						function handleValidateClick(e: MouseEvent) {
							e.preventDefault()
							formRef.value?.validate(errors => {
								if (!errors) {
									message.success("Valid")
								} else {
									console.log(errors)
									message.error("Invalid")
								}
							})
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NForm), {
              ref_key: "formRef",
              ref: formRef,
              inline: "",
              "label-width": 80,
              model: formValue.value,
              rules
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Name",
                    path: "user.name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.user.name,
                          "onUpdate:value": ($event) => formValue.value.user.name = $event,
                          placeholder: "Input Name"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.user.name,
                            "onUpdate:value": ($event) => formValue.value.user.name = $event,
                            placeholder: "Input Name"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Age",
                    path: "user.age"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.user.age,
                          "onUpdate:value": ($event) => formValue.value.user.age = $event,
                          placeholder: "Input Age"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.user.age,
                            "onUpdate:value": ($event) => formValue.value.user.age = $event,
                            placeholder: "Input Age"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), {
                    label: "Phone",
                    path: "phone"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NInput), {
                          value: formValue.value.phone,
                          "onUpdate:value": ($event) => formValue.value.phone = $event,
                          placeholder: "Phone Number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NInput), {
                            value: formValue.value.phone,
                            "onUpdate:value": ($event) => formValue.value.phone = $event,
                            placeholder: "Phone Number"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NFormItem), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { onClick: handleValidateClick }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Validate `);
                            } else {
                              return [
                                createTextVNode(" Validate ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { onClick: handleValidateClick }, {
                            default: withCtx(() => [
                              createTextVNode(" Validate ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NFormItem), {
                      label: "Name",
                      path: "user.name"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.user.name,
                          "onUpdate:value": ($event) => formValue.value.user.name = $event,
                          placeholder: "Input Name"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Age",
                      path: "user.age"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.user.age,
                          "onUpdate:value": ($event) => formValue.value.user.age = $event,
                          placeholder: "Input Age"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Phone",
                      path: "phone"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: formValue.value.phone,
                          "onUpdate:value": ($event) => formValue.value.phone = $event,
                          placeholder: "Phone Number"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { onClick: handleValidateClick }, {
                          default: withCtx(() => [
                            createTextVNode(" Validate ")
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
            }, _parent2, _scopeId));
            _push2(`<pre style="${ssrRenderStyle({ "direction": "ltr" })}"${_scopeId}> ${ssrInterpolate(JSON.stringify(formValue.value, null, 2))} </pre>`);
          } else {
            return [
              createVNode(unref(NForm), {
                ref_key: "formRef",
                ref: formRef,
                inline: "",
                "label-width": 80,
                model: formValue.value,
                rules
              }, {
                default: withCtx(() => [
                  createVNode(unref(NFormItem), {
                    label: "Name",
                    path: "user.name"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: formValue.value.user.name,
                        "onUpdate:value": ($event) => formValue.value.user.name = $event,
                        placeholder: "Input Name"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), {
                    label: "Age",
                    path: "user.age"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: formValue.value.user.age,
                        "onUpdate:value": ($event) => formValue.value.user.age = $event,
                        placeholder: "Input Age"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), {
                    label: "Phone",
                    path: "phone"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NInput), {
                        value: formValue.value.phone,
                        "onUpdate:value": ($event) => formValue.value.phone = $event,
                        placeholder: "Phone Number"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NFormItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { onClick: handleValidateClick }, {
                        default: withCtx(() => [
                          createTextVNode(" Validate ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"]),
              createVNode("pre", { style: { "direction": "ltr" } }, " " + toDisplayString(JSON.stringify(formValue.value, null, 2)) + " ", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Form-iRU6K3r4.mjs.map
