import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, h, Fragment, ref, toRef, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { aC as useMessage, _ as _sfc_main$o, U as resolveSlotWithTypedProps, B as Button, i as NBaseIcon, aO as ChevronRightIcon, v as useConfig, x as useTheme, bF as calendarLight, m as c$1, X as useLocale, z as useThemeClass, k as cB, aF as insideModal, aG as insidePopover, n as cE, l as cM, C as call } from './server.mjs';
import { useMergedState } from 'vooks';
import { k as getYear, j as getMonth, b as startOfMonth, d as dateArray, a as addMonths } from './utils-BrnwStsU.mjs';
import { e as startOfDay, f as format } from './getDefaultOptions-BBsy6BU_.mjs';
import { N as NButtonGroup } from './ButtonGroup-DmH6L5Fi.mjs';
import { C as ChevronLeftIcon } from './CollapseItem-BML65SQa.mjs';
import './LtrContext-CUHPU62m.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
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
import 'seemly';
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

const style = c$1([cB("calendar", `
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 height: 720px;
 display: flex;
 flex-direction: column;
 `, [cB("calendar-prev-btn", `
 cursor: pointer;
 `), cB("calendar-next-btn", `
 cursor: pointer;
 `), cB("calendar-header", `
 display: flex;
 align-items: center;
 line-height: 1;
 font-size: var(--n-title-font-size);
 padding: 0 0 18px 0;
 justify-content: space-between;
 `, [cE("title", `
 color: var(--n-title-text-color);
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 `), cE("extra", `
 display: flex;
 align-items: center;
 `)]), cB("calendar-dates", `
 display: grid;
 grid-template-columns: repeat(7, minmax(0, 1fr));
 grid-auto-rows: 1fr;
 border-radius: var(--n-border-radius);
 flex: 1;
 border-top: 1px solid;
 border-left: 1px solid;
 border-color: var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 `), cB("calendar-cell", `
 box-sizing: border-box;
 padding: 10px;
 border-right: 1px solid;
 border-bottom: 1px solid;
 border-color: var(--n-border-color);
 cursor: pointer;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [c$1("&:nth-child(7)", `
 border-top-right-radius: var(--n-border-radius);
 `), c$1("&:nth-last-child(7)", `
 border-bottom-left-radius: var(--n-border-radius);
 `), c$1("&:last-child", `
 border-bottom-right-radius: var(--n-border-radius);
 `), c$1("&:hover", `
 background-color: var(--n-cell-color-hover);
 `), cE("bar", `
 position: absolute;
 left: 0;
 right: 0;
 bottom: -1px;
 height: 3px;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `), cM("selected", [cE("bar", `
 background-color: var(--n-bar-color);
 `)]), cB("calendar-date", `
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 color: var(--n-text-color);
 `, [cE("date", `
 color: var(--n-text-color);
 `)]), cM("disabled, other-month", `
 color: var(--n-day-text-color);
 `, [cB("calendar-date", [cE("date", `
 color: var(--n-day-text-color);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `), cM("current", [cB("calendar-date", [cE("date", `
 color: var(--n-date-text-color-current);
 background-color: var(--n-date-color-current);
 `)])]), cB("calendar-date", `
 position: relative;
 line-height: 1;
 display: flex;
 align-items: center;
 height: 1em;
 justify-content: space-between;
 padding-bottom: .75em;
 `, [cE("date", `
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: -0.4em;
 width: 1.8em;
 height: 1.8em;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cE("day", `
 color: var(--n-day-text-color);
 transition: color .3s var(--n-bezier);
 `)])])]), insideModal(cB("calendar", [cB("calendar-dates", `
 border-color: var(--n-border-color-modal);
 `), cB("calendar-cell", `
 border-color: var(--n-border-color-modal);
 `, [c$1("&:hover", `
 background-color: var(--n-cell-color-hover-modal);
 `)])])), insidePopover(cB("calendar", [cB("calendar-dates", `
 border-color: var(--n-border-color-popover);
 `), cB("calendar-cell", `
 border-color: var(--n-border-color-popover);
 `, [c$1("&:hover", `
 background-color: var(--n-cell-color-hover-popover);
 `)])]))]);
