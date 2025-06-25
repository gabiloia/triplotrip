import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, ref, reactive, computed, h, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { faker } from '@faker-js/faker';
import { useResizeObserver } from '@vueuse/core';
import { B as Button, c as NText } from './server.mjs';
import { N as NP } from './p-CRyTtbND.mjs';
import { N as NDataTable } from './DataTable-AzJAaim7.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Selection",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref(
      Array.from({ length: 60 }).map((_, index) => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        return {
          key: index,
          name: `${firstName} ${lastName}`,
          age: faker.number.int({ min: 18, max: 65 }),
          address: faker.location.streetAddress(),
          city: faker.location.city(),
          country: faker.location.country(),
          budget: faker.finance.amount({ min: 500, max: 1e4, dec: 2, symbol: "$" }),
          email: faker.internet.exampleEmail({ firstName, lastName }),
          jobTitle: faker.person.jobTitle(),
          number: faker.phone.number(),
          vehicle: faker.vehicle.vehicle()
        };
      })
    );
    const checkedRowKeys = ref([]);
    const pagination = reactive({
      page: 1,
      pageSize: 15,
      showSizePicker: true,
      simple: false,
      pageSizes: [5, 10, 15],
      onChange: (page) => {
        pagination.page = page;
      },
      onUpdatePageSize: (pageSize) => {
        pagination.pageSize = pageSize;
        pagination.page = 1;
      }
    });
    const card = ref(null);
    const columnFixed = ref(true);
    useResizeObserver(card, (entries) => {
      const entry = entries[0];
      const { width } = entry.contentRect;
      pagination.simple = width < 600;
      columnFixed.value = width > 600;
    });
    const columns = computed(
      () => [
        {
          type: "selection",
          fixed: "left",
          options: ["all", "none"],
          disabled(row) {
            return row.key === 2;
          }
        },
        {
          title: "Name",
          key: "name",
          fixed: columnFixed.value ? "left" : void 0,
          width: 180
        },
        {
          title: "Age",
          key: "age",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          minWidth: 300
        },
        {
          title: "City",
          key: "city",
          minWidth: 300
        },
        {
          title: "Country",
          key: "country",
          minWidth: 300
        },
        {
          title: "Budget",
          key: "budget",
          minWidth: 300
        },
        {
          title: "Email",
          key: "email",
          minWidth: 400
        },
        {
          title: "Job Title",
          key: "jobTitle",
          minWidth: 400
        },
        {
          title: "Phone number",
          key: "number",
          minWidth: 400
        },
        {
          title: "Vehicle",
          key: "vehicle",
          minWidth: 400
        },
        {
          title: "Actions",
          key: "actions",
          fixed: columnFixed.value ? "right" : void 0,
          width: 100,
          render: () => h(Button, { strong: true, tertiary: true, size: "small" }, "Action")
        }
      ]
    );
    const rowKey = (row) => row.key;
    function handleCheck(rowKeys) {
      checkedRowKeys.value = rowKeys;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({
        ref_key: "card",
        ref: card,
        title: "Selection"
      }, _attrs), {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Rows can be selectable by making first column&#39;s type as `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
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
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("selection")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NP), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`You have selected ${ssrInterpolate(checkedRowKeys.value.length)} row${ssrInterpolate(checkedRowKeys.value.length < 2 ? "" : "s")}`);
                } else {
                  return [
                    createTextVNode("You have selected " + toDisplayString(checkedRowKeys.value.length) + " row" + toDisplayString(checkedRowKeys.value.length < 2 ? "" : "s"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NDataTable), {
              columns: columns.value,
              data: data.value,
              pagination,
              "row-key": rowKey,
              "max-height": 400,
              "scroll-x": 3200,
              "onUpdate:checkedRowKeys": handleCheck
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NP), null, {
                default: withCtx(() => [
                  createTextVNode("You have selected " + toDisplayString(checkedRowKeys.value.length) + " row" + toDisplayString(checkedRowKeys.value.length < 2 ? "" : "s"), 1)
                ]),
                _: 1
              }),
              createVNode(unref(NDataTable), {
                columns: columns.value,
                data: data.value,
                pagination,
                "row-key": rowKey,
                "max-height": 400,
                "scroll-x": 3200,
                "onUpdate:checkedRowKeys": handleCheck
              }, null, 8, ["columns", "data", "pagination"])
            ];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/data-tables-components/Selection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Selection-DSAN6Dex.mjs.map
