import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NSwitch } from './Switch-B_SrCjtw.mjs';
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Switch</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/switch" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-switch />
						<n-switch disabled />
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-switch />
						<n-switch disabled />
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSwitch), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSwitch), { disabled: "" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSwitch)),
                    createVNode(unref(NSwitch), { disabled: "" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NSwitch)),
                  createVNode(unref(NSwitch), { disabled: "" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Size" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-switch size="small" />
						<n-switch size="medium" />
						<n-switch size="large" />
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-switch size="small" />
						<n-switch size="medium" />
						<n-switch size="large" />
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSwitch), { size: "small" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSwitch), { size: "medium" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSwitch), { size: "large" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSwitch), { size: "small" }),
                    createVNode(unref(NSwitch), { size: "medium" }),
                    createVNode(unref(NSwitch), { size: "large" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NSwitch), { size: "small" }),
                  createVNode(unref(NSwitch), { size: "medium" }),
                  createVNode(unref(NSwitch), { size: "large" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Loading" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-switch :rubber-band="false" loading />
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-switch :rubber-band="false" loading />
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSwitch), {
              "rubber-band": false,
              loading: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSwitch), {
                "rubber-band": false,
                loading: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Content" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-switch>
						<template #checked>Big wheels keep on turnin'</template>
						<template #unchecked>Carry me home to see my kin</template>
					</n-switch>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-switch>
						<template #checked>Big wheels keep on turnin'</template>
						<template #unchecked>Carry me home to see my kin</template>
					</n-switch>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSwitch), null, {
              checked: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Big wheels keep on turnin&#39;`);
                } else {
                  return [
                    createTextVNode("Big wheels keep on turnin'")
                  ];
                }
              }),
              unchecked: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Carry me home to see my kin`);
                } else {
                  return [
                    createTextVNode("Carry me home to see my kin")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSwitch), null, {
                checked: withCtx(() => [
                  createTextVNode("Big wheels keep on turnin'")
                ]),
                unchecked: withCtx(() => [
                  createTextVNode("Carry me home to see my kin")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Shape" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-switch :round="false" />
						<n-switch />
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-switch :round="false" />
						<n-switch />
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSwitch), { round: false }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSwitch), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSwitch), { round: false }),
                    createVNode(unref(NSwitch))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NSwitch), { round: false }),
                  createVNode(unref(NSwitch))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Switch-Bh5vdcN-.mjs.map
