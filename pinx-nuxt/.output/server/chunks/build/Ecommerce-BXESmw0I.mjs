import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, defineComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, ref, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as _export_sfc, N as NCard, B as Button, _ as _sfc_main$o, d as NAvatar } from './server.mjs';
import { faker } from '@faker-js/faker';
import { N as NRate } from './Rate-BHu66ffu.mjs';
import { N as NRadioGroup } from './RadioGroup-rfsKDf3m.mjs';
import { N as NRadioButton } from './RadioButton-Bxt4PxAh.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
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
import './get-slot-BIpdyb5h.mjs';

const _imports_0$1 = "" + buildAssetsURL("super-bike.DZT02ln9.jpg");
const CartIcon$1 = "tabler:shopping-cart";
const HeartIcon$1 = "ion:heart";
const ShareIcon$1 = "carbon:share";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CardEcommerce1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({ hoverable: "" }, _attrs), {
        cover: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="cover"${ssrRenderAttr("src", _imports_0$1)} width="900" height="400"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "cover",
                src: _imports_0$1,
                width: "900",
                height: "400"
              })
            ];
          }
        }),
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Super bike</span><span class="text-secondary ml-3"${_scopeId}>$644,00</span>`);
          } else {
            return [
              createVNode("span", null, "Super bike"),
              createVNode("span", { class: "text-secondary ml-3" }, "$644,00")
            ];
          }
        }),
        "header-extra": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              color: "#FF0156",
              name: HeartIcon$1
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              name: ShareIcon$1
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-3" }, [
                createVNode(_sfc_main$o, {
                  size: 20,
                  color: "#FF0156",
                  name: HeartIcon$1
                }),
                createVNode(_sfc_main$o, {
                  size: 20,
                  name: ShareIcon$1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> Introducing the perfect bike for your adventures! Our top-of-the-line bicycle combines sleek design, superior performance, and unbeatable comfort. <br${_scopeId}><br${_scopeId}> With its lightweight frame and precision engineering, this bike offers effortless speed and agility. Equipped with advanced gear systems, it effortlessly conquers any terrain, whether it&#39;s a challenging mountain trail or a smooth city street. Experience the joy of cycling with our exceptional bike, designed for both beginners and seasoned riders. Upgrade your ride and embrace the freedom of the open road. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" Introducing the perfect bike for your adventures! Our top-of-the-line bicycle combines sleek design, superior performance, and unbeatable comfort. "),
                createVNode("br"),
                createVNode("br"),
                createTextVNode(" With its lightweight frame and precision engineering, this bike offers effortless speed and agility. Equipped with advanced gear systems, it effortlessly conquers any terrain, whether it's a challenging mountain trail or a smooth city street. Experience the joy of cycling with our exceptional bike, designed for both beginners and seasoned riders. Upgrade your ride and embrace the freedom of the open road. ")
              ])
            ];
          }
        }),
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              quaternary: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Details`);
                } else {
                  return [
                    createTextVNode("Details")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Button), { type: "primary" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, { name: CartIcon$1 }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, { name: CartIcon$1 })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add to cart `);
                } else {
                  return [
                    createTextVNode(" Add to cart ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode(unref(Button), {
                  type: "primary",
                  quaternary: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("Details")
                  ]),
                  _: 1
                }),
                createVNode(unref(Button), { type: "primary" }, {
                  icon: withCtx(() => [
                    createVNode(_sfc_main$o, { name: CartIcon$1 })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Add to cart ")
                  ]),
                  _: 1
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ecommerce/CardEcommerce1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardEcommerce3",
  __ssrInlineRender: true,
  setup(__props) {
    const avatar = faker.image.avatarGitHub();
    const name = faker.person.fullName();
    const text = faker.lorem.sentences(3, "<br/><br/>") + faker.lorem.paragraph();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NAvatar), {
              round: "",
              src: unref(avatar),
              size: 30,
              "img-props": { alt: "avatar" }
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(name))}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode(unref(NAvatar), {
                  round: "",
                  src: unref(avatar),
                  size: 30,
                  "img-props": { alt: "avatar" }
                }, null, 8, ["src"]),
                createVNode("span", null, toDisplayString(unref(name)), 1)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NRate), {
              readonly: "",
              "allow-half": true,
              "default-value": 4.5,
              color: "#FFB600"
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-2"${_scopeId}>${text != null ? text : ""}</p>`);
          } else {
            return [
              createVNode(unref(NRate), {
                readonly: "",
                "allow-half": true,
                "default-value": 4.5,
                color: "#FFB600"
              }),
              createVNode("p", {
                class: "mt-2",
                innerHTML: text
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ecommerce/CardEcommerce3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("premium-headphones.Di49mKr_.jpg");
const CartIcon = "tabler:shopping-cart";
const HeartIcon = "ion:heart-outline";
const ShareIcon = "carbon:share";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardEcommerce2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        hoverable: "",
        "content-class": "p-0!"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-stretch" data-v-9249e14e${_scopeId}><div class="card-cover basis-2/5" data-v-9249e14e${_scopeId}><img alt="cover"${ssrRenderAttr("src", _imports_0)} width="400" height="400" data-v-9249e14e${_scopeId}></div><div class="flex basis-3/5 flex-col" data-v-9249e14e${_scopeId}><div class="card-header flex items-center justify-between" data-v-9249e14e${_scopeId}><div data-v-9249e14e${_scopeId}><span data-v-9249e14e${_scopeId}>Premium Headphones</span><span class="text-secondary ml-3" data-v-9249e14e${_scopeId}>$399,00</span></div><div class="flex items-center gap-3" data-v-9249e14e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              name: HeartIcon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, {
              size: 20,
              name: ShareIcon
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="card-content grow" data-v-9249e14e${_scopeId}><div class="mb-2" data-v-9249e14e${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NRate), {
              readonly: "",
              "allow-half": true,
              "default-value": 4.5,
              color: "#FFB600"
            }, null, _parent2, _scopeId));
            _push2(`</div><p data-v-9249e14e${_scopeId}> Discover the ultimate sound experience with our premium headphones! Immerse yourself in crystal-clear audio and deep, rich bass. Our cutting-edge technology ensures exceptional noise cancellation, allowing you to escape into your favorite music or podcasts. <br data-v-9249e14e${_scopeId}><br data-v-9249e14e${_scopeId}> With a sleek and comfortable design, these headphones are perfect for long listening sessions or on-the-go use. Whether you&#39;re a music lover, a gamer, or a podcast enthusiast, these headphones will elevate your audio enjoyment to new heights. Treat yourself to the best sound quality and indulge in pure sonic bliss with our top-of-the-line headphones. </p></div><div class="card-footer" data-v-9249e14e${_scopeId}><div class="flex items-center justify-between" data-v-9249e14e${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              quaternary: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Details`);
                } else {
                  return [
                    createTextVNode("Details")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Button), { type: "primary" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, { name: CartIcon }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, { name: CartIcon })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add to cart `);
                } else {
                  return [
                    createTextVNode(" Add to cart ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-stretch" }, [
                createVNode("div", { class: "card-cover basis-2/5" }, [
                  createVNode("img", {
                    alt: "cover",
                    src: _imports_0,
                    width: "400",
                    height: "400"
                  })
                ]),
                createVNode("div", { class: "flex basis-3/5 flex-col" }, [
                  createVNode("div", { class: "card-header flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode("span", null, "Premium Headphones"),
                      createVNode("span", { class: "text-secondary ml-3" }, "$399,00")
                    ]),
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode(_sfc_main$o, {
                        size: 20,
                        name: HeartIcon
                      }),
                      createVNode(_sfc_main$o, {
                        size: 20,
                        name: ShareIcon
                      })
                    ])
                  ]),
                  createVNode("div", { class: "card-content grow" }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode(unref(NRate), {
                        readonly: "",
                        "allow-half": true,
                        "default-value": 4.5,
                        color: "#FFB600"
                      })
                    ]),
                    createVNode("p", null, [
                      createTextVNode(" Discover the ultimate sound experience with our premium headphones! Immerse yourself in crystal-clear audio and deep, rich bass. Our cutting-edge technology ensures exceptional noise cancellation, allowing you to escape into your favorite music or podcasts. "),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" With a sleek and comfortable design, these headphones are perfect for long listening sessions or on-the-go use. Whether you're a music lover, a gamer, or a podcast enthusiast, these headphones will elevate your audio enjoyment to new heights. Treat yourself to the best sound quality and indulge in pure sonic bliss with our top-of-the-line headphones. ")
                    ])
                  ]),
                  createVNode("div", { class: "card-footer" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode(unref(Button), {
                        type: "primary",
                        quaternary: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Details")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { type: "primary" }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: CartIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Add to cart ")
                        ]),
                        _: 1
                      })
                    ])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ecommerce/CardEcommerce2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9249e14e"]]);
const CheckIcon = "fluent:checkmark-starburst-16-regular";
const StarIcon = "fluent:star-16-regular";
const ShieldIcon = "fluent:shield-keyhole-16-regular";
const PremiumIcon = "fluent:premium-24-regular";
const EcoIcon = "material-symbols:eco-outline";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardEcommerce4",
  __ssrInlineRender: true,
  setup(__props) {
    const subscription = ref("monthly");
    const title = faker.lorem.sentence({ min: 2, max: 4 }).replace(".", "");
    const text = faker.lorem.sentences(2, "<br/><br/>") + faker.lorem.paragraph();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        hoverable: "",
        "content-class": "p-0!"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="xs:flex-row xs:items-stretch flex flex-col" data-v-59ffe829${_scopeId}><div class="flex basis-3/5 flex-col" data-v-59ffe829${_scopeId}><div class="card-header flex items-center justify-between" data-v-59ffe829${_scopeId}><div data-v-59ffe829${_scopeId}><span data-v-59ffe829${_scopeId}>${ssrInterpolate(unref(title))}</span></div></div><div class="card-content grow" data-v-59ffe829${_scopeId}><div class="mb-3" data-v-59ffe829${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NRate), {
              readonly: "",
              "allow-half": true,
              "default-value": 5,
              color: "#FFB600"
            }, null, _parent2, _scopeId));
            _push2(`</div><p data-v-59ffe829${_scopeId}>${text != null ? text : ""}</p><div class="divider" data-v-59ffe829${_scopeId}></div><div class="features flex justify-around" data-v-59ffe829${_scopeId}>`);
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
            _push2(`</div></div></div><div class="card-info flex basis-2/5 flex-col items-center justify-between" data-v-59ffe829${_scopeId}><div class="mb-4" data-v-59ffe829${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NRadioGroup), {
              value: subscription.value,
              "onUpdate:value": ($event) => subscription.value = $event,
              name: "subscription",
              class: "bg-default rounded-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NRadioButton), {
                    value: "monthly",
                    label: "Monthly"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NRadioButton), {
                    value: "yearly",
                    label: "Yearly"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NRadioButton), {
                      value: "monthly",
                      label: "Monthly"
                    }),
                    createVNode(unref(NRadioButton), {
                      value: "yearly",
                      label: "Yearly"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-4 text-xl" data-v-59ffe829${_scopeId}>`);
            if (subscription.value === "monthly") {
              _push2(`<div data-v-59ffe829${_scopeId}><strong data-v-59ffe829${_scopeId}>$29</strong><span data-v-59ffe829${_scopeId}>/month</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (subscription.value === "yearly") {
              _push2(`<div data-v-59ffe829${_scopeId}><strong data-v-59ffe829${_scopeId}>$299</strong><span data-v-59ffe829${_scopeId}>/year</span><br data-v-59ffe829${_scopeId}><small class="text-secondary" data-v-59ffe829${_scopeId}>$24,90/month</small></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(Button), { type: "primary" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, { name: PremiumIcon }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, { name: PremiumIcon })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Subscribe now `);
                } else {
                  return [
                    createTextVNode(" Subscribe now ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "xs:flex-row xs:items-stretch flex flex-col" }, [
                createVNode("div", { class: "flex basis-3/5 flex-col" }, [
                  createVNode("div", { class: "card-header flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode("span", null, toDisplayString(unref(title)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "card-content grow" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode(unref(NRate), {
                        readonly: "",
                        "allow-half": true,
                        "default-value": 5,
                        color: "#FFB600"
                      })
                    ]),
                    createVNode("p", { innerHTML: text }),
                    createVNode("div", { class: "divider" }),
                    createVNode("div", { class: "features flex justify-around" }, [
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
                  ])
                ]),
                createVNode("div", { class: "card-info flex basis-2/5 flex-col items-center justify-between" }, [
                  createVNode("div", { class: "mb-4" }, [
                    createVNode(unref(NRadioGroup), {
                      value: subscription.value,
                      "onUpdate:value": ($event) => subscription.value = $event,
                      name: "subscription",
                      class: "bg-default rounded-lg"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NRadioButton), {
                          value: "monthly",
                          label: "Monthly"
                        }),
                        createVNode(unref(NRadioButton), {
                          value: "yearly",
                          label: "Yearly"
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"])
                  ]),
                  createVNode("div", { class: "mb-4 text-xl" }, [
                    subscription.value === "monthly" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("strong", null, "$29"),
                      createVNode("span", null, "/month")
                    ])) : createCommentVNode("", true),
                    subscription.value === "yearly" ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("strong", null, "$299"),
                      createVNode("span", null, "/year"),
                      createVNode("br"),
                      createVNode("small", { class: "text-secondary" }, "$24,90/month")
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode(unref(Button), { type: "primary" }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: PremiumIcon })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Subscribe now ")
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ecommerce/CardEcommerce4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-59ffe829"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CardEcommerce1 = _sfc_main$4;
  const _component_CardEcommerce3 = _sfc_main$3;
  const _component_CardEcommerce2 = __nuxt_component_2;
  const _component_CardEcommerce4 = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page flex flex-col gap-5 lg:flex-row" }, _attrs))}><div class="card-col flex basis-full flex-col gap-5 lg:basis-1/3"><div class="card-wrap">`);
  _push(ssrRenderComponent(_component_CardEcommerce1, null, null, _parent));
  _push(`</div><div class="card-wrap">`);
  _push(ssrRenderComponent(_component_CardEcommerce3, null, null, _parent));
  _push(`</div></div><div class="card-col flex basis-full flex-col gap-5 lg:basis-2/3"><div class="card-wrap">`);
  _push(ssrRenderComponent(_component_CardEcommerce2, null, null, _parent));
  _push(`</div><div class="card-wrap">`);
  _push(ssrRenderComponent(_component_CardEcommerce4, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Cards/Ecommerce.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Ecommerce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Ecommerce as default };
//# sourceMappingURL=Ecommerce-BXESmw0I.mjs.map
