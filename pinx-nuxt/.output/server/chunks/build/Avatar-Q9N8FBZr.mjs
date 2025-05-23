import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$s, c as NAvatar, aW as NText, bw as NBadge } from './server.mjs';
import { N as NAvatarGroup } from './AvatarGroup-No56_Jox.mjs';
import './LtrContext-DmPOw2ck.mjs';
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

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      {
        name: "Leonardo DiCaprio",
        src: "https://picsum.photos/seed/6UEM8dcF/460/460"
      },
      {
        name: "Jennifer Lawrence",
        src: "https://picsum.photos/seed/FsNXmz/460/460"
      },
      {
        name: "Audrey Hepburn",
        src: "https://picsum.photos/seed/6UEM8dcF/460/460"
      },
      {
        name: "Anne Hathaway",
        src: "https://picsum.photos/seed/FsNXmz/460/460"
      },
      {
        name: "Taylor Swift",
        src: "https://picsum.photos/seed/6UEM8dcF/460/460"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Avatar</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/avatar" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Size" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Avatar has `);
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
            _push2(` sizes. You could also use a custom px number for size. `);
          } else {
            return [
              createTextVNode(" Avatar has "),
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
              createTextVNode(" sizes. You could also use a custom px number for size. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="small"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="medium"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="large"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						:size="48"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="small"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="medium"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="large"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						:size="48"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NAvatar), {
              "img-props": { alt: "avatar" },
              size: "small",
              src: "https://picsum.photos/seed/FsNXmz/460/460"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NAvatar), {
              "img-props": { alt: "avatar" },
              size: "medium",
              src: "https://picsum.photos/seed/FsNXmz/460/460"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NAvatar), {
              "img-props": { alt: "avatar" },
              size: "large",
              src: "https://picsum.photos/seed/FsNXmz/460/460"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NAvatar), {
              "img-props": { alt: "avatar" },
              size: 48,
              src: "https://picsum.photos/seed/FsNXmz/460/460"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-4" }, [
                createVNode(unref(NAvatar), {
                  "img-props": { alt: "avatar" },
                  size: "small",
                  src: "https://picsum.photos/seed/FsNXmz/460/460"
                }),
                createVNode(unref(NAvatar), {
                  "img-props": { alt: "avatar" },
                  size: "medium",
                  src: "https://picsum.photos/seed/FsNXmz/460/460"
                }),
                createVNode(unref(NAvatar), {
                  "img-props": { alt: "avatar" },
                  size: "large",
                  src: "https://picsum.photos/seed/FsNXmz/460/460"
                }),
                createVNode(unref(NAvatar), {
                  "img-props": { alt: "avatar" },
                  size: 48,
                  src: "https://picsum.photos/seed/FsNXmz/460/460"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Shape" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Avatar can be `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`round`);
                } else {
                  return [
                    createTextVNode("round")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Avatar can be "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("round")
                ]),
                _: 1
              })
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-avatar :img-props="{ alt: 'avatar' }" src="https://picsum.photos/seed/FsNXmz/460/460" />
					<n-avatar :img-props="{ alt: 'avatar' }" round src="https://picsum.photos/seed/FsNXmz/460/460" />
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-avatar :img-props="{ alt: 'avatar' }" src="https://picsum.photos/seed/FsNXmz/460/460" />
					<n-avatar :img-props="{ alt: 'avatar' }" round src="https://picsum.photos/seed/FsNXmz/460/460" />
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NAvatar), {
              "img-props": { alt: "avatar" },
              src: "https://picsum.photos/seed/FsNXmz/460/460"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NAvatar), {
              "img-props": { alt: "avatar" },
              round: "",
              src: "https://picsum.photos/seed/FsNXmz/460/460"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-4" }, [
                createVNode(unref(NAvatar), {
                  "img-props": { alt: "avatar" },
                  src: "https://picsum.photos/seed/FsNXmz/460/460"
                }),
                createVNode(unref(NAvatar), {
                  "img-props": { alt: "avatar" },
                  round: "",
                  src: "https://picsum.photos/seed/FsNXmz/460/460"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Badge" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Using it with `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`badge`);
                } else {
                  return [
                    createTextVNode("badge")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` would be nice (if you like tons of notifications). `);
          } else {
            return [
              createTextVNode(" Using it with "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("badge")
                ]),
                _: 1
              }),
              createTextVNode(" would be nice (if you like tons of notifications). ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-badge value="999+">
						<n-avatar :img-props="{ alt: 'avatar' }">App</n-avatar>
					</n-badge>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-badge value="999+">
						<n-avatar :img-props="{ alt: 'avatar' }">App</n-avatar>
					</n-badge>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NBadge), { value: "999+" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NAvatar), { "img-props": { alt: "avatar" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`App`);
                      } else {
                        return [
                          createTextVNode("App")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } }, {
                      default: withCtx(() => [
                        createTextVNode("App")
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
              createVNode(unref(NBadge), { value: "999+" }, {
                default: withCtx(() => [
                  createVNode(unref(NAvatar), { "img-props": { alt: "avatar" } }, {
                    default: withCtx(() => [
                      createTextVNode("App")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Fallback" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Show 07akioni if loading fails.`);
          } else {
            return [
              createTextVNode("Show 07akioni if loading fails.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						round
						size="small"
						src="empty.png"
						fallback-src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						round
						size="small"
						src="empty.png"
						fallback-src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NAvatar), {
              "img-props": { alt: "avatar" },
              round: "",
              size: "small",
              src: "empty.png",
              "fallback-src": "https://picsum.photos/seed/FsNXmz/460/460"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NAvatar), {
                "img-props": { alt: "avatar" },
                round: "",
                size: "small",
                src: "empty.png",
                "fallback-src": "https://picsum.photos/seed/FsNXmz/460/460"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Content size" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Text is resized to fit the avatar.`);
          } else {
            return [
              createTextVNode("Text is resized to fit the avatar.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-avatar :img-props="{ alt: 'avatar' }" round>ABC</n-avatar>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-avatar :img-props="{ alt: 'avatar' }" round>ABC</n-avatar>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NAvatar), {
              "img-props": { alt: "avatar" },
              round: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ABC`);
                } else {
                  return [
                    createTextVNode("ABC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NAvatar), {
                "img-props": { alt: "avatar" },
                round: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("ABC")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Avatar Group" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Crowded people`);
          } else {
            return [
              createTextVNode("Crowded people")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-avatar-group :options :size="40" :max="3" />
					`))} ${ssrInterpolate(js(`
								const options = [
									{
										name: "Leonardo DiCaprio",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									},
									{
										name: "Jennifer Lawrence",
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									},
									{
										name: "Audrey Hepburn",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									},
									{
										name: "Anne Hathaway",
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									},
									{
										name: "Taylor Swift",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									}
								]
							`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-avatar-group :options :size="40" :max="3" />
					`)) + " " + toDisplayString(js(`
								const options = [
									{
										name: "Leonardo DiCaprio",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									},
									{
										name: "Jennifer Lawrence",
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									},
									{
										name: "Audrey Hepburn",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									},
									{
										name: "Anne Hathaway",
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									},
									{
										name: "Taylor Swift",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									}
								]
							`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NAvatarGroup), {
              options,
              size: 40,
              max: 3
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NAvatarGroup), {
                options,
                size: 40,
                max: 3
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Avatar-Q9N8FBZr.mjs.map
