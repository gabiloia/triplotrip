import { _ as __nuxt_component_0, a as __nuxt_component_1$1, b as __nuxt_component_5, c as __nuxt_component_6 } from './CardCombo3-C2Iupewi.mjs';
import { a as __nuxt_component_2, _ as __nuxt_component_3, c as __nuxt_component_7 } from './CardCombo5-DR_L1bw0.mjs';
import { _ as __nuxt_component_4, D as DemoList } from './List-c_yvqLtB.mjs';
import { _ as __nuxt_component_8 } from './CardWrapper-BlMxJBLU.mjs';
import { _ as __nuxt_component_9 } from './CardExtra6-BEMwN58X.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { D as DemoChart } from './Percentage-BESHn0BX.mjs';
import { a as _export_sfc, ab as useThemeStore } from './server.mjs';
import { useWindowSize, useElementSize } from '@vueuse/core';
import './Apex-BLAQOTYv.mjs';
import '@faker-js/faker';
import '@number-flow/vue';
import 'dayjs';
import './Progress-iOzX4hFw.mjs';
import 'colord';
import './Base-23L4dhgL.mjs';
import 'lodash/orderBy.js';
import './Table-lFpRjk1j.mjs';
import './Image-CRKx2FUb.mjs';
import 'seemly';
import 'evtd';
import 'lodash-es';
import 'vdirs';
import 'vooks';
import './download-aNT-DO08.mjs';
import 'lodash/max.js';
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
import 'lodash/get.js';
import 'lodash/set.js';
import '@css-render/plugin-bem';
import 'css-render';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const CompletedIcon = "carbon:checkmark-outline";
const PendingIcon = "carbon:hourglass";
const ShippedIcon = "carbon:send";
const SalesIcon = "carbon:wireless-checkout";
const OrdersIcon = "carbon:shopping-cart";
const RevenueIcon = "carbon:money";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "eCommerce",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const { width } = useWindowSize();
    const style = computed(() => themeStore.style);
    const textSecondaryColor = computed(() => themeStore.style["fg-secondary-color"]);
    const cardsContainer = ref(null);
    const { width: widthCardsContainer } = useElementSize(cardsContainer);
    const isCardHorizontal = computed(() => widthCardsContainer.value < 460);
    const isRightColHorizontal = computed(() => width.value < 1400);
    const isSwitchChartHorizontal = computed(() => width.value < 1310);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCombo1 = __nuxt_component_0;
      const _component_CardComboIcon = __nuxt_component_1$1;
      const _component_CardCombo6 = __nuxt_component_2;
      const _component_CardCombo8 = __nuxt_component_3;
      const _component_CardActions = __nuxt_component_4;
      const _component_CardCombo2 = __nuxt_component_5;
      const _component_CardCombo3 = __nuxt_component_6;
      const _component_CardCombo5 = __nuxt_component_7;
      const _component_CardWrapper = __nuxt_component_8;
      const _component_CardExtra6 = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-980ccdc1><div class="main-grid gap-5" data-v-980ccdc1><div class="box-card-1" data-v-980ccdc1>`);
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
      _push(`</div><div class="box-card-2" data-v-980ccdc1>`);
      _push(ssrRenderComponent(_component_CardCombo6, {
        "card-wrap": "",
        title: "Category overview",
        segmented: {
          content: true
        }
      }, null, _parent));
      _push(`</div><div class="box-card-3" data-v-980ccdc1>`);
      _push(ssrRenderComponent(_component_CardCombo1, {
        title: "Orders",
        class: "h-full"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": OrdersIcon,
              boxed: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": OrdersIcon,
                boxed: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="left-col" data-v-980ccdc1><div class="flex h-full flex-col gap-5" data-v-980ccdc1><div class="flex" data-v-980ccdc1>`);
      _push(ssrRenderComponent(_component_CardCombo8, null, null, _parent));
      _push(`</div><div class="flex grow" data-v-980ccdc1>`);
      _push(ssrRenderComponent(_component_CardActions, {
        segmented: {
          action: false
        },
        "hide-subtitle": true,
        "show-image": "",
        "hide-menu": "",
        hoverable: false,
        "action-box-transparent": "",
        title: "Best product",
        image: "/images/headphones.jpg",
        class: "h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(DemoList, {
              "hide-value": false,
              "data-type": "colors",
              percentage: { progress: "circle", icon: "operator", useColor: true }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(DemoList, {
                "hide-value": false,
                "data-type": "colors",
                percentage: { progress: "circle", icon: "operator", useColor: true }
              })
            ];
          }
        }),
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(DemoChart, {
              type: "area",
              "data-type": "week",
              "hide-xaxis-labels": "",
              "stroke-width": 2,
              "font-color": textSecondaryColor.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(DemoChart, {
                type: "area",
                "data-type": "week",
                "hide-xaxis-labels": "",
                "stroke-width": 2,
                "font-color": textSecondaryColor.value
              }, null, 8, ["font-color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="right-col" data-v-980ccdc1><div class="flex h-full flex-col gap-5" data-v-980ccdc1><div class="${ssrRenderClass([{ "flex-col": isCardHorizontal.value }, "flex w-full gap-5"])}" data-v-980ccdc1>`);
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Completed",
        centered: "",
        horizontal: isCardHorizontal.value,
        class: "basis-1/3"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": CompletedIcon,
              boxed: "",
              "box-size": 50,
              color: style.value["primary-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": CompletedIcon,
                boxed: "",
                "box-size": 50,
                color: style.value["primary-color"]
              }, null, 8, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Pending",
        centered: "",
        horizontal: isCardHorizontal.value,
        class: "basis-1/3"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": PendingIcon,
              boxed: "",
              "box-size": 50,
              color: style.value["extra3-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": PendingIcon,
                boxed: "",
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
        centered: "",
        horizontal: isCardHorizontal.value,
        class: "basis-1/3"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ShippedIcon,
              boxed: "",
              "box-size": 50,
              color: style.value["extra1-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ShippedIcon,
                boxed: "",
                "box-size": 50,
                color: style.value["extra1-color"]
              }, null, 8, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "flex-col": isRightColHorizontal.value }, "flex w-full grow gap-5"])}" data-v-980ccdc1><div class="${ssrRenderClass([{ "basis-1/2": !isSwitchChartHorizontal.value }, "flex h-full flex-col gap-5"])}" data-v-980ccdc1><div class="grow" data-v-980ccdc1>`);
      _push(ssrRenderComponent(_component_CardCombo1, {
        title: "Revenue",
        class: "bg-extra-3! h-full text-white!",
        type: "bar",
        "data-count": 10,
        "chart-padding-top": isRightColHorizontal.value && !isSwitchChartHorizontal.value ? "0px" : "100px",
        currency: "USD",
        "chart-bar-gradient": "",
        "chart-height": isRightColHorizontal.value && !isSwitchChartHorizontal.value ? 40 : 200,
        "chart-color": "#ffffff"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": RevenueIcon,
              boxed: "",
              color: "white"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": RevenueIcon,
                boxed: "",
                color: "white"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CardCombo3, {
        class: "h-full",
        "one-series": ""
      }, null, _parent));
      _push(`</div>`);
      if (!isSwitchChartHorizontal.value) {
        _push(`<div class="flex h-full basis-1/2 flex-col gap-5" data-v-980ccdc1>`);
        _push(ssrRenderComponent(_component_CardCombo5, {
          size: "large",
          class: "h-full"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="box-bottom" data-v-980ccdc1><div class="flex flex-col gap-5" data-v-980ccdc1>`);
      if (isSwitchChartHorizontal.value) {
        _push(ssrRenderComponent(_component_CardCombo5, { size: "large" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CardWrapper, { class: "h-full w-full" }, {
        default: withCtx(({ expand, isExpand, reload }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardExtra6, {
              class: "h-full",
              expand,
              "is-expand": isExpand,
              reload,
              "show-actions": "",
              "show-date": "",
              "min-width": 760
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardExtra6, {
                class: "h-full",
                expand,
                "is-expand": isExpand,
                reload,
                "show-actions": "",
                "show-date": "",
                "min-width": 760
              }, null, 8, ["expand", "is-expand", "reload"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/eCommerce.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eCommerce = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-980ccdc1"]]);

export { eCommerce as default };
//# sourceMappingURL=eCommerce-D3k0kuOQ.mjs.map
