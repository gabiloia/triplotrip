import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, createSlots, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, aW as NDivider, d as NAvatar, B as Button } from './server.mjs';
import { N as NRow, a as NCol } from './Col-By2_Iz7q.mjs';
import { N as NCheckbox } from './Checkbox-CRecqNg6.mjs';
import { N as NThing } from './Thing-BCT0vZnI.mjs';
import { N as NSpace } from './Space-CcGy24_j.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BP2F26pm.mjs';
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
const CashIcon = "ion:cash-outline";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Thing",
  __ssrInlineRender: true,
  setup(__props) {
    const avatar = ref(true);
    const header = ref(true);
    const headerExtra = ref(true);
    const description = ref(true);
    const footer = ref(true);
    const action = ref(true);
    const indented = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Thing</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/thing" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-lg"
      }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="indented">Indented</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="avatar">Avatar</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="action">Action</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="header">Header</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="headerExtra">Header Extra</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="description">Description</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="footer">Footer</n-checkbox>
						</n-col>
					</n-row>
					<n-divider />
					<n-thing :content-indented="indented">
						<template v-if="avatar" #avatar>
							<n-avatar :img-props="{ alt: 'avatar' }">
								<n-icon>
									<cash-icon />
								</n-icon>
							</n-avatar>
						</template>
						<template v-if="header" #header>Money</template>
						<template v-if="headerExtra" #header-extra>
							<n-button circle size="small">
								<template #icon>
									<cash-icon />
								</template>
							</n-button>
						</template>
						<template v-if="description" #description>Description</template>
						Money is any item or verifiable record that is generally accepted as payment for goods and
						services and repayment of debts, such as taxes, in a particular country or socio-economic
						context.
						<template v-if="footer" #footer>Footer</template>
						<template v-if="action" #action>
							<n-space>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									1$
								</n-button>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									10$
								</n-button>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									100$
								</n-button>
							</n-space>
						</template>
					</n-thing>
					`))} ${ssrInterpolate(js(`
						import { CashOutline as CashIcon } from "@vicons/ionicons5"
						const avatar = ref(true)
						const header = ref(true)
						const headerExtra = ref(true)
						const description = ref(true)
						const footer = ref(true)
						const action = ref(true)
						const indented = ref(true)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="indented">Indented</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="avatar">Avatar</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="action">Action</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="header">Header</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="headerExtra">Header Extra</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="description">Description</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="footer">Footer</n-checkbox>
						</n-col>
					</n-row>
					<n-divider />
					<n-thing :content-indented="indented">
						<template v-if="avatar" #avatar>
							<n-avatar :img-props="{ alt: 'avatar' }">
								<n-icon>
									<cash-icon />
								</n-icon>
							</n-avatar>
						</template>
						<template v-if="header" #header>Money</template>
						<template v-if="headerExtra" #header-extra>
							<n-button circle size="small">
								<template #icon>
									<cash-icon />
								</template>
							</n-button>
						</template>
						<template v-if="description" #description>Description</template>
						Money is any item or verifiable record that is generally accepted as payment for goods and
						services and repayment of debts, such as taxes, in a particular country or socio-economic
						context.
						<template v-if="footer" #footer>Footer</template>
						<template v-if="action" #action>
							<n-space>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									1$
								</n-button>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									10$
								</n-button>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									100$
								</n-button>
							</n-space>
						</template>
					</n-thing>
					`)) + " " + toDisplayString(js(`
						import { CashOutline as CashIcon } from "@vicons/ionicons5"
						const avatar = ref(true)
						const header = ref(true)
						const headerExtra = ref(true)
						const description = ref(true)
						const footer = ref(true)
						const action = ref(true)
						const indented = ref(true)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NRow), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          checked: indented.value,
                          "onUpdate:checked": ($event) => indented.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Indented`);
                            } else {
                              return [
                                createTextVNode("Indented")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NCheckbox), {
                            checked: indented.value,
                            "onUpdate:checked": ($event) => indented.value = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Indented")
                            ]),
                            _: 1
                          }, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NCheckbox), {
                          checked: indented.value,
                          "onUpdate:checked": ($event) => indented.value = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Indented")
                          ]),
                          _: 1
                        }, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NRow), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          checked: avatar.value,
                          "onUpdate:checked": ($event) => avatar.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Avatar`);
                            } else {
                              return [
                                createTextVNode("Avatar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NCheckbox), {
                            checked: avatar.value,
                            "onUpdate:checked": ($event) => avatar.value = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Avatar")
                            ]),
                            _: 1
                          }, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          checked: action.value,
                          "onUpdate:checked": ($event) => action.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Action`);
                            } else {
                              return [
                                createTextVNode("Action")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NCheckbox), {
                            checked: action.value,
                            "onUpdate:checked": ($event) => action.value = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Action")
                            ]),
                            _: 1
                          }, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NCheckbox), {
                          checked: avatar.value,
                          "onUpdate:checked": ($event) => avatar.value = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Avatar")
                          ]),
                          _: 1
                        }, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NCheckbox), {
                          checked: action.value,
                          "onUpdate:checked": ($event) => action.value = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Action")
                          ]),
                          _: 1
                        }, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NRow), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          checked: header.value,
                          "onUpdate:checked": ($event) => header.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Header`);
                            } else {
                              return [
                                createTextVNode("Header")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NCheckbox), {
                            checked: header.value,
                            "onUpdate:checked": ($event) => header.value = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Header")
                            ]),
                            _: 1
                          }, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          checked: headerExtra.value,
                          "onUpdate:checked": ($event) => headerExtra.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Header Extra`);
                            } else {
                              return [
                                createTextVNode("Header Extra")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NCheckbox), {
                            checked: headerExtra.value,
                            "onUpdate:checked": ($event) => headerExtra.value = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Header Extra")
                            ]),
                            _: 1
                          }, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NCheckbox), {
                          checked: header.value,
                          "onUpdate:checked": ($event) => header.value = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Header")
                          ]),
                          _: 1
                        }, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NCheckbox), {
                          checked: headerExtra.value,
                          "onUpdate:checked": ($event) => headerExtra.value = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Header Extra")
                          ]),
                          _: 1
                        }, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NRow), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          checked: description.value,
                          "onUpdate:checked": ($event) => description.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Description`);
                            } else {
                              return [
                                createTextVNode("Description")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NCheckbox), {
                            checked: description.value,
                            "onUpdate:checked": ($event) => description.value = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NCol), { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NCheckbox), {
                          checked: footer.value,
                          "onUpdate:checked": ($event) => footer.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Footer`);
                            } else {
                              return [
                                createTextVNode("Footer")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NCheckbox), {
                            checked: footer.value,
                            "onUpdate:checked": ($event) => footer.value = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Footer")
                            ]),
                            _: 1
                          }, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NCheckbox), {
                          checked: description.value,
                          "onUpdate:checked": ($event) => description.value = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Description")
                          ]),
                          _: 1
                        }, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NCol), { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(NCheckbox), {
                          checked: footer.value,
                          "onUpdate:checked": ($event) => footer.value = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Footer")
                          ]),
                          _: 1
                        }, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NDivider), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NThing), { "content-indented": indented.value }, createSlots({
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context. `);
                } else {
                  return [
                    createTextVNode(" Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context. ")
                  ];
                }
              }),
              _: 2
            }, [
              avatar.value ? {
                name: "avatar",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
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
                      createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                key: "0"
              } : void 0,
              header.value ? {
                name: "header",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Money`);
                  } else {
                    return [
                      createTextVNode("Money")
                    ];
                  }
                }),
                key: "1"
              } : void 0,
              headerExtra.value ? {
                name: "header-extra",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Button), {
                      circle: "",
                      size: "small"
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
                        circle: "",
                        size: "small"
                      }, {
                        icon: withCtx(() => [
                          createVNode(_sfc_main$o, { name: CashIcon })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                key: "2"
              } : void 0,
              description.value ? {
                name: "description",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Description`);
                  } else {
                    return [
                      createTextVNode("Description")
                    ];
                  }
                }),
                key: "3"
              } : void 0,
              footer.value ? {
                name: "footer",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Footer`);
                  } else {
                    return [
                      createTextVNode("Footer")
                    ];
                  }
                }),
                key: "4"
              } : void 0,
              action.value ? {
                name: "action",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(NSpace), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Button), { size: "small" }, {
                            icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$o, { name: CashIcon })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 1$ `);
                              } else {
                                return [
                                  createTextVNode(" 1$ ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(Button), { size: "small" }, {
                            icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$o, { name: CashIcon })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 10$ `);
                              } else {
                                return [
                                  createTextVNode(" 10$ ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(Button), { size: "small" }, {
                            icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$o, { name: CashIcon }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$o, { name: CashIcon })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 100$ `);
                              } else {
                                return [
                                  createTextVNode(" 100$ ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Button), { size: "small" }, {
                              icon: withCtx(() => [
                                createVNode(_sfc_main$o, { name: CashIcon })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" 1$ ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Button), { size: "small" }, {
                              icon: withCtx(() => [
                                createVNode(_sfc_main$o, { name: CashIcon })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" 10$ ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Button), { size: "small" }, {
                              icon: withCtx(() => [
                                createVNode(_sfc_main$o, { name: CashIcon })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" 100$ ")
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
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createVNode(unref(Button), { size: "small" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: CashIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" 1$ ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { size: "small" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: CashIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" 10$ ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { size: "small" }, {
                            icon: withCtx(() => [
                              createVNode(_sfc_main$o, { name: CashIcon })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" 100$ ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                key: "5"
              } : void 0
            ]), _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NRow), null, {
                default: withCtx(() => [
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NCheckbox), {
                        checked: indented.value,
                        "onUpdate:checked": ($event) => indented.value = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Indented")
                        ]),
                        _: 1
                      }, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NRow), null, {
                default: withCtx(() => [
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NCheckbox), {
                        checked: avatar.value,
                        "onUpdate:checked": ($event) => avatar.value = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Avatar")
                        ]),
                        _: 1
                      }, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NCheckbox), {
                        checked: action.value,
                        "onUpdate:checked": ($event) => action.value = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Action")
                        ]),
                        _: 1
                      }, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NRow), null, {
                default: withCtx(() => [
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NCheckbox), {
                        checked: header.value,
                        "onUpdate:checked": ($event) => header.value = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Header")
                        ]),
                        _: 1
                      }, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NCheckbox), {
                        checked: headerExtra.value,
                        "onUpdate:checked": ($event) => headerExtra.value = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Header Extra")
                        ]),
                        _: 1
                      }, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NRow), null, {
                default: withCtx(() => [
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NCheckbox), {
                        checked: description.value,
                        "onUpdate:checked": ($event) => description.value = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Description")
                        ]),
                        _: 1
                      }, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NCol), { span: 12 }, {
                    default: withCtx(() => [
                      createVNode(unref(NCheckbox), {
                        checked: footer.value,
                        "onUpdate:checked": ($event) => footer.value = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Footer")
                        ]),
                        _: 1
                      }, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(NDivider)),
              createVNode(unref(NThing), { "content-indented": indented.value }, createSlots({
                default: withCtx(() => [
                  createTextVNode(" Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context. ")
                ]),
                _: 2
              }, [
                avatar.value ? {
                  name: "avatar",
                  fn: withCtx(() => [
                    createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      _: 1
                    })
                  ]),
                  key: "0"
                } : void 0,
                header.value ? {
                  name: "header",
                  fn: withCtx(() => [
                    createTextVNode("Money")
                  ]),
                  key: "1"
                } : void 0,
                headerExtra.value ? {
                  name: "header-extra",
                  fn: withCtx(() => [
                    createVNode(unref(Button), {
                      circle: "",
                      size: "small"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_sfc_main$o, { name: CashIcon })
                      ]),
                      _: 1
                    })
                  ]),
                  key: "2"
                } : void 0,
                description.value ? {
                  name: "description",
                  fn: withCtx(() => [
                    createTextVNode("Description")
                  ]),
                  key: "3"
                } : void 0,
                footer.value ? {
                  name: "footer",
                  fn: withCtx(() => [
                    createTextVNode("Footer")
                  ]),
                  key: "4"
                } : void 0,
                action.value ? {
                  name: "action",
                  fn: withCtx(() => [
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { size: "small" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: CashIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" 1$ ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { size: "small" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: CashIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" 10$ ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { size: "small" }, {
                          icon: withCtx(() => [
                            createVNode(_sfc_main$o, { name: CashIcon })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" 100$ ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  key: "5"
                } : void 0
              ]), 1032, ["content-indented"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Thing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Thing-Cxmm6LpB.mjs.map
