import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, mergeModels, useModel, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { a as _export_sfc, _ as _sfc_main$o, a_ as isMobile, b as NModal, aM as useThemeStore, N as NCard, B as Button } from './server.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { L as LtrContext } from './LtrContext-CRGZuMof.mjs';
import { u as useHideLayoutFooter } from './useHideLayoutFooter-D1uuqdlo.mjs';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import draggable from 'vuedraggable';
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
import 'vooks';
import '@vueuse/core';
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
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ColumnEditor",
  __ssrInlineRender: true,
  props: {
    "column": { default: { title: "" } },
    "columnModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:column"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const column = useModel(__props, "column");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({ class: "column-editor" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-2" data-v-2d1fd5de${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NInput), {
              value: column.value.title,
              "onUpdate:value": ($event) => column.value.title = $event,
              placeholder: "Column title...",
              size: "large"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-end" data-v-2d1fd5de${_scopeId}><div class="flex items-center gap-4" data-v-2d1fd5de${_scopeId}>`);
            if (column.value.id) {
              _push2(ssrRenderComponent(unref(Button), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Delete`);
                  } else {
                    return [
                      createTextVNode("Delete")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              onClick: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Close`);
                } else {
                  return [
                    createTextVNode("Close")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-2" }, [
                createVNode(unref(NInput), {
                  value: column.value.title,
                  "onUpdate:value": ($event) => column.value.title = $event,
                  placeholder: "Column title...",
                  size: "large"
                }, null, 8, ["value", "onUpdate:value"]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode("div", { class: "flex items-center gap-4" }, [
                    column.value.id ? (openBlock(), createBlock(unref(Button), { key: 0 }, {
                      default: withCtx(() => [
                        createTextVNode("Delete")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(unref(Button), {
                      type: "primary",
                      onClick: ($event) => emit("close")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Close")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Kanban/ColumnEditor.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ColumnEditor = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2d1fd5de"]]);
const PanIcon$1 = "carbon:move";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TaskCard",
  __ssrInlineRender: true,
  props: {
    task: {},
    mobile: { type: Boolean }
  },
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const labelsColors = {
      design: style.value["extra1-color"],
      "feature-request": style.value["extra2-color"],
      backend: style.value["extra3-color"],
      qa: style.value["extra4-color"]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-card flex flex-col justify-between" }, _attrs))} data-v-893b5eaa><div class="task-header flex justify-between gap-3" data-v-893b5eaa><div class="task-title" data-v-893b5eaa>${ssrInterpolate(_ctx.task.title)}</div>`);
      if (_ctx.mobile) {
        _push(ssrRenderComponent(_sfc_main$o, {
          size: 20,
          class: "pan-area",
          name: PanIcon$1
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="task-footer flex items-end justify-between" data-v-893b5eaa><span class="task-date" data-v-893b5eaa>${ssrInterpolate(_ctx.task.dateText)}</span>`);
      if (_ctx.task.label) {
        _push(`<span class="task-label custom-label" style="${ssrRenderStyle(`--label-color:${labelsColors[_ctx.task.label.id]}`)}" data-v-893b5eaa>${ssrInterpolate(_ctx.task.label.title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Kanban/TaskCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TaskCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-893b5eaa"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TaskEditor",
  __ssrInlineRender: true,
  props: {
    "task": { default: { title: "" } },
    "taskModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:task"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const task = useModel(__props, "task");
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const labelsColors = {
      design: style.value["extra1-color"],
      "feature-request": style.value["extra2-color"],
      backend: style.value["extra3-color"],
      qa: style.value["extra4-color"]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({ class: "task-editor" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-2" data-v-268e2887${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NInput), {
              value: task.value.title,
              "onUpdate:value": ($event) => task.value.title = $event,
              placeholder: "Task title...",
              type: "textarea",
              size: "large",
              autosize: {
                minRows: 2,
                maxRows: 7
              }
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-between" data-v-268e2887${_scopeId}><div class="grow" data-v-268e2887${_scopeId}>`);
            if (task.value.label) {
              _push2(`<span class="task-label custom-label" style="${ssrRenderStyle(`--label-color:${labelsColors[task.value.label.id]}`)}" data-v-268e2887${_scopeId}>${ssrInterpolate(task.value.label.title)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center gap-4" data-v-268e2887${_scopeId}>`);
            if (task.value.id) {
              _push2(ssrRenderComponent(unref(Button), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Delete`);
                  } else {
                    return [
                      createTextVNode("Delete")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              onClick: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Close`);
                } else {
                  return [
                    createTextVNode("Close")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-2" }, [
                createVNode(unref(NInput), {
                  value: task.value.title,
                  "onUpdate:value": ($event) => task.value.title = $event,
                  placeholder: "Task title...",
                  type: "textarea",
                  size: "large",
                  autosize: {
                    minRows: 2,
                    maxRows: 7
                  }
                }, null, 8, ["value", "onUpdate:value"]),
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "grow" }, [
                    task.value.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "task-label custom-label",
                      style: `--label-color:${labelsColors[task.value.label.id]}`
                    }, toDisplayString(task.value.label.title), 5)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex items-center gap-4" }, [
                    task.value.id ? (openBlock(), createBlock(unref(Button), { key: 0 }, {
                      default: withCtx(() => [
                        createTextVNode("Delete")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(unref(Button), {
                      type: "primary",
                      onClick: ($event) => emit("close")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Close")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Kanban/TaskEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TaskEditor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-268e2887"]]);
const labels = [
  {
    id: "design",
    title: "Design"
  },
  {
    id: "feature-request",
    title: "Feature Request"
  },
  {
    id: "backend",
    title: "Backend"
  },
  {
    id: "qa",
    title: "QA"
  }
];
function getTask() {
  const columns = ["Backlog", "In Progress", "Review", "Done"].map((o) => ({
    id: faker.string.nanoid(),
    title: o,
    tasks: []
  }));
  for (const column of columns) {
    const nTask = faker.number.int({ min: 2, max: 8 });
    for (let i = 0; i < nTask; i++) {
      const date = faker.date.between({ from: dayjs().subtract(2, "w").toDate(), to: dayjs().toDate() });
      column.tasks.push({
        id: faker.string.nanoid(),
        title: faker.lorem.sentence(faker.number.int({ min: 3, max: 7 })).slice(0, -1),
        date,
        dateText: dayjs(date).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD") ? dayjs(date).format("HH:mm") : dayjs(date).format("D MMM"),
        label: faker.datatype.boolean() ? faker.helpers.arrayElement(labels) : void 0
      });
    }
  }
  return columns;
}
const AddIcon = "carbon:add-alt";
const PanIcon = "carbon:pan-horizontal";
const EditIcon = "uil:edit-alt";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Kanban",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTask = ref(null);
    const selectedColumn = ref(null);
    const cardAnimation = ref(true);
    const showTaskEditor = computed({ get: () => selectedTask.value !== null, set: () => selectedTask.value = null });
    const showColumnEditor = computed({
      get: () => selectedColumn.value !== null,
      set: () => selectedColumn.value = null
    });
    const columns = ref(getTask());
    function selectTask(task) {
      selectedTask.value = task;
    }
    function selectColumn(column) {
      selectedColumn.value = column;
    }
    function addColumn() {
      columns.value.push({
        id: `${(/* @__PURE__ */ new Date()).getTime()}`,
        title: "Untitled",
        tasks: []
      });
    }
    function addTask(column) {
      column.tasks.push({
        id: `${(/* @__PURE__ */ new Date()).getTime()}`,
        title: "Untitled",
        date: dayjs().toDate(),
        dateText: dayjs().format("HH:mm")
      });
    }
    useHideLayoutFooter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-min-wrapped page-without-footer" }, _attrs))} data-v-474298d2>`);
      _push(ssrRenderComponent(LtrContext, { class: "scrollbar-styled overflow-x-auto overflow-y-hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns-scroll" data-v-474298d2${_scopeId}><div class="columns-wrap flex" data-v-474298d2${_scopeId}>`);
            _push2(ssrRenderComponent(unref(draggable), {
              modelValue: columns.value,
              "onUpdate:modelValue": ($event) => columns.value = $event,
              "item-key": "title",
              animation: 200,
              "ghost-class": "ghost-column",
              handle: ".pan-area",
              group: "columns",
              class: "flex items-start"
            }, {
              item: withCtx(({ element: column }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="column" data-v-474298d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(draggable), {
                    modelValue: column.tasks,
                    "onUpdate:modelValue": ($event) => column.tasks = $event,
                    "item-key": "id",
                    animation: 200,
                    handle: unref(isMobile)() ? ".pan-area" : void 0,
                    "ghost-class": "ghost-card",
                    group: "tasks"
                  }, {
                    header: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="column-header flex justify-between" data-v-474298d2${_scopeId3}><span class="flex items-center gap-3" data-v-474298d2${_scopeId3}><span data-v-474298d2${_scopeId3}>${ssrInterpolate(column.title)} `);
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          name: EditIcon,
                          size: 12
                        }, null, _parent4, _scopeId3));
                        _push4(`</span><span class="opacity-40" data-v-474298d2${_scopeId3}>${ssrInterpolate(column.tasks.length || 0)}</span></span>`);
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          name: PanIcon,
                          size: 20,
                          class: "pan-area"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "column-header flex justify-between" }, [
                            createVNode("span", {
                              class: "flex items-center gap-3",
                              onClick: ($event) => selectColumn(column)
                            }, [
                              createVNode("span", null, [
                                createTextVNode(toDisplayString(column.title) + " ", 1),
                                createVNode(_sfc_main$o, {
                                  name: EditIcon,
                                  size: 12
                                })
                              ]),
                              createVNode("span", { class: "opacity-40" }, toDisplayString(column.tasks.length || 0), 1)
                            ], 8, ["onClick"]),
                            createVNode(_sfc_main$o, {
                              name: PanIcon,
                              size: 20,
                              class: "pan-area"
                            })
                          ])
                        ];
                      }
                    }),
                    item: withCtx(({ element: task }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(TaskCard, {
                          task,
                          mobile: unref(isMobile)(),
                          class: {
                            "item-appear item-appear-bottom item-appear-010": cardAnimation.value
                          },
                          onClick: ($event) => selectTask(task)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(TaskCard, {
                            task,
                            mobile: unref(isMobile)(),
                            class: {
                              "item-appear item-appear-bottom item-appear-010": cardAnimation.value
                            },
                            onClick: ($event) => selectTask(task)
                          }, null, 8, ["task", "mobile", "class", "onClick"])
                        ];
                      }
                    }),
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="add-task-btn flex items-center justify-center" data-v-474298d2${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          name: AddIcon,
                          size: 20
                        }, null, _parent4, _scopeId3));
                        _push4(`<span data-v-474298d2${_scopeId3}>Add card</span></button>`);
                      } else {
                        return [
                          createVNode("button", {
                            class: "add-task-btn flex items-center justify-center",
                            onClick: ($event) => addTask(column)
                          }, [
                            createVNode(_sfc_main$o, {
                              name: AddIcon,
                              size: 20
                            }),
                            createVNode("span", null, "Add card")
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "column" }, [
                      createVNode(unref(draggable), {
                        modelValue: column.tasks,
                        "onUpdate:modelValue": ($event) => column.tasks = $event,
                        "item-key": "id",
                        animation: 200,
                        handle: unref(isMobile)() ? ".pan-area" : void 0,
                        "ghost-class": "ghost-card",
                        group: "tasks"
                      }, {
                        header: withCtx(() => [
                          createVNode("div", { class: "column-header flex justify-between" }, [
                            createVNode("span", {
                              class: "flex items-center gap-3",
                              onClick: ($event) => selectColumn(column)
                            }, [
                              createVNode("span", null, [
                                createTextVNode(toDisplayString(column.title) + " ", 1),
                                createVNode(_sfc_main$o, {
                                  name: EditIcon,
                                  size: 12
                                })
                              ]),
                              createVNode("span", { class: "opacity-40" }, toDisplayString(column.tasks.length || 0), 1)
                            ], 8, ["onClick"]),
                            createVNode(_sfc_main$o, {
                              name: PanIcon,
                              size: 20,
                              class: "pan-area"
                            })
                          ])
                        ]),
                        item: withCtx(({ element: task }) => [
                          createVNode(TaskCard, {
                            task,
                            mobile: unref(isMobile)(),
                            class: {
                              "item-appear item-appear-bottom item-appear-010": cardAnimation.value
                            },
                            onClick: ($event) => selectTask(task)
                          }, null, 8, ["task", "mobile", "class", "onClick"])
                        ]),
                        footer: withCtx(() => [
                          createVNode("button", {
                            class: "add-task-btn flex items-center justify-center",
                            onClick: ($event) => addTask(column)
                          }, [
                            createVNode(_sfc_main$o, {
                              name: AddIcon,
                              size: 20
                            }),
                            createVNode("span", null, "Add card")
                          ], 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "handle"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="column flex items-center justify-center" data-v-474298d2${_scopeId2}><button class="add-task-btn mt-0! flex items-center justify-center" data-v-474298d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$o, {
                    name: AddIcon,
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-474298d2${_scopeId2}>Add column</span></button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "column flex items-center justify-center" }, [
                      createVNode("button", {
                        class: "add-task-btn mt-0! flex items-center justify-center",
                        onClick: ($event) => addColumn()
                      }, [
                        createVNode(_sfc_main$o, {
                          name: AddIcon,
                          size: 20
                        }),
                        createVNode("span", null, "Add column")
                      ], 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="spacer" data-v-474298d2${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "columns-scroll" }, [
                createVNode("div", { class: "columns-wrap flex" }, [
                  createVNode(unref(draggable), {
                    modelValue: columns.value,
                    "onUpdate:modelValue": ($event) => columns.value = $event,
                    "item-key": "title",
                    animation: 200,
                    "ghost-class": "ghost-column",
                    handle: ".pan-area",
                    group: "columns",
                    class: "flex items-start"
                  }, {
                    item: withCtx(({ element: column }) => [
                      createVNode("div", { class: "column" }, [
                        createVNode(unref(draggable), {
                          modelValue: column.tasks,
                          "onUpdate:modelValue": ($event) => column.tasks = $event,
                          "item-key": "id",
                          animation: 200,
                          handle: unref(isMobile)() ? ".pan-area" : void 0,
                          "ghost-class": "ghost-card",
                          group: "tasks"
                        }, {
                          header: withCtx(() => [
                            createVNode("div", { class: "column-header flex justify-between" }, [
                              createVNode("span", {
                                class: "flex items-center gap-3",
                                onClick: ($event) => selectColumn(column)
                              }, [
                                createVNode("span", null, [
                                  createTextVNode(toDisplayString(column.title) + " ", 1),
                                  createVNode(_sfc_main$o, {
                                    name: EditIcon,
                                    size: 12
                                  })
                                ]),
                                createVNode("span", { class: "opacity-40" }, toDisplayString(column.tasks.length || 0), 1)
                              ], 8, ["onClick"]),
                              createVNode(_sfc_main$o, {
                                name: PanIcon,
                                size: 20,
                                class: "pan-area"
                              })
                            ])
                          ]),
                          item: withCtx(({ element: task }) => [
                            createVNode(TaskCard, {
                              task,
                              mobile: unref(isMobile)(),
                              class: {
                                "item-appear item-appear-bottom item-appear-010": cardAnimation.value
                              },
                              onClick: ($event) => selectTask(task)
                            }, null, 8, ["task", "mobile", "class", "onClick"])
                          ]),
                          footer: withCtx(() => [
                            createVNode("button", {
                              class: "add-task-btn flex items-center justify-center",
                              onClick: ($event) => addTask(column)
                            }, [
                              createVNode(_sfc_main$o, {
                                name: AddIcon,
                                size: 20
                              }),
                              createVNode("span", null, "Add card")
                            ], 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue", "handle"])
                      ])
                    ]),
                    footer: withCtx(() => [
                      createVNode("div", { class: "column flex items-center justify-center" }, [
                        createVNode("button", {
                          class: "add-task-btn mt-0! flex items-center justify-center",
                          onClick: ($event) => addColumn()
                        }, [
                          createVNode(_sfc_main$o, {
                            name: AddIcon,
                            size: 20
                          }),
                          createVNode("span", null, "Add column")
                        ], 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "spacer" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NModal), {
        show: showTaskEditor.value,
        "onUpdate:show": ($event) => showTaskEditor.value = $event,
        class: "kanban-modal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed! top-[20vh] left-[50vw] -translate-x-1/2!" data-v-474298d2${_scopeId}>`);
            if (selectedTask.value) {
              _push2(ssrRenderComponent(TaskEditor, {
                task: selectedTask.value,
                onClose: ($event) => selectedTask.value = null
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "fixed! top-[20vh] left-[50vw] -translate-x-1/2!" }, [
                selectedTask.value ? (openBlock(), createBlock(TaskEditor, {
                  key: 0,
                  task: selectedTask.value,
                  onClose: ($event) => selectedTask.value = null
                }, null, 8, ["task", "onClose"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NModal), {
        show: showColumnEditor.value,
        "onUpdate:show": ($event) => showColumnEditor.value = $event,
        class: "kanban-modal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed! top-[20vh] left-[50vw] -translate-x-1/2!" data-v-474298d2${_scopeId}>`);
            if (selectedColumn.value) {
              _push2(ssrRenderComponent(ColumnEditor, {
                column: selectedColumn.value,
                onClose: ($event) => selectedColumn.value = null
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "fixed! top-[20vh] left-[50vw] -translate-x-1/2!" }, [
                selectedColumn.value ? (openBlock(), createBlock(ColumnEditor, {
                  key: 0,
                  column: selectedColumn.value,
                  onClose: ($event) => selectedColumn.value = null
                }, null, 8, ["column", "onClose"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Apps/Kanban.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Kanban = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-474298d2"]]);

export { Kanban as default };
//# sourceMappingURL=Kanban-BEQIVu3k.mjs.map
