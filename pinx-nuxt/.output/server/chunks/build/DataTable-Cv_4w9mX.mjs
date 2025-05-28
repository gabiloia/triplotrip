import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as _sfc_main$s } from './server.mjs';
import _sfc_main$1 from './Basic-pOrvwpia.mjs';
import _sfc_main$2 from './Draggable-BwdNQuet.mjs';
import Editable from './Editable-ScKvSd2J.mjs';
import _sfc_main$4 from './Empty-DpBd-mt7.mjs';
import Expand from './Expand-B6VlsTaH.mjs';
import LargeData from './LargeData-CGTgViKw.mjs';
import Merge from './Merge-BABxRaBU.mjs';
import _sfc_main$3 from './Selection-jgHaqzbq.mjs';
import Sorting from './Sorting-CIXT5xbE.mjs';
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
import './CardCodeExample-Bt7lfi6T.mjs';
import './LtrContext-CQINXXZ7.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
import '@faker-js/faker';
import './DataTable-THUU0e1c.mjs';
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
import './p-C3ycGqTc.mjs';
import './Space-gce0Xg1R.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-738bb9b8><div class="page-header" data-v-738bb9b8><div class="title" data-v-738bb9b8>Data Table</div><div class="links" data-v-738bb9b8><a href="https://www.naiveui.com/en-US/light/components/data-table" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-738bb9b8>`);
      _push(ssrRenderComponent(_sfc_main$s, {
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
//# sourceMappingURL=DataTable-Cv_4w9mX.mjs.map
