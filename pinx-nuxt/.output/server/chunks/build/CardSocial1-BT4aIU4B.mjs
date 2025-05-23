import { defineComponent, ref, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as _export_sfc, N as NCard, c as NAvatar, B as Button, _ as _sfc_main$s } from './server.mjs';
import { faker } from '@faker-js/faker';
import { N as NTime } from './Time-BGDkyjxP.mjs';
import { a as NImage } from './Image-CRKx2FUb.mjs';
import { N as NInput } from './Input-DOxGe8j0.mjs';
import dayjs from 'dayjs';

const SendIcon = "carbon:send";
const HeartIcon = "ion:heart-outline";
const HeartActiveIcon = "ion:heart";
const CommentsIcon = "ion:chatbubbles-outline";
const CommentsActiveIcon = "ion:chatbubbles";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardSocial1",
  __ssrInlineRender: true,
  props: {
    showImage: { type: Boolean },
    hideText: { type: Boolean },
    showComments: { type: Boolean },
    like: { type: Boolean }
  },
  setup(__props) {
    var _a, _b;
    const commentActive = ref((_a = __props.showComments) != null ? _a : false);
    const likeActive = ref((_b = __props.like) != null ? _b : false);
    const avatar = faker.image.avatarGitHub();
    const name = faker.person.fullName();
    const date = faker.date.between({ from: dayjs().subtract(10, "d").toDate(), to: dayjs().subtract(5, "d").toDate() });
    const image = __props.showImage ? faker.image.urlPicsumPhotos({ width: 500, height: 300 }) : null;
    const text = __props.hideText ? "" : faker.lorem.paragraph();
    const reply = ref("");
    const likesCount = faker.number.int({ min: 10, max: 50 });
    const commentsCount = faker.number.int({ min: 1, max: 3 });
    let lastDate = date;
    const comments = ref(
      Array.from({ length: commentsCount }, () => {
        const newDate = faker.date.between({ from: dayjs(lastDate).toDate(), to: dayjs().toDate() });
        lastDate = newDate;
        return {
          id: faker.string.nanoid(),
          avatar: faker.image.avatarGitHub(),
          name: faker.person.fullName(),
          date: newDate,
          text: faker.lorem.paragraph()
        };
      })
    );
    function resetWindowScroll() {
      (void 0).scrollTo(0, 0);
    }
    function send() {
      comments.value.push({
        id: faker.string.nanoid(),
        avatar: "/images/avatar-64.jpg",
        name: "Margie Dibbert",
        date: dayjs().toDate(),
        text: reply.value.replace(/\n/g, "<br/>")
      });
      reply.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({ hoverable: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="post-box" data-v-b19ac76c${_scopeId}><div class="user mb-4 flex items-start gap-3" data-v-b19ac76c${_scopeId}><div class="avatar" data-v-b19ac76c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NAvatar), {
              round: "",
              src: unref(avatar),
              size: 40,
              lazy: "",
              "img-props": { alt: "avatar" }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="info" data-v-b19ac76c${_scopeId}><div class="name" data-v-b19ac76c${_scopeId}>${ssrInterpolate(unref(name))}</div><div class="date" data-v-b19ac76c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NTime), {
              time: unref(date),
              format: "d MMM @ HH:mm"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="content mb-4 flex flex-col gap-4" data-v-b19ac76c${_scopeId}>`);
            if (unref(image)) {
              _push2(`<div class="image" data-v-b19ac76c${_scopeId}>`);
              _push2(ssrRenderComponent(unref(NImage), {
                src: unref(image),
                width: "500",
                height: "300",
                lazy: "",
                "img-props": { alt: "image" }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(text)) {
              _push2(`<p class="text" data-v-b19ac76c${_scopeId}>${ssrInterpolate(unref(text))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="reactions flex items-center gap-7" data-v-b19ac76c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              text: "",
              class: ["item comments", { active: commentActive.value }],
              onClick: ($event) => commentActive.value = !commentActive.value
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    name: commentActive.value ? CommentsActiveIcon : CommentsIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
                      name: commentActive.value ? CommentsActiveIcon : CommentsIcon
                    }, null, 8, ["name"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ${ssrInterpolate(unref(commentsCount))}`);
                } else {
                  return [
                    createTextVNode(" " + toDisplayString(unref(commentsCount)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Button), {
              text: "",
              class: ["item likes", { active: likeActive.value }],
              onClick: ($event) => likeActive.value = !likeActive.value
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    name: likeActive.value ? HeartActiveIcon : HeartIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
                      name: likeActive.value ? HeartActiveIcon : HeartIcon
                    }, null, 8, ["name"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ${ssrInterpolate(unref(likesCount))}`);
                } else {
                  return [
                    createTextVNode(" " + toDisplayString(unref(likesCount)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (commentActive.value) {
              _push2(`<div class="comments-box" data-v-b19ac76c${_scopeId}><!--[-->`);
              ssrRenderList(comments.value, (comment) => {
                var _a2;
                _push2(`<div class="comment flex" data-v-b19ac76c${_scopeId}><div class="avatar" data-v-b19ac76c${_scopeId}>`);
                _push2(ssrRenderComponent(unref(NAvatar), {
                  round: "",
                  src: comment.avatar,
                  size: 40,
                  lazy: "",
                  "img-props": { alt: "avatar" }
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="content" data-v-b19ac76c${_scopeId}><div class="info flex flex-wrap" data-v-b19ac76c${_scopeId}><div class="name" data-v-b19ac76c${_scopeId}>${ssrInterpolate(comment.name)}</div><div class="date" data-v-b19ac76c${_scopeId}>`);
                _push2(ssrRenderComponent(unref(NTime), {
                  time: comment.date,
                  format: "d MMM @ HH:mm"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><p class="text" data-v-b19ac76c${_scopeId}>${(_a2 = comment.text) != null ? _a2 : ""}</p></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="reply-box flex" data-v-b19ac76c${_scopeId}><div class="text-input grow" data-v-b19ac76c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NInput), {
              value: reply.value,
              "onUpdate:value": ($event) => reply.value = $event,
              placeholder: "Reply...",
              type: "textarea",
              size: "small",
              autosize: {
                minRows: 1,
                maxRows: 5
              },
              onBlur: ($event) => resetWindowScroll()
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="actions-group flex items-center" data-v-b19ac76c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              text: "",
              type: "primary",
              disabled: !reply.value,
              onClick: ($event) => send()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$s, {
                    size: 20,
                    name: SendIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: SendIcon
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "post-box" }, [
                createVNode("div", { class: "user mb-4 flex items-start gap-3" }, [
                  createVNode("div", { class: "avatar" }, [
                    createVNode(unref(NAvatar), {
                      round: "",
                      src: unref(avatar),
                      size: 40,
                      lazy: "",
                      "img-props": { alt: "avatar" }
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "info" }, [
                    createVNode("div", { class: "name" }, toDisplayString(unref(name)), 1),
                    createVNode("div", { class: "date" }, [
                      createVNode(unref(NTime), {
                        time: unref(date),
                        format: "d MMM @ HH:mm"
                      }, null, 8, ["time"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "content mb-4 flex flex-col gap-4" }, [
                  unref(image) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "image"
                  }, [
                    createVNode(unref(NImage), {
                      src: unref(image),
                      width: "500",
                      height: "300",
                      lazy: "",
                      "img-props": { alt: "image" }
                    }, null, 8, ["src"])
                  ])) : createCommentVNode("", true),
                  unref(text) ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: "text"
                  }, toDisplayString(unref(text)), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "reactions flex items-center gap-7" }, [
                  createVNode(unref(Button), {
                    text: "",
                    class: ["item comments", { active: commentActive.value }],
                    onClick: ($event) => commentActive.value = !commentActive.value
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$s, {
                        name: commentActive.value ? CommentsActiveIcon : CommentsIcon
                      }, null, 8, ["name"])
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" " + toDisplayString(unref(commentsCount)), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "onClick"]),
                  createVNode(unref(Button), {
                    text: "",
                    class: ["item likes", { active: likeActive.value }],
                    onClick: ($event) => likeActive.value = !likeActive.value
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$s, {
                        name: likeActive.value ? HeartActiveIcon : HeartIcon
                      }, null, 8, ["name"])
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" " + toDisplayString(unref(likesCount)), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "onClick"])
                ])
              ]),
              commentActive.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "comments-box"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(comments.value, (comment) => {
                  return openBlock(), createBlock("div", {
                    key: comment.id,
                    class: "comment flex"
                  }, [
                    createVNode("div", { class: "avatar" }, [
                      createVNode(unref(NAvatar), {
                        round: "",
                        src: comment.avatar,
                        size: 40,
                        lazy: "",
                        "img-props": { alt: "avatar" }
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "info flex flex-wrap" }, [
                        createVNode("div", { class: "name" }, toDisplayString(comment.name), 1),
                        createVNode("div", { class: "date" }, [
                          createVNode(unref(NTime), {
                            time: comment.date,
                            format: "d MMM @ HH:mm"
                          }, null, 8, ["time"])
                        ])
                      ]),
                      createVNode("p", {
                        class: "text",
                        innerHTML: comment.text
                      }, null, 8, ["innerHTML"])
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "reply-box flex" }, [
                createVNode("div", { class: "text-input grow" }, [
                  createVNode(unref(NInput), {
                    value: reply.value,
                    "onUpdate:value": ($event) => reply.value = $event,
                    placeholder: "Reply...",
                    type: "textarea",
                    size: "small",
                    autosize: {
                      minRows: 1,
                      maxRows: 5
                    },
                    onBlur: ($event) => resetWindowScroll()
                  }, null, 8, ["value", "onUpdate:value", "onBlur"])
                ]),
                createVNode("div", { class: "actions-group flex items-center" }, [
                  createVNode(unref(Button), {
                    text: "",
                    type: "primary",
                    disabled: !reply.value,
                    onClick: ($event) => send()
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$s, {
                        size: 20,
                        name: SendIcon
                      })
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/social/CardSocial1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b19ac76c"]]);

export { __nuxt_component_8 as _ };
//# sourceMappingURL=CardSocial1-BT4aIU4B.mjs.map
