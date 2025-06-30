import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { B as Button } from './server.mjs';
import { N as NDataTable } from './DataTable-Bvk4o2Nk.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-S6SsK5xW.mjs';
import 'seemly';
import 'vooks';
import './get-slot-BIpdyb5h.mjs';
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
import './Checkbox-DOjB2S1h.mjs';
import './Radio-DZ4Nj5xU.mjs';
import './RadioGroup-rfsKDf3m.mjs';
import './Ellipsis-Vf2P8jiL.mjs';
import './ArrowDown-CAZ30rud.mjs';
import './Suffix-CHHaPGTv.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './Pagination-pP1u_ela.mjs';
import './Input-VW15MloS.mjs';
import './Eye-DafrR3c8.mjs';
import './Select-Cn-19BJa.mjs';
import './utils-DMBa_qdR.mjs';
import './Selection-DmCMUIfq.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-OKwjnwtS.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './Forward-ggOyj9WR.mjs';
import './Popselect-oknqzXag.mjs';
import './prop-CovD8_bW.mjs';
import './download-aNT-DO08.mjs';

const _sfc_main = {
  __name: "Sorting",
  __ssrInlineRender: true,
  setup(__props) {
    const dataTableInst = ref(null);
    const events = ref([]);
    const pagination = ref({ pageSize: 10 });
    const columns = [
      {
        title: "T\xEDtulo",
        key: "title"
      },
      {
        title: "Inicio",
        key: "start"
      },
      {
        title: "Fin",
        key: "end"
      },
      {
        title: "Excursi\xF3n",
        key: "excursion"
      }
    ];
    function sortTitle() {
      dataTableInst.value.sort("title", "ascend");
    }
    function clearFilters() {
      dataTableInst.value.filter(null);
    }
    function clearSorter() {
      dataTableInst.value.sort(null);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CardCodeExample, mergeProps({ title: "Pr\xF3ximas Reservas" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), {
              vertical: "",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSpace), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), { onClick: sortTitle }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ordenar por T\xEDtulo (Ascendente)`);
                            } else {
                              return [
                                createTextVNode("Ordenar por T\xEDtulo (Ascendente)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { onClick: clearFilters }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Limpiar Filtros`);
                            } else {
                              return [
                                createTextVNode("Limpiar Filtros")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Button), { onClick: clearSorter }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Limpiar Ordenamiento`);
                            } else {
                              return [
                                createTextVNode("Limpiar Ordenamiento")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), { onClick: sortTitle }, {
                            default: withCtx(() => [
                              createTextVNode("Ordenar por T\xEDtulo (Ascendente)")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: clearFilters }, {
                            default: withCtx(() => [
                              createTextVNode("Limpiar Filtros")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: clearSorter }, {
                            default: withCtx(() => [
                              createTextVNode("Limpiar Ordenamiento")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NDataTable), {
                    ref_key: "dataTableInst",
                    ref: dataTableInst,
                    columns,
                    data: events.value,
                    pagination: pagination.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NSpace), null, {
                      default: withCtx(() => [
                        createVNode(unref(Button), { onClick: sortTitle }, {
                          default: withCtx(() => [
                            createTextVNode("Ordenar por T\xEDtulo (Ascendente)")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { onClick: clearFilters }, {
                          default: withCtx(() => [
                            createTextVNode("Limpiar Filtros")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Button), { onClick: clearSorter }, {
                          default: withCtx(() => [
                            createTextVNode("Limpiar Ordenamiento")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NDataTable), {
                      ref_key: "dataTableInst",
                      ref: dataTableInst,
                      columns,
                      data: events.value,
                      pagination: pagination.value
                    }, null, 8, ["data", "pagination"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), {
                vertical: "",
                size: 12
              }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(Button), { onClick: sortTitle }, {
                        default: withCtx(() => [
                          createTextVNode("Ordenar por T\xEDtulo (Ascendente)")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { onClick: clearFilters }, {
                        default: withCtx(() => [
                          createTextVNode("Limpiar Filtros")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), { onClick: clearSorter }, {
                        default: withCtx(() => [
                          createTextVNode("Limpiar Ordenamiento")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NDataTable), {
                    ref_key: "dataTableInst",
                    ref: dataTableInst,
                    columns,
                    data: events.value,
                    pagination: pagination.value
                  }, null, 8, ["data", "pagination"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/data-table-components/Sorting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Sorting-DqVJvP9k.mjs.map
