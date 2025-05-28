import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { useWindowSize } from '@vueuse/core';
import { defineComponent, resolveComponent, mergeProps, withCtx, createBlock, openBlock, ref, computed, h, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { N as NDataTable } from './DataTable-THUU0e1c.mjs';
import { N as NInput } from './Input-DOxGe8j0.mjs';
import './LtrContext-CQINXXZ7.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
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
import './Checkbox-kHPptutx.mjs';
import './Radio-h1-xnT2t.mjs';
import './RadioGroup-DaOAh_3e.mjs';
import './get-slot-BIpdyb5h.mjs';
import './Ellipsis-DEMoWcxh.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-DBR_9G3J.mjs';
import './Pagination-BuCFwoQU.mjs';
import './Select-CJatCJlw.mjs';
import './Selection-7aS0-4xx.mjs';
import './Forward-B1Z9q27Z.mjs';
import './prop-CovD8_bW.mjs';
import './download-aNT-DO08.mjs';
import './Eye-DafrR3c8.mjs';

function createData() {
  return Array.from({ length: 100 }, (_, index) => ({
    key: index,
    name: `John Brown ${index}`,
    age: Math.random() * 40 | 0,
    address: `New York No. ${index} Lake Park`
  }));
}
const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function, Array]
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref(null);
    const inputValue = ref(props.value);
    function handleOnClick() {
      isEdit.value = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    }
    function handleChange() {
      props.onUpdateValue(inputValue.value);
      isEdit.value = false;
    }
    return () => h(
      "div",
      {
        style: "min-height: 22px",
        onClick: handleOnClick
      },
      isEdit.value ? h(NInput, {
        ref: inputRef,
        value: inputValue.value,
        onUpdateValue: (v) => {
          inputValue.value = v;
        },
        onChange: handleChange,
        onBlur: handleChange
      }) : props.value
    );
  }
});
const _sfc_main = defineComponent({
  components: { NDataTable },
  setup() {
    const data = ref(createData());
    const getDataIndex = (key) => {
      return data.value.findIndex((item) => item.key === key);
    };
    const page = ref(1);
    const handlePageChange = (curPage) => {
      page.value = curPage;
    };
    const { width } = useWindowSize();
    const paginationRef = computed(() => ({
      pageSize: 10,
      simple: width.value < 500,
      page: page.value
    }));
    return {
      data,
      paginationRef,
      handlePageChange,
      columns: [
        {
          title: "Name",
          key: "name",
          width: 150,
          render(row) {
            const index = getDataIndex(row.key);
            return h(ShowOrEdit, {
              value: row.name,
              onUpdateValue(v) {
                data.value[index].name = v;
              }
            });
          }
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          render(row) {
            const index = getDataIndex(row.key);
            return h(ShowOrEdit, {
              value: row.age,
              onUpdateValue(v) {
                data.value[index].age = v;
              }
            });
          }
        },
        {
          title: "Address",
          key: "address",
          render(row) {
            const index = getDataIndex(row.key);
            return h(ShowOrEdit, {
              value: row.address,
              onUpdateValue(v) {
                data.value[index].address = v;
              }
            });
          }
        }
      ]
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardCodeExample = __nuxt_component_0;
  const _component_n_data_table = resolveComponent("n-data-table");
  _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Editable" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_n_data_table, {
          key: (row) => row.key,
          columns: _ctx.columns,
          data: _ctx.data,
          pagination: _ctx.paginationRef,
          "on-update:page": _ctx.handlePageChange
        }, null, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock(_component_n_data_table, {
            key: (row) => row.key,
            columns: _ctx.columns,
            data: _ctx.data,
            pagination: _ctx.paginationRef,
            "on-update:page": _ctx.handlePageChange
          }, null, 8, ["columns", "data", "pagination", "on-update:page"]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/data-tables-components/Editable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Editable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Editable as default };
//# sourceMappingURL=Editable-ScKvSd2J.mjs.map
