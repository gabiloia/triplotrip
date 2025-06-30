import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button, c as NText } from './server.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NButtonGroup } from './ButtonGroup-B1rpYDNl.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-S6SsK5xW.mjs';
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
import 'vue-router';
import 'lodash/castArray.js';
import 'qs';
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
const LogInIcon = "ion:log-in-outline";
const CashIcon = "ion:cash-outline";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    function handleClick() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Button</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/button" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` There are `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`default`);
                } else {
                  return [
                    createTextVNode("default")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`primary`);
                } else {
                  return [
                    createTextVNode("primary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`tertiary`);
                } else {
                  return [
                    createTextVNode("tertiary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`info`);
                } else {
                  return [
                    createTextVNode("info")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`success`);
                } else {
                  return [
                    createTextVNode("success")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`warning`);
                } else {
                  return [
                    createTextVNode("warning")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` and `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`error`);
                } else {
                  return [
                    createTextVNode("error")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` button types. `);
          } else {
            return [
              createTextVNode(" There are "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("default")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("primary")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("tertiary")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("info")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("success")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("warning")
                ]),
                _: 1
              }),
              createTextVNode(" and "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("error")
                ]),
                _: 1
              }),
              createTextVNode(" button types. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-button>Default</n-button>
					<n-button type="tertiary">Tertiary</n-button>
					<n-button type="primary">Primary</n-button>
					<n-button type="info">Info</n-button>
					<n-button type="success">Success</n-button>
					<n-button type="warning">Warning</n-button>
					<n-button type="error">Error</n-button>

					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-button>Default</n-button>
					<n-button type="tertiary">Tertiary</n-button>
					<n-button type="primary">Primary</n-button>
					<n-button type="info">Info</n-button>
					<n-button type="success">Success</n-button>
					<n-button type="warning">Warning</n-button>
					<n-button type="error">Error</n-button>

					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Default`);
                      } else {
                        return [
                          createTextVNode("Default")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { type: "tertiary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tertiary`);
                      } else {
                        return [
                          createTextVNode("Tertiary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { type: "primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Primary`);
                      } else {
                        return [
                          createTextVNode("Primary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { type: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Info`);
                      } else {
                        return [
                          createTextVNode("Info")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { type: "success" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Success`);
                      } else {
                        return [
                          createTextVNode("Success")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { type: "warning" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Warning`);
                      } else {
                        return [
                          createTextVNode("Warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { type: "error" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Error`);
                      } else {
                        return [
                          createTextVNode("Error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Default")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { type: "tertiary" }, {
                      default: withCtx(() => [
                        createTextVNode("Tertiary")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("Primary")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("Info")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { type: "success" }, {
                      default: withCtx(() => [
                        createTextVNode("Success")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("Warning")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("Error")
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
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Default")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { type: "tertiary" }, {
                    default: withCtx(() => [
                      createTextVNode("Tertiary")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { type: "primary" }, {
                    default: withCtx(() => [
                      createTextVNode("Primary")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { type: "info" }, {
                    default: withCtx(() => [
                      createTextVNode("Info")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { type: "success" }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { type: "warning" }, {
                    default: withCtx(() => [
                      createTextVNode("Warning")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { type: "error" }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Secondary" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-button strong secondary>Default</n-button>
					<n-button strong secondary type="tertiary">Tertiary</n-button>
					<n-button strong secondary type="primary">Primary</n-button>
					<n-button strong secondary type="info">Info</n-button>
					<n-button strong secondary type="success">Success</n-button>
					<n-button strong secondary type="warning">Warning</n-button>
					<n-button strong secondary type="error">Error</n-button>
					<n-button strong secondary round>Default</n-button>
					<n-button strong secondary round type="primary">Primary</n-button>
					<n-button strong secondary round type="info">Info</n-button>
					<n-button strong secondary round type="success">Success</n-button>
					<n-button strong secondary round type="warning">Warning</n-button>
					<n-button strong secondary round type="error">Error</n-button>
					<n-button strong secondary circle>
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="primary">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="info">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="success">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="warning">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="error">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					`))} ${ssrInterpolate(js(`
								import { CashOutline as CashIcon } from '@vicons/ionicons5'`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-button strong secondary>Default</n-button>
					<n-button strong secondary type="tertiary">Tertiary</n-button>
					<n-button strong secondary type="primary">Primary</n-button>
					<n-button strong secondary type="info">Info</n-button>
					<n-button strong secondary type="success">Success</n-button>
					<n-button strong secondary type="warning">Warning</n-button>
					<n-button strong secondary type="error">Error</n-button>
					<n-button strong secondary round>Default</n-button>
					<n-button strong secondary round type="primary">Primary</n-button>
					<n-button strong secondary round type="info">Info</n-button>
					<n-button strong secondary round type="success">Success</n-button>
					<n-button strong secondary round type="warning">Warning</n-button>
					<n-button strong secondary round type="error">Error</n-button>
					<n-button strong secondary circle>
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="primary">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="info">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="success">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="warning">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button strong secondary circle type="error">
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					`)) + " " + toDisplayString(js(`
								import { CashOutline as CashIcon } from '@vicons/ionicons5'`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Default`);
                      } else {
                        return [
                          createTextVNode("Default")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "tertiary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tertiary`);
                      } else {
                        return [
                          createTextVNode("Tertiary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Primary`);
                      } else {
                        return [
                          createTextVNode("Primary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Info`);
                      } else {
                        return [
                          createTextVNode("Info")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "success"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Success`);
                      } else {
                        return [
                          createTextVNode("Success")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "warning"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Warning`);
                      } else {
                        return [
                          createTextVNode("Warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "error"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Error`);
                      } else {
                        return [
                          createTextVNode("Error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Default`);
                      } else {
                        return [
                          createTextVNode("Default")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Primary`);
                      } else {
                        return [
                          createTextVNode("Primary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Info`);
                      } else {
                        return [
                          createTextVNode("Info")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "success"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Success`);
                      } else {
                        return [
                          createTextVNode("Success")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "warning"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Warning`);
                      } else {
                        return [
                          createTextVNode("Warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "error"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Error`);
                      } else {
                        return [
                          createTextVNode("Error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: ""
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "primary"
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "info"
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "success"
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "warning"
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "error"
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Default")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      type: "tertiary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Tertiary")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      type: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Primary")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      type: "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Info")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Success")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      type: "warning"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Warning")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      type: "error"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Error")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      round: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Default")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      round: "",
                      type: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Primary")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      round: "",
                      type: "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Info")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      round: "",
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Success")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      round: "",
                      type: "warning"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Warning")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      round: "",
                      type: "error"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Error")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      circle: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      circle: "",
                      type: "primary"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      circle: "",
                      type: "info"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      circle: "",
                      type: "success"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      circle: "",
                      type: "warning"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      strong: "",
                      secondary: "",
                      circle: "",
                      type: "error"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
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
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Default")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "tertiary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Tertiary")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Primary")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "info"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Info")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "success"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "warning"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Warning")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    type: "error"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Default")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Primary")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "info"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Info")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "success"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "warning"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Warning")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    round: "",
                    type: "error"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: ""
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CashIcon })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "primary"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CashIcon })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "info"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CashIcon })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "success"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CashIcon })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "warning"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CashIcon })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    strong: "",
                    secondary: "",
                    circle: "",
                    type: "error"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CashIcon })
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Size" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Buttons can be `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`tiny`);
                } else {
                  return [
                    createTextVNode("tiny")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
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
            _push2(` and `);
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
            _push2(` in size. `);
          } else {
            return [
              createTextVNode(" Buttons can be "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("tiny")
                ]),
                _: 1
              }),
              createTextVNode(" , "),
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
              createTextVNode(" and "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("large")
                ]),
                _: 1
              }),
              createTextVNode(" in size. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-button size="tiny">Small Small</n-button>
					<n-button size="small">Small</n-button>
					<n-button size="medium">Not Small</n-button>
					<n-button size="large">Not Not Small</n-button>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-button size="tiny">Small Small</n-button>
					<n-button size="small">Small</n-button>
					<n-button size="medium">Not Small</n-button>
					<n-button size="large">Not Not Small</n-button>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { align: "baseline" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), { size: "tiny" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Small Small`);
                      } else {
                        return [
                          createTextVNode("Small Small")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { size: "small" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Small`);
                      } else {
                        return [
                          createTextVNode("Small")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { size: "medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Not Small`);
                      } else {
                        return [
                          createTextVNode("Not Small")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { size: "large" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Not Not Small`);
                      } else {
                        return [
                          createTextVNode("Not Not Small")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), { size: "tiny" }, {
                      default: withCtx(() => [
                        createTextVNode("Small Small")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { size: "small" }, {
                      default: withCtx(() => [
                        createTextVNode("Small")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { size: "medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Not Small")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { size: "large" }, {
                      default: withCtx(() => [
                        createTextVNode("Not Not Small")
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
              createVNode(unref(NSpace), { align: "baseline" }, {
                default: withCtx(() => [
                  createVNode(unref(Button), { size: "tiny" }, {
                    default: withCtx(() => [
                      createTextVNode("Small Small")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode("Small")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { size: "medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Not Small")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { size: "large" }, {
                    default: withCtx(() => [
                      createTextVNode("Not Not Small")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Ghost" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ghost buttons have transparent backgrounds.`);
          } else {
            return [
              createTextVNode("Ghost buttons have transparent backgrounds.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-button ghost>Default</n-button>
					<n-button type="primary" ghost>Primary</n-button>
					<n-button type="info" ghost>Info</n-button>
					<n-button type="success" ghost>Success</n-button>
					<n-button type="warning" ghost>Warning</n-button>
					<n-button type="error" ghost>Error</n-button>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-button ghost>Default</n-button>
					<n-button type="primary" ghost>Primary</n-button>
					<n-button type="info" ghost>Info</n-button>
					<n-button type="success" ghost>Success</n-button>
					<n-button type="warning" ghost>Warning</n-button>
					<n-button type="error" ghost>Error</n-button>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { align: "baseline" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), { ghost: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Default`);
                      } else {
                        return [
                          createTextVNode("Default")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    type: "primary",
                    ghost: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Primary`);
                      } else {
                        return [
                          createTextVNode("Primary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    type: "info",
                    ghost: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Info`);
                      } else {
                        return [
                          createTextVNode("Info")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    type: "success",
                    ghost: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Success`);
                      } else {
                        return [
                          createTextVNode("Success")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    type: "warning",
                    ghost: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Warning`);
                      } else {
                        return [
                          createTextVNode("Warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    type: "error",
                    ghost: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Error`);
                      } else {
                        return [
                          createTextVNode("Error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), { ghost: "" }, {
                      default: withCtx(() => [
                        createTextVNode("Default")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      type: "primary",
                      ghost: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Primary")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      type: "info",
                      ghost: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Info")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      type: "success",
                      ghost: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Success")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      type: "warning",
                      ghost: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Warning")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      type: "error",
                      ghost: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Error")
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
              createVNode(unref(NSpace), { align: "baseline" }, {
                default: withCtx(() => [
                  createVNode(unref(Button), { ghost: "" }, {
                    default: withCtx(() => [
                      createTextVNode("Default")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    type: "primary",
                    ghost: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Primary")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    type: "info",
                    ghost: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Info")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    type: "success",
                    ghost: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    type: "warning",
                    ghost: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Warning")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    type: "error",
                    ghost: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Shape" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Buttons can have different shapes.`);
          } else {
            return [
              createTextVNode("Buttons can have different shapes.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-button circle>
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button round>Round</n-button>
					<n-button>Rect</n-button>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-button circle>
						<template #icon>
							<n-icon><cash-icon /></n-icon>
						</template>
					</n-button>
					<n-button round>Round</n-button>
					<n-button>Rect</n-button>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), { circle: "" }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { round: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Round`);
                      } else {
                        return [
                          createTextVNode("Round")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rect`);
                      } else {
                        return [
                          createTextVNode("Rect")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), { circle: "" }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { round: "" }, {
                      default: withCtx(() => [
                        createTextVNode("Round")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Rect")
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
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(Button), { circle: "" }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CashIcon })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { round: "" }, {
                    default: withCtx(() => [
                      createTextVNode("Round")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Rect")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Loading" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Buttons can have loading states.`);
          } else {
            return [
              createTextVNode("Buttons can have loading states.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-button :loading="loading" @click="handleClick">
						<template #icon>
							<n-icon>
								<cash-icon />
							</n-icon>
						</template>
						Click Me
					</n-button>
					<n-button :loading="loading" icon-placement="left" @click="handleClick">Click Me</n-button>
					`))} ${ssrInterpolate(js(`
								const loading = ref(false)
								function handleClick() {
									loading.value = true
									setTimeout(() => {
										loading.value = false
									}, 2000)
								}
								`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-button :loading="loading" @click="handleClick">
						<template #icon>
							<n-icon>
								<cash-icon />
							</n-icon>
						</template>
						Click Me
					</n-button>
					<n-button :loading="loading" icon-placement="left" @click="handleClick">Click Me</n-button>
					`)) + " " + toDisplayString(js(`
								const loading = ref(false)
								function handleClick() {
									loading.value = true
									setTimeout(() => {
										loading.value = false
									}, 2000)
								}
								`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    loading: loading.value,
                    onClick: handleClick
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Click Me `);
                      } else {
                        return [
                          createTextVNode(" Click Me ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    loading: loading.value,
                    "icon-placement": "left",
                    onClick: handleClick
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Click Me`);
                      } else {
                        return [
                          createTextVNode("Click Me")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      loading: loading.value,
                      onClick: handleClick
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Click Me ")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(unref(Button), {
                      loading: loading.value,
                      "icon-placement": "left",
                      onClick: handleClick
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Click Me")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(Button), {
                    loading: loading.value,
                    onClick: handleClick
                  }, {
                    icon: withCtx(() => [
                      createVNode(_sfc_main$o, { name: CashIcon })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Click Me ")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(unref(Button), {
                    loading: loading.value,
                    "icon-placement": "left",
                    onClick: handleClick
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Click Me")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Button group" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Buttons can be grouped.`);
          } else {
            return [
              createTextVNode("Buttons can be grouped.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-button-group vertical>
						<n-button round>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Live a
						</n-button>
						<n-button ghost>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Sufficient
						</n-button>
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Life
						</n-button>
					</n-button-group>
					<n-button-group vertical size="large">
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							With
						</n-button>
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Enough
						</n-button>
						<n-button ghost round>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Happiness
						</n-button>
					</n-button-group>
					<n-button-group size="small">
						<n-button round>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Life
						</n-button>
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Is
						</n-button>
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Good
						</n-button>
					</n-button-group>
					<n-button-group>
						<n-button ghost>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Eat
						</n-button>
						<n-button ghost>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							One More
						</n-button>
						<n-button round>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Apple
						</n-button>
					</n-button-group>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-button-group vertical>
						<n-button round>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Live a
						</n-button>
						<n-button ghost>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Sufficient
						</n-button>
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Life
						</n-button>
					</n-button-group>
					<n-button-group vertical size="large">
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							With
						</n-button>
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Enough
						</n-button>
						<n-button ghost round>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Happiness
						</n-button>
					</n-button-group>
					<n-button-group size="small">
						<n-button round>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Life
						</n-button>
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Is
						</n-button>
						<n-button>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Good
						</n-button>
					</n-button-group>
					<n-button-group>
						<n-button ghost>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Eat
						</n-button>
						<n-button ghost>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							One More
						</n-button>
						<n-button round>
							<template #icon>
								<n-icon><log-in-icon /></n-icon>
							</template>
							Apple
						</n-button>
					</n-button-group>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NButtonGroup), { vertical: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { round: "" }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Live a `);
                            } else {
                              return [
                                createTextVNode(" Live a ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { ghost: "" }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Sufficient `);
                            } else {
                              return [
                                createTextVNode(" Sufficient ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), null, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Life `);
                            } else {
                              return [
                                createTextVNode(" Life ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { round: "" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Live a ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { ghost: "" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Sufficient ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), null, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Life ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NButtonGroup), {
                    vertical: "",
                    size: "large"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` With `);
                            } else {
                              return [
                                createTextVNode(" With ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), null, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Enough `);
                            } else {
                              return [
                                createTextVNode(" Enough ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), {
                          ghost: "",
                          round: ""
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Happiness `);
                            } else {
                              return [
                                createTextVNode(" Happiness ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" With ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), null, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Enough ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), {
                            ghost: "",
                            round: ""
                          }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Happiness ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NButtonGroup), { size: "small" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { round: "" }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Life `);
                            } else {
                              return [
                                createTextVNode(" Life ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), null, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Is `);
                            } else {
                              return [
                                createTextVNode(" Is ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), null, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Good `);
                            } else {
                              return [
                                createTextVNode(" Good ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { round: "" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Life ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), null, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Is ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), null, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Good ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NButtonGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { ghost: "" }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Eat `);
                            } else {
                              return [
                                createTextVNode(" Eat ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { ghost: "" }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` One More `);
                            } else {
                              return [
                                createTextVNode(" One More ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { round: "" }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$o, { name: LogInIcon }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$o, { name: LogInIcon })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apple `);
                            } else {
                              return [
                                createTextVNode(" Apple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { ghost: "" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Eat ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { ghost: "" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" One More ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { round: "" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: LogInIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Apple ")
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
                    createVNode(unref(NButtonGroup), { vertical: "" }, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { round: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Live a ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { ghost: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Sufficient ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), null, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Life ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NButtonGroup), {
                      vertical: "",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Button), null, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" With ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), null, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Enough ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), {
                          ghost: "",
                          round: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Happiness ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NButtonGroup), { size: "small" }, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { round: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Life ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), null, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Is ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), null, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Good ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NButtonGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { ghost: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Eat ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { ghost: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" One More ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { round: "" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: LogInIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Apple ")
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
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NButtonGroup), { vertical: "" }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { round: "" }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Live a ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { ghost: "" }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Sufficient ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), null, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Life ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NButtonGroup), {
                    vertical: "",
                    size: "large"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), null, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" With ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), null, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Enough ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), {
                        ghost: "",
                        round: ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Happiness ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NButtonGroup), { size: "small" }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { round: "" }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Life ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), null, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Is ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), null, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Good ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NButtonGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { ghost: "" }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Eat ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { ghost: "" }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" One More ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { round: "" }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: LogInIcon })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Apple ")
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Button-CoPjIySU.mjs.map
