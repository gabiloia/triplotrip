import { mergeProps, defineComponent, withCtx, createVNode, unref, computed, createTextVNode, ref, watch, watchEffect, resolveComponent, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { faker } from '@faker-js/faker';
import { a as _export_sfc, N as NCard, aM as useThemeStore, ai as NEmpty, B as Button, aY as NSpin, d as NAvatar, _ as _sfc_main$o } from './server.mjs';
import { N as NTabs, b as NTabPane } from './Tabs-utWLgCyk.mjs';
import { N as NCarousel } from './Carousel-nX7jZ47O.mjs';
import { _ as __nuxt_component_5 } from './CardExtra5-_gazJM3b.mjs';
import { _ as __nuxt_component_8$1 } from './CardWrapper-CQfcdGvC.mjs';
import { _ as __nuxt_component_9 } from './CardExtra6-CJ7Pw88o.mjs';
import { Calendar } from 'v-calendar';
import dayjs from 'dayjs';
import { useWindowSize, useResizeObserver } from '@vueuse/core';
import { N as NTime } from './Time-Tnt26cb5.mjs';
import { a as NImage } from './Image-CiL9m40l.mjs';
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
import 'pinia';
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
import './Add-niv5NbQA.mjs';
import 'lodash/capitalize.js';
import './TimelineItem-CcJ4XnJT.mjs';
import './Base-C1YldzQp.mjs';
import 'lodash/orderBy.js';
import './Table-ZwyKUzIw.mjs';
import './Progress-CTmj2S_J.mjs';
import './Popselect-DeYg37eR.mjs';
import './utils-DMBa_qdR.mjs';
import './SelectMenu-Dd1BE6MG.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './use-resize-COzDFWWZ.mjs';
import './index-CdFfausA.mjs';
import './getDefaultOptions-B-S4FfjT.mjs';
import './download-aNT-DO08.mjs';
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CardExtra1",
  __ssrInlineRender: true,
  setup(__props) {
    const text1 = faker.lorem.sentences(5, "<br/><br/>");
    const text2 = faker.lorem.sentences(5, "<br/><br/>");
    const text3 = faker.lorem.sentences(5, "<br/><br/>");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        hoverable: "",
        "content-class": "p-0!"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTabs), {
              type: "line",
              "tabs-padding": 24,
              "pane-class": "!p-5",
              animated: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTabPane), { name: "Tab One" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a;
                      if (_push4) {
                        _push4(`<p${_scopeId3}>${(_a = unref(text1)) != null ? _a : ""}</p>`);
                      } else {
                        return [
                          createVNode("p", { innerHTML: unref(text1) }, null, 8, ["innerHTML"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTabPane), { name: "Tab Two" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a;
                      if (_push4) {
                        _push4(`<p${_scopeId3}>${(_a = unref(text2)) != null ? _a : ""}</p>`);
                      } else {
                        return [
                          createVNode("p", { innerHTML: unref(text2) }, null, 8, ["innerHTML"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTabPane), { name: "Tab Three" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a;
                      if (_push4) {
                        _push4(`<p${_scopeId3}>${(_a = unref(text3)) != null ? _a : ""}</p>`);
                      } else {
                        return [
                          createVNode("p", { innerHTML: unref(text3) }, null, 8, ["innerHTML"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTabPane), { name: "Tab One" }, {
                      default: withCtx(() => [
                        createVNode("p", { innerHTML: unref(text1) }, null, 8, ["innerHTML"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTabPane), { name: "Tab Two" }, {
                      default: withCtx(() => [
                        createVNode("p", { innerHTML: unref(text2) }, null, 8, ["innerHTML"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTabPane), { name: "Tab Three" }, {
                      default: withCtx(() => [
                        createVNode("p", { innerHTML: unref(text3) }, null, 8, ["innerHTML"])
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
              createVNode(unref(NTabs), {
                type: "line",
                "tabs-padding": 24,
                "pane-class": "!p-5",
                animated: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(NTabPane), { name: "Tab One" }, {
                    default: withCtx(() => [
                      createVNode("p", { innerHTML: unref(text1) }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTabPane), { name: "Tab Two" }, {
                    default: withCtx(() => [
                      createVNode("p", { innerHTML: unref(text2) }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTabPane), { name: "Tab Three" }, {
                    default: withCtx(() => [
                      createVNode("p", { innerHTML: unref(text3) }, null, 8, ["innerHTML"])
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
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CardExtra2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        hoverable: "",
        "content-class": "p-0!"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCarousel), {
              "show-arrow": "",
              autoplay: "",
              "dot-type": "line",
              "space-between": 20,
              draggable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/1600/600" data-v-dc3642b2${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/1600/600" data-v-dc3642b2${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/1600/600" data-v-dc3642b2${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/1600/600" data-v-dc3642b2${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/VZLH8/1600/600"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/easJc3/1600/600"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/mW1uVF/1600/600"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/IqZMU/1600/600"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCarousel), {
                "show-arrow": "",
                autoplay: "",
                "dot-type": "line",
                "space-between": 20,
                draggable: ""
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/VZLH8/1600/600"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/easJc3/1600/600"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/mW1uVF/1600/600"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/IqZMU/1600/600"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-dc3642b2"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CardExtra3",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const isThemeDark = computed(() => themeStore.isThemeDark);
    const attributes = [
      {
        dot: "blue",
        dates: [
          dayjs().subtract(1, "d").toDate(),
          dayjs().subtract(5, "d").toDate(),
          dayjs().add(5, "d").toDate(),
          dayjs().add(10, "d").toDate()
        ],
        popover: {
          label: faker.lorem.sentence({ min: 1, max: 3 })
        }
      },
      {
        dot: "red",
        dates: [
          dayjs().subtract(3, "d").toDate(),
          dayjs().subtract(5, "d").toDate(),
          dayjs().add(2, "d").toDate(),
          dayjs().add(12, "d").toDate()
        ],
        popover: {
          label: faker.lorem.sentence({ min: 1, max: 3 })
        }
      },
      {
        dot: "green",
        dates: [
          dayjs().subtract(1, "d").toDate(),
          dayjs().subtract(8, "d").toDate(),
          dayjs().add(2, "d").toDate(),
          dayjs().add(10, "d").toDate()
        ],
        popover: {
          label: faker.lorem.sentence({ min: 1, max: 3 })
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        hoverable: "",
        "content-class": "!p-4"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), {
              expanded: "",
              borderless: "",
              transparent: "",
              color: "custom-color",
              "is-dark": isThemeDark.value,
              attributes
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), {
                expanded: "",
                borderless: "",
                transparent: "",
                color: "custom-color",
                "is-dark": isThemeDark.value,
                attributes
              }, null, 8, ["is-dark"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardExtra4",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        hoverable: "",
        class: "p-7"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NEmpty), { description: "You can't find anything" }, {
              extra: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), { size: "small" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Find Something New`);
                      } else {
                        return [
                          createTextVNode("Find Something New")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), { size: "small" }, {
                      default: withCtx(() => [
                        createTextVNode("Find Something New")
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
              createVNode(unref(NEmpty), { description: "You can't find anything" }, {
                extra: withCtx(() => [
                  createVNode(unref(Button), { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode("Find Something New")
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
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardExtra7",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    function getOption() {
      return {
        map: "world_merc",
        showTooltip: true,
        bindTouchEvents: false,
        zoomButtons: false,
        zoomOnScroll: false,
        regionStyle: { initial: { fill: style.value["bg-body-color"] } },
        markers: [
          { name: "Japan", coords: [36.48491549755618, 138.57517718545] },
          { name: "Canada", coords: [56.1304, -106.3468] },
          {
            name: "Brazil",
            coords: [-14.235, -51.9253],
            style: { initial: { fill: style.value["extra3-color"] } }
          },
          {
            name: "Norway",
            coords: [60.472024, 8.468946],
            style: { initial: { fill: style.value["extra3-color"] } }
          }
        ],
        lines: [
          { from: "Japan", to: "Canada" },
          { from: "Brazil", to: "Norway" },
          { from: "Brazil", to: "Japan" }
        ],
        markerStyle: {
          initial: { fill: style.value["primary-color"] },
          selected: { fill: style.value["extra1-color"] }
        },
        markerLabelStyle: {
          initial: {
            fontFamily: style.value["font-family"],
            fontSize: 13,
            fill: style.value["fg-default-color"]
          }
        },
        lineStyle: {
          strokeDasharray: "6 3 6",
          animation: true
        },
        labels: {
          markers: {
            render(marker) {
              return marker.name;
            }
          }
        }
      };
    }
    const options = ref(getOption());
    const loading = ref(true);
    const card = ref(null);
    const loadingTimer = ref(null);
    const { width } = useWindowSize();
    function loaded(map) {
      useResizeObserver(card, () => {
        map.updateSize();
      });
    }
    function refresh() {
      loading.value = true;
      if (loadingTimer.value) {
        clearTimeout(loadingTimer.value);
      }
      loadingTimer.value = setTimeout(() => {
        loading.value = false;
      }, 1500);
      options.value = getOption();
    }
    function regionTooltipShow(_, tooltip) {
      tooltip.css({ backgroundColor: style.value["primary-color"] });
    }
    watch(width, () => {
      refresh();
    });
    watchEffect(() => {
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vuevectormap = resolveComponent("vuevectormap");
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        ref_key: "card",
        ref: card,
        "content-class": "flex flex-col justify-center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpin), { show: loading.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto my-0 h-64 w-full overflow-hidden"${_scopeId2}>`);
                  if (!loading.value) {
                    _push3(ssrRenderComponent(_component_vuevectormap, {
                      map: "world",
                      width: "100%",
                      height: "100%",
                      options: options.value,
                      onLoaded: loaded,
                      onRegionTooltipShow: regionTooltipShow
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto my-0 h-64 w-full overflow-hidden" }, [
                      !loading.value ? (openBlock(), createBlock(_component_vuevectormap, {
                        key: 0,
                        map: "world",
                        width: "100%",
                        height: "100%",
                        options: options.value,
                        onLoaded: loaded,
                        onRegionTooltipShow: regionTooltipShow
                      }, null, 8, ["options"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpin), { show: loading.value }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mx-auto my-0 h-64 w-full overflow-hidden" }, [
                    !loading.value ? (openBlock(), createBlock(_component_vuevectormap, {
                      key: 0,
                      map: "world",
                      width: "100%",
                      height: "100%",
                      options: options.value,
                      onLoaded: loaded,
                      onRegionTooltipShow: regionTooltipShow
                    }, null, 8, ["options"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra7.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SendIcon = "carbon:send";
const HeartIcon = "ion:heart-outline";
const HeartActiveIcon = "ion:heart";
const CommentsIcon = "ion:chatbubbles-outline";
const CommentsActiveIcon = "ion:chatbubbles";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
                  _push3(ssrRenderComponent(_sfc_main$o, {
                    name: commentActive.value ? CommentsActiveIcon : CommentsIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, {
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
                  _push3(ssrRenderComponent(_sfc_main$o, {
                    name: likeActive.value ? HeartActiveIcon : HeartIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, {
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
                  _push3(ssrRenderComponent(_sfc_main$o, {
                    size: 20,
                    name: SendIcon
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, {
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
                      createVNode(_sfc_main$o, {
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
                      createVNode(_sfc_main$o, {
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
                      createVNode(_sfc_main$o, {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/social/CardSocial1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b19ac76c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CardExtra1 = _sfc_main$6;
  const _component_CardExtra2 = __nuxt_component_1;
  const _component_CardExtra5 = __nuxt_component_5;
  const _component_CardWrapper = __nuxt_component_8$1;
  const _component_CardExtra6 = __nuxt_component_9;
  const _component_CardExtra3 = _sfc_main$4;
  const _component_CardExtra4 = _sfc_main$3;
  const _component_CardExtra7 = _sfc_main$2;
  const _component_CardSocial1 = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-66f78b4a><div class="card-row flex flex-wrap" data-v-66f78b4a><div class="card-wrap basis-full lg:basis-1/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardExtra1, {
    class: "h-full",
    title: "Card with tabs"
  }, null, _parent));
  _push(`</div><div class="card-wrap basis-full lg:basis-1/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardExtra2, { class: "h-full" }, null, _parent));
  _push(`</div><div class="card-wrap basis-full lg:basis-1/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardExtra5, {
    class: "h-full",
    "hide-image": ""
  }, null, _parent));
  _push(`</div></div><div class="card-row flex flex-wrap" data-v-66f78b4a><div class="card-wrap basis-full lg:basis-2/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardWrapper, { class: "h-full" }, {
    default: withCtx(({ expand, reload }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardExtra6, {
          class: "h-full",
          "table-rows": 6,
          onExpand: expand,
          onReload: reload
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CardExtra6, {
            class: "h-full",
            "table-rows": 6,
            onExpand: expand,
            onReload: reload
          }, null, 8, ["onExpand", "onReload"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="card-wrap flex basis-full flex-col lg:basis-1/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardExtra3, null, null, _parent));
  _push(ssrRenderComponent(_component_CardExtra4, { class: "h-full" }, null, _parent));
  _push(`</div></div><div class="card-row flex flex-wrap" data-v-66f78b4a><div class="card-wrap basis-full overflow-hidden lg:basis-2/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardExtra7, { class: "h-full" }, null, _parent));
  _push(`</div><div class="card-wrap flex basis-full flex-col lg:basis-1/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardSocial1, {
    like: true,
    class: "h-full"
  }, null, _parent));
  _push(`</div></div><div class="card-row flex flex-wrap" data-v-66f78b4a><div class="card-wrap basis-full lg:basis-1/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardSocial1, {
    "show-image": true,
    "show-comments": true
  }, null, _parent));
  _push(`</div><div class="card-wrap basis-full lg:basis-1/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardSocial1, {
    "show-image": false,
    "show-comments": true,
    like: true
  }, null, _parent));
  _push(`</div><div class="card-wrap basis-full lg:basis-1/3" data-v-66f78b4a>`);
  _push(ssrRenderComponent(_component_CardSocial1, {
    "hide-text": true,
    "show-image": true,
    like: true
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Cards/Extra.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Extra = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-66f78b4a"]]);

export { Extra as default };
//# sourceMappingURL=Extra-aDxAPcTf.mjs.map
