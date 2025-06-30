import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { a as NImage, N as NImageGroup } from './Image-CiL9m40l.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
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
import './download-aNT-DO08.mjs';
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Image",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Image</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/image" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-image
						:img-props="{ alt: 'image' }"
						width="200"
						src="https://picsum.photos/seed/YbVNwOA/400/400"
					/>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-image
						:img-props="{ alt: 'image' }"
						width="200"
						src="https://picsum.photos/seed/YbVNwOA/400/400"
					/>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NImage), {
              "img-props": { alt: "image" },
              width: "200",
              src: "https://picsum.photos/seed/YbVNwOA/400/400"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NImage), {
                "img-props": { alt: "image" },
                width: "200",
                src: "https://picsum.photos/seed/YbVNwOA/400/400"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Image group" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-image-group>
						<n-space>
							<n-image
								:img-props="{ alt: 'image' }"
								width="200"
								src="https://picsum.photos/seed/oXUVYK/400/400"
							/>
							<n-image
								:img-props="{ alt: 'image' }"
								width="200"
								src="https://picsum.photos/seed/ip686sm/400/400"
							/>
							<n-image
								:img-props="{ alt: 'image' }"
								width="200"
								src="https://picsum.photos/seed/mkf2nv/400/400"
							/>
						</n-space>
					</n-image-group>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-image-group>
						<n-space>
							<n-image
								:img-props="{ alt: 'image' }"
								width="200"
								src="https://picsum.photos/seed/oXUVYK/400/400"
							/>
							<n-image
								:img-props="{ alt: 'image' }"
								width="200"
								src="https://picsum.photos/seed/ip686sm/400/400"
							/>
							<n-image
								:img-props="{ alt: 'image' }"
								width="200"
								src="https://picsum.photos/seed/mkf2nv/400/400"
							/>
						</n-space>
					</n-image-group>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NImageGroup), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NImage), {
                          "img-props": { alt: "image" },
                          width: "200",
                          src: "https://picsum.photos/seed/oXUVYK/400/400"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NImage), {
                          "img-props": { alt: "image" },
                          width: "200",
                          src: "https://picsum.photos/seed/ip686sm/400/400"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NImage), {
                          "img-props": { alt: "image" },
                          width: "200",
                          src: "https://picsum.photos/seed/mkf2nv/400/400"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NImage), {
                            "img-props": { alt: "image" },
                            width: "200",
                            src: "https://picsum.photos/seed/oXUVYK/400/400"
                          }),
                          createVNode(unref(NImage), {
                            "img-props": { alt: "image" },
                            width: "200",
                            src: "https://picsum.photos/seed/ip686sm/400/400"
                          }),
                          createVNode(unref(NImage), {
                            "img-props": { alt: "image" },
                            width: "200",
                            src: "https://picsum.photos/seed/mkf2nv/400/400"
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
                        createVNode(unref(NImage), {
                          "img-props": { alt: "image" },
                          width: "200",
                          src: "https://picsum.photos/seed/oXUVYK/400/400"
                        }),
                        createVNode(unref(NImage), {
                          "img-props": { alt: "image" },
                          width: "200",
                          src: "https://picsum.photos/seed/ip686sm/400/400"
                        }),
                        createVNode(unref(NImage), {
                          "img-props": { alt: "image" },
                          width: "200",
                          src: "https://picsum.photos/seed/mkf2nv/400/400"
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
              createVNode(unref(NImageGroup), null, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(NImage), {
                        "img-props": { alt: "image" },
                        width: "200",
                        src: "https://picsum.photos/seed/oXUVYK/400/400"
                      }),
                      createVNode(unref(NImage), {
                        "img-props": { alt: "image" },
                        width: "200",
                        src: "https://picsum.photos/seed/ip686sm/400/400"
                      }),
                      createVNode(unref(NImage), {
                        "img-props": { alt: "image" },
                        width: "200",
                        src: "https://picsum.photos/seed/mkf2nv/400/400"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Image-Ckjn3mqA.mjs.map
