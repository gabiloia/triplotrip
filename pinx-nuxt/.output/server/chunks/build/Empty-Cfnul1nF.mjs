import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { N as NDataTable } from './DataTable-uLAZV9UA.mjs';
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
import './LtrContext-CjyxPKj1.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BZVO93eO.mjs';
import './Checkbox-PH_UPMG8.mjs';
import './Radio-D9VsZIQK.mjs';
import './RadioGroup-CF89wNuC.mjs';
import './get-slot-BIpdyb5h.mjs';
import './Ellipsis-DeWUnzP3.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-DNdncj4N.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './Pagination-DlqraCJ2.mjs';
import './Input-jKcDFmK2.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-CARuIkFC.mjs';
import './utils-DMBa_qdR.mjs';
import './Selection-3hlymzYk.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-CI2DF0Y8.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './Forward-B1Z9q27Z.mjs';
import './Popselect-Cg6yOK4Z.mjs';
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
//# sourceMappingURL=Empty-Cfnul1nF.mjs.map
