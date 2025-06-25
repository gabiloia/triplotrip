import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_6, c as __nuxt_component_7 } from './CardCombo3-Dy1aQR40.mjs';
import { _ as __nuxt_component_5, a as __nuxt_component_3, b as __nuxt_component_2, c as __nuxt_component_6$1, d as __nuxt_component_7$1 } from './CardCombo5-kBwfrTbt.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { aM as useThemeStore } from './server.mjs';
import './Apex-DPTNaMpA.mjs';
import '@faker-js/faker';
import '@number-flow/vue';
import '@vueuse/core';
import 'dayjs';
import './Percentage-8fbktz-4.mjs';
import 'colord';
import 'lodash/max.js';
import './Progress-CTmj2S_J.mjs';
import './Popselect-DeYg37eR.mjs';
import 'seemly';
import 'treemate';
import './utils-DMBa_qdR.mjs';
import './SelectMenu-Dd1BE6MG.mjs';
import './FocusDetector-BouO2CrO.mjs';
import 'vooks';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import '@css-render/vue3-ssr';
import './use-resize-COzDFWWZ.mjs';
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

const RevenueIcon = "carbon:money";
const SubscribersIcon = "carbon:user-multiple";
const SalesIcon = "carbon:shopping-cart";
const ReportsIcon = "carbon:report";
const ErrorIcon = "carbon:debug";
const ActivityIcon = "carbon:activity";
const UploadsIcon = "carbon:cloud-upload";
const CompletedIcon = "carbon:checkmark-outline";
const PendingIcon = "carbon:hourglass";
const ShippedIcon = "carbon:send";
const TabletIcon = "carbon:tablet";
const ComputerIcon = "carbon:screen";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Combo",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCombo1 = __nuxt_component_0;
      const _component_CardComboIcon = __nuxt_component_1;
      const _component_CardCombo2 = __nuxt_component_5;
      const _component_CardCombo3 = __nuxt_component_6;
      const _component_CardCombo8 = __nuxt_component_3;
      const _component_CardCombo6 = __nuxt_component_2;
      const _component_CardCombo7 = __nuxt_component_6$1;
      const _component_CardCombo4 = __nuxt_component_7;
      const _component_CardCombo5 = __nuxt_component_7$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page flex flex-col gap-5" }, _attrs))}><div class="card-row flex flex-col gap-5 md:flex-row"><div class="card-wrap basis-full md:basis-1/2">`);
      _push(ssrRenderComponent(_component_CardCombo1, {
        title: "Sales",
        class: "h-full"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": SalesIcon,
              boxed: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": SalesIcon,
                boxed: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-wrap basis-full md:basis-1/2">`);
      _push(ssrRenderComponent(_component_CardCombo1, {
        title: "Subscribers",
        type: "bar",
        class: "h-full",
        "chart-color": style.value["extra1-color"]
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": SubscribersIcon,
              boxed: "",
              color: style.value["extra1-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": SubscribersIcon,
                boxed: "",
                color: style.value["extra1-color"]
              }, null, 8, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-row flex flex-col gap-5 lg:flex-row"><div class="card-wrap xs:flex-row flex basis-full flex-col gap-5 lg:basis-1/2"><div class="flex basis-full lg:basis-1/2">`);
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Reports",
        centered: "",
        class: "bg-extra-2! h-full text-white!"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ReportsIcon,
              boxed: "",
              "box-size": 50,
              color: "white"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ReportsIcon,
                boxed: "",
                "box-size": 50,
                color: "white"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex basis-full lg:basis-1/2"><div class="flex w-full flex-col gap-5">`);
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Issues",
        horizontal: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ErrorIcon,
              boxed: "",
              "box-size": 50,
              color: style.value["extra4-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ErrorIcon,
                boxed: "",
                "box-size": 50,
                color: style.value["extra4-color"]
              }, null, 8, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Completed",
        horizontal: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": CompletedIcon,
              boxed: "",
              "box-size": 50
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": CompletedIcon,
                boxed: "",
                "box-size": 50
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="card-wrap xs:flex-row flex basis-full flex-col gap-5 lg:basis-1/2"><div class="flex basis-full lg:basis-1/2"><div class="flex w-full flex-col gap-5">`);
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Pending",
        horizontal: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": PendingIcon,
              "box-size": 50,
              color: style.value["extra3-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": PendingIcon,
                "box-size": 50,
                color: style.value["extra3-color"]
              }, null, 8, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Shipped",
        horizontal: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ShippedIcon,
              "box-size": 50,
              color: style.value["extra1-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ShippedIcon,
                "box-size": 50,
                color: style.value["extra1-color"]
              }, null, 8, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex basis-full lg:basis-1/2">`);
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Earned",
        centered: "",
        class: "h-full",
        currency: "USD"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": RevenueIcon,
              "box-size": 50
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": RevenueIcon,
                "box-size": 50
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="card-row flex flex-col gap-5 lg:flex-row"><div class="card-wrap flex basis-full flex-col gap-5 lg:basis-1/2">`);
      _push(ssrRenderComponent(_component_CardCombo3, { class: "grow" }, null, _parent));
      _push(ssrRenderComponent(_component_CardCombo8, null, null, _parent));
      _push(`<div class="flex flex-col gap-5 md:flex-row lg:flex-col xl:flex-row">`);
      _push(ssrRenderComponent(_component_CardCombo6, {
        "card-wrap": "",
        "title-left": "Computer",
        "title-right": "Tablet",
        "value-left": "75.6k",
        "value-right": "143.7k"
      }, {
        iconLeft: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ComputerIcon,
              boxed: "",
              "box-size": 30
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ComputerIcon,
                boxed: "",
                "box-size": 30
              })
            ];
          }
        }),
        iconRight: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": TabletIcon,
              boxed: "",
              "box-size": 30
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": TabletIcon,
                boxed: "",
                "box-size": 30
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo6, {
        "card-wrap": "",
        "show-divider-lines": "",
        "hide-versus-icon": ""
      }, null, _parent));
      _push(`</div></div><div class="card-wrap flex basis-full flex-col gap-5 lg:basis-1/2"><div class="flex flex-col gap-5 sm:flex-row">`);
      _push(ssrRenderComponent(_component_CardCombo7, { "card-wrap": "" }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": SalesIcon,
              boxed: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": SalesIcon,
                boxed: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo4, {
        title: "Activities",
        "card-wrap": "",
        vertical: "",
        "val-string": "32.9K",
        percentage: "",
        "percentage-props": {
          value: 2.45,
          direction: "up"
        }
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ActivityIcon,
              color: style.value["extra2-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ActivityIcon,
                color: style.value["extra2-color"]
              }, null, 8, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CardCombo5, null, null, _parent));
      _push(`<div class="flex flex-col gap-5 sm:flex-row">`);
      _push(ssrRenderComponent(_component_CardCombo4, {
        title: "Uploaded",
        "val-string": "137.5 GB",
        "card-wrap": "",
        percentage: "",
        "percentage-props": {
          value: 1.96,
          direction: "down"
        }
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": UploadsIcon,
              boxed: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": UploadsIcon,
                boxed: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo4, {
        title: "Users",
        "card-wrap": "",
        "val-string": "248.3K",
        percentage: "",
        "percentage-props": {
          value: 2.45,
          direction: "up"
        }
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-5 md:flex-row lg:flex-col xl:flex-row">`);
      _push(ssrRenderComponent(_component_CardCombo7, {
        "card-wrap": "",
        "hide-header": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_CardCombo7, {
        "card-wrap": "",
        "show-percentage": "",
        "hide-info": ""
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Cards/Combo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Combo-B3LFBEoE.mjs.map
