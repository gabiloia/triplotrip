import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as _export_sfc, _ as _sfc_main$o, ab as Scrollbar } from './server.mjs';
import { T as TableBase } from './Base-C1YldzQp.mjs';
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
import '@faker-js/faker';
import 'lodash/orderBy.js';
import './Table-ZwyKUzIw.mjs';
import './Image-CiL9m40l.mjs';
import './download-aNT-DO08.mjs';
import './Progress-CTmj2S_J.mjs';
import './Popselect-DeYg37eR.mjs';
import './utils-DMBa_qdR.mjs';
import './SelectMenu-Dd1BE6MG.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './use-resize-COzDFWWZ.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Base",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-32462b1c><div class="page-header" data-v-32462b1c><div class="title" data-v-32462b1c>Table Base</div><div class="links" data-v-32462b1c><a href="https://www.naiveui.com/en-US/light/components/table" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-32462b1c>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-32462b1c>`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "w-full!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TableBase, {
                    class: "table-min-width",
                    bordered: false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TableBase, {
                      class: "table-min-width",
                      bordered: false
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Scrollbar), {
                "x-scrollable": "",
                class: "w-full!"
              }, {
                default: withCtx(() => [
                  createVNode(TableBase, {
                    class: "table-min-width",
                    bordered: false
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Bordered" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "w-full!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TableBase, {
                    class: "table-min-width",
                    bordered: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TableBase, {
                      class: "table-min-width",
                      bordered: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Scrollbar), {
                "x-scrollable": "",
                class: "w-full!"
              }, {
                default: withCtx(() => [
                  createVNode(TableBase, {
                    class: "table-min-width",
                    bordered: true
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Size" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "w-full!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TableBase, {
                    class: "table-min-width mb-4",
                    size: "small"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TableBase, {
                    class: "table-min-width",
                    size: "large"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TableBase, {
                      class: "table-min-width mb-4",
                      size: "small"
                    }),
                    createVNode(TableBase, {
                      class: "table-min-width",
                      size: "large"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Scrollbar), {
                "x-scrollable": "",
                class: "w-full!"
              }, {
                default: withCtx(() => [
                  createVNode(TableBase, {
                    class: "table-min-width mb-4",
                    size: "small"
                  }),
                  createVNode(TableBase, {
                    class: "table-min-width",
                    size: "large"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Single column" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "w-full!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TableBase, {
                    class: "table-min-width",
                    "single-column": "",
                    "single-line": false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TableBase, {
                      class: "table-min-width",
                      "single-column": "",
                      "single-line": false
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Scrollbar), {
                "x-scrollable": "",
                class: "w-full!"
              }, {
                default: withCtx(() => [
                  createVNode(TableBase, {
                    class: "table-min-width",
                    "single-column": "",
                    "single-line": false
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Single line" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "w-full!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TableBase, { class: "table-min-width" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TableBase, { class: "table-min-width" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Scrollbar), {
                "x-scrollable": "",
                class: "w-full!"
              }, {
                default: withCtx(() => [
                  createVNode(TableBase, { class: "table-min-width" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Stripe" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Scrollbar), {
              "x-scrollable": "",
              class: "w-full!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TableBase, {
                    class: "table-min-width",
                    striped: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TableBase, {
                      class: "table-min-width",
                      striped: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Scrollbar), {
                "x-scrollable": "",
                class: "w-full!"
              }, {
                default: withCtx(() => [
                  createVNode(TableBase, {
                    class: "table-min-width",
                    striped: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tables/Base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Base = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32462b1c"]]);

export { Base as default };
//# sourceMappingURL=Base-Dl_YTheO.mjs.map
