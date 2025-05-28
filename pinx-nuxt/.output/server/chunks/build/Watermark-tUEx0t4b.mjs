import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, watchEffect, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { al as Scrollbar, _ as _sfc_main$s, u as useConfig, s as useTheme, bU as watermarkLight, l as c$1, j as cB, n as cNotM, k as cM } from './server.mjs';
import { onFontsReady } from 'vooks';
import { N as NTable } from './Table-lFpRjk1j.mjs';
import { N as NSwitch } from './Switch-Ds1OeKkl.mjs';
import './LtrContext-DmPOw2ck.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
import 'seemly';
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

const style = c$1([cB("watermark-container", `
 position: relative;
 `, [cNotM("selectable", `
 user-select: none;
 -webkit-user-select: none;
 `), cM("global-rotate", `
 overflow: hidden;
 `), cM("fullscreen", `
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 position: fixed;
 `)]), cB("watermark", `
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 background-repeat: repeat;
 `, [cM("fullscreen", `
 position: fixed;
 `), cM("global-rotate", `
 position: absolute;
 height: max(284vh, 284vw);
 width: max(284vh, 284vw);
 `)])]);
const watermarkProps = Object.assign(Object.assign({}, useTheme.props), {
  debug: Boolean,
  cross: Boolean,
  fullscreen: Boolean,
  width: {
    type: Number,
    default: 32
  },
  height: {
    type: Number,
    default: 32
  },
  zIndex: {
    type: Number,
    default: 10
  },
  xGap: {
    type: Number,
    default: 0
  },
  yGap: {
    type: Number,
    default: 0
  },
  yOffset: {
    type: Number,
    default: 0
  },
  xOffset: {
    type: Number,
    default: 0
  },
  rotate: {
    type: Number,
    default: 0
  },
  textAlign: {
    type: String,
    default: "left"
  },
  image: String,
  imageOpacity: {
    type: Number,
    default: 1
  },
  imageHeight: Number,
  imageWidth: Number,
  content: String,
  selectable: {
    type: Boolean,
    default: true
  },
  fontSize: {
    type: Number,
    default: 14
  },
  fontFamily: String,
  fontStyle: {
    type: String,
    default: "normal"
  },
  fontVariant: {
    type: String,
    default: ""
  },
  fontWeight: {
    type: Number,
    default: 400
  },
  fontColor: {
    type: String,
    default: "rgba(128, 128, 128, .3)"
  },
  fontStretch: {
    type: String,
    default: ""
  },
  lineHeight: {
    type: Number,
    default: 14
  },
  globalRotate: {
    type: Number,
    default: 0
  }
});
const NWatermark = defineComponent({
  name: "Watermark",
  props: watermarkProps,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    useTheme("Watermark", "-watermark", style, watermarkLight, props, mergedClsPrefixRef);
    const base64UrlRef = ref("");
    const fontsReadyRef = ref(false);
    onFontsReady(() => fontsReadyRef.value = true);
    watchEffect(() => {
      return;
    });
    return () => {
      var _a;
      const {
        globalRotate,
        fullscreen,
        zIndex
      } = props;
      const mergedClsPrefix = mergedClsPrefixRef.value;
      const isFullScreenGlobalRotate = globalRotate !== 0 && fullscreen;
      const rotatedImageOffset = "max(142vh, 142vw)";
      const watermarkNode = h("div", {
        class: [`${mergedClsPrefix}-watermark`, globalRotate !== 0 && `${mergedClsPrefix}-watermark--global-rotate`, fullscreen && `${mergedClsPrefix}-watermark--fullscreen`],
        style: {
          transform: globalRotate ? `translateX(-50%) translateY(-50%) rotate(${globalRotate}deg)` : void 0,
          zIndex: isFullScreenGlobalRotate ? void 0 : zIndex,
          backgroundSize: `${props.xGap + props.width}px`,
          backgroundPosition: globalRotate === 0 ? props.cross ? `${props.width / 2}px ${props.height / 2}px, 0 0` : "" : props.cross ? `calc(${rotatedImageOffset} + ${props.width / 2}px) calc(${rotatedImageOffset} + ${props.height / 2}px), ${rotatedImageOffset} ${rotatedImageOffset}` : rotatedImageOffset,
          backgroundImage: props.cross ? `url(${base64UrlRef.value}), url(${base64UrlRef.value})` : `url(${base64UrlRef.value})`
        }
      });
      if (props.fullscreen && !globalRotate) return watermarkNode;
      return h("div", {
        class: [`${mergedClsPrefix}-watermark-container`, globalRotate !== 0 && `${mergedClsPrefix}-watermark-container--global-rotate`, fullscreen && `${mergedClsPrefix}-watermark-container--fullscreen`, props.selectable && `${mergedClsPrefix}-watermark-container--selectable`],
        style: {
          zIndex: isFullScreenGlobalRotate ? zIndex : void 0
        }
      }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots), watermarkNode);
    };
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Watermark",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Scrollbar), { style: { "max-height": "100%" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="page-header"${_scopeId}><div class="title"${_scopeId}>Watermark</div><div class="links"${_scopeId}><a href="https://www.naiveui.com/en-US/light/components/watermark" target="_blank" alt="docs" rel="nofollow noopener noreferrer"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$s, {
              name: ExternalIcon,
              size: 16
            }, null, _parent2, _scopeId));
            _push2(` docs </a></div></div><div class="components-list"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
              code: withCtx(({ html }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(html(`
						<n-watermark
							content="Watermark"
							cross
							selectable
							:font-size="16"
							:line-height="16"
							:width="192"
							:height="128"
							:x-offset="12"
							:y-offset="28"
							:rotate="-15"
						>
							<n-table :bordered="false" :single-line="false">
								<thead>
									<tr>
										<th>...</th>
										<th>...</th>
										<th>...</th>
										<th>...</th>
										<th>...</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
								</tbody>
							</n-table>
						</n-watermark>
						`))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(html(`
						<n-watermark
							content="Watermark"
							cross
							selectable
							:font-size="16"
							:line-height="16"
							:width="192"
							:height="128"
							:x-offset="12"
							:y-offset="28"
							:rotate="-15"
						>
							<n-table :bordered="false" :single-line="false">
								<thead>
									<tr>
										<th>...</th>
										<th>...</th>
										<th>...</th>
										<th>...</th>
										<th>...</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
								</tbody>
							</n-table>
						</n-watermark>
						`)), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NWatermark), {
                    content: "Watermark",
                    cross: "",
                    selectable: "",
                    "font-size": 16,
                    "line-height": 16,
                    width: 192,
                    height: 128,
                    "x-offset": 12,
                    "y-offset": 28,
                    rotate: -15
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NTable), {
                          bordered: false,
                          "single-line": false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<thead${_scopeId4}><tr${_scopeId4}><th${_scopeId4}>...</th><th${_scopeId4}>...</th><th${_scopeId4}>...</th><th${_scopeId4}>...</th><th${_scopeId4}>...</th></tr></thead><tbody${_scopeId4}><tr${_scopeId4}><td${_scopeId4}>...</td><td${_scopeId4}>...</td><td${_scopeId4}>...</td><td${_scopeId4}>...</td><td${_scopeId4}>...</td></tr><tr${_scopeId4}><td${_scopeId4}>...</td><td${_scopeId4}>...</td><td${_scopeId4}>...</td><td${_scopeId4}>...</td><td${_scopeId4}>...</td></tr></tbody>`);
                            } else {
                              return [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", null, "..."),
                                    createVNode("th", null, "..."),
                                    createVNode("th", null, "..."),
                                    createVNode("th", null, "..."),
                                    createVNode("th", null, "...")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  createVNode("tr", null, [
                                    createVNode("td", null, "..."),
                                    createVNode("td", null, "..."),
                                    createVNode("td", null, "..."),
                                    createVNode("td", null, "..."),
                                    createVNode("td", null, "...")
                                  ]),
                                  createVNode("tr", null, [
                                    createVNode("td", null, "..."),
                                    createVNode("td", null, "..."),
                                    createVNode("td", null, "..."),
                                    createVNode("td", null, "..."),
                                    createVNode("td", null, "...")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NTable), {
                            bordered: false,
                            "single-line": false
                          }, {
                            default: withCtx(() => [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", null, "..."),
                                  createVNode("th", null, "..."),
                                  createVNode("th", null, "..."),
                                  createVNode("th", null, "..."),
                                  createVNode("th", null, "...")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                createVNode("tr", null, [
                                  createVNode("td", null, "..."),
                                  createVNode("td", null, "..."),
                                  createVNode("td", null, "..."),
                                  createVNode("td", null, "..."),
                                  createVNode("td", null, "...")
                                ]),
                                createVNode("tr", null, [
                                  createVNode("td", null, "..."),
                                  createVNode("td", null, "..."),
                                  createVNode("td", null, "..."),
                                  createVNode("td", null, "..."),
                                  createVNode("td", null, "...")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NWatermark), {
                      content: "Watermark",
                      cross: "",
                      selectable: "",
                      "font-size": 16,
                      "line-height": 16,
                      width: 192,
                      height: 128,
                      "x-offset": 12,
                      "y-offset": 28,
                      rotate: -15
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NTable), {
                          bordered: false,
                          "single-line": false
                        }, {
                          default: withCtx(() => [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", null, "..."),
                                createVNode("th", null, "..."),
                                createVNode("th", null, "..."),
                                createVNode("th", null, "..."),
                                createVNode("th", null, "...")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "...")
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "...")
                              ])
                            ])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardCodeExample, { title: "Fullscreen" }, {
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`You can make it displayed in fullscreen mode.`);
                } else {
                  return [
                    createTextVNode("You can make it displayed in fullscreen mode.")
                  ];
                }
              }),
              code: withCtx(({ html, js }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(html(`
						<n-watermark
							v-if="show"
							content="All the roads we have to walk are winding"
							cross
							fullscreen
							:font-size="16"
							:line-height="16"
							:width="384"
							:height="384"
							:x-offset="12"
							:y-offset="80"
							:rotate="-15"
						/>
						<n-switch v-model:value="show" />
						`))} ${ssrInterpolate(js(`
						const show = ref(false)
						`))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(html(`
						<n-watermark
							v-if="show"
							content="All the roads we have to walk are winding"
							cross
							fullscreen
							:font-size="16"
							:line-height="16"
							:width="384"
							:height="384"
							:x-offset="12"
							:y-offset="80"
							:rotate="-15"
						/>
						<n-switch v-model:value="show" />
						`)) + " " + toDisplayString(js(`
						const show = ref(false)
						`)), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (show.value) {
                    _push3(ssrRenderComponent(unref(NWatermark), {
                      content: "All the roads we have to walk are winding",
                      cross: "",
                      fullscreen: "",
                      "font-size": 16,
                      "line-height": 16,
                      width: 384,
                      height: 384,
                      "x-offset": 12,
                      "y-offset": 80,
                      rotate: -15
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(NSwitch), {
                    value: show.value,
                    "onUpdate:value": ($event) => show.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    show.value ? (openBlock(), createBlock(unref(NWatermark), {
                      key: 0,
                      content: "All the roads we have to walk are winding",
                      cross: "",
                      fullscreen: "",
                      "font-size": 16,
                      "line-height": 16,
                      width: 384,
                      height: 384,
                      "x-offset": 12,
                      "y-offset": 80,
                      rotate: -15
                    })) : createCommentVNode("", true),
                    createVNode(unref(NSwitch), {
                      value: show.value,
                      "onUpdate:value": ($event) => show.value = $event
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "page-header" }, [
                createVNode("div", { class: "title" }, "Watermark"),
                createVNode("div", { class: "links" }, [
                  createVNode("a", {
                    href: "https://www.naiveui.com/en-US/light/components/watermark",
                    target: "_blank",
                    alt: "docs",
                    rel: "nofollow noopener noreferrer"
                  }, [
                    createVNode(_sfc_main$s, {
                      name: ExternalIcon,
                      size: 16
                    }),
                    createTextVNode(" docs ")
                  ])
                ])
              ]),
              createVNode("div", { class: "components-list" }, [
                createVNode(_component_CardCodeExample, { title: "Basic" }, {
                  code: withCtx(({ html }) => [
                    createTextVNode(toDisplayString(html(`
						<n-watermark
							content="Watermark"
							cross
							selectable
							:font-size="16"
							:line-height="16"
							:width="192"
							:height="128"
							:x-offset="12"
							:y-offset="28"
							:rotate="-15"
						>
							<n-table :bordered="false" :single-line="false">
								<thead>
									<tr>
										<th>...</th>
										<th>...</th>
										<th>...</th>
										<th>...</th>
										<th>...</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
								</tbody>
							</n-table>
						</n-watermark>
						`)), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(unref(NWatermark), {
                      content: "Watermark",
                      cross: "",
                      selectable: "",
                      "font-size": 16,
                      "line-height": 16,
                      width: 192,
                      height: 128,
                      "x-offset": 12,
                      "y-offset": 28,
                      rotate: -15
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NTable), {
                          bordered: false,
                          "single-line": false
                        }, {
                          default: withCtx(() => [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", null, "..."),
                                createVNode("th", null, "..."),
                                createVNode("th", null, "..."),
                                createVNode("th", null, "..."),
                                createVNode("th", null, "...")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "...")
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "..."),
                                createVNode("td", null, "...")
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_CardCodeExample, { title: "Fullscreen" }, {
                  description: withCtx(() => [
                    createTextVNode("You can make it displayed in fullscreen mode.")
                  ]),
                  code: withCtx(({ html, js }) => [
                    createTextVNode(toDisplayString(html(`
						<n-watermark
							v-if="show"
							content="All the roads we have to walk are winding"
							cross
							fullscreen
							:font-size="16"
							:line-height="16"
							:width="384"
							:height="384"
							:x-offset="12"
							:y-offset="80"
							:rotate="-15"
						/>
						<n-switch v-model:value="show" />
						`)) + " " + toDisplayString(js(`
						const show = ref(false)
						`)), 1)
                  ]),
                  default: withCtx(() => [
                    show.value ? (openBlock(), createBlock(unref(NWatermark), {
                      key: 0,
                      content: "All the roads we have to walk are winding",
                      cross: "",
                      fullscreen: "",
                      "font-size": 16,
                      "line-height": 16,
                      width: 384,
                      height: 384,
                      "x-offset": 12,
                      "y-offset": 80,
                      rotate: -15
                    })) : createCommentVNode("", true),
                    createVNode(unref(NSwitch), {
                      value: show.value,
                      "onUpdate:value": ($event) => show.value = $event
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Watermark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Watermark-tUEx0t4b.mjs.map
