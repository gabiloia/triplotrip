import { defineComponent, ref, computed, watch, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, createTextVNode, createCommentVNode, toDisplayString, Fragment, renderList, toRefs, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import FullCalendar$1 from '@fullcalendar/vue3';
import { useResizeObserver } from '@vueuse/core';
import { DatePicker } from 'v-calendar';
import { a as _export_sfc, aM as useThemeStore, aV as useMessage, aY as NSpin, B as Button, _ as _sfc_main$o, by as NDrawer, bz as NDrawerContent } from './server.mjs';
import { N as NForm } from './Form-b1P4jfBt.mjs';
import { N as NFormItem } from './FormItem-DlAzS2Nq.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { N as NDatePicker } from './DatePicker-Bg-EPps0.mjs';
import { N as NSwitch } from './Switch-B_SrCjtw.mjs';
import { N as NSelect } from './Select-Cn-19BJa.mjs';
import { N as NPopconfirm } from './Popconfirm-DtMpDdXD.mjs';
import { S as SegmentedPage } from './SegmentedPage-vmHrmTY4.mjs';
import { u as useHideLayoutFooter } from './useHideLayoutFooter-D1uuqdlo.mjs';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { N as NButtonGroup } from './ButtonGroup-B1rpYDNl.mjs';
import { N as NCheckbox, a as NCheckboxGroup } from './Checkbox-DOjB2S1h.mjs';
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
import './utils-Dsl_XouJ.mjs';
import './getDefaultOptions-B-S4FfjT.mjs';
import './TimePicker-BCfmsXF5.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './index-CdFfausA.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './Forward-ggOyj9WR.mjs';
import './utils-DMBa_qdR.mjs';
import './Selection-DmCMUIfq.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-OKwjnwtS.mjs';
import './Checkmark-Dx0exe4H.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EventEditor",
  __ssrInlineRender: true,
  props: {
    event: {
      type: Object,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:show", "submitEvent", "deleteEvent"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { event, show } = toRefs(props);
    const refForm = ref();
    const message = useMessage();
    const excursionOptions = ref([]);
    const loading = ref(false);
    watch(
      event,
      (val) => {
        console.log("EventEditor recibi\xF3 evento:", val);
        if (!val) return;
        if (val.start && typeof val.start === "number") val.start = new Date(val.start);
        if (val.end && typeof val.end === "number") val.end = new Date(val.end);
        if (val.start && typeof val.start === "string") val.start = new Date(val.start);
        if (val.end && typeof val.end === "string") val.end = new Date(val.end);
        if (val.excursion && val.excursion.documentId) {
          val.excursionId = val.excursion.documentId;
        } else {
          val.excursionId = null;
        }
        console.log("Evento procesado para edici\xF3n:", {
          documentId: val.documentId,
          title: val.title,
          excursionId: val.excursionId,
          start: val.start,
          end: val.end
        });
      },
      { immediate: true }
    );
    const formRules = {
      title: {
        required: true,
        message: "Please input event title",
        trigger: "blur"
      }
    };
    async function handleSubmit() {
      var _a;
      try {
        await ((_a = refForm.value) == null ? void 0 : _a.validate());
        loading.value = true;
        const token = localStorage.getItem("auth_token");
        if (!token) throw new Error("No token");
        const user = await $fetch("https://admin.triplotrip.com/api/users/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const payload = {
          data: {
            Title: event.value.title,
            Start: new Date(event.value.start).toISOString(),
            End: new Date(event.value.end).toISOString(),
            AllDay: event.value.allDay || false,
            user: { connect: [{ documentId: user.documentId }] },
            excursion: event.value.excursionId ? { connect: [{ documentId: event.value.excursionId }] } : { disconnect: true }
          }
        };
        let eventoExiste = false;
        if (event.value.documentId) {
          try {
            const eventoExistente = await $fetch(`https://admin.triplotrip.com/api/events/${event.value.documentId}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            eventoExiste = !!eventoExistente.data;
            console.log("Evento existe en BD:", eventoExiste, eventoExistente.data);
          } catch (error) {
            console.log("Evento no encontrado en BD, ser\xE1 creado como nuevo");
            eventoExiste = false;
          }
        }
        if (eventoExiste && event.value.documentId) {
          console.log("EDITANDO evento existente:", event.value.documentId, payload);
          await $fetch(`https://admin.triplotrip.com/api/events/${event.value.documentId}`, {
            method: "PUT",
            body: payload,
            headers: { Authorization: `Bearer ${token}` }
          });
          message.success("Evento actualizado con \xE9xito");
        } else {
          console.log("CREANDO nuevo evento", payload);
          const nuevoEvento = await $fetch("https://admin.triplotrip.com/api/events", {
            method: "POST",
            body: payload,
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log("Nuevo evento creado:", nuevoEvento);
          message.success("Evento creado con \xE9xito");
        }
        emit("submitEvent");
        emit("update:show", false);
      } catch (error) {
        console.error("Error guardando evento:", error);
        message.error(`Error al guardar el evento: ${error.message || "Error desconocido"}`);
      } finally {
        loading.value = false;
      }
    }
    function deleteEvent() {
      emit("deleteEvent");
      emit("update:show", false);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NDrawer), mergeProps({
        show: unref(show),
        width: 500,
        class: "fullcalendar-drawer",
        "onUpdate:show": (val) => emit("update:show", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDrawerContent), {
              title: ((_a = unref(event)) == null ? void 0 : _a.documentId) ? "Edit event" : "Add event",
              closable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(event)) {
                    _push3(ssrRenderComponent(unref(NForm), {
                      ref_key: "refForm",
                      ref: refForm,
                      "label-width": 80,
                      model: unref(event),
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
                                  value: unref(event).title,
                                  "onUpdate:value": ($event) => unref(event).title = $event,
                                  placeholder: "Event Title"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NInput), {
                                    value: unref(event).title,
                                    "onUpdate:value": ($event) => unref(event).title = $event,
                                    placeholder: "Event Title"
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col justify-between sm:flex-row" data-v-b638fb22${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Start",
                            path: "start"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NDatePicker), {
                                  value: unref(event).start,
                                  "onUpdate:value": ($event) => unref(event).start = $event,
                                  class: "w-full",
                                  type: unref(event).allDay ? "date" : "datetime"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NDatePicker), {
                                    value: unref(event).start,
                                    "onUpdate:value": ($event) => unref(event).start = $event,
                                    class: "w-full",
                                    type: unref(event).allDay ? "date" : "datetime"
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
                                  value: unref(event).end,
                                  "onUpdate:value": ($event) => unref(event).end = $event,
                                  class: "w-full",
                                  type: unref(event).allDay ? "date" : "datetime"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NDatePicker), {
                                    value: unref(event).end,
                                    "onUpdate:value": ($event) => unref(event).end = $event,
                                    class: "w-full",
                                    type: unref(event).allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "All Day",
                            path: "allDay"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NSwitch), {
                                  value: unref(event).allDay,
                                  "onUpdate:value": ($event) => unref(event).allDay = $event
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NSwitch), {
                                    value: unref(event).allDay,
                                    "onUpdate:value": ($event) => unref(event).allDay = $event
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Excursi\xF3n",
                            path: "excursionId"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NSelect), {
                                  value: unref(event).excursionId,
                                  "onUpdate:value": ($event) => unref(event).excursionId = $event,
                                  options: excursionOptions.value,
                                  "label-field": "label",
                                  "value-field": "value",
                                  placeholder: "Seleccionar excursi\xF3n",
                                  clearable: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NSelect), {
                                    value: unref(event).excursionId,
                                    "onUpdate:value": ($event) => unref(event).excursionId = $event,
                                    options: excursionOptions.value,
                                    "label-field": "label",
                                    "value-field": "value",
                                    placeholder: "Seleccionar excursi\xF3n",
                                    clearable: ""
                                  }, null, 8, ["value", "onUpdate:value", "options"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex items-center justify-end gap-3" data-v-b638fb22${_scopeId3}>`);
                          if ((_a2 = unref(event)) == null ? void 0 : _a2.documentId) {
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
                                        _push6(` \xBFSeguro quer\xE9s eliminar el evento? `);
                                      } else {
                                        return [
                                          createTextVNode(" \xBFSeguro quer\xE9s eliminar el evento? ")
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
                                        createTextVNode(" \xBFSeguro quer\xE9s eliminar el evento? ")
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
                                  loading: loading.value,
                                  onClick: handleSubmit
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(loading.value ? "Guardando..." : "Guardar")}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(loading.value ? "Guardando..." : "Guardar"), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(Button), {
                                    type: "primary",
                                    loading: loading.value,
                                    onClick: handleSubmit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(loading.value ? "Guardando..." : "Guardar"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
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
                                  value: unref(event).title,
                                  "onUpdate:value": ($event) => unref(event).title = $event,
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
                                    value: unref(event).start,
                                    "onUpdate:value": ($event) => unref(event).start = $event,
                                    class: "w-full",
                                    type: unref(event).allDay ? "date" : "datetime"
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
                                    value: unref(event).end,
                                    "onUpdate:value": ($event) => unref(event).end = $event,
                                    class: "w-full",
                                    type: unref(event).allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(unref(NFormItem), {
                              label: "All Day",
                              path: "allDay"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NSwitch), {
                                  value: unref(event).allDay,
                                  "onUpdate:value": ($event) => unref(event).allDay = $event
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NFormItem), {
                              label: "Excursi\xF3n",
                              path: "excursionId"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NSelect), {
                                  value: unref(event).excursionId,
                                  "onUpdate:value": ($event) => unref(event).excursionId = $event,
                                  options: excursionOptions.value,
                                  "label-field": "label",
                                  "value-field": "value",
                                  placeholder: "Seleccionar excursi\xF3n",
                                  clearable: ""
                                }, null, 8, ["value", "onUpdate:value", "options"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                              ((_b2 = unref(event)) == null ? void 0 : _b2.documentId) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
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
                                      createTextVNode(" \xBFSeguro quer\xE9s eliminar el evento? ")
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
                                    loading: loading.value,
                                    onClick: handleSubmit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(loading.value ? "Guardando..." : "Guardar"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
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
                    unref(event) ? (openBlock(), createBlock(unref(NForm), {
                      key: 0,
                      ref_key: "refForm",
                      ref: refForm,
                      "label-width": 80,
                      model: unref(event),
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
                                value: unref(event).title,
                                "onUpdate:value": ($event) => unref(event).title = $event,
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
                                  value: unref(event).start,
                                  "onUpdate:value": ($event) => unref(event).start = $event,
                                  class: "w-full",
                                  type: unref(event).allDay ? "date" : "datetime"
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
                                  value: unref(event).end,
                                  "onUpdate:value": ($event) => unref(event).end = $event,
                                  class: "w-full",
                                  type: unref(event).allDay ? "date" : "datetime"
                                }, null, 8, ["value", "onUpdate:value", "type"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(unref(NFormItem), {
                            label: "All Day",
                            path: "allDay"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: unref(event).allDay,
                                "onUpdate:value": ($event) => unref(event).allDay = $event
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NFormItem), {
                            label: "Excursi\xF3n",
                            path: "excursionId"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NSelect), {
                                value: unref(event).excursionId,
                                "onUpdate:value": ($event) => unref(event).excursionId = $event,
                                options: excursionOptions.value,
                                "label-field": "label",
                                "value-field": "value",
                                placeholder: "Seleccionar excursi\xF3n",
                                clearable: ""
                              }, null, 8, ["value", "onUpdate:value", "options"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                            ((_a2 = unref(event)) == null ? void 0 : _a2.documentId) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
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
                                    createTextVNode(" \xBFSeguro quer\xE9s eliminar el evento? ")
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
                                  loading: loading.value,
                                  onClick: handleSubmit
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(loading.value ? "Guardando..." : "Guardar"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
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
                title: ((_b = unref(event)) == null ? void 0 : _b.documentId) ? "Edit event" : "Add event",
                closable: ""
              }, {
                default: withCtx(() => [
                  unref(event) ? (openBlock(), createBlock(unref(NForm), {
                    key: 0,
                    ref_key: "refForm",
                    ref: refForm,
                    "label-width": 80,
                    model: unref(event),
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
                              value: unref(event).title,
                              "onUpdate:value": ($event) => unref(event).title = $event,
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
                                value: unref(event).start,
                                "onUpdate:value": ($event) => unref(event).start = $event,
                                class: "w-full",
                                type: unref(event).allDay ? "date" : "datetime"
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
                                value: unref(event).end,
                                "onUpdate:value": ($event) => unref(event).end = $event,
                                class: "w-full",
                                type: unref(event).allDay ? "date" : "datetime"
                              }, null, 8, ["value", "onUpdate:value", "type"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(unref(NFormItem), {
                          label: "All Day",
                          path: "allDay"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NSwitch), {
                              value: unref(event).allDay,
                              "onUpdate:value": ($event) => unref(event).allDay = $event
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NFormItem), {
                          label: "Excursi\xF3n",
                          path: "excursionId"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NSelect), {
                              value: unref(event).excursionId,
                              "onUpdate:value": ($event) => unref(event).excursionId = $event,
                              options: excursionOptions.value,
                              "label-field": "label",
                              "value-field": "value",
                              placeholder: "Seleccionar excursi\xF3n",
                              clearable: ""
                            }, null, 8, ["value", "onUpdate:value", "options"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                          ((_a2 = unref(event)) == null ? void 0 : _a2.documentId) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
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
                                  createTextVNode(" \xBFSeguro quer\xE9s eliminar el evento? ")
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
                                loading: loading.value,
                                onClick: handleSubmit
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(loading.value ? "Guardando..." : "Guardar"), 1)
                                ]),
                                _: 1
                              }, 8, ["loading"])
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
const EventEditor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b638fb22"]]);
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
const NextIcon = "carbon:chevron-right";
const PrevIcon = "carbon:chevron-left";
const AddEventIcon = "carbon:calendar-add";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FullCalendar",
  __ssrInlineRender: true,
  setup(__props) {
    const fullCalendarStore = useFullCalendarStore();
    const themeStore = useThemeStore();
    const message = useMessage();
    const newEvent = {
      title: "",
      start: (/* @__PURE__ */ new Date()).getTime(),
      end: (/* @__PURE__ */ new Date()).getTime(),
      allDay: false
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
    function eventToEdit(event) {
      var _a, _b, _c, _d, _e;
      const { documentId, title, allDay } = event._def;
      const start = ((_a = event._instance) == null ? void 0 : _a.range.start.getTime()) || (/* @__PURE__ */ new Date()).getTime();
      const end = ((_b = event._instance) == null ? void 0 : _b.range.end.getTime()) || (/* @__PURE__ */ new Date()).getTime();
      const excursion = ((_c = event._def.extendedProps) == null ? void 0 : _c.excursion) || null;
      const user = ((_d = event._def.extendedProps) == null ? void 0 : _d.user) || null;
      console.log("Convirtiendo evento para editar:", {
        documentId,
        title,
        allDay,
        excursion,
        user,
        eventId: event.id,
        eventExtendedProps: event._def.extendedProps
      });
      return {
        documentId: documentId || ((_e = event._def.extendedProps) == null ? void 0 : _e.documentId),
        // Asegurar que tenemos el documentId
        title,
        start,
        end,
        allDay,
        excursion,
        user
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
    async function submitEvent() {
      if (currentEvent.value) {
        currentEvent.value = null;
        await refetchEvents();
      }
    }
    async function deleteEvent() {
      if (currentEvent.value && currentEvent.value.documentId) {
        try {
          const token = localStorage.getItem("auth_token");
          if (!token) throw new Error("No autenticado");
          await $fetch(`https://admin.triplotrip.com/api/events/${currentEvent.value.documentId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
          });
          message.success("Evento eliminado correctamente");
          currentEvent.value = null;
          await refetchEvents();
        } catch (error) {
          console.error("Error eliminando evento:", error);
          message.error("Error al eliminar el evento");
        }
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
      return new Promise((resolve) => {
        var _a;
        (_a = calendarApi.value) == null ? void 0 : _a.refetchEvents();
        setTimeout(resolve, 500);
      });
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
      headerToolbar: {
        start: "drawerToggler actionsToggler today",
        center: "prev,title,next",
        end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
      },
      firstDay: 1,
      forceEventDuration: true,
      editable: true,
      eventResizableFromStart: true,
      dragScroll: true,
      dayMaxEvents: 2,
      navLinks: true,
      events: async (info, successCallback) => {
        try {
          const token = localStorage.getItem("auth_token");
          if (!token) throw new Error("No autenticado");
          const user = await $fetch("https://admin.triplotrip.com/api/users/me", {
            headers: { Authorization: `Bearer ${token}` }
          });
          const res = await $fetch(`https://admin.triplotrip.com/api/events?filters[user][documentId][$eq]=${user.documentId}&populate=excursion`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const events2 = (res.data || []).map((evt) => ({
            id: evt.documentId,
            // ID único para FullCalendar
            documentId: evt.documentId,
            // Mantener documentId en extendedProps
            title: evt.Title || "",
            start: evt.Start,
            end: evt.End,
            allDay: !!evt.AllDay,
            extendedProps: {
              documentId: evt.documentId,
              // Asegurar que está en extendedProps también
              excursion: evt.excursion || null,
              user: evt.user || null
            }
          }));
          console.log("Eventos cargados desde Strapi:", events2);
          successCallback(events2);
        } catch (error) {
          console.error("Error al cargar eventos desde Strapi:", error);
          successCallback([]);
        }
      },
      eventClassNames({ event }) {
        return ["styled"];
      },
      eventClick({ event }) {
        var _a;
        console.log("Click en evento:", {
          id: event.id,
          documentId: (_a = event.extendedProps) == null ? void 0 : _a.documentId,
          title: event.title,
          _def: event._def
        });
        currentEvent.value = eventToEdit(event);
        console.log("Evento preparado para editar:", currentEvent.value);
      },
      dateClick(info) {
        createNewEvent({ start: info.date.getTime(), end: info.date.getTime() });
      },
      // FUNCIÓN CORREGIDA: Actualizar directamente en Strapi cuando se arrastra un evento
      eventDrop: async ({ event, revert }) => {
        var _a, _b;
        try {
          const token = localStorage.getItem("auth_token");
          if (!token) throw new Error("No autenticado");
          const payload = {
            data: {
              Start: (_a = event.start) == null ? void 0 : _a.toISOString(),
              End: (_b = event.end) == null ? void 0 : _b.toISOString()
            }
          };
          await $fetch(`https://admin.triplotrip.com/api/events/${event.extendedProps.documentId}`, {
            method: "PUT",
            body: payload,
            headers: { Authorization: `Bearer ${token}` }
          });
          message.success("Evento actualizado");
        } catch (error) {
          console.error("Error actualizando evento:", error);
          message.error("Error al actualizar el evento");
          revert();
        }
      },
      // FUNCIÓN CORREGIDA: Actualizar directamente en Strapi cuando se redimensiona un evento
      eventResize: async ({ event, revert }) => {
        var _a, _b;
        try {
          const token = localStorage.getItem("auth_token");
          if (!token) throw new Error("No autenticado");
          const payload = {
            data: {
              Start: (_a = event.start) == null ? void 0 : _a.toISOString(),
              End: (_b = event.end) == null ? void 0 : _b.toISOString()
            }
          };
          await $fetch(`https://admin.triplotrip.com/api/events/${event.extendedProps.documentId}`, {
            method: "PUT",
            body: payload,
            headers: { Authorization: `Bearer ${token}` }
          });
          message.success("Evento actualizado");
        } catch (error) {
          console.error("Error actualizando evento:", error);
          message.error("Error al actualizar el evento");
          revert();
        }
      },
      datesSet() {
        setCurrentState();
      }
    };
    watch(() => fullCalendarStore.selectedCalendars, refetchEvents);
    watch(selectedDate, (val) => goToDate(val));
    useHideLayoutFooter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped page-mobile-full page-without-footer flex flex-col" }, _attrs))} data-v-753e6a89>`);
      _push(ssrRenderComponent(SegmentedPage, {
        "use-main-scroll": false,
        "main-content-class": "h-full! p-0!",
        "disable-container-query": "",
        "enable-resize": "",
        onMounted: setCtx
      }, {
        "sidebar-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section section-calendar" data-v-753e6a89${_scopeId}>`);
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
            _push2(`</div><div class="section fullcalendar-actions-box" data-v-753e6a89${_scopeId}><p class="mb-3 opacity-50" data-v-753e6a89${_scopeId}>Calendars</p><div class="calendars-list" data-v-753e6a89${_scopeId}>`);
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
              ])
            ];
          }
        }),
        "main-toolbar": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2" data-v-753e6a89${_scopeId}><div class="w-24" data-v-753e6a89${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NSelect), {
              value: viewTypeModel.value,
              "onUpdate:value": ($event) => viewTypeModel.value = $event,
              size: compactMode.value ? "small" : "medium",
              options: viewTypeOptions,
              placeholder: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-753e6a89${_scopeId}>`);
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
            _push2(`</div><div class="${ssrRenderClass([{ compact: compactMode.value }, "current-date grow px-3 text-right"])}" data-v-753e6a89${_scopeId}>${ssrInterpolate(currentDate.value)}</div>`);
            if (!compactMode.value) {
              _push2(`<div data-v-753e6a89${_scopeId}>`);
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
            _push2(`<div class="main scrollbar-styled h-full" data-v-753e6a89${_scopeId}>`);
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
      _push(ssrRenderComponent(EventEditor, {
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
const FullCalendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-753e6a89"]]);

export { FullCalendar as default };
//# sourceMappingURL=FullCalendar-W3yrJEq0.mjs.map
