import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, toRef, computed, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, aE as NTag, B as Button, i as NBaseIcon, v as useConfig, X as useLocale, L as useFormItem, x as useTheme, bQ as dynamicTagsLight, k as cB, z as useThemeClass, bR as commonProps, C as call } from './server.mjs';
import { useMergedState } from 'vooks';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { A as AddIcon } from './Add-niv5NbQA.mjs';
import { s as smallerSize } from './prop-CovD8_bW.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-S6SsK5xW.mjs';
import 'seemly';
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
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';

const style = cB("dynamic-tags", [cB("input", {
  minWidth: "var(--n-input-width)"
})]);
const dynamicTagsProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), commonProps), {
  size: {
    type: String,
    default: "medium"
  },
  closable: {
    type: Boolean,
    default: true
  },
  defaultValue: {
    type: Array,
    default: () => []
  },
  value: Array,
  inputClass: String,
  inputStyle: [String, Object],
  inputProps: Object,
  max: Number,
  tagClass: String,
  tagStyle: [String, Object],
  renderTag: Function,
  onCreate: {
    type: Function,
    default: (label) => label
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  // deprecated
  onChange: [Function, Array]
});
const NDynamicTags = defineComponent({
  name: "DynamicTags",
  props: dynamicTagsProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const {
      localeRef
    } = useLocale("DynamicTags");
    const formItem = useFormItem(props);
    const {
      mergedDisabledRef
    } = formItem;
    const inputValueRef = ref("");
    const showInputRef = ref(false);
    const inputForceFocusedRef = ref(true);
    const inputInstRef = ref(null);
    const themeRef = useTheme("DynamicTags", "-dynamic-tags", style, dynamicTagsLight, props, mergedClsPrefixRef);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const localizedAddRef = computed(() => {
      return localeRef.value.add;
    });
    const inputSizeRef = computed(() => {
      return smallerSize(props.size);
    });
    const triggerDisabledRef = computed(() => {
      return mergedDisabledRef.value || !!props.max && mergedValueRef.value.length >= props.max;
    });
    function doChange(value) {
      const {
        onChange,
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onChange) call(onChange, value);
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function handleCloseClick(index) {
      const tags = mergedValueRef.value.slice(0);
      tags.splice(index, 1);
      doChange(tags);
    }
    function handleInputKeyDown(e) {
      switch (e.key) {
        case "Enter":
          handleInputConfirm();
      }
    }
    function handleInputConfirm(externalValue) {
      const nextValue = externalValue !== null && externalValue !== void 0 ? externalValue : inputValueRef.value;
      if (nextValue) {
        const tags = mergedValueRef.value.slice(0);
        tags.push(props.onCreate(nextValue));
        doChange(tags);
      }
      showInputRef.value = false;
      inputForceFocusedRef.value = true;
      inputValueRef.value = "";
    }
    function handleInputBlur() {
      handleInputConfirm();
    }
    function handleAddClick() {
      showInputRef.value = true;
      void nextTick(() => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        inputForceFocusedRef.value = false;
      });
    }
    const cssVarsRef = computed(() => {
      const {
        self: {
          inputWidth
        }
      } = themeRef.value;
      return {
        "--n-input-width": inputWidth
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("dynamic-tags", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      inputInstRef,
      localizedAdd: localizedAddRef,
      inputSize: inputSizeRef,
      inputValue: inputValueRef,
      showInput: showInputRef,
      inputForceFocused: inputForceFocusedRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      triggerDisabled: triggerDisabledRef,
      handleInputKeyDown,
      handleAddClick,
      handleInputBlur,
      handleCloseClick,
      handleInputConfirm,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedTheme,
      cssVars,
      mergedClsPrefix,
      onRender,
      renderTag
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(NSpace, {
      class: [`${mergedClsPrefix}-dynamic-tags`, this.themeClass],
      size: "small",
      style: cssVars,
      theme: mergedTheme.peers.Space,
      themeOverrides: mergedTheme.peerOverrides.Space,
      itemStyle: "display: flex;"
    }, {
      default: () => {
        const {
          mergedTheme: mergedTheme2,
          tagClass,
          tagStyle,
          type,
          round,
          size,
          color,
          closable,
          mergedDisabled,
          showInput,
          inputValue,
          inputClass,
          inputStyle,
          inputSize,
          inputForceFocused,
          triggerDisabled,
          handleInputKeyDown,
          handleInputBlur,
          handleAddClick,
          handleCloseClick,
          handleInputConfirm,
          $slots
        } = this;
        return this.mergedValue.map((tag, index) => renderTag ? renderTag(tag, index) : h(NTag, {
          key: index,
          theme: mergedTheme2.peers.Tag,
          themeOverrides: mergedTheme2.peerOverrides.Tag,
          class: tagClass,
          style: tagStyle,
          type,
          round,
          size,
          color,
          closable,
          disabled: mergedDisabled,
          onClose: () => {
            handleCloseClick(index);
          }
        }, {
          default: () => typeof tag === "string" ? tag : tag.label
        })).concat(showInput ? $slots.input ? $slots.input({
          submit: handleInputConfirm,
          deactivate: handleInputBlur
        }) : h(NInput, Object.assign({
          placeholder: "",
          size: inputSize,
          style: inputStyle,
          class: inputClass,
          autosize: true
        }, this.inputProps, {
          ref: "inputInstRef",
          value: inputValue,
          onUpdateValue: (v) => {
            this.inputValue = v;
          },
          theme: mergedTheme2.peers.Input,
          themeOverrides: mergedTheme2.peerOverrides.Input,
          onKeydown: handleInputKeyDown,
          onBlur: handleInputBlur,
          internalForceFocus: inputForceFocused
        })) : $slots.trigger ? $slots.trigger({
          activate: handleAddClick,
          disabled: triggerDisabled
        }) : h(Button, {
          dashed: true,
          disabled: triggerDisabled,
          theme: mergedTheme2.peers.Button,
          themeOverrides: mergedTheme2.peerOverrides.Button,
          size: inputSize,
          onClick: handleAddClick
        }, {
          icon: () => h(NBaseIcon, {
            clsPrefix: mergedClsPrefix
          }, {
            default: () => h(AddIcon, null)
          })
        }));
      }
    });
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DynamicTags",
  __ssrInlineRender: true,
  setup(__props) {
    const tags = ref(["teacher", "programmer"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Dynamic Tags</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/dynamic-tags" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-dynamic-tags v-model:value="tags" />
					`))} ${ssrInterpolate(js(`const tags = ref(["teacher", "programmer"])`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-dynamic-tags v-model:value="tags" />
					`)) + " " + toDisplayString(js(`const tags = ref(["teacher", "programmer"])`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDynamicTags), {
              value: tags.value,
              "onUpdate:value": ($event) => tags.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NDynamicTags), {
                value: tags.value,
                "onUpdate:value": ($event) => tags.value = $event
              }, null, 8, ["value", "onUpdate:value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/DynamicTags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DynamicTags-B6HMbzEs.mjs.map
