import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, computed, provide, toRef, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, U as Scrollbar$1, v as useConfig, x as useTheme, bH as transferLight$1, k as cB, L as useFormItem, y as createKey, h as createInjectionKey, W as useLocale, B as Button, i as NBaseIcon, ay as NEmpty, l as cM, n as cE, m as c$1, p as cNotM, at as getTitleAttribute, j as NBaseClose, C as call } from './server.mjs';
import { depx } from 'seemly';
import { useIsMounted, useMergedState, useMemo } from 'vooks';
import { N as NInput } from './Input-jKcDFmK2.mjs';
import { N as NCheckbox } from './Checkbox-PH_UPMG8.mjs';
import { V as VVirtualList } from './VirtualList-xBpsIw2j.mjs';
import './LtrContext-CjyxPKj1.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BZVO93eO.mjs';
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
import './Suffix-DNdncj4N.mjs';
import './Eye-DafrR3c8.mjs';

const SearchIcon = defineComponent({
  name: "Search",
  render() {
    return h("svg", {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      style: "enable-background: new 0 0 512 512"
    }, h("path", {
      d: "M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153\n  c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z\n   M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2\n  c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z"
    }));
  }
});
const transferInjectionKey = createInjectionKey("n-transfer");
const style = cB("transfer", `
 width: 100%;
 font-size: var(--n-font-size);
 height: 300px;
 display: flex;
 flex-wrap: nowrap;
 word-break: break-word;
`, [cM("disabled", [cB("transfer-list", [cB("transfer-list-header", [cE("title", `
 color: var(--n-header-text-color-disabled);
 `), cE("extra", `
 color: var(--n-header-extra-text-color-disabled);
 `)])])]), cB("transfer-list", `
 flex: 1;
 min-width: 0;
 height: inherit;
 display: flex;
 flex-direction: column;
 background-clip: padding-box;
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-list-color);
 `, [cM("source", `
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `, [cE("border", "border-right: 1px solid var(--n-divider-color);")]), cM("target", `
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [cE("border", "border-left: none;")]), cE("border", `
 padding: 0 12px;
 border: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), cB("transfer-list-header", `
 min-height: var(--n-header-height);
 box-sizing: border-box;
 display: flex;
 padding: 12px 12px 10px 12px;
 align-items: center;
 background-clip: padding-box;
 border-radius: inherit;
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;
 line-height: 1.5;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [c$1("> *:not(:first-child)", `
 margin-left: 8px;
 `), cE("title", `
 flex: 1;
 min-width: 0;
 line-height: 1.5;
 font-size: var(--n-header-font-size);
 font-weight: var(--n-header-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-header-text-color);
 `), cE("button", `
 position: relative;
 `), cE("extra", `
 transition: color .3s var(--n-bezier);
 font-size: var(--n-extra-font-size);
 margin-right: 0;
 white-space: nowrap;
 color: var(--n-header-extra-text-color);
 `)]), cB("transfer-list-body", `
 flex-basis: 0;
 flex-grow: 1;
 box-sizing: border-box;
 position: relative;
 display: flex;
 flex-direction: column;
 border-radius: inherit;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 `, [cB("transfer-filter", `
 padding: 4px 12px 8px 12px;
 box-sizing: border-box;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("transfer-list-flex-container", `
 flex: 1;
 position: relative;
 `, [cB("scrollbar", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 height: unset;
 `), cB("empty", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 `), cB("transfer-list-content", `
 padding: 0;
 margin: 0;
 position: relative;
 `, [cB("transfer-list-item", `
 padding: 0 12px;
 min-height: var(--n-item-height);
 display: flex;
 align-items: center;
 color: var(--n-item-text-color);
 position: relative;
 transition: color .3s var(--n-bezier);
 `, [cE("background", `
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), cE("checkbox", `
 position: relative;
 margin-right: 8px;
 `), cE("close", `
 opacity: 0;
 pointer-events: none;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cE("label", `
 position: relative;
 min-width: 0;
 flex-grow: 1;
 `), cM("source", "cursor: pointer;"), cM("disabled", `
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `), cNotM("disabled", [c$1("&:hover", [cE("background", "background-color: var(--n-item-color-pending);"), cE("close", `
 opacity: 1;
 pointer-events: all;
 `)])])])])])])])]);
