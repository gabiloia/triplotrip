import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _sfc_main$s, N as NCard, aW as NText } from './server.mjs';
import { RouterLink } from 'vue-router';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import './LtrContext-CQINXXZ7.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
import 'seemly';
import 'vooks';
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
import 'lodash/castArray.js';
import '@css-render/vue3-ssr';
import 'deep-pick-omit';
import 'colord';
import 'lodash/get.js';
import '@vueuse/core';
import 'lodash/set.js';
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

const ExternalIcon = "tabler:external-link";
const LinkIcon = "carbon:link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Card</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/card" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a>`);
      _push(ssrRenderComponent(unref(RouterLink), { to: { name: "Cards-Basic" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$s, {
              name: LinkIcon,
              size: 16
            }, null, _parent2, _scopeId));
            _push2(` more cards `);
          } else {
            return [
              createVNode(_sfc_main$s, {
                name: LinkIcon,
                size: 16
              }),
              createTextVNode(" more cards ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A basic card.`);
          } else {
            return [
              createTextVNode("A basic card.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-card title="Card">Card Content</n-card>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-card title="Card">Card Content</n-card>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCard), { title: "Card" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Card Content`);
                } else {
                  return [
                    createTextVNode("Card Content")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCard), { title: "Card" }, {
                default: withCtx(() => [
                  createTextVNode("Card Content")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Hoverable" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-card title="Card" hoverable>Card Content</n-card>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-card title="Card" hoverable>Card Content</n-card>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCard), {
              title: "Card",
              hoverable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Card Content`);
                } else {
                  return [
                    createTextVNode("Card Content")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCard), {
                title: "Card",
                hoverable: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("Card Content")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Slots" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Card has many slots to help you write less code.`);
          } else {
            return [
              createTextVNode("Card has many slots to help you write less code.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-card title="Card Slots Demo">
						<template #header-extra>#header-extra</template>
						Card Content
						<template #footer>#footer</template>
						<template #action>#action</template>
					</n-card>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-card title="Card Slots Demo">
						<template #header-extra>#header-extra</template>
						Card Content
						<template #footer>#footer</template>
						<template #action>#action</template>
					</n-card>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCard), { title: "Card Slots Demo" }, {
              "header-extra": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`#header-extra`);
                } else {
                  return [
                    createTextVNode("#header-extra")
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`#footer`);
                } else {
                  return [
                    createTextVNode("#footer")
                  ];
                }
              }),
              action: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`#action`);
                } else {
                  return [
                    createTextVNode("#action")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Card Content `);
                } else {
                  return [
                    createTextVNode(" Card Content ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCard), { title: "Card Slots Demo" }, {
                "header-extra": withCtx(() => [
                  createTextVNode("#header-extra")
                ]),
                footer: withCtx(() => [
                  createTextVNode("#footer")
                ]),
                action: withCtx(() => [
                  createTextVNode("#action")
                ]),
                default: withCtx(() => [
                  createTextVNode(" Card Content ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Size" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Card has `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`small`);
                } else {
                  return [
                    createTextVNode("small")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`medium`);
                } else {
                  return [
                    createTextVNode("medium")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`large`);
                } else {
                  return [
                    createTextVNode("large")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`huge`);
                } else {
                  return [
                    createTextVNode("huge")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` sizes. `);
          } else {
            return [
              createTextVNode(" Card has "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("small")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("medium")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("large")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("huge")
                ]),
                _: 1
              }),
              createTextVNode(" sizes. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-card title="Small Card" size="small">Card Content</n-card>
						<n-card title="Medium Card" size="medium">Card Content</n-card>
						<n-card title="Large Card" size="large">Card Content</n-card>
						<n-card title="Huge Card" size="huge">Card Content</n-card>
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-card title="Small Card" size="small">Card Content</n-card>
						<n-card title="Medium Card" size="medium">Card Content</n-card>
						<n-card title="Large Card" size="large">Card Content</n-card>
						<n-card title="Huge Card" size="huge">Card Content</n-card>
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCard), {
                    title: "Small Card",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Card Content`);
                      } else {
                        return [
                          createTextVNode("Card Content")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCard), {
                    title: "Medium Card",
                    size: "medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Card Content`);
                      } else {
                        return [
                          createTextVNode("Card Content")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCard), {
                    title: "Large Card",
                    size: "large"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Card Content`);
                      } else {
                        return [
                          createTextVNode("Card Content")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCard), {
                    title: "Huge Card",
                    size: "huge"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Card Content`);
                      } else {
                        return [
                          createTextVNode("Card Content")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCard), {
                      title: "Small Card",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Card Content")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCard), {
                      title: "Medium Card",
                      size: "medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Card Content")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCard), {
                      title: "Large Card",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Card Content")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCard), {
                      title: "Huge Card",
                      size: "huge"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Card Content")
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
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NCard), {
                    title: "Small Card",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Card Content")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCard), {
                    title: "Medium Card",
                    size: "medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Card Content")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCard), {
                    title: "Large Card",
                    size: "large"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Card Content")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCard), {
                    title: "Huge Card",
                    size: "huge"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Card Content")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Card-BtFws-Af.mjs.map
