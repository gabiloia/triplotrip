import { defineComponent, ref, computed, watch, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, createTextVNode, createCommentVNode, toDisplayString, Fragment, renderList, mergeModels, useModel, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as _export_sfc, ab as useThemeStore, aI as NSpin, B as Button, _ as _sfc_main$o, by as NDrawer, bz as NDrawerContent } from './server.mjs';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { N as NForm, a as NFormItem } from './FormItem-BD_bmr5c.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { N as NDatePicker } from './DatePicker-x2QVp_NZ.mjs';
import { N as NSwitch } from './Switch-CpS4WZNc.mjs';
import { N as NSelect } from './Select-C3EjoE5y.mjs';
import { N as NPopconfirm } from './Popconfirm-DaiJOkJ0.mjs';
import { S as SegmentedPage } from './SegmentedPage-Dn1y-8PE.mjs';
import { u as useHideLayoutFooter } from './useHideLayoutFooter-CVal8-DF.mjs';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import FullCalendar$1 from '@fullcalendar/vue3';
import { useResizeObserver } from '@vueuse/core';
import { DatePicker } from 'v-calendar';
import { N as NButtonGroup } from './ButtonGroup-DmH6L5Fi.mjs';
import { N as NCheckbox, a as NCheckboxGroup } from './Checkbox-bxBkrq-p.mjs';
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
import 'vue-router';
import 'lodash/castArray.js';
import 'qs';
import '@css-render/vue3-ssr';
import 'deep-pick-omit';
import 'colord';
import 'lodash/get.js';
import 'vooks';
import 'lodash/set.js';
import 'seemly';
import 'lodash-es';
import '@css-render/plugin-bem';
import 'css-render';
import 'evtd';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'vdirs';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';
import 'async-validator';
import './use-collection-Dfn99m8m.mjs';
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';
import './utils-BrnwStsU.mjs';
import './getDefaultOptions-BBsy6BU_.mjs';
import './TimePicker-QgwSrnik.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './index-8J19xG0f.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './Forward-B1Z9q27Z.mjs';
import './utils-DMBa_qdR.mjs';
import './Selection-CiVeFFpt.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-BGzY6WVh.mjs';
import './Checkmark-Dx0exe4H.mjs';

