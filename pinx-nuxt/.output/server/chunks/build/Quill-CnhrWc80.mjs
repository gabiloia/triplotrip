import { defineComponent, ref, defineAsyncComponent, mergeProps, unref, withCtx, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$o, N as NCard } from './server.mjs';
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
import 'vooks';
import '@vueuse/core';
import 'lodash/set.js';
import 'seemly';
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
  __name: "Quill",
  __ssrInlineRender: true,
  setup(__props) {
    const mounted = ref(false);
    const QuillEditor = defineAsyncComponent(() => {
      return (async () => {
        const { QuillEditor: QuillEditor2 } = await import('@vueup/vue-quill');
        return QuillEditor2;
      })();
    });
    function resetScroll() {
      (void 0).scrollTo(0, 0);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Quill</div><div class="links"><a href="https://vueup.github.io/vue-quill/" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div>`);
      _push(ssrRenderComponent(unref(NCard), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (mounted.value) {
              _push2(ssrRenderComponent(unref(QuillEditor), {
                theme: "snow",
                toolbar: "minimal",
                class: "h-[60vh]! w-full",
                onBlur: ($event) => resetScroll()
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              mounted.value ? (openBlock(), createBlock(unref(QuillEditor), {
                key: 0,
                theme: "snow",
                toolbar: "minimal",
                class: "h-[60vh]! w-full",
                onBlur: ($event) => resetScroll()
              }, null, 8, ["onBlur"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Editors/Quill.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Quill-CnhrWc80.mjs.map
