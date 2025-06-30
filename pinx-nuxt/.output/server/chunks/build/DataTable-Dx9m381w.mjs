import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as _export_sfc, _ as _sfc_main$o } from './server.mjs';
import _sfc_main$1 from './Basic-CwXeBov1.mjs';
import _sfc_main$2 from './Draggable-DKVdxkS6.mjs';
import Editable from './Editable-CrUqI4BC.mjs';
import _sfc_main$4 from './Empty-7lgVcmGY.mjs';
import Expand from './Expand-5QnL_0PI.mjs';
import LargeData from './LargeData-BXt3ouOt.mjs';
import Merge from './Merge-B9nxLUWG.mjs';
import _sfc_main$3 from './Selection-CibLk66v.mjs';
import Sorting from './Sorting-DIOeDy4J.mjs';
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
import './CardCodeExample-CdN9gDr0.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-S6SsK5xW.mjs';
import '@faker-js/faker';
import './DataTable-Bvk4o2Nk.mjs';
import './Checkbox-DOjB2S1h.mjs';
import './Radio-DZ4Nj5xU.mjs';
import './RadioGroup-rfsKDf3m.mjs';
import './get-slot-BIpdyb5h.mjs';
import './Ellipsis-Vf2P8jiL.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-CHHaPGTv.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './Pagination-pP1u_ela.mjs';
import './Input-VW15MloS.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-Cn-19BJa.mjs';
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
import './p-CRyTtbND.mjs';
import './Space-Cilv8mAw.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-738bb9b8><div class="page-header" data-v-738bb9b8><div class="title" data-v-738bb9b8>Data Table</div><div class="links" data-v-738bb9b8><a href="https://www.naiveui.com/en-US/light/components/data-table" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-738bb9b8>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-738bb9b8>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Merge, null, null, _parent));
      _push(ssrRenderComponent(Sorting, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(Expand, null, null, _parent));
      _push(ssrRenderComponent(LargeData, null, null, _parent));
      _push(ssrRenderComponent(Editable, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/DataTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-738bb9b8"]]);

export { DataTable as default };
//# sourceMappingURL=DataTable-Dx9m381w.mjs.map