const NTransferFilter = defineComponent({
  name: "TransferFilter",
  props: {
    value: String,
    placeholder: String,
    disabled: Boolean,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup() {
    const {
      mergedThemeRef,
      mergedClsPrefixRef
    } = inject(transferInjectionKey);
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: mergedThemeRef
    };
  },
  render() {
    const {
      mergedTheme,
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-transfer-filter`
    }, h(NInput, {
      value: this.value,
      onUpdateValue: this.onUpdateValue,
      disabled: this.disabled,
      placeholder: this.placeholder,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      clearable: true,
      size: "small"
    }, {
      "clear-icon-placeholder": () => h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(SearchIcon, null)
      })
    }));
  }
});
const NTransferHeader = defineComponent({
  name: "TransferHeader",
  props: {
    size: {
      type: String,
      required: true
    },
    selectAllText: String,
    clearText: String,
    source: Boolean,
    onCheckedAll: Function,
    onClearAll: Function,
    title: [String, Function]
  },
  setup(props) {
    const {
      targetOptionsRef,
      canNotSelectAnythingRef,
      canBeClearedRef,
      allCheckedRef,
      mergedThemeRef,
      disabledRef,
      mergedClsPrefixRef,
      srcOptionsLengthRef
    } = inject(transferInjectionKey);
    const {
      localeRef
    } = useLocale("Transfer");
    return () => {
      const {
        source,
        onClearAll,
        onCheckedAll,
        selectAllText,
        clearText
      } = props;
      const {
        value: mergedTheme
      } = mergedThemeRef;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const {
        value: locale
      } = localeRef;
      const buttonSize = props.size === "large" ? "small" : "tiny";
      const {
        title
      } = props;
      return h("div", {
        class: `${mergedClsPrefix}-transfer-list-header`
      }, title && h("div", {
        class: `${mergedClsPrefix}-transfer-list-header__title`
      }, typeof title === "function" ? title() : title), source && h(Button, {
        class: `${mergedClsPrefix}-transfer-list-header__button`,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        size: buttonSize,
        tertiary: true,
        onClick: allCheckedRef.value ? onClearAll : onCheckedAll,
        disabled: canNotSelectAnythingRef.value || disabledRef.value
      }, {
        default: () => allCheckedRef.value ? clearText || locale.unselectAll : selectAllText || locale.selectAll
      }), !source && canBeClearedRef.value && h(Button, {
        class: `${mergedClsPrefix}-transfer-list-header__button`,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        size: buttonSize,
        tertiary: true,
        onClick: onClearAll,
        disabled: disabledRef.value
      }, {
        default: () => locale.clearAll
      }), h("div", {
        class: `${mergedClsPrefix}-transfer-list-header__extra`
      }, source ? locale.total(srcOptionsLengthRef.value) : locale.selected(targetOptionsRef.value.length)));
    };
  }
});
const NTransferListItem = defineComponent({
  name: "NTransferListItem",
  props: {
    source: Boolean,
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    disabled: Boolean,
    option: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      targetValueSetRef,
      mergedClsPrefixRef,
      mergedThemeRef,
      handleItemCheck,
      renderSourceLabelRef,
      renderTargetLabelRef,
      showSelectedRef
    } = inject(transferInjectionKey);
    const checkedRef = useMemo(() => targetValueSetRef.value.has(props.value));
    function handleClick() {
      if (!props.disabled) {
        handleItemCheck(!checkedRef.value, props.value);
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: mergedThemeRef,
      checked: checkedRef,
      showSelected: showSelectedRef,
      renderSourceLabel: renderSourceLabelRef,
      renderTargetLabel: renderTargetLabelRef,
      handleClick
    };
  },
  render() {
    const {
      disabled,
      mergedTheme,
      mergedClsPrefix,
      label,
      checked,
      source,
      renderSourceLabel,
      renderTargetLabel
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-transfer-list-item`, disabled && `${mergedClsPrefix}-transfer-list-item--disabled`, source ? `${mergedClsPrefix}-transfer-list-item--source` : `${mergedClsPrefix}-transfer-list-item--target`],
      onClick: source ? this.handleClick : void 0
    }, h("div", {
      class: `${mergedClsPrefix}-transfer-list-item__background`
    }), source && this.showSelected && h("div", {
      class: `${mergedClsPrefix}-transfer-list-item__checkbox`
    }, h(NCheckbox, {
      theme: mergedTheme.peers.Checkbox,
      themeOverrides: mergedTheme.peerOverrides.Checkbox,
      disabled,
      checked
    })), h("div", {
      class: `${mergedClsPrefix}-transfer-list-item__label`,
      title: getTitleAttribute(label)
    }, source ? renderSourceLabel ? renderSourceLabel({
      option: this.option
    }) : label : renderTargetLabel ? renderTargetLabel({
      option: this.option
    }) : label), !source && !disabled && h(NBaseClose, {
      focusable: false,
      class: `${mergedClsPrefix}-transfer-list-item__close`,
      clsPrefix: mergedClsPrefix,
      onClick: this.handleClick
    }));
  }
});
const NTransferList = defineComponent({
  name: "TransferList",
  props: {
    virtualScroll: {
      type: Boolean,
      required: true
    },
    itemSize: {
      type: Number,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    source: Boolean
  },
  setup() {
    const {
      mergedThemeRef,
      mergedClsPrefixRef
    } = inject(transferInjectionKey);
    const scrollerInstRef = ref(null);
    const vlInstRef = ref(null);
    function syncVLScroller() {
      var _a;
      (_a = scrollerInstRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    function scrollContainer() {
      const {
        value
      } = vlInstRef;
      if (!value) return null;
      const {
        listElRef
      } = value;
      return listElRef;
    }
    function scrollContent() {
      const {
        value
      } = vlInstRef;
      if (!value) return null;
      const {
        itemsElRef
      } = value;
      return itemsElRef;
    }
    return {
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      scrollerInstRef,
      vlInstRef,
      syncVLScroller,
      scrollContainer,
      scrollContent
    };
  },
  render() {
    const {
      mergedTheme,
      options
    } = this;
    if (options.length === 0) {
      return h(NEmpty, {
        theme: mergedTheme.peers.Empty,
        themeOverrides: mergedTheme.peerOverrides.Empty
      });
    }
    const {
      mergedClsPrefix,
      virtualScroll,
      source,
      disabled,
      syncVLScroller
    } = this;
    return h(Scrollbar$1, {
      ref: "scrollerInstRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: virtualScroll ? this.scrollContainer : void 0,
      content: virtualScroll ? this.scrollContent : void 0
    }, {
      default: () => virtualScroll ? h(VVirtualList, {
        ref: "vlInstRef",
        style: {
          height: "100%"
        },
        class: `${mergedClsPrefix}-transfer-list-content`,
        items: this.options,
        itemSize: this.itemSize,
        showScrollbar: false,
        onResize: syncVLScroller,
        onScroll: syncVLScroller,
        keyField: "value"
      }, {
        default: ({
          item
        }) => {
          const {
            source: source2,
            disabled: disabled2
          } = this;
          return h(NTransferListItem, {
            source: source2,
            key: item.value,
            value: item.value,
            disabled: item.disabled || disabled2,
            label: item.label,
            option: item
          });
        }
      }) : h("div", {
        class: `${mergedClsPrefix}-transfer-list-content`
      }, options.map((option) => h(NTransferListItem, {
        source,
        key: option.value,
        value: option.value,
        disabled: option.disabled || disabled,
        label: option.label,
        option
      })))
    });
  }
});
function useTransferData(props) {
  const uncontrolledValueRef = ref(props.defaultValue);
  const mergedValueRef = useMergedState(toRef(props, "value"), uncontrolledValueRef);
  const optionsMapRef = computed(() => {
    const map = /* @__PURE__ */ new Map();
    (props.options || []).forEach((opt) => map.set(opt.value, opt));
    return map;
  });
  const targetValueSetRef = computed(() => new Set(mergedValueRef.value || []));
  const targetOptionsRef = computed(() => {
    const optionMap = optionsMapRef.value;
    const targetOptions = [];
    (mergedValueRef.value || []).forEach((v) => {
      const option = optionMap.get(v);
      if (option) {
        targetOptions.push(option);
      }
    });
    return targetOptions;
  });
  const srcPatternRef = ref("");
  const tgtPatternRef = ref("");
  const mergedSrcFilterableRef = computed(() => {
    return props.sourceFilterable || !!props.filterable;
  });
  const filteredSrcOptionsRef = computed(() => {
    const {
      showSelected,
      options,
      filter
    } = props;
    if (!mergedSrcFilterableRef.value) {
      if (showSelected) {
        return options;
      } else {
        return options.filter((option) => !targetValueSetRef.value.has(option.value));
      }
    }
    return options.filter((option) => {
      return filter(srcPatternRef.value, option, "source") && (showSelected || !targetValueSetRef.value.has(option.value));
    });
  });
  const filteredTgtOptionsRef = computed(() => {
    if (!props.targetFilterable) return targetOptionsRef.value;
    const {
      filter
    } = props;
    return targetOptionsRef.value.filter((opt) => filter(tgtPatternRef.value, opt, "target"));
  });
  const mergedValueSetRef = computed(() => {
    const {
      value
    } = mergedValueRef;
    if (value === null) return /* @__PURE__ */ new Set();
    return new Set(value);
  });
  const valueSetForCheckAllRef = computed(() => {
    const values = new Set(mergedValueSetRef.value);
    filteredSrcOptionsRef.value.forEach((option) => {
      if (!option.disabled && !values.has(option.value)) {
        values.add(option.value);
      }
    });
    return values;
  });
  const valueSetForUncheckAllRef = computed(() => {
    const values = new Set(mergedValueSetRef.value);
    filteredSrcOptionsRef.value.forEach((option) => {
      if (!option.disabled && values.has(option.value)) {
        values.delete(option.value);
      }
    });
    return values;
  });
  const valueSetForClearRef = computed(() => {
    const values = new Set(mergedValueSetRef.value);
    filteredTgtOptionsRef.value.forEach((option) => {
      if (!option.disabled) {
        values.delete(option.value);
      }
    });
    return values;
  });
  const canNotSelectAnythingRef = computed(() => {
    return filteredSrcOptionsRef.value.every((option) => option.disabled);
  });
  const allCheckedRef = computed(() => {
    if (!filteredSrcOptionsRef.value.length) {
      return false;
    }
    const mergedValueSet = mergedValueSetRef.value;
    return filteredSrcOptionsRef.value.every((option) => option.disabled || mergedValueSet.has(option.value));
  });
  const canBeClearedRef = computed(() => {
    return filteredTgtOptionsRef.value.some((option) => !option.disabled);
  });
  function handleSrcFilterUpdateValue(value) {
    srcPatternRef.value = value !== null && value !== void 0 ? value : "";
  }
  function handleTgtFilterUpdateValue(value) {
    tgtPatternRef.value = value !== null && value !== void 0 ? value : "";
  }
  return {
    uncontrolledValueRef,
    mergedValueRef,
    targetValueSetRef,
    valueSetForCheckAllRef,
    valueSetForUncheckAllRef,
    valueSetForClearRef,
    filteredTgtOptionsRef,
    filteredSrcOptionsRef,
    targetOptionsRef,
    canNotSelectAnythingRef,
    canBeClearedRef,
    allCheckedRef,
    srcPatternRef,
    tgtPatternRef,
    mergedSrcFilterableRef,
    handleSrcFilterUpdateValue,
    handleTgtFilterUpdateValue
  };
}
const transferProps = Object.assign(Object.assign({}, useTheme.props), {
  value: Array,
  defaultValue: {
    type: Array,
    default: null
  },
  options: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  virtualScroll: Boolean,
  sourceTitle: [String, Function],
  selectAllText: String,
  clearText: String,
  targetTitle: [String, Function],
  filterable: {
    type: Boolean,
    default: void 0
  },
  sourceFilterable: Boolean,
  targetFilterable: Boolean,
  showSelected: {
    type: Boolean,
    default: true
  },
  sourceFilterPlaceholder: String,
  targetFilterPlaceholder: String,
  filter: {
    type: Function,
    default: (pattern, option) => {
      if (!pattern) return true;
      return ~`${option.label}`.toLowerCase().indexOf(`${pattern}`.toLowerCase());
    }
  },
  size: String,
  renderSourceLabel: Function,
  renderTargetLabel: Function,
  renderSourceList: Function,
  renderTargetList: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onChange: [Function, Array]
});
const NTransfer = defineComponent({
  name: "Transfer",
  props: transferProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Transfer", "-transfer", style, transferLight$1, props, mergedClsPrefixRef);
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const itemSizeRef = computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      const {
        self: {
          [createKey("itemHeight", size)]: itemSize
        }
      } = themeRef.value;
      return depx(itemSize);
    });
    const {
      uncontrolledValueRef,
      mergedValueRef,
      targetValueSetRef,
      valueSetForCheckAllRef,
      valueSetForUncheckAllRef,
      valueSetForClearRef,
      filteredTgtOptionsRef,
      filteredSrcOptionsRef,
      targetOptionsRef,
      canNotSelectAnythingRef,
      canBeClearedRef,
      allCheckedRef,
      srcPatternRef,
      tgtPatternRef,
      mergedSrcFilterableRef,
      handleSrcFilterUpdateValue,
      handleTgtFilterUpdateValue
    } = useTransferData(props);
    function doUpdateValue(value) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onChange
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      if (onChange) call(onChange, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function handleSourceCheckAll() {
      doUpdateValue([...valueSetForCheckAllRef.value]);
    }
    function handleSourceUncheckAll() {
      doUpdateValue([...valueSetForUncheckAllRef.value]);
    }
    function handleTargetClearAll() {
      doUpdateValue([...valueSetForClearRef.value]);
    }
    function handleItemCheck(checked, optionValue) {
      if (checked) {
        doUpdateValue((mergedValueRef.value || []).concat(optionValue));
      } else {
        doUpdateValue((mergedValueRef.value || []).filter((v) => v !== optionValue));
      }
    }
    function handleChecked(optionValueList) {
      doUpdateValue(optionValueList);
    }
    provide(transferInjectionKey, {
      targetValueSetRef,
      mergedClsPrefixRef,
      disabledRef: mergedDisabledRef,
      mergedThemeRef: themeRef,
      targetOptionsRef,
      canNotSelectAnythingRef,
      canBeClearedRef,
      allCheckedRef,
      srcOptionsLengthRef: computed(() => props.options.length),
      handleItemCheck,
      renderSourceLabelRef: toRef(props, "renderSourceLabel"),
      renderTargetLabelRef: toRef(props, "renderTargetLabel"),
      showSelectedRef: toRef(props, "showSelected")
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedDisabled: mergedDisabledRef,
      itemSize: itemSizeRef,
      isMounted: useIsMounted(),
      mergedTheme: themeRef,
      filteredSrcOpts: filteredSrcOptionsRef,
      filteredTgtOpts: filteredTgtOptionsRef,
      srcPattern: srcPatternRef,
      tgtPattern: tgtPatternRef,
      mergedSize: mergedSizeRef,
      mergedSrcFilterable: mergedSrcFilterableRef,
      handleSrcFilterUpdateValue,
      handleTgtFilterUpdateValue,
      handleSourceCheckAll,
      handleSourceUncheckAll,
      handleTargetClearAll,
      handleItemCheck,
      handleChecked,
      cssVars: computed(() => {
        const {
          value: size
        } = mergedSizeRef;
        const {
          common: {
            cubicBezierEaseInOut
          },
          self: {
            borderRadius,
            borderColor,
            listColor,
            titleTextColor,
            titleTextColorDisabled,
            extraTextColor,
            itemTextColor,
            itemColorPending,
            itemTextColorDisabled,
            titleFontWeight,
            closeColorHover,
            closeColorPressed,
            closeIconColor,
            closeIconColorHover,
            closeIconColorPressed,
            closeIconSize,
            closeSize,
            dividerColor,
            extraTextColorDisabled,
            [createKey("extraFontSize", size)]: extraFontSize,
            [createKey("fontSize", size)]: fontSize,
            [createKey("titleFontSize", size)]: titleFontSize,
            [createKey("itemHeight", size)]: itemHeight,
            [createKey("headerHeight", size)]: headerHeight
          }
        } = themeRef.value;
        return {
          "--n-bezier": cubicBezierEaseInOut,
          "--n-border-color": borderColor,
          "--n-border-radius": borderRadius,
          "--n-extra-font-size": extraFontSize,
          "--n-font-size": fontSize,
          "--n-header-font-size": titleFontSize,
          "--n-header-extra-text-color": extraTextColor,
          "--n-header-extra-text-color-disabled": extraTextColorDisabled,
          "--n-header-font-weight": titleFontWeight,
          "--n-header-text-color": titleTextColor,
          "--n-header-text-color-disabled": titleTextColorDisabled,
          "--n-item-color-pending": itemColorPending,
          "--n-item-height": itemHeight,
          "--n-item-text-color": itemTextColor,
          "--n-item-text-color-disabled": itemTextColorDisabled,
          "--n-list-color": listColor,
          "--n-header-height": headerHeight,
          "--n-close-size": closeSize,
          "--n-close-icon-size": closeIconSize,
          "--n-close-color-hover": closeColorHover,
          "--n-close-color-pressed": closeColorPressed,
          "--n-close-icon-color": closeIconColor,
          "--n-close-icon-color-hover": closeIconColorHover,
          "--n-close-icon-color-pressed": closeIconColorPressed,
          "--n-divider-color": dividerColor
        };
      })
    };
  },
  render() {
    const {
      mergedClsPrefix,
      renderSourceList,
      renderTargetList,
      mergedTheme,
      mergedSrcFilterable,
      targetFilterable
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-transfer`, this.mergedDisabled && `${mergedClsPrefix}-transfer--disabled`],
      style: this.cssVars
    }, h("div", {
      class: `${mergedClsPrefix}-transfer-list ${mergedClsPrefix}-transfer-list--source`
    }, h(NTransferHeader, {
      source: true,
      selectAllText: this.selectAllText,
      clearText: this.clearText,
      title: this.sourceTitle,
      onCheckedAll: this.handleSourceCheckAll,
      onClearAll: this.handleSourceUncheckAll,
      size: this.mergedSize
    }), h("div", {
      class: `${mergedClsPrefix}-transfer-list-body`
    }, mergedSrcFilterable ? h(NTransferFilter, {
      onUpdateValue: this.handleSrcFilterUpdateValue,
      value: this.srcPattern,
      disabled: this.mergedDisabled,
      placeholder: this.sourceFilterPlaceholder
    }) : null, h("div", {
      class: `${mergedClsPrefix}-transfer-list-flex-container`
    }, renderSourceList ? h(Scrollbar$1, {
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => renderSourceList({
        onCheck: this.handleChecked,
        checkedOptions: this.filteredTgtOpts,
        pattern: this.srcPattern
      })
    }) : h(NTransferList, {
      source: true,
      options: this.filteredSrcOpts,
      disabled: this.mergedDisabled,
      virtualScroll: this.virtualScroll,
      itemSize: this.itemSize
    }))), h("div", {
      class: `${mergedClsPrefix}-transfer-list__border`
    })), h("div", {
      class: `${mergedClsPrefix}-transfer-list ${mergedClsPrefix}-transfer-list--target`
    }, h(NTransferHeader, {
      onClearAll: this.handleTargetClearAll,
      size: this.mergedSize,
      title: this.targetTitle
    }), h("div", {
      class: `${mergedClsPrefix}-transfer-list-body`
    }, targetFilterable ? h(NTransferFilter, {
      onUpdateValue: this.handleTgtFilterUpdateValue,
      value: this.tgtPattern,
      disabled: this.mergedDisabled,
      placeholder: this.sourceFilterPlaceholder
    }) : null, h("div", {
      class: `${mergedClsPrefix}-transfer-list-flex-container`
    }, renderTargetList ? h(Scrollbar$1, {
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => renderTargetList({
        onCheck: this.handleChecked,
        checkedOptions: this.filteredTgtOpts,
        pattern: this.tgtPattern
      })
    }) : h(NTransferList, {
      options: this.filteredTgtOpts,
      disabled: this.mergedDisabled,
      virtualScroll: this.virtualScroll,
      itemSize: this.itemSize
    }))), h("div", {
      class: `${mergedClsPrefix}-transfer-list__border`
    })));
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Transfer",
  __ssrInlineRender: true,
  setup(__props) {
    function createOptions() {
      return Array.from({ length: 100 }).map((v, i) => ({
        label: `Option ${i}`,
        value: i,
        disabled: i % 5 === 0
      }));
    }
    function createValues() {
      return Array.from({ length: 50 }).map((v, i) => i);
    }
    const options1 = createOptions();
    const value1 = ref(createValues());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Transfer</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/transfer" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-transfer
						ref="transfer"
						v-model:value="value1"
						virtual-scroll
						:options="options1"
						source-filterable
						target-filterable
					/>
					`))} ${ssrInterpolate(js(`
						function createOptions() {
							return Array.from({ length: 100 }).map((v, i) => ({
								label: "Option " + i,
								value: i,
								disabled: i % 5 === 0
							}))
						}

						function createValues() {
							return Array.from({ length: 50 }).map((v, i) => i)
						}

						const options1 = createOptions()
						const value1 = ref(createValues())

						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-transfer
						ref="transfer"
						v-model:value="value1"
						virtual-scroll
						:options="options1"
						source-filterable
						target-filterable
					/>
					`)) + " " + toDisplayString(js(`
						function createOptions() {
							return Array.from({ length: 100 }).map((v, i) => ({
								label: "Option " + i,
								value: i,
								disabled: i % 5 === 0
							}))
						}

						function createValues() {
							return Array.from({ length: 50 }).map((v, i) => i)
						}

						const options1 = createOptions()
						const value1 = ref(createValues())

						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTransfer), {
              value: value1.value,
              "onUpdate:value": ($event) => value1.value = $event,
              "virtual-scroll": "",
              options: unref(options1),
              "source-filterable": "",
              "target-filterable": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTransfer), {
                value: value1.value,
                "onUpdate:value": ($event) => value1.value = $event,
                "virtual-scroll": "",
                options: unref(options1),
                "source-filterable": "",
                "target-filterable": ""
              }, null, 8, ["value", "onUpdate:value", "options"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Transfer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Transfer-CJynyZm4.mjs.map
