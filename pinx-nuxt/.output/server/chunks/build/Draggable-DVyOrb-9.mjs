import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, h, useSSRContext } from 'vue';
import { a as _export_sfc, aB as useMessage, B as Button } from './server.mjs';
import { N as NDataTable } from './DataTable-uLAZV9UA.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

function createColumns({ play }) {
  return [
    {
      title: "No",
      key: "no",
      width: 50
    },
    {
      title: "Title",
      key: "title",
      resizable: true
    },
    {
      title: "Length",
      key: "length",
      resizable: true,
      minWidth: 50,
      maxWidth: 100
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          Button,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => play(row)
          },
          { default: () => "Play" }
        );
      }
    }
  ];
}
const data = [
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
  { no: 12, title: "Champagne Supernova", length: "7:27" }
];
const _sfc_main = defineComponent({
  components: { NDataTable },
  setup() {
    const message = useMessage();
    return {
      data,
      columns: createColumns({
        play(row) {
          message.info(`Play ${row.title}`);
        }
      }),
      pagination: false
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardCodeExample = __nuxt_component_0;
  const _component_n_data_table = resolveComponent("n-data-table");
  _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Column draggable" }, _attrs), {
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Only support leaf nodes`);
      } else {
        return [
          createTextVNode("Only support leaf nodes")
        ];
      }
    }),
    code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(html(`
			<n-data-table :columns :data :pagination :bordered="false" />
			`))} ${ssrInterpolate(js(`
				import { h, defineComponent } from "vue"
				import { NButton, useMessage, NDataTable } from "naive-ui"
				import type { DataTableColumns } from "naive-ui"

				type Song = {
					no: number
					title: string
					length: string
				}

				const createColumns = ({ play }: { play: (row: Song) => void }): DataTableColumns<Song> => {
					return [
						{
							title: "No",
							key: "no",
							width: 50
						},
						{
							title: "Title",
							key: "title",
							resizable: true
						},
						{
							title: "Length",
							key: "length",
							resizable: true,
							minWidth: 50,
							maxWidth: 100
						},
						{
							title: "Action",
							key: "actions",
							render(row) {
								return h(
									NButton,
									{
										strong: true,
										tertiary: true,
										size: "small",
										onClick: () => play(row)
									},
									{ default: () => "Play" }
								)
							}
						}
					]
				}

				const data: Song[] = [
					{ no: 3, title: "Wonderwall", length: "4:18" },
					{ no: 4, title: "Don't Look Back in Anger", length: "4:48" },
					{ no: 12, title: "Champagne Supernova", length: "7:27" }
				]

				export default defineComponent({
					setup() {
						const message = useMessage()
						return {
							data,
							columns: createColumns({
								play(row: Song) {
									message.info(\`Play \${row.title}\`)
								}
							}),
							pagination: false as const
						}
					},
					components: { NDataTable }
				})
				`))}`);
      } else {
        return [
          createTextVNode(toDisplayString(html(`
			<n-data-table :columns :data :pagination :bordered="false" />
			`)) + " " + toDisplayString(js(`
				import { h, defineComponent } from "vue"
				import { NButton, useMessage, NDataTable } from "naive-ui"
				import type { DataTableColumns } from "naive-ui"

				type Song = {
					no: number
					title: string
					length: string
				}

				const createColumns = ({ play }: { play: (row: Song) => void }): DataTableColumns<Song> => {
					return [
						{
							title: "No",
							key: "no",
							width: 50
						},
						{
							title: "Title",
							key: "title",
							resizable: true
						},
						{
							title: "Length",
							key: "length",
							resizable: true,
							minWidth: 50,
							maxWidth: 100
						},
						{
							title: "Action",
							key: "actions",
							render(row) {
								return h(
									NButton,
									{
										strong: true,
										tertiary: true,
										size: "small",
										onClick: () => play(row)
									},
									{ default: () => "Play" }
								)
							}
						}
					]
				}

				const data: Song[] = [
					{ no: 3, title: "Wonderwall", length: "4:18" },
					{ no: 4, title: "Don't Look Back in Anger", length: "4:48" },
					{ no: 12, title: "Champagne Supernova", length: "7:27" }
				]

				export default defineComponent({
					setup() {
						const message = useMessage()
						return {
							data,
							columns: createColumns({
								play(row: Song) {
									message.info(\`Play \${row.title}\`)
								}
							}),
							pagination: false as const
						}
					},
					components: { NDataTable }
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
          bordered: false
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_n_data_table, {
            columns: _ctx.columns,
            data: _ctx.data,
            pagination: _ctx.pagination,
            bordered: false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/data-table-components/Draggable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Draggable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Draggable as default };
//# sourceMappingURL=Draggable-DVyOrb-9.mjs.map
