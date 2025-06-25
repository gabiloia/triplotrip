import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
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

const ExternalIcon = "tabler:external-link";
const GameControllerOutline = "ion:game-controller-outline";
const GameController = "ion:game-controller";
const Checkmark16Filled = "fluent:checkmark-16-filled";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Icon</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/icon" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-icon size="40">
						<game-controller-outline />
					</n-icon>
					<n-icon size="40" color="#0e7a0d">
						<game-controller />
					</n-icon>
					<n-icon size="40" :component="GameController" />
					`))} ${ssrInterpolate(js(`
						import { GameControllerOutline, GameController } from '@vicons/ionicons5'
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-icon size="40">
						<game-controller-outline />
					</n-icon>
					<n-icon size="40" color="#0e7a0d">
						<game-controller />
					</n-icon>
					<n-icon size="40" :component="GameController" />
					`)) + " " + toDisplayString(js(`
						import { GameControllerOutline, GameController } from '@vicons/ionicons5'
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$o, {
              name: GameControllerOutline,
              size: 40
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, {
              name: GameController,
              size: 40,
              color: "#0e7a0d"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, {
              name: GameController,
              size: 40
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$o, {
                name: GameControllerOutline,
                size: 40
              }),
              createVNode(_sfc_main$o, {
                name: GameController,
                size: 40,
                color: "#0e7a0d"
              }),
              createVNode(_sfc_main$o, {
                name: GameController,
                size: 40
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Icon with background" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sometime it looks better with a background.`);
          } else {
            return [
              createTextVNode("Sometime it looks better with a background.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-icon-wrapper :size="24" :border-radius="10">
						<n-icon :size="18" :component="Checkmark16Filled" />
					</n-icon-wrapper>
					`))} ${ssrInterpolate(js(`import Checkmark16Filled from '@vicons/fluent/Checkmark16Filled'`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-icon-wrapper :size="24" :border-radius="10">
						<n-icon :size="18" :component="Checkmark16Filled" />
					</n-icon-wrapper>
					`)) + " " + toDisplayString(js(`import Checkmark16Filled from '@vicons/fluent/Checkmark16Filled'`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$o, {
              name: Checkmark16Filled,
              "bg-size": 24,
              size: 18,
              "border-radius": 10,
              "bg-color": "#0e7a0d",
              color: "#fff"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$o, {
                name: Checkmark16Filled,
                "bg-size": 24,
                size: 18,
                "border-radius": 10,
                "bg-color": "#0e7a0d",
                color: "#fff"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Icon-B0ANh23i.mjs.map
