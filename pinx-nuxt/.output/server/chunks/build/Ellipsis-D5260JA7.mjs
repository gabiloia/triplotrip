import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, c as NText } from './server.mjs';
import { N as NEllipsis } from './Ellipsis-DeWUnzP3.mjs';
import './LtrContext-CjyxPKj1.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BZVO93eO.mjs';
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

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Ellipsis",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Ellipsis</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/ellipsis" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Basic single line ellipsis with tooltip.`);
          } else {
            return [
              createTextVNode("Basic single line ellipsis with tooltip.")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-ellipsis style="max-width: 240px">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam
					</n-ellipsis>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-ellipsis style="max-width: 240px">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam
					</n-ellipsis>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NEllipsis), { style: { "max-width": "240px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam `);
                } else {
                  return [
                    createTextVNode(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NEllipsis), { style: { "max-width": "240px" } }, {
                default: withCtx(() => [
                  createTextVNode(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Line clamp" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` See <a href="https://caniuse.com/?search=line-clamp" target="_blank" rel="nofollow noreferrer noopener"${_scopeId}> caniuse </a> for compatibility. `);
          } else {
            return [
              createTextVNode(" See "),
              createVNode("a", {
                href: "https://caniuse.com/?search=line-clamp",
                target: "_blank",
                rel: "nofollow noreferrer noopener"
              }, " caniuse "),
              createTextVNode(" for compatibility. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-ellipsis :line-clamp="2">
						Lorem ipsum dolor sit amet,
						<br />
						consectetur adipiscing elit,
						<br />
						sed do eiusmod tempor incididunt
						<br />
						ut labore et dolore magna aliqua.
						<br />
						Ut enim ad minim veniam,
						<br />
						quis nostrud exercitation ullamco
					</n-ellipsis>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-ellipsis :line-clamp="2">
						Lorem ipsum dolor sit amet,
						<br />
						consectetur adipiscing elit,
						<br />
						sed do eiusmod tempor incididunt
						<br />
						ut labore et dolore magna aliqua.
						<br />
						Ut enim ad minim veniam,
						<br />
						quis nostrud exercitation ullamco
					</n-ellipsis>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NEllipsis), { "line-clamp": 2 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, <br${_scopeId2}> consectetur adipiscing elit, <br${_scopeId2}> sed do eiusmod tempor incididunt <br${_scopeId2}> ut labore et dolore magna aliqua. <br${_scopeId2}> Ut enim ad minim veniam, <br${_scopeId2}> quis nostrud exercitation ullamco `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, "),
                    createVNode("br"),
                    createTextVNode(" consectetur adipiscing elit, "),
                    createVNode("br"),
                    createTextVNode(" sed do eiusmod tempor incididunt "),
                    createVNode("br"),
                    createTextVNode(" ut labore et dolore magna aliqua. "),
                    createVNode("br"),
                    createTextVNode(" Ut enim ad minim veniam, "),
                    createVNode("br"),
                    createTextVNode(" quis nostrud exercitation ullamco ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NEllipsis), { "line-clamp": 2 }, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, "),
                  createVNode("br"),
                  createTextVNode(" consectetur adipiscing elit, "),
                  createVNode("br"),
                  createTextVNode(" sed do eiusmod tempor incididunt "),
                  createVNode("br"),
                  createTextVNode(" ut labore et dolore magna aliqua. "),
                  createVNode("br"),
                  createTextVNode(" Ut enim ad minim veniam, "),
                  createVNode("br"),
                  createTextVNode(" quis nostrud exercitation ullamco ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Expand trigger" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Use `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`expand-trigger=&quot;click&quot;`);
                } else {
                  return [
                    createTextVNode('expand-trigger="click"')
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` with the `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`line-clamp`);
                } else {
                  return [
                    createTextVNode("line-clamp")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` parameter to achieve the function of clicking the abbreviated text to expand the complete text. `);
          } else {
            return [
              createTextVNode(" Use "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode('expand-trigger="click"')
                ]),
                _: 1
              }),
              createTextVNode(" with the "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("line-clamp")
                ]),
                _: 1
              }),
              createTextVNode(" parameter to achieve the function of clicking the abbreviated text to expand the complete text. ")
            ];
          }
        }),
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
						Lorem ipsum dolor sit amet,
						<br />
						consectetur adipiscing elit,
						<br />
						sed do eiusmod tempor incididunt
						<br />
						ut labore et dolore magna aliqua.
						<br />
						Ut enim ad minim veniam,
						<br />
						quis nostrud exercitation ullamco
					</n-ellipsis>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
						Lorem ipsum dolor sit amet,
						<br />
						consectetur adipiscing elit,
						<br />
						sed do eiusmod tempor incididunt
						<br />
						ut labore et dolore magna aliqua.
						<br />
						Ut enim ad minim veniam,
						<br />
						quis nostrud exercitation ullamco
					</n-ellipsis>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NEllipsis), {
              "expand-trigger": "click",
              "line-clamp": "2",
              tooltip: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, <br${_scopeId2}> consectetur adipiscing elit, <br${_scopeId2}> sed do eiusmod tempor incididunt <br${_scopeId2}> ut labore et dolore magna aliqua. <br${_scopeId2}> Ut enim ad minim veniam, <br${_scopeId2}> quis nostrud exercitation ullamco `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, "),
                    createVNode("br"),
                    createTextVNode(" consectetur adipiscing elit, "),
                    createVNode("br"),
                    createTextVNode(" sed do eiusmod tempor incididunt "),
                    createVNode("br"),
                    createTextVNode(" ut labore et dolore magna aliqua. "),
                    createVNode("br"),
                    createTextVNode(" Ut enim ad minim veniam, "),
                    createVNode("br"),
                    createTextVNode(" quis nostrud exercitation ullamco ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NEllipsis), {
                "expand-trigger": "click",
                "line-clamp": "2",
                tooltip: false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, "),
                  createVNode("br"),
                  createTextVNode(" consectetur adipiscing elit, "),
                  createVNode("br"),
                  createTextVNode(" sed do eiusmod tempor incididunt "),
                  createVNode("br"),
                  createTextVNode(" ut labore et dolore magna aliqua. "),
                  createVNode("br"),
                  createTextVNode(" Ut enim ad minim veniam, "),
                  createVNode("br"),
                  createTextVNode(" quis nostrud exercitation ullamco ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Ellipsis.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Ellipsis-D5260JA7.mjs.map
