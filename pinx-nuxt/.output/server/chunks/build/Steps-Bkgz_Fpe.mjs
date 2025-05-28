import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, provide, inject, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, a as _sfc_main$s, B as Button, p as flatten, u as useConfig, U as useRtl, s as useTheme, bA as stepsLight, j as cB, g as createInjectionKey, q as resolveWrappedSlot, G as NIconSwitchTransition, h as NBaseIcon, I as resolveSlot, by as FinishedIcon, bB as ErrorIcon$1, t as throwError, v as createKey, x as useThemeClass, z as call, k as cM, l as c$1, m as cE, D as iconSwitchTransition, n as cNotM } from './server.mjs';
import { g as getSlot } from './get-slot-BIpdyb5h.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import { N as NButtonGroup } from './ButtonGroup-BgUV4cXl.mjs';
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

const style = cB("steps", `
 width: 100%;
 display: flex;
`, [cB("step", `
 position: relative;
 display: flex;
 flex: 1;
 `, [cM("disabled", "cursor: not-allowed"), cM("clickable", `
 cursor: pointer;
 `), c$1("&:last-child", [cB("step-splitor", "display: none;")])]), cB("step-splitor", `
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("step-content", "flex: 1;", [cB("step-content-header", `
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [cE("title", `
 white-space: nowrap;
 flex: 0;
 `)]), cE("description", `
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]), cB("step-indicator", `
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `, [cB("step-indicator-slot", `
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `, [cE("index", `
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `, [iconSwitchTransition()]), cB("icon", `
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `, [iconSwitchTransition()]), cB("base-icon", `
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `, [iconSwitchTransition()])])]), cM("vertical", "flex-direction: column;", [cNotM("show-description", [c$1(">", [cB("step", "padding-bottom: 8px;")])]), c$1(">", [cB("step", "margin-bottom: 16px;", [c$1("&:last-child", "margin-bottom: 0;"), c$1(">", [cB("step-indicator", [c$1(">", [cB("step-splitor", `
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]), cB("step-content", [cE("description", "margin-top: 8px;")])])])])])]);
function stepWithIndex(step, i) {
  if (typeof step !== "object" || step === null || Array.isArray(step)) {
    return null;
  }
  if (!step.props) step.props = {};
  step.props.internalIndex = i + 1;
  return step;
}
function stepsWithIndex(steps) {
  return steps.map((step, i) => stepWithIndex(step, i));
}
const stepsProps = Object.assign(Object.assign({}, useTheme.props), {
  current: Number,
  status: {
    type: String,
    default: "process"
  },
  size: {
    type: String,
    default: "medium"
  },
  vertical: Boolean,
  "onUpdate:current": [Function, Array],
  onUpdateCurrent: [Function, Array]
});
const stepsInjectionKey = createInjectionKey("n-steps");
const NSteps = defineComponent({
  name: "Steps",
  props: stepsProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("Steps", mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme("Steps", "-steps", style, stepsLight, props, mergedClsPrefixRef);
    provide(stepsInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      mergedClsPrefixRef,
      stepsSlots: slots
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-steps`, this.rtlEnabled && `${mergedClsPrefix}-steps--rtl`, this.vertical && `${mergedClsPrefix}-steps--vertical`]
    }, stepsWithIndex(flatten(getSlot(this))));
  }
});
const stepProps = {
  status: String,
  title: String,
  description: String,
  disabled: Boolean,
  // index will be filled by parent steps, not user
  internalIndex: {
    type: Number,
    default: 0
  }
};
const NStep = defineComponent({
  name: "Step",
  props: stepProps,
  slots: Object,
  setup(props) {
    const NSteps2 = inject(stepsInjectionKey, null);
    if (!NSteps2) throwError("step", "`n-step` must be placed inside `n-steps`.");
    const {
      inlineThemeDisabled
    } = useConfig();
    const {
      props: stepsProps2,
      mergedThemeRef,
      mergedClsPrefixRef,
      stepsSlots
    } = NSteps2;
    const verticalRef = computed(() => {
      return stepsProps2.vertical;
    });
    const mergedStatusRef = computed(() => {
      const {
        status
      } = props;
      if (status) {
        return status;
      } else {
        const {
          internalIndex
        } = props;
        const {
          current
        } = stepsProps2;
        if (current === void 0) return "process";
        if (internalIndex < current) {
          return "finish";
        } else if (internalIndex === current) {
          return stepsProps2.status || "process";
        } else if (internalIndex > current) {
          return "wait";
        }
      }
      return "process";
    });
    const cssVarsRef = computed(() => {
      const {
        value: status
      } = mergedStatusRef;
      const {
        size
      } = stepsProps2;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          stepHeaderFontWeight,
          [createKey("stepHeaderFontSize", size)]: stepHeaderFontSize,
          [createKey("indicatorIndexFontSize", size)]: indicatorIndexFontSize,
          [createKey("indicatorSize", size)]: indicatorSize,
          [createKey("indicatorIconSize", size)]: indicatorIconSize,
          [createKey("indicatorTextColor", status)]: indicatorTextColor,
          [createKey("indicatorBorderColor", status)]: indicatorBorderColor,
          [createKey("headerTextColor", status)]: headerTextColor,
          [createKey("splitorColor", status)]: splitorColor,
          [createKey("indicatorColor", status)]: indicatorColor,
          [createKey("descriptionTextColor", status)]: descriptionTextColor
        }
      } = mergedThemeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-description-text-color": descriptionTextColor,
        "--n-header-text-color": headerTextColor,
        "--n-indicator-border-color": indicatorBorderColor,
        "--n-indicator-color": indicatorColor,
        "--n-indicator-icon-size": indicatorIconSize,
        "--n-indicator-index-font-size": indicatorIndexFontSize,
        "--n-indicator-size": indicatorSize,
        "--n-indicator-text-color": indicatorTextColor,
        "--n-splitor-color": splitorColor,
        "--n-step-header-font-size": stepHeaderFontSize,
        "--n-step-header-font-weight": stepHeaderFontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("step", computed(() => {
      const {
        value: status
      } = mergedStatusRef;
      const {
        size
      } = stepsProps2;
      return `${status[0]}${size[0]}`;
    }), cssVarsRef, stepsProps2) : void 0;
    const handleStepClick = computed(() => {
      if (props.disabled) return void 0;
      const {
        onUpdateCurrent,
        "onUpdate:current": _onUpdateCurrent
      } = stepsProps2;
      return onUpdateCurrent || _onUpdateCurrent ? () => {
        if (onUpdateCurrent) {
          call(onUpdateCurrent, props.internalIndex);
        }
        if (_onUpdateCurrent) {
          call(_onUpdateCurrent, props.internalIndex);
        }
      } : void 0;
    });
    return {
      stepsSlots,
      mergedClsPrefix: mergedClsPrefixRef,
      vertical: verticalRef,
      mergedStatus: mergedStatusRef,
      handleStepClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      onRender,
      handleStepClick,
      disabled
    } = this;
    const descriptionNode = resolveWrappedSlot(this.$slots.default, (children) => {
      const mergedDescription = children || this.description;
      if (mergedDescription) {
        return h("div", {
          class: `${mergedClsPrefix}-step-content__description`
        }, mergedDescription);
      }
      return null;
    });
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-step`, disabled && `${mergedClsPrefix}-step--disabled`, !disabled && handleStepClick && `${mergedClsPrefix}-step--clickable`, this.themeClass, descriptionNode && `${mergedClsPrefix}-step--show-description`, `${mergedClsPrefix}-step--${this.mergedStatus}-status`],
      style: this.cssVars,
      onClick: handleStepClick
    }, h("div", {
      class: `${mergedClsPrefix}-step-indicator`
    }, h("div", {
      class: `${mergedClsPrefix}-step-indicator-slot`
    }, h(NIconSwitchTransition, null, {
      default: () => {
        return resolveWrappedSlot(this.$slots.icon, (icon) => {
          const {
            mergedStatus,
            stepsSlots
          } = this;
          return !(mergedStatus === "finish" || mergedStatus === "error") ? icon || h("div", {
            key: this.internalIndex,
            class: `${mergedClsPrefix}-step-indicator-slot__index`
          }, this.internalIndex) : mergedStatus === "finish" ? h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            key: "finish"
          }, {
            default: () => resolveSlot(stepsSlots["finish-icon"], () => [h(FinishedIcon, null)])
          }) : mergedStatus === "error" ? h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            key: "error"
          }, {
            default: () => resolveSlot(stepsSlots["error-icon"], () => [h(ErrorIcon$1, null)])
          }) : null;
        });
      }
    })), this.vertical ? h("div", {
      class: `${mergedClsPrefix}-step-splitor`
    }) : null), h("div", {
      class: `${mergedClsPrefix}-step-content`
    }, h("div", {
      class: `${mergedClsPrefix}-step-content-header`
    }, h("div", {
      class: `${mergedClsPrefix}-step-content-header__title`
    }, resolveSlot(this.$slots.title, () => [this.title])), !this.vertical ? h("div", {
      class: `${mergedClsPrefix}-step-splitor`
    }) : null), descriptionNode));
  }
});
const ExternalIcon = "tabler:external-link";
const ArrowBack = "ion:arrow-back";
const ArrowForward = "ion:arrow-forward";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Steps",
  __ssrInlineRender: true,
  setup(__props) {
    const currentRef = ref(1);
    const currentStatus = ref("process");
    function next() {
      if (currentRef.value === null) currentRef.value = 1;
      else if (currentRef.value >= 4) currentRef.value = null;
      else currentRef.value++;
    }
    function prev() {
      if (currentRef.value === 0) currentRef.value = null;
      else if (currentRef.value === null) currentRef.value = 4;
      else currentRef.value--;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-3f0a7ec6><div class="page-header" data-v-3f0a7ec6><div class="title" data-v-3f0a7ec6>Steps</div><div class="links" data-v-3f0a7ec6><a href="https://www.naiveui.com/en-US/light/components/steps" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-3f0a7ec6>`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-3f0a7ec6>`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-space class="mb-4">
							<n-button-group>
								<n-button @click="prev">
									<template #icon>
										<n-icon>
											<arrow-back />
										</n-icon>
									</template>
								</n-button>
								<n-button @click="next">
									<template #icon>
										<n-icon>
											<arrow-forward />
										</n-icon>
									</template>
								</n-button>
							</n-button-group>
							<n-radio-group v-model:value="currentStatus" size="medium" name="basic">
								<n-radio-button value="error">Error</n-radio-button>
								<n-radio-button value="process">Process</n-radio-button>
								<n-radio-button value="wait">Wait</n-radio-button>
								<n-radio-button value="finish">Finish</n-radio-button>
							</n-radio-group>
						</n-space>

						<n-steps :current="currentRef as number" :status="currentStatus">
							<n-step
								title="I Me Mine"
								description="All through the day, I me mine I me mine, I me mine"
							/>
							<n-step
								title="Let It Be"
								description="When I find myself in times of trouble Mother Mary comes to me"
							/>
							<n-step
								title="Come Together"
								description="Here come old flat top He come grooving up slowly"
							/>
							<n-step
								title="Something"
								description="Something in the way she moves Attracts me like no other lover"
							/>
						</n-steps>
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { ArrowBack, ArrowForward } from "@vicons/ionicons5"
						import { ref } from "vue"

						const currentRef = ref<
umber | null>(1)
						const currentStatus = ref<StepsProps["status"]>("process")
						function next() {
							if (currentRef.value === null) currentRef.value = 1
							else if (currentRef.value >= 4) currentRef.value = null
							else currentRef.value++
						}
						function prev() {
							if (currentRef.value === 0) currentRef.value = null
							else if (currentRef.value === null) currentRef.value = 4
							else currentRef.value--
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-space class="mb-4">
							<n-button-group>
								<n-button @click="prev">
									<template #icon>
										<n-icon>
											<arrow-back />
										</n-icon>
									</template>
								</n-button>
								<n-button @click="next">
									<template #icon>
										<n-icon>
											<arrow-forward />
										</n-icon>
									</template>
								</n-button>
							</n-button-group>
							<n-radio-group v-model:value="currentStatus" size="medium" name="basic">
								<n-radio-button value="error">Error</n-radio-button>
								<n-radio-button value="process">Process</n-radio-button>
								<n-radio-button value="wait">Wait</n-radio-button>
								<n-radio-button value="finish">Finish</n-radio-button>
							</n-radio-group>
						</n-space>

						<n-steps :current="currentRef as number" :status="currentStatus">
							<n-step
								title="I Me Mine"
								description="All through the day, I me mine I me mine, I me mine"
							/>
							<n-step
								title="Let It Be"
								description="When I find myself in times of trouble Mother Mary comes to me"
							/>
							<n-step
								title="Come Together"
								description="Here come old flat top He come grooving up slowly"
							/>
							<n-step
								title="Something"
								description="Something in the way she moves Attracts me like no other lover"
							/>
						</n-steps>
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { ArrowBack, ArrowForward } from "@vicons/ionicons5"
						import { ref } from "vue"

						const currentRef = ref<
umber | null>(1)
						const currentStatus = ref<StepsProps["status"]>("process")
						function next() {
							if (currentRef.value === null) currentRef.value = 1
							else if (currentRef.value >= 4) currentRef.value = null
							else currentRef.value++
						}
						function prev() {
							if (currentRef.value === 0) currentRef.value = null
							else if (currentRef.value === null) currentRef.value = 4
							else currentRef.value--
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
                  _push3(ssrRenderComponent(unref(NSpace), { class: "mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NButtonGroup), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Button), { onClick: prev }, {
                                icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$s, { name: ArrowBack }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$s, { name: ArrowBack })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Button), { onClick: next }, {
                                icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$s, { name: ArrowForward }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$s, { name: ArrowForward })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Button), { onClick: prev }, {
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, { name: ArrowBack })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Button), { onClick: next }, {
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, { name: ArrowForward })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadioGroup), {
                          value: currentStatus.value,
                          "onUpdate:value": ($event) => currentStatus.value = $event,
                          size: "medium",
                          name: "basic"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NRadioButton), { value: "error" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Error`);
                                  } else {
                                    return [
                                      createTextVNode("Error")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NRadioButton), { value: "process" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Process`);
                                  } else {
                                    return [
                                      createTextVNode("Process")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NRadioButton), { value: "wait" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Wait`);
                                  } else {
                                    return [
                                      createTextVNode("Wait")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NRadioButton), { value: "finish" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Finish`);
                                  } else {
                                    return [
                                      createTextVNode("Finish")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NRadioButton), { value: "error" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Error")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NRadioButton), { value: "process" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Process")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NRadioButton), { value: "wait" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Wait")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NRadioButton), { value: "finish" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Finish")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NButtonGroup), null, {
                            default: withCtx(() => [
                              createVNode(unref(Button), { onClick: prev }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, { name: ArrowBack })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Button), { onClick: next }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, { name: ArrowForward })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioGroup), {
                            value: currentStatus.value,
                            "onUpdate:value": ($event) => currentStatus.value = $event,
                            size: "medium",
                            name: "basic"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NRadioButton), { value: "error" }, {
                                default: withCtx(() => [
                                  createTextVNode("Error")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NRadioButton), { value: "process" }, {
                                default: withCtx(() => [
                                  createTextVNode("Process")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NRadioButton), { value: "wait" }, {
                                default: withCtx(() => [
                                  createTextVNode("Wait")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NRadioButton), { value: "finish" }, {
                                default: withCtx(() => [
                                  createTextVNode("Finish")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSteps), {
                    current: currentRef.value,
                    status: currentStatus.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NStep), {
                          title: "I Me Mine",
                          description: "All through the day, I me mine I me mine, I me mine"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NStep), {
                          title: "Let It Be",
                          description: "When I find myself in times of trouble Mother Mary comes to me"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NStep), {
                          title: "Come Together",
                          description: "Here come old flat top He come grooving up slowly"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NStep), {
                          title: "Something",
                          description: "Something in the way she moves Attracts me like no other lover"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NStep), {
                            title: "I Me Mine",
                            description: "All through the day, I me mine I me mine, I me mine"
                          }),
                          createVNode(unref(NStep), {
                            title: "Let It Be",
                            description: "When I find myself in times of trouble Mother Mary comes to me"
                          }),
                          createVNode(unref(NStep), {
                            title: "Come Together",
                            description: "Here come old flat top He come grooving up slowly"
                          }),
                          createVNode(unref(NStep), {
                            title: "Something",
                            description: "Something in the way she moves Attracts me like no other lover"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSpace), { class: "mb-4" }, {
                      default: withCtx(() => [
                        createVNode(unref(NButtonGroup), null, {
                          default: withCtx(() => [
                            createVNode(unref(Button), { onClick: prev }, {
                              icon: withCtx(() => [
                                createVNode(_sfc_main$s, { name: ArrowBack })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Button), { onClick: next }, {
                              icon: withCtx(() => [
                                createVNode(_sfc_main$s, { name: ArrowForward })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NRadioGroup), {
                          value: currentStatus.value,
                          "onUpdate:value": ($event) => currentStatus.value = $event,
                          size: "medium",
                          name: "basic"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NRadioButton), { value: "error" }, {
                              default: withCtx(() => [
                                createTextVNode("Error")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NRadioButton), { value: "process" }, {
                              default: withCtx(() => [
                                createTextVNode("Process")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NRadioButton), { value: "wait" }, {
                              default: withCtx(() => [
                                createTextVNode("Wait")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NRadioButton), { value: "finish" }, {
                              default: withCtx(() => [
                                createTextVNode("Finish")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NSteps), {
                      current: currentRef.value,
                      status: currentStatus.value
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NStep), {
                          title: "I Me Mine",
                          description: "All through the day, I me mine I me mine, I me mine"
                        }),
                        createVNode(unref(NStep), {
                          title: "Let It Be",
                          description: "When I find myself in times of trouble Mother Mary comes to me"
                        }),
                        createVNode(unref(NStep), {
                          title: "Come Together",
                          description: "Here come old flat top He come grooving up slowly"
                        }),
                        createVNode(unref(NStep), {
                          title: "Something",
                          description: "Something in the way she moves Attracts me like no other lover"
                        })
                      ]),
                      _: 1
                    }, 8, ["current", "status"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), { class: "mb-4" }, {
                    default: withCtx(() => [
                      createVNode(unref(NButtonGroup), null, {
                        default: withCtx(() => [
                          createVNode(unref(Button), { onClick: prev }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$s, { name: ArrowBack })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: next }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$s, { name: ArrowForward })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NRadioGroup), {
                        value: currentStatus.value,
                        "onUpdate:value": ($event) => currentStatus.value = $event,
                        size: "medium",
                        name: "basic"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NRadioButton), { value: "error" }, {
                            default: withCtx(() => [
                              createTextVNode("Error")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "process" }, {
                            default: withCtx(() => [
                              createTextVNode("Process")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "wait" }, {
                            default: withCtx(() => [
                              createTextVNode("Wait")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "finish" }, {
                            default: withCtx(() => [
                              createTextVNode("Finish")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NSteps), {
                    current: currentRef.value,
                    status: currentStatus.value
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NStep), {
                        title: "I Me Mine",
                        description: "All through the day, I me mine I me mine, I me mine"
                      }),
                      createVNode(unref(NStep), {
                        title: "Let It Be",
                        description: "When I find myself in times of trouble Mother Mary comes to me"
                      }),
                      createVNode(unref(NStep), {
                        title: "Come Together",
                        description: "Here come old flat top He come grooving up slowly"
                      }),
                      createVNode(unref(NStep), {
                        title: "Something",
                        description: "Something in the way she moves Attracts me like no other lover"
                      })
                    ]),
                    _: 1
                  }, 8, ["current", "status"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Vertical" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-steps vertical :current="current as number" :status="currentStatus">
							<n-step
								title="I Me Mine"
								description="All through the day, I me mine I me mine, I me mine"
							/>
							<n-step
								title="Let It Be"
								description="When I find myself in times of trouble Mother Mary comes to me"
							/>
							<n-step title="Break" />
							<n-step
								title="Come Together"
								description="Here come old flat top He come grooving up slowly"
							/>
							<n-step
								title="Something"
								description="Something in the way she moves Attracts me like no other lover"
							/>
						</n-steps>
						<n-space>
							<n-button-group>
								<n-button @click="prev">
									<template #icon>
										<n-icon>
											<arrow-back />
										</n-icon>
									</template>
								</n-button>
								<n-button @click="next">
									<template #icon>
										<n-icon>
											<arrow-forward />
										</n-icon>
									</template>
								</n-button>
							</n-button-group>
							<n-radio-group v-model:value="currentStatus" size="medium" name="vertical">
								<n-radio-button value="error">Error</n-radio-button>
								<n-radio-button value="process">Process</n-radio-button>
								<n-radio-button value="wait">Wait</n-radio-button>
								<n-radio-button value="finish">Finish</n-radio-button>
							</n-radio-group>
						</n-space>
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { ArrowBack, ArrowForward } from "@vicons/ionicons5"
						import { ref } from "vue"

						const currentRef = ref<
umber | null>(1)
						const currentStatus = ref<StepsProps["status"]>("process")
						function next() {
							if (currentRef.value === null) currentRef.value = 1
							else if (currentRef.value >= 4) currentRef.value = null
							else currentRef.value++
						}
						function prev() {
							if (currentRef.value === 0) currentRef.value = null
							else if (currentRef.value === null) currentRef.value = 4
							else currentRef.value--
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-steps vertical :current="current as number" :status="currentStatus">
							<n-step
								title="I Me Mine"
								description="All through the day, I me mine I me mine, I me mine"
							/>
							<n-step
								title="Let It Be"
								description="When I find myself in times of trouble Mother Mary comes to me"
							/>
							<n-step title="Break" />
							<n-step
								title="Come Together"
								description="Here come old flat top He come grooving up slowly"
							/>
							<n-step
								title="Something"
								description="Something in the way she moves Attracts me like no other lover"
							/>
						</n-steps>
						<n-space>
							<n-button-group>
								<n-button @click="prev">
									<template #icon>
										<n-icon>
											<arrow-back />
										</n-icon>
									</template>
								</n-button>
								<n-button @click="next">
									<template #icon>
										<n-icon>
											<arrow-forward />
										</n-icon>
									</template>
								</n-button>
							</n-button-group>
							<n-radio-group v-model:value="currentStatus" size="medium" name="vertical">
								<n-radio-button value="error">Error</n-radio-button>
								<n-radio-button value="process">Process</n-radio-button>
								<n-radio-button value="wait">Wait</n-radio-button>
								<n-radio-button value="finish">Finish</n-radio-button>
							</n-radio-group>
						</n-space>
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { ArrowBack, ArrowForward } from "@vicons/ionicons5"
						import { ref } from "vue"

						const currentRef = ref<
umber | null>(1)
						const currentStatus = ref<StepsProps["status"]>("process")
						function next() {
							if (currentRef.value === null) currentRef.value = 1
							else if (currentRef.value >= 4) currentRef.value = null
							else currentRef.value++
						}
						function prev() {
							if (currentRef.value === 0) currentRef.value = null
							else if (currentRef.value === null) currentRef.value = 4
							else currentRef.value--
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
                  _push3(ssrRenderComponent(unref(NSteps), {
                    vertical: "",
                    current: currentRef.value,
                    status: currentStatus.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NStep), {
                          title: "I Me Mine",
                          description: "All through the day, I me mine I me mine, I me mine"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NStep), {
                          title: "Let It Be",
                          description: "When I find myself in times of trouble Mother Mary comes to me"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NStep), { title: "Break" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NStep), {
                          title: "Come Together",
                          description: "Here come old flat top He come grooving up slowly"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NStep), {
                          title: "Something",
                          description: "Something in the way she moves Attracts me like no other lover"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NStep), {
                            title: "I Me Mine",
                            description: "All through the day, I me mine I me mine, I me mine"
                          }),
                          createVNode(unref(NStep), {
                            title: "Let It Be",
                            description: "When I find myself in times of trouble Mother Mary comes to me"
                          }),
                          createVNode(unref(NStep), { title: "Break" }),
                          createVNode(unref(NStep), {
                            title: "Come Together",
                            description: "Here come old flat top He come grooving up slowly"
                          }),
                          createVNode(unref(NStep), {
                            title: "Something",
                            description: "Something in the way she moves Attracts me like no other lover"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NButtonGroup), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Button), { onClick: prev }, {
                                icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$s, { name: ArrowBack }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$s, { name: ArrowBack })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Button), { onClick: next }, {
                                icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$s, { name: ArrowForward }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$s, { name: ArrowForward })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Button), { onClick: prev }, {
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, { name: ArrowBack })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Button), { onClick: next }, {
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, { name: ArrowForward })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadioGroup), {
                          value: currentStatus.value,
                          "onUpdate:value": ($event) => currentStatus.value = $event,
                          size: "medium",
                          name: "vertical"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NRadioButton), { value: "error" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Error`);
                                  } else {
                                    return [
                                      createTextVNode("Error")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NRadioButton), { value: "process" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Process`);
                                  } else {
                                    return [
                                      createTextVNode("Process")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NRadioButton), { value: "wait" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Wait`);
                                  } else {
                                    return [
                                      createTextVNode("Wait")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(NRadioButton), { value: "finish" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Finish`);
                                  } else {
                                    return [
                                      createTextVNode("Finish")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NRadioButton), { value: "error" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Error")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NRadioButton), { value: "process" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Process")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NRadioButton), { value: "wait" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Wait")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(NRadioButton), { value: "finish" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Finish")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NButtonGroup), null, {
                            default: withCtx(() => [
                              createVNode(unref(Button), { onClick: prev }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, { name: ArrowBack })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Button), { onClick: next }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, { name: ArrowForward })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioGroup), {
                            value: currentStatus.value,
                            "onUpdate:value": ($event) => currentStatus.value = $event,
                            size: "medium",
                            name: "vertical"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NRadioButton), { value: "error" }, {
                                default: withCtx(() => [
                                  createTextVNode("Error")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NRadioButton), { value: "process" }, {
                                default: withCtx(() => [
                                  createTextVNode("Process")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NRadioButton), { value: "wait" }, {
                                default: withCtx(() => [
                                  createTextVNode("Wait")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NRadioButton), { value: "finish" }, {
                                default: withCtx(() => [
                                  createTextVNode("Finish")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSteps), {
                      vertical: "",
                      current: currentRef.value,
                      status: currentStatus.value
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NStep), {
                          title: "I Me Mine",
                          description: "All through the day, I me mine I me mine, I me mine"
                        }),
                        createVNode(unref(NStep), {
                          title: "Let It Be",
                          description: "When I find myself in times of trouble Mother Mary comes to me"
                        }),
                        createVNode(unref(NStep), { title: "Break" }),
                        createVNode(unref(NStep), {
                          title: "Come Together",
                          description: "Here come old flat top He come grooving up slowly"
                        }),
                        createVNode(unref(NStep), {
                          title: "Something",
                          description: "Something in the way she moves Attracts me like no other lover"
                        })
                      ]),
                      _: 1
                    }, 8, ["current", "status"]),
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(NButtonGroup), null, {
                          default: withCtx(() => [
                            createVNode(unref(Button), { onClick: prev }, {
                              icon: withCtx(() => [
                                createVNode(_sfc_main$s, { name: ArrowBack })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Button), { onClick: next }, {
                              icon: withCtx(() => [
                                createVNode(_sfc_main$s, { name: ArrowForward })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NRadioGroup), {
                          value: currentStatus.value,
                          "onUpdate:value": ($event) => currentStatus.value = $event,
                          size: "medium",
                          name: "vertical"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NRadioButton), { value: "error" }, {
                              default: withCtx(() => [
                                createTextVNode("Error")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NRadioButton), { value: "process" }, {
                              default: withCtx(() => [
                                createTextVNode("Process")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NRadioButton), { value: "wait" }, {
                              default: withCtx(() => [
                                createTextVNode("Wait")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NRadioButton), { value: "finish" }, {
                              default: withCtx(() => [
                                createTextVNode("Finish")
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NSteps), {
                    vertical: "",
                    current: currentRef.value,
                    status: currentStatus.value
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NStep), {
                        title: "I Me Mine",
                        description: "All through the day, I me mine I me mine, I me mine"
                      }),
                      createVNode(unref(NStep), {
                        title: "Let It Be",
                        description: "When I find myself in times of trouble Mother Mary comes to me"
                      }),
                      createVNode(unref(NStep), { title: "Break" }),
                      createVNode(unref(NStep), {
                        title: "Come Together",
                        description: "Here come old flat top He come grooving up slowly"
                      }),
                      createVNode(unref(NStep), {
                        title: "Something",
                        description: "Something in the way she moves Attracts me like no other lover"
                      })
                    ]),
                    _: 1
                  }, 8, ["current", "status"]),
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(NButtonGroup), null, {
                        default: withCtx(() => [
                          createVNode(unref(Button), { onClick: prev }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$s, { name: ArrowBack })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: next }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$s, { name: ArrowForward })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NRadioGroup), {
                        value: currentStatus.value,
                        "onUpdate:value": ($event) => currentStatus.value = $event,
                        size: "medium",
                        name: "vertical"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NRadioButton), { value: "error" }, {
                            default: withCtx(() => [
                              createTextVNode("Error")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "process" }, {
                            default: withCtx(() => [
                              createTextVNode("Process")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "wait" }, {
                            default: withCtx(() => [
                              createTextVNode("Wait")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NRadioButton), { value: "finish" }, {
                            default: withCtx(() => [
                              createTextVNode("Finish")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["value", "onUpdate:value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Steps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Steps = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f0a7ec6"]]);

export { Steps as default };
//# sourceMappingURL=Steps-Bkgz_Fpe.mjs.map
