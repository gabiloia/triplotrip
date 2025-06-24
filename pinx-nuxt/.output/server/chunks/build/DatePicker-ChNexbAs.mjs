import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { N as NSelect } from './Select-C3EjoE5y.mjs';
import { N as NDatePicker } from './DatePicker-x2QVp_NZ.mjs';
import './LtrContext-CUHPU62m.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BML65SQa.mjs';
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
import './utils-DMBa_qdR.mjs';
import './Selection-CiVeFFpt.mjs';
import './Suffix-CHHaPGTv.mjs';
import './use-resize-COzDFWWZ.mjs';
import './SelectMenu-BGzY6WVh.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Checkmark-Dx0exe4H.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './utils-BrnwStsU.mjs';
import './getDefaultOptions-BBsy6BU_.mjs';
import './TimePicker-QgwSrnik.mjs';
import './Input-VW15MloS.mjs';
import './Eye-DafrR3c8.mjs';
import './index-8J19xG0f.mjs';
import './Forward-B1Z9q27Z.mjs';

const ExternalIcon = "tabler:external-link";
const format = "yyyy/MM/dd - HH:mm";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DatePicker",
  __ssrInlineRender: true,
  setup(__props) {
    const timestamp = ref((/* @__PURE__ */ new Date()).getTime());
    const type = ref("date");
    const typeOptions = [
      {
        label: "Date",
        value: "date"
      },
      {
        label: "Date time",
        value: "datetime"
      },
      {
        label: "Date range",
        value: "daterange"
      },
      {
        label: "Date time range",
        value: "datetimerange"
      },
      {
        label: "Month",
        value: "month"
      },
      {
        label: "Month range",
        value: "monthrange"
      },
      {
        label: "Year",
        value: "year"
      },
      {
        label: "Year range",
        value: "yearrange"
      },
      {
        label: "Quarter",
        value: "quarter"
      },
      {
        label: "Quarter range",
        value: "quarterrange"
      }
    ];
    function dateDisabled(ts) {
      const date = new Date(ts).getDate();
      return date < 15;
    }
    watch(type, () => {
      timestamp.value = null;
    });
    const ts1 = ref(null);
    const shortcuts = {
      "Honey birthday": 16312032e5,
      Yesterday: () => (/* @__PURE__ */ new Date()).getTime() - 24 * 60 * 60 * 1e3
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Date Picker</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/date-picker" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div class="mb-3">
						<label>type:</label>
						<n-select v-model:value="type" :options="typeOptions" />
					</div>
					<n-date-picker v-model:value="timestamp" :type="type" clearable />
					`))} ${ssrInterpolate(js(`
						type Value = number | [number, number] | null

						const timestamp = ref<Value>(new Date().getTime())
						const type = ref<DatePickerType>("date")
						const typeOptions = [
							{
								label: "Date",
								value: "date"
							},
							{
								label: "Date time",
								value: "datetime"
							},
							{
								label: "Date range",
								value: "daterange"
							},
							{
								label: "Date time range",
								value: "datetimerange"
							},
							{
								label: "Month",
								value: "month"
							},
							{
								label: "Month range",
								value: "monthrange"
							},
							{
								label: "Year",
								value: "year"
							},
							{
								label: "Year range",
								value: "yearrange"
							},
							{
								label: "Quarter",
								value: "quarter"
							},
							{
								label: "Quarter range",
								value: "quarterrange"
							}
						]

						watch(type, () => {
							timestamp.value = null
						})
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div class="mb-3">
						<label>type:</label>
						<n-select v-model:value="type" :options="typeOptions" />
					</div>
					<n-date-picker v-model:value="timestamp" :type="type" clearable />
					`)) + " " + toDisplayString(js(`
						type Value = number | [number, number] | null

						const timestamp = ref<Value>(new Date().getTime())
						const type = ref<DatePickerType>("date")
						const typeOptions = [
							{
								label: "Date",
								value: "date"
							},
							{
								label: "Date time",
								value: "datetime"
							},
							{
								label: "Date range",
								value: "daterange"
							},
							{
								label: "Date time range",
								value: "datetimerange"
							},
							{
								label: "Month",
								value: "month"
							},
							{
								label: "Month range",
								value: "monthrange"
							},
							{
								label: "Year",
								value: "year"
							},
							{
								label: "Year range",
								value: "yearrange"
							},
							{
								label: "Quarter",
								value: "quarter"
							},
							{
								label: "Quarter range",
								value: "quarterrange"
							}
						]

						watch(type, () => {
							timestamp.value = null
						})
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-3"${_scopeId}><label${_scopeId}>type:</label>`);
            _push2(ssrRenderComponent(unref(NSelect), {
              value: type.value,
              "onUpdate:value": ($event) => type.value = $event,
              options: typeOptions
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(NDatePicker), {
              value: timestamp.value,
              "onUpdate:value": ($event) => timestamp.value = $event,
              type: type.value,
              clearable: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-3" }, [
                createVNode("label", null, "type:"),
                createVNode(unref(NSelect), {
                  value: type.value,
                  "onUpdate:value": ($event) => type.value = $event,
                  options: typeOptions
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              createVNode(unref(NDatePicker), {
                value: timestamp.value,
                "onUpdate:value": ($event) => timestamp.value = $event,
                type: type.value,
                clearable: ""
              }, null, 8, ["value", "onUpdate:value", "type"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Disabled specific time" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div>
						<n-date-picker type="date" :default-value="Date.now()" :is-date-disabled="dateDisabled" />
					</div>
					`))} ${ssrInterpolate(js(`
						function dateDisabled(ts: number) {
							const date = new Date(ts).getDate()
							return date < 15
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div>
						<n-date-picker type="date" :default-value="Date.now()" :is-date-disabled="dateDisabled" />
					</div>
					`)) + " " + toDisplayString(js(`
						function dateDisabled(ts: number) {
							const date = new Date(ts).getDate()
							return date < 15
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDatePicker), {
              type: "date",
              "default-value": Date.now(),
              "is-date-disabled": dateDisabled
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NDatePicker), {
                type: "date",
                "default-value": Date.now(),
                "is-date-disabled": dateDisabled
              }, null, 8, ["default-value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Shortcuts" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`You can customize some shorcut buttons.`);
          } else {
            return [
              createTextVNode("You can customize some shorcut buttons.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div>
						<n-date-picker v-model:value="ts1" type="date" :shortcuts="shortcuts" />
					</div>
					`))} ${ssrInterpolate(js(`
						const ts1 = ref(null)
						const shortcuts = {
							"Honey birthday": 1631203200000,
							Yesterday: () => new Date().getTime() - 24 * 60 * 60 * 1000
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div>
						<n-date-picker v-model:value="ts1" type="date" :shortcuts="shortcuts" />
					</div>
					`)) + " " + toDisplayString(js(`
						const ts1 = ref(null)
						const shortcuts = {
							"Honey birthday": 1631203200000,
							Yesterday: () => new Date().getTime() - 24 * 60 * 60 * 1000
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDatePicker), {
              value: ts1.value,
              "onUpdate:value": ($event) => ts1.value = $event,
              type: "date",
              shortcuts
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NDatePicker), {
                value: ts1.value,
                "onUpdate:value": ($event) => ts1.value = $event,
                type: "date",
                shortcuts
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Format" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div>
						<n-date-picker v-model:value="timestamp" type="datetime" clearable :format="format" />
					</div>
					`))} ${ssrInterpolate(js(`
						const format = "yyyy/MM/dd - HH:mm"
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div>
						<n-date-picker v-model:value="timestamp" type="datetime" clearable :format="format" />
					</div>
					`)) + " " + toDisplayString(js(`
						const format = "yyyy/MM/dd - HH:mm"
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDatePicker), {
              value: timestamp.value,
              "onUpdate:value": ($event) => timestamp.value = $event,
              type: "datetime",
              clearable: "",
              format
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NDatePicker), {
                value: timestamp.value,
                "onUpdate:value": ($event) => timestamp.value = $event,
                type: "datetime",
                clearable: "",
                format
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Use panel only" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div>
						<n-date-picker panel type="date" />
					</div>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div>
						<n-date-picker panel type="date" />
					</div>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDatePicker), {
              panel: "",
              type: "date",
              class: "mx-auto!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NDatePicker), {
                panel: "",
                type: "date",
                class: "mx-auto!"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/DatePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DatePicker-ChNexbAs.mjs.map
