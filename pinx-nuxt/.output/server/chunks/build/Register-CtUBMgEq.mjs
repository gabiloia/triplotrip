import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { S as Settings, A as AuthForm } from './Settings-CZ4zCdTy.mjs';
import { _ as _export_sfc, aY as useAuthStore } from './server.mjs';
import { useRoute } from 'vue-router';
import './FormItem-DAK_fF_C.mjs';
import 'async-validator';
import 'lodash-es';
import 'seemly';
import './use-collection-Dfn99m8m.mjs';
import './Input-DOxGe8j0.mjs';
import 'evtd';
import 'vooks';
import './Suffix-DBR_9G3J.mjs';
import './Eye-DafrR3c8.mjs';
import './Checkbox-kHPptutx.mjs';
import '@iconify/vue';
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
import 'lodash/castArray.js';
import '@css-render/vue3-ssr';
import 'deep-pick-omit';
import 'colord';
import 'lodash/get.js';
import '@vueuse/core';
import 'lodash/set.js';
import '@css-render/plugin-bem';
import 'css-render';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'vdirs';
import 'lodash/uniq.js';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    formType: {}
  },
  setup(__props) {
    useRoute();
    const align = ref("left");
    const activeColor = ref("");
    const type = ref(__props.formType || "signup");
    const authStore = useAuthStore();
    const isLogged = computed(() => authStore.isLogged);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--7e28f747": activeColor.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-auth" }, _attrs, _cssVars))} data-v-2cd8c0b0>`);
      if (!isLogged.value) {
        _push(ssrRenderComponent(Settings, {
          align: align.value,
          "onUpdate:align": ($event) => align.value = $event,
          "active-color": activeColor.value,
          "onUpdate:activeColor": ($event) => activeColor.value = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isLogged.value) {
        _push(`<div class="wrapper flex justify-center" data-v-2cd8c0b0>`);
        if (align.value === "right") {
          _push(`<div class="image-box basis-2/3" data-v-2cd8c0b0></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([{ centered: align.value === "center" }, "form-box flex basis-1/3 items-center justify-center"])}" data-v-2cd8c0b0>`);
        _push(ssrRenderComponent(AuthForm, {
          type: type.value,
          "use-only-router": ""
        }, null, _parent));
        _push(`</div>`);
        if (align.value === "left") {
          _push(`<div class="image-box basis-2/3" data-v-2cd8c0b0></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cd8c0b0"]]);

export { Register as default };
//# sourceMappingURL=Register-CtUBMgEq.mjs.map
