import { happensIn, getPreciseEventTarget } from 'seemly';
import { clickoutside } from 'vdirs';
import { useKeyboard, useMergedState, useIsMounted } from 'vooks';
import { defineComponent, h, Transition, withDirectives, ref, computed, watch, toRef, nextTick, provide, inject } from 'vue';
import { s as strictParse, g as getTime } from './utils-gRb4MLhP.mjs';
import { ar as Binder, as as VTarget, h as NBaseIcon, A as replaceable, at as VFollower, au as useAdjustedTo, u as useConfig, T as useLocale, J as useFormItem, s as useTheme, aT as timePickerLight, l as c$1, g as createInjectionKey, x as useThemeClass, S as Scrollbar$1, B as Button, aE as FocusDetector, j as cB, k as cM, $ as fadeInScaleUpTransition, m as cE, n as cNotM, a2 as toDate, z as call, aB as markEventEffectPerformed, t as throwError } from './server.mjs';
import { N as NInput } from './Input-DOxGe8j0.mjs';
import { f as formatInTimeZone } from './index-CulsySW9.mjs';
import { f as format, i as isValid, h as constructFrom } from './getDefaultOptions-Badlq585.mjs';

const TimeIcon = replaceable("time", () => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, h("path", {
  d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z",
  style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-miterlimit: 10;\n        stroke-width: 32px;\n      "
}), h("polyline", {
  points: "256 128 256 272 352 272",
  style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "
})));
function startOfMinute(date) {
  const _date = toDate(date);
  _date.setSeconds(0, 0);
  return _date;
}
function getDaysInMonth(date) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
function getHours(date) {
  const _date = toDate(date);
  const hours = _date.getHours();
  return hours;
}
function getMilliseconds(date) {
  const _date = toDate(date);
  const milliseconds = _date.getMilliseconds();
  return milliseconds;
}
function getMinutes(date) {
  const _date = toDate(date);
  const minutes = _date.getMinutes();
  return minutes;
}
function getSeconds(date) {
  const _date = toDate(date);
  const seconds = _date.getSeconds();
  return seconds;
}
function startOfHour(date) {
  const _date = toDate(date);
  _date.setMinutes(0, 0, 0);
  return _date;
}
function startOfSecond(date) {
  const _date = toDate(date);
  _date.setMilliseconds(0);
  return _date;
}
function setMonth(date, month) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const dateWithDesiredMonth = constructFrom(date, 0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}
function set(date, values) {
  let _date = toDate(date);
  if (isNaN(+_date)) {
    return constructFrom(date, NaN);
  }
  if (values.year != null) {
    _date.setFullYear(values.year);
  }
  if (values.month != null) {
    _date = setMonth(_date, values.month);
  }
  if (values.date != null) {
    _date.setDate(values.date);
  }
  if (values.hours != null) {
    _date.setHours(values.hours);
  }
  if (values.minutes != null) {
    _date.setMinutes(values.minutes);
  }
  if (values.seconds != null) {
    _date.setSeconds(values.seconds);
  }
  if (values.milliseconds != null) {
    _date.setMilliseconds(values.milliseconds);
  }
  return _date;
}
function setHours(date, hours) {
  const _date = toDate(date);
  _date.setHours(hours);
  return _date;
}
function setMinutes(date, minutes) {
  const _date = toDate(date);
  _date.setMinutes(minutes);
  return _date;
}
function setSeconds(date, seconds) {
  const _date = toDate(date);
  _date.setSeconds(seconds);
  return _date;
}
const timePickerInjectionKey = createInjectionKey("n-time-picker");
const PanelCol = defineComponent({
  name: "TimePickerPanelCol",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    activeValue: {
      type: [Number, String],
      default: null
    },
    // It should be required but vue's type seems to have bugs
    onItemClick: Function
  },
  render() {
    const {
      activeValue,
      onItemClick,
      clsPrefix
    } = this;
    return this.data.map((item) => {
      const {
        label,
        disabled,
        value
      } = item;
      const active = activeValue === value;
      return h("div", {
        key: label,
        "data-active": active ? "" : null,
        class: [`${clsPrefix}-time-picker-col__item`, active && `${clsPrefix}-time-picker-col__item--active`, disabled && `${clsPrefix}-time-picker-col__item--disabled`],
        onClick: onItemClick && !disabled ? () => {
          onItemClick(value);
        } : void 0
      }, label);
    });
  }
});
const time = {
  amHours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  pmHours: ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  hours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
  minutes: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  seconds: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  period: ["AM", "PM"]
};
function getFixValue(value) {
  return `00${value}`.slice(-2);
}
function getTimeUnits(defaultValue, stepOrList, isHourWithAmPm) {
  if (Array.isArray(stepOrList)) {
    return (isHourWithAmPm === "am" ? stepOrList.filter((v) => v < 12) : isHourWithAmPm === "pm" ? stepOrList.filter((v) => v >= 12).map((v) => v === 12 ? 12 : v - 12) : stepOrList).map((v) => getFixValue(v));
  } else if (typeof stepOrList === "number") {
    if (isHourWithAmPm === "am") {
      return defaultValue.filter((hour) => {
        const hourAsNumber = Number(hour);
        return hourAsNumber < 12 && hourAsNumber % stepOrList === 0;
      });
    } else if (isHourWithAmPm === "pm") {
      return defaultValue.filter((hour) => {
        const hourAsNumber = Number(hour);
        return hourAsNumber >= 12 && hourAsNumber % stepOrList === 0;
      }).map((hour) => {
        const hourAsNumber = Number(hour);
        return getFixValue(hourAsNumber === 12 ? 12 : hourAsNumber - 12);
      });
    }
    return defaultValue.filter((hour) => {
      return Number(hour) % stepOrList === 0;
    });
  } else {
    return isHourWithAmPm === "am" ? defaultValue.filter((hour) => Number(hour) < 12) : isHourWithAmPm === "pm" ? defaultValue.map((hour) => Number(hour)).filter((hour) => Number(hour) >= 12).map((v) => getFixValue(v === 12 ? 12 : v - 12)) : defaultValue;
  }
}
function isTimeInStep(value, type, stepOrList) {
  if (!stepOrList) {
    return true;
  } else if (typeof stepOrList === "number") {
    return value % stepOrList === 0;
  } else {
    return stepOrList.includes(value);
  }
}
function findSimilarTime(value, type, stepOrList) {
  const list = getTimeUnits(time[type], stepOrList).map(Number);
  let lowerBound, upperBound;
  for (let i = 0; i < list.length; ++i) {
    const v = list[i];
    if (v === value) {
      return v;
    } else if (v > value) {
      upperBound = v;
      break;
    }
    lowerBound = v;
  }
  if (lowerBound === void 0) {
    if (!upperBound) {
      throwError("time-picker", "Please set 'hours' or 'minutes' or 'seconds' props");
    }
    return upperBound;
  }
  if (upperBound === void 0) {
    return lowerBound;
  }
  return upperBound - value > value - lowerBound ? lowerBound : upperBound;
}
function getAmPm(value) {
  return getHours(value) < 12 ? "am" : "pm";
}
const timePickerPanelProps = {
  actions: {
    type: Array,
    default: () => ["now", "confirm"]
  },
  showHour: {
    type: Boolean,
    default: true
  },
  showMinute: {
    type: Boolean,
    default: true
  },
  showSecond: {
    type: Boolean,
    default: true
  },
  showPeriod: {
    type: Boolean,
    default: true
  },
  isHourInvalid: Boolean,
  isMinuteInvalid: Boolean,
  isSecondInvalid: Boolean,
  isAmPmInvalid: Boolean,
  isValueInvalid: Boolean,
  hourValue: {
    type: Number,
    default: null
  },
  minuteValue: {
    type: Number,
    default: null
  },
  secondValue: {
    type: Number,
    default: null
  },
  amPmValue: {
    type: String,
    default: null
  },
  isHourDisabled: Function,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  onHourClick: {
    type: Function,
    required: true
  },
  onMinuteClick: {
    type: Function,
    required: true
  },
  onSecondClick: {
    type: Function,
    required: true
  },
  onAmPmClick: {
    type: Function,
    required: true
  },
  onNowClick: Function,
  clearText: String,
  nowText: String,
  confirmText: String,
  transitionDisabled: Boolean,
  onClearClick: Function,
  onConfirmClick: Function,
  onFocusin: Function,
  onFocusout: Function,
  onFocusDetectorFocus: Function,
  onKeydown: Function,
  hours: [Number, Array],
  minutes: [Number, Array],
  seconds: [Number, Array],
  use12Hours: Boolean
};
const Panel = defineComponent({
  name: "TimePickerPanel",
  props: timePickerPanelProps,
  setup(props) {
    const {
      mergedThemeRef,
      mergedClsPrefixRef
    } = inject(timePickerInjectionKey);
    const hoursRef = computed(() => {
      const {
        isHourDisabled,
        hours,
        use12Hours,
        amPmValue
      } = props;
      if (!use12Hours) {
        return getTimeUnits(time.hours, hours).map((hour) => {
          return {
            label: hour,
            value: Number(hour),
            disabled: isHourDisabled ? isHourDisabled(Number(hour)) : false
          };
        });
      } else {
        const mergedAmPmValue = amPmValue !== null && amPmValue !== void 0 ? amPmValue : getAmPm(Date.now());
        return getTimeUnits(time.hours, hours, mergedAmPmValue).map((hour) => {
          const hourAs12FormattedNumber = Number(hour);
          const hourAs24FormattedNumber = mergedAmPmValue === "pm" && hourAs12FormattedNumber !== 12 ? hourAs12FormattedNumber + 12 : hourAs12FormattedNumber;
          return {
            label: hour,
            value: hourAs24FormattedNumber,
            disabled: isHourDisabled ? isHourDisabled(hourAs24FormattedNumber) : false
          };
        });
      }
    });
    const minutesRef = computed(() => {
      const {
        isMinuteDisabled,
        minutes
      } = props;
      return getTimeUnits(time.minutes, minutes).map((minute) => {
        return {
          label: minute,
          value: Number(minute),
          disabled: isMinuteDisabled ? isMinuteDisabled(Number(minute), props.hourValue) : false
        };
      });
    });
    const secondsRef = computed(() => {
      const {
        isSecondDisabled,
        seconds
      } = props;
      return getTimeUnits(time.seconds, seconds).map((second) => {
        return {
          label: second,
          value: Number(second),
          disabled: isSecondDisabled ? isSecondDisabled(Number(second), props.minuteValue, props.hourValue) : false
        };
      });
    });
    const amPmRef = computed(() => {
      const {
        isHourDisabled
      } = props;
      let amDisabled = true;
      let pmDisabled = true;
      for (let i = 0; i < 12; ++i) {
        if (!(isHourDisabled === null || isHourDisabled === void 0 ? void 0 : isHourDisabled(i))) {
          amDisabled = false;
          break;
        }
      }
      for (let i = 12; i < 24; ++i) {
        if (!(isHourDisabled === null || isHourDisabled === void 0 ? void 0 : isHourDisabled(i))) {
          pmDisabled = false;
          break;
        }
      }
      return [{
        label: "AM",
        value: "am",
        disabled: amDisabled
      }, {
        label: "PM",
        value: "pm",
        disabled: pmDisabled
      }];
    });
    return {
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      hours: hoursRef,
      minutes: minutesRef,
      seconds: secondsRef,
      amPm: amPmRef,
      hourScrollRef: ref(null),
      minuteScrollRef: ref(null),
      secondScrollRef: ref(null),
      amPmScrollRef: ref(null)
    };
  },
  render() {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefix,
      mergedTheme
    } = this;
    return h("div", {
      tabindex: 0,
      class: `${mergedClsPrefix}-time-picker-panel`,
      onFocusin: this.onFocusin,
      onFocusout: this.onFocusout,
      onKeydown: this.onKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-time-picker-cols`
    }, this.showHour ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isHourInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar$1, {
      ref: "hourScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.hours,
        activeValue: this.hourValue,
        onItemClick: this.onHourClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.showMinute ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`, this.isMinuteInvalid && `${mergedClsPrefix}-time-picker-col--invalid`]
    }, h(Scrollbar$1, {
      ref: "minuteScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.minutes,
        activeValue: this.minuteValue,
        onItemClick: this.onMinuteClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.showSecond ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isSecondInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar$1, {
      ref: "secondScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.seconds,
        activeValue: this.secondValue,
        onItemClick: this.onSecondClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.use12Hours ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isAmPmInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar$1, {
      ref: "amPmScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.amPm,
        activeValue: this.amPmValue,
        onItemClick: this.onAmPmClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null), ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) ? h("div", {
      class: `${mergedClsPrefix}-time-picker-actions`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.onClearClick
    }, {
      default: () => this.clearText
    }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("now")) ? h(Button, {
      size: "tiny",
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      onClick: this.onNowClick
    }, {
      default: () => this.nowText
    }) : null, ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.includes("confirm")) ? h(Button, {
      size: "tiny",
      type: "primary",
      class: `${mergedClsPrefix}-time-picker-actions__confirm`,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      disabled: this.isValueInvalid,
      onClick: this.onConfirmClick
    }, {
      default: () => this.confirmText
    }) : null) : null, h(FocusDetector, {
      onFocus: this.onFocusDetectorFocus
    }));
  }
});
const style = c$1([cB("time-picker", `
 z-index: auto;
 position: relative;
 `, [cB("time-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), cM("disabled", [cB("time-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), cB("time-picker-panel", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-border-radius);
 margin: 4px 0;
 min-width: 104px;
 overflow: hidden;
 background-color: var(--n-panel-color);
 box-shadow: var(--n-panel-box-shadow);
 `, [fadeInScaleUpTransition(), cB("time-picker-actions", `
 padding: var(--n-panel-action-padding);
 align-items: center;
 display: flex;
 justify-content: space-evenly;
 `), cB("time-picker-cols", `
 height: calc(var(--n-item-height) * 6);
 display: flex;
 position: relative;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-panel-divider-color);
 `), cB("time-picker-col", `
 flex-grow: 1;
 min-width: var(--n-item-width);
 height: calc(var(--n-item-height) * 6);
 flex-direction: column;
 transition: box-shadow .3s var(--n-bezier);
 `, [cM("transition-disabled", [cE("item", "transition: none;", [c$1("&::before", "transition: none;")])]), cE("padding", `
 height: calc(var(--n-item-height) * 5);
 `), c$1("&:first-child", "min-width: calc(var(--n-item-width) + 4px);", [cE("item", [c$1("&::before", "left: 4px;")])]), cE("item", `
 cursor: pointer;
 height: var(--n-item-height);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 background: #0000;
 text-decoration-color: #0000;
 color: var(--n-item-text-color);
 z-index: 0;
 box-sizing: border-box;
 padding-top: 4px;
 position: relative;
 `, [c$1("&::before", `
 content: "";
 transition: background-color .3s var(--n-bezier);
 z-index: -1;
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-item-border-radius);
 `), cNotM("disabled", [c$1("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `)]), cM("active", `
 color: var(--n-item-text-color-active);
 `, [c$1("&::before", `
 background-color: var(--n-item-color-hover);
 `)]), cM("disabled", `
 opacity: var(--n-item-opacity-disabled);
 cursor: not-allowed;
 `)]), cM("invalid", [cE("item", [cM("active", `
 text-decoration: line-through;
 text-decoration-color: var(--n-item-text-color-active);
 `)])])])])]);
