import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, c as NText } from './server.mjs';
import { N as NCollapse, a as NCollapseItem } from './CollapseItem-BML65SQa.mjs';
import './LtrContext-CUHPU62m.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
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

const CashIcon = "ion:cash-outline";
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Collapse",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Collapse</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/collapse" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-collapse>
						<n-collapse-item title="right" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-collapse>
						<n-collapse-item title="right" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCollapse), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>good</div>`);
                      } else {
                        return [
                          createVNode("div", null, "good")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>nice</div>`);
                      } else {
                        return [
                          createVNode("div", null, "nice")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>very good</div>`);
                      } else {
                        return [
                          createVNode("div", null, "very good")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "1"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "good")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "nice")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "very good")
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
                    title: "right",
                    name: "1"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "good")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCollapseItem), {
                    title: "right",
                    name: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "nice")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCollapseItem), {
                    title: "right",
                    name: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "very good")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Arrow placement" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Use `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`arrow-placement`);
                } else {
                  return [
                    createTextVNode("arrow-placement")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` to set the placement of arrow. `);
          } else {
            return [
              createTextVNode(" Use "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("arrow-placement")
                ]),
                _: 1
              }),
              createTextVNode(" to set the placement of arrow. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-collapse arrow-placement="right">
						<n-collapse-item title="right" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-collapse arrow-placement="right">
						<n-collapse-item title="right" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCollapse), { "arrow-placement": "right" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>good</div>`);
                      } else {
                        return [
                          createVNode("div", null, "good")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>nice</div>`);
                      } else {
                        return [
                          createVNode("div", null, "nice")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>very good</div>`);
                      } else {
                        return [
                          createVNode("div", null, "very good")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "1"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "good")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "nice")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "very good")
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
              createVNode(unref(NCollapse), { "arrow-placement": "right" }, {
                default: withCtx(() => [
                  createVNode(unref(NCollapseItem), {
                    title: "right",
                    name: "1"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "good")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCollapseItem), {
                    title: "right",
                    name: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "nice")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCollapseItem), {
                    title: "right",
                    name: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "very good")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Customize icon" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-collapse>
						<template #header-extra>
							<n-icon><cash-icon /></n-icon>
						</template>
						<template #arrow>
							<n-icon>
								<cash-icon />
							</n-icon>
						</template>
						<n-collapse-item title="Bronze" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="Silver" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="Gold" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-collapse>
						<template #header-extra>
							<n-icon><cash-icon /></n-icon>
						</template>
						<template #arrow>
							<n-icon>
								<cash-icon />
							</n-icon>
						</template>
						<n-collapse-item title="Bronze" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="Silver" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="Gold" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCollapse), null, {
              "header-extra": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, { name: CashIcon })
                  ];
                }
              }),
              arrow: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, { name: CashIcon })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "Bronze",
                    name: "1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>good</div>`);
                      } else {
                        return [
                          createVNode("div", null, "good")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "Silver",
                    name: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>nice</div>`);
                      } else {
                        return [
                          createVNode("div", null, "nice")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "Gold",
                    name: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>very good</div>`);
                      } else {
                        return [
                          createVNode("div", null, "very good")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCollapseItem), {
                      title: "Bronze",
                      name: "1"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "good")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCollapseItem), {
                      title: "Silver",
                      name: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "nice")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCollapseItem), {
                      title: "Gold",
                      name: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, "very good")
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
                "header-extra": withCtx(() => [
                  createVNode(_sfc_main$o, { name: CashIcon })
                ]),
                arrow: withCtx(() => [
                  createVNode(_sfc_main$o, { name: CashIcon })
                ]),
                default: withCtx(() => [
                  createVNode(unref(NCollapseItem), {
                    title: "Bronze",
                    name: "1"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "good")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCollapseItem), {
                    title: "Silver",
                    name: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "nice")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCollapseItem), {
                    title: "Gold",
                    name: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "very good")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Extra info in header" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Put some info on the right side of the item.`);
          } else {
            return [
              createTextVNode("Put some info on the right side of the item.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-collapse>
						<n-collapse-item title="right" name="1">
							good
							<template #header-extra>good</template>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							nice
							<template #header-extra>nice</template>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							very good
							<template #header-extra>very good</template>
						</n-collapse-item>
					</n-collapse>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-collapse>
						<n-collapse-item title="right" name="1">
							good
							<template #header-extra>good</template>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							nice
							<template #header-extra>nice</template>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							very good
							<template #header-extra>very good</template>
						</n-collapse-item>
					</n-collapse>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCollapse), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "1"
                  }, {
                    "header-extra": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`good`);
                      } else {
                        return [
                          createTextVNode("good")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` good `);
                      } else {
                        return [
                          createTextVNode(" good ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "2"
                  }, {
                    "header-extra": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`nice`);
                      } else {
                        return [
                          createTextVNode("nice")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` nice `);
                      } else {
                        return [
                          createTextVNode(" nice ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCollapseItem), {
                    title: "right",
                    name: "3"
                  }, {
                    "header-extra": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`very good`);
                      } else {
                        return [
                          createTextVNode("very good")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` very good `);
                      } else {
                        return [
                          createTextVNode(" very good ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "1"
                    }, {
                      "header-extra": withCtx(() => [
                        createTextVNode("good")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" good ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "2"
                    }, {
                      "header-extra": withCtx(() => [
                        createTextVNode("nice")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" nice ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCollapseItem), {
                      title: "right",
                      name: "3"
                    }, {
                      "header-extra": withCtx(() => [
                        createTextVNode("very good")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" very good ")
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
                    title: "right",
                    name: "1"
                  }, {
                    "header-extra": withCtx(() => [
                      createTextVNode("good")
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" good ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCollapseItem), {
                    title: "right",
                    name: "2"
                  }, {
                    "header-extra": withCtx(() => [
                      createTextVNode("nice")
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" nice ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCollapseItem), {
                    title: "right",
                    name: "3"
                  }, {
                    "header-extra": withCtx(() => [
                      createTextVNode("very good")
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" very good ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Collapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Collapse-CNYFSrPs.mjs.map
