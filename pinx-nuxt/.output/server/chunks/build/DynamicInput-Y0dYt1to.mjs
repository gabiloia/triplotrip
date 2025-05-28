import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, h, inject, toRef, computed, provide, isProxy, toRaw, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$s, aW as NText, B as Button, I as resolveSlot, h as NBaseIcon, R as resolveSlotWithTypedProps, u as useConfig, Q as formItemInjectionKey, s as useTheme, c0 as dynamicInputLight, j as cB, g as createInjectionKey, U as useRtl, x as useThemeClass, T as useLocale, m as cE, l as c$1, k as cM, z as call } from './server.mjs';
import { createId } from 'seemly';
import { useMergedState } from 'vooks';
import { N as NInput } from './Input-DOxGe8j0.mjs';
import { A as AddIcon } from './Add-niv5NbQA.mjs';
import { N as NButtonGroup } from './ButtonGroup-BgUV4cXl.mjs';
import { N as NInputNumber, R as RemoveIcon } from './InputNumber-Cvi2mysZ.mjs';
import { A as ArrowDownIcon } from './ArrowDown-CAZ30rud.mjs';
import { N as NSelect } from './Select-CJatCJlw.mjs';
import { N as NCheckbox } from './Checkbox-kHPptutx.mjs';
import './LtrContext-DmPOw2ck.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
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
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';
import './Selection-7aS0-4xx.mjs';

