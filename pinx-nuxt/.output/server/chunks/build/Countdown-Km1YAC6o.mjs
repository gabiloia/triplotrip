import { _ as __nuxt_component_0 } from './CardCodeExample-Mznr1J6X.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, watchEffect, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$s } from './server.mjs';
import { N as NSpace } from './Space-gce0Xg1R.mjs';
import { N as NSwitch } from './Switch-Ds1OeKkl.mjs';
import './LtrContext-DmPOw2ck.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-CEz2WGwr.mjs';
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

const countdownProps = {
  duration: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  precision: {
    type: Number,
    default: 0
  },
  render: Function,
  onFinish: Function
};
const NCountdown = defineComponent({
  name: "Countdown",
  props: countdownProps,
  setup(props) {
    let timerId = null;
    let elapsed = 0;
    let finished = false;
    const distanceRef = ref(0);
    watchEffect(() => {
      distanceRef.value = props.duration;
    });
    let pnow = -1;
    function getDistance(time) {
      return props.duration - elapsed + pnow - time;
    }
    function getTimeInfo(distance) {
      const hours = Math.floor(distance / 36e5);
      const minutes = Math.floor(distance % 36e5 / 6e4);
      const seconds = Math.floor(distance % 6e4 / 1e3);
      const milliseconds = Math.floor(distance % 1e3);
      return {
        hours,
        minutes,
        seconds,
        milliseconds
      };
    }
    function getDisplayValue(info) {
      const {
        hours,
        minutes,
        seconds,
        milliseconds
      } = info;
      const {
        precision
      } = props;
      switch (precision) {
        case 0:
          return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        default:
          return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(Math.floor(milliseconds / (precision === 1 ? 100 : precision === 2 ? 10 : 1))).padStart(precision, "0")}`;
      }
    }
    const frame = () => {
      var _a;
      const {
        precision
      } = props;
      const distance = getDistance(performance.now());
      if (distance <= 0) {
        distanceRef.value = 0;
        stopTimer();
        if (!finished) {
          finished = true;
          (_a = props.onFinish) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        return;
      }
      let leftTime;
      switch (precision) {
        case 3:
        case 2:
          leftTime = distance % 34;
          break;
        case 1:
          leftTime = distance % 100;
          break;
        default:
          leftTime = distance % 1e3;
      }
      distanceRef.value = distance;
      timerId = (void 0).setTimeout(() => {
        frame();
      }, leftTime);
    };
    function stopTimer() {
      if (timerId !== null) {
        (void 0).clearTimeout(timerId);
        timerId = null;
      }
    }
    function reset() {
      distanceRef.value = props.duration;
      elapsed = 0;
      pnow = performance.now();
      if (props.active && finished) {
        frame();
      }
      finished = false;
    }
    const countdownExposedMethod = {
      reset
    };
    return Object.assign(countdownExposedMethod, {
      distance: distanceRef,
      getTimeInfo,
      getDisplayValue
    });
  },
  render() {
    const {
      render,
      precision,
      distance,
      getTimeInfo,
      getDisplayValue
    } = this;
    let timeInfo;
    switch (precision) {
      case 0:
        timeInfo = getTimeInfo(distance + 999);
        timeInfo.milliseconds = 0;
        break;
      case 1:
        timeInfo = getTimeInfo(distance + 99);
        timeInfo.milliseconds = Math.floor(timeInfo.milliseconds / 100) * 100;
        break;
      case 2:
        timeInfo = getTimeInfo(distance + 9);
        timeInfo.milliseconds = Math.floor(timeInfo.milliseconds / 10) * 10;
        break;
      case 3:
        timeInfo = getTimeInfo(distance);
    }
    if (render) {
      return render(timeInfo);
    } else {
      return getDisplayValue(timeInfo);
    }
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Countdown",
  __ssrInlineRender: true,
  setup(__props) {
    const active = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Countdown</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/countdown" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A countdown string.`);
          } else {
            return [
              createTextVNode("A countdown string.")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-switch v-model:value="active" />
						<span style="font-variant-numeric: tabular-nums">
							<n-countdown :duration="5000" :active="active" />
						</span>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const active = ref(false)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-switch v-model:value="active" />
						<span style="font-variant-numeric: tabular-nums">
							<n-countdown :duration="5000" :active="active" />
						</span>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const active = ref(false)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NSwitch), {
                    value: active.value,
                    "onUpdate:value": ($event) => active.value = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span style="${ssrRenderStyle({ "font-variant-numeric": "tabular-nums" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NCountdown), {
                    duration: 5e3,
                    active: active.value
                  }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode(unref(NSwitch), {
                      value: active.value,
                      "onUpdate:value": ($event) => active.value = $event
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode("span", { style: { "font-variant-numeric": "tabular-nums" } }, [
                      createVNode(unref(NCountdown), {
                        duration: 5e3,
                        active: active.value
                      }, null, 8, ["active"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(NSwitch), {
                    value: active.value,
                    "onUpdate:value": ($event) => active.value = $event
                  }, null, 8, ["value", "onUpdate:value"]),
                  createVNode("span", { style: { "font-variant-numeric": "tabular-nums" } }, [
                    createVNode(unref(NCountdown), {
                      duration: 5e3,
                      active: active.value
                    }, null, 8, ["active"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Countdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Countdown-Km1YAC6o.mjs.map
