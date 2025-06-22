import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, unref, createVNode, h, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { faker } from '@faker-js/faker';
import { useResizeObserver } from '@vueuse/core';
import { N as NDataTable } from './DataTable-uLAZV9UA.mjs';
import { aB as useMessage, B as Button } from './server.mjs';
import './LtrContext-CjyxPKj1.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BZVO93eO.mjs';
import 'seemly';
import 'vooks';
import './Checkbox-PH_UPMG8.mjs';
import 'evtd';
import './Radio-D9VsZIQK.mjs';
import './RadioGroup-CF89wNuC.mjs';
import './get-slot-BIpdyb5h.mjs';
import 'lodash-es';
import './Ellipsis-DeWUnzP3.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-DNdncj4N.mjs';
import './VirtualList-xBpsIw2j.mjs';
import '@css-render/vue3-ssr';
import 'treemate';
import './Pagination-DlqraCJ2.mjs';
import './Input-jKcDFmK2.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-CARuIkFC.mjs';
import 'vdirs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Basic",
  __ssrInlineRender: true,
  setup(__props) {
    function createColumns({
      play
    }) {
      return [{
        title: "No",
        key: "no",
        width: 50,
        fixed: "left"
      }, {
        title: "Title",
        key: "title",
        minWidth: 250
      }, {
        title: "Length",
        key: "length",
        align: "right",
        width: 100
      }, {
        title: "Action",
        key: "actions",
        align: "right",
        width: 100,
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
        title: "Basic"
      }, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/data-tables-components/Basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Basic-C6CAKBSG.mjs.map
