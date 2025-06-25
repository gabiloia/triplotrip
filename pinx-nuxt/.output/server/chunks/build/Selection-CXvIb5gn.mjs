import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, ref, reactive, useSSRContext } from 'vue';
import { a as _export_sfc, c as NText } from './server.mjs';
import { N as NDataTable } from './DataTable-AzJAaim7.mjs';
import { N as NP } from './p-CRyTtbND.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BP2F26pm.mjs';
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
import './Checkbox-CRecqNg6.mjs';
import './Radio-DZ4Nj5xU.mjs';
import './RadioGroup-rfsKDf3m.mjs';
import './get-slot-BIpdyb5h.mjs';
import './Ellipsis-CSbK3kKR.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-CHHaPGTv.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './Pagination-DQ25XmSj.mjs';
import './Input-VW15MloS.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-DoQp6Bm9.mjs';
import './utils-DMBa_qdR.mjs';
import './Selection-CjKiO1mz.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-Dd1BE6MG.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './Forward-ggOyj9WR.mjs';
import './Popselect-DeYg37eR.mjs';
import './prop-CovD8_bW.mjs';
import './download-aNT-DO08.mjs';

function createColumns() {
  return [
    {
      type: "selection",
      fixed: "left",
      disabled(row) {
        return row.name === "Edward King 3";
      }
    },
    {
      title: "Name",
      key: "name",
      fixed: "left"
    },
    {
      title: "Age",
      key: "age"
    },
    {
      title: "Address",
      key: "address"
    }
  ];
}
const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}));
const _sfc_main = defineComponent({
  components: { NP, NDataTable, NText },
  setup() {
    const checkedRowKeysRef = ref([]);
    const paginationReactive = reactive({
      page: 2,
      pageSize: 5,
      showSizePicker: true,
      pageSizes: [3, 5, 7],
      onChange: (page) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      }
    });
    return {
      data,
      columns: createColumns(),
      checkedRowKeys: checkedRowKeysRef,
      pagination: paginationReactive,
      rowKey: (row) => row.address,
      handleCheck(rowKeys) {
        checkedRowKeysRef.value = rowKeys;
      }
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardCodeExample = __nuxt_component_0;
  const _component_n_text = resolveComponent("n-text");
  const _component_n_p = resolveComponent("n-p");
  const _component_n_data_table = resolveComponent("n-data-table");
  _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Selection" }, _attrs), {
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Rows can be selectable by making first column&#39;s type as `);
        _push2(ssrRenderComponent(_component_n_text, { code: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`selection`);
            } else {
              return [
                createTextVNode("selection")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Rows can be selectable by making first column's type as "),
          createVNode(_component_n_text, { code: "" }, {
            default: withCtx(() => [
              createTextVNode("selection")
            ]),
            _: 1
          })
        ];
      }
    }),
    code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(html(`
			<n-p>
				You have selected {{ checkedRowKeys.length }} row{{ checkedRowKeys.length < 2 ? "" : "s" }}.
			</n-p>

			<n-data-table
				:columns
				:data
				:pagination
				:row-key="rowKey"
				:max-height="200"
				:scroll-x="1800"
				@update:checked-row-keys="handleCheck"
			/>
			`))} ${ssrInterpolate(js(`
				type RowData = {
					key: number
					name: string
					age: string
					address: string
				}

				const createColumns = (): DataTableColumns<RowData> => [
					{
						type: "selection",
						fixed: "left",
						disabled(row: RowData) {
							return row.name === "Edward King 3"
						}
					},
					{
						title: "Name",
						key: "name",
						fixed: "left"
					},
					{
						title: "Age",
						key: "age"
					},
					{
						title: "Address",
						key: "address"
					}
				]

				const data = Array.from({ length: 46 }).map((_, index) => ({
					key: index,
					name: \`Edward King \${index}\`,
					age: 32,
					address: \`London, Park Lane no. \${index}\`
				}))

				export default defineComponent({
					setup() {
						const checkedRowKeysRef = ref<DataTableRowKey[]>([])
						const paginationReactive = reactive({
							page: 2,
							pageSize: 5,
							showSizePicker: true,
							pageSizes: [3, 5, 7],
							onChange: (page: number) => {
								paginationReactive.page = page
							},
							onUpdatePageSize: (pageSize: number) => {
								paginationReactive.pageSize = pageSize
								paginationReactive.page = 1
							}
						})

						return {
							data,
							columns: createColumns(),
							checkedRowKeys: checkedRowKeysRef,
							pagination: paginationReactive,
							rowKey: (row: RowData) => row.address,
							handleCheck(rowKeys: DataTableRowKey[]) {
								checkedRowKeysRef.value = rowKeys
							}
						}
					},
					components: { NP, NDataTable }
				})
				`))}`);
      } else {
        return [
          createTextVNode(toDisplayString(html(`
			<n-p>
				You have selected {{ checkedRowKeys.length }} row{{ checkedRowKeys.length < 2 ? "" : "s" }}.
			</n-p>

			<n-data-table
				:columns
				:data
				:pagination
				:row-key="rowKey"
				:max-height="200"
				:scroll-x="1800"
				@update:checked-row-keys="handleCheck"
			/>
			`)) + " " + toDisplayString(js(`
				type RowData = {
					key: number
					name: string
					age: string
					address: string
				}

				const createColumns = (): DataTableColumns<RowData> => [
					{
						type: "selection",
						fixed: "left",
						disabled(row: RowData) {
							return row.name === "Edward King 3"
						}
					},
					{
						title: "Name",
						key: "name",
						fixed: "left"
					},
					{
						title: "Age",
						key: "age"
					},
					{
						title: "Address",
						key: "address"
					}
				]

				const data = Array.from({ length: 46 }).map((_, index) => ({
					key: index,
					name: \`Edward King \${index}\`,
					age: 32,
					address: \`London, Park Lane no. \${index}\`
				}))

				export default defineComponent({
					setup() {
						const checkedRowKeysRef = ref<DataTableRowKey[]>([])
						const paginationReactive = reactive({
							page: 2,
							pageSize: 5,
							showSizePicker: true,
							pageSizes: [3, 5, 7],
							onChange: (page: number) => {
								paginationReactive.page = page
							},
							onUpdatePageSize: (pageSize: number) => {
								paginationReactive.pageSize = pageSize
								paginationReactive.page = 1
							}
						})

						return {
							data,
							columns: createColumns(),
							checkedRowKeys: checkedRowKeysRef,
							pagination: paginationReactive,
							rowKey: (row: RowData) => row.address,
							handleCheck(rowKeys: DataTableRowKey[]) {
								checkedRowKeysRef.value = rowKeys
							}
						}
					},
					components: { NP, NDataTable }
				})
				`)), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_n_p, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`You have selected ${ssrInterpolate(_ctx.checkedRowKeys.length)} row${ssrInterpolate(_ctx.checkedRowKeys.length < 2 ? "" : "s")}`);
            } else {
              return [
                createTextVNode("You have selected " + toDisplayString(_ctx.checkedRowKeys.length) + " row" + toDisplayString(_ctx.checkedRowKeys.length < 2 ? "" : "s"), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_n_data_table, {
          columns: _ctx.columns,
          data: _ctx.data,
          pagination: _ctx.pagination,
          "row-key": _ctx.rowKey,
          "max-height": 200,
          "scroll-x": 1800,
          "onUpdate:checkedRowKeys": _ctx.handleCheck
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_n_p, null, {
            default: withCtx(() => [
              createTextVNode("You have selected " + toDisplayString(_ctx.checkedRowKeys.length) + " row" + toDisplayString(_ctx.checkedRowKeys.length < 2 ? "" : "s"), 1)
            ]),
            _: 1
          }),
          createVNode(_component_n_data_table, {
            columns: _ctx.columns,
            data: _ctx.data,
            pagination: _ctx.pagination,
            "row-key": _ctx.rowKey,
            "max-height": 200,
            "scroll-x": 1800,
            "onUpdate:checkedRowKeys": _ctx.handleCheck
          }, null, 8, ["columns", "data", "pagination", "row-key", "onUpdate:checkedRowKeys"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/data-table-components/Selection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Selection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Selection as default };
//# sourceMappingURL=Selection-CXvIb5gn.mjs.map
