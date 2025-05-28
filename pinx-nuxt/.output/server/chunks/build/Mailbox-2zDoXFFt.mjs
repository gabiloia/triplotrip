import { defineComponent, ref, computed, watch, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, Fragment, renderList, unref, createVNode, toDisplayString, createTextVNode, defineAsyncComponent, toRefs, mergeModels, useModel, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { a as _export_sfc, ab as useThemeStore, aU as renderIcon, B as Button, _ as _sfc_main$s, bf as NMenu, c as NAvatar, aV as NDropdown, d as NTooltip } from './server.mjs';
import { onClickOutside } from '@vueuse/core';
import { N as NCheckbox } from './Checkbox-kHPptutx.mjs';
import { N as NInput } from './Input-DOxGe8j0.mjs';
import { N as NInputGroup } from './InputGroup-CJSJ6UXT.mjs';
import { N as NAutoComplete } from './AutoComplete-CbXdYDIn.mjs';
import { N as NForm, a as NFormItem } from './FormItem-DAK_fF_C.mjs';
import { N as NButtonGroup } from './ButtonGroup-BgUV4cXl.mjs';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { N as NTime } from './Time-BGDkyjxP.mjs';
import { S as SegmentedPage } from './SegmentedPage-C3KskJxG.mjs';
import { u as useHideLayoutFooter } from './useHideLayoutFooter-CVal8-DF.mjs';
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
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';
import 'async-validator';
import './use-collection-Dfn99m8m.mjs';
import './index-CulsySW9.mjs';
import './getDefaultOptions-Badlq585.mjs';

const StarredIcon$1 = "carbon:star";
const TrashIcon$3 = "carbon:trash-can";
const LabelOutIcon$2 = "carbon:bookmark";
const MenuIcon$1 = "ion:menu-sharp";
const SearchIcon = "carbon:search";
const FolderIcon$2 = "carbon:folder-move-to";
const RefreshIcon = "ion:reload";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ActionToolbar",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    checkControl: {}
  }, {
    "search": { default: "" },
    "searchModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["toggleCheckAll"], ["update:search"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const search = useModel(__props, "search");
    const sidebarOpen = ref(false);
    const sidebar = ref(null);
    onClickOutside(sidebar, () => sidebarOpen.value = false);
    function toggleCheckAll() {
      emit("toggleCheckAll");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "action-toolbar flex items-center" }, _attrs))} data-v-3c42e441><div class="flex" data-v-3c42e441>`);
      _push(ssrRenderComponent(unref(NCheckbox), {
        checked: _ctx.checkControl === 1,
        indeterminate: _ctx.checkControl === 2,
        size: "large",
        onClick: ($event) => toggleCheckAll()
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.checkControl) {
        _push(`<div class="flex grow items-center gap-3" data-v-3c42e441>`);
        _push(ssrRenderComponent(unref(NTooltip), null, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Button), { text: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      size: 20,
                      name: TrashIcon$3
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, {
                        size: 20,
                        name: TrashIcon$3
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Button), { text: "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: TrashIcon$3
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-3c42e441${_scopeId}>Delete</span>`);
            } else {
              return [
                createVNode("span", null, "Delete")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(NTooltip), null, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Button), { text: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      size: 20,
                      name: LabelOutIcon$2
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, {
                        size: 20,
                        name: LabelOutIcon$2
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Button), { text: "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: LabelOutIcon$2
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-3c42e441${_scopeId}>Add label</span>`);
            } else {
              return [
                createVNode("span", null, "Add label")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(NTooltip), null, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Button), { text: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      size: 20,
                      name: FolderIcon$2
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, {
                        size: 20,
                        name: FolderIcon$2
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Button), { text: "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: FolderIcon$2
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-3c42e441${_scopeId}>Move to folder</span>`);
            } else {
              return [
                createVNode("span", null, "Move to folder")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(NTooltip), null, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Button), { text: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      size: 20,
                      name: StarredIcon$1
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, {
                        size: 20,
                        name: StarredIcon$1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Button), { text: "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: StarredIcon$1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-3c42e441${_scopeId}>Star</span>`);
            } else {
              return [
                createVNode("span", null, "Star")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.checkControl) {
        _push(`<div class="search-box flex grow" data-v-3c42e441>`);
        _push(ssrRenderComponent(unref(NInput), {
          value: search.value,
          "onUpdate:value": ($event) => search.value = $event,
          placeholder: "Search...",
          clearable: "",
          size: "medium"
        }, {
          prefix: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$s, { name: SearchIcon }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$s, { name: SearchIcon })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.checkControl) {
        _push(`<div class="flex justify-center opacity-50" data-v-3c42e441>`);
        _push(ssrRenderComponent(unref(Button), { text: "" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$s, {
                size: 18,
                name: RefreshIcon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$s, {
                  size: 18,
                  name: RefreshIcon
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.checkControl) {
        _push(`<div class="menu-btn flex justify-center opacity-50" data-v-3c42e441>`);
        _push(ssrRenderComponent(unref(Button), {
          text: "",
          onClick: ($event) => sidebarOpen.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$s, {
                size: 24,
                name: MenuIcon$1
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$s, {
                  size: 24,
                  name: MenuIcon$1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Mailbox/ActionToolbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ActionToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-3c42e441"]]);
const SentIcon$1 = "carbon:send";
const ChevronDownIcon = "carbon:chevron-down";
const DocumentAddIcon = "carbon:document-add";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ComposeView",
  __ssrInlineRender: true,
  props: {
    email: {}
  },
  setup(__props) {
    const props = __props;
    const QuillEditor = defineAsyncComponent(() => {
      return (async () => {
        const { QuillEditor: QuillEditor2 } = await import('@vueup/vue-quill');
        return QuillEditor2;
      })();
    });
    const { email: emailForm } = toRefs(props);
    const mounted = ref(false);
    const autoCompleteOptions = computed(() => {
      return ["@gmail.com", "@live.com", "@qq.com", "@me.com"].map((suffix) => {
        var _a, _b;
        const prefix = (_b = (_a = emailForm.value) == null ? void 0 : _a.email) == null ? void 0 : _b.split("@")[0];
        return {
          label: prefix + suffix,
          value: prefix + suffix
        };
      });
    });
    function resetScroll() {
      (void 0).scrollTo(0, 0);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compose-view flex grow flex-col" }, _attrs))} data-v-1fbb6b08>`);
      _push(ssrRenderComponent(unref(NForm), {
        "label-placement": "left",
        size: "small",
        "label-width": "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NFormItem), { label: "To" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInputGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NAutoComplete), {
                          value: unref(emailForm).email,
                          "onUpdate:value": ($event) => unref(emailForm).email = $event,
                          "input-props": {
                            autocomplete: "disabled"
                          },
                          options: autoCompleteOptions.value,
                          placeholder: "Email"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { type: "tertiary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`CC`);
                            } else {
                              return [
                                createTextVNode("CC")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { type: "tertiary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`BCC`);
                            } else {
                              return [
                                createTextVNode("BCC")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NAutoComplete), {
                            value: unref(emailForm).email,
                            "onUpdate:value": ($event) => unref(emailForm).email = $event,
                            "input-props": {
                              autocomplete: "disabled"
                            },
                            options: autoCompleteOptions.value,
                            placeholder: "Email"
                          }, null, 8, ["value", "onUpdate:value", "options"]),
                          createVNode(unref(Button), { type: "tertiary" }, {
                            default: withCtx(() => [
                              createTextVNode("CC")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { type: "tertiary" }, {
                            default: withCtx(() => [
                              createTextVNode("BCC")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInputGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(NAutoComplete), {
                          value: unref(emailForm).email,
                          "onUpdate:value": ($event) => unref(emailForm).email = $event,
                          "input-props": {
                            autocomplete: "disabled"
                          },
                          options: autoCompleteOptions.value,
                          placeholder: "Email"
                        }, null, 8, ["value", "onUpdate:value", "options"]),
                        createVNode(unref(Button), { type: "tertiary" }, {
                          default: withCtx(() => [
                            createTextVNode("CC")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { type: "tertiary" }, {
                          default: withCtx(() => [
                            createTextVNode("BCC")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NFormItem), { label: "Subject" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), { placeholder: "Message subject..." }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), { placeholder: "Message subject..." })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NFormItem), { label: "To" }, {
                default: withCtx(() => [
                  createVNode(unref(NInputGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(NAutoComplete), {
                        value: unref(emailForm).email,
                        "onUpdate:value": ($event) => unref(emailForm).email = $event,
                        "input-props": {
                          autocomplete: "disabled"
                        },
                        options: autoCompleteOptions.value,
                        placeholder: "Email"
                      }, null, 8, ["value", "onUpdate:value", "options"]),
                      createVNode(unref(Button), { type: "tertiary" }, {
                        default: withCtx(() => [
                          createTextVNode("CC")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { type: "tertiary" }, {
                        default: withCtx(() => [
                          createTextVNode("BCC")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NFormItem), { label: "Subject" }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), { placeholder: "Message subject..." })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="compose-view-attachments flex justify-end" data-v-1fbb6b08>`);
      _push(ssrRenderComponent(unref(Button), { ghost: "" }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, { name: DocumentAddIcon }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, { name: DocumentAddIcon })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add attachment `);
          } else {
            return [
              createTextVNode(" Add attachment ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="compose-view-body scrollbar-styled flex grow flex-col" data-v-1fbb6b08>`);
      if (mounted.value) {
        _push(ssrRenderComponent(unref(QuillEditor), {
          theme: "snow",
          toolbar: "minimal",
          onBlur: ($event) => resetScroll()
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="compose-view-footer flex justify-end" data-v-1fbb6b08>`);
      _push(ssrRenderComponent(unref(NButtonGroup), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              ghost: ""
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, { name: SentIcon$1 }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, { name: SentIcon$1 })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Send `);
                } else {
                  return [
                    createTextVNode(" Send ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NDropdown), {
              trigger: "click",
              options: [
                {
                  label: "Save as draft",
                  key: "Save as draft"
                },
                {
                  label: "Postponed sending",
                  key: "Postponed sending"
                }
              ]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    type: "primary",
                    ghost: ""
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$s, { name: ChevronDownIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$s, { name: ChevronDownIcon })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      type: "primary",
                      ghost: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$s, { name: ChevronDownIcon })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), {
                type: "primary",
                ghost: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_sfc_main$s, { name: SentIcon$1 })
                ]),
                default: withCtx(() => [
                  createTextVNode(" Send ")
                ]),
                _: 1
              }),
              createVNode(unref(NDropdown), {
                trigger: "click",
                options: [
                  {
                    label: "Save as draft",
                    key: "Save as draft"
                  },
                  {
                    label: "Postponed sending",
                    key: "Postponed sending"
                  }
                ]
              }, {
                default: withCtx(() => [
                  createVNode(unref(Button), {
                    type: "primary",
                    ghost: ""
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$s, { name: ChevronDownIcon })
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
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Mailbox/ComposeView.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ComposeView = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-1fbb6b08"]]);
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
const folders = [
  {
    id: "inbox",
    title: "Inbox"
  },
  {
    id: "sent",
    title: "Sent"
  },
  {
    id: "draft",
    title: "Draft"
  },
  {
    id: "starred",
    title: "Starred"
  },
  {
    id: "spam",
    title: "Spam"
  },
  {
    id: "trash",
    title: "Trash"
  }
];
function getEmails() {
  const emails = [];
  for (let i = 0; i < 150; i++) {
    const folder = faker.helpers.arrayElements(folders, 1)[0].id;
    const body = [];
    const bodyParagraphs = faker.number.int({ min: 2, max: 4 });
    for (let i2 = 0; i2 < bodyParagraphs; i2++) {
      body.push(faker.lorem.sentence(faker.number.int({ min: 50, max: 100 })));
    }
    emails.push({
      id: faker.string.nanoid(),
      date: faker.date.between({ from: dayjs().subtract(2, "w").toDate(), to: dayjs().toDate() }),
      subject: faker.lorem.sentence(faker.number.int({ min: 3, max: 7 })).slice(0, -1),
      body: body.join("<br/><br/>"),
      seen: faker.datatype.boolean(),
      starred: faker.datatype.boolean() || folder === "starred",
      folder,
      labels: faker.helpers.arrayElements(labels, { min: 0, max: 2 }),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatarGitHub(),
      attachments: faker.helpers.uniqueArray(faker.word.sample, faker.number.int({ min: 0, max: 2 })).map(() => ({
        name: faker.system.commonFileName(),
        size: `${faker.number.int({ min: 50, max: 999 })}KB`
      })),
      selected: false
    });
  }
  return emails;
}
const useMailboxStore = defineStore("mailbox", {
  state: () => ({
    emails: getEmails(),
    folders,
    labels,
    activeFolder: "inbox",
    activeLabel: ""
  }),
  actions: {
    setActiveFolder(folder) {
      this.activeFolder = folder;
    },
    setActiveLabel(label) {
      if (this.activeLabel === label) {
        this.activeLabel = "";
      } else {
        this.activeLabel = label;
      }
    },
    toggleCheck(email) {
      const eml = this.emails.find((e) => e.id === email.id);
      if (eml) {
        eml.selected = !eml.selected;
      }
    },
    toggleStar(email) {
      const eml = this.emails.find((e) => e.id === email.id);
      if (eml) {
        eml.starred = !eml.starred;
      }
    }
  }
});
const StarActiveIcon$1 = "carbon:star-filled";
const StarIcon$1 = "carbon:star";
const TrashIcon$2 = "carbon:trash-can";
const LabelIcon$1 = "carbon:bookmark-filled";
const LabelOutIcon$1 = "carbon:bookmark";
const AttachmentIcon = "carbon:attachment";
const FolderIcon$1 = "carbon:folder-move-to";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Email",
  __ssrInlineRender: true,
  props: {
    email: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const mailboxStore = useMailboxStore();
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const labelsColors = {
      personal: style.value["extra1-color"],
      office: style.value["extra2-color"],
      important: style.value["extra3-color"],
      shop: style.value["extra4-color"]
    };
    function toggleCheck(email) {
      mailboxStore.toggleCheck(email);
    }
    function toggleStar(email) {
      mailboxStore.toggleStar(email);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["email flex items-center", { selected: _ctx.email.selected, seen: _ctx.email.seen }]
      }, _attrs))} data-v-03c9e936><div class="check" data-v-03c9e936>`);
      _push(ssrRenderComponent(unref(NCheckbox), {
        checked: _ctx.email.selected,
        size: "large",
        onClick: ($event) => toggleCheck(_ctx.email)
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "opacity-50": !_ctx.email.starred }, "starred flex"])}" data-v-03c9e936>`);
      _push(ssrRenderComponent(unref(Button), {
        text: "",
        onClick: ($event) => toggleStar(_ctx.email)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.email.starred) {
              _push2(ssrRenderComponent(_sfc_main$s, {
                size: 16,
                name: StarActiveIcon$1,
                class: "text-primary"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_sfc_main$s, {
                size: 16,
                name: StarIcon$1
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              _ctx.email.starred ? (openBlock(), createBlock(_sfc_main$s, {
                key: 0,
                size: 16,
                name: StarActiveIcon$1,
                class: "text-primary"
              })) : (openBlock(), createBlock(_sfc_main$s, {
                key: 1,
                size: 16,
                name: StarIcon$1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="avatar flex" data-v-03c9e936>`);
      _push(ssrRenderComponent(unref(NAvatar), {
        round: "",
        size: "small",
        src: _ctx.email.avatar,
        "img-props": { alt: `${_ctx.email.name}-avatar` }
      }, null, _parent));
      _push(`</div><div class="title grow" data-v-03c9e936><span class="name" data-v-03c9e936>${ssrInterpolate(_ctx.email.name)}</span><span class="subject" data-v-03c9e936>${ssrInterpolate(_ctx.email.subject)}</span></div><div class="labels flex" data-v-03c9e936><!--[-->`);
      ssrRenderList(_ctx.email.labels, (label) => {
        _push(ssrRenderComponent(_sfc_main$s, {
          key: label.id,
          size: 16,
          color: labelsColors[label.id],
          name: LabelIcon$1
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (_ctx.email.attachments.length) {
        _push(`<div class="attachments flex" data-v-03c9e936>`);
        _push(ssrRenderComponent(_sfc_main$s, {
          size: 16,
          name: AttachmentIcon
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="date text-secondary" data-v-03c9e936>${ssrInterpolate(_ctx.email.dateText)}</div><div class="actions text-secondary flex items-start gap-3" data-v-03c9e936>`);
      _push(ssrRenderComponent(unref(Button), { text: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              size: 20,
              name: TrashIcon$2
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, {
                size: 20,
                name: TrashIcon$2
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Button), { text: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              size: 20,
              name: LabelOutIcon$1
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, {
                size: 20,
                name: LabelOutIcon$1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Button), { text: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              size: 20,
              name: FolderIcon$1
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, {
                size: 20,
                name: FolderIcon$1
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Mailbox/Email.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const EmailComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-03c9e936"]]);
const FileIcon = "tabler:file-invoice";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EmailContent",
  __ssrInlineRender: true,
  props: {
    email: {}
  },
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const labelsColors = {
      personal: style.value["extra1-color"],
      office: style.value["extra2-color"],
      important: style.value["extra3-color"],
      shop: style.value["extra4-color"]
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "email-content" }, _attrs))} data-v-43fd2f97><div class="email-sender flex flex-wrap items-center" data-v-43fd2f97><div class="avatar flex" data-v-43fd2f97>`);
      _push(ssrRenderComponent(unref(NAvatar), {
        round: "",
        size: 45,
        src: _ctx.email.avatar,
        "img-props": { alt: `${_ctx.email.name}-avatar` }
      }, null, _parent));
      _push(`</div><div class="info flex grow flex-wrap items-center" data-v-43fd2f97><div class="title flex grow flex-col" data-v-43fd2f97><span class="name" data-v-43fd2f97>${ssrInterpolate(_ctx.email.name)}</span><span class="email" data-v-43fd2f97>${ssrInterpolate(_ctx.email.email)}</span></div><div class="date" data-v-43fd2f97>`);
      _push(ssrRenderComponent(unref(NTime), {
        time: _ctx.email.date,
        format: "d MMM @ HH:mm"
      }, null, _parent));
      _push(`</div></div></div><div class="email-subject" data-v-43fd2f97><span class="subject" data-v-43fd2f97>${ssrInterpolate(_ctx.email.subject)}</span><!--[-->`);
      ssrRenderList(_ctx.email.labels, (label) => {
        _push(`<span class="label custom-label" style="${ssrRenderStyle(`--label-color:${labelsColors[label.id]}`)}" data-v-43fd2f97>${ssrInterpolate(label.title)}</span>`);
      });
      _push(`<!--]--></div><div class="email-body" data-v-43fd2f97>${(_a = _ctx.email.body) != null ? _a : ""}</div>`);
      if (_ctx.email.attachments.length) {
        _push(`<div class="email-attachments flex flex-wrap" data-v-43fd2f97><!--[-->`);
        ssrRenderList(_ctx.email.attachments, (attachment) => {
          _push(`<div class="attachment-item flex" data-v-43fd2f97><div class="attachment-icon" data-v-43fd2f97>`);
          _push(ssrRenderComponent(_sfc_main$s, {
            size: 26,
            name: FileIcon
          }, null, _parent));
          _push(`</div><div class="attachment-info" data-v-43fd2f97><div class="attachment-name" data-v-43fd2f97>${ssrInterpolate(attachment.name)}</div><div class="attachment-size" data-v-43fd2f97>${ssrInterpolate(attachment.size)}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Mailbox/EmailContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const EmailContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-43fd2f97"]]);
const StarActiveIcon = "carbon:star-filled";
const StarIcon = "carbon:star";
const TrashIcon$1 = "carbon:trash-can";
const LabelOutIcon = "carbon:bookmark";
const MenuHorizontalIcon = "carbon:overflow-menu-horizontal";
const FolderIcon = "carbon:folder-move-to";
const PrinterIcon = "carbon:printer";
const ReplyAllIcon = "fluent:arrow-reply-all-20-filled";
const ReplyIcon = "fluent:arrow-reply-20-filled";
const ForwardIcon = "fluent:arrow-forward-20-filled";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EmailToolbar",
  __ssrInlineRender: true,
  props: {
    email: {}
  },
  setup(__props) {
    const mailboxStore = useMailboxStore();
    const themeStore = useThemeStore();
    const primaryColor = computed(() => themeStore.style["primary-color"]);
    function toggleStar(email) {
      mailboxStore.toggleStar(email);
    }
    const menuOptions = [
      {
        label: "Delete",
        key: "Delete",
        icon: renderIcon(TrashIcon$1)
      },
      {
        label: "Add label",
        key: "Add label",
        icon: renderIcon(LabelOutIcon)
      },
      {
        label: "Move to folder",
        key: "Move to folder",
        icon: renderIcon(FolderIcon)
      },
      {
        label: "Print",
        key: "Print",
        icon: renderIcon(PrinterIcon)
      },
      {
        label: "Star",
        key: "Star",
        icon: renderIcon(StarIcon)
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "email-toolbar flex items-center" }, _attrs))} data-v-65f6b6e6><div class="actions-btns flex items-center gap-2" data-v-65f6b6e6>`);
      _push(ssrRenderComponent(unref(NTooltip), null, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), { text: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    size: 20,
                    name: TrashIcon$1
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: TrashIcon$1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), { text: "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$s, {
                    size: 20,
                    name: TrashIcon$1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-65f6b6e6${_scopeId}>Delete</span>`);
          } else {
            return [
              createVNode("span", null, "Delete")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NTooltip), null, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), { text: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    size: 20,
                    name: LabelOutIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: LabelOutIcon
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), { text: "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$s, {
                    size: 20,
                    name: LabelOutIcon
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-65f6b6e6${_scopeId}>Add label</span>`);
          } else {
            return [
              createVNode("span", null, "Add label")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NTooltip), null, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), { text: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    size: 20,
                    name: FolderIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: FolderIcon
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), { text: "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$s, {
                    size: 20,
                    name: FolderIcon
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-65f6b6e6${_scopeId}>Move to folder</span>`);
          } else {
            return [
              createVNode("span", null, "Move to folder")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NTooltip), null, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), { text: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    size: 20,
                    name: PrinterIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: PrinterIcon
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), { text: "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$s, {
                    size: 20,
                    name: PrinterIcon
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-65f6b6e6${_scopeId}>Print</span>`);
          } else {
            return [
              createVNode("span", null, "Print")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NTooltip), null, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), {
              text: "",
              onClick: ($event) => toggleStar(_ctx.email)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.email.starred) {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      size: 20,
                      name: StarActiveIcon,
                      color: primaryColor.value
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      size: 20,
                      name: StarIcon
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    _ctx.email.starred ? (openBlock(), createBlock(_sfc_main$s, {
                      key: 0,
                      size: 20,
                      name: StarActiveIcon,
                      color: primaryColor.value
                    }, null, 8, ["color"])) : (openBlock(), createBlock(_sfc_main$s, {
                      key: 1,
                      size: 20,
                      name: StarIcon
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), {
                text: "",
                onClick: withModifiers(($event) => toggleStar(_ctx.email), ["stop"])
              }, {
                default: withCtx(() => [
                  _ctx.email.starred ? (openBlock(), createBlock(_sfc_main$s, {
                    key: 0,
                    size: 20,
                    name: StarActiveIcon,
                    color: primaryColor.value
                  }, null, 8, ["color"])) : (openBlock(), createBlock(_sfc_main$s, {
                    key: 1,
                    size: 20,
                    name: StarIcon
                  }))
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-65f6b6e6${_scopeId}>Star</span>`);
          } else {
            return [
              createVNode("span", null, "Star")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="menu-btns flex items-center" data-v-65f6b6e6>`);
      _push(ssrRenderComponent(unref(NDropdown), { options: menuOptions }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), { text: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    size: 24,
                    name: MenuHorizontalIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
                      size: 24,
                      name: MenuHorizontalIcon
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), { text: "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$s, {
                    size: 24,
                    name: MenuHorizontalIcon
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grow" data-v-65f6b6e6></div><div class="reply-btns flex items-center gap-2" data-v-65f6b6e6>`);
      _push(ssrRenderComponent(unref(Button), { text: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              size: 20,
              name: ReplyIcon
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, {
                size: 20,
                name: ReplyIcon
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Button), { text: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              size: 20,
              name: ReplyAllIcon
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, {
                size: 20,
                name: ReplyAllIcon
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Button), { text: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              size: 20,
              name: ForwardIcon
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, {
                size: 20,
                name: ForwardIcon
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Mailbox/EmailToolbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EmailToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-65f6b6e6"]]);
const ChevronLeftIcon = "carbon:chevron-left";
const ChevronRightIcon = "carbon:chevron-right";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navigator",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navigator flex items-center" }, _attrs))} data-v-fb51374a><div class="nav-btns flex items-center gap-2" data-v-fb51374a><span class="opacity-70" data-v-fb51374a>1 - 30 of 635</span>`);
      _push(ssrRenderComponent(unref(Button), {
        text: "",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              size: 24,
              name: ChevronLeftIcon
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, {
                size: 24,
                name: ChevronLeftIcon
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Button), {
        text: "",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              size: 24,
              name: ChevronRightIcon
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$s, {
                size: 24,
                name: ChevronRightIcon
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/Mailbox/Navigator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navigator = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fb51374a"]]);
const InboxIcon = "carbon:email";
const SentIcon = "carbon:send";
const DraftIcon = "carbon:edit";
const StarredIcon = "carbon:star";
const ArrowLeftIcon = "carbon:arrow-left";
const SpamIcon = "ion:alert-circle-outline";
const TrashIcon = "carbon:trash-can";
const LabelIcon = "carbon:bookmark-filled";
const MenuIcon = "ph:list-light";
const PenIcon = "carbon:pen";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Mailbox",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const mailboxStore = useMailboxStore();
    const ctxPage = ref(null);
    ref(false);
    const search = ref("");
    const selectedEmail = ref(null);
    const composeEmail = ref(null);
    const activeMenuKey = ref(mailboxStore.activeFolder);
    const showList = computed(() => !selectedEmail.value && !composeEmail.value);
    const emails = computed(() => {
      return mailboxStore.emails.filter((e) => e.folder === mailboxStore.activeFolder).filter(
        (e) => mailboxStore.activeLabel ? e.labels.map((l) => l.id).includes(mailboxStore.activeLabel) : true
      ).filter(
        (e) => search.value ? (e.name + e.subject).toLowerCase().includes(search.value.toLowerCase()) : true
      ).map((e) => {
        e.dateText = dayjs(e.date).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD") ? dayjs(e.date).format("HH:mm") : dayjs(e.date).format("D MMM");
        return e;
      }).sort((a, b) => b.date.getTime() - a.date.getTime());
    });
    const checkControl = computed(() => {
      const emlCount = emails.value.length;
      const selCount = emails.value.filter((e) => e.selected).length;
      if (!emlCount) {
        return 0;
      }
      if (selCount === emlCount) {
        return 1;
      }
      if (selCount) {
        return 2;
      }
      return 0;
    });
    const style = computed(() => themeStore.style);
    const labelsColors = {
      personal: style.value["extra1-color"],
      office: style.value["extra2-color"],
      important: style.value["extra3-color"],
      shop: style.value["extra4-color"]
    };
    const menuOptions = mailboxStore.folders.map((folder) => {
      let icon;
      if (folder.id === "inbox") {
        icon = InboxIcon;
      }
      if (folder.id === "sent") {
        icon = SentIcon;
      }
      if (folder.id === "draft") {
        icon = DraftIcon;
      }
      if (folder.id === "starred") {
        icon = StarredIcon;
      }
      if (folder.id === "spam") {
        icon = SpamIcon;
      }
      if (folder.id === "trash") {
        icon = TrashIcon;
      }
      return {
        label: folder.title,
        icon: icon && renderIcon(icon),
        key: folder.id
      };
    });
    watch(activeMenuKey, (val) => {
      setFolder(val);
    });
    function setCtx(ctx) {
      ctxPage.value = ctx;
    }
    function goBack() {
      selectedEmail.value = null;
      composeEmail.value = null;
    }
    function setLabel(label) {
      selectedEmail.value = null;
      mailboxStore.setActiveLabel(label);
    }
    function setFolder(folder) {
      selectedEmail.value = null;
      mailboxStore.setActiveFolder(folder);
    }
    function toggleCheckAll() {
      const check = checkControl.value !== 1;
      for (const email of emails.value) {
        if (email.selected !== check) {
          mailboxStore.toggleCheck(email);
        }
      }
    }
    function newEmail() {
      var _a, _b;
      selectedEmail.value = null;
      (_b = (_a = ctxPage.value) == null ? void 0 : _a.closeSidebar) == null ? void 0 : _b.call(_a);
      composeEmail.value = {
        email: "",
        subject: "",
        body: ""
      };
    }
    useHideLayoutFooter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped page-mobile-full page-without-footer flex flex-col" }, _attrs))} data-v-ea0feea8>`);
      _push(ssrRenderComponent(SegmentedPage, {
        "main-content-class": showList.value ? "p-0!" : composeEmail.value ? "h-full! flex" : "",
        "hide-menu-btn": "",
        "enable-resize": "",
        "use-main-scroll": !composeEmail.value,
        onMounted: setCtx
      }, {
        "sidebar-header": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="compose-btn-wrap" data-v-ea0feea8${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              strong: "",
              secondary: "",
              type: "primary",
              size: "large",
              onClick: ($event) => newEmail()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New message`);
                } else {
                  return [
                    createTextVNode("New message")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "compose-btn-wrap" }, [
                createVNode(unref(Button), {
                  strong: "",
                  secondary: "",
                  type: "primary",
                  size: "large",
                  onClick: ($event) => newEmail()
                }, {
                  default: withCtx(() => [
                    createTextVNode("New message")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        "sidebar-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NMenu), {
              value: activeMenuKey.value,
              "onUpdate:value": ($event) => activeMenuKey.value = $event,
              class: "folders-list",
              options: unref(menuOptions)
            }, null, _parent2, _scopeId));
            _push2(`<div class="section labels-list" data-v-ea0feea8${_scopeId}><p class="mb-3 opacity-50" data-v-ea0feea8${_scopeId}>Labels</p><div class="list" data-v-ea0feea8${_scopeId}><!--[-->`);
            ssrRenderList(unref(mailboxStore).labels, (label) => {
              _push2(`<div class="${ssrRenderClass([[`l-${label.id}`, label.id === unref(mailboxStore).activeLabel ? "l-active" : ""], "label flex items-center"])}" data-v-ea0feea8${_scopeId}><div class="l-icon flex" data-v-ea0feea8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                size: 14,
                name: LabelIcon,
                color: labelsColors[label.id]
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="l-title" data-v-ea0feea8${_scopeId}>${ssrInterpolate(label.title)}</div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode(unref(NMenu), {
                value: activeMenuKey.value,
                "onUpdate:value": ($event) => activeMenuKey.value = $event,
                class: "folders-list",
                options: unref(menuOptions)
              }, null, 8, ["value", "onUpdate:value", "options"]),
              createVNode("div", { class: "section labels-list" }, [
                createVNode("p", { class: "mb-3 opacity-50" }, "Labels"),
                createVNode("div", { class: "list" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(mailboxStore).labels, (label) => {
                    return openBlock(), createBlock("div", {
                      key: label.title,
                      class: ["label flex items-center", [`l-${label.id}`, label.id === unref(mailboxStore).activeLabel ? "l-active" : ""]],
                      onClick: ($event) => setLabel(label.id)
                    }, [
                      createVNode("div", { class: "l-icon flex" }, [
                        createVNode(_sfc_main$s, {
                          size: 14,
                          name: LabelIcon,
                          color: labelsColors[label.id]
                        }, null, 8, ["color"])
                      ]),
                      createVNode("div", { class: "l-title" }, toDisplayString(label.title), 1)
                    ], 10, ["onClick"]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        "main-toolbar": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (showList.value) {
              _push2(`<div class="item-appear item-appear-bottom flex gap-5" data-v-ea0feea8${_scopeId}>`);
              _push2(ssrRenderComponent(ActionToolbar, {
                search: search.value,
                "onUpdate:search": ($event) => search.value = $event,
                class: "grow",
                "check-control": checkControl.value,
                onToggleCheckAll: ($event) => toggleCheckAll()
              }, null, _parent2, _scopeId));
              if (!checkControl.value) {
                _push2(`<div class="new-btn flex justify-center opacity-50" data-v-ea0feea8${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Button), {
                  text: "",
                  onClick: ($event) => newEmail()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$s, {
                        size: 20,
                        name: PenIcon
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$s, {
                          size: 20,
                          name: PenIcon
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
              if (!checkControl.value) {
                _push2(ssrRenderComponent(unref(Button), {
                  text: "",
                  class: "sidebar-toggler opacity-50",
                  onClick: ($event) => {
                    var _a;
                    return (_a = ctxPage.value) == null ? void 0 : _a.openSidebar();
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$s, {
                        size: 24,
                        name: MenuIcon
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$s, {
                          size: 24,
                          name: MenuIcon
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else if (selectedEmail.value) {
              _push2(`<div class="align-center item-appear item-appear-bottom flex gap-5" data-v-ea0feea8${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Button), {
                text: "",
                onClick: ($event) => goBack()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      size: 24,
                      name: ArrowLeftIcon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, {
                        size: 24,
                        name: ArrowLeftIcon
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(EmailToolbar, {
                email: selectedEmail.value,
                class: "grow"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(Navigator, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (composeEmail.value) {
              _push2(`<div class="align-center item-appear item-appear-bottom flex gap-5" data-v-ea0feea8${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Button), {
                text: "",
                onClick: ($event) => goBack()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, {
                      size: 24,
                      name: ArrowLeftIcon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, {
                        size: 24,
                        name: ArrowLeftIcon
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span data-v-ea0feea8${_scopeId}>Compose message</span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              showList.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "item-appear item-appear-bottom flex gap-5"
              }, [
                createVNode(ActionToolbar, {
                  search: search.value,
                  "onUpdate:search": ($event) => search.value = $event,
                  class: "grow",
                  "check-control": checkControl.value,
                  onToggleCheckAll: ($event) => toggleCheckAll()
                }, null, 8, ["search", "onUpdate:search", "check-control", "onToggleCheckAll"]),
                !checkControl.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "new-btn flex justify-center opacity-50"
                }, [
                  createVNode(unref(Button), {
                    text: "",
                    onClick: ($event) => newEmail()
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$s, {
                        size: 20,
                        name: PenIcon
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                !checkControl.value ? (openBlock(), createBlock(unref(Button), {
                  key: 1,
                  text: "",
                  class: "sidebar-toggler opacity-50",
                  onClick: ($event) => {
                    var _a;
                    return (_a = ctxPage.value) == null ? void 0 : _a.openSidebar();
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$s, {
                      size: 24,
                      name: MenuIcon
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ])) : selectedEmail.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "align-center item-appear item-appear-bottom flex gap-5"
              }, [
                createVNode(unref(Button), {
                  text: "",
                  onClick: ($event) => goBack()
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$s, {
                      size: 24,
                      name: ArrowLeftIcon
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(EmailToolbar, {
                  email: selectedEmail.value,
                  class: "grow"
                }, null, 8, ["email"]),
                createVNode(Navigator)
              ])) : composeEmail.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "align-center item-appear item-appear-bottom flex gap-5"
              }, [
                createVNode(unref(Button), {
                  text: "",
                  onClick: ($event) => goBack()
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$s, {
                      size: 24,
                      name: ArrowLeftIcon
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode("span", null, "Compose message")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        "main-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (showList.value) {
              _push2(`<!--[-->`);
              ssrRenderList(emails.value, (email) => {
                _push2(ssrRenderComponent(EmailComponent, {
                  key: email.id,
                  email,
                  class: "item-appear item-appear-bottom item-appear-005",
                  onSelect: ($event) => selectedEmail.value = $event
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else if (selectedEmail.value) {
              _push2(ssrRenderComponent(EmailContent, {
                email: selectedEmail.value,
                class: "item-appear item-appear-bottom item-appear-010"
              }, null, _parent2, _scopeId));
            } else if (composeEmail.value) {
              _push2(ssrRenderComponent(ComposeView, {
                email: composeEmail.value,
                class: "item-appear item-appear-bottom item-appear-010"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              showList.value ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(emails.value, (email) => {
                return openBlock(), createBlock(EmailComponent, {
                  key: email.id,
                  email,
                  class: "item-appear item-appear-bottom item-appear-005",
                  onSelect: ($event) => selectedEmail.value = $event
                }, null, 8, ["email", "onSelect"]);
              }), 128)) : selectedEmail.value ? (openBlock(), createBlock(EmailContent, {
                key: 1,
                email: selectedEmail.value,
                class: "item-appear item-appear-bottom item-appear-010"
              }, null, 8, ["email"])) : composeEmail.value ? (openBlock(), createBlock(ComposeView, {
                key: 2,
                email: composeEmail.value,
                class: "item-appear item-appear-bottom item-appear-010"
              }, null, 8, ["email"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Apps/Mailbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Mailbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea0feea8"]]);

export { Mailbox as default };
//# sourceMappingURL=Mailbox-2zDoXFFt.mjs.map
