import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, a as _sfc_main$s, bf as NMenu, aU as renderIcon } from './server.mjs';
import { N as NLayout, a as NLayoutSider } from './LayoutSider-CCVSJ-hS.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import { N as NSwitch } from './Switch-Ds1OeKkl.mjs';
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
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const BookIcon = "ion:book-outline";
const PersonIcon = "ion:person-outline";
const WineIcon = "ion:wine-outline";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOptions = [
      {
        label: "Hear the Wind Sing",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon)
      },
      {
        label: "Pinball 1973",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        disabled: true,
        children: [
          {
            label: "Rat",
            key: "rat"
          }
        ]
      },
      {
        label: "A Wild Sheep Chase",
        key: "a-wild-sheep-chase",
        disabled: true,
        icon: renderIcon(BookIcon)
      },
      {
        label: "Dance Dance Dance",
        key: "Dance Dance Dance",
        icon: renderIcon(BookIcon),
        children: [
          {
            type: "group",
            label: "People",
            key: "people",
            children: [
              {
                label: "Narrator",
                key: "narrator",
                icon: renderIcon(PersonIcon)
              },
              {
                label: "Sheep Man",
                key: "sheep-man",
                icon: renderIcon(PersonIcon)
              }
            ]
          },
          {
            label: "Beverage",
            key: "beverage",
            icon: renderIcon(WineIcon),
            children: [
              {
                label: "Whisky",
                key: "whisky"
              }
            ]
          },
          {
            label: "Food",
            key: "food",
            children: [
              {
                label: "Sandwich",
                key: "sandwich"
              }
            ]
          },
          {
            label: "The past increases. The future recedes.",
            key: "the-past-increases-the-future-recedes"
          }
        ]
      }
    ];
    const inverted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-b3231d27><div class="page-header" data-v-b3231d27><div class="title" data-v-b3231d27>Menu</div><div class="links" data-v-b3231d27><a href="https://www.naiveui.com/en-US/light/components/menu" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-b3231d27>`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-b3231d27>`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-layout has-sider>
							<n-layout-sider
								bordered
								collapse-mode="width"
								:collapsed-width="64"
								:width="240"
								show-trigger
								:inverted="inverted"
							>
								<n-menu
									:dropdown-props="{ scrollable: true }"
									:inverted="inverted"
									:collapsed-width="64"
									:collapsed-icon-size="22"
									:options="menuOptions"
								/>
							</n-layout-sider>
							<n-layout>
								<span>Content</span>
								<n-space>
									<n-switch v-model:value="inverted" />
									inverted
								</n-space>
							</n-layout>
						</n-layout>
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { BookOutline as BookIcon, PersonOutline as Perso  WineOutline as WineIcon } from "@vicons/ionicons5"

						function renderIcon(icon: Component) {
							return () => h(  null, { default: () => h(icon) })
						}

						const menuOptions: MenuOption[] = [
							{
								label: "Hear the Wind Sing",
								key: "hear-the-wind-sing",
								icon: renderIcon(BookIcon)
							},
							{
								label: "Pinball 1973",
								key: "pinball-1973",
								icon: renderIcon(BookIcon),
								disabled: true,
								children: [
									{
										label: "Rat",
										key: "rat"
									}
								]
							},
							{
								label: "A Wild Sheep Chase",
								key: "a-wild-sheep-chase",
								disabled: true,
								icon: renderIcon(BookIcon)
							},
							{
								label: "Dance Dance Dance",
								key: "Dance Dance Dance",
								icon: renderIcon(BookIcon),
								children: [
									{
										type: "group",
										label: "People",
										key: "people",
										children: [
											{
												label: "Narrator",
												key: "narrator",
												icon: renderIcon(PersonIcon)
											},
											{
												label: "Sheep Man",
												key: "sheep-man",
												icon: renderIcon(PersonIcon)
											}
										]
									},
									{
										label: "Beverage",
										key: "beverage",
										icon: renderIcon(WineIcon),
										children: [
											{
												label: "Whisky",
												key: "whisky"
											}
										]
									},
									{
										label: "Food",
										key: "food",
										children: [
											{
												label: "Sandwich",
												key: "sandwich"
											}
										]
									},
									{
										label: "The past increases. The future recedes.",
										key: "the-past-increases-the-future-recedes"
									}
								]
							}
						]

						const inverted = ref(false)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-layout has-sider>
							<n-layout-sider
								bordered
								collapse-mode="width"
								:collapsed-width="64"
								:width="240"
								show-trigger
								:inverted="inverted"
							>
								<n-menu
									:dropdown-props="{ scrollable: true }"
									:inverted="inverted"
									:collapsed-width="64"
									:collapsed-icon-size="22"
									:options="menuOptions"
								/>
							</n-layout-sider>
							<n-layout>
								<span>Content</span>
								<n-space>
									<n-switch v-model:value="inverted" />
									inverted
								</n-space>
							</n-layout>
						</n-layout>
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { BookOutline as BookIcon, PersonOutline as Perso  WineOutline as WineIcon } from "@vicons/ionicons5"

						function renderIcon(icon: Component) {
							return () => h(  null, { default: () => h(icon) })
						}

						const menuOptions: MenuOption[] = [
							{
								label: "Hear the Wind Sing",
								key: "hear-the-wind-sing",
								icon: renderIcon(BookIcon)
							},
							{
								label: "Pinball 1973",
								key: "pinball-1973",
								icon: renderIcon(BookIcon),
								disabled: true,
								children: [
									{
										label: "Rat",
										key: "rat"
									}
								]
							},
							{
								label: "A Wild Sheep Chase",
								key: "a-wild-sheep-chase",
								disabled: true,
								icon: renderIcon(BookIcon)
							},
							{
								label: "Dance Dance Dance",
								key: "Dance Dance Dance",
								icon: renderIcon(BookIcon),
								children: [
									{
										type: "group",
										label: "People",
										key: "people",
										children: [
											{
												label: "Narrator",
												key: "narrator",
												icon: renderIcon(PersonIcon)
											},
											{
												label: "Sheep Man",
												key: "sheep-man",
												icon: renderIcon(PersonIcon)
											}
										]
									},
									{
										label: "Beverage",
										key: "beverage",
										icon: renderIcon(WineIcon),
										children: [
											{
												label: "Whisky",
												key: "whisky"
											}
										]
									},
									{
										label: "Food",
										key: "food",
										children: [
											{
												label: "Sandwich",
												key: "sandwich"
											}
										]
									},
									{
										label: "The past increases. The future recedes.",
										key: "the-past-increases-the-future-recedes"
									}
								]
							}
						]

						const inverted = ref(false)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NLayout), { "has-sider": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NLayoutSider), {
                          bordered: "",
                          "collapse-mode": "width",
                          "collapsed-width": 64,
                          width: 240,
                          "show-trigger": "",
                          inverted: inverted.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(NMenu), {
                                "dropdown-props": { scrollable: true },
                                inverted: inverted.value,
                                "collapsed-width": 64,
                                "collapsed-icon-size": 22,
                                options: menuOptions
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(NMenu), {
                                  "dropdown-props": { scrollable: true },
                                  inverted: inverted.value,
                                  "collapsed-width": 64,
                                  "collapsed-icon-size": 22,
                                  options: menuOptions
                                }, null, 8, ["inverted"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NLayout), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span data-v-b3231d27${_scopeId4}>Content</span>`);
                              _push5(ssrRenderComponent(unref(NSpace), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(NSwitch), {
                                      value: inverted.value,
                                      "onUpdate:value": ($event) => inverted.value = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(` inverted `);
                                  } else {
                                    return [
                                      createVNode(unref(NSwitch), {
                                        value: inverted.value,
                                        "onUpdate:value": ($event) => inverted.value = $event
                                      }, null, 8, ["value", "onUpdate:value"]),
                                      createTextVNode(" inverted ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("span", null, "Content"),
                                createVNode(unref(NSpace), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(NSwitch), {
                                      value: inverted.value,
                                      "onUpdate:value": ($event) => inverted.value = $event
                                    }, null, 8, ["value", "onUpdate:value"]),
                                    createTextVNode(" inverted ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NLayoutSider), {
                            bordered: "",
                            "collapse-mode": "width",
                            "collapsed-width": 64,
                            width: 240,
                            "show-trigger": "",
                            inverted: inverted.value
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NMenu), {
                                "dropdown-props": { scrollable: true },
                                inverted: inverted.value,
                                "collapsed-width": 64,
                                "collapsed-icon-size": 22,
                                options: menuOptions
                              }, null, 8, ["inverted"])
                            ]),
                            _: 1
                          }, 8, ["inverted"]),
                          createVNode(unref(NLayout), null, {
                            default: withCtx(() => [
                              createVNode("span", null, "Content"),
                              createVNode(unref(NSpace), null, {
                                default: withCtx(() => [
                                  createVNode(unref(NSwitch), {
                                    value: inverted.value,
                                    "onUpdate:value": ($event) => inverted.value = $event
                                  }, null, 8, ["value", "onUpdate:value"]),
                                  createTextVNode(" inverted ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NLayout), { "has-sider": "" }, {
                      default: withCtx(() => [
                        createVNode(unref(NLayoutSider), {
                          bordered: "",
                          "collapse-mode": "width",
                          "collapsed-width": 64,
                          width: 240,
                          "show-trigger": "",
                          inverted: inverted.value
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NMenu), {
                              "dropdown-props": { scrollable: true },
                              inverted: inverted.value,
                              "collapsed-width": 64,
                              "collapsed-icon-size": 22,
                              options: menuOptions
                            }, null, 8, ["inverted"])
                          ]),
                          _: 1
                        }, 8, ["inverted"]),
                        createVNode(unref(NLayout), null, {
                          default: withCtx(() => [
                            createVNode("span", null, "Content"),
                            createVNode(unref(NSpace), null, {
                              default: withCtx(() => [
                                createVNode(unref(NSwitch), {
                                  value: inverted.value,
                                  "onUpdate:value": ($event) => inverted.value = $event
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" inverted ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NLayout), { "has-sider": "" }, {
                    default: withCtx(() => [
                      createVNode(unref(NLayoutSider), {
                        bordered: "",
                        "collapse-mode": "width",
                        "collapsed-width": 64,
                        width: 240,
                        "show-trigger": "",
                        inverted: inverted.value
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NMenu), {
                            "dropdown-props": { scrollable: true },
                            inverted: inverted.value,
                            "collapsed-width": 64,
                            "collapsed-icon-size": 22,
                            options: menuOptions
                          }, null, 8, ["inverted"])
                        ]),
                        _: 1
                      }, 8, ["inverted"]),
                      createVNode(unref(NLayout), null, {
                        default: withCtx(() => [
                          createVNode("span", null, "Content"),
                          createVNode(unref(NSpace), null, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: inverted.value,
                                "onUpdate:value": ($event) => inverted.value = $event
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" inverted ")
                            ]),
                            _: 1
                          })
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Horizontal" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-menu mode="horizontal" :options="menuOptions" :dropdown-props="{ scrollable: true }" />
					`))} ${ssrInterpolate(js(`
						import { BookOutline as BookIcon, PersonOutline as Perso  WineOutline as WineIcon } from "@vicons/ionicons5"

						function renderIcon(icon: Component) {
							return () => h(  null, { default: () => h(icon) })
						}

						const menuOptions: MenuOption[] = [
							{
								label: "Hear the Wind Sing",
								key: "hear-the-wind-sing",
								icon: renderIcon(BookIcon)
							},
							{
								label: "Pinball 1973",
								key: "pinball-1973",
								icon: renderIcon(BookIcon),
								disabled: true,
								children: [
									{
										label: "Rat",
										key: "rat"
									}
								]
							},
							{
								label: "A Wild Sheep Chase",
								key: "a-wild-sheep-chase",
								disabled: true,
								icon: renderIcon(BookIcon)
							},
							{
								label: "Dance Dance Dance",
								key: "Dance Dance Dance",
								icon: renderIcon(BookIcon),
								children: [
									{
										type: "group",
										label: "People",
										key: "people",
										children: [
											{
												label: "Narrator",
												key: "narrator",
												icon: renderIcon(PersonIcon)
											},
											{
												label: "Sheep Man",
												key: "sheep-man",
												icon: renderIcon(PersonIcon)
											}
										]
									},
									{
										label: "Beverage",
										key: "beverage",
										icon: renderIcon(WineIcon),
										children: [
											{
												label: "Whisky",
												key: "whisky"
											}
										]
									},
									{
										label: "Food",
										key: "food",
										children: [
											{
												label: "Sandwich",
												key: "sandwich"
											}
										]
									},
									{
										label: "The past increases. The future recedes.",
										key: "the-past-increases-the-future-recedes"
									}
								]
							}
						]
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-menu mode="horizontal" :options="menuOptions" :dropdown-props="{ scrollable: true }" />
					`)) + " " + toDisplayString(js(`
						import { BookOutline as BookIcon, PersonOutline as Perso  WineOutline as WineIcon } from "@vicons/ionicons5"

						function renderIcon(icon: Component) {
							return () => h(  null, { default: () => h(icon) })
						}

						const menuOptions: MenuOption[] = [
							{
								label: "Hear the Wind Sing",
								key: "hear-the-wind-sing",
								icon: renderIcon(BookIcon)
							},
							{
								label: "Pinball 1973",
								key: "pinball-1973",
								icon: renderIcon(BookIcon),
								disabled: true,
								children: [
									{
										label: "Rat",
										key: "rat"
									}
								]
							},
							{
								label: "A Wild Sheep Chase",
								key: "a-wild-sheep-chase",
								disabled: true,
								icon: renderIcon(BookIcon)
							},
							{
								label: "Dance Dance Dance",
								key: "Dance Dance Dance",
								icon: renderIcon(BookIcon),
								children: [
									{
										type: "group",
										label: "People",
										key: "people",
										children: [
											{
												label: "Narrator",
												key: "narrator",
												icon: renderIcon(PersonIcon)
											},
											{
												label: "Sheep Man",
												key: "sheep-man",
												icon: renderIcon(PersonIcon)
											}
										]
									},
									{
										label: "Beverage",
										key: "beverage",
										icon: renderIcon(WineIcon),
										children: [
											{
												label: "Whisky",
												key: "whisky"
											}
										]
									},
									{
										label: "Food",
										key: "food",
										children: [
											{
												label: "Sandwich",
												key: "sandwich"
											}
										]
									},
									{
										label: "The past increases. The future recedes.",
										key: "the-past-increases-the-future-recedes"
									}
								]
							}
						]
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NMenu), {
              mode: "horizontal",
              options: menuOptions,
              "dropdown-props": { scrollable: true }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NMenu), {
                mode: "horizontal",
                options: menuOptions,
                "dropdown-props": { scrollable: true }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3231d27"]]);

export { Menu as default };
//# sourceMappingURL=Menu-yAVA4zk5.mjs.map