const ArrowUpIcon = defineComponent({
  name: "ArrowUp",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, h("g", {
      fill: "none"
    }, h("path", {
      d: "M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",
      fill: "currentColor"
    })));
  }
});
const dynamicInputInjectionKey = createInjectionKey("n-dynamic-input");
const NDynamicInputInputPreset = defineComponent({
  name: "DynamicInputInputPreset",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    disabled: Boolean,
    parentPath: String,
    path: String,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup() {
    const {
      mergedThemeRef,
      placeholderRef
    } = inject(dynamicInputInjectionKey);
    return {
      mergedTheme: mergedThemeRef,
      placeholder: placeholderRef
    };
  },
  render() {
    const {
      mergedTheme,
      placeholder,
      value,
      clsPrefix,
      onUpdateValue,
      disabled
    } = this;
    return h("div", {
      class: `${clsPrefix}-dynamic-input-preset-input`
    }, h(NInput, {
      theme: mergedTheme.peers.Input,
      "theme-overrides": mergedTheme.peerOverrides.Input,
      value,
      placeholder,
      onUpdateValue,
      disabled
    }));
  }
});
const NDynamicInputPairPreset = defineComponent({
  name: "DynamicInputPairPreset",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: Object,
      default: () => ({
        key: "",
        value: ""
      })
    },
    disabled: Boolean,
    parentPath: String,
    path: String,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      mergedThemeRef,
      keyPlaceholderRef,
      valuePlaceholderRef
    } = inject(dynamicInputInjectionKey);
    return {
      mergedTheme: mergedThemeRef,
      keyPlaceholder: keyPlaceholderRef,
      valuePlaceholder: valuePlaceholderRef,
      handleKeyInput(key) {
        props.onUpdateValue({
          key,
          value: props.value.value
        });
      },
      handleValueInput(value) {
        props.onUpdateValue({
          key: props.value.key,
          value
        });
      }
    };
  },
  render() {
    const {
      mergedTheme,
      keyPlaceholder,
      valuePlaceholder,
      value,
      clsPrefix,
      disabled
    } = this;
    return h("div", {
      class: `${clsPrefix}-dynamic-input-preset-pair`
    }, h(NInput, {
      theme: mergedTheme.peers.Input,
      "theme-overrides": mergedTheme.peerOverrides.Input,
      value: value.key,
      class: `${clsPrefix}-dynamic-input-pair-input`,
      placeholder: keyPlaceholder,
      onUpdateValue: this.handleKeyInput,
      disabled
    }), h(NInput, {
      theme: mergedTheme.peers.Input,
      "theme-overrides": mergedTheme.peerOverrides.Input,
      value: value.value,
      class: `${clsPrefix}-dynamic-input-pair-input`,
      placeholder: valuePlaceholder,
      onUpdateValue: this.handleValueInput,
      disabled
    }));
  }
});
const style = cB("dynamic-input", {
  width: "100%"
}, [cB("dynamic-input-item", `
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `, [cB("dynamic-input-preset-input", {
  flex: 1,
  alignItems: "center"
}), cB("dynamic-input-preset-pair", `
 flex: 1;
 display: flex;
 align-items: center;
 `, [cB("dynamic-input-pair-input", [c$1("&:first-child", {
  "margin-right": "12px"
})])]), cE("action", `
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `, [cM("icon", {
  cursor: "pointer"
})]), c$1("&:last-child", {
  marginBottom: 0
})]), cB("form-item", `
 padding-top: 0 !important;
 margin-right: 0 !important;
 `, [cB("form-item-blank", {
  paddingTop: "0 !important"
})])]);
const globalDataKeyMap = /* @__PURE__ */ new WeakMap();
const dynamicInputProps = Object.assign(Object.assign({}, useTheme.props), {
  max: Number,
  min: {
    type: Number,
    default: 0
  },
  value: Array,
  // TODO: make it robust for different types
  defaultValue: {
    type: Array,
    default: () => []
  },
  preset: {
    type: String,
    default: "input"
  },
  keyField: String,
  itemClass: String,
  itemStyle: [String, Object],
  // for preset pair
  keyPlaceholder: {
    type: String,
    default: ""
  },
  valuePlaceholder: {
    type: String,
    default: ""
  },
  // for preset input
  placeholder: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  showSortButton: Boolean,
  createButtonProps: Object,
  onCreate: Function,
  onRemove: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  // deprecated
  onClear: Function,
  onInput: [Function, Array]
});
const NDynamicInput = defineComponent({
  name: "DynamicInput",
  props: dynamicInputProps,
  setup(props, {
    slots
  }) {
    const {
      mergedComponentPropsRef,
      mergedClsPrefixRef,
      mergedRtlRef,
      inlineThemeDisabled
    } = useConfig();
    const NFormItem = inject(formItemInjectionKey, null);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const themeRef = useTheme("DynamicInput", "-dynamic-input", style, dynamicInputLight, props, mergedClsPrefixRef);
    const insertionDisabledRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (Array.isArray(mergedValue)) {
        const {
          max
        } = props;
        return max !== void 0 && mergedValue.length >= max;
      }
      return false;
    });
    const removeDisabledRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (Array.isArray(mergedValue)) return mergedValue.length <= props.min;
      return true;
    });
    const buttonSizeRef = computed(() => {
      var _a, _b;
      return (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.DynamicInput) === null || _b === void 0 ? void 0 : _b.buttonSize;
    });
    function doUpdateValue(value) {
      const {
        onInput,
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      if (onInput) call(onInput, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      if (onUpdateValue) call(onUpdateValue, value);
      uncontrolledValueRef.value = value;
    }
    function ensureKey(value, index) {
      if (value === void 0 || value === null) return index;
      if (typeof value !== "object") return index;
      const rawValue = isProxy(value) ? toRaw(value) : value;
      let key = globalDataKeyMap.get(rawValue);
      if (key === void 0) {
        globalDataKeyMap.set(rawValue, key = createId());
      }
      return key;
    }
    function handleValueChange(index, value) {
      const {
        value: mergedValue
      } = mergedValueRef;
      const newValue = Array.from(mergedValue !== null && mergedValue !== void 0 ? mergedValue : []);
      const originalItem = newValue[index];
      newValue[index] = value;
      if (originalItem && value && typeof originalItem === "object" && typeof value === "object") {
        const rawOriginal = isProxy(originalItem) ? toRaw(originalItem) : originalItem;
        const rawNew = isProxy(value) ? toRaw(value) : value;
        const originalKey = globalDataKeyMap.get(rawOriginal);
        if (originalKey !== void 0) {
          globalDataKeyMap.set(rawNew, originalKey);
        }
      }
      doUpdateValue(newValue);
    }
    function handleCreateClick() {
      createItem(-1);
    }
    function createItem(index) {
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        onCreate
      } = props;
      const newValue = Array.from(mergedValue !== null && mergedValue !== void 0 ? mergedValue : []);
      if (onCreate) {
        newValue.splice(index + 1, 0, onCreate(index + 1));
        doUpdateValue(newValue);
      } else if (slots.default) {
        newValue.splice(index + 1, 0, null);
        doUpdateValue(newValue);
      } else {
        switch (props.preset) {
          case "input":
            newValue.splice(index + 1, 0, "");
            doUpdateValue(newValue);
            break;
          case "pair":
            newValue.splice(index + 1, 0, {
              key: "",
              value: ""
            });
            doUpdateValue(newValue);
            break;
        }
      }
    }
    function remove(index) {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!Array.isArray(mergedValue)) return;
      const {
        min
      } = props;
      if (mergedValue.length <= min) return;
      const {
        onRemove
      } = props;
      if (onRemove) {
        onRemove(index);
      }
      const newValue = Array.from(mergedValue);
      newValue.splice(index, 1);
      doUpdateValue(newValue);
    }
    function swap(array, currentIndex, targetIndex) {
      if (currentIndex < 0 || targetIndex < 0 || currentIndex >= array.length || targetIndex >= array.length) {
        return;
      }
      if (currentIndex === targetIndex) return;
      const currentItem = array[currentIndex];
      array[currentIndex] = array[targetIndex];
      array[targetIndex] = currentItem;
    }
    function move(type, index) {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!Array.isArray(mergedValue)) return;
      const newValue = Array.from(mergedValue);
      if (type === "up") {
        swap(newValue, index, index - 1);
      }
      if (type === "down") {
        swap(newValue, index, index + 1);
      }
      doUpdateValue(newValue);
    }
    provide(dynamicInputInjectionKey, {
      mergedThemeRef: themeRef,
      keyPlaceholderRef: toRef(props, "keyPlaceholder"),
      valuePlaceholderRef: toRef(props, "valuePlaceholder"),
      placeholderRef: toRef(props, "placeholder")
    });
    const rtlEnabledRef = useRtl("DynamicInput", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          actionMargin,
          actionMarginRtl
        }
      } = themeRef.value;
      return {
        "--action-margin": actionMargin,
        "--action-margin-rtl": actionMarginRtl
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("dynamic-input", void 0, cssVarsRef, props) : void 0;
    return {
      locale: useLocale("DynamicInput").localeRef,
      rtlEnabled: rtlEnabledRef,
      buttonSize: buttonSizeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      NFormItem,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      insertionDisabled: insertionDisabledRef,
      removeDisabled: removeDisabledRef,
      handleCreateClick,
      ensureKey,
      handleValueChange,
      remove,
      move,
      createItem,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      itemClass,
      buttonSize,
      mergedClsPrefix,
      mergedValue,
      locale,
      mergedTheme,
      keyField,
      itemStyle,
      preset,
      showSortButton,
      NFormItem,
      ensureKey,
      handleValueChange,
      remove,
      createItem,
      move,
      onRender,
      disabled
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-dynamic-input`, this.rtlEnabled && `${mergedClsPrefix}-dynamic-input--rtl`, this.themeClass],
      style: this.cssVars
    }, !Array.isArray(mergedValue) || mergedValue.length === 0 ? h(Button, Object.assign({
      block: true,
      ghost: true,
      dashed: true,
      size: buttonSize
    }, this.createButtonProps, {
      disabled: this.insertionDisabled || disabled,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      onClick: this.handleCreateClick
    }), {
      default: () => resolveSlot($slots["create-button-default"], () => [locale.create]),
      icon: () => resolveSlot($slots["create-button-icon"], () => [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(AddIcon, null)
      })])
    }) : mergedValue.map((_, index) => h("div", {
      key: keyField ? _[keyField] : ensureKey(_, index),
      "data-key": keyField ? _[keyField] : ensureKey(_, index),
      class: [`${mergedClsPrefix}-dynamic-input-item`, itemClass],
      style: itemStyle
    }, resolveSlotWithTypedProps($slots.default, {
      value: mergedValue[index],
      index
    }, () => {
      return [preset === "input" ? h(NDynamicInputInputPreset, {
        disabled,
        clsPrefix: mergedClsPrefix,
        value: mergedValue[index],
        parentPath: NFormItem ? NFormItem.path.value : void 0,
        path: (NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.path.value) ? `${NFormItem.path.value}[${index}]` : void 0,
        onUpdateValue: (v) => {
          handleValueChange(index, v);
        }
      }) : preset === "pair" ? h(NDynamicInputPairPreset, {
        disabled,
        clsPrefix: mergedClsPrefix,
        value: mergedValue[index],
        parentPath: NFormItem ? NFormItem.path.value : void 0,
        path: (NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.path.value) ? `${NFormItem.path.value}[${index}]` : void 0,
        onUpdateValue: (v) => {
          handleValueChange(index, v);
        }
      }) : null];
    }), resolveSlotWithTypedProps($slots.action, {
      value: mergedValue[index],
      index,
      create: createItem,
      remove,
      move
    }, () => [h("div", {
      class: `${mergedClsPrefix}-dynamic-input-item__action`
    }, h(NButtonGroup, {
      size: buttonSize
    }, {
      default: () => [h(Button, {
        disabled: this.removeDisabled || disabled,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        circle: true,
        onClick: () => {
          remove(index);
        }
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(RemoveIcon, null)
        })
      }), h(Button, {
        disabled: this.insertionDisabled || disabled,
        circle: true,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        onClick: () => {
          createItem(index);
        }
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(AddIcon, null)
        })
      }), showSortButton ? h(Button, {
        disabled: index === 0 || disabled,
        circle: true,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        onClick: () => {
          move("up", index);
        }
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(ArrowUpIcon, null)
        })
      }) : null, showSortButton ? h(Button, {
        disabled: index === mergedValue.length - 1 || disabled,
        circle: true,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        onClick: () => {
          move("down", index);
        }
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(ArrowDownIcon, null)
        })
      }) : null]
    }))]))));
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DynamicInput",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(["", "", ""]);
    const preset = ref("input");
    const presetOptions = [
      {
        label: "input",
        value: "input"
      },
      {
        label: "pair",
        value: "pair"
      }
    ];
    const customValue = ref([
      {
        isCheck: true,
        num: 1,
        string: "A String"
      }
    ]);
    function onCreate() {
      return {
        isCheck: false,
        num: 1,
        string: "A String"
      };
    }
    watch(preset, () => {
      value.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Dynamic Input</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/dynamic-input" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Use input preset" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` By default, the preset element of `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`n-dynamic-input`);
                } else {
                  return [
                    createTextVNode("n-dynamic-input")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` is `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`input`);
                } else {
                  return [
                    createTextVNode("input")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` . `);
          } else {
            return [
              createTextVNode(" By default, the preset element of "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("n-dynamic-input")
                ]),
                _: 1
              }),
              createTextVNode(" is "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("input")
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
					<div class="mb-3">
						<label>preset:</label>
						<n-select v-model:value="preset" :options="presetOptions" />
					</div>
					<n-dynamic-input
						v-model:value="value"
						placeholder="Please type here"
						:min="3"
						:max="10"
						:preset="preset"
					/>
					<pre>{{ JSON.stringify(value, null, 2) }}</pre>
					`))} ${ssrInterpolate(js(`
						const value = ref(["", "", ""])
						const preset = ref<"input" | "pair" | undefined>("input")
						const presetOptions = [
							{
								label: "input",
								value: "input"
							},
							{
								label: "pair",
								value: "pair"
							}
						]

						watch(preset, () => {
							value.value = []
						})
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div class="mb-3">
						<label>preset:</label>
						<n-select v-model:value="preset" :options="presetOptions" />
					</div>
					<n-dynamic-input
						v-model:value="value"
						placeholder="Please type here"
						:min="3"
						:max="10"
						:preset="preset"
					/>
					<pre>{{ JSON.stringify(value, null, 2) }}</pre>
					`)) + " " + toDisplayString(js(`
						const value = ref(["", "", ""])
						const preset = ref<"input" | "pair" | undefined>("input")
						const presetOptions = [
							{
								label: "input",
								value: "input"
							},
							{
								label: "pair",
								value: "pair"
							}
						]

						watch(preset, () => {
							value.value = []
						})
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-3"${_scopeId}><label${_scopeId}>preset:</label>`);
            _push2(ssrRenderComponent(unref(NSelect), {
              value: preset.value,
              "onUpdate:value": ($event) => preset.value = $event,
              options: presetOptions
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(NDynamicInput), {
              value: value.value,
              "onUpdate:value": ($event) => value.value = $event,
              placeholder: "Please type here",
              min: 3,
              max: 10,
              preset: preset.value
            }, null, _parent2, _scopeId));
            _push2(`<pre style="${ssrRenderStyle({ "direction": "ltr" })}"${_scopeId}>${ssrInterpolate(JSON.stringify(value.value, null, 2))}</pre>`);
          } else {
            return [
              createVNode("div", { class: "mb-3" }, [
                createVNode("label", null, "preset:"),
                createVNode(unref(NSelect), {
                  value: preset.value,
                  "onUpdate:value": ($event) => preset.value = $event,
                  options: presetOptions
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              createVNode(unref(NDynamicInput), {
                value: value.value,
                "onUpdate:value": ($event) => value.value = $event,
                placeholder: "Please type here",
                min: 3,
                max: 10,
                preset: preset.value
              }, null, 8, ["value", "onUpdate:value", "preset"]),
              createVNode("pre", { style: { "direction": "ltr" } }, toDisplayString(JSON.stringify(value.value, null, 2)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Customizing input content" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-dynamic-input v-model:value="customValue" :on-create="onCreate" show-sort-button>
						<template #create-button-default>Add whatever you want</template>
						<template #default="{ value }">
							<div style="display: flex; align-items: center; gap: 12px; width: 100%">
								<n-checkbox v-model:checked="value.isCheck" />
								<n-input-number v-model:value="value.num" style="width: 160px" />
								<n-input v-model:value="value.string" type="text" />
							</div>
						</template>
					</n-dynamic-input>
					<pre>{{ JSON.stringify(customValue, null, 2) }}</pre>
					`))} ${ssrInterpolate(js(`
						const customValue = ref([
							{
								isCheck: true,
								num: 1,
								string: "A String"
							}
						])
						function onCreate() {
							return {
								isCheck: false,
								num: 1,
								string: "A String"
							}
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-dynamic-input v-model:value="customValue" :on-create="onCreate" show-sort-button>
						<template #create-button-default>Add whatever you want</template>
						<template #default="{ value }">
							<div style="display: flex; align-items: center; gap: 12px; width: 100%">
								<n-checkbox v-model:checked="value.isCheck" />
								<n-input-number v-model:value="value.num" style="width: 160px" />
								<n-input v-model:value="value.string" type="text" />
							</div>
						</template>
					</n-dynamic-input>
					<pre>{{ JSON.stringify(customValue, null, 2) }}</pre>
					`)) + " " + toDisplayString(js(`
						const customValue = ref([
							{
								isCheck: true,
								num: 1,
								string: "A String"
							}
						])
						function onCreate() {
							return {
								isCheck: false,
								num: 1,
								string: "A String"
							}
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDynamicInput), {
              value: customValue.value,
              "onUpdate:value": ($event) => customValue.value = $event,
              "on-create": onCreate,
              "show-sort-button": ""
            }, {
              "create-button-default": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Add whatever you want`);
                } else {
                  return [
                    createTextVNode("Add whatever you want")
                  ];
                }
              }),
              default: withCtx(({ value: valueObj }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "12px", "width": "100%" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NCheckbox), {
                    checked: valueObj.isCheck,
                    "onUpdate:checked": ($event) => valueObj.isCheck = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInputNumber), {
                    value: valueObj.num,
                    "onUpdate:value": ($event) => valueObj.num = $event,
                    style: { "width": "160px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: valueObj.string,
                    "onUpdate:value": ($event) => valueObj.string = $event,
                    type: "text"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "display": "flex", "align-items": "center", "gap": "12px", "width": "100%" } }, [
                      createVNode(unref(NCheckbox), {
                        checked: valueObj.isCheck,
                        "onUpdate:checked": ($event) => valueObj.isCheck = $event
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode(unref(NInputNumber), {
                        value: valueObj.num,
                        "onUpdate:value": ($event) => valueObj.num = $event,
                        style: { "width": "160px" }
                      }, null, 8, ["value", "onUpdate:value"]),
                      createVNode(unref(NInput), {
                        value: valueObj.string,
                        "onUpdate:value": ($event) => valueObj.string = $event,
                        type: "text"
                      }, null, 8, ["value", "onUpdate:value"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre style="${ssrRenderStyle({ "direction": "ltr" })}"${_scopeId}>${ssrInterpolate(JSON.stringify(customValue.value, null, 2))}</pre>`);
          } else {
            return [
              createVNode(unref(NDynamicInput), {
                value: customValue.value,
                "onUpdate:value": ($event) => customValue.value = $event,
                "on-create": onCreate,
                "show-sort-button": ""
              }, {
                "create-button-default": withCtx(() => [
                  createTextVNode("Add whatever you want")
                ]),
                default: withCtx(({ value: valueObj }) => [
                  createVNode("div", { style: { "display": "flex", "align-items": "center", "gap": "12px", "width": "100%" } }, [
                    createVNode(unref(NCheckbox), {
                      checked: valueObj.isCheck,
                      "onUpdate:checked": ($event) => valueObj.isCheck = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode(unref(NInputNumber), {
                      value: valueObj.num,
                      "onUpdate:value": ($event) => valueObj.num = $event,
                      style: { "width": "160px" }
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NInput), {
                      value: valueObj.string,
                      "onUpdate:value": ($event) => valueObj.string = $event,
                      type: "text"
                    }, null, 8, ["value", "onUpdate:value"])
                  ])
                ]),
                _: 1
              }, 8, ["value", "onUpdate:value"]),
              createVNode("pre", { style: { "direction": "ltr" } }, toDisplayString(JSON.stringify(customValue.value, null, 2)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/DynamicInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DynamicInput-Y0dYt1to.mjs.map