const calendarProps = Object.assign(Object.assign({}, useTheme.props), {
  isDateDisabled: Function,
  value: Number,
  defaultValue: {
    type: Number,
    default: null
  },
  onPanelChange: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array]
});
const NCalendar = defineComponent({
  name: "Calendar",
  props: calendarProps,
  slots: Object,
  setup(props) {
    var _a;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Calendar", "-calendar", style, calendarLight, props, mergedClsPrefixRef);
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("DatePicker");
    const now = Date.now();
    const monthTsRef = ref(startOfMonth((_a = props.defaultValue) !== null && _a !== void 0 ? _a : now).valueOf());
    const uncontrolledValueRef = ref(props.defaultValue || null);
    const mergedValueRef = useMergedState(toRef(props, "value"), uncontrolledValueRef);
    function doUpdateValue(value, time) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onUpdateValue) {
        call(onUpdateValue, value, time);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, time);
      }
      uncontrolledValueRef.value = value;
    }
    function handlePrevClick() {
      var _a2;
      const monthTs = addMonths(monthTsRef.value, -1).valueOf();
      monthTsRef.value = monthTs;
      (_a2 = props.onPanelChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, {
        year: getYear(monthTs),
        month: getMonth(monthTs) + 1
      });
    }
    function handleNextClick() {
      var _a2;
      const monthTs = addMonths(monthTsRef.value, 1).valueOf();
      monthTsRef.value = monthTs;
      (_a2 = props.onPanelChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, {
        year: getYear(monthTs),
        month: getMonth(monthTs) + 1
      });
    }
    function handleTodayClick() {
      var _a2;
      const {
        value: monthTs
      } = monthTsRef;
      const oldYear = getYear(monthTs);
      const oldMonth = getMonth(monthTs);
      const newMonthTs = startOfMonth(now).valueOf();
      monthTsRef.value = newMonthTs;
      const newYear = getYear(newMonthTs);
      const newMonth = getMonth(newMonthTs);
      if (oldYear !== newYear || oldMonth !== newMonth) {
        (_a2 = props.onPanelChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, {
          year: newYear,
          month: newMonth + 1
        });
      }
    }
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          borderColor,
          borderColorModal,
          borderColorPopover,
          borderRadius,
          titleFontSize,
          textColor,
          titleFontWeight,
          titleTextColor,
          dayTextColor,
          fontSize,
          lineHeight,
          dateColorCurrent,
          dateTextColorCurrent,
          cellColorHover,
          cellColor,
          cellColorModal,
          barColor,
          cellColorPopover,
          cellColorHoverModal,
          cellColorHoverPopover
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-border-radius": borderRadius,
        "--n-text-color": textColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-title-font-size": titleFontSize,
        "--n-title-text-color": titleTextColor,
        "--n-day-text-color": dayTextColor,
        "--n-font-size": fontSize,
        "--n-line-height": lineHeight,
        "--n-date-color-current": dateColorCurrent,
        "--n-date-text-color-current": dateTextColorCurrent,
        "--n-cell-color": cellColor,
        "--n-cell-color-modal": cellColorModal,
        "--n-cell-color-popover": cellColorPopover,
        "--n-cell-color-hover": cellColorHover,
        "--n-cell-color-hover-modal": cellColorHoverModal,
        "--n-cell-color-hover-popover": cellColorHoverPopover,
        "--n-bar-color": barColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("calendar", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      locale: localeRef,
      dateLocale: dateLocaleRef,
      now,
      mergedValue: mergedValueRef,
      monthTs: monthTsRef,
      dateItems: computed(() => {
        return dateArray(monthTsRef.value, mergedValueRef.value, now, localeRef.value.firstDayOfWeek, true);
      }),
      doUpdateValue,
      handleTodayClick,
      handlePrevClick,
      handleNextClick,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      isDateDisabled,
      mergedClsPrefix,
      monthTs,
      cssVars,
      mergedValue,
      mergedTheme,
      $slots,
      locale: {
        monthBeforeYear,
        today
      },
      dateLocale: {
        locale
      },
      handleTodayClick,
      handlePrevClick,
      handleNextClick,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const normalizedValue = mergedValue && startOfDay(mergedValue).valueOf();
    const year = getYear(monthTs);
    const calendarMonth = getMonth(monthTs) + 1;
    return h("div", {
      class: [`${mergedClsPrefix}-calendar`, this.themeClass],
      style: cssVars
    }, h("div", {
      class: `${mergedClsPrefix}-calendar-header`
    }, h("div", {
      class: `${mergedClsPrefix}-calendar-header__title`
    }, resolveSlotWithTypedProps($slots.header, {
      year,
      month: calendarMonth
    }, () => {
      const localeMonth = format(monthTs, "MMMM", {
        locale
      });
      return [monthBeforeYear ? `${localeMonth} ${year}` : `${year} ${localeMonth}`];
    })), h("div", {
      class: `${mergedClsPrefix}-calendar-header__extra`
    }, h(NButtonGroup, null, {
      default: () => h(Fragment, null, h(Button, {
        size: "small",
        onClick: handlePrevClick,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix,
          class: `${mergedClsPrefix}-calendar-prev-btn`
        }, {
          default: () => h(ChevronLeftIcon, null)
        })
      }), h(Button, {
        size: "small",
        onClick: handleTodayClick,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => today
      }), h(Button, {
        size: "small",
        onClick: handleNextClick,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix,
          class: `${mergedClsPrefix}-calendar-next-btn`
        }, {
          default: () => h(ChevronRightIcon, null)
        })
      }))
    }))), h("div", {
      class: `${mergedClsPrefix}-calendar-dates`
    }, this.dateItems.map(({
      dateObject,
      ts,
      inCurrentMonth,
      isCurrentDate
    }, index) => {
      var _a;
      const {
        year: year2,
        month,
        date
      } = dateObject;
      const fullDate = format(ts, "yyyy-MM-dd");
      const notInCurrentMonth = !inCurrentMonth;
      const disabled = (isDateDisabled === null || isDateDisabled === void 0 ? void 0 : isDateDisabled(ts)) === true;
      const selected = normalizedValue === startOfDay(ts).valueOf();
      return h("div", {
        key: `${calendarMonth}-${index}`,
        class: [`${mergedClsPrefix}-calendar-cell`, disabled && `${mergedClsPrefix}-calendar-cell--disabled`, notInCurrentMonth && `${mergedClsPrefix}-calendar-cell--other-month`, disabled && `${mergedClsPrefix}-calendar-cell--not-allowed`, isCurrentDate && `${mergedClsPrefix}-calendar-cell--current`, selected && `${mergedClsPrefix}-calendar-cell--selected`],
        onClick: () => {
          var _a2;
          if (disabled) return;
          const monthTs2 = startOfMonth(ts).valueOf();
          this.monthTs = monthTs2;
          if (notInCurrentMonth) {
            (_a2 = this.onPanelChange) === null || _a2 === void 0 ? void 0 : _a2.call(this, {
              year: getYear(monthTs2),
              month: getMonth(monthTs2) + 1
            });
          }
          this.doUpdateValue(ts, {
            year: year2,
            month: month + 1,
            date
          });
        }
      }, h("div", {
        class: `${mergedClsPrefix}-calendar-date`
      }, h("div", {
        class: `${mergedClsPrefix}-calendar-date__date`,
        title: fullDate
      }, date), index < 7 && h("div", {
        class: `${mergedClsPrefix}-calendar-date__day`,
        title: fullDate
      }, format(ts, "EEE", {
        locale
      }))), (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots, {
        year: year2,
        month: month + 1,
        date
      }), h("div", {
        class: `${mergedClsPrefix}-calendar-cell__bar`
      }));
    })));
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    function handleUpdateValue(_, { year, month, date }) {
      message.success(`${year}-${month}-${date}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Calendar</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/calendar" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-calendar
						v-model:value="value"
						#="{ year, month, date }"
						:is-date-disabled="isDateDisabled"
						@update:value="handleUpdateValue"
					>
						{{ year }}-{{ month }}-{{ date }}
					</n-calendar>
					`))} ${ssrInterpolate(js(`
						const message = useMessage()

						function handleUpdateValue(_: number, { year, month, date }: { year: number; month: number; date: number }) {
							message.success(\`\${year}-\${month}-\${date}\`)
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-calendar
						v-model:value="value"
						#="{ year, month, date }"
						:is-date-disabled="isDateDisabled"
						@update:value="handleUpdateValue"
					>
						{{ year }}-{{ month }}-{{ date }}
					</n-calendar>
					`)) + " " + toDisplayString(js(`
						const message = useMessage()

						function handleUpdateValue(_: number, { year, month, date }: { year: number; month: number; date: number }) {
							message.success(\`\${year}-\${month}-\${date}\`)
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCalendar), { "onUpdate:value": handleUpdateValue }, {
              default: withCtx(({ year, month, date }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(year)}-${ssrInterpolate(month)}-${ssrInterpolate(date)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(year) + "-" + toDisplayString(month) + "-" + toDisplayString(date), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCalendar), { "onUpdate:value": handleUpdateValue }, {
                default: withCtx(({ year, month, date }) => [
                  createTextVNode(toDisplayString(year) + "-" + toDisplayString(month) + "-" + toDisplayString(date), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Calendar-CsF8jVj3.mjs.map
