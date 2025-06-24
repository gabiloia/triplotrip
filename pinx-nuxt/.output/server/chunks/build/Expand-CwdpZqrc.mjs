import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, h, useSSRContext } from 'vue';
import { a as _export_sfc, aC as useMessage, ar as NTag, B as Button } from './server.mjs';
import { N as NDataTable } from './DataTable-UP7sR_Cj.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
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

function createColumns({ sendMail }) {
  return [
    {
      type: "selection"
    },
    {
      type: "expand",
      expandable: (rowData) => rowData.name !== "Jim Green",
      renderExpand: (rowData) => {
        return `${rowData.name} is a good guy.`;
      }
    },
    {
      title: "#",
      key: "key",
      render: (_, index) => {
        return `${index + 1}`;
      }
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
      title: "Address",
      key: "address"
    },
    {
      title: "Tags",
      key: "tags",
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: "6px"
              },
              type: "info",
              bordered: false
            },
            {
              default: () => tagKey
            }
          );
        });
        return tags;
      }
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          Button,
          {
            size: "small",
            onClick: () => sendMail(row)
          },
          { default: () => "Send Email" }
        );
      }
    }
  ];
}
function createData() {
  return [
    {
      key: 0,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: 1,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["wow"]
    },
    {
      key: 2,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];
}
const _sfc_main = defineComponent({
  components: { NDataTable },
  setup() {
    const message = useMessage();
    return {
      data: createData(),
      columns: createColumns({
        sendMail(rowData) {
          message.info(`send mail to ${rowData.name}`);
        }
      }),
      pagination: {
        pageSize: 10
      }
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardCodeExample = __nuxt_component_0;
  const _component_n_data_table = resolveComponent("n-data-table");
  _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Expand" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_n_data_table, {
          columns: _ctx.columns,
          data: _ctx.data,
          pagination: _ctx.pagination,
          "default-expand-all": ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_n_data_table, {
            columns: _ctx.columns,
            data: _ctx.data,
            pagination: _ctx.pagination,
            "default-expand-all": ""
          }, null, 8, ["columns", "data", "pagination"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/data-tables-components/Expand.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Expand = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Expand as default };
//# sourceMappingURL=Expand-CwdpZqrc.mjs.map
