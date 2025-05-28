import { defineComponent, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, N as NCard, a as _sfc_main$s, B as Button } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icons",
  __ssrInlineRender: true,
  setup(__props) {
    const Carbon = [
      "carbon:3d-cursor",
      "carbon:accessibility-alt",
      "carbon:audio-console",
      "carbon:bicycle",
      "carbon:business-processes",
      "carbon:basketball",
      "carbon:chart-histogram",
      "carbon:cloud-satellite-config",
      "carbon:content-delivery-network",
      "carbon:dashboard",
      "carbon:corn",
      "carbon:cube-view",
      "carbon:data-categorical",
      "carbon:data-volume",
      "carbon:decision-tree",
      "carbon:debug",
      "carbon:delivery-add",
      "carbon:cut-out",
      "carbon:cyclist",
      "carbon:earth-filled",
      "carbon:directory-domain",
      "carbon:direct-link",
      "carbon:fish",
      "carbon:forecast-hail-30"
    ];
    const Flags = [
      "circle-flags:it",
      "circle-flags:ca",
      "circle-flags:br",
      "circle-flags:us",
      "circle-flags:jp",
      "circle-flags:uk",
      "circle-flags:be",
      "circle-flags:fr-cp",
      "circle-flags:cg",
      "circle-flags:fi",
      "circle-flags:in-mn",
      "circle-flags:be",
      "circle-flags:gr",
      "circle-flags:kw",
      "circle-flags:at",
      "circle-flags:ch",
      "circle-flags:sy",
      "circle-flags:ml",
      "circle-flags:hu",
      "circle-flags:de",
      "circle-flags:fx",
      "circle-flags:kr",
      "circle-flags:es-variant",
      "circle-flags:cz"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-305a1df9><div class="page-header" data-v-305a1df9><div class="title" data-v-305a1df9>Icons</div></div><div class="main" data-v-305a1df9><strong data-v-305a1df9>Pinx</strong> uses the <a href="https://iconify.design/" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-305a1df9>iconify</a> library which gives the possibility to integrate, many icon sets. You can find <a href="https://icones.js.org/" data-v-305a1df9>here</a> all sets available. Here, instead, are some examples <div class="groups mt-8 grid gap-5" data-v-305a1df9>`);
      _push(ssrRenderComponent(unref(NCard), {
        class: "group",
        title: "Carbon"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end" data-v-305a1df9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              tag: "a",
              href: "https://iconify.design/",
              target: "_blank",
              type: "primary",
              alt: "docs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` See more `);
                } else {
                  return [
                    createTextVNode(" See more ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(unref(Button), {
                  tag: "a",
                  href: "https://iconify.design/",
                  target: "_blank",
                  type: "primary",
                  alt: "docs"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" See more ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="list" data-v-305a1df9${_scopeId}><!--[-->`);
            ssrRenderList(Carbon, (icon) => {
              _push2(`<div class="icon-box" data-v-305a1df9${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                size: 20,
                name: icon
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "list" }, [
                (openBlock(), createBlock(Fragment, null, renderList(Carbon, (icon) => {
                  return createVNode("div", {
                    key: icon,
                    class: "icon-box"
                  }, [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: icon
                    }, null, 8, ["name"])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NCard), {
        class: "group",
        title: "Flags"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end" data-v-305a1df9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              tag: "a",
              href: "https://iconify.design/",
              target: "_blank",
              type: "primary",
              alt: "docs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` See more `);
                } else {
                  return [
                    createTextVNode(" See more ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(unref(Button), {
                  tag: "a",
                  href: "https://iconify.design/",
                  target: "_blank",
                  type: "primary",
                  alt: "docs"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" See more ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="list" data-v-305a1df9${_scopeId}><!--[-->`);
            ssrRenderList(Flags, (icon) => {
              _push2(`<div class="icon-box" data-v-305a1df9${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                size: 20,
                name: icon
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "list" }, [
                (openBlock(), createBlock(Fragment, null, renderList(Flags, (icon) => {
                  return createVNode("div", {
                    key: icon,
                    class: "icon-box"
                  }, [
                    createVNode(_sfc_main$s, {
                      size: 20,
                      name: icon
                    }, null, 8, ["name"])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Icons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Icons = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-305a1df9"]]);

export { Icons as default };
//# sourceMappingURL=Icons-34L5lFA8.mjs.map
