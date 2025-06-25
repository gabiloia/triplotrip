import { defineComponent, createTextVNode, h, computed } from 'vue';
import { X as useLocale, aP as toDate, aQ as getDefaultOptions, aR as enUS } from './server.mjs';
import { f as formatInTimeZone } from './index-CdFfausA.mjs';
import { f as format, g as getTimezoneOffsetInMilliseconds, m as minutesInDay, a as minutesInMonth, b as minutesInYear, c as millisecondsInMinute } from './getDefaultOptions-B-S4FfjT.mjs';

function compareAsc(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const diff = _dateLeft.getTime() - _dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return diff;
  }
}
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}
function formatDistanceStrict(date, baseDate, options) {
  var _a, _b, _c;
  const defaultOptions = getDefaultOptions();
  const locale = (_b = (_a = options == null ? void 0 : options.locale) != null ? _a : defaultOptions.locale) != null ? _b : enUS;
  const comparison = compareAsc(date, baseDate);
  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options == null ? void 0 : options.addSuffix,
    comparison
  });
  let dateLeft;
  let dateRight;
  if (comparison > 0) {
    dateLeft = toDate(baseDate);
    dateRight = toDate(date);
  } else {
    dateLeft = toDate(date);
    dateRight = toDate(baseDate);
  }
  const roundingMethod = getRoundingMethod((_c = options == null ? void 0 : options.roundingMethod) != null ? _c : "round");
  const milliseconds = dateRight.getTime() - dateLeft.getTime();
  const minutes = milliseconds / millisecondsInMinute;
  const timezoneOffset = getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft);
  const dstNormalizedMinutes = (milliseconds - timezoneOffset) / millisecondsInMinute;
  const defaultUnit = options == null ? void 0 : options.unit;
  let unit;
  if (!defaultUnit) {
    if (minutes < 1) {
      unit = "second";
    } else if (minutes < 60) {
      unit = "minute";
    } else if (minutes < minutesInDay) {
      unit = "hour";
    } else if (dstNormalizedMinutes < minutesInMonth) {
      unit = "day";
    } else if (dstNormalizedMinutes < minutesInYear) {
      unit = "month";
    } else {
      unit = "year";
    }
  } else {
    unit = defaultUnit;
  }
  if (unit === "second") {
    const seconds = roundingMethod(milliseconds / 1e3);
    return locale.formatDistance("xSeconds", seconds, localizeOptions);
  } else if (unit === "minute") {
    const roundedMinutes = roundingMethod(minutes);
    return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);
  } else if (unit === "hour") {
    const hours = roundingMethod(minutes / 60);
    return locale.formatDistance("xHours", hours, localizeOptions);
  } else if (unit === "day") {
    const days = roundingMethod(dstNormalizedMinutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (unit === "month") {
    const months = roundingMethod(dstNormalizedMinutes / minutesInMonth);
    return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions);
  } else {
    const years = roundingMethod(dstNormalizedMinutes / minutesInYear);
    return locale.formatDistance("xYears", years, localizeOptions);
  }
}
function fromUnixTime(unixTime) {
  return toDate(unixTime * 1e3);
}
const timeProps = {
  time: {
    type: [Number, Date],
    default: void 0
    // For unix or non unix mode, it should be different default value
  },
  type: {
    type: String,
    default: "datetime"
  },
  to: {
    type: [Number, Date],
    default: void 0
    // the same as `time` prop
  },
  unix: Boolean,
  format: String,
  text: Boolean,
  timeZone: String
};
const NTime = defineComponent({
  name: "Time",
  props: timeProps,
  setup(props) {
    const now = Date.now();
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("Time");
    const mergedFormatRef = computed(() => {
      const {
        timeZone
      } = props;
      if (timeZone) {
        return (time, _format, options) => {
          return formatInTimeZone(time, timeZone, _format, options);
        };
      }
      return format;
    });
    const dateFnsOptionsRef = computed(() => {
      return {
        locale: dateLocaleRef.value.locale
      };
    });
    const mergedTimeRef = computed(() => {
      const {
        time
      } = props;
      if (props.unix) {
        if (time === void 0) return now;
        return fromUnixTime(typeof time === "number" ? time : time.valueOf());
      }
      return time !== null && time !== void 0 ? time : now;
    });
    const mergedToRef = computed(() => {
      const {
        to
      } = props;
      if (props.unix) {
        if (to === void 0) return now;
        return fromUnixTime(typeof to === "number" ? to : to.valueOf());
      }
      return to !== null && to !== void 0 ? to : now;
    });
    const renderedTimeRef = computed(() => {
      if (props.format) {
        return mergedFormatRef.value(mergedTimeRef.value, props.format, dateFnsOptionsRef.value);
      } else if (props.type === "date") {
        return mergedFormatRef.value(mergedTimeRef.value, localeRef.value.dateFormat, dateFnsOptionsRef.value);
      } else if (props.type === "datetime") {
        return mergedFormatRef.value(mergedTimeRef.value, localeRef.value.dateTimeFormat, dateFnsOptionsRef.value);
      } else {
        return formatDistanceStrict(mergedTimeRef.value, mergedToRef.value, {
          addSuffix: true,
          locale: dateLocaleRef.value.locale
        });
      }
    });
    return {
      renderedTime: renderedTimeRef
    };
  },
  render() {
    return this.text ? createTextVNode(this.renderedTime) : h("time", [this.renderedTime]);
  }
});

export { NTime as N };
//# sourceMappingURL=Time-Tnt26cb5.mjs.map
