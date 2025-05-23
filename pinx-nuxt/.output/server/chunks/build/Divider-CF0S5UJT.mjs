import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$s, a$ as NDivider } from './server.mjs';
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
  __name: "Divider",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Divider</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/divider" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div>
						Oops
						<n-divider />
						Oops
					</div>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div>
						Oops
						<n-divider />
						Oops
					</div>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Oops `);
            _push2(ssrRenderComponent(unref(NDivider), null, null, _parent2, _scopeId));
            _push2(` Oops `);
          } else {
            return [
              createTextVNode(" Oops "),
              createVNode(unref(NDivider)),
              createTextVNode(" Oops ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Title" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div>
						Oops
						<n-divider title-placement="left">Left</n-divider>
						Oops
						<n-divider title-placement="right">Right</n-divider>
						Oops
						<n-divider dashed>Dashed</n-divider>
						Oops
					</div>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div>
						Oops
						<n-divider title-placement="left">Left</n-divider>
						Oops
						<n-divider title-placement="right">Right</n-divider>
						Oops
						<n-divider dashed>Dashed</n-divider>
						Oops
					</div>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Oops `);
            _push2(ssrRenderComponent(unref(NDivider), { "title-placement": "left" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Left`);
                } else {
                  return [
                    createTextVNode("Left")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Oops `);
            _push2(ssrRenderComponent(unref(NDivider), { "title-placement": "right" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Right`);
                } else {
                  return [
                    createTextVNode("Right")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Oops `);
            _push2(ssrRenderComponent(unref(NDivider), { dashed: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Dashed`);
                } else {
                  return [
                    createTextVNode("Dashed")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Oops `);
          } else {
            return [
              createTextVNode(" Oops "),
              createVNode(unref(NDivider), { "title-placement": "left" }, {
                default: withCtx(() => [
                  createTextVNode("Left")
                ]),
                _: 1
              }),
              createTextVNode(" Oops "),
              createVNode(unref(NDivider), { "title-placement": "right" }, {
                default: withCtx(() => [
                  createTextVNode("Right")
                ]),
                _: 1
              }),
              createTextVNode(" Oops "),
              createVNode(unref(NDivider), { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode("Dashed")
                ]),
                _: 1
              }),
              createTextVNode(" Oops ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Vertical" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(` It is
					<n-divider vertical />
					not clear
					<n-divider vertical />
					to see, emmm... `))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(` It is
					<n-divider vertical />
					not clear
					<n-divider vertical />
					to see, emmm... `)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` It is `);
            _push2(ssrRenderComponent(unref(NDivider), { vertical: "" }, null, _parent2, _scopeId));
            _push2(` not clear `);
            _push2(ssrRenderComponent(unref(NDivider), { vertical: "" }, null, _parent2, _scopeId));
            _push2(` to see, emmm... `);
          } else {
            return [
              createTextVNode(" It is "),
              createVNode(unref(NDivider), { vertical: "" }),
              createTextVNode(" not clear "),
              createVNode(unref(NDivider), { vertical: "" }),
              createTextVNode(" to see, emmm... ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Divider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Divider-CF0S5UJT.mjs.map
