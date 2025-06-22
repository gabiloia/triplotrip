import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, h, Transition, computed, toRef, watch, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, c as NText, aj as Binder, ak as VTarget, K as resolveSlot, al as VFollower, am as useAdjustedTo, v as useConfig, x as useTheme, bB as sliderLight, m as c$1, L as useFormItem, z as useThemeClass, k as cB, aE as insideModal, aF as insidePopover, l as cM, n as cE, a2 as fadeInScaleUpTransition, C as call } from './server.mjs';
import { off, on } from 'evtd';
import { useMergedState, useIsMounted } from 'vooks';
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

const style = c$1([cB("slider", `
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `, [cM("reverse", [cB("slider-handles", [cB("slider-handle-wrapper", `
 transform: translate(50%, -50%);
 `)]), cB("slider-dots", [cB("slider-dot", `
 transform: translateX(50%, -50%);
 `)]), cM("vertical", [cB("slider-handles", [cB("slider-handle-wrapper", `
 transform: translate(-50%, -50%);
 `)]), cB("slider-marks", [cB("slider-mark", `
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]), cB("slider-dots", [cB("slider-dot", `
 transform: translateX(-50%) translateY(0);
 `)])])]), cM("vertical", `
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `, [cB("slider-handles", `
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `, [cB("slider-handle-wrapper", `
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]), cB("slider-rail", `
 height: 100%;
 `, [cE("fill", `
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]), cM("with-mark", `
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `), cB("slider-marks", `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `, [cB("slider-mark", `
 transform: translateY(50%);
 white-space: nowrap;
 `)]), cB("slider-dots", `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `, [cB("slider-dot", `
 transform: translateX(-50%) translateY(50%);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `, [cB("slider-handle", `
 cursor: not-allowed;
 `)]), cM("with-mark", `
 width: 100%;
 margin: 8px 0 32px 0;
 `), c$1("&:hover", [cB("slider-rail", {
  backgroundColor: "var(--n-rail-color-hover)"
}, [cE("fill", {
  backgroundColor: "var(--n-fill-color-hover)"
})]), cB("slider-handle", {
  boxShadow: "var(--n-handle-box-shadow-hover)"
})]), cM("active", [cB("slider-rail", {
  backgroundColor: "var(--n-rail-color-hover)"
}, [cE("fill", {
  backgroundColor: "var(--n-fill-color-hover)"
})]), cB("slider-handle", {
  boxShadow: "var(--n-handle-box-shadow-hover)"
})]), cB("slider-marks", `
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [cB("slider-mark", `
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]), cB("slider-rail", `
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `, [cE("fill", `
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]), cB("slider-handles", `
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `, [cB("slider-handle-wrapper", `
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `, [cB("slider-handle", `
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `, [c$1("&:hover", `
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]), c$1("&:focus", [cB("slider-handle", `
 box-shadow: var(--n-handle-box-shadow-focus);
 `, [c$1("&:hover", `
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]), cB("slider-dots", `
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [cM("transition-disabled", [cB("slider-dot", "transition: none;")]), cB("slider-dot", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `, [cM("active", "border: var(--n-dot-border-active);")])])]), cB("slider-handle-indicator", `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [fadeInScaleUpTransition()]), cB("slider-handle-indicator", `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [cM("top", `
 margin-bottom: 12px;
 `), cM("right", `
 margin-left: 12px;
 `), cM("bottom", `
 margin-top: 12px;
 `), cM("left", `
 margin-right: 12px;
 `), fadeInScaleUpTransition()]), insideModal(cB("slider", [cB("slider-dot", "background-color: var(--n-dot-color-modal);")])), insidePopover(cB("slider", [cB("slider-dot", "background-color: var(--n-dot-color-popover);")]))]);
function isTouchEvent(e) {
  return (void 0).TouchEvent && e instanceof (void 0).TouchEvent;
}
function useRefs() {
  const refs = /* @__PURE__ */ new Map();
  const setRefs = (index) => (el) => {
    refs.set(index, el);
  };
  return [refs, setRefs];
}
const eventButtonLeft = 0;
const sliderProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  defaultValue: {
    type: [Number, Array],
    default: 0
  },
  marks: Object,
  disabled: {
    type: Boolean,
    default: void 0
  },
  formatTooltip: Function,
  keyboard: {
    type: Boolean,
    default: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  value: [Number, Array],
  placement: String,
  showTooltip: {
    type: Boolean,
    default: void 0
  },
  tooltip: {
    type: Boolean,
    default: true
  },
  vertical: Boolean,
  reverse: Boolean,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onDragstart: [Function],
  onDragend: [Function]
});
const NSlider = defineComponent({
  name: "Slider",
  props: sliderProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Slider", "-slider", style, sliderLight, props, mergedClsPrefixRef);
    const handleRailRef = ref(null);
    const [handleRefs, setHandleRefs] = useRefs();
    const [followerRefs, setFollowerRefs] = useRefs();
    const followerEnabledIndexSetRef = ref(/* @__PURE__ */ new Set());
    const formItem = useFormItem(props);
    const {
      mergedDisabledRef
    } = formItem;
    const precisionRef = computed(() => {
      const {
        step
      } = props;
      if (Number(step) <= 0 || step === "mark") return 0;
      const stepString = step.toString();
      let precision = 0;
      if (stepString.includes(".")) {
        precision = stepString.length - stepString.indexOf(".") - 1;
      }
      return precision;
    });
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const arrifiedValueRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      return (props.range ? mergedValue : [mergedValue]).map(clampValue);
    });
    const handleCountExceeds2Ref = computed(() => arrifiedValueRef.value.length > 2);
    const mergedPlacementRef = computed(() => {
      return props.placement === void 0 ? props.vertical ? "right" : "top" : props.placement;
    });
    const markValuesRef = computed(() => {
      const {
        marks
      } = props;
      return marks ? Object.keys(marks).map(Number.parseFloat) : null;
    });
    const activeIndexRef = ref(-1);
    const previousIndexRef = ref(-1);
    const hoverIndexRef = ref(-1);
    const draggingRef = ref(false);
    const dotTransitionDisabledRef = ref(false);
    const styleDirectionRef = computed(() => {
      const {
        vertical,
        reverse
      } = props;
      const left = reverse ? "right" : "left";
      const bottom = reverse ? "top" : "bottom";
      return vertical ? bottom : left;
    });
    const fillStyleRef = computed(() => {
      if (handleCountExceeds2Ref.value) return;
      const values = arrifiedValueRef.value;
      const start = valueToPercentage(props.range ? Math.min(...values) : props.min);
      const end = valueToPercentage(props.range ? Math.max(...values) : values[0]);
      const {
        value: styleDirection
      } = styleDirectionRef;
      return props.vertical ? {
        [styleDirection]: `${start}%`,
        height: `${end - start}%`
      } : {
        [styleDirection]: `${start}%`,
        width: `${end - start}%`
      };
    });
    const markInfosRef = computed(() => {
      const mergedMarks = [];
      const {
        marks
      } = props;
      if (marks) {
        const orderValues = arrifiedValueRef.value.slice();
        orderValues.sort((a, b) => a - b);
        const {
          value: styleDirection
        } = styleDirectionRef;
        const {
          value: handleCountExceeds2
        } = handleCountExceeds2Ref;
        const {
          range
        } = props;
        const isActive = handleCountExceeds2 ? () => false : (num) => range ? num >= orderValues[0] && num <= orderValues[orderValues.length - 1] : num <= orderValues[0];
        for (const key of Object.keys(marks)) {
          const num = Number(key);
          mergedMarks.push({
            active: isActive(num),
            key: num,
            label: marks[key],
            style: {
              [styleDirection]: `${valueToPercentage(num)}%`
            }
          });
        }
      }
      return mergedMarks;
    });
    function getHandleStyle(value, index) {
      const percentage = valueToPercentage(value);
      const {
        value: styleDirection
      } = styleDirectionRef;
      return {
        [styleDirection]: `${percentage}%`,
        zIndex: index === activeIndexRef.value ? 1 : 0
      };
    }
    function isShowTooltip(index) {
      return props.showTooltip || hoverIndexRef.value === index || activeIndexRef.value === index && draggingRef.value;
    }
    function shouldKeepTooltipTransition(index) {
      if (!draggingRef.value) return true;
      return !(activeIndexRef.value === index && previousIndexRef.value === index);
    }
    function focusActiveHandle(index) {
      var _a;
      if (~index) {
        activeIndexRef.value = index;
        (_a = handleRefs.get(index)) === null || _a === void 0 ? void 0 : _a.focus();
      }
    }
    function syncPosition() {
      followerRefs.forEach((inst, index) => {
        if (isShowTooltip(index)) inst.syncPosition();
      });
    }
    function doUpdateValue(value) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function dispatchValueUpdate(value) {
      const {
        range
      } = props;
      if (range) {
        if (Array.isArray(value)) {
          const {
            value: oldValues
          } = arrifiedValueRef;
          if (value.join() !== oldValues.join()) {
            doUpdateValue(value);
          }
        }
      } else if (!Array.isArray(value)) {
        const oldValue = arrifiedValueRef.value[0];
        if (oldValue !== value) {
          doUpdateValue(value);
        }
      }
    }
    function doDispatchValue(value, index) {
      if (props.range) {
        const values = arrifiedValueRef.value.slice();
        values.splice(index, 1, value);
        dispatchValueUpdate(values);
      } else {
        dispatchValueUpdate(value);
      }
    }
    function sanitizeValue(value, currentValue, stepBuffer) {
      const stepping = stepBuffer !== void 0;
      if (!stepBuffer) {
        stepBuffer = value - currentValue > 0 ? 1 : -1;
      }
      const markValues = markValuesRef.value || [];
      const {
        step
      } = props;
      if (step === "mark") {
        const closestMark2 = getClosestMark(value, markValues.concat(currentValue), stepping ? stepBuffer : void 0);
        return closestMark2 ? closestMark2.value : currentValue;
      }
      if (step <= 0) return currentValue;
      const {
        value: precision
      } = precisionRef;
      let closestMark;
      if (stepping) {
        const currentStep = Number((currentValue / step).toFixed(precision));
        const actualStep = Math.floor(currentStep);
        const leftStep = currentStep > actualStep ? actualStep : actualStep - 1;
        const rightStep = currentStep < actualStep ? actualStep : actualStep + 1;
        closestMark = getClosestMark(currentValue, [Number((leftStep * step).toFixed(precision)), Number((rightStep * step).toFixed(precision)), ...markValues], stepBuffer);
      } else {
        const roundValue = getRoundValue(value);
        closestMark = getClosestMark(value, [...markValues, roundValue]);
      }
      return closestMark ? clampValue(closestMark.value) : currentValue;
    }
    function clampValue(value) {
      return Math.min(props.max, Math.max(props.min, value));
    }
    function valueToPercentage(value) {
      const {
        max,
        min
      } = props;
      return (value - min) / (max - min) * 100;
    }
    function percentageToValue(percentage) {
      const {
        max,
        min
      } = props;
      return min + (max - min) * percentage;
    }
    function getRoundValue(value) {
      const {
        step,
        min
      } = props;
      if (Number(step) <= 0 || step === "mark") return value;
      const newValue = Math.round((value - min) / step) * step + min;
      return Number(newValue.toFixed(precisionRef.value));
    }
    function getClosestMark(currentValue, markValues = markValuesRef.value, buffer) {
      if (!(markValues === null || markValues === void 0 ? void 0 : markValues.length)) return null;
      let closestMark = null;
      let index = -1;
      while (++index < markValues.length) {
        const diff = markValues[index] - currentValue;
        const distance = Math.abs(diff);
        if (
          // find marks in the same direction
          (buffer === void 0 || diff * buffer > 0) && (closestMark === null || distance < closestMark.distance)
        ) {
          closestMark = {
            index,
            distance,
            value: markValues[index]
          };
        }
      }
      return closestMark;
    }
    function getPointValue(event) {
      const railEl = handleRailRef.value;
      if (!railEl) return;
      const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
      const railRect = railEl.getBoundingClientRect();
      let percentage;
      if (props.vertical) {
        percentage = (railRect.bottom - touchEvent.clientY) / railRect.height;
      } else {
        percentage = (touchEvent.clientX - railRect.left) / railRect.width;
      }
      if (props.reverse) {
        percentage = 1 - percentage;
      }
      return percentageToValue(percentage);
    }
    function handleRailKeyDown(e) {
      if (mergedDisabledRef.value || !props.keyboard) return;
      const {
        vertical,
        reverse
      } = props;
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          handleStepValue(vertical && reverse ? -1 : 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          handleStepValue(!vertical && reverse ? -1 : 1);
          break;
        case "ArrowDown":
          e.preventDefault();
          handleStepValue(vertical && reverse ? 1 : -1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          handleStepValue(!vertical && reverse ? 1 : -1);
          break;
      }
    }
    function handleStepValue(ratio) {
      const activeIndex = activeIndexRef.value;
      if (activeIndex === -1) return;
      const {
        step
      } = props;
      const currentValue = arrifiedValueRef.value[activeIndex];
      const nextValue = Number(step) <= 0 || step === "mark" ? currentValue : currentValue + step * ratio;
      doDispatchValue(
        // Avoid the number of value does not change when `step` is null
        sanitizeValue(nextValue, currentValue, ratio > 0 ? 1 : -1),
        activeIndex
      );
    }
    function handleRailMouseDown(event) {
      var _a, _b;
      if (mergedDisabledRef.value) return;
      if (!isTouchEvent(event) && event.button !== eventButtonLeft) {
        return;
      }
      const pointValue = getPointValue(event);
      if (pointValue === void 0) return;
      const values = arrifiedValueRef.value.slice();
      const activeIndex = props.range ? (_b = (_a = getClosestMark(pointValue, values)) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : -1 : 0;
      if (activeIndex !== -1) {
        event.preventDefault();
        focusActiveHandle(activeIndex);
        startDragging();
        doDispatchValue(sanitizeValue(pointValue, arrifiedValueRef.value[activeIndex]), activeIndex);
      }
    }
    function startDragging() {
      if (!draggingRef.value) {
        draggingRef.value = true;
        if (props.onDragstart) call(props.onDragstart);
        on("touchend", void 0, handleMouseUp);
        on("mouseup", void 0, handleMouseUp);
        on("touchmove", void 0, handleMouseMove);
        on("mousemove", void 0, handleMouseMove);
      }
    }
    function stopDragging() {
      if (draggingRef.value) {
        draggingRef.value = false;
        if (props.onDragend) call(props.onDragend);
        off("touchend", void 0, handleMouseUp);
        off("mouseup", void 0, handleMouseUp);
        off("touchmove", void 0, handleMouseMove);
        off("mousemove", void 0, handleMouseMove);
      }
    }
    function handleMouseMove(event) {
      const {
        value: activeIndex
      } = activeIndexRef;
      if (!draggingRef.value || activeIndex === -1) {
        stopDragging();
        return;
      }
      const pointValue = getPointValue(event);
      if (pointValue === void 0) return;
      doDispatchValue(sanitizeValue(pointValue, arrifiedValueRef.value[activeIndex]), activeIndex);
    }
    function handleMouseUp() {
      stopDragging();
    }
    function handleHandleFocus(index) {
      activeIndexRef.value = index;
      if (!mergedDisabledRef.value) {
        hoverIndexRef.value = index;
      }
    }
    function handleHandleBlur(index) {
      if (activeIndexRef.value === index) {
        activeIndexRef.value = -1;
        stopDragging();
      }
      if (hoverIndexRef.value === index) {
        hoverIndexRef.value = -1;
      }
    }
    function handleHandleMouseEnter(index) {
      hoverIndexRef.value = index;
    }
    function handleHandleMouseLeave(index) {
      if (hoverIndexRef.value === index) {
        hoverIndexRef.value = -1;
      }
    }
    watch(activeIndexRef, (_, previous) => void nextTick(() => previousIndexRef.value = previous));
    watch(mergedValueRef, () => {
      if (props.marks) {
        if (dotTransitionDisabledRef.value) return;
        dotTransitionDisabledRef.value = true;
        void nextTick(() => {
          dotTransitionDisabledRef.value = false;
        });
      }
      void nextTick(syncPosition);
    });
    const cssVarsRef = computed(() => {
      const {
        self: {
          markFontSize,
          railColor,
          railColorHover,
          fillColor,
          fillColorHover,
          handleColor,
          opacityDisabled,
          dotColor,
          dotColorModal,
          handleBoxShadow,
          handleBoxShadowHover,
          handleBoxShadowActive,
          handleBoxShadowFocus,
          dotBorder,
          dotBoxShadow,
          railHeight,
          railWidthVertical,
          handleSize,
          dotHeight,
          dotWidth,
          dotBorderRadius,
          fontSize,
          dotBorderActive,
          dotColorPopover
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-dot-border": dotBorder,
        "--n-dot-border-active": dotBorderActive,
        "--n-dot-border-radius": dotBorderRadius,
        "--n-dot-box-shadow": dotBoxShadow,
        "--n-dot-color": dotColor,
        "--n-dot-color-modal": dotColorModal,
        "--n-dot-color-popover": dotColorPopover,
        "--n-dot-height": dotHeight,
        "--n-dot-width": dotWidth,
        "--n-fill-color": fillColor,
        "--n-fill-color-hover": fillColorHover,
        "--n-font-size": fontSize,
        "--n-handle-box-shadow": handleBoxShadow,
        "--n-handle-box-shadow-active": handleBoxShadowActive,
        "--n-handle-box-shadow-focus": handleBoxShadowFocus,
        "--n-handle-box-shadow-hover": handleBoxShadowHover,
        "--n-handle-color": handleColor,
        "--n-handle-size": handleSize,
        "--n-opacity-disabled": opacityDisabled,
        "--n-rail-color": railColor,
        "--n-rail-color-hover": railColorHover,
        "--n-rail-height": railHeight,
        "--n-rail-width-vertical": railWidthVertical,
        "--n-mark-font-size": markFontSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("slider", void 0, cssVarsRef, props) : void 0;
    const indicatorCssVarsRef = computed(() => {
      const {
        self: {
          fontSize,
          indicatorColor,
          indicatorBoxShadow,
          indicatorTextColor,
          indicatorBorderRadius
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-indicator-border-radius": indicatorBorderRadius,
        "--n-indicator-box-shadow": indicatorBoxShadow,
        "--n-indicator-color": indicatorColor,
        "--n-indicator-text-color": indicatorTextColor
      };
    });
    const indicatorThemeClassHandle = inlineThemeDisabled ? useThemeClass("slider-indicator", void 0, indicatorCssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      mergedPlacement: mergedPlacementRef,
      isMounted: useIsMounted(),
      adjustedTo: useAdjustedTo(props),
      dotTransitionDisabled: dotTransitionDisabledRef,
      markInfos: markInfosRef,
      isShowTooltip,
      shouldKeepTooltipTransition,
      handleRailRef,
      setHandleRefs,
      setFollowerRefs,
      fillStyle: fillStyleRef,
      getHandleStyle,
      activeIndex: activeIndexRef,
      arrifiedValues: arrifiedValueRef,
      followerEnabledIndexSet: followerEnabledIndexSetRef,
      handleRailMouseDown,
      handleHandleFocus,
      handleHandleBlur,
      handleHandleMouseEnter,
      handleHandleMouseLeave,
      handleRailKeyDown,
      indicatorCssVars: inlineThemeDisabled ? void 0 : indicatorCssVarsRef,
      indicatorThemeClass: indicatorThemeClassHandle === null || indicatorThemeClassHandle === void 0 ? void 0 : indicatorThemeClassHandle.themeClass,
      indicatorOnRender: indicatorThemeClassHandle === null || indicatorThemeClassHandle === void 0 ? void 0 : indicatorThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      themeClass,
      formatTooltip
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-slider`, themeClass, {
        [`${mergedClsPrefix}-slider--disabled`]: this.mergedDisabled,
        [`${mergedClsPrefix}-slider--active`]: this.activeIndex !== -1,
        [`${mergedClsPrefix}-slider--with-mark`]: this.marks,
        [`${mergedClsPrefix}-slider--vertical`]: this.vertical,
        [`${mergedClsPrefix}-slider--reverse`]: this.reverse
      }],
      style: this.cssVars,
      onKeydown: this.handleRailKeyDown,
      onMousedown: this.handleRailMouseDown,
      onTouchstart: this.handleRailMouseDown
    }, h("div", {
      class: `${mergedClsPrefix}-slider-rail`
    }, h("div", {
      class: `${mergedClsPrefix}-slider-rail__fill`,
      style: this.fillStyle
    }), this.marks ? h("div", {
      class: [`${mergedClsPrefix}-slider-dots`, this.dotTransitionDisabled && `${mergedClsPrefix}-slider-dots--transition-disabled`]
    }, this.markInfos.map((mark) => h("div", {
      key: mark.key,
      class: [`${mergedClsPrefix}-slider-dot`, {
        [`${mergedClsPrefix}-slider-dot--active`]: mark.active
      }],
      style: mark.style
    }))) : null, h("div", {
      ref: "handleRailRef",
      class: `${mergedClsPrefix}-slider-handles`
    }, this.arrifiedValues.map((value, index) => {
      const showTooltip = this.isShowTooltip(index);
      return h(Binder, null, {
        default: () => [h(VTarget, null, {
          default: () => h("div", {
            ref: this.setHandleRefs(index),
            class: `${mergedClsPrefix}-slider-handle-wrapper`,
            tabindex: this.mergedDisabled ? -1 : 0,
            role: "slider",
            "aria-valuenow": value,
            "aria-valuemin": this.min,
            "aria-valuemax": this.max,
            "aria-orientation": this.vertical ? "vertical" : "horizontal",
            "aria-disabled": this.disabled,
            style: this.getHandleStyle(value, index),
            onFocus: () => {
              this.handleHandleFocus(index);
            },
            onBlur: () => {
              this.handleHandleBlur(index);
            },
            onMouseenter: () => {
              this.handleHandleMouseEnter(index);
            },
            onMouseleave: () => {
              this.handleHandleMouseLeave(index);
            }
          }, resolveSlot(this.$slots.thumb, () => [h("div", {
            class: `${mergedClsPrefix}-slider-handle`
          })]))
        }), this.tooltip && h(VFollower, {
          ref: this.setFollowerRefs(index),
          show: showTooltip,
          to: this.adjustedTo,
          enabled: this.showTooltip && !this.range || this.followerEnabledIndexSet.has(index),
          teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
          placement: this.mergedPlacement,
          containerClass: this.namespace
        }, {
          default: () => h(Transition, {
            name: "fade-in-scale-up-transition",
            appear: this.isMounted,
            css: this.shouldKeepTooltipTransition(index),
            onEnter: () => {
              this.followerEnabledIndexSet.add(index);
            },
            onAfterLeave: () => {
              this.followerEnabledIndexSet.delete(index);
            }
          }, {
            default: () => {
              var _a2;
              if (showTooltip) {
                (_a2 = this.indicatorOnRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
                return h("div", {
                  class: [`${mergedClsPrefix}-slider-handle-indicator`, this.indicatorThemeClass, `${mergedClsPrefix}-slider-handle-indicator--${this.mergedPlacement}`],
                  style: this.indicatorCssVars
                }, typeof formatTooltip === "function" ? formatTooltip(value) : value);
              }
              return null;
            }
          })
        })]
      });
    })), this.marks ? h("div", {
      class: `${mergedClsPrefix}-slider-marks`
    }, this.markInfos.map((mark) => h("div", {
      key: mark.key,
      class: `${mergedClsPrefix}-slider-mark`,
      style: mark.style
    }, typeof mark.label === "function" ? mark.label() : mark.label))) : null));
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(50);
    const value1 = ref([50, 70]);
    const marks = {
      34: "Amazing",
      75: "Good"
    };
    const marks1 = {
      20: "Amazing",
      80: "Good"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Slider</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/slider" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-slider v-model:value="value" :step="10" />
					`))} ${ssrInterpolate(js(`const value = ref(50)`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-slider v-model:value="value" :step="10" />
					`)) + " " + toDisplayString(js(`const value = ref(50)`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSlider), {
              value: value.value,
              "onUpdate:value": ($event) => value.value = $event,
              step: 10
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSlider), {
                value: value.value,
                "onUpdate:value": ($event) => value.value = $event,
                step: 10
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Range" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-slider v-model:value="value1" range :marks="marks" :step="10" />
					`))} ${ssrInterpolate(js(`
						const value1 = ref([50, 70])
						const marks = {
							34: "Amazing",
							75: "Good"
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-slider v-model:value="value1" range :marks="marks" :step="10" />
					`)) + " " + toDisplayString(js(`
						const value1 = ref([50, 70])
						const marks = {
							34: "Amazing",
							75: "Good"
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSlider), {
              value: value1.value,
              "onUpdate:value": ($event) => value1.value = $event,
              range: "",
              marks,
              step: 10
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSlider), {
                value: value1.value,
                "onUpdate:value": ($event) => value1.value = $event,
                range: "",
                marks,
                step: 10
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Vertical" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Set vertical to enable the `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`vertical`);
                } else {
                  return [
                    createTextVNode("vertical")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` mode. Its height depends on the height of the container by default, and you can also customize the height. `);
          } else {
            return [
              createTextVNode(" Set vertical to enable the "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("vertical")
                ]),
                _: 1
              }),
              createTextVNode(" mode. Its height depends on the height of the container by default, and you can also customize the height. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space style="height: 200px; justify-content: center">
						<n-slider :default-value="77" vertical />
						<n-slider :default-value="20" vertical reverse />
						<n-slider :default-value="30" vertical disabled />
						<n-slider v-model:value="value1" :marks="marks1" vertical range />
					</n-space>
					`))} ${ssrInterpolate(js(`
						const value1 = ref([50, 70])
						const marks1 = {
							20: "Amazing",
							80: "Good"
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space style="height: 200px; justify-content: center">
						<n-slider :default-value="77" vertical />
						<n-slider :default-value="20" vertical reverse />
						<n-slider :default-value="30" vertical disabled />
						<n-slider v-model:value="value1" :marks="marks1" vertical range />
					</n-space>
					`)) + " " + toDisplayString(js(`
						const value1 = ref([50, 70])
						const marks1 = {
							20: "Amazing",
							80: "Good"
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { style: { "height": "200px", "justify-content": "center" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSlider), {
                    "default-value": 77,
                    vertical: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSlider), {
                    "default-value": 20,
                    vertical: "",
                    reverse: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSlider), {
                    "default-value": 30,
                    vertical: "",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSlider), {
                    value: value1.value,
                    "onUpdate:value": ($event) => value1.value = $event,
                    marks: marks1,
                    vertical: "",
                    range: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSlider), {
                      "default-value": 77,
                      vertical: ""
                    }),
                    createVNode(unref(NSlider), {
                      "default-value": 20,
                      vertical: "",
                      reverse: ""
                    }),
                    createVNode(unref(NSlider), {
                      "default-value": 30,
                      vertical: "",
                      disabled: ""
                    }),
                    createVNode(unref(NSlider), {
                      value: value1.value,
                      "onUpdate:value": ($event) => value1.value = $event,
                      marks: marks1,
                      vertical: "",
                      range: ""
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { style: { "height": "200px", "justify-content": "center" } }, {
                default: withCtx(() => [
                  createVNode(unref(NSlider), {
                    "default-value": 77,
                    vertical: ""
                  }),
                  createVNode(unref(NSlider), {
                    "default-value": 20,
                    vertical: "",
                    reverse: ""
                  }),
                  createVNode(unref(NSlider), {
                    "default-value": 30,
                    vertical: "",
                    disabled: ""
                  }),
                  createVNode(unref(NSlider), {
                    value: value1.value,
                    "onUpdate:value": ($event) => value1.value = $event,
                    marks: marks1,
                    vertical: "",
                    range: ""
                  }, null, 8, ["value", "onUpdate:value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Slider-DsbF7P26.mjs.map
