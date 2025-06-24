import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { faker } from '@faker-js/faker';
import { a as _export_sfc, N as NCard, _ as _sfc_main$o, B as Button, d as NAvatar } from './server.mjs';
import { N as NAvatarGroup } from './AvatarGroup-C39n1v6i.mjs';
import { N as NCollapse, a as NCollapseItem } from './CollapseItem-BML65SQa.mjs';
import { N as NSkeleton } from './Skeleton-D1WIjkjD.mjs';
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
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'vdirs';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CardBasic1",
  __ssrInlineRender: true,
  setup(__props) {
    const image = faker.image.urlPicsumPhotos({ width: 900, height: 400 });
    const title = faker.lorem.sentence({ min: 2, max: 5 }).replace(".", "");
    const text = faker.lorem.paragraph();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({ title: unref(title) }, _attrs), {
        cover: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="cover"${ssrRenderAttr("src", unref(image))} width="900" height="400"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "cover",
                src: unref(image),
                width: "900",
                height: "400"
              }, null, 8, ["src"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(text))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(unref(text)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/basic/CardBasic1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CardBasic2",
  __ssrInlineRender: true,
  setup(__props) {
    const image = faker.image.urlPicsumPhotos({ width: 900, height: 400 });
    const avatar = faker.image.avatarGitHub();
    const title = faker.lorem.sentence({ min: 2, max: 5 }).replace(".", "");
    const text = faker.lorem.paragraph();
    const options = faker.helpers.uniqueArray(faker.word.sample, 5).map(() => ({
      name: faker.person.fullName(),
      src: faker.image.avatarGitHub()
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), _attrs, {
        cover: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="cover"${ssrRenderAttr("src", unref(image))} width="900" height="400" data-v-8db36a28${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "cover",
                src: unref(image),
                width: "900",
                height: "400"
              }, null, 8, ["src"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NAvatar), {
              round: "",
              src: unref(avatar),
              size: 50,
              class: "avatar",
              "img-props": { alt: "avatar" }
            }, null, _parent2, _scopeId));
            _push2(`<div class="title" data-v-8db36a28${_scopeId}>${ssrInterpolate(unref(title))}</div><p class="text" data-v-8db36a28${_scopeId}>${ssrInterpolate(unref(text))}</p>`);
          } else {
            return [
              createVNode(unref(NAvatar), {
                round: "",
                src: unref(avatar),
                size: 50,
                class: "avatar",
                "img-props": { alt: "avatar" }
              }, null, 8, ["src"]),
              createVNode("div", { class: "title" }, toDisplayString(unref(title)), 1),
              createVNode("p", { class: "text" }, toDisplayString(unref(text)), 1)
            ];
          }
        }),
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between" data-v-8db36a28${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), { type: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Message`);
                } else {
                  return [
                    createTextVNode("Message")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NAvatarGroup), {
              options: unref(options),
              size: 40,
              max: 4
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode(unref(Button), { type: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode("Message")
                  ]),
                  _: 1
                }),
                createVNode(unref(NAvatarGroup), {
                  options: unref(options),
                  size: 40,
                  max: 4
                }, null, 8, ["options"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/basic/CardBasic2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8db36a28"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CardBasic3",
  __ssrInlineRender: true,
  setup(__props) {
    const image = faker.image.urlPicsumPhotos({ width: 900, height: 400 });
    const title = faker.lorem.sentence({ min: 2, max: 5 }).replace(".", "");
    const text = faker.lorem.paragraph();
    const info = faker.lorem.paragraph();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), _attrs, {
        cover: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="cover"${ssrRenderAttr("src", unref(image))} width="900" height="400"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "cover",
                src: unref(image),
                width: "900",
                height: "400"
              }, null, 8, ["src"])
            ];
          }
        }),
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(title))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(title)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(text))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(unref(text)), 1)
            ];
          }
        }),
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCollapse), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "Info",
                    name: "1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>${ssrInterpolate(unref(info))}</div>`);
                      } else {
                        return [
                          createVNode("div", null, toDisplayString(unref(info)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCollapseItem), {
                      title: "Info",
                      name: "1"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, toDisplayString(unref(info)), 1)
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
              createVNode(unref(NCollapse), null, {
                default: withCtx(() => [
                  createVNode(unref(NCollapseItem), {
                    title: "Info",
                    name: "1"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, toDisplayString(unref(info)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/basic/CardBasic3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardBasic4",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), _attrs, {
        cover: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSkeleton), {
              sharp: true,
              height: 200
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSkeleton), {
                sharp: true,
                height: 200
              })
            ];
          }
        }),
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSkeleton), {
              text: "",
              width: "60%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSkeleton), {
                text: "",
                width: "60%"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSkeleton), {
              text: "",
              width: "20%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NSkeleton), {
              text: "",
              repeat: 6
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSkeleton), {
                text: "",
                width: "20%"
              }),
              createVNode(unref(NSkeleton), {
                text: "",
                repeat: 6
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/basic/CardBasic4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CheckIcon = "fluent:checkmark-starburst-16-regular";
const StarIcon = "fluent:star-16-regular";
const ShieldIcon = "fluent:shield-keyhole-16-regular";
const PremiumIcon = "fluent:premium-24-regular";
const EcoIcon = "material-symbols:eco-outline";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardBasic5",
  __ssrInlineRender: true,
  setup(__props) {
    const title = faker.lorem.sentence({ min: 2, max: 5 }).replace(".", "");
    const text = faker.lorem.paragraph();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        title: unref(title),
        segmented: {
          content: true,
          footer: "soft"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(text))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(unref(text)), 1)
            ];
          }
        }),
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-around"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              name: CheckIcon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              name: StarIcon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              name: ShieldIcon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              name: PremiumIcon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              name: EcoIcon
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-around" }, [
                createVNode(_sfc_main$o, {
                  size: 20,
                  name: CheckIcon
                }),
                createVNode(_sfc_main$o, {
                  size: 20,
                  name: StarIcon
                }),
                createVNode(_sfc_main$o, {
                  size: 20,
                  name: ShieldIcon
                }),
                createVNode(_sfc_main$o, {
                  size: 20,
                  name: PremiumIcon
                }),
                createVNode(_sfc_main$o, {
                  size: 20,
                  name: EcoIcon
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/basic/CardBasic5.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ColorIcon = "ion:color-fill-outline";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardBasic6",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        class: "!bg-indigo-500 dark:!bg-teal-600",
        bordered: false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between text-white!" data-v-719c41fc${_scopeId}><span data-v-719c41fc${_scopeId}>Alt Background</span>`);
            _push2(ssrRenderComponent(_sfc_main$o, {
              class: "icon-ring ml-3",
              name: ColorIcon
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between text-white!" }, [
                createVNode("span", null, "Alt Background"),
                createVNode(_sfc_main$o, {
                  class: "icon-ring ml-3",
                  name: ColorIcon
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white!" data-v-719c41fc${_scopeId}> Card with alternative background (light/dark). Color value from <strong data-v-719c41fc${_scopeId}>Tailwind</strong> class: <br data-v-719c41fc${_scopeId}><br data-v-719c41fc${_scopeId}><code class="block w-full p-4 text-center" data-v-719c41fc${_scopeId}>class=&quot;!bg-indigo-500 dark:!bg-teal-600&quot;</code></div>`);
          } else {
            return [
              createVNode("div", { class: "text-white!" }, [
                createTextVNode(" Card with alternative background (light/dark). Color value from "),
                createVNode("strong", null, "Tailwind"),
                createTextVNode(" class: "),
                createVNode("br"),
                createVNode("br"),
                createVNode("code", { class: "block w-full p-4 text-center" }, 'class="!bg-indigo-500 dark:!bg-teal-600"')
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/basic/CardBasic6.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-719c41fc"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Basic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBasic1 = _sfc_main$6;
      const _component_CardBasic2 = __nuxt_component_1;
      const _component_CardBasic3 = _sfc_main$4;
      const _component_CardBasic4 = _sfc_main$3;
      const _component_CardBasic5 = _sfc_main$2;
      const _component_CardBasic6 = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-a0df4b18><div class="masonry" data-v-a0df4b18><div class="card-wrap" data-v-a0df4b18>`);
      _push(ssrRenderComponent(_component_CardBasic1, null, null, _parent));
      _push(`</div><div class="card-wrap" data-v-a0df4b18>`);
      _push(ssrRenderComponent(_component_CardBasic2, null, null, _parent));
      _push(`</div><div class="card-wrap" data-v-a0df4b18>`);
      _push(ssrRenderComponent(_component_CardBasic3, null, null, _parent));
      _push(`</div><div class="card-wrap" data-v-a0df4b18>`);
      _push(ssrRenderComponent(_component_CardBasic4, null, null, _parent));
      _push(`</div><div class="card-wrap" data-v-a0df4b18>`);
      _push(ssrRenderComponent(_component_CardBasic5, null, null, _parent));
      _push(`</div><div class="card-wrap" data-v-a0df4b18>`);
      _push(ssrRenderComponent(_component_CardBasic6, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Cards/Basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Basic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a0df4b18"]]);

export { Basic as default };
//# sourceMappingURL=Basic-DmX-TXwv.mjs.map
