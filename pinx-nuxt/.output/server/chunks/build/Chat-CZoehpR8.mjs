import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { a as _export_sfc, ab as useThemeStore, ac as renderIcon, B as Button, _ as _sfc_main$o, d as NAvatar, ad as NDropdown } from './server.mjs';
import { S as SegmentedPage } from './SegmentedPage-Dn1y-8PE.mjs';
import { u as useHideLayoutFooter } from './useHideLayoutFooter-CVal8-DF.mjs';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { useResizeObserver } from '@vueuse/core';
import { N as NTime } from './Time-DKL5-lnx.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
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
import './index-8J19xG0f.mjs';
import './getDefaultOptions-BBsy6BU_.mjs';
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';

function getData() {
  const contacts = [];
  const chat = [];
  for (let i = 0; i < 15; i++) {
    contacts.push({
      id: faker.string.nanoid(),
      name: faker.person.fullName(),
      jobTitle: faker.person.jobTitle(),
      avatar: faker.image.avatarGitHub(),
      online: faker.datatype.boolean(),
      lastDate: dayjs().toDate(),
      lastDateText: "",
      lastMessage: ""
    });
  }
  const me = contacts.pop();
  for (const user of contacts) {
    const conversation = [];
    for (let i = 0; i < 15; i++) {
      const isMine = faker.datatype.boolean();
      const userObj = isMine ? me : user;
      const userId = userObj.id;
      conversation.push({
        id: faker.string.nanoid(),
        isMine,
        userId,
        userObj,
        messages: faker.helpers.uniqueArray(faker.word.sample, faker.number.int({ min: 1, max: 3 })).map(() => ({
          text: faker.lorem.sentence(faker.number.int({ min: 2, max: 10 })).slice(0, -1)
        })),
        date: faker.date.between({ from: dayjs().subtract(2, "w").toDate(), to: dayjs().toDate() })
      });
    }
    const conversationSorted = conversation.sort((a, b) => a.date.getTime() - b.date.getTime());
    const lastDate = conversationSorted[conversation.length - 1].date;
    const lastMessage = conversationSorted[conversation.length - 1].messages[0].text;
    chat.push({
      id: faker.string.nanoid(),
      userId: user.id,
      userObj: user,
      conversation: conversationSorted,
      lastDate
    });
    user.lastDate = lastDate;
    user.lastDateText = dayjs(lastDate).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD") ? dayjs(lastDate).format("HH:mm") : dayjs(lastDate).format("D MMM");
    user.lastMessage = lastMessage;
  }
  return {
    contacts: contacts.sort((a, b) => b.lastDate.getTime() - a.lastDate.getTime()),
    chat: chat.sort((a, b) => b.lastDate.getTime() - a.lastDate.getTime()),
    me
  };
}
const useChatStore = defineStore("chat", {
  state: () => {
    const { contacts, chat, me } = getData();
    const chatId = chat[0].id || "";
    return {
      contacts,
      chat,
      me,
      chatId
    };
  },
  actions: {
    setActiveChat(contact) {
      var _a;
      const chatId = (_a = this.chat.find((c) => c.userId === contact.id)) == null ? void 0 : _a.id;
      this.chatId = chatId || "";
    }
  },
  getters: {
    activeChat() {
      return this.chat.find((c) => c.id === this.chatId) || null;
    }
  }
});
const ChatIcon = "carbon:chat";
const TrashIcon = "carbon:trash-can";
const MenuHorizontalIcon = "carbon:overflow-menu-horizontal";
const SearchIcon = "carbon:search";
const VideoIcon = "carbon:video";
const PhoneIcon = "carbon:phone";
const InfoIcon = "carbon:information";
const MuteIcon = "fluent:alert-off-16-regular";
const BlockUserIcon = "tabler:user-off";
const MicrophoneIcon = "carbon:microphone";
const AttachmentIcon = "carbon:attachment";
const SendIcon = "carbon:send";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Chat",
  __ssrInlineRender: true,
  setup(__props) {
    useThemeStore();
    const chatStore = useChatStore();
    const main = ref(null);
    const ctxPage = ref(null);
    const chatViewList = ref(null);
    const menuOptions = ref([]);
    function setCtx(ctx) {
      ctxPage.value = ctx;
      chatViewList.value = ctx.mainScrollbar;
    }
    useResizeObserver(main, (entries) => {
      const entry = entries[0];
      const { width } = entry.contentRect;
      const baseAct = [
        {
          label: "Block",
          key: "Block",
          icon: renderIcon(BlockUserIcon)
        },
        {
          label: "Mute",
          key: "Mute",
          icon: renderIcon(MuteIcon)
        },
        {
          label: "Info",
          key: "Info",
          icon: renderIcon(InfoIcon)
        },
        {
          label: "Delete",
          key: "Delete",
          icon: renderIcon(TrashIcon)
        }
      ];
      const fullAct = [
        {
          label: "Video",
          key: "Video",
          icon: renderIcon(VideoIcon)
        },
        {
          label: "Call",
          key: "Call",
          icon: renderIcon(PhoneIcon)
        }
      ];
      if (width < 400) {
        menuOptions.value = [...fullAct, ...baseAct];
      } else {
        menuOptions.value = baseAct;
      }
    });
    function setChat(user) {
      var _a, _b;
      (_b = (_a = ctxPage.value) == null ? void 0 : _a.closeSidebar) == null ? void 0 : _b.call(_a);
      chatStore.setActiveChat(user);
      resetChatScroll();
    }
    function resetChatScroll() {
      setTimeout(() => {
        var _a;
        (_a = chatViewList.value) == null ? void 0 : _a.scrollTo({ position: "bottom" });
      }, 50);
    }
    function resetWindowScroll() {
      (void 0).scrollTo(0, 0);
    }
    useHideLayoutFooter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped page-mobile-full page-without-footer flex flex-col" }, _attrs))} data-v-ad50fb30>`);
      _push(ssrRenderComponent(SegmentedPage, {
        "sidebar-content-class": "p-0!",
        "enable-resize": "",
        onMounted: setCtx
      }, {
        "sidebar-header": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="search-box" data-v-ad50fb30${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NInput), {
              placeholder: "Search...",
              clearable: "",
              size: "medium"
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, { name: SearchIcon }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, { name: SearchIcon })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "search-box" }, [
                createVNode(unref(NInput), {
                  placeholder: "Search...",
                  clearable: "",
                  size: "medium"
                }, {
                  prefix: withCtx(() => [
                    createVNode(_sfc_main$o, { name: SearchIcon })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        "sidebar-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="contacts-list" data-v-ad50fb30${_scopeId}><!--[-->`);
            ssrRenderList(unref(chatStore).contacts, (user) => {
              var _a;
              _push2(`<div class="${ssrRenderClass([{ "u-active": user.id === ((_a = unref(chatStore).activeChat) == null ? void 0 : _a.userId) }, "user flex items-center"])}" data-v-ad50fb30${_scopeId}><div class="${ssrRenderClass([{ "u-online": user.online }, "u-avatar flex items-center"])}" data-v-ad50fb30${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NAvatar), {
                round: "",
                size: "large",
                src: user.avatar,
                "img-props": { alt: `${user.name}-avatar` }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="u-info flex grow flex-col" data-v-ad50fb30${_scopeId}><div class="u-title flex items-center justify-between" data-v-ad50fb30${_scopeId}><div class="u-name grow" data-v-ad50fb30${_scopeId}>${ssrInterpolate(user.name)}</div><div class="u-date" data-v-ad50fb30${_scopeId}>${ssrInterpolate(user.lastDateText)}</div></div><div class="u-message" data-v-ad50fb30${_scopeId}>${ssrInterpolate(user.lastMessage)}</div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "contacts-list" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(chatStore).contacts, (user) => {
                  var _a;
                  return openBlock(), createBlock("div", {
                    key: user.id,
                    class: ["user flex items-center", { "u-active": user.id === ((_a = unref(chatStore).activeChat) == null ? void 0 : _a.userId) }],
                    onClick: ($event) => setChat(user)
                  }, [
                    createVNode("div", {
                      class: ["u-avatar flex items-center", { "u-online": user.online }]
                    }, [
                      createVNode(unref(NAvatar), {
                        round: "",
                        size: "large",
                        src: user.avatar,
                        "img-props": { alt: `${user.name}-avatar` }
                      }, null, 8, ["src", "img-props"])
                    ], 2),
                    createVNode("div", { class: "u-info flex grow flex-col" }, [
                      createVNode("div", { class: "u-title flex items-center justify-between" }, [
                        createVNode("div", { class: "u-name grow" }, toDisplayString(user.name), 1),
                        createVNode("div", { class: "u-date" }, toDisplayString(user.lastDateText), 1)
                      ]),
                      createVNode("div", { class: "u-message" }, toDisplayString(user.lastMessage), 1)
                    ])
                  ], 10, ["onClick"]);
                }), 128))
              ])
            ];
          }
        }),
        "main-toolbar": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(chatStore).activeChat) {
              _push2(`<div class="toolbar" data-v-ad50fb30${_scopeId}><div class="user-info flex grow items-center" data-v-ad50fb30${_scopeId}><div class="${ssrRenderClass([{ "u-online": unref(chatStore).activeChat.userObj.online }, "u-avatar flex items-center"])}" data-v-ad50fb30${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NAvatar), {
                round: "",
                size: "large",
                src: unref(chatStore).activeChat.userObj.avatar,
                "img-props": { alt: `${unref(chatStore).activeChat.userObj.name}-avatar` }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="u-info flex flex-col" data-v-ad50fb30${_scopeId}><div class="u-name" data-v-ad50fb30${_scopeId}>${ssrInterpolate(unref(chatStore).activeChat.userObj.name)}</div><div class="u-job" data-v-ad50fb30${_scopeId}>${ssrInterpolate(unref(chatStore).activeChat.userObj.jobTitle)}</div></div></div><div class="actions-btns flex items-center gap-4 opacity-50" data-v-ad50fb30${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Button), { text: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$o, {
                      name: VideoIcon,
                      size: 20
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$o, {
                        name: VideoIcon,
                        size: 20
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Button), { text: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$o, {
                      name: PhoneIcon,
                      size: 20
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$o, {
                        name: PhoneIcon,
                        size: 20
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="menu-btn flex justify-center opacity-50" data-v-ad50fb30${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NDropdown), { options: menuOptions.value }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Button), { text: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$o, {
                            name: MenuHorizontalIcon,
                            size: 24
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$o, {
                              name: MenuHorizontalIcon,
                              size: 24
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Button), { text: "" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$o, {
                            name: MenuHorizontalIcon,
                            size: 24
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(chatStore).activeChat ? (openBlock(), createBlock("div", {
                key: 0,
                class: "toolbar"
              }, [
                createVNode("div", { class: "user-info flex grow items-center" }, [
                  createVNode("div", {
                    class: ["u-avatar flex items-center", { "u-online": unref(chatStore).activeChat.userObj.online }]
                  }, [
                    createVNode(unref(NAvatar), {
                      round: "",
                      size: "large",
                      src: unref(chatStore).activeChat.userObj.avatar,
                      "img-props": { alt: `${unref(chatStore).activeChat.userObj.name}-avatar` }
                    }, null, 8, ["src", "img-props"])
                  ], 2),
                  createVNode("div", { class: "u-info flex flex-col" }, [
                    createVNode("div", { class: "u-name" }, toDisplayString(unref(chatStore).activeChat.userObj.name), 1),
                    createVNode("div", { class: "u-job" }, toDisplayString(unref(chatStore).activeChat.userObj.jobTitle), 1)
                  ])
                ]),
                createVNode("div", { class: "actions-btns flex items-center gap-4 opacity-50" }, [
                  createVNode(unref(Button), { text: "" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$o, {
                        name: VideoIcon,
                        size: 20
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { text: "" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$o, {
                        name: PhoneIcon,
                        size: 20
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "menu-btn flex justify-center opacity-50" }, [
                  createVNode(unref(NDropdown), { options: menuOptions.value }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { text: "" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$o, {
                            name: MenuHorizontalIcon,
                            size: 24
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["options"])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        "main-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main" data-v-ad50fb30${_scopeId}>`);
            if (unref(chatStore).activeChat) {
              _push2(`<div class="chat-view grow" data-v-ad50fb30${_scopeId}><div class="max-h-full" data-v-ad50fb30${_scopeId}><!--[-->`);
              ssrRenderList(unref(chatStore).activeChat.conversation, (conversation) => {
                _push2(`<div class="${ssrRenderClass([{ mine: conversation.isMine }, "conversation item-appear item-appear-bottom item-appear-010 flex"])}" data-v-ad50fb30${_scopeId}><div class="avatar" data-v-ad50fb30${_scopeId}>`);
                _push2(ssrRenderComponent(unref(NAvatar), {
                  round: "",
                  size: "large",
                  src: conversation.userObj.avatar,
                  "img-props": { alt: `${conversation.userObj.name}-avatar` }
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="messages-group flex flex-col" data-v-ad50fb30${_scopeId}><!--[-->`);
                ssrRenderList(conversation.messages, (message) => {
                  _push2(`<div class="message" data-v-ad50fb30${_scopeId}>${ssrInterpolate(message.text)}</div>`);
                });
                _push2(`<!--]--><div class="date" data-v-ad50fb30${_scopeId}>`);
                _push2(ssrRenderComponent(unref(NTime), {
                  time: conversation.date,
                  format: "d MMM @ HH:mm"
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(chatStore).activeChat) {
              _push2(`<div class="empty-view flex grow flex-col items-center justify-center" data-v-ad50fb30${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$o, {
                name: ChatIcon,
                size: 48
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-4 text-xl" data-v-ad50fb30${_scopeId}>Select a Contact</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "main",
                ref: main,
                class: "main"
              }, [
                unref(chatStore).activeChat ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "chat-view grow"
                }, [
                  createVNode("div", { class: "max-h-full" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(chatStore).activeChat.conversation, (conversation) => {
                      return openBlock(), createBlock("div", {
                        key: conversation.id,
                        class: ["conversation item-appear item-appear-bottom item-appear-010 flex", { mine: conversation.isMine }]
                      }, [
                        createVNode("div", { class: "avatar" }, [
                          createVNode(unref(NAvatar), {
                            round: "",
                            size: "large",
                            src: conversation.userObj.avatar,
                            "img-props": { alt: `${conversation.userObj.name}-avatar` }
                          }, null, 8, ["src", "img-props"])
                        ]),
                        createVNode("div", { class: "messages-group flex flex-col" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(conversation.messages, (message) => {
                            return openBlock(), createBlock("div", {
                              key: message.text,
                              class: "message"
                            }, toDisplayString(message.text), 1);
                          }), 128)),
                          createVNode("div", { class: "date" }, [
                            createVNode(unref(NTime), {
                              time: conversation.date,
                              format: "d MMM @ HH:mm"
                            }, null, 8, ["time"])
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                !unref(chatStore).activeChat ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "empty-view flex grow flex-col items-center justify-center"
                }, [
                  createVNode(_sfc_main$o, {
                    name: ChatIcon,
                    size: 48
                  }),
                  createVNode("div", { class: "mt-4 text-xl" }, "Select a Contact")
                ])) : createCommentVNode("", true)
              ], 512)
            ];
          }
        }),
        "main-footer": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(chatStore).activeChat) {
              _push2(`<div class="message-editor flex" data-v-ad50fb30${_scopeId}><div class="text-input grow" data-v-ad50fb30${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NInput), {
                placeholder: "Message...",
                type: "textarea",
                size: "small",
                autosize: {
                  minRows: 1,
                  maxRows: 5
                },
                onBlur: ($event) => resetWindowScroll()
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="actions-group flex items-center" data-v-ad50fb30${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Button), { text: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$o, {
                      name: MicrophoneIcon,
                      size: 20
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$o, {
                        name: MicrophoneIcon,
                        size: 20
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Button), { text: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$o, {
                      name: AttachmentIcon,
                      size: 20
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$o, {
                        name: AttachmentIcon,
                        size: 20
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Button), {
                strong: "",
                ghost: "",
                circle: "",
                type: "primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$o, {
                      name: SendIcon,
                      size: 20
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$o, {
                        name: SendIcon,
                        size: 20
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(chatStore).activeChat ? (openBlock(), createBlock("div", {
                key: 0,
                class: "message-editor flex"
              }, [
                createVNode("div", { class: "text-input grow" }, [
                  createVNode(unref(NInput), {
                    placeholder: "Message...",
                    type: "textarea",
                    size: "small",
                    autosize: {
                      minRows: 1,
                      maxRows: 5
                    },
                    onBlur: ($event) => resetWindowScroll()
                  }, null, 8, ["onBlur"])
                ]),
                createVNode("div", { class: "actions-group flex items-center" }, [
                  createVNode(unref(Button), { text: "" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$o, {
                        name: MicrophoneIcon,
                        size: 20
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { text: "" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$o, {
                        name: AttachmentIcon,
                        size: 20
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    ghost: "",
                    circle: "",
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$o, {
                        name: SendIcon,
                        size: 20
                      })
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Apps/Chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad50fb30"]]);

export { Chat as default };
//# sourceMappingURL=Chat-CZoehpR8.mjs.map
