import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, unref, createVNode, createTextVNode, h, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { faker } from '@faker-js/faker';
import { useResizeObserver } from '@vueuse/core';
import { aC as useMessage, B as Button } from './server.mjs';
import { N as NDataTable } from './DataTable-UP7sR_Cj.mjs';
import './LtrContext-CUHPU62m.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BML65SQa.mjs';
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
import './Checkbox-bxBkrq-p.mjs';
import './Radio-B2UYl66o.mjs';
import './RadioGroup-DmTxk2jE.mjs';
import './get-slot-BIpdyb5h.mjs';
import './Ellipsis-DhqTC7xi.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-CHHaPGTv.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './Pagination-KytBveKB.mjs';
import './Input-VW15MloS.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-C3EjoE5y.mjs';
import './utils-DMBa_qdR.mjs';
import './Selection-CiVeFFpt.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-BGzY6WVh.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './Forward-B1Z9q27Z.mjs';
import './Popselect-C4dDToix.mjs';
import './prop-CovD8_bW.mjs';
import './download-aNT-DO08.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Draggable",
  __ssrInlineRender: true,
  setup(__props) {
    function createColumns({
      play
    }) {
      return [{
        title: "No",
        key: "no",
        width: 50
      }, {
        title: "Title",
        key: "title",
        resizable: true,
        minWidth: 200
      }, {
        title: "Length",
        key: "length",
        resizable: true,
        minWidth: 100
      }, {
        title: "Action",
        key: "actions",
        minWidth: 100,
        render: (row) => h(Button, {
          onClick: () => play(row),
          strong: true,
          tertiary: true,
          size: "small"
        }, "Play")
      }];
    }
    const data = Array.from({
      length: 50
    }, (_, i) => ({
      no: i + 1,
      title: faker.music.songName(),
      length: `${faker.number.int({
        min: 1,
        max: 8
      })}:${faker.number.int({
        min: 10,
        max: 59
      })}`
    }));
    const message = useMessage();
    const columns = ref(createColumns({
      play(row) {
        message.info(`Play ${row.title}`);
      }
    }));
    const pagination = reactive({
      page: 1,
      pageSize: 5,
      showSizePicker: true,
      simple: false,
      pageSizes: [3, 5, 7],
      onChange: (page) => {
        pagination.page = page;
      },
      onUpdatePageSize: (pageSize) => {
        pagination.pageSize = pageSize;
        pagination.page = 1;
      }
    });
    const card = ref(null);
    useResizeObserver(card, (entries) => {
      const entry = entries[0];
      const {
        width
      } = entry.contentRect;
      pagination.simple = width < 600;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({
        ref_key: "card",
        ref: card,
        title: "Column draggable"
      }, _attrs), {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Only support leaf nodes`);
          } else {
            return [createTextVNode("Only support leaf nodes")];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDataTable), {
              columns: columns.value,
              data: unref(data),
              pagination
            }, null, _parent2, _scopeId));
          } else {
            return [createVNode(unref(NDataTable), {
              columns: columns.value,
              data: unref(data),
              pagination
            }, null, 8, ["columns", "data", "pagination"])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/data-tables-components/Draggable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Draggable-xiPi1fT6.mjs.map
