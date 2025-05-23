import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { N as NDataTable } from './DataTable-THUU0e1c.mjs';
import './server.mjs';
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
import './LtrContext-DmPOw2ck.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
import './Checkbox-kHPptutx.mjs';
import './Radio-h1-xnT2t.mjs';
import './RadioGroup-DaOAh_3e.mjs';
import './get-slot-BIpdyb5h.mjs';
import './Ellipsis-DEMoWcxh.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-DBR_9G3J.mjs';
import './Pagination-BuCFwoQU.mjs';
import './Input-DOxGe8j0.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-CJatCJlw.mjs';
import './Selection-7aS0-4xx.mjs';
import './Forward-B1Z9q27Z.mjs';
import './prop-CovD8_bW.mjs';
import './download-aNT-DO08.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Empty",
  __ssrInlineRender: true,
  setup(__props) {
    function createColumns() {
      return [{
        title: "No",
        key: "no"
      }, {
        title: "Title",
        key: "title"
      }, {
        title: "Length",
        key: "length"
      }, {
        title: "Action",
        key: "actions"
      }];
    }
    const data = [];
    const columns = ref(createColumns());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({
        title: "Empty"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDataTable), {
              columns: columns.value,
              data
            }, null, _parent2, _scopeId));
          } else {
            return [createVNode(unref(NDataTable), {
              columns: columns.value,
              data
            }, null, 8, ["columns"])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/data-tables-components/Empty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Empty-BFx_EPpa.mjs.map
