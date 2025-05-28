import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { a as _export_sfc, ab as useThemeStore, B as Button, _ as _sfc_main$s, b as NModal, N as NCard, aW as NText } from './server.mjs';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import _clone from 'lodash/cloneDeep.js';
import { N as NImageGroup, a as NImage } from './Image-CRKx2FUb.mjs';
import { N as NP } from './p-C3ycGqTc.mjs';
import { N as NSelect } from './Select-CJatCJlw.mjs';
import { N as NUpload, a as NUploadDragger } from './Upload-BJgPeTqu.mjs';
import { N as NInput } from './Input-DOxGe8j0.mjs';
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
import './download-aNT-DO08.mjs';
import './Selection-7aS0-4xx.mjs';
import './Suffix-DBR_9G3J.mjs';
import './Progress-iOzX4hFw.mjs';
import './Eye-DafrR3c8.mjs';
import './Add-niv5NbQA.mjs';

const labels = [
  {
    id: "personal",
    title: "Personal"
  },
  {
    id: "office",
    title: "Office"
  },
  {
    id: "important",
    title: "Important"
  },
  {
    id: "shop",
    title: "Shop"
  }
];
function getNotes() {
  const notes = [];
  for (let i = 0; i < 30; i++) {
    const body = [];
    const bodyParagraphs = faker.number.int({ min: 1, max: 3 });
    for (let i2 = 0; i2 < bodyParagraphs; i2++) {
      body.push(faker.lorem.sentence(faker.number.int({ min: 8, max: 30 })));
    }
    const date = faker.date.between({ from: dayjs().subtract(2, "w").toDate(), to: dayjs().toDate() });
    notes.push({
      id: faker.string.nanoid(),
      date,
      dateText: dayjs(date).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD") ? dayjs(date).format("HH:mm") : dayjs(date).format("D MMM"),
      title: faker.lorem.sentence(faker.number.int({ min: 3, max: 7 })).slice(0, -1),
      body: body.join("<br/><br/>"),
      image: faker.datatype.boolean() ? faker.image.urlPicsumPhotos({ width: 640, height: 400 }) : "",
      labels: faker.helpers.arrayElements(labels, { min: 0, max: 2 })
    });
  }
  return notes.sort((a, b) => b.date.getTime() - a.date.getTime());
}
const AddIcon = "fluent:notebook-add-24-regular";
const ImageIcon = "carbon:image";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Notes",
  __ssrInlineRender: true,
  setup(__props) {
    const notes = ref(getNotes());
    const options = labels.map((l) => ({
      label: l.title,
      value: l.id
    }));
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const labelsColors = {
      personal: style.value["extra1-color"],
      office: style.value["extra2-color"],
      important: style.value["extra3-color"],
      shop: style.value["extra4-color"]
    };
    const selectedLabels = ref([]);
    const selectedNote = ref(null);
    const filteredNotes = computed(
      () => notes.value.filter((n) => {
        if (!selectedLabels.value.length) {
          return true;
        }
        return selectedLabels.value.every((label) => n.labels.map((l) => l.id).includes(label));
      })
    );
    const noteValid = computed(() => {
      var _a, _b;
      return !!((_a = selectedNote.value) == null ? void 0 : _a.title) || !!((_b = selectedNote.value) == null ? void 0 : _b.body);
    });
    const showModal = computed({ get: () => selectedNote.value !== null, set: () => selectedNote.value = null });
    function newNote() {
      selectedNote.value = {
        id: "",
        date: /* @__PURE__ */ new Date(),
        dateText: dayjs().format("HH:mm"),
        title: "",
        body: "",
        image: "",
        labels: []
      };
    }
    function selectNote(note) {
      selectedNote.value = { ..._clone(note), body: note.body.replace(/<br\/>/gi, "\n") };
    }
    function save(note) {
      const index = notes.value.findIndex((n) => n.id === note.id);
      note.body = note.body.replace(/\n/g, "<br/>");
      if (index !== -1) {
        notes.value[index] = note;
      } else {
        note.id = `${(/* @__PURE__ */ new Date()).getTime()}`;
        notes.value = [note, ...notes.value];
      }
      selectedNote.value = null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-b3a44f31><div class="toolbar mb-6 flex items-center gap-4" data-v-b3a44f31>`);
      _push(ssrRenderComponent(unref(Button), {
        type: "primary",
        size: "large",
        onClick: ($event) => newNote()
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, { name: AddIcon }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, { name: AddIcon })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add notes `);
          } else {
            return [
              createTextVNode(" Add notes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NSelect), {
        value: selectedLabels.value,
        "onUpdate:value": ($event) => selectedLabels.value = $event,
        multiple: "",
        options: unref(options),
        size: "large",
        placeholder: "Labels filter..."
      }, null, _parent));
      _push(`</div><div class="list" data-v-b3a44f31>`);
      _push(ssrRenderComponent(unref(NImageGroup), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="masonry" data-v-b3a44f31${_scopeId}><!--[-->`);
            ssrRenderList(filteredNotes.value, (note) => {
              var _a;
              _push2(`<div class="note" data-v-b3a44f31${_scopeId}>`);
              if (note.image) {
                _push2(`<div class="n-image" data-v-b3a44f31${_scopeId}>`);
                _push2(ssrRenderComponent(unref(NImage), {
                  src: note.image,
                  width: "640",
                  height: "400",
                  "img-props": { alt: `${note.title}-image` },
                  lazy: ""
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="n-content" data-v-b3a44f31${_scopeId}>`);
              if (note.title) {
                _push2(`<div class="n-title" data-v-b3a44f31${_scopeId}>${ssrInterpolate(note.title)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (note.body) {
                _push2(`<div class="n-body" data-v-b3a44f31${_scopeId}>${(_a = note.body) != null ? _a : ""}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="n-footer flex items-end justify-between gap-3" data-v-b3a44f31${_scopeId}><div class="n-date" data-v-b3a44f31${_scopeId}>${ssrInterpolate(note.dateText)}</div><div class="n-labels flex flex-wrap justify-end gap-2" data-v-b3a44f31${_scopeId}><!--[-->`);
              ssrRenderList(note.labels, (label) => {
                _push2(`<span class="n-label custom-label" style="${ssrRenderStyle(`--label-color:${labelsColors[label.id]}`)}" data-v-b3a44f31${_scopeId}>${ssrInterpolate(label.title)}</span>`);
              });
              _push2(`<!--]--></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "masonry" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(filteredNotes.value, (note) => {
                  return openBlock(), createBlock("div", {
                    key: note.id,
                    class: "note"
                  }, [
                    note.image ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "n-image"
                    }, [
                      createVNode(unref(NImage), {
                        src: note.image,
                        width: "640",
                        height: "400",
                        "img-props": { alt: `${note.title}-image` },
                        lazy: ""
                      }, null, 8, ["src", "img-props"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", {
                      class: "n-content",
                      onClick: ($event) => selectNote(note)
                    }, [
                      note.title ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "n-title"
                      }, toDisplayString(note.title), 1)) : createCommentVNode("", true),
                      note.body ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "n-body",
                        innerHTML: note.body
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                    ], 8, ["onClick"]),
                    createVNode("div", {
                      class: "n-footer flex items-end justify-between gap-3",
                      onClick: ($event) => selectNote(note)
                    }, [
                      createVNode("div", { class: "n-date" }, toDisplayString(note.dateText), 1),
                      createVNode("div", { class: "n-labels flex flex-wrap justify-end gap-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(note.labels, (label) => {
                          return openBlock(), createBlock("span", {
                            key: label.id,
                            class: "n-label custom-label",
                            style: `--label-color:${labelsColors[label.id]}`
                          }, toDisplayString(label.title), 5);
                        }), 128))
                      ])
                    ], 8, ["onClick"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(NModal), {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCard), { class: "w-[90vw]! max-w-lg!" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (selectedNote.value) {
                    _push3(`<div class="form flex flex-col" data-v-b3a44f31${_scopeId2}>`);
                    if (selectedNote.value.id && selectedNote.value.image) {
                      _push3(`<div class="mb-4" data-v-b3a44f31${_scopeId2}><img${ssrRenderAttr("alt", `${selectedNote.value.title}-image`)}${ssrRenderAttr("src", selectedNote.value.image)} class="rounded-lg" data-v-b3a44f31${_scopeId2}></div>`);
                    } else {
                      _push3(ssrRenderComponent(unref(NUpload), {
                        class: "mb-2",
                        max: 1
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(NUploadDragger), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="mb-3" data-v-b3a44f31${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_sfc_main$s, {
                                    name: ImageIcon,
                                    size: 48,
                                    depth: 3
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                  _push5(ssrRenderComponent(unref(NText), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`Click or drag a file to this area to upload`);
                                      } else {
                                        return [
                                          createTextVNode("Click or drag a file to this area to upload")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(unref(NP), { depth: "3" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. `);
                                      } else {
                                        return [
                                          createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode("div", { class: "mb-3" }, [
                                      createVNode(_sfc_main$s, {
                                        name: ImageIcon,
                                        size: 48,
                                        depth: 3
                                      })
                                    ]),
                                    createVNode(unref(NText), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Click or drag a file to this area to upload")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(NP), { depth: "3" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(NUploadDragger), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-3" }, [
                                    createVNode(_sfc_main$s, {
                                      name: ImageIcon,
                                      size: 48,
                                      depth: 3
                                    })
                                  ]),
                                  createVNode(unref(NText), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Click or drag a file to this area to upload")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(NP), { depth: "3" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    }
                    _push3(ssrRenderComponent(unref(NInput), {
                      value: selectedNote.value.title,
                      "onUpdate:value": ($event) => selectedNote.value.title = $event,
                      placeholder: "Title",
                      class: "mb-4"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(NInput), {
                      value: selectedNote.value.body,
                      "onUpdate:value": ($event) => selectedNote.value.body = $event,
                      placeholder: "Body",
                      type: "textarea",
                      class: "mb-4",
                      autosize: {
                        minRows: 2,
                        maxRows: 7
                      }
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="item-center flex justify-between gap-4" data-v-b3a44f31${_scopeId2}><div class="item-center flex grow gap-4" data-v-b3a44f31${_scopeId2}>`);
                    if (selectedNote.value.id) {
                      _push3(`<div class="flex flex-wrap items-center gap-2" data-v-b3a44f31${_scopeId2}><!--[-->`);
                      ssrRenderList(selectedNote.value.labels, (label) => {
                        _push3(`<span class="custom-label" style="${ssrRenderStyle(`--label-color:${labelsColors[label.id]}`)}" data-v-b3a44f31${_scopeId2}>${ssrInterpolate(label.title)}</span>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<div class="w-full" data-v-b3a44f31${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(NSelect), {
                        multiple: "",
                        class: "w-full",
                        options: unref(options),
                        placeholder: "Labels filter..."
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                    _push3(`</div><div class="item-center flex gap-4" data-v-b3a44f31${_scopeId2}>`);
                    if (selectedNote.value.id) {
                      _push3(ssrRenderComponent(unref(Button), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Delete`);
                          } else {
                            return [
                              createTextVNode("Delete")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(unref(Button), {
                      strong: "",
                      secondary: "",
                      type: "primary",
                      disabled: !noteValid.value,
                      onClick: ($event) => save(selectedNote.value)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Save `);
                        } else {
                          return [
                            createTextVNode(" Save ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    selectedNote.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "form flex flex-col"
                    }, [
                      selectedNote.value.id && selectedNote.value.image ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mb-4"
                      }, [
                        createVNode("img", {
                          alt: `${selectedNote.value.title}-image`,
                          src: selectedNote.value.image,
                          class: "rounded-lg"
                        }, null, 8, ["alt", "src"])
                      ])) : (openBlock(), createBlock(unref(NUpload), {
                        key: 1,
                        class: "mb-2",
                        max: 1
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NUploadDragger), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-3" }, [
                                createVNode(_sfc_main$s, {
                                  name: ImageIcon,
                                  size: 48,
                                  depth: 3
                                })
                              ]),
                              createVNode(unref(NText), null, {
                                default: withCtx(() => [
                                  createTextVNode("Click or drag a file to this area to upload")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NP), { depth: "3" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })),
                      createVNode(unref(NInput), {
                        value: selectedNote.value.title,
                        "onUpdate:value": ($event) => selectedNote.value.title = $event,
                        placeholder: "Title",
                        class: "mb-4"
                      }, null, 8, ["value", "onUpdate:value"]),
                      createVNode(unref(NInput), {
                        value: selectedNote.value.body,
                        "onUpdate:value": ($event) => selectedNote.value.body = $event,
                        placeholder: "Body",
                        type: "textarea",
                        class: "mb-4",
                        autosize: {
                          minRows: 2,
                          maxRows: 7
                        }
                      }, null, 8, ["value", "onUpdate:value"]),
                      createVNode("div", { class: "item-center flex justify-between gap-4" }, [
                        createVNode("div", { class: "item-center flex grow gap-4" }, [
                          selectedNote.value.id ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-wrap items-center gap-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(selectedNote.value.labels, (label) => {
                              return openBlock(), createBlock("span", {
                                key: label.id,
                                class: "custom-label",
                                style: `--label-color:${labelsColors[label.id]}`
                              }, toDisplayString(label.title), 5);
                            }), 128))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-full"
                          }, [
                            createVNode(unref(NSelect), {
                              multiple: "",
                              class: "w-full",
                              options: unref(options),
                              placeholder: "Labels filter..."
                            }, null, 8, ["options"])
                          ]))
                        ]),
                        createVNode("div", { class: "item-center flex gap-4" }, [
                          selectedNote.value.id ? (openBlock(), createBlock(unref(Button), { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode("Delete")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(unref(Button), {
                            strong: "",
                            secondary: "",
                            type: "primary",
                            disabled: !noteValid.value,
                            onClick: ($event) => save(selectedNote.value)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "onClick"])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCard), { class: "w-[90vw]! max-w-lg!" }, {
                default: withCtx(() => [
                  selectedNote.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "form flex flex-col"
                  }, [
                    selectedNote.value.id && selectedNote.value.image ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-4"
                    }, [
                      createVNode("img", {
                        alt: `${selectedNote.value.title}-image`,
                        src: selectedNote.value.image,
                        class: "rounded-lg"
                      }, null, 8, ["alt", "src"])
                    ])) : (openBlock(), createBlock(unref(NUpload), {
                      key: 1,
                      class: "mb-2",
                      max: 1
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NUploadDragger), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-3" }, [
                              createVNode(_sfc_main$s, {
                                name: ImageIcon,
                                size: 48,
                                depth: 3
                              })
                            ]),
                            createVNode(unref(NText), null, {
                              default: withCtx(() => [
                                createTextVNode("Click or drag a file to this area to upload")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NP), { depth: "3" }, {
                              default: withCtx(() => [
                                createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })),
                    createVNode(unref(NInput), {
                      value: selectedNote.value.title,
                      "onUpdate:value": ($event) => selectedNote.value.title = $event,
                      placeholder: "Title",
                      class: "mb-4"
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NInput), {
                      value: selectedNote.value.body,
                      "onUpdate:value": ($event) => selectedNote.value.body = $event,
                      placeholder: "Body",
                      type: "textarea",
                      class: "mb-4",
                      autosize: {
                        minRows: 2,
                        maxRows: 7
                      }
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode("div", { class: "item-center flex justify-between gap-4" }, [
                      createVNode("div", { class: "item-center flex grow gap-4" }, [
                        selectedNote.value.id ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-wrap items-center gap-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(selectedNote.value.labels, (label) => {
                            return openBlock(), createBlock("span", {
                              key: label.id,
                              class: "custom-label",
                              style: `--label-color:${labelsColors[label.id]}`
                            }, toDisplayString(label.title), 5);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "w-full"
                        }, [
                          createVNode(unref(NSelect), {
                            multiple: "",
                            class: "w-full",
                            options: unref(options),
                            placeholder: "Labels filter..."
                          }, null, 8, ["options"])
                        ]))
                      ]),
                      createVNode("div", { class: "item-center flex gap-4" }, [
                        selectedNote.value.id ? (openBlock(), createBlock(unref(Button), { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode("Delete")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(Button), {
                          strong: "",
                          secondary: "",
                          type: "primary",
                          disabled: !noteValid.value,
                          onClick: ($event) => save(selectedNote.value)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save ")
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Apps/Notes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Notes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3a44f31"]]);

export { Notes as default };
//# sourceMappingURL=Notes-D61HnOBe.mjs.map
