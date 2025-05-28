import { _ as __nuxt_component_0 } from './CardCodeExample-Bt7lfi6T.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, h, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, aW as NText, a_ as useMessage, aN as NTag, B as Button } from './server.mjs';
import { N as NDataTable } from './DataTable-THUU0e1c.mjs';
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

function createColumns({ sendMail }) {
  return [
    {
      title: "Name",
      key: "name",
      rowSpan: (rowData, rowIndex) => rowIndex === 0 ? 2 : 1,
      colSpan: (rowData, rowIndex) => rowIndex === 0 ? 2 : 1
    },
    {
      title: "Age",
      key: "age"
    },
    {
      title: "Address",
      key: "address",
      colSpan: (rowData, rowIndex) => rowIndex === 2 ? 2 : 1
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
      rowSpan: (rowData, rowIndex) => rowIndex === 0 ? 2 : 1,
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
  components: { NDataTable, NText },
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
  const _component_n_text = resolveComponent("n-text");
  const _component_n_data_table = resolveComponent("n-data-table");
  _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Merge Cell" }, _attrs), {
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Set colspan and rowspan by setting `);
        _push2(ssrRenderComponent(_component_n_text, { code: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`colSpan`);
            } else {
              return [
                createTextVNode("colSpan")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` and `);
        _push2(ssrRenderComponent(_component_n_text, { code: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`rowSpan`);
            } else {
              return [
                createTextVNode("rowSpan")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` of column object. Set colspan in header by setting `);
        _push2(ssrRenderComponent(_component_n_text, { code: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`titleColSpan`);
            } else {
              return [
                createTextVNode("titleColSpan")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` of column object `);
      } else {
        return [
          createTextVNode(" Set colspan and rowspan by setting "),
          createVNode(_component_n_text, { code: "" }, {
            default: withCtx(() => [
              createTextVNode("colSpan")
            ]),
            _: 1
          }),
          createTextVNode(" and "),
          createVNode(_component_n_text, { code: "" }, {
            default: withCtx(() => [
              createTextVNode("rowSpan")
            ]),
            _: 1
          }),
          createTextVNode(" of column object. Set colspan in header by setting "),
          createVNode(_component_n_text, { code: "" }, {
            default: withCtx(() => [
              createTextVNode("titleColSpan")
            ]),
            _: 1
          }),
          createTextVNode(" of column object ")
        ];
      }
    }),
    code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(html(`
			<n-data-table :columns :data :pagination :single-line="false" />
			`))} ${ssrInterpolate(js(`
				const createColumns = ({ sendMail }) => {
					return [
						{
							title: "Name",
							key: "name",
							rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
							colSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1)
						},
						{
							title: "Age",
							key: "age"
						},
						{
							title: "Address",
							key: "address",
							colSpan: (rowData, rowIndex) => (rowIndex === 2 ? 2 : 1)
						},
						{
							title: "Tags",
							key: "tags",
							render(row) {
								const tags = row.tags.map(tagKey => {
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
									)
								})
								return tags
							}
						},
						{
							title: "Action",
							key: "actions",
							rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
							render(row) {
								return h(
									NButton,
									{
										size: "small",
										onClick: () => sendMail(row)
									},
									{ default: () => "Send Email" }
								)
							}
						}
					]
				}

				const createData = () => [
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
				]

				export default defineComponent({
					setup() {
						const message = useMessage()
						return {
							data: createData(),
							columns: createColumns({
								sendMail(rowData) {
									message.info("send mail to " + rowData.name)
								}
							}),
							pagination: {
								pageSize: 10
							}
						}
					},
					components: { NDataTable, NText }
				})
				`))}`);
      } else {
        return [
          createTextVNode(toDisplayString(html(`
			<n-data-table :columns :data :pagination :single-line="false" />
			`)) + " " + toDisplayString(js(`
				const createColumns = ({ sendMail }) => {
					return [
						{
							title: "Name",
							key: "name",
							rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
							colSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1)
						},
						{
							title: "Age",
							key: "age"
						},
						{
							title: "Address",
							key: "address",
							colSpan: (rowData, rowIndex) => (rowIndex === 2 ? 2 : 1)
						},
						{
							title: "Tags",
							key: "tags",
							render(row) {
								const tags = row.tags.map(tagKey => {
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
									)
								})
								return tags
							}
						},
						{
							title: "Action",
							key: "actions",
							rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
							render(row) {
								return h(
									NButton,
									{
										size: "small",
										onClick: () => sendMail(row)
									},
									{ default: () => "Send Email" }
								)
							}
						}
					]
				}

				const createData = () => [
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
				]

				export default defineComponent({
					setup() {
						const message = useMessage()
						return {
							data: createData(),
							columns: createColumns({
								sendMail(rowData) {
									message.info("send mail to " + rowData.name)
								}
							}),
							pagination: {
								pageSize: 10
							}
						}
					},
					components: { NDataTable, NText }
				})
				`)), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_n_data_table, {
          columns: _ctx.columns,
          data: _ctx.data,
          pagination: _ctx.pagination,
          "single-line": false
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_n_data_table, {
            columns: _ctx.columns,
            data: _ctx.data,
            pagination: _ctx.pagination,
            "single-line": false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/data-table-components/Merge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Merge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Merge as default };
//# sourceMappingURL=Merge-DfLphP0l.mjs.map
