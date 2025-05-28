import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { a_ as useMessage, aU as renderIcon, a as _sfc_main$s, aV as NDropdown, B as Button, aW as NText } from './server.mjs';
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
const UserIcon = "ion:person-circle-outline";
const EditIcon = "ion:pencil";
const LogoutIcon = "ion:log-out-outline";
const ArrowRedoOutline = "ion:arrow-redo-outline";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const xRef = ref(0);
    const yRef = ref(0);
    const showDropdown = ref(false);
    const message = useMessage();
    const options = ref([
      {
        label: "Marina Bay Sands",
        key: "marina bay sands",
        disabled: true,
        icon: renderIcon(UserIcon)
      },
      {
        label: "Brown's Hotel, London",
        key: "brown's hotel, london",
        icon: renderIcon(EditIcon)
      },
      {
        label: "Cascade",
        key: "cascade",
        icon: renderIcon(ArrowRedoOutline),
        children: [
          {
            label: "Jordan Baker",
            key: "jordan baker"
          },
          {
            label: "Tom Buchanan",
            key: "tom buchanan",
            disabled: true
          },
          {
            label: "Others",
            key: "others2",
            children: [
              {
                label: "Chicken",
                key: "chicken"
              },
              {
                label: "Beef",
                key: "beef"
              }
            ]
          }
        ]
      },
      {
        label: "Atlantis Bahamas, Nassau",
        key: "atlantis nahamas, nassau",
        icon: renderIcon(LogoutIcon)
      },
      {
        label: "The Beverly Hills Hotel, Los Angeles",
        key: "the beverly hills hotel, los angeles",
        icon: renderIcon(ExternalIcon)
      }
    ]);
    function handleSelect(key) {
      message.info(String(key));
    }
    function handleContextMenu(e) {
      e.preventDefault();
      showDropdown.value = false;
      nextTick().then(() => {
        showDropdown.value = true;
        xRef.value = e.clientX;
        yRef.value = e.clientY;
      });
    }
    function onClickoutside() {
      message.info("clickoutside");
      showDropdown.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Dropdown</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/dropdown" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A basic dropdown.`);
          } else {
            return [
              createTextVNode("A basic dropdown.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-dropdown trigger="hover" :options @select="handleSelect" :scrollable="true">
						<n-button>Go For a Trip</n-button>
					</n-dropdown>
					`))} ${ssrInterpolate(js(`
						import { PersonCircleOutline as UserIcon, Pencil as EditIcon, LogOutOutline as LogoutIcon } from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-dropdown trigger="hover" :options @select="handleSelect" :scrollable="true">
						<n-button>Go For a Trip</n-button>
					</n-dropdown>
					`)) + " " + toDisplayString(js(`
						import { PersonCircleOutline as UserIcon, Pencil as EditIcon, LogOutOutline as LogoutIcon } from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDropdown), {
              trigger: "hover",
              options: options.value,
              scrollable: true,
              onSelect: handleSelect
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Go For a Trip`);
                      } else {
                        return [
                          createTextVNode("Go For a Trip")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Go For a Trip")
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
              createVNode(unref(NDropdown), {
                trigger: "hover",
                options: options.value,
                scrollable: true,
                onSelect: handleSelect
              }, {
                default: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Go For a Trip")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["options"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Trigger" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Different ways to `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`trigger`);
                } else {
                  return [
                    createTextVNode("trigger")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` / `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`show`);
                } else {
                  return [
                    createTextVNode("show")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` a dropdown. `);
          } else {
            return [
              createTextVNode(" Different ways to "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("trigger")
                ]),
                _: 1
              }),
              createTextVNode(" / "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("show")
                ]),
                _: 1
              }),
              createTextVNode(" a dropdown. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-dropdown trigger="hover" :options @select="handleSelect" :scrollable="true">
							<n-button>Hover!</n-button>
						</n-dropdown>
						<n-dropdown trigger="click" :options @select="handleSelect" :scrollable="true">
							<n-button>Click!</n-button>
						</n-dropdown>
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { PersonCircleOutline as UserIcon, Pencil as EditIcon, LogOutOutline as LogoutIcon } from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-dropdown trigger="hover" :options @select="handleSelect" :scrollable="true">
							<n-button>Hover!</n-button>
						</n-dropdown>
						<n-dropdown trigger="click" :options @select="handleSelect" :scrollable="true">
							<n-button>Click!</n-button>
						</n-dropdown>
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { PersonCircleOutline as UserIcon, Pencil as EditIcon, LogOutOutline as LogoutIcon } from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
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
                  _push3(ssrRenderComponent(unref(NDropdown), {
                    trigger: "hover",
                    options: options.value,
                    scrollable: true,
                    onSelect: handleSelect
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Hover!`);
                            } else {
                              return [
                                createTextVNode("Hover!")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Hover!")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NDropdown), {
                    trigger: "click",
                    options: options.value,
                    scrollable: true,
                    onSelect: handleSelect
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Click!`);
                            } else {
                              return [
                                createTextVNode("Click!")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), null, {
                            default: withCtx(() => [
                              createTextVNode("Click!")
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
                    createVNode(unref(NDropdown), {
                      trigger: "hover",
                      options: options.value,
                      scrollable: true,
                      onSelect: handleSelect
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Hover!")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["options"]),
                    createVNode(unref(NDropdown), {
                      trigger: "click",
                      options: options.value,
                      scrollable: true,
                      onSelect: handleSelect
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Button), null, {
                          default: withCtx(() => [
                            createTextVNode("Click!")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NDropdown), {
                    trigger: "hover",
                    options: options.value,
                    scrollable: true,
                    onSelect: handleSelect
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Hover!")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["options"]),
                  createVNode(unref(NDropdown), {
                    trigger: "click",
                    options: options.value,
                    scrollable: true,
                    onSelect: handleSelect
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), null, {
                        default: withCtx(() => [
                          createTextVNode("Click!")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["options"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Cascade" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dropdown options can be cascaded.`);
          } else {
            return [
              createTextVNode("Dropdown options can be cascaded.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-dropdown
						:options
						placement="bottom-start"
						trigger="click"
						@select="handleSelect"
						:scrollable="true"
					>
						<n-button>The Great Gatsby characters</n-button>
					</n-dropdown>
					`))} ${ssrInterpolate(js(`
						import {
							PersonCircleOutline as UserIcon,
							Pencil as EditIcon,
							LogOutOutline as LogoutIcon,
							ArrowRedoOutline
						} from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Cascade",
								key: "cascade",
								icon: renderIcon(ArrowRedoOutline),
								children: [
									{
										label: "Jordan Baker",
										key: "jordan baker"
									},
									{
										label: "Tom Buchanan",
										key: "tom buchanan"
									},
									{
										label: "Others",
										key: "others2",
										disabled: true,
										children: [
											{
												label: "Chicken",
												key: "chicken"
											},
											{
												label: "Beef",
												key: "beef"
											}
										]
									}
								]
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						function handleClick() {
							showDropdown.value = !showDropdown.value
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-dropdown
						:options
						placement="bottom-start"
						trigger="click"
						@select="handleSelect"
						:scrollable="true"
					>
						<n-button>The Great Gatsby characters</n-button>
					</n-dropdown>
					`)) + " " + toDisplayString(js(`
						import {
							PersonCircleOutline as UserIcon,
							Pencil as EditIcon,
							LogOutOutline as LogoutIcon,
							ArrowRedoOutline
						} from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Cascade",
								key: "cascade",
								icon: renderIcon(ArrowRedoOutline),
								children: [
									{
										label: "Jordan Baker",
										key: "jordan baker"
									},
									{
										label: "Tom Buchanan",
										key: "tom buchanan"
									},
									{
										label: "Others",
										key: "others2",
										disabled: true,
										children: [
											{
												label: "Chicken",
												key: "chicken"
											},
											{
												label: "Beef",
												key: "beef"
											}
										]
									}
								]
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						function handleClick() {
							showDropdown.value = !showDropdown.value
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDropdown), {
              options: options.value,
              placement: "bottom-start",
              trigger: "click",
              scrollable: true,
              onSelect: handleSelect
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`The Great Gatsby characters`);
                      } else {
                        return [
                          createTextVNode("The Great Gatsby characters")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("The Great Gatsby characters")
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
              createVNode(unref(NDropdown), {
                options: options.value,
                placement: "bottom-start",
                trigger: "click",
                scrollable: true,
                onSelect: handleSelect
              }, {
                default: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("The Great Gatsby characters")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["options"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Manually positioned" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Warning: when manually positioned, the `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`trigger`);
                } else {
                  return [
                    createTextVNode("trigger")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` prop must be set to `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`&#39;manual&#39;`);
                } else {
                  return [
                    createTextVNode("'manual'")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` . `);
          } else {
            return [
              createTextVNode(" Warning: when manually positioned, the "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("trigger")
                ]),
                _: 1
              }),
              createTextVNode(" prop must be set to "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("'manual'")
                ]),
                _: 1
              }),
              createTextVNode(" . ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div
						style="width: 200px; height: 200px; background-color: rgba(0, 128, 0, 0.5)"
						@contextmenu="handleContextMenu"
					>
						Right Click
					</div>
					<n-dropdown
						placement="bottom-start"
						trigger="manual"
						:scrollable="true"
						:x="xRef"
						:y="yRef"
						:options
						:show="showDropdown"
						:on-clickoutside="onClickoutside"
						@select="handleSelect"
					/>
					`))} ${ssrInterpolate(js(`
						import {
							PersonCircleOutline as UserIcon,
							Pencil as EditIcon,
							LogOutOutline as LogoutIcon,
							ArrowRedoOutline
						} from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const xRef = ref(0)
						const yRef = ref(0)
						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Cascade",
								key: "cascade",
								icon: renderIcon(ArrowRedoOutline),
								children: [
									{
										label: "Jordan Baker",
										key: "jordan baker"
									},
									{
										label: "Tom Buchanan",
										key: "tom buchanan",
										disabled: true
									},
									{
										label: "Others",
										key: "others2",
										children: [
											{
												label: "Chicken",
												key: "chicken"
											},
											{
												label: "Beef",
												key: "beef"
											}
										]
									}
								]
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						function handleContextMenu(e: MouseEvent) {
							e.preventDefault()
							showDropdown.value = false
							nextTick().then(() => {
								showDropdown.value = true
								xRef.value = e.clientX
								yRef.value = e.clientY
							})
						}
						function onClickoutside() {
							message.info("clickoutside")
							showDropdown.value = false
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div
						style="width: 200px; height: 200px; background-color: rgba(0, 128, 0, 0.5)"
						@contextmenu="handleContextMenu"
					>
						Right Click
					</div>
					<n-dropdown
						placement="bottom-start"
						trigger="manual"
						:scrollable="true"
						:x="xRef"
						:y="yRef"
						:options
						:show="showDropdown"
						:on-clickoutside="onClickoutside"
						@select="handleSelect"
					/>
					`)) + " " + toDisplayString(js(`
						import {
							PersonCircleOutline as UserIcon,
							Pencil as EditIcon,
							LogOutOutline as LogoutIcon,
							ArrowRedoOutline
						} from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const xRef = ref(0)
						const yRef = ref(0)
						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Cascade",
								key: "cascade",
								icon: renderIcon(ArrowRedoOutline),
								children: [
									{
										label: "Jordan Baker",
										key: "jordan baker"
									},
									{
										label: "Tom Buchanan",
										key: "tom buchanan",
										disabled: true
									},
									{
										label: "Others",
										key: "others2",
										children: [
											{
												label: "Chicken",
												key: "chicken"
											},
											{
												label: "Beef",
												key: "beef"
											}
										]
									}
								]
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						function handleContextMenu(e: MouseEvent) {
							e.preventDefault()
							showDropdown.value = false
							nextTick().then(() => {
								showDropdown.value = true
								xRef.value = e.clientX
								yRef.value = e.clientY
							})
						}
						function onClickoutside() {
							message.info("clickoutside")
							showDropdown.value = false
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "width": "200px", "height": "200px", "background-color": "rgba(0, 128, 0, 0.5)" })}"${_scopeId}> Right Click </div>`);
            _push2(ssrRenderComponent(unref(NDropdown), {
              placement: "bottom-start",
              trigger: "manual",
              scrollable: true,
              x: xRef.value,
              y: yRef.value,
              options: options.value,
              show: showDropdown.value,
              "on-clickoutside": onClickoutside,
              onSelect: handleSelect
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                style: { "width": "200px", "height": "200px", "background-color": "rgba(0, 128, 0, 0.5)" },
                onContextmenu: handleContextMenu
              }, " Right Click ", 32),
              createVNode(unref(NDropdown), {
                placement: "bottom-start",
                trigger: "manual",
                scrollable: true,
                x: xRef.value,
                y: yRef.value,
                options: options.value,
                show: showDropdown.value,
                "on-clickoutside": onClickoutside,
                onSelect: handleSelect
              }, null, 8, ["x", "y", "options", "show"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Dropdown-ec5BCluP.mjs.map
