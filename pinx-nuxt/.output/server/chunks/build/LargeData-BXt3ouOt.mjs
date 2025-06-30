import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, h, useSSRContext } from 'vue';
import { N as NDataTable } from './DataTable-Bvk4o2Nk.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as _export_sfc } from './server.mjs';
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
import './Checkbox-DOjB2S1h.mjs';
import 'evtd';
import './Radio-DZ4Nj5xU.mjs';
import './RadioGroup-rfsKDf3m.mjs';
import './get-slot-BIpdyb5h.mjs';
import 'lodash-es';
import './Ellipsis-Vf2P8jiL.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-CHHaPGTv.mjs';
import './VirtualList-xBpsIw2j.mjs';
import '@css-render/vue3-ssr';
import 'treemate';
import './Pagination-pP1u_ela.mjs';
import './Input-VW15MloS.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-Cn-19BJa.mjs';
import 'vdirs';
import './utils-DMBa_qdR.mjs';
import './Selection-DmCMUIfq.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-OKwjnwtS.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './Forward-ggOyj9WR.mjs';
import './Popselect-oknqzXag.mjs';
import './prop-CovD8_bW.mjs';
import './download-aNT-DO08.mjs';
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
import 'lodash/uniq.js';
import '@iconify/vue';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const columns = [
  {
    type: "selection",
    fixed: "left"
  },
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age"
  },
  {
    title: "Row",
    key: "row",
    render(row, index) {
      return h("span", ["row ", index]);
    }
  },
  {
    title: "Row1",
    key: "row1",
    render(row, index) {
      return h("span", ["row ", index]);
    }
  },
  {
    title: "Row2",
    key: "row2",
    render(row, index) {
      return h("span", ["row ", index]);
    }
  },
  {
    title: "Address",
    key: "address"
  }
];
const _sfc_main = defineComponent({
  components: { NDataTable },
  setup() {
    const data = Array.from({ length: 5e3 }).map((_, index) => ({
      key: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }));
    return {
      data,
      columns
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardCodeExample = __nuxt_component_0;
  const _component_n_data_table = resolveComponent("n-data-table");
  _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Large Data" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_n_data_table, {
          columns: _ctx.columns,
          data: _ctx.data,
          "max-height": 250,
          "scroll-x": 1800,
          "virtual-scroll": ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_n_data_table, {
            columns: _ctx.columns,
            data: _ctx.data,
            "max-height": 250,
            "scroll-x": 1800,
            "virtual-scroll": ""
          }, null, 8, ["columns", "data"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/data-tables-components/LargeData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LargeData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LargeData as default };
//# sourceMappingURL=LargeData-BXt3ouOt.mjs.map
