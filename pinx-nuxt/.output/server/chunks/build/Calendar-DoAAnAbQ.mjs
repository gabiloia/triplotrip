import { defineComponent, ref, computed, watch, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, createTextVNode, createCommentVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useFullCalendarStore, _ as _sfc_main$1 } from './EventEditor-CibS5aP9.mjs';
import { _ as _export_sfc, ab as useThemeStore, ac as NSpin, B as Button, a as _sfc_main$s } from './server.mjs';
import { S as SegmentedPage } from './SegmentedPage-C7P2QTQg.mjs';
import { u as useHideLayoutFooter } from './useHideLayoutFooter-CVal8-DF.mjs';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import FullCalendar from '@fullcalendar/vue3';
import { useResizeObserver } from '@vueuse/core';
import { DatePicker } from 'v-calendar';
import axios from 'axios';
import { N as NButtonGroup } from './ButtonGroup-BgUV4cXl.mjs';
import { N as NCheckbox, a as NCheckboxGroup } from './Checkbox-kHPptutx.mjs';
import { N as NSelect } from './Select-CJatCJlw.mjs';
import '@faker-js/faker';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@vue/shared';
import 'dayjs';
import 'pinia';
import './DatePicker-DEHA8H7M.mjs';
import 'seemly';
import 'vdirs';
import 'vooks';
import './utils-gRb4MLhP.mjs';
import './getDefaultOptions-Badlq585.mjs';
import './TimePicker-zRd6QI99.mjs';
import './Input-DOxGe8j0.mjs';
import 'evtd';
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';
import './index-CulsySW9.mjs';
import './Forward-B1Z9q27Z.mjs';
import './Switch-Ds1OeKkl.mjs';
import './Popconfirm-CE1_Xk-K.mjs';
import './FormItem-DAK_fF_C.mjs';
import 'async-validator';
import 'lodash-es';
import './use-collection-Dfn99m8m.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'lodash/castArray.js';
import '@css-render/vue3-ssr';
import 'deep-pick-omit';
import 'colord';
import 'lodash/get.js';
import 'lodash/set.js';
import '@css-render/plugin-bem';
import 'css-render';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';
import './Selection-7aS0-4xx.mjs';

