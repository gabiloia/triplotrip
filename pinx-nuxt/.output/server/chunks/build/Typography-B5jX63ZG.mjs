import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as _export_sfc, N as NCard, B as Button, ae as Scrollbar } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Typography",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-c7a78013><div class="page-header" data-v-c7a78013><div class="title" data-v-c7a78013>Typography</div></div><div class="font-family-section mt-8 flex justify-between gap-5" data-v-c7a78013>`);
      _push(ssrRenderComponent(unref(NCard), { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ff-display flex h-full flex-col" data-v-c7a78013${_scopeId}><div class="title" data-v-c7a78013${_scopeId}>Lexend</div><div class="variants flex gap-5" data-v-c7a78013${_scopeId}><div class="regular" data-v-c7a78013${_scopeId}>Regular</div><div class="medium" data-v-c7a78013${_scopeId}>Medium</div><div class="bold" data-v-c7a78013${_scopeId}>Bold</div></div><div class="demo" data-v-c7a78013${_scopeId}> Lorem ipsum dolor sit amet consectetur adipiscing elit at erat consectetur ultricies sapien facilisi euismod duis mauris a sed quam aliquet dui eros sit lacus vitae ut viverra </div><div class="footer flex grow items-end justify-end" data-v-c7a78013${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              tag: "a",
              href: "https://fontsource.org/fonts/lexend",
              target: "_blank",
              type: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Download font `);
                } else {
                  return [
                    createTextVNode(" Download font ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "ff-display flex h-full flex-col" }, [
                createVNode("div", { class: "title" }, "Lexend"),
                createVNode("div", { class: "variants flex gap-5" }, [
                  createVNode("div", { class: "regular" }, "Regular"),
                  createVNode("div", { class: "medium" }, "Medium"),
                  createVNode("div", { class: "bold" }, "Bold")
                ]),
                createVNode("div", { class: "demo" }, " Lorem ipsum dolor sit amet consectetur adipiscing elit at erat consectetur ultricies sapien facilisi euismod duis mauris a sed quam aliquet dui eros sit lacus vitae ut viverra "),
                createVNode("div", { class: "footer flex grow items-end justify-end" }, [
                  createVNode(unref(Button), {
                    tag: "a",
                    href: "https://fontsource.org/fonts/lexend",
                    target: "_blank",
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Download font ")
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
      _push(ssrRenderComponent(unref(NCard), { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ff-default flex h-full flex-col" data-v-c7a78013${_scopeId}><div class="title" data-v-c7a78013${_scopeId}>Public Sans</div><div class="variants flex gap-5" data-v-c7a78013${_scopeId}><div class="regular" data-v-c7a78013${_scopeId}>Regular</div><div class="medium" data-v-c7a78013${_scopeId}>Medium</div><div class="bold" data-v-c7a78013${_scopeId}>Bold</div></div><div class="demo" data-v-c7a78013${_scopeId}> Lorem ipsum dolor sit amet consectetur adipiscing elit at erat consectetur ultricies sapien facilisi euismod duis mauris a sed quam aliquet dui eros sit lacus vitae ut viverra </div><div class="footer flex grow items-end justify-end" data-v-c7a78013${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              tag: "a",
              href: "https://fontsource.org/fonts/public-sans",
              target: "_blank",
              type: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Download font `);
                } else {
                  return [
                    createTextVNode(" Download font ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "ff-default flex h-full flex-col" }, [
                createVNode("div", { class: "title" }, "Public Sans"),
                createVNode("div", { class: "variants flex gap-5" }, [
                  createVNode("div", { class: "regular" }, "Regular"),
                  createVNode("div", { class: "medium" }, "Medium"),
                  createVNode("div", { class: "bold" }, "Bold")
                ]),
                createVNode("div", { class: "demo" }, " Lorem ipsum dolor sit amet consectetur adipiscing elit at erat consectetur ultricies sapien facilisi euismod duis mauris a sed quam aliquet dui eros sit lacus vitae ut viverra "),
                createVNode("div", { class: "footer flex grow items-end justify-end" }, [
                  createVNode(unref(Button), {
                    tag: "a",
                    href: "https://fontsource.org/fonts/public-sans",
                    target: "_blank",
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Download font ")
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
      _push(ssrRenderComponent(unref(NCard), { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ff-mono flex h-full flex-col" data-v-c7a78013${_scopeId}><div class="title" data-v-c7a78013${_scopeId}>JetBrains Mono</div><div class="variants flex gap-5" data-v-c7a78013${_scopeId}><div class="regular" data-v-c7a78013${_scopeId}>Regular</div><div class="medium" data-v-c7a78013${_scopeId}>Medium</div><div class="bold" data-v-c7a78013${_scopeId}>Bold</div></div><div class="demo" data-v-c7a78013${_scopeId}> Lorem ipsum dolor sit amet consectetur adipiscing elit at erat consectetur ultricies sapien facilisi euismod duis mauris a sed quam aliquet dui eros sit lacus vitae ut viverra </div><div class="footer flex grow items-end justify-end" data-v-c7a78013${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              tag: "a",
              href: "https://fontsource.org/fonts/jetbrains-mono",
              target: "_blank",
              type: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Download font `);
                } else {
                  return [
                    createTextVNode(" Download font ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "ff-mono flex h-full flex-col" }, [
                createVNode("div", { class: "title" }, "JetBrains Mono"),
                createVNode("div", { class: "variants flex gap-5" }, [
                  createVNode("div", { class: "regular" }, "Regular"),
                  createVNode("div", { class: "medium" }, "Medium"),
                  createVNode("div", { class: "bold" }, "Bold")
                ]),
                createVNode("div", { class: "demo" }, " Lorem ipsum dolor sit amet consectetur adipiscing elit at erat consectetur ultricies sapien facilisi euismod duis mauris a sed quam aliquet dui eros sit lacus vitae ut viverra "),
                createVNode("div", { class: "footer flex grow items-end justify-end" }, [
                  createVNode(unref(Button), {
                    tag: "a",
                    href: "https://fontsource.org/fonts/jetbrains-mono",
                    target: "_blank",
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Download font ")
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
      _push(`</div><div class="list-section mt-5" data-v-c7a78013>`);
      _push(ssrRenderComponent(unref(NCard), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "max-w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<table data-v-c7a78013${_scopeId2}><thead data-v-c7a78013${_scopeId2}><tr data-v-c7a78013${_scopeId2}><th data-v-c7a78013${_scopeId2}>tag</th><th data-v-c7a78013${_scopeId2}>family</th><th data-v-c7a78013${_scopeId2}>size</th><th data-v-c7a78013${_scopeId2}>weight</th><th data-v-c7a78013${_scopeId2}>letter spacing</th><th data-v-c7a78013${_scopeId2}>example</th></tr></thead><tbody data-v-c7a78013${_scopeId2}><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>h1</td><td data-v-c7a78013${_scopeId2}>Lexend</td><td data-v-c7a78013${_scopeId2}>30px</td><td data-v-c7a78013${_scopeId2}>700</td><td data-v-c7a78013${_scopeId2}>-0.025em</td><td data-v-c7a78013${_scopeId2}><h1 data-v-c7a78013${_scopeId2}>Heading 1</h1></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>h2</td><td data-v-c7a78013${_scopeId2}>Lexend</td><td data-v-c7a78013${_scopeId2}>26px</td><td data-v-c7a78013${_scopeId2}>700</td><td data-v-c7a78013${_scopeId2}>-0.025em</td><td data-v-c7a78013${_scopeId2}><h2 data-v-c7a78013${_scopeId2}>Heading 2</h2></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>h3</td><td data-v-c7a78013${_scopeId2}>Lexend</td><td data-v-c7a78013${_scopeId2}>22px</td><td data-v-c7a78013${_scopeId2}>700</td><td data-v-c7a78013${_scopeId2}>-0.025em</td><td data-v-c7a78013${_scopeId2}><h3 data-v-c7a78013${_scopeId2}>Heading 3</h3></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>h4</td><td data-v-c7a78013${_scopeId2}>Lexend</td><td data-v-c7a78013${_scopeId2}>18px</td><td data-v-c7a78013${_scopeId2}>500</td><td data-v-c7a78013${_scopeId2}>-0.025em</td><td data-v-c7a78013${_scopeId2}><h4 data-v-c7a78013${_scopeId2}>Heading 4</h4></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>h5</td><td data-v-c7a78013${_scopeId2}>Lexend</td><td data-v-c7a78013${_scopeId2}>14px</td><td data-v-c7a78013${_scopeId2}>700</td><td data-v-c7a78013${_scopeId2}>-0.025em</td><td data-v-c7a78013${_scopeId2}><h5 data-v-c7a78013${_scopeId2}>Heading 5</h5></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>h6</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>12px</td><td data-v-c7a78013${_scopeId2}>500</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><h6 data-v-c7a78013${_scopeId2}>Heading 6</h6></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>p</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><p data-v-c7a78013${_scopeId2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>code</td><td data-v-c7a78013${_scopeId2}>JetBrains Mono</td><td data-v-c7a78013${_scopeId2}>13px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><code data-v-c7a78013${_scopeId2}>import { ref } from &quot;vue&quot;</code></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>blockquote</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><blockquote data-v-c7a78013${_scopeId2}><p data-v-c7a78013${_scopeId2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p><small data-v-c7a78013${_scopeId2}>Lorem ipsum, Lorem ipsum</small></blockquote></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>dl, dt, dd</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400 / 700</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><dl data-v-c7a78013${_scopeId2}><dt data-v-c7a78013${_scopeId2}>Definition term</dt><dd data-v-c7a78013${_scopeId2}>This is the definition description</dd><dt data-v-c7a78013${_scopeId2}>Another definition term</dt><dd data-v-c7a78013${_scopeId2}>This is another definition description</dd></dl></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>ul, li</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><ul dir="ltr" data-v-c7a78013${_scopeId2}><li data-v-c7a78013${_scopeId2}>List Item</li><li data-v-c7a78013${_scopeId2}> List Item <ul data-v-c7a78013${_scopeId2}><li data-v-c7a78013${_scopeId2}>List Item</li></ul></li></ul></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>ol, li</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><ol dir="ltr" data-v-c7a78013${_scopeId2}><li data-v-c7a78013${_scopeId2}>List Item</li><li data-v-c7a78013${_scopeId2}> List Item <ol data-v-c7a78013${_scopeId2}><li data-v-c7a78013${_scopeId2}>List Item</li></ol></li></ol></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>a</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><a data-v-c7a78013${_scopeId2}>link</a></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>abbr</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}><abbr title="HyperText Markup Language" data-v-c7a78013${_scopeId2}>HTML</abbr></td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>s</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}> a <s data-v-c7a78013${_scopeId2}>strike-through</s> text </td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>u</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}> an <u data-v-c7a78013${_scopeId2}>underlined</u> text </td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>small</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>80% / 12px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}> a <small data-v-c7a78013${_scopeId2}>small</small> text </td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>strong</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>700 / bolder</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}> a <strong data-v-c7a78013${_scopeId2}>strong</strong> text </td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>em</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}> an <em data-v-c7a78013${_scopeId2}>italic</em> text </td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>sup</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>75% / 11px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}> a <sup data-v-c7a78013${_scopeId2}>super</sup> text </td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>sub</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>75% / 11px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}> a <sub data-v-c7a78013${_scopeId2}>sub</sub> text </td></tr><tr data-v-c7a78013${_scopeId2}><td data-v-c7a78013${_scopeId2}>mark</td><td data-v-c7a78013${_scopeId2}>Public Sans</td><td data-v-c7a78013${_scopeId2}>15px</td><td data-v-c7a78013${_scopeId2}>400</td><td data-v-c7a78013${_scopeId2}>normal</td><td data-v-c7a78013${_scopeId2}> a <mark data-v-c7a78013${_scopeId2}>highlighted</mark> text </td></tr></tbody></table>`);
                } else {
                  return [
                    createVNode("table", null, [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", null, "tag"),
                          createVNode("th", null, "family"),
                          createVNode("th", null, "size"),
                          createVNode("th", null, "weight"),
                          createVNode("th", null, "letter spacing"),
                          createVNode("th", null, "example")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        createVNode("tr", null, [
                          createVNode("td", null, "h1"),
                          createVNode("td", null, "Lexend"),
                          createVNode("td", null, "30px"),
                          createVNode("td", null, "700"),
                          createVNode("td", null, "-0.025em"),
                          createVNode("td", null, [
                            createVNode("h1", null, "Heading 1")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "h2"),
                          createVNode("td", null, "Lexend"),
                          createVNode("td", null, "26px"),
                          createVNode("td", null, "700"),
                          createVNode("td", null, "-0.025em"),
                          createVNode("td", null, [
                            createVNode("h2", null, "Heading 2")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "h3"),
                          createVNode("td", null, "Lexend"),
                          createVNode("td", null, "22px"),
                          createVNode("td", null, "700"),
                          createVNode("td", null, "-0.025em"),
                          createVNode("td", null, [
                            createVNode("h3", null, "Heading 3")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "h4"),
                          createVNode("td", null, "Lexend"),
                          createVNode("td", null, "18px"),
                          createVNode("td", null, "500"),
                          createVNode("td", null, "-0.025em"),
                          createVNode("td", null, [
                            createVNode("h4", null, "Heading 4")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "h5"),
                          createVNode("td", null, "Lexend"),
                          createVNode("td", null, "14px"),
                          createVNode("td", null, "700"),
                          createVNode("td", null, "-0.025em"),
                          createVNode("td", null, [
                            createVNode("h5", null, "Heading 5")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "h6"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "12px"),
                          createVNode("td", null, "500"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("h6", null, "Heading 6")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "p"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "code"),
                          createVNode("td", null, "JetBrains Mono"),
                          createVNode("td", null, "13px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("code", null, 'import { ref } from "vue"')
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "blockquote"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("blockquote", null, [
                              createVNode("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),
                              createVNode("small", null, "Lorem ipsum, Lorem ipsum")
                            ])
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "dl, dt, dd"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400 / 700"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("dl", null, [
                              createVNode("dt", null, "Definition term"),
                              createVNode("dd", null, "This is the definition description"),
                              createVNode("dt", null, "Another definition term"),
                              createVNode("dd", null, "This is another definition description")
                            ])
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "ul, li"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("ul", { dir: "ltr" }, [
                              createVNode("li", null, "List Item"),
                              createVNode("li", null, [
                                createTextVNode(" List Item "),
                                createVNode("ul", null, [
                                  createVNode("li", null, "List Item")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "ol, li"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("ol", { dir: "ltr" }, [
                              createVNode("li", null, "List Item"),
                              createVNode("li", null, [
                                createTextVNode(" List Item "),
                                createVNode("ol", null, [
                                  createVNode("li", null, "List Item")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "a"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("a", null, "link")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "abbr"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createVNode("abbr", { title: "HyperText Markup Language" }, "HTML")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "s"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createTextVNode(" a "),
                            createVNode("s", null, "strike-through"),
                            createTextVNode(" text ")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "u"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createTextVNode(" an "),
                            createVNode("u", null, "underlined"),
                            createTextVNode(" text ")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "small"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "80% / 12px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createTextVNode(" a "),
                            createVNode("small", null, "small"),
                            createTextVNode(" text ")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "strong"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "700 / bolder"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createTextVNode(" a "),
                            createVNode("strong", null, "strong"),
                            createTextVNode(" text ")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "em"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createTextVNode(" an "),
                            createVNode("em", null, "italic"),
                            createTextVNode(" text ")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "sup"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "75% / 11px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createTextVNode(" a "),
                            createVNode("sup", null, "super"),
                            createTextVNode(" text ")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "sub"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "75% / 11px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createTextVNode(" a "),
                            createVNode("sub", null, "sub"),
                            createTextVNode(" text ")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "mark"),
                          createVNode("td", null, "Public Sans"),
                          createVNode("td", null, "15px"),
                          createVNode("td", null, "400"),
                          createVNode("td", null, "normal"),
                          createVNode("td", null, [
                            createTextVNode(" a "),
                            createVNode("mark", null, "highlighted"),
                            createTextVNode(" text ")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Scrollbar), {
                "x-scrollable": "",
                class: "max-w-full"
              }, {
                default: withCtx(() => [
                  createVNode("table", null, [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", null, "tag"),
                        createVNode("th", null, "family"),
                        createVNode("th", null, "size"),
                        createVNode("th", null, "weight"),
                        createVNode("th", null, "letter spacing"),
                        createVNode("th", null, "example")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", null, [
                        createVNode("td", null, "h1"),
                        createVNode("td", null, "Lexend"),
                        createVNode("td", null, "30px"),
                        createVNode("td", null, "700"),
                        createVNode("td", null, "-0.025em"),
                        createVNode("td", null, [
                          createVNode("h1", null, "Heading 1")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "h2"),
                        createVNode("td", null, "Lexend"),
                        createVNode("td", null, "26px"),
                        createVNode("td", null, "700"),
                        createVNode("td", null, "-0.025em"),
                        createVNode("td", null, [
                          createVNode("h2", null, "Heading 2")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "h3"),
                        createVNode("td", null, "Lexend"),
                        createVNode("td", null, "22px"),
                        createVNode("td", null, "700"),
                        createVNode("td", null, "-0.025em"),
                        createVNode("td", null, [
                          createVNode("h3", null, "Heading 3")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "h4"),
                        createVNode("td", null, "Lexend"),
                        createVNode("td", null, "18px"),
                        createVNode("td", null, "500"),
                        createVNode("td", null, "-0.025em"),
                        createVNode("td", null, [
                          createVNode("h4", null, "Heading 4")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "h5"),
                        createVNode("td", null, "Lexend"),
                        createVNode("td", null, "14px"),
                        createVNode("td", null, "700"),
                        createVNode("td", null, "-0.025em"),
                        createVNode("td", null, [
                          createVNode("h5", null, "Heading 5")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "h6"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "12px"),
                        createVNode("td", null, "500"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("h6", null, "Heading 6")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "p"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "code"),
                        createVNode("td", null, "JetBrains Mono"),
                        createVNode("td", null, "13px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("code", null, 'import { ref } from "vue"')
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "blockquote"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("blockquote", null, [
                            createVNode("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),
                            createVNode("small", null, "Lorem ipsum, Lorem ipsum")
                          ])
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "dl, dt, dd"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400 / 700"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("dl", null, [
                            createVNode("dt", null, "Definition term"),
                            createVNode("dd", null, "This is the definition description"),
                            createVNode("dt", null, "Another definition term"),
                            createVNode("dd", null, "This is another definition description")
                          ])
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "ul, li"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("ul", { dir: "ltr" }, [
                            createVNode("li", null, "List Item"),
                            createVNode("li", null, [
                              createTextVNode(" List Item "),
                              createVNode("ul", null, [
                                createVNode("li", null, "List Item")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "ol, li"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("ol", { dir: "ltr" }, [
                            createVNode("li", null, "List Item"),
                            createVNode("li", null, [
                              createTextVNode(" List Item "),
                              createVNode("ol", null, [
                                createVNode("li", null, "List Item")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "a"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("a", null, "link")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "abbr"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createVNode("abbr", { title: "HyperText Markup Language" }, "HTML")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "s"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createTextVNode(" a "),
                          createVNode("s", null, "strike-through"),
                          createTextVNode(" text ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "u"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createTextVNode(" an "),
                          createVNode("u", null, "underlined"),
                          createTextVNode(" text ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "small"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "80% / 12px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createTextVNode(" a "),
                          createVNode("small", null, "small"),
                          createTextVNode(" text ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "strong"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "700 / bolder"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createTextVNode(" a "),
                          createVNode("strong", null, "strong"),
                          createTextVNode(" text ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "em"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createTextVNode(" an "),
                          createVNode("em", null, "italic"),
                          createTextVNode(" text ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "sup"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "75% / 11px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createTextVNode(" a "),
                          createVNode("sup", null, "super"),
                          createTextVNode(" text ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "sub"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "75% / 11px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createTextVNode(" a "),
                          createVNode("sub", null, "sub"),
                          createTextVNode(" text ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, "mark"),
                        createVNode("td", null, "Public Sans"),
                        createVNode("td", null, "15px"),
                        createVNode("td", null, "400"),
                        createVNode("td", null, "normal"),
                        createVNode("td", null, [
                          createTextVNode(" a "),
                          createVNode("mark", null, "highlighted"),
                          createTextVNode(" text ")
                        ])
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Typography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Typography = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7a78013"]]);

export { Typography as default };
//# sourceMappingURL=Typography-B5jX63ZG.mjs.map
