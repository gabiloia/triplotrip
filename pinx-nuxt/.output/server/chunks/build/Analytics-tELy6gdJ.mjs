import { b as __nuxt_component_6, _ as __nuxt_component_0, a as __nuxt_component_1 } from './CardCombo3-D9OT7SFe.mjs';
import { _ as __nuxt_component_8 } from './CardWrapper-CQfcdGvC.mjs';
import { _ as __nuxt_component_4, D as DemoList } from './List-Ca3pbAjY.mjs';
import { _ as __nuxt_component_5 } from './CardExtra5-_gazJM3b.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { D as DemoChart } from './Percentage-8fbktz-4.mjs';
import { a as _export_sfc, aM as useThemeStore } from './server.mjs';
import './Apex-DPTNaMpA.mjs';
import '@faker-js/faker';
import '@number-flow/vue';
import '@vueuse/core';
import 'dayjs';
import './Popselect-oknqzXag.mjs';
import 'seemly';
import 'treemate';
import './utils-DMBa_qdR.mjs';
import './SelectMenu-OKwjnwtS.mjs';
import './FocusDetector-BouO2CrO.mjs';
import 'vooks';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import '@css-render/vue3-ssr';
import './use-resize-COzDFWWZ.mjs';
import 'colord';
import 'lodash/capitalize.js';
import './TimelineItem-CcJ4XnJT.mjs';
import 'lodash/max.js';
import './Progress-CTmj2S_J.mjs';
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
import 'lodash/get.js';
import 'lodash/set.js';
import 'lodash-es';
import '@css-render/plugin-bem';
import 'css-render';
import 'evtd';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'vdirs';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const SessionsIcon = "carbon:user-multiple";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    computed(() => themeStore.style);
    const textSecondaryColor = computed(() => themeStore.style["fg-secondary-color"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCombo3 = __nuxt_component_6;
      const _component_CardWrapper = __nuxt_component_8;
      const _component_CardActions = __nuxt_component_4;
      const _component_CardCombo1 = __nuxt_component_0;
      const _component_CardComboIcon = __nuxt_component_1;
      const _component_CardExtra5 = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-3827b365><div class="main-grid gap-5" data-v-3827b365><div class="main-col" data-v-3827b365><div class="flex h-full flex-col gap-5" data-v-3827b365><div class="main-chart-wrap flex" data-v-3827b365>`);
      _push(ssrRenderComponent(_component_CardCombo3, { class: "h-full" }, null, _parent));
      _push(`</div><div class="flex grow" data-v-3827b365>`);
      _push(ssrRenderComponent(_component_CardWrapper, { class: "h-full w-full grow" }, {
        default: withCtx(({ expand, isExpand, reload }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardActions, {
              expand,
              "is-expand": isExpand,
              reload,
              class: "h-full",
              title: "Ingresos",
              segmented: {
                content: true,
                footer: true
              }
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(DemoList, {
                    class: "my-4",
                    "min-width": "400px"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(DemoList, {
                      class: "my-4",
                      "min-width": "400px"
                    })
                  ];
                }
              }),
              footer: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(DemoChart, {
                    type: "bar",
                    "data-type": "months",
                    highlight: true,
                    class: "mt-4",
                    "font-color": textSecondaryColor.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(DemoChart, {
                      type: "bar",
                      "data-type": "months",
                      highlight: true,
                      class: "mt-4",
                      "font-color": textSecondaryColor.value
                    }, null, 8, ["font-color"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardActions, {
                expand,
                "is-expand": isExpand,
                reload,
                class: "h-full",
                title: "Ingresos",
                segmented: {
                  content: true,
                  footer: true
                }
              }, {
                default: withCtx(() => [
                  createVNode(DemoList, {
                    class: "my-4",
                    "min-width": "400px"
                  })
                ]),
                footer: withCtx(() => [
                  createVNode(DemoChart, {
                    type: "bar",
                    "data-type": "months",
                    highlight: true,
                    class: "mt-4",
                    "font-color": textSecondaryColor.value
                  }, null, 8, ["font-color"])
                ]),
                _: 2
              }, 1032, ["expand", "is-expand", "reload"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="side-col" data-v-3827b365><div class="flex h-full flex-col gap-5" data-v-3827b365><div class="flex" data-v-3827b365>`);
      _push(ssrRenderComponent(_component_CardCombo1, {
        title: "Ventas por d\xEDa",
        class: "bg-extra-1! h-full text-white!",
        "chart-color": "#ffffff"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": SessionsIcon,
              boxed: "",
              color: "white"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": SessionsIcon,
                boxed: "",
                color: "white"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="timeline-wrap grow" data-v-3827b365>`);
      _push(ssrRenderComponent(_component_CardExtra5, {
        long: "",
        lazy: "",
        "hide-image": "",
        title: "\xFCltimas Reservas/Estado",
        class: "h-full overflow-hidden",
        segmented: {
          content: true
        }
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Analytics = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3827b365"]]);

export { Analytics as default };
//# sourceMappingURL=Analytics-tELy6gdJ.mjs.map