function validateUnits(value, max) {
  if (value === void 0) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every((v) => v >= 0 && v <= max);
  } else {
    return value >= 0 && value <= max;
  }
}
const timePickerProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  actions: Array,
  defaultValue: {
    type: Number,
    default: null
  },
  defaultFormattedValue: String,
  placeholder: String,
  placement: {
    type: String,
    default: "bottom-start"
  },
  value: Number,
  format: {
    type: String,
    default: "HH:mm:ss"
  },
  valueFormat: String,
  formattedValue: String,
  isHourDisabled: Function,
  size: String,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  inputReadonly: Boolean,
  clearable: Boolean,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onUpdateFormattedValue: [Function, Array],
  "onUpdate:formattedValue": [Function, Array],
  onBlur: [Function, Array],
  onConfirm: [Function, Array],
  onClear: Function,
  onFocus: [Function, Array],
  // https://www.iana.org/time-zones
  timeZone: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  hours: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 23)
  },
  minutes: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 59)
  },
  seconds: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 59)
  },
  use12Hours: Boolean,
  // private
  stateful: {
    type: Boolean,
    default: true
  },
  // deprecated
  onChange: [Function, Array]
});
const NTimePicker = defineComponent({
  name: "TimePicker",
  props: timePickerProps,
  setup(props) {
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("TimePicker");
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const themeRef = useTheme("TimePicker", "-time-picker", style, timePickerLight, props, mergedClsPrefixRef);
    const keyboardState = useKeyboard();
    const inputInstRef = ref(null);
    const panelInstRef = ref(null);
    const dateFnsOptionsRef = computed(() => {
      return {
        locale: dateLocaleRef.value.locale
      };
    });
    function getTimestampFromFormattedValue(value) {
      if (value === null) return null;
      return strictParse(value, props.valueFormat || props.format, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value).getTime();
    }
    const {
      defaultValue,
      defaultFormattedValue
    } = props;
    const uncontrolledValueRef = ref(defaultFormattedValue !== void 0 ? getTimestampFromFormattedValue(defaultFormattedValue) : defaultValue);
    const mergedValueRef = computed(() => {
      const {
        formattedValue
      } = props;
      if (formattedValue !== void 0) {
        return getTimestampFromFormattedValue(formattedValue);
      }
      const {
        value
      } = props;
      if (value !== void 0) {
        return value;
      }
      return uncontrolledValueRef.value;
    });
    const mergedFormatRef = computed(() => {
      const {
        timeZone
      } = props;
      if (timeZone) {
        return (date, format2, options) => {
          return formatInTimeZone(date, timeZone, format2, options);
        };
      } else {
        return (date, _format, options) => {
          return format(date, _format, options);
        };
      }
    });
    const displayTimeStringRef = ref("");
    watch(() => props.timeZone, () => {
      const mergedValue = mergedValueRef.value;
      displayTimeStringRef.value = mergedValue === null ? "" : mergedFormatRef.value(mergedValue, props.format, dateFnsOptionsRef.value);
    }, {
      immediate: true
    });
    const uncontrolledShowRef = ref(false);
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const memorizedValueRef = ref(mergedValueRef.value);
    const transitionDisabledRef = ref(false);
    const localizedClearRef = computed(() => {
      return localeRef.value.clear;
    });
    const localizedNowRef = computed(() => {
      return localeRef.value.now;
    });
    const localizedPlaceholderRef = computed(() => {
      if (props.placeholder !== void 0) return props.placeholder;
      return localeRef.value.placeholder;
    });
    const localizedNegativeTextRef = computed(() => {
      return localeRef.value.negativeText;
    });
    const localizedPositiveTextRef = computed(() => {
      return localeRef.value.positiveText;
    });
    const hourInFormatRef = computed(() => {
      return /H|h|K|k/.test(props.format);
    });
    const minuteInFormatRef = computed(() => {
      return props.format.includes("m");
    });
    const secondInFormatRef = computed(() => {
      return props.format.includes("s");
    });
    const hourValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      return Number(mergedFormatRef.value(value, "HH", dateFnsOptionsRef.value));
    });
    const minuteValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      return Number(mergedFormatRef.value(value, "mm", dateFnsOptionsRef.value));
    });
    const secondValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      return Number(mergedFormatRef.value(value, "ss", dateFnsOptionsRef.value));
    });
    const isHourInvalidRef = computed(() => {
      const {
        isHourDisabled
      } = props;
      if (hourValueRef.value === null) return false;
      if (!isTimeInStep(hourValueRef.value, "hours", props.hours)) return true;
      if (!isHourDisabled) return false;
      return isHourDisabled(hourValueRef.value);
    });
    const isMinuteInvalidRef = computed(() => {
      const {
        value: minuteValue
      } = minuteValueRef;
      const {
        value: hourValue
      } = hourValueRef;
      if (minuteValue === null || hourValue === null) return false;
      if (!isTimeInStep(minuteValue, "minutes", props.minutes)) return true;
      const {
        isMinuteDisabled
      } = props;
      if (!isMinuteDisabled) return false;
      return isMinuteDisabled(minuteValue, hourValue);
    });
    const isSecondInvalidRef = computed(() => {
      const {
        value: minuteValue
      } = minuteValueRef;
      const {
        value: hourValue
      } = hourValueRef;
      const {
        value: secondValue
      } = secondValueRef;
      if (secondValue === null || minuteValue === null || hourValue === null) {
        return false;
      }
      if (!isTimeInStep(secondValue, "seconds", props.seconds)) return true;
      const {
        isSecondDisabled
      } = props;
      if (!isSecondDisabled) return false;
      return isSecondDisabled(secondValue, minuteValue, hourValue);
    });
    const isValueInvalidRef = computed(() => {
      return isHourInvalidRef.value || isMinuteInvalidRef.value || isSecondInvalidRef.value;
    });
    const mergedAttrSizeRef = computed(() => {
      return props.format.length + 4;
    });
    const amPmValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      return getHours(value) < 12 ? "am" : "pm";
    });
    function doUpdateFormattedValue(value, timestampValue) {
      const {
        onUpdateFormattedValue,
        "onUpdate:formattedValue": _onUpdateFormattedValue
      } = props;
      if (onUpdateFormattedValue) {
        call(onUpdateFormattedValue, value, timestampValue);
      }
      if (_onUpdateFormattedValue) {
        call(_onUpdateFormattedValue, value, timestampValue);
      }
    }
    function createFormattedValue(value) {
      return value === null ? null : mergedFormatRef.value(value, props.valueFormat || props.format);
    }
    function doUpdateValue(value) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onChange
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const formattedValue = createFormattedValue(value);
      if (onUpdateValue) {
        call(onUpdateValue, value, formattedValue);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, formattedValue);
      }
      if (onChange) call(onChange, value, formattedValue);
      doUpdateFormattedValue(formattedValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function doFocus(e) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus) call(onFocus, e);
      nTriggerFormFocus();
    }
    function doBlur(e) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur) call(onBlur, e);
      nTriggerFormBlur();
    }
    function doConfirm() {
      const {
        onConfirm
      } = props;
      if (onConfirm) {
        call(onConfirm, mergedValueRef.value, createFormattedValue(mergedValueRef.value));
      }
    }
    function handleTimeInputClear(e) {
      var _a;
      e.stopPropagation();
      doUpdateValue(null);
      deriveInputValue(null);
      (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function handleFocusDetectorFocus() {
      closePanel({
        returnFocus: true
      });
    }
    function clearSelectedValue() {
      doUpdateValue(null);
      deriveInputValue(null);
      closePanel({
        returnFocus: true
      });
    }
    function handleInputKeydown(e) {
      if (e.key === "Escape" && mergedShowRef.value) {
        markEventEffectPerformed(e);
      }
    }
    function handleMenuKeydown(e) {
      var _a;
      switch (e.key) {
        case "Escape":
          if (mergedShowRef.value) {
            markEventEffectPerformed(e);
            closePanel({
              returnFocus: true
            });
          }
          break;
        case "Tab":
          if (keyboardState.shift && e.target === ((_a = panelInstRef.value) === null || _a === void 0 ? void 0 : _a.$el)) {
            e.preventDefault();
            closePanel({
              returnFocus: true
            });
          }
          break;
      }
    }
    function disableTransitionOneTick() {
      transitionDisabledRef.value = true;
      void nextTick(() => {
        transitionDisabledRef.value = false;
      });
    }
    function handleTriggerClick(e) {
      if (mergedDisabledRef.value || happensIn(e, "clear")) return;
      if (!mergedShowRef.value) {
        openPanel();
      }
    }
    function handleHourClick(hour) {
      if (typeof hour === "string") return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setHours(startOfHour(/* @__PURE__ */ new Date()), hour)));
      } else {
        doUpdateValue(getTime(setHours(mergedValueRef.value, hour)));
      }
    }
    function handleMinuteClick(minute) {
      if (typeof minute === "string") return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setMinutes(startOfMinute(/* @__PURE__ */ new Date()), minute)));
      } else {
        doUpdateValue(getTime(setMinutes(mergedValueRef.value, minute)));
      }
    }
    function handleSecondClick(second) {
      if (typeof second === "string") return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setSeconds(startOfSecond(/* @__PURE__ */ new Date()), second)));
      } else {
        doUpdateValue(getTime(setSeconds(mergedValueRef.value, second)));
      }
    }
    function handleAmPmClick(amPm) {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (mergedValue === null) {
        const now = /* @__PURE__ */ new Date();
        const hours = getHours(now);
        if (amPm === "pm" && hours < 12) {
          doUpdateValue(getTime(setHours(now, hours + 12)));
        } else if (amPm === "am" && hours >= 12) {
          doUpdateValue(getTime(setHours(now, hours - 12)));
        }
        doUpdateValue(getTime(now));
      } else {
        const hours = getHours(mergedValue);
        if (amPm === "pm" && hours < 12) {
          doUpdateValue(getTime(setHours(mergedValue, hours + 12)));
        } else if (amPm === "am" && hours >= 12) {
          doUpdateValue(getTime(setHours(mergedValue, hours - 12)));
        }
      }
    }
    function deriveInputValue(time2) {
      if (time2 === void 0) time2 = mergedValueRef.value;
      if (time2 === null) {
        displayTimeStringRef.value = "";
      } else {
        displayTimeStringRef.value = mergedFormatRef.value(time2, props.format, dateFnsOptionsRef.value);
      }
    }
    function handleTimeInputFocus(e) {
      if (isInternalFocusSwitch(e)) return;
      doFocus(e);
    }
    function handleTimeInputBlur(e) {
      var _a;
      if (isInternalFocusSwitch(e)) return;
      if (mergedShowRef.value) {
        const panelEl = (_a = panelInstRef.value) === null || _a === void 0 ? void 0 : _a.$el;
        if (!(panelEl === null || panelEl === void 0 ? void 0 : panelEl.contains(e.relatedTarget))) {
          deriveInputValue();
          doBlur(e);
          closePanel({
            returnFocus: false
          });
        }
      } else {
        deriveInputValue();
        doBlur(e);
      }
    }
    function handleTimeInputActivate() {
      if (mergedDisabledRef.value) return;
      if (!mergedShowRef.value) {
        openPanel();
      }
    }
    function handleTimeInputDeactivate() {
      if (mergedDisabledRef.value) return;
      deriveInputValue();
      closePanel({
        returnFocus: false
      });
    }
    function scrollTimer() {
      if (!panelInstRef.value) return;
      const {
        hourScrollRef,
        minuteScrollRef,
        secondScrollRef,
        amPmScrollRef
      } = panelInstRef.value;
      [hourScrollRef, minuteScrollRef, secondScrollRef, amPmScrollRef].forEach((itemScrollRef) => {
        var _a;
        if (!itemScrollRef) return;
        const activeItemEl = (_a = itemScrollRef.contentRef) === null || _a === void 0 ? void 0 : _a.querySelector("[data-active]");
        if (activeItemEl) {
          itemScrollRef.scrollTo({
            top: activeItemEl.offsetTop
          });
        }
      });
    }
    function doUpdateShow(value) {
      uncontrolledShowRef.value = value;
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, value);
      if (_onUpdateShow) call(_onUpdateShow, value);
    }
    function isInternalFocusSwitch(e) {
      var _a, _b, _c;
      return !!(((_b = (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef) === null || _b === void 0 ? void 0 : _b.contains(e.relatedTarget)) || ((_c = panelInstRef.value) === null || _c === void 0 ? void 0 : _c.$el.contains(e.relatedTarget)));
    }
    function openPanel() {
      memorizedValueRef.value = mergedValueRef.value;
      doUpdateShow(true);
      void nextTick(scrollTimer);
    }
    function handleClickOutside(e) {
      var _a, _b;
      if (mergedShowRef.value && !((_b = (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef) === null || _b === void 0 ? void 0 : _b.contains(getPreciseEventTarget(e)))) {
        closePanel({
          returnFocus: false
        });
      }
    }
    function closePanel({
      returnFocus
    }) {
      var _a;
      if (mergedShowRef.value) {
        doUpdateShow(false);
        if (returnFocus) {
          (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
      }
    }
    function handleTimeInputUpdateValue(v) {
      if (v === "") {
        doUpdateValue(null);
        return;
      }
      const time2 = strictParse(v, props.format, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      displayTimeStringRef.value = v;
      if (isValid(time2)) {
        const {
          value: mergedValue
        } = mergedValueRef;
        if (mergedValue !== null) {
          const newTime = set(mergedValue, {
            hours: getHours(time2),
            minutes: getMinutes(time2),
            seconds: getSeconds(time2),
            milliseconds: getMilliseconds(time2)
          });
          doUpdateValue(getTime(newTime));
        } else {
          doUpdateValue(getTime(time2));
        }
      }
    }
    function handleCancelClick() {
      doUpdateValue(memorizedValueRef.value);
      doUpdateShow(false);
    }
    function handleNowClick() {
      const now = /* @__PURE__ */ new Date();
      const getNowTime = {
        hours: getHours,
        minutes: getMinutes,
        seconds: getSeconds
      };
      const [mergeHours, mergeMinutes, mergeSeconds] = ["hours", "minutes", "seconds"].map((i) => !props[i] || isTimeInStep(getNowTime[i](now), i, props[i]) ? getNowTime[i](now) : findSimilarTime(getNowTime[i](now), i, props[i]));
      const newValue = setSeconds(setMinutes(setHours(mergedValueRef.value ? mergedValueRef.value : getTime(now), mergeHours), mergeMinutes), mergeSeconds);
      doUpdateValue(getTime(newValue));
    }
    function handleConfirmClick() {
      deriveInputValue();
      doConfirm();
      closePanel({
        returnFocus: true
      });
    }
    function handleMenuFocusOut(e) {
      if (isInternalFocusSwitch(e)) return;
      deriveInputValue();
      doBlur(e);
      closePanel({
        returnFocus: false
      });
    }
    watch(mergedValueRef, (value) => {
      deriveInputValue(value);
      disableTransitionOneTick();
      void nextTick(scrollTimer);
    });
    watch(mergedShowRef, () => {
      if (isValueInvalidRef.value) {
        doUpdateValue(memorizedValueRef.value);
      }
    });
    provide(timePickerInjectionKey, {
      mergedThemeRef: themeRef,
      mergedClsPrefixRef
    });
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
    const triggerCssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          iconColor,
          iconColorDisabled
        }
      } = themeRef.value;
      return {
        "--n-icon-color-override": iconColor,
        "--n-icon-color-disabled-override": iconColorDisabled,
        "--n-bezier": cubicBezierEaseInOut
      };
    });
    const triggerThemeClassHandle = inlineThemeDisabled ? useThemeClass("time-picker-trigger", void 0, triggerCssVarsRef, props) : void 0;
    const cssVarsRef = computed(() => {
      const {
        self: {
          panelColor,
          itemTextColor,
          itemTextColorActive,
          itemColorHover,
          panelDividerColor,
          panelBoxShadow,
          itemOpacityDisabled,
          borderRadius,
          itemFontSize,
          itemWidth,
          itemHeight,
          panelActionPadding,
          itemBorderRadius
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-item-color-hover": itemColorHover,
        "--n-item-font-size": itemFontSize,
        "--n-item-height": itemHeight,
        "--n-item-opacity-disabled": itemOpacityDisabled,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-active": itemTextColorActive,
        "--n-item-width": itemWidth,
        "--n-panel-action-padding": panelActionPadding,
        "--n-panel-box-shadow": panelBoxShadow,
        "--n-panel-color": panelColor,
        "--n-panel-divider-color": panelDividerColor,
        "--n-item-border-radius": itemBorderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("time-picker", void 0, cssVarsRef, props) : void 0;
    return {
      focus: exposedMethods.focus,
      blur: exposedMethods.blur,
      mergedStatus: mergedStatusRef,
      mergedBordered: mergedBorderedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      isMounted: useIsMounted(),
      inputInstRef,
      panelInstRef,
      adjustedTo: useAdjustedTo(props),
      mergedShow: mergedShowRef,
      localizedClear: localizedClearRef,
      localizedNow: localizedNowRef,
      localizedPlaceholder: localizedPlaceholderRef,
      localizedNegativeText: localizedNegativeTextRef,
      localizedPositiveText: localizedPositiveTextRef,
      hourInFormat: hourInFormatRef,
      minuteInFormat: minuteInFormatRef,
      secondInFormat: secondInFormatRef,
      mergedAttrSize: mergedAttrSizeRef,
      displayTimeString: displayTimeStringRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      isValueInvalid: isValueInvalidRef,
      isHourInvalid: isHourInvalidRef,
      isMinuteInvalid: isMinuteInvalidRef,
      isSecondInvalid: isSecondInvalidRef,
      transitionDisabled: transitionDisabledRef,
      hourValue: hourValueRef,
      minuteValue: minuteValueRef,
      secondValue: secondValueRef,
      amPmValue: amPmValueRef,
      handleInputKeydown,
      handleTimeInputFocus,
      handleTimeInputBlur,
      handleNowClick,
      handleConfirmClick,
      handleTimeInputUpdateValue,
      handleMenuFocusOut,
      handleCancelClick,
      handleClickOutside,
      handleTimeInputActivate,
      handleTimeInputDeactivate,
      handleHourClick,
      handleMinuteClick,
      handleSecondClick,
      handleAmPmClick,
      handleTimeInputClear,
      handleFocusDetectorFocus,
      handleMenuKeydown,
      handleTriggerClick,
      mergedTheme: themeRef,
      triggerCssVars: inlineThemeDisabled ? void 0 : triggerCssVarsRef,
      triggerThemeClass: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.themeClass,
      triggerOnRender: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      clearSelectedValue
    };
  },
  render() {
    const {
      mergedClsPrefix,
      $slots,
      triggerOnRender
    } = this;
    triggerOnRender === null || triggerOnRender === void 0 ? void 0 : triggerOnRender();
    return h("div", {
      class: [`${mergedClsPrefix}-time-picker`, this.triggerThemeClass],
      style: this.triggerCssVars
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(NInput, {
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: this.displayTimeString,
          bordered: this.mergedBordered,
          passivelyActivated: true,
          attrSize: this.mergedAttrSize,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          stateful: this.stateful,
          size: this.mergedSize,
          placeholder: this.localizedPlaceholder,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          textDecoration: this.isValueInvalid ? "line-through" : void 0,
          onFocus: this.handleTimeInputFocus,
          onBlur: this.handleTimeInputBlur,
          onActivate: this.handleTimeInputActivate,
          onDeactivate: this.handleTimeInputDeactivate,
          onUpdateValue: this.handleTimeInputUpdateValue,
          onClear: this.handleTimeInputClear,
          internalDeactivateOnEnter: true,
          internalForceFocus: this.mergedShow,
          readonly: this.inputReadonly || this.mergedDisabled,
          onClick: this.handleTriggerClick,
          onKeydown: this.handleInputKeydown
        }, this.showIcon ? {
          [this.clearable ? "clear-icon-placeholder" : "suffix"]: () => h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-time-picker-icon`
          }, {
            default: () => $slots.icon ? $slots.icon() : h(TimeIcon, null)
          })
        } : null)
      }), h(VFollower, {
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        show: this.mergedShow,
        to: this.adjustedTo,
        containerClass: this.namespace,
        placement: this.placement
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            var _a;
            if (this.mergedShow) {
              (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
              return withDirectives(h(Panel, {
                ref: "panelInstRef",
                actions: this.actions,
                class: this.themeClass,
                style: this.cssVars,
                seconds: this.seconds,
                minutes: this.minutes,
                hours: this.hours,
                transitionDisabled: this.transitionDisabled,
                hourValue: this.hourValue,
                showHour: this.hourInFormat,
                isHourInvalid: this.isHourInvalid,
                isHourDisabled: this.isHourDisabled,
                minuteValue: this.minuteValue,
                showMinute: this.minuteInFormat,
                isMinuteInvalid: this.isMinuteInvalid,
                isMinuteDisabled: this.isMinuteDisabled,
                secondValue: this.secondValue,
                amPmValue: this.amPmValue,
                showSecond: this.secondInFormat,
                isSecondInvalid: this.isSecondInvalid,
                isSecondDisabled: this.isSecondDisabled,
                isValueInvalid: this.isValueInvalid,
                clearText: this.localizedClear,
                nowText: this.localizedNow,
                confirmText: this.localizedPositiveText,
                use12Hours: this.use12Hours,
                onFocusout: this.handleMenuFocusOut,
                onKeydown: this.handleMenuKeydown,
                onHourClick: this.handleHourClick,
                onMinuteClick: this.handleMinuteClick,
                onSecondClick: this.handleSecondClick,
                onAmPmClick: this.handleAmPmClick,
                onNowClick: this.handleNowClick,
                onConfirmClick: this.handleConfirmClick,
                onClearClick: this.clearSelectedValue,
                onFocusDetectorFocus: this.handleFocusDetectorFocus
              }), [[clickoutside, this.handleClickOutside, void 0, {
                capture: true
              }]]);
            }
            return null;
          }
        })
      })]
    }));
  }
});

export { NTimePicker as N, getMinutes as a, getSeconds as b, set as c, startOfSecond as d, getHours as g, setMonth as s };
//# sourceMappingURL=TimePicker-zRd6QI99.mjs.map
