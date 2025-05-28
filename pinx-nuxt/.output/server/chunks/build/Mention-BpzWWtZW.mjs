import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, Transition, ref, computed, toRef, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s, ar as Binder, as as VTarget, at as VFollower, au as useAdjustedTo, av as NInternalSelectMenu, u as useConfig, s as useTheme, bO as mentionLight, l as c$1, J as useFormItem, x as useThemeClass, c as NAvatar, H as warn, j as cB, $ as fadeInScaleUpTransition, z as call } from './server.mjs';
import { createTreeMate } from 'treemate';
import { useMergedState, useIsMounted } from 'vooks';
import { N as NInput } from './Input-DOxGe8j0.mjs';
import './LtrContext-CQINXXZ7.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
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
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';

const style = c$1([cB("mention", "width: 100%; z-index: auto; position: relative;"), cB("mention-menu", `
 box-shadow: var(--n-menu-box-shadow);
 `, [fadeInScaleUpTransition({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]);
function getRelativePosition(element, options = {
  debug: false,
  useSelectionEnd: false,
  checkWidthOverflow: true
}) {
  const selectionStart = element.selectionStart !== null ? element.selectionStart : 0;
  const selectionEnd = element.selectionEnd !== null ? element.selectionEnd : 0;
  options.useSelectionEnd ? selectionEnd : selectionStart;
  (void 0).userAgent.toLowerCase().includes("firefox");
  {
    throw new Error("textarea-caret-position#getCaretPosition should only be called in a browser");
  }
}
const mentionProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  autosize: [Boolean, Object],
  options: {
    type: Array,
    default: []
  },
  filter: {
    type: Function,
    default: (pattern, option) => {
      if (!pattern) return true;
      if (typeof option.label === "string") {
        return option.label.startsWith(pattern);
      }
      if (typeof option.value === "string") {
        return option.value.startsWith(pattern);
      }
      return false;
    }
  },
  type: {
    type: String,
    default: "text"
  },
  separator: {
    type: String,
    validator: (separator) => {
      if (separator.length !== 1) {
        warn("mention", "`separator`'s length must be 1.");
        return false;
      }
      return true;
    },
    default: " "
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  disabled: Boolean,
  value: String,
  defaultValue: {
    type: String,
    default: ""
  },
  loading: Boolean,
  prefix: {
    type: [String, Array],
    default: "@"
  },
  placeholder: {
    type: String,
    default: ""
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  size: String,
  renderLabel: Function,
  status: String,
  "onUpdate:show": [Array, Function],
  onUpdateShow: [Array, Function],
  "onUpdate:value": [Array, Function],
  onUpdateValue: [Array, Function],
  onSearch: Function,
  onSelect: Function,
  onFocus: Function,
  onBlur: Function,
  // private
  internalDebug: Boolean
});
const NMention = defineComponent({
  name: "Mention",
  props: mentionProps,
  slots: Object,
  setup(props) {
    const {
      namespaceRef,
      mergedClsPrefixRef,
      mergedBorderedRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Mention", "-mention", style, mentionLight, props, mergedClsPrefixRef);
    const formItem = useFormItem(props);
    const inputInstRef = ref(null);
    const cursorRef = ref(null);
    const followerRef = ref(null);
    const wrapperElRef = ref(null);
    const partialPatternRef = ref("");
    let cachedPrefix = null;
    let cachedPartialPatternStart = null;
    let cachedPartialPatternEnd = null;
    const filteredOptionsRef = computed(() => {
      const {
        value: pattern
      } = partialPatternRef;
      return props.options.filter((option) => props.filter(pattern, option));
    });
    const treeMateRef = computed(() => {
      return createTreeMate(filteredOptionsRef.value, {
        getKey: (v) => {
          return v.value;
        }
      });
    });
    const selectMenuInstRef = ref(null);
    const showMenuRef = ref(false);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          menuBoxShadow
        }
      } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("mention", void 0, cssVarsRef, props) : void 0;
    function doUpdateShowMenu(show) {
      if (props.disabled) return;
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, show);
      if (_onUpdateShow) call(_onUpdateShow, show);
      if (!show) {
        cachedPrefix = null;
        cachedPartialPatternStart = null;
        cachedPartialPatternEnd = null;
      }
      showMenuRef.value = show;
    }
    function doUpdateValue(value) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      if (_onUpdateValue) {
        call(_onUpdateValue, value);
      }
      if (onUpdateValue) {
        call(onUpdateValue, value);
      }
      nTriggerFormInput();
      nTriggerFormChange();
      uncontrolledValueRef.value = value;
    }
    function getInputEl() {
      return props.type === "text" ? inputInstRef.value.inputElRef : inputInstRef.value.textareaElRef;
    }
    function deriveShowMenu() {
      var _a;
      const inputEl = getInputEl();
      if ((void 0).activeElement !== inputEl) {
        doUpdateShowMenu(false);
        return;
      }
      const {
        selectionEnd
      } = inputEl;
      if (selectionEnd === null) {
        doUpdateShowMenu(false);
        return;
      }
      const inputValue = inputEl.value;
      const {
        separator
      } = props;
      const {
        prefix
      } = props;
      const prefixArray = typeof prefix === "string" ? [prefix] : prefix;
      for (let i = selectionEnd - 1; i >= 0; --i) {
        const char = inputValue[i];
        if (char === separator || char === "\n" || char === "\r") {
          doUpdateShowMenu(false);
          return;
        }
        if (prefixArray.includes(char)) {
          const partialPattern = inputValue.slice(i + 1, selectionEnd);
          doUpdateShowMenu(true);
          (_a = props.onSearch) === null || _a === void 0 ? void 0 : _a.call(props, partialPattern, char);
          partialPatternRef.value = partialPattern;
          cachedPrefix = char;
          cachedPartialPatternStart = i + 1;
          cachedPartialPatternEnd = selectionEnd;
          return;
        }
      }
      doUpdateShowMenu(false);
    }
    function syncCursor() {
      const {
        value: cursorAnchor
      } = cursorRef;
      if (!cursorAnchor) return;
      const inputEl = getInputEl();
      const cursorPos = getRelativePosition(inputEl);
      const inputRect = inputEl.getBoundingClientRect();
      const wrapperRect = wrapperElRef.value.getBoundingClientRect();
      cursorAnchor.style.left = `${cursorPos.left + inputRect.left - wrapperRect.left}px`;
      cursorAnchor.style.top = `${cursorPos.top + inputRect.top - wrapperRect.top}px`;
      cursorAnchor.style.height = `${cursorPos.height}px`;
    }
    function syncPosition() {
      var _a;
      if (!showMenuRef.value) return;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function handleInputUpdateValue(value) {
      doUpdateValue(value);
      syncAfterCursorMove();
    }
    function syncAfterCursorMove() {
      setTimeout(() => {
        syncCursor();
        deriveShowMenu();
        void nextTick().then(syncPosition);
      }, 0);
    }
    function handleInputKeyDown(e) {
      var _a, _b;
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        if ((_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.isCompositing) return;
        syncAfterCursorMove();
      } else if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Enter") {
        if ((_b = inputInstRef.value) === null || _b === void 0 ? void 0 : _b.isCompositing) return;
        const {
          value: selectMenuInst
        } = selectMenuInstRef;
        if (showMenuRef.value) {
          if (selectMenuInst) {
            e.preventDefault();
            if (e.key === "ArrowUp") {
              selectMenuInst.prev();
            } else if (e.key === "ArrowDown") {
              selectMenuInst.next();
            } else {
              const pendingOptionTmNode = selectMenuInst.getPendingTmNode();
              if (pendingOptionTmNode) {
                handleSelect(pendingOptionTmNode);
              } else {
                doUpdateShowMenu(false);
              }
            }
          }
        } else {
          syncAfterCursorMove();
        }
      }
    }
    function handleInputFocus(e) {
      const {
        onFocus
      } = props;
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
      const {
        nTriggerFormFocus
      } = formItem;
      nTriggerFormFocus();
      syncAfterCursorMove();
    }
    function focus() {
      var _a;
      (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    }
    function blur() {
      var _a;
      (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    }
    function handleInputBlur(e) {
      const {
        onBlur
      } = props;
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
      const {
        nTriggerFormBlur
      } = formItem;
      nTriggerFormBlur();
      doUpdateShowMenu(false);
    }
    function handleSelect(tmNode) {
      var _a;
      if (cachedPrefix === null || cachedPartialPatternStart === null || cachedPartialPatternEnd === null) {
        return;
      }
      const {
        rawNode: {
          value = ""
        }
      } = tmNode;
      const inputEl = getInputEl();
      const inputValue = inputEl.value;
      const {
        separator
      } = props;
      const nextEndPart = inputValue.slice(cachedPartialPatternEnd);
      const alreadySeparated = nextEndPart.startsWith(separator);
      const nextMiddlePart = `${value}${alreadySeparated ? "" : separator}`;
      doUpdateValue(inputValue.slice(0, cachedPartialPatternStart) + nextMiddlePart + nextEndPart);
      (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, tmNode.rawNode, cachedPrefix);
      const nextSelectionEnd = cachedPartialPatternStart + nextMiddlePart.length + (alreadySeparated ? 1 : 0);
      void nextTick().then(() => {
        inputEl.selectionStart = nextSelectionEnd;
        inputEl.selectionEnd = nextSelectionEnd;
        deriveShowMenu();
      });
    }
    function handleInputMouseDown() {
      if (!props.disabled) {
        syncAfterCursorMove();
      }
    }
    return {
      namespace: namespaceRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedSize: formItem.mergedSizeRef,
      mergedStatus: formItem.mergedStatusRef,
      mergedTheme: themeRef,
      treeMate: treeMateRef,
      selectMenuInstRef,
      inputInstRef,
      cursorRef,
      followerRef,
      wrapperElRef,
      showMenu: showMenuRef,
      adjustedTo: useAdjustedTo(props),
      isMounted: useIsMounted(),
      mergedValue: mergedValueRef,
      handleInputFocus,
      handleInputBlur,
      handleInputUpdateValue,
      handleInputKeyDown,
      handleSelect,
      handleInputMouseDown,
      focus,
      blur,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedTheme,
      mergedClsPrefix,
      $slots
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-mention`,
      ref: "wrapperElRef"
    }, h(NInput, {
      status: this.mergedStatus,
      themeOverrides: mergedTheme.peerOverrides.Input,
      theme: mergedTheme.peers.Input,
      size: this.mergedSize,
      autosize: this.autosize,
      type: this.type,
      ref: "inputInstRef",
      placeholder: this.placeholder,
      onMousedown: this.handleInputMouseDown,
      onUpdateValue: this.handleInputUpdateValue,
      onKeydown: this.handleInputKeyDown,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur,
      bordered: this.mergedBordered,
      disabled: this.disabled,
      value: this.mergedValue
    }), h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => {
          const style2 = {
            position: "absolute",
            width: 0
          };
          return h("div", {
            style: style2,
            ref: "cursorRef"
          });
        }
      }), h(VFollower, {
        ref: "followerRef",
        placement: this.placement,
        show: this.showMenu,
        containerClass: this.namespace,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            const {
              mergedTheme: mergedTheme2,
              onRender
            } = this;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            return this.showMenu ? h(NInternalSelectMenu, {
              clsPrefix: mergedClsPrefix,
              theme: mergedTheme2.peers.InternalSelectMenu,
              themeOverrides: mergedTheme2.peerOverrides.InternalSelectMenu,
              autoPending: true,
              ref: "selectMenuInstRef",
              class: [`${mergedClsPrefix}-mention-menu`, this.themeClass],
              loading: this.loading,
              treeMate: this.treeMate,
              virtualScroll: false,
              style: this.cssVars,
              onToggle: this.handleSelect,
              renderLabel: this.renderLabel
            }, $slots) : null;
          }
        })
      })]
    }));
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Mention",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      {
        label: "07akioni",
        value: "07akioni"
      },
      {
        label: "star-kirby",
        value: "star-kirby"
      },
      {
        label: "amadeus711",
        value: "amadeus711"
      }
    ];
    function renderLabel(option) {
      return h("div", { style: "display: flex; align-items: center; gap:8px" }, [
        h(NAvatar, {
          size: 24,
          round: true,
          src: "https://picsum.photos/seed/FsNXmz/460/460"
        }),
        option.value
      ]);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Mention</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/mention" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-mention :options :render-label="renderLabel" placeholder="Type '@'" :prefix="['@']" />
					`))} ${ssrInterpolate(js(`
						const options = [
							{
								label: "07akioni",
								value: "07akioni"
							},
							{
								label: "star-kirby",
								value: "star-kirby"
							},
							{
								label: "amadeus711",
								value: "amadeus711"
							}
						]
						const renderLabel = (option: MentionOption): VNodeChild =>
							h("div", { style: "display: flex; align-items: center;" }, [
								h(NAvatar, {
									style: "margin-right: 8px;",
									size: 24,
									round: true,
									src: "https://picsum.photos/seed/FsNXmz/460/460"
								}),
								option.value
							])
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-mention :options :render-label="renderLabel" placeholder="Type '@'" :prefix="['@']" />
					`)) + " " + toDisplayString(js(`
						const options = [
							{
								label: "07akioni",
								value: "07akioni"
							},
							{
								label: "star-kirby",
								value: "star-kirby"
							},
							{
								label: "amadeus711",
								value: "amadeus711"
							}
						]
						const renderLabel = (option: MentionOption): VNodeChild =>
							h("div", { style: "display: flex; align-items: center;" }, [
								h(NAvatar, {
									style: "margin-right: 8px;",
									size: 24,
									round: true,
									src: "https://picsum.photos/seed/FsNXmz/460/460"
								}),
								option.value
							])
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NMention), {
              options,
              "render-label": renderLabel,
              placeholder: "Type '@'",
              prefix: ["@"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NMention), {
                options,
                "render-label": renderLabel,
                placeholder: "Type '@'",
                prefix: ["@"]
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Textarea" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-mention type="textarea" :options :autosize="{ minRows: 3 }" />
					`))} ${ssrInterpolate(js(`
						const options = [
							{
								label: "07akioni",
								value: "07akioni"
							},
							{
								label: "star-kirby",
								value: "star-kirby"
							},
							{
								label: "amadeus711",
								value: "amadeus711"
							}
						]
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-mention type="textarea" :options :autosize="{ minRows: 3 }" />
					`)) + " " + toDisplayString(js(`
						const options = [
							{
								label: "07akioni",
								value: "07akioni"
							},
							{
								label: "star-kirby",
								value: "star-kirby"
							},
							{
								label: "amadeus711",
								value: "amadeus711"
							}
						]
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NMention), {
              type: "textarea",
              options,
              autosize: { minRows: 3 }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NMention), {
                type: "textarea",
                options,
                autosize: { minRows: 3 }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Mention.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Mention-BpzWWtZW.mjs.map
