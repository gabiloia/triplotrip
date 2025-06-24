import { defineComponent, ref, unref, mergeProps, createSlots, withCtx, createVNode, createBlock, createCommentVNode, renderSlot, openBlock, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { a as _export_sfc, N as NCard, af as Scrollbar, _ as _sfc_main$o } from './server.mjs';
import { L as LtrContext } from './LtrContext-CUHPU62m.mjs';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { N as NCollapse, a as NCollapseItem } from './CollapseItem-BML65SQa.mjs';

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("html", html);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("css", css);
function resetIndent(el) {
  var _a;
  if (el) {
    let lines = (_a = el.innerHTML) == null ? void 0 : _a.split("\n");
    if (lines == null ? void 0 : lines.length) {
      if (lines[0] === "") {
        lines.shift();
      }
      const matches = /^\s+/.exec(lines[0]);
      const indentation = matches !== null ? matches[0] : null;
      if (indentation) {
        lines = lines.map((line) => {
          line = line.replace(indentation, "");
          return line.replace(/\t/g, "    ");
        });
        el.innerHTML = lines.join("\n").trim();
      }
    }
  }
}
const CodeIcon = "carbon:code";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardCodeExample",
  __ssrInlineRender: true,
  setup(__props) {
    const refHTML = ref(null);
    const refJS = ref(null);
    const refCSS = ref(null);
    const loaded = ref({
      html: false,
      js: false,
      css: false
    });
    function codeInit(code, lang) {
      let el = null;
      if (lang === "html") {
        el = refHTML.value;
      }
      if (lang === "js") {
        el = refJS.value;
      }
      if (lang === "css") {
        el = refCSS.value;
      }
      if (el) {
        el.innerHTML = hljs.highlightAuto(code).value;
        resetIndent(el);
        loaded.value[lang] = true;
      }
    }
    function html2(code) {
      if (code) {
        codeInit(code, "html");
      }
    }
    function js(code) {
      if (code) {
        codeInit(code, "js");
      }
    }
    function css2(code) {
      if (code) {
        codeInit(code, "css");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({ class: "card" }, _attrs), createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-6ca9a665${_scopeId}>`);
            if (_ctx.$slots.description) {
              _push2(`<div class="description" data-v-6ca9a665${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "description"
                }, [
                  renderSlot(_ctx.$slots, "description", {}, void 0, true)
                ])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ];
          }
        }),
        _: 2
      }, [
        _ctx.$slots.html || _ctx.$slots.js || _ctx.$slots.css || _ctx.$slots.code ? {
          name: "action",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(NCollapse), null, {
                "header-extra": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$o, { name: CodeIcon }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$o, { name: CodeIcon })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(NCollapseItem), {
                      title: "Code",
                      name: "code"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(LtrContext, { class: "code-container" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Scrollbar), {
                                  "x-scrollable": "",
                                  class: "max-h-96 max-w-full"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (_ctx.$slots.html) {
                                        ssrRenderSlot(_ctx.$slots, "html", {}, null, _push6, _parent6, _scopeId5);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (_ctx.$slots.js) {
                                        ssrRenderSlot(_ctx.$slots, "js", {}, null, _push6, _parent6, _scopeId5);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (_ctx.$slots.css) {
                                        ssrRenderSlot(_ctx.$slots, "css", {}, null, _push6, _parent6, _scopeId5);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      ssrRenderSlot(_ctx.$slots, "code", {
                                        html: html2,
                                        js,
                                        css: css2
                                      }, null, _push6, _parent6, _scopeId5);
                                      _push6(`<div style="${ssrRenderStyle(loaded.value.html ? null : { display: "none" })}" class="code-box" data-v-6ca9a665${_scopeId5}><div class="label" data-v-6ca9a665${_scopeId5}>Template</div><pre data-v-6ca9a665${_scopeId5}></pre></div><div style="${ssrRenderStyle(loaded.value.js ? null : { display: "none" })}" class="code-box" data-v-6ca9a665${_scopeId5}><div class="label" data-v-6ca9a665${_scopeId5}>Script</div><pre data-v-6ca9a665${_scopeId5}></pre></div><div style="${ssrRenderStyle(loaded.value.css ? null : { display: "none" })}" class="code-box" data-v-6ca9a665${_scopeId5}><div class="label" data-v-6ca9a665${_scopeId5}>Style</div><pre data-v-6ca9a665${_scopeId5}></pre></div>`);
                                    } else {
                                      return [
                                        _ctx.$slots.html ? renderSlot(_ctx.$slots, "html", { key: 0 }, void 0, true) : createCommentVNode("", true),
                                        _ctx.$slots.js ? renderSlot(_ctx.$slots, "js", { key: 1 }, void 0, true) : createCommentVNode("", true),
                                        _ctx.$slots.css ? renderSlot(_ctx.$slots, "css", { key: 2 }, void 0, true) : createCommentVNode("", true),
                                        renderSlot(_ctx.$slots, "code", {
                                          html: html2,
                                          js,
                                          css: css2
                                        }, void 0, true),
                                        withDirectives(createVNode("div", { class: "code-box" }, [
                                          createVNode("div", { class: "label" }, "Template"),
                                          createVNode("pre", {
                                            ref_key: "refHTML",
                                            ref: refHTML
                                          }, null, 512)
                                        ], 512), [
                                          [vShow, loaded.value.html]
                                        ]),
                                        withDirectives(createVNode("div", { class: "code-box" }, [
                                          createVNode("div", { class: "label" }, "Script"),
                                          createVNode("pre", {
                                            ref_key: "refJS",
                                            ref: refJS
                                          }, null, 512)
                                        ], 512), [
                                          [vShow, loaded.value.js]
                                        ]),
                                        withDirectives(createVNode("div", { class: "code-box" }, [
                                          createVNode("div", { class: "label" }, "Style"),
                                          createVNode("pre", {
                                            ref_key: "refCSS",
                                            ref: refCSS
                                          }, null, 512)
                                        ], 512), [
                                          [vShow, loaded.value.css]
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(Scrollbar), {
                                    "x-scrollable": "",
                                    class: "max-h-96 max-w-full"
                                  }, {
                                    default: withCtx(() => [
                                      _ctx.$slots.html ? renderSlot(_ctx.$slots, "html", { key: 0 }, void 0, true) : createCommentVNode("", true),
                                      _ctx.$slots.js ? renderSlot(_ctx.$slots, "js", { key: 1 }, void 0, true) : createCommentVNode("", true),
                                      _ctx.$slots.css ? renderSlot(_ctx.$slots, "css", { key: 2 }, void 0, true) : createCommentVNode("", true),
                                      renderSlot(_ctx.$slots, "code", {
                                        html: html2,
                                        js,
                                        css: css2
                                      }, void 0, true),
                                      withDirectives(createVNode("div", { class: "code-box" }, [
                                        createVNode("div", { class: "label" }, "Template"),
                                        createVNode("pre", {
                                          ref_key: "refHTML",
                                          ref: refHTML
                                        }, null, 512)
                                      ], 512), [
                                        [vShow, loaded.value.html]
                                      ]),
                                      withDirectives(createVNode("div", { class: "code-box" }, [
                                        createVNode("div", { class: "label" }, "Script"),
                                        createVNode("pre", {
                                          ref_key: "refJS",
                                          ref: refJS
                                        }, null, 512)
                                      ], 512), [
                                        [vShow, loaded.value.js]
                                      ]),
                                      withDirectives(createVNode("div", { class: "code-box" }, [
                                        createVNode("div", { class: "label" }, "Style"),
                                        createVNode("pre", {
                                          ref_key: "refCSS",
                                          ref: refCSS
                                        }, null, 512)
                                      ], 512), [
                                        [vShow, loaded.value.css]
                                      ])
                                    ]),
                                    _: 3
                                  })
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(LtrContext, { class: "code-container" }, {
                              default: withCtx(() => [
                                createVNode(unref(Scrollbar), {
                                  "x-scrollable": "",
                                  class: "max-h-96 max-w-full"
                                }, {
                                  default: withCtx(() => [
                                    _ctx.$slots.html ? renderSlot(_ctx.$slots, "html", { key: 0 }, void 0, true) : createCommentVNode("", true),
                                    _ctx.$slots.js ? renderSlot(_ctx.$slots, "js", { key: 1 }, void 0, true) : createCommentVNode("", true),
                                    _ctx.$slots.css ? renderSlot(_ctx.$slots, "css", { key: 2 }, void 0, true) : createCommentVNode("", true),
                                    renderSlot(_ctx.$slots, "code", {
                                      html: html2,
                                      js,
                                      css: css2
                                    }, void 0, true),
                                    withDirectives(createVNode("div", { class: "code-box" }, [
                                      createVNode("div", { class: "label" }, "Template"),
                                      createVNode("pre", {
                                        ref_key: "refHTML",
                                        ref: refHTML
                                      }, null, 512)
                                    ], 512), [
                                      [vShow, loaded.value.html]
                                    ]),
                                    withDirectives(createVNode("div", { class: "code-box" }, [
                                      createVNode("div", { class: "label" }, "Script"),
                                      createVNode("pre", {
                                        ref_key: "refJS",
                                        ref: refJS
                                      }, null, 512)
                                    ], 512), [
                                      [vShow, loaded.value.js]
                                    ]),
                                    withDirectives(createVNode("div", { class: "code-box" }, [
                                      createVNode("div", { class: "label" }, "Style"),
                                      createVNode("pre", {
                                        ref_key: "refCSS",
                                        ref: refCSS
                                      }, null, 512)
                                    ], 512), [
                                      [vShow, loaded.value.css]
                                    ])
                                  ]),
                                  _: 3
                                })
                              ]),
                              _: 3
                            })
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(NCollapseItem), {
                        title: "Code",
                        name: "code"
                      }, {
                        default: withCtx(() => [
                          createVNode(LtrContext, { class: "code-container" }, {
                            default: withCtx(() => [
                              createVNode(unref(Scrollbar), {
                                "x-scrollable": "",
                                class: "max-h-96 max-w-full"
                              }, {
                                default: withCtx(() => [
                                  _ctx.$slots.html ? renderSlot(_ctx.$slots, "html", { key: 0 }, void 0, true) : createCommentVNode("", true),
                                  _ctx.$slots.js ? renderSlot(_ctx.$slots, "js", { key: 1 }, void 0, true) : createCommentVNode("", true),
                                  _ctx.$slots.css ? renderSlot(_ctx.$slots, "css", { key: 2 }, void 0, true) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "code", {
                                    html: html2,
                                    js,
                                    css: css2
                                  }, void 0, true),
                                  withDirectives(createVNode("div", { class: "code-box" }, [
                                    createVNode("div", { class: "label" }, "Template"),
                                    createVNode("pre", {
                                      ref_key: "refHTML",
                                      ref: refHTML
                                    }, null, 512)
                                  ], 512), [
                                    [vShow, loaded.value.html]
                                  ]),
                                  withDirectives(createVNode("div", { class: "code-box" }, [
                                    createVNode("div", { class: "label" }, "Script"),
                                    createVNode("pre", {
                                      ref_key: "refJS",
                                      ref: refJS
                                    }, null, 512)
                                  ], 512), [
                                    [vShow, loaded.value.js]
                                  ]),
                                  withDirectives(createVNode("div", { class: "code-box" }, [
                                    createVNode("div", { class: "label" }, "Style"),
                                    createVNode("pre", {
                                      ref_key: "refCSS",
                                      ref: refCSS
                                    }, null, 512)
                                  ], 512), [
                                    [vShow, loaded.value.css]
                                  ])
                                ]),
                                _: 3
                              })
                            ]),
                            _: 3
                          })
                        ]),
                        _: 3
                      })
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(NCollapse), null, {
                  "header-extra": withCtx(() => [
                    createVNode(_sfc_main$o, { name: CodeIcon })
                  ]),
                  default: withCtx(() => [
                    createVNode(unref(NCollapseItem), {
                      title: "Code",
                      name: "code"
                    }, {
                      default: withCtx(() => [
                        createVNode(LtrContext, { class: "code-container" }, {
                          default: withCtx(() => [
                            createVNode(unref(Scrollbar), {
                              "x-scrollable": "",
                              class: "max-h-96 max-w-full"
                            }, {
                              default: withCtx(() => [
                                _ctx.$slots.html ? renderSlot(_ctx.$slots, "html", { key: 0 }, void 0, true) : createCommentVNode("", true),
                                _ctx.$slots.js ? renderSlot(_ctx.$slots, "js", { key: 1 }, void 0, true) : createCommentVNode("", true),
                                _ctx.$slots.css ? renderSlot(_ctx.$slots, "css", { key: 2 }, void 0, true) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, "code", {
                                  html: html2,
                                  js,
                                  css: css2
                                }, void 0, true),
                                withDirectives(createVNode("div", { class: "code-box" }, [
                                  createVNode("div", { class: "label" }, "Template"),
                                  createVNode("pre", {
                                    ref_key: "refHTML",
                                    ref: refHTML
                                  }, null, 512)
                                ], 512), [
                                  [vShow, loaded.value.html]
                                ]),
                                withDirectives(createVNode("div", { class: "code-box" }, [
                                  createVNode("div", { class: "label" }, "Script"),
                                  createVNode("pre", {
                                    ref_key: "refJS",
                                    ref: refJS
                                  }, null, 512)
                                ], 512), [
                                  [vShow, loaded.value.js]
                                ]),
                                withDirectives(createVNode("div", { class: "code-box" }, [
                                  createVNode("div", { class: "label" }, "Style"),
                                  createVNode("pre", {
                                    ref_key: "refCSS",
                                    ref: refCSS
                                  }, null, 512)
                                ], 512), [
                                  [vShow, loaded.value.css]
                                ])
                              ]),
                              _: 3
                            })
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/CardCodeExample.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ca9a665"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CardCodeExample-CeKaPIo-.mjs.map