const availableCalendars = [
  {
    label: "Personal"
  },
  {
    label: "Business"
  },
  {
    label: "Family"
  },
  {
    label: "Holiday"
  },
  {
    label: "Other"
  }
];
function getEvents() {
  const events2 = [];
  for (let i = 0; i < 30; i++) {
    const allDay = faker.datatype.boolean();
    const start = faker.date.between({
      from: dayjs().subtract(1, "month").toDate(),
      to: dayjs().add(1, "month").toDate()
    });
    const end = faker.date.between({ from: start, to: dayjs(start).add(2, "d").toDate() });
    events2.push({
      id: faker.string.nanoid(),
      title: faker.lorem.sentence(faker.number.int({ min: 1, max: 3 })).slice(0, -1),
      start,
      end,
      allDay,
      extendedProps: {
        calendar: faker.helpers.arrayElements(availableCalendars, 1)[0].label,
        location: faker.datatype.boolean() ? faker.location.streetAddress(true) : "",
        description: faker.datatype.boolean() ? faker.lorem.sentence(faker.number.int({ min: 7, max: 20 })) : ""
      }
    });
  }
  return events2;
}
const events = getEvents();
const useFullCalendarStore = defineStore("calendar", {
  state: () => ({
    events,
    availableCalendars,
    selectedCalendars: ["Personal", "Business", "Family", "Holiday", "Other"]
  }),
  actions: {
    fetchEvents() {
      const calendars = this.selectedCalendars;
      return this.events.filter((event) => {
        var _a;
        return calendars.includes(((_a = event.extendedProps) == null ? void 0 : _a.calendar) || "");
      });
    },
    addEvent(event) {
      event.id = faker.string.nanoid();
      this.events.push(event);
    },
    updateEvent(event) {
      const eventBKP = this.events.find((e) => e.id === event.id);
      if (eventBKP) {
        Object.assign(eventBKP, event);
      }
      return event;
    },
    removeEvent(eventId) {
      const eventIndex = this.events.findIndex((e) => e.id === eventId);
      this.events.splice(eventIndex, 1);
      return true;
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EventEditor",
  __ssrInlineRender: true,
  props: {
    "event": { default: null },
    "eventModifiers": {},
    "show": { type: Boolean, ...{ default: false } },
    "showModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["submitEvent", "deleteEvent"], ["update:event", "update:show"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const event = useModel(__props, "event");
    const modalShow = useModel(__props, "show");
    const refForm = ref();
    const fullCalendarStore = useFullCalendarStore();
    const selectCalendar = computed(
      () => fullCalendarStore.availableCalendars.map((o) => ({
        label: o.label,
        value: o.label
      }))
    );
    const formRules = {
      title: {
        required: true,
        message: "Please input event title",
        trigger: "blur"
      }
    };
    function submitEvent() {
      var _a;
      (_a = refForm.value) == null ? void 0 : _a.validate((errors) => {
        if (!errors && event.value) {
          emit("submitEvent");
        }
      });
    }
    function deleteEvent() {
      emit("deleteEvent");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NDrawer), mergeProps({
        show: modalShow.value,
        "onUpdate:show": ($event) => modalShow.value = $event,
        width: 500,
        class: "fullcalendar-drawer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDrawerContent), {
              title: ((_a = event.value) == null ? void 0 : _a.id) ? "Edit event" : "Add event",
              closable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (event.value) {
                    _push3(ssrRenderComponent(unref(NForm), {
                      ref_key: "refForm",
                      ref: refForm,
                      "label-width": 80,
                      model: event.value,
                      rules: formRules
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Title",
                            path: "title"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NInput), {
                                  value: event.value.title,
                                  "onUpdate:value": ($event) => event.value.title = $event,
                                  placeholder: "Event Title"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NInput), {
                                    value: event.value.title,
                                    "onUpdate:value": ($event) => event.value.title = $event,
                                    placeholder: "Event Title"
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col justify-between sm:flex-row"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Start",
                            path: "start"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NDatePicker), {
                                  value: event.value.start,
                                  "onUpdate:value": ($event) => event.value.start = $event,
                                  class: "w-full",
                                  type: event.value.allDay ? "date" : "datetime"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NDatePicker), {
                                    value: event.value.start,
                                    "onUpdate:value": ($event) => event.value.start = $event,
                                    class: "w-full",
                                    type: event.value.allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "End",
                            path: "end"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NDatePicker), {
                                  value: event.value.end,
                                  "onUpdate:value": ($event) => event.value.end = $event,
                                  class: "w-full",
                                  type: event.value.allDay ? "date" : "datetime"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NDatePicker), {
                                    value: event.value.end,
                                    "onUpdate:value": ($event) => event.value.end = $event,
                                    class: "w-full",
                                    type: event.value.allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex justify-between gap-6"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "All Day",
                            path: "allDay"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NSwitch), {
                                  value: event.value.allDay,
                                  "onUpdate:value": ($event) => event.value.allDay = $event
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NSwitch), {
                                    value: event.value.allDay,
                                    "onUpdate:value": ($event) => event.value.allDay = $event
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Calendar",
                            path: "extendedProps.calendar",
                            class: "grow"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NSelect), {
                                  value: event.value.extendedProps.calendar,
                                  "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                  options: selectCalendar.value
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NSelect), {
                                    value: event.value.extendedProps.calendar,
                                    "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                    options: selectCalendar.value
                                  }, null, 8, ["value", "onUpdate:value", "options"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Location",
                            path: "extendedProps.location"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NInput), {
                                  value: event.value.extendedProps.location,
                                  "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                                  type: "textarea",
                                  placeholder: "Event Location"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NInput), {
                                    value: event.value.extendedProps.location,
                                    "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                                    type: "textarea",
                                    placeholder: "Event Location"
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Description",
                            path: "extendedProps.description"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NInput), {
                                  value: event.value.extendedProps.description,
                                  "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                                  type: "textarea",
                                  placeholder: "Event Description"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NInput), {
                                    value: event.value.extendedProps.description,
                                    "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                                    type: "textarea",
                                    placeholder: "Event Description"
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex items-center justify-end gap-3"${_scopeId3}>`);
                          if ((_a2 = event.value) == null ? void 0 : _a2.id) {
                            _push4(ssrRenderComponent(unref(NFormItem), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                    trigger: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(Button), null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`Delete Event`);
                                            } else {
                                              return [
                                                createTextVNode("Delete Event")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(Button), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Delete Event")
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Are you sure you want <br${_scopeId5}> to delete the event? `);
                                      } else {
                                        return [
                                          createTextVNode(" Are you sure you want "),
                                          createVNode("br"),
                                          createTextVNode(" to delete the event? ")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                      trigger: withCtx(() => [
                                        createVNode(unref(Button), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Delete Event")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createTextVNode(" Are you sure you want "),
                                        createVNode("br"),
                                        createTextVNode(" to delete the event? ")
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(unref(NFormItem), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Button), {
                                  type: "primary",
                                  onClick: submitEvent
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Submit`);
                                    } else {
                                      return [
                                        createTextVNode("Submit")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(Button), {
                                    type: "primary",
                                    onClick: submitEvent
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Submit")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode(unref(NFormItem), {
                              label: "Title",
                              path: "title"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NInput), {
                                  value: event.value.title,
                                  "onUpdate:value": ($event) => event.value.title = $event,
                                  placeholder: "Event Title"
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex flex-col justify-between sm:flex-row" }, [
                              createVNode(unref(NFormItem), {
                                label: "Start",
                                path: "start"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(NDatePicker), {
                                    value: event.value.start,
                                    "onUpdate:value": ($event) => event.value.start = $event,
                                    class: "w-full",
                                    type: event.value.allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NFormItem), {
                                label: "End",
                                path: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(NDatePicker), {
                                    value: event.value.end,
                                    "onUpdate:value": ($event) => event.value.end = $event,
                                    class: "w-full",
                                    type: event.value.allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex justify-between gap-6" }, [
                              createVNode(unref(NFormItem), {
                                label: "All Day",
                                path: "allDay"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(NSwitch), {
                                    value: event.value.allDay,
                                    "onUpdate:value": ($event) => event.value.allDay = $event
                                  }, null, 8, ["value", "onUpdate:value"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NFormItem), {
                                label: "Calendar",
                                path: "extendedProps.calendar",
                                class: "grow"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(NSelect), {
                                    value: event.value.extendedProps.calendar,
                                    "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                    options: selectCalendar.value
                                  }, null, 8, ["value", "onUpdate:value", "options"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(unref(NFormItem), {
                              label: "Location",
                              path: "extendedProps.location"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NInput), {
                                  value: event.value.extendedProps.location,
                                  "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                                  type: "textarea",
                                  placeholder: "Event Location"
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NFormItem), {
                              label: "Description",
                              path: "extendedProps.description"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NInput), {
                                  value: event.value.extendedProps.description,
                                  "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                                  type: "textarea",
                                  placeholder: "Event Description"
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                              ((_b2 = event.value) == null ? void 0 : _b2.id) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                    trigger: withCtx(() => [
                                      createVNode(unref(Button), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete Event")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createTextVNode(" Are you sure you want "),
                                      createVNode("br"),
                                      createTextVNode(" to delete the event? ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(unref(NFormItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Button), {
                                    type: "primary",
                                    onClick: submitEvent
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Submit")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
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
                    event.value ? (openBlock(), createBlock(unref(NForm), {
                      key: 0,
                      ref_key: "refForm",
                      ref: refForm,
                      "label-width": 80,
                      model: event.value,
                      rules: formRules
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(unref(NFormItem), {
                            label: "Title",
                            path: "title"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NInput), {
                                value: event.value.title,
                                "onUpdate:value": ($event) => event.value.title = $event,
                                placeholder: "Event Title"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex flex-col justify-between sm:flex-row" }, [
                            createVNode(unref(NFormItem), {
                              label: "Start",
                              path: "start"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NDatePicker), {
                                  value: event.value.start,
                                  "onUpdate:value": ($event) => event.value.start = $event,
                                  class: "w-full",
                                  type: event.value.allDay ? "date" : "datetime"
                                }, null, 8, ["value", "onUpdate:value", "type"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NFormItem), {
                              label: "End",
                              path: "end"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NDatePicker), {
                                  value: event.value.end,
                                  "onUpdate:value": ($event) => event.value.end = $event,
                                  class: "w-full",
                                  type: event.value.allDay ? "date" : "datetime"
                                }, null, 8, ["value", "onUpdate:value", "type"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex justify-between gap-6" }, [
                            createVNode(unref(NFormItem), {
                              label: "All Day",
                              path: "allDay"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NSwitch), {
                                  value: event.value.allDay,
                                  "onUpdate:value": ($event) => event.value.allDay = $event
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NFormItem), {
                              label: "Calendar",
                              path: "extendedProps.calendar",
                              class: "grow"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NSelect), {
                                  value: event.value.extendedProps.calendar,
                                  "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                  options: selectCalendar.value
                                }, null, 8, ["value", "onUpdate:value", "options"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(unref(NFormItem), {
                            label: "Location",
                            path: "extendedProps.location"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NInput), {
                                value: event.value.extendedProps.location,
                                "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                                type: "textarea",
                                placeholder: "Event Location"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NFormItem), {
                            label: "Description",
                            path: "extendedProps.description"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NInput), {
                                value: event.value.extendedProps.description,
                                "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                                type: "textarea",
                                placeholder: "Event Description"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                            ((_a2 = event.value) == null ? void 0 : _a2.id) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                  trigger: withCtx(() => [
                                    createVNode(unref(Button), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete Event")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Are you sure you want "),
                                    createVNode("br"),
                                    createTextVNode(" to delete the event? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(unref(NFormItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(Button), {
                                  type: "primary",
                                  onClick: submitEvent
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Submit")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }),
                      _: 1
                    }, 8, ["model"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NDrawerContent), {
                title: ((_b = event.value) == null ? void 0 : _b.id) ? "Edit event" : "Add event",
                closable: ""
              }, {
                default: withCtx(() => [
                  event.value ? (openBlock(), createBlock(unref(NForm), {
                    key: 0,
                    ref_key: "refForm",
                    ref: refForm,
                    "label-width": 80,
                    model: event.value,
                    rules: formRules
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode(unref(NFormItem), {
                          label: "Title",
                          path: "title"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NInput), {
                              value: event.value.title,
                              "onUpdate:value": ($event) => event.value.title = $event,
                              placeholder: "Event Title"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-col justify-between sm:flex-row" }, [
                          createVNode(unref(NFormItem), {
                            label: "Start",
                            path: "start"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NDatePicker), {
                                value: event.value.start,
                                "onUpdate:value": ($event) => event.value.start = $event,
                                class: "w-full",
                                type: event.value.allDay ? "date" : "datetime"
                              }, null, 8, ["value", "onUpdate:value", "type"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NFormItem), {
                            label: "End",
                            path: "end"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NDatePicker), {
                                value: event.value.end,
                                "onUpdate:value": ($event) => event.value.end = $event,
                                class: "w-full",
                                type: event.value.allDay ? "date" : "datetime"
                              }, null, 8, ["value", "onUpdate:value", "type"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex justify-between gap-6" }, [
                          createVNode(unref(NFormItem), {
                            label: "All Day",
                            path: "allDay"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: event.value.allDay,
                                "onUpdate:value": ($event) => event.value.allDay = $event
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NFormItem), {
                            label: "Calendar",
                            path: "extendedProps.calendar",
                            class: "grow"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NSelect), {
                                value: event.value.extendedProps.calendar,
                                "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                options: selectCalendar.value
                              }, null, 8, ["value", "onUpdate:value", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(unref(NFormItem), {
                          label: "Location",
                          path: "extendedProps.location"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NInput), {
                              value: event.value.extendedProps.location,
                              "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                              type: "textarea",
                              placeholder: "Event Location"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NFormItem), {
                          label: "Description",
                          path: "extendedProps.description"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NInput), {
                              value: event.value.extendedProps.description,
                              "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                              type: "textarea",
                              placeholder: "Event Description"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                          ((_a2 = event.value) == null ? void 0 : _a2.id) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                trigger: withCtx(() => [
                                  createVNode(unref(Button), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Delete Event")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Are you sure you want "),
                                  createVNode("br"),
                                  createTextVNode(" to delete the event? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(unref(NFormItem), null, {
                            default: withCtx(() => [
                              createVNode(unref(Button), {
                                type: "primary",
                                onClick: submitEvent
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Submit")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["model"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["title"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/FullCalendar/EventEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ExternalIcon = "tabler:external-link";
const NextIcon = "carbon:chevron-right";
const PrevIcon = "carbon:chevron-left";
const AddEventIcon = "carbon:calendar-add";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FullCalendar",
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
      events: (info, successCallback) => {
        if (!info) return;
        const events2 = fullCalendarStore.fetchEvents();
        successCallback(events2);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped page-mobile-full page-without-footer flex flex-col" }, _attrs))} data-v-83723930>`);
      _push(ssrRenderComponent(SegmentedPage, {
        "use-main-scroll": false,
        "main-content-class": "h-full! p-0!",
        "disable-container-query": "",
        "enable-resize": "",
        onMounted: setCtx
      }, {
        "sidebar-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section section-calendar" data-v-83723930${_scopeId}>`);
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
            _push2(`</div><div class="section fullcalendar-actions-box" data-v-83723930${_scopeId}><p class="mb-3 opacity-50" data-v-83723930${_scopeId}>Calendars</p><div class="calendars-list" data-v-83723930${_scopeId}>`);
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
            _push2(`</div></div><div class="section mt-7" data-v-83723930${_scopeId}><div class="links flex flex-col gap-3" data-v-83723930${_scopeId}><a href="https://fullcalendar.io/docs/vue" target="_blank" alt="docs" class="flex items-center gap-2" rel="nofollow noopener noreferrer" data-v-83723930${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$o, {
              name: ExternalIcon,
              size: 16
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-83723930${_scopeId}>docs</span></a><a href="https://vcalendar.io/" target="_blank" alt="docs" class="flex items-center gap-2" rel="nofollow noopener noreferrer" data-v-83723930${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$o, {
              name: ExternalIcon,
              size: 16
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-83723930${_scopeId}>VCalendar</span></a></div></div>`);
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
                createVNode("p", { class: "mb-3 opacity-50" }, "Calendars"),
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
              ]),
              createVNode("div", { class: "section mt-7" }, [
                createVNode("div", { class: "links flex flex-col gap-3" }, [
                  createVNode("a", {
                    href: "https://fullcalendar.io/docs/vue",
                    target: "_blank",
                    alt: "docs",
                    class: "flex items-center gap-2",
                    rel: "nofollow noopener noreferrer"
                  }, [
                    createVNode(_sfc_main$o, {
                      name: ExternalIcon,
                      size: 16
                    }),
                    createVNode("span", null, "docs")
                  ]),
                  createVNode("a", {
                    href: "https://vcalendar.io/",
                    target: "_blank",
                    alt: "docs",
                    class: "flex items-center gap-2",
                    rel: "nofollow noopener noreferrer"
                  }, [
                    createVNode(_sfc_main$o, {
                      name: ExternalIcon,
                      size: 16
                    }),
                    createVNode("span", null, "VCalendar")
                  ])
                ])
              ])
            ];
          }
        }),
        "main-toolbar": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2" data-v-83723930${_scopeId}><div class="w-24" data-v-83723930${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NSelect), {
              value: viewTypeModel.value,
              "onUpdate:value": ($event) => viewTypeModel.value = $event,
              size: compactMode.value ? "small" : "medium",
              options: viewTypeOptions,
              placeholder: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-83723930${_scopeId}>`);
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
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          name: PrevIcon,
                          size: 20
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, {
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
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          name: NextIcon,
                          size: 20
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, {
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
                          _push4(`Today`);
                        } else {
                          return [
                            createTextVNode("Today")
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
                        createVNode(_sfc_main$o, {
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
                        createVNode(_sfc_main$o, {
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
                        createTextVNode("Today")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="${ssrRenderClass([{ compact: compactMode.value }, "current-date grow px-3 text-right"])}" data-v-83723930${_scopeId}>${ssrInterpolate(currentDate.value)}</div>`);
            if (!compactMode.value) {
              _push2(`<div data-v-83723930${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Button), {
                type: "primary",
                onClick: ($event) => createNewEvent({})
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$o, {
                      name: AddEventIcon,
                      size: 20
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$o, {
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
                          createVNode(_sfc_main$o, {
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
                          createVNode(_sfc_main$o, {
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
                          createTextVNode("Today")
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
                      createVNode(_sfc_main$o, {
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
            _push2(`<div class="main scrollbar-styled h-full" data-v-83723930${_scopeId}>`);
            if (ready.value) {
              _push2(ssrRenderComponent(unref(FullCalendar$1), {
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
                ready.value ? (openBlock(), createBlock(unref(FullCalendar$1), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Apps/Calendars/FullCalendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FullCalendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-83723930"]]);

export { FullCalendar as default };
//# sourceMappingURL=FullCalendar-CVBgjaxm.mjs.map