async function fetchEventsFromStrapi() {
  const { data } = await axios.get("http://localhost:1337/api/events?populate=*");
  return data.data.map((item) => ({
    id: item.documentId,
    title: item.Title,
    start: item.Start,
    end: item.End,
    allDay: item.AllDay,
    extendedProps: {
      calendar: item.Calendar,
      location: item.Location,
      description: item.Description
    }
  }));
}
const NextIcon = "carbon:chevron-right";
const PrevIcon = "carbon:chevron-left";
const AddEventIcon = "carbon:calendar-add";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const fullCalendarStore = useFullCalendarStore();
    const themeStore = useThemeStore();
    const newEvent = {
      title: "",
      start: (/* @__PURE__ */ new Date()).getTime(),
      end: (/* @__PURE__ */ new Date()).getTime(),
      allDay: false,
      extendedProps: {
        calendar: "Personal",
        location: "",
        description: ""
      }
    };
    const ready = ref(false);
    const compactMode = ref(false);
    const refCalendar = ref();
    const calWrap = ref();
    const calendarApi = ref(null);
    const ctxPage = ref(null);
    const currentEvent = ref(null);
    const selectedDate = ref(/* @__PURE__ */ new Date());
    const currentViewType = ref(void 0);
    const currentDate = ref(void 0);
    const viewTypeModel = computed({
      get: () => currentViewType.value,
      set: (val) => calView(val)
    });
    const viewTypeOptions = [
      { value: "timeGridDay", label: "Day" },
      { value: "timeGridWeek", label: "Week" },
      { value: "listMonth", label: "List" },
      { value: "dayGridMonth", label: "Month" }
    ];
    useResizeObserver(calWrap, (entries) => {
      var _a;
      const entry = entries[0];
      const { width } = entry.contentRect;
      compactMode.value = width < 600;
      (_a = calendarApi.value) == null ? void 0 : _a.updateSize();
    });
    function setCtx(ctx) {
      ctxPage.value = ctx;
    }
    function setCurrentState() {
      var _a, _b;
      currentViewType.value = (_a = calendarApi.value) == null ? void 0 : _a.view.type;
      currentDate.value = (_b = calendarApi.value) == null ? void 0 : _b.view.title;
    }
    function eventSanitizer(event) {
      var _a, _b;
      const {
        publicId,
        title,
        extendedProps: { calendar, location, description },
        allDay
      } = event._def;
      const start = ((_a = event._instance) == null ? void 0 : _a.range.start) || /* @__PURE__ */ new Date();
      const end = ((_b = event._instance) == null ? void 0 : _b.range.end) || /* @__PURE__ */ new Date();
      return {
        id: publicId,
        title,
        start,
        end,
        extendedProps: {
          calendar,
          location,
          description
        },
        allDay
      };
    }
    function eventToEdit(event) {
      var _a, _b;
      const {
        publicId,
        title,
        extendedProps: { calendar, location, description },
        allDay
      } = event._def;
      const start = ((_a = event._instance) == null ? void 0 : _a.range.start.getTime()) || (/* @__PURE__ */ new Date()).getTime();
      const end = ((_b = event._instance) == null ? void 0 : _b.range.end.getTime()) || (/* @__PURE__ */ new Date()).getTime();
      return {
        id: publicId,
        title,
        start,
        end,
        extendedProps: {
          calendar,
          location,
          description
        },
        allDay
      };
    }
    const checkAll = computed({
      get: () => fullCalendarStore.selectedCalendars.length === fullCalendarStore.availableCalendars.length,
      set: (val) => {
        if (val) {
          fullCalendarStore.selectedCalendars = fullCalendarStore.availableCalendars.map(
            (i) => i.label
          );
        } else if (fullCalendarStore.selectedCalendars.length === fullCalendarStore.availableCalendars.length) {
          fullCalendarStore.selectedCalendars = [];
        }
      }
    });
    const isThemeDark = computed(() => themeStore.isThemeDark);
    const modalShow = computed({
      get: () => currentEvent.value !== null,
      set: () => currentEvent.value = null
    });
    function calMove(direction) {
      var _a, _b, _c;
      if (direction === "next") {
        (_a = calendarApi.value) == null ? void 0 : _a.next();
      }
      if (direction === "prev") {
        (_b = calendarApi.value) == null ? void 0 : _b.prev();
      }
      if (direction === "today") {
        (_c = calendarApi.value) == null ? void 0 : _c.today();
      }
    }
    function calView(type) {
      var _a;
      (_a = calendarApi.value) == null ? void 0 : _a.changeView(type);
    }
    function submitEvent() {
      if (currentEvent.value) {
        if (currentEvent.value.id) {
          fullCalendarStore.updateEvent(currentEvent.value);
        } else {
          fullCalendarStore.addEvent(currentEvent.value);
        }
        currentEvent.value = null;
        refetchEvents();
      }
    }
    function deleteEvent() {
      if (currentEvent.value) {
        if (currentEvent.value.id) {
          fullCalendarStore.removeEvent(currentEvent.value.id);
        }
        currentEvent.value = null;
        refetchEvents();
      }
    }
    function createNewEvent({ start, end }) {
      currentEvent.value = {
        ...structuredClone(newEvent),
        start: start || (/* @__PURE__ */ new Date()).getTime(),
        end: end || (/* @__PURE__ */ new Date()).getTime(),
        allDay: true
      };
    }
    function refetchEvents() {
      var _a;
      (_a = calendarApi.value) == null ? void 0 : _a.refetchEvents();
    }
    function goToday() {
      goToDate(/* @__PURE__ */ new Date());
    }
    function goToDate(date, newEvent2) {
      var _a, _b, _c;
      (_b = (_a = ctxPage.value) == null ? void 0 : _a.closeSidebar) == null ? void 0 : _b.call(_a);
      (_c = calendarApi.value) == null ? void 0 : _c.gotoDate(date);
    }
    const calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      headerToolbar: (
        /* false */
        {
          start: "drawerToggler actionsToggler today",
          center: "prev,title,next",
          end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
        }
      ),
      firstDay: 1,
      forceEventDuration: true,
      editable: true,
      eventResizableFromStart: true,
      dragScroll: true,
      dayMaxEvents: 2,
      navLinks: true,
      events: async (info, successCallback, failureCallback) => {
        try {
          const events = await fetchEventsFromStrapi();
          successCallback(events);
        } catch (err) {
          console.error("Error fetching events from Strapi:", err);
          failureCallback == null ? void 0 : failureCallback(err);
        }
      },
      eventClassNames({ event }) {
        return [`c-${event._def.extendedProps.calendar} styled`];
      },
      eventClick({ event }) {
        currentEvent.value = eventToEdit(event);
      },
      dateClick(info) {
        createNewEvent({ start: info.date.getTime(), end: info.date.getTime() });
      },
      eventDrop: ({ event }) => {
        if (event._instance) {
          event._instance.range.start = event.start;
          event._instance.range.end = event.end;
        }
        const updated = eventSanitizer(event);
        fullCalendarStore.updateEvent(updated);
        refetchEvents();
      },
      datesSet() {
        setCurrentState();
      }
      /*
      customButtons: {
      	drawerToggler: {
      		text: "",
      		click() {
      			createNewEvent({})
      		}
      	},
      	actionsToggler: {
      		text: "Actions",
      		click() {
      			showLabelsModal.value = !showLabelsModal.value
      		}
      	}
      }
      */
    };
    watch(() => fullCalendarStore.selectedCalendars, refetchEvents);
    watch(selectedDate, (val) => goToDate(val));
    useHideLayoutFooter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped page-mobile-full page-without-footer flex flex-col" }, _attrs))} data-v-e62361f6>`);
      _push(ssrRenderComponent(SegmentedPage, {
        "use-main-scroll": false,
        "main-content-class": "h-full! p-0!",
        "disable-container-query": "",
        "enable-resize": "",
        onMounted: setCtx
      }, {
        "sidebar-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section section-calendar" data-v-e62361f6${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DatePicker), {
              modelValue: selectedDate.value,
              "onUpdate:modelValue": ($event) => selectedDate.value = $event,
              expanded: "",
              borderless: "",
              transparent: "",
              locale: "en",
              "first-day-of-week": 2,
              "is-dark": isThemeDark.value
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section fullcalendar-actions-box" data-v-e62361f6${_scopeId}><p class="mb-3 opacity-50" data-v-e62361f6${_scopeId}>Calendarios</p><div class="calendars-list" data-v-e62361f6${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NCheckbox), {
              checked: checkAll.value,
              "onUpdate:checked": ($event) => checkAll.value = $event,
              label: "View all"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NCheckboxGroup), {
              value: unref(fullCalendarStore).selectedCalendars,
              "onUpdate:value": ($event) => unref(fullCalendarStore).selectedCalendars = $event,
              class: "flex flex-col"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(fullCalendarStore).availableCalendars, (calendar) => {
                    _push3(ssrRenderComponent(unref(NCheckbox), {
                      key: calendar.label,
                      value: calendar.label,
                      class: ["styled", calendar.label],
                      label: calendar.label
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(fullCalendarStore).availableCalendars, (calendar) => {
                      return openBlock(), createBlock(unref(NCheckbox), {
                        key: calendar.label,
                        value: calendar.label,
                        class: ["styled", calendar.label],
                        label: calendar.label
                      }, null, 8, ["value", "class", "label"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "section section-calendar" }, [
                createVNode(unref(DatePicker), {
                  modelValue: selectedDate.value,
                  "onUpdate:modelValue": ($event) => selectedDate.value = $event,
                  expanded: "",
                  borderless: "",
                  transparent: "",
                  locale: "en",
                  "first-day-of-week": 2,
                  "is-dark": isThemeDark.value
                }, null, 8, ["modelValue", "onUpdate:modelValue", "is-dark"])
              ]),
              createVNode("div", { class: "section fullcalendar-actions-box" }, [
                createVNode("p", { class: "mb-3 opacity-50" }, "Calendarios"),
                createVNode("div", { class: "calendars-list" }, [
                  createVNode(unref(NCheckbox), {
                    checked: checkAll.value,
                    "onUpdate:checked": ($event) => checkAll.value = $event,
                    label: "View all"
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode(unref(NCheckboxGroup), {
                    value: unref(fullCalendarStore).selectedCalendars,
                    "onUpdate:value": ($event) => unref(fullCalendarStore).selectedCalendars = $event,
                    class: "flex flex-col"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(fullCalendarStore).availableCalendars, (calendar) => {
                        return openBlock(), createBlock(unref(NCheckbox), {
                          key: calendar.label,
                          value: calendar.label,
                          class: ["styled", calendar.label],
                          label: calendar.label
                        }, null, 8, ["value", "class", "label"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"])
                ])
              ])
            ];
          }
        }),
        "main-toolbar": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2" data-v-e62361f6${_scopeId}><div class="w-24" data-v-e62361f6${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NSelect), {
              value: viewTypeModel.value,
              "onUpdate:value": ($event) => viewTypeModel.value = $event,
              size: compactMode.value ? "small" : "medium",
              options: viewTypeOptions,
              placeholder: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-e62361f6${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NButtonGroup), {
              size: compactMode.value ? "small" : "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => calMove("prev")
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$s, {
                          name: PrevIcon,
                          size: 20
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$s, {
                            name: PrevIcon,
                            size: 20
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => calMove("next")
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$s, {
                          name: NextIcon,
                          size: 20
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$s, {
                            name: NextIcon,
                            size: 20
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (!compactMode.value) {
                    _push3(ssrRenderComponent(unref(Button), {
                      onClick: ($event) => goToday()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Hoy`);
                        } else {
                          return [
                            createTextVNode("Hoy")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(unref(Button), {
                      onClick: ($event) => calMove("prev")
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$s, {
                          name: PrevIcon,
                          size: 20
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => calMove("next")
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$s, {
                          name: NextIcon,
                          size: 20
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    !compactMode.value ? (openBlock(), createBlock(unref(Button), {
                      key: 0,
                      onClick: ($event) => goToday()
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Hoy")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="${ssrRenderClass([{ compact: compactMode.value }, "current-date grow px-3 text-right"])}" data-v-e62361f6${_scopeId}>${ssrInterpolate(currentDate.value)}</div>`);
            if (!compactMode.value) {
              _push2(`<div data-v-e62361f6${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Button), {
                type: "primary",
                onClick: ($event) => createNewEvent({})
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      name: AddEventIcon,
                      size: 20
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, {
                        name: AddEventIcon,
                        size: 20
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode("div", { class: "w-24" }, [
                  createVNode(unref(NSelect), {
                    value: viewTypeModel.value,
                    "onUpdate:value": ($event) => viewTypeModel.value = $event,
                    size: compactMode.value ? "small" : "medium",
                    options: viewTypeOptions,
                    placeholder: ""
                  }, null, 8, ["value", "onUpdate:value", "size"])
                ]),
                createVNode("div", null, [
                  createVNode(unref(NButtonGroup), {
                    size: compactMode.value ? "small" : "medium"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), {
                        onClick: ($event) => calMove("prev")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$s, {
                            name: PrevIcon,
                            size: 20
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(unref(Button), {
                        onClick: ($event) => calMove("next")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$s, {
                            name: NextIcon,
                            size: 20
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      !compactMode.value ? (openBlock(), createBlock(unref(Button), {
                        key: 0,
                        onClick: ($event) => goToday()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Hoy")
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["size"])
                ]),
                createVNode("div", {
                  class: ["current-date grow px-3 text-right", { compact: compactMode.value }]
                }, toDisplayString(currentDate.value), 3),
                !compactMode.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(unref(Button), {
                    type: "primary",
                    onClick: ($event) => createNewEvent({})
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$s, {
                        name: AddEventIcon,
                        size: 20
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "main-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main scrollbar-styled h-full" data-v-e62361f6${_scopeId}>`);
            if (ready.value) {
              _push2(ssrRenderComponent(unref(FullCalendar), {
                ref_key: "refCalendar",
                ref: refCalendar,
                options: calendarOptions
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(NSpin), { class: "h-full w-full" }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "calWrap",
                ref: calWrap,
                class: "main scrollbar-styled h-full"
              }, [
                ready.value ? (openBlock(), createBlock(unref(FullCalendar), {
                  key: 0,
                  ref_key: "refCalendar",
                  ref: refCalendar,
                  options: calendarOptions
                }, null, 512)) : (openBlock(), createBlock(unref(NSpin), {
                  key: 1,
                  class: "h-full w-full"
                }))
              ], 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        show: modalShow.value,
        "onUpdate:show": ($event) => modalShow.value = $event,
        event: currentEvent.value,
        "onUpdate:event": ($event) => currentEvent.value = $event,
        onSubmitEvent: submitEvent,
        onDeleteEvent: deleteEvent
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e62361f6"]]);

export { Calendar as default };
//# sourceMappingURL=Calendar-DoAAnAbQ.mjs.map
