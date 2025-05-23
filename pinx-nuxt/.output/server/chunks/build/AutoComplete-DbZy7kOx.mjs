import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$s } from './server.mjs';
import { N as NAutoComplete } from './AutoComplete-CbXdYDIn.mjs';
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
import './Input-DOxGe8j0.mjs';
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AutoComplete",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("");
    const options = computed(() => {
      return ["@gmail.com", "@163.com", "@qq.com"].map((suffix) => {
        const prefix = value.value.split("@")[0];
        return {
          label: prefix + suffix,
          value: prefix + suffix
        };
      });
    });
    function getShow(value2) {
      if (value2 === "a") {
        return true;
      }
      return false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">AutoComplete</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/auto-complete" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start typing to see how this works.`);
          } else {
            return [
              createTextVNode("Start typing to see how this works.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-auto-complete
						v-model:value="value"
						:input-props="{
							autocomplete: 'disabled'
						}"
						:options
						placeholder="Email"
					/>
					`))} ${ssrInterpolate(js(`
						const value = ref("")
						const options = computed(() => {
							return ["@gmail.com", "@163.com", "@qq.com"].map(suffix => {
								const prefix = value.value.split("@")[0]
								return {
									label: prefix + suffix,
									value: prefix + suffix
								}
							})
						})
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-auto-complete
						v-model:value="value"
						:input-props="{
							autocomplete: 'disabled'
						}"
						:options
						placeholder="Email"
					/>
					`)) + " " + toDisplayString(js(`
						const value = ref("")
						const options = computed(() => {
							return ["@gmail.com", "@163.com", "@qq.com"].map(suffix => {
								const prefix = value.value.split("@")[0]
								return {
									label: prefix + suffix,
									value: prefix + suffix
								}
							})
						})
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NAutoComplete), {
              value: value.value,
              "onUpdate:value": ($event) => value.value = $event,
              "input-props": {
                autocomplete: "disabled"
              },
              options: options.value,
              placeholder: "Email"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NAutoComplete), {
                value: value.value,
                "onUpdate:value": ($event) => value.value = $event,
                "input-props": {
                  autocomplete: "disabled"
                },
                options: options.value,
                placeholder: "Email"
              }, null, 8, ["value", "onUpdate:value", "options"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Whether to show menu" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Your can determine is whether to show menu based on value when it is focused. `);
          } else {
            return [
              createTextVNode(" Your can determine is whether to show menu based on value when it is focused. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-auto-complete
						v-model:value="value"
						:options
						placeholder="Input 'a' to show menu"
						:get-show="getShow"
					/>
					`))} ${ssrInterpolate(js(`
						const value = ref("")
						const options = computed(() => {
							return ["@gmail.com", "@163.com", "@qq.com"].map(suffix => {
								const prefix = value.value.split("@")[0]
								return {
									label: prefix + suffix,
									value: prefix + suffix
								}
							})
						})
						const getShow = (value: string) => {
							if (value === "a") {
								return true
							}
							return false
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-auto-complete
						v-model:value="value"
						:options
						placeholder="Input 'a' to show menu"
						:get-show="getShow"
					/>
					`)) + " " + toDisplayString(js(`
						const value = ref("")
						const options = computed(() => {
							return ["@gmail.com", "@163.com", "@qq.com"].map(suffix => {
								const prefix = value.value.split("@")[0]
								return {
									label: prefix + suffix,
									value: prefix + suffix
								}
							})
						})
						const getShow = (value: string) => {
							if (value === "a") {
								return true
							}
							return false
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NAutoComplete), {
              value: value.value,
              "onUpdate:value": ($event) => value.value = $event,
              options: options.value,
              placeholder: "Input 'a' to show menu",
              "get-show": getShow
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NAutoComplete), {
                value: value.value,
                "onUpdate:value": ($event) => value.value = $event,
                options: options.value,
                placeholder: "Input 'a' to show menu",
                "get-show": getShow
              }, null, 8, ["value", "onUpdate:value", "options"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/AutoComplete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AutoComplete-DbZy7kOx.mjs.map
