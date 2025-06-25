import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, ref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as _export_sfc, c as NText, B as Button } from './server.mjs';
import { N as NDataTable } from './DataTable-AzJAaim7.mjs';
import { N as NSpace } from './Space-CcGy24_j.mjs';
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

const columns = [
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age",
    sorter: (row1, row2) => row1.age - row2.age
  },
  {
    title: "Chinese Score",
    key: "chinese",
    defaultSortOrder: false,
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3
    }
  },
  {
    title: "Math Score",
    defaultSortOrder: false,
    key: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2
    }
  },
  {
    title: "English Score",
    defaultSortOrder: false,
    key: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1
    }
  },
  {
    title: "Address",
    key: "address",
    filterOptions: [
      {
        label: "London",
        value: "London"
      },
      {
        label: "New York",
        value: "New York"
      }
    ],
    filter(value, row) {
      return ~row.address.indexOf(value);
    }
  }
];
const data = [
  {
    key: 0,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    chinese: 98,
    math: 60,
    english: 70
  },
  {
    key: 1,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    chinese: 98,
    math: 66,
    english: 89
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    chinese: 98,
    math: 66,
    english: 89
  },
  {
    key: 3,
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
    chinese: 88,
    math: 99,
    english: 89
  }
];
const _sfc_main = defineComponent({
  components: { NSpace, NButton: Button, NDataTable, NText },
  setup() {
    const dataTableInstRef = ref(null);
    return {
      data,
      columns,
      dataTableInst: dataTableInstRef,
      pagination: ref({ pageSize: 5 }),
      filterAddress() {
        dataTableInstRef.value.filter({
          address: ["London"]
        });
      },
      sortName() {
        dataTableInstRef.value.sort("name", "ascend");
      },
      clearFilters() {
        dataTableInstRef.value.filter(null);
      },
      clearSorter() {
        dataTableInstRef.value.sort(null);
      }
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardCodeExample = __nuxt_component_0;
  const _component_n_space = resolveComponent("n-space");
  const _component_n_button = resolveComponent("n-button");
  const _component_n_data_table = resolveComponent("n-data-table");
  _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Pr\xF3ximas Reservas" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_n_space, {
          vertical: "",
          size: 12
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_n_space, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_n_button, { onClick: _ctx.sortName }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Sort By Name (Ascend)`);
                        } else {
                          return [
                            createTextVNode("Sort By Name (Ascend)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_n_button, { onClick: _ctx.filterAddress }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Filter Address (London)`);
                        } else {
                          return [
                            createTextVNode("Filter Address (London)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_n_button, { onClick: _ctx.clearFilters }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Clear Filters`);
                        } else {
                          return [
                            createTextVNode("Clear Filters")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_n_button, { onClick: _ctx.clearSorter }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Clear Sorter`);
                        } else {
                          return [
                            createTextVNode("Clear Sorter")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_n_button, { onClick: _ctx.sortName }, {
                        default: withCtx(() => [
                          createTextVNode("Sort By Name (Ascend)")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_n_button, { onClick: _ctx.filterAddress }, {
                        default: withCtx(() => [
                          createTextVNode("Filter Address (London)")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_n_button, { onClick: _ctx.clearFilters }, {
                        default: withCtx(() => [
                          createTextVNode("Clear Filters")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_n_button, { onClick: _ctx.clearSorter }, {
                        default: withCtx(() => [
                          createTextVNode("Clear Sorter")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_n_data_table, {
                ref: "dataTableInst",
                columns: _ctx.columns,
                data: _ctx.data,
                pagination: _ctx.pagination
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_n_space, null, {
                  default: withCtx(() => [
                    createVNode(_component_n_button, { onClick: _ctx.sortName }, {
                      default: withCtx(() => [
                        createTextVNode("Sort By Name (Ascend)")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_n_button, { onClick: _ctx.filterAddress }, {
                      default: withCtx(() => [
                        createTextVNode("Filter Address (London)")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_n_button, { onClick: _ctx.clearFilters }, {
                      default: withCtx(() => [
                        createTextVNode("Clear Filters")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_n_button, { onClick: _ctx.clearSorter }, {
                      default: withCtx(() => [
                        createTextVNode("Clear Sorter")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_data_table, {
                  ref: "dataTableInst",
                  columns: _ctx.columns,
                  data: _ctx.data,
                  pagination: _ctx.pagination
                }, null, 8, ["columns", "data", "pagination"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_n_space, {
            vertical: "",
            size: 12
          }, {
            default: withCtx(() => [
              createVNode(_component_n_space, null, {
                default: withCtx(() => [
                  createVNode(_component_n_button, { onClick: _ctx.sortName }, {
                    default: withCtx(() => [
                      createTextVNode("Sort By Name (Ascend)")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_n_button, { onClick: _ctx.filterAddress }, {
                    default: withCtx(() => [
                      createTextVNode("Filter Address (London)")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_n_button, { onClick: _ctx.clearFilters }, {
                    default: withCtx(() => [
                      createTextVNode("Clear Filters")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_n_button, { onClick: _ctx.clearSorter }, {
                    default: withCtx(() => [
                      createTextVNode("Clear Sorter")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_n_data_table, {
                ref: "dataTableInst",
                columns: _ctx.columns,
                data: _ctx.data,
                pagination: _ctx.pagination
              }, null, 8, ["columns", "data", "pagination"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/data-table-components/Sorting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sorting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Sorting as default };
//# sourceMappingURL=Sorting-CUfGx3ng.mjs.map
