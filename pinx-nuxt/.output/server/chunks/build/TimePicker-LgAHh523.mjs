import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NTimePicker } from './TimePicker-BCfmsXF5.mjs';
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
import './get-slot-BIpdyb5h.mjs';
import './utils-Dsl_XouJ.mjs';
import './getDefaultOptions-B-S4FfjT.mjs';
import './FocusDetector-BouO2CrO.mjs';
import './Input-VW15MloS.mjs';
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';
import './index-CdFfausA.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimePicker",
  __ssrInlineRender: true,
  setup(__props) {
    const time0 = ref(null);
    function isHourDisabled(hour) {
      return hour % 2 === 0;
    }
    function isMinuteDisabled(minute, selectedHour) {
      if (selectedHour === null) return false;
      if (Number(selectedHour) < 12) {
        return minute < 30;
      } else {
        return false;
      }
    }
    function isSecondDisabled(second, selectedMinute, selectedHour) {
      if (selectedHour === null || selectedMinute === null) return false;
      if (Number(selectedHour) > 20 && Number(selectedMinute) < 30) {
        return second < 40;
      } else {
        return false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Time Picker</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/time-picker" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-time-picker default-formatted-value="00:12:13" />
						<n-time-picker use-12-hours :default-value="1183135260000" />
					</n-space>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-time-picker default-formatted-value="00:12:13" />
						<n-time-picker use-12-hours :default-value="1183135260000" />
					</n-space>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTimePicker), { "default-formatted-value": "00:12:13" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimePicker), {
                    "use-12-hours": "",
                    "default-value": 118313526e4
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTimePicker), { "default-formatted-value": "00:12:13" }),
                    createVNode(unref(NTimePicker), {
                      "use-12-hours": "",
                      "default-value": 118313526e4
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NTimePicker), { "default-formatted-value": "00:12:13" }),
                  createVNode(unref(NTimePicker), {
                    "use-12-hours": "",
                    "default-value": 118313526e4
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Disable time" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-time-picker
						v-model:value="time0"
						:is-hour-disabled="isHourDisabled"
						:is-minute-disabled="isMinuteDisabled"
						:is-second-disabled="isSecondDisabled"
					/>
					`))} ${ssrInterpolate(js(`
						const time0 = ref(null)
						function isHourDisabled(hour: number) {
							return hour % 2 === 0
						}
						function isMinuteDisabled(minute: number, selectedHour: number | null) {
							if (selectedHour === null) return false
							if (Number(selectedHour) < 12) {
								return minute < 30
							} else {
								return false
							}
						}
						function isSecondDisabled(second: number, selectedMinute: number | null, selectedHour: number | null) {
							if (selectedHour === null || selectedMinute === null) return false
							if (Number(selectedHour) > 20 && Number(selectedMinute) < 30) {
								return second < 40
							} else {
								return false
							}
						}
`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-time-picker
						v-model:value="time0"
						:is-hour-disabled="isHourDisabled"
						:is-minute-disabled="isMinuteDisabled"
						:is-second-disabled="isSecondDisabled"
					/>
					`)) + " " + toDisplayString(js(`
						const time0 = ref(null)
						function isHourDisabled(hour: number) {
							return hour % 2 === 0
						}
						function isMinuteDisabled(minute: number, selectedHour: number | null) {
							if (selectedHour === null) return false
							if (Number(selectedHour) < 12) {
								return minute < 30
							} else {
								return false
							}
						}
						function isSecondDisabled(second: number, selectedMinute: number | null, selectedHour: number | null) {
							if (selectedHour === null || selectedMinute === null) return false
							if (Number(selectedHour) > 20 && Number(selectedMinute) < 30) {
								return second < 40
							} else {
								return false
							}
						}
`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTimePicker), {
              value: time0.value,
              "onUpdate:value": ($event) => time0.value = $event,
              "is-hour-disabled": isHourDisabled,
              "is-minute-disabled": isMinuteDisabled,
              "is-second-disabled": isSecondDisabled
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTimePicker), {
                value: time0.value,
                "onUpdate:value": ($event) => time0.value = $event,
                "is-hour-disabled": isHourDisabled,
                "is-minute-disabled": isMinuteDisabled,
                "is-second-disabled": isSecondDisabled
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Step time" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-time-picker :hours="[8, 18]" :minutes="8" :seconds="[0]" />
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-time-picker :hours="[8, 18]" :minutes="8" :seconds="[0]" />
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTimePicker), {
              hours: [8, 18],
              minutes: 8,
              seconds: [0]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTimePicker), {
                hours: [8, 18],
                minutes: 8,
                seconds: [0]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/TimePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TimePicker-LgAHh523.mjs.map
