import { mergeProps, defineComponent, withCtx, createVNode, unref, computed, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { faker } from '@faker-js/faker';
import { a as _export_sfc, N as NCard, ab as useThemeStore, bb as NEmpty, B as Button } from './server.mjs';
import { N as NTabs, b as NTabPane } from './Tabs-CFVrpWKa.mjs';
import { N as NCarousel } from './Carousel-Beasa0h0.mjs';
import { _ as __nuxt_component_8, a as _sfc_main$5 } from './CardExtra7-owOQriJc.mjs';
import { _ as __nuxt_component_8$1 } from './CardWrapper-BlMxJBLU.mjs';
import { _ as __nuxt_component_9 } from './CardExtra6-BEMwN58X.mjs';
import { Calendar } from 'v-calendar';
import dayjs from 'dayjs';
import { _ as __nuxt_component_8$2 } from './CardSocial1-BT4aIU4B.mjs';
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
import './Add-niv5NbQA.mjs';
import 'lodash/capitalize.js';
import './TimelineItem-DmCg_9nG.mjs';
import './Base-23L4dhgL.mjs';
import 'lodash/orderBy.js';
import './Table-lFpRjk1j.mjs';
import './Image-CRKx2FUb.mjs';
import './download-aNT-DO08.mjs';
import './Progress-iOzX4hFw.mjs';
import './Time-BGDkyjxP.mjs';
import './index-CulsySW9.mjs';
import './getDefaultOptions-Badlq585.mjs';
import './Input-DOxGe8j0.mjs';
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dc3642b2"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CardExtra1 = _sfc_main$4;
  const _component_CardExtra2 = __nuxt_component_1;
  const _component_CardExtra5 = __nuxt_component_8;
  const _component_CardWrapper = __nuxt_component_8$1;
  const _component_CardExtra6 = __nuxt_component_9;
  const _component_CardExtra3 = _sfc_main$2;
  const _component_CardExtra4 = _sfc_main$1;
  const _component_CardExtra7 = _sfc_main$5;
  const _component_CardSocial1 = __nuxt_component_8$2;
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
//# sourceMappingURL=Extra-fd0HPFfV.mjs.map
