import { c as __nuxt_component_6, d as __nuxt_component_1, a as __nuxt_component_1$1, _ as __nuxt_component_0, b as __nuxt_component_5 } from './CardCombo3-lXe4TseU.mjs';
import { _ as __nuxt_component_8 } from './CardWrapper-dWihTu_I.mjs';
import { _ as __nuxt_component_4, D as DemoList } from './List-CpyEdsIs.mjs';
import { a as _sfc_main$1, _ as __nuxt_component_8$1 } from './CardExtra7-C5rmyToe.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { D as DemoChart } from './Percentage-mylKLD0M.mjs';
import { a as _export_sfc, aa as useThemeStore } from './server.mjs';
import './Apex-Sc81I4Gd.mjs';
import '@faker-js/faker';
import '@number-flow/vue';
import '@vueuse/core';
import 'dayjs';
import './Popselect-Cg6yOK4Z.mjs';
import 'seemly';
import 'treemate';
import './utils-DMBa_qdR.mjs';
import './SelectMenu-CI2DF0Y8.mjs';
import './FocusDetector-BouO2CrO.mjs';
import 'vooks';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import '@css-render/vue3-ssr';
import './use-resize-COzDFWWZ.mjs';
import 'colord';
import 'lodash/capitalize.js';
import './TimelineItem-BTXX02CD.mjs';
import 'lodash/max.js';
import './Progress-jZ7DMXne.mjs';
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
const UsersIcon = "carbon:user";
const ReportsIcon = "carbon:report";
const ErrorIcon = "carbon:debug";
const ViewsIcon = "carbon:view";
const ActivityIcon = "carbon:activity";
const UploadsIcon = "carbon:cloud-upload";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    const textSecondaryColor = computed(() => themeStore.style["fg-secondary-color"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCombo3 = __nuxt_component_6;
      const _component_CardCombo4 = __nuxt_component_1;
      const _component_CardComboIcon = __nuxt_component_1$1;
      const _component_CardWrapper = __nuxt_component_8;
      const _component_CardActions = __nuxt_component_4;
      const _component_CardCombo1 = __nuxt_component_0;
      const _component_CardCombo2 = __nuxt_component_5;
      const _component_CardExtra7 = _sfc_main$1;
      const _component_CardExtra5 = __nuxt_component_8$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-f0a89a83><div class="main-grid gap-5" data-v-f0a89a83><div class="main-col" data-v-f0a89a83><div class="flex h-full flex-col gap-5" data-v-f0a89a83><div class="main-chart-wrap flex" data-v-f0a89a83>`);
      _push(ssrRenderComponent(_component_CardCombo3, { class: "h-full" }, null, _parent));
      _push(`</div><div class="four-cards-wrap gap-5" data-v-f0a89a83>`);
      _push(ssrRenderComponent(_component_CardCombo4, {
        title: "Users",
        "val-string": "248.3K",
        percentage: "",
        "card-wrap": "",
        "icon-box": "",
        "percentage-props": {
          value: 2.45,
          direction: "up"
        }
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": UsersIcon,
              boxed: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": UsersIcon,
                boxed: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo4, {
        title: "Page Views",
        "val-string": "486.9K",
        percentage: "",
        "card-wrap": "",
        "percentage-props": {
          value: 1.88,
          direction: "down"
        }
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ViewsIcon,
              boxed: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ViewsIcon,
                boxed: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo4, {
        title: "Active Users",
        "val-string": "73.8K",
        percentage: "",
        "card-wrap": "",
        "percentage-props": {
          value: 3.24,
          direction: "up"
        }
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ActivityIcon,
              boxed: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ActivityIcon,
                boxed: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCombo4, {
        title: "Uploads",
        "val-string": "42.1K",
        percentage: "",
        "card-wrap": "",
        "percentage-props": {
          value: 0.43,
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
      _push(`</div><div class="flex grow" data-v-f0a89a83>`);
      _push(ssrRenderComponent(_component_CardWrapper, { class: "h-full w-full grow" }, {
        default: withCtx(({ expand, isExpand, reload }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardActions, {
              expand,
              "is-expand": isExpand,
              reload,
              class: "h-full",
              title: "Leading Companies",
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
                title: "Leading Companies",
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
      _push(`</div></div></div><div class="side-col" data-v-f0a89a83><div class="flex h-full flex-col gap-5" data-v-f0a89a83><div class="flex" data-v-f0a89a83>`);
      _push(ssrRenderComponent(_component_CardCombo1, {
        title: "Sessions",
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
      _push(`</div><div class="flex gap-5" data-v-f0a89a83>`);
      _push(ssrRenderComponent(_component_CardCombo2, {
        title: "Reports",
        centered: "",
        class: "basis-1/2"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardComboIcon, {
              "icon-name": ReportsIcon,
              boxed: "",
              "box-size": 50,
              color: style.value["extra3-color"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardComboIcon, {
                "icon-name": ReportsIcon,
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
        title: "Issues",
        centered: "",
        class: "basis-1/2"
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
      _push(`</div><div class="flex overflow-hidden" data-v-f0a89a83>`);
      _push(ssrRenderComponent(_component_CardExtra7, {
        title: "Top countries",
        segmented: {
          content: true
        }
      }, null, _parent));
      _push(`</div><div class="timeline-wrap grow" data-v-f0a89a83>`);
      _push(ssrRenderComponent(_component_CardExtra5, {
        long: "",
        lazy: "",
        "hide-image": "",
        title: "Issues timeline",
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
const Analytics = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f0a89a83"]]);

export { Analytics as default };
//# sourceMappingURL=Analytics-D0CuBqT0.mjs.map
