import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button, X as useLocale } from './server.mjs';
import { round } from 'lodash-es';
import { N as NStatistic } from './Statistic-Cg0L9tBo.mjs';
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

const easeOut = (t) => 1 - Math.pow(1 - t, 5);
function tween(props) {
  const {
    from,
    to,
    duration,
    onUpdate,
    onFinish
  } = props;
  const startTime = performance.now();
  const tick = () => {
    const current = performance.now();
    const elapsedTime = Math.min(current - startTime, duration);
    const currentValue = from + (to - from) * easeOut(elapsedTime / duration);
    if (elapsedTime === duration) {
      onFinish();
      return;
    }
    onUpdate(currentValue);
    requestAnimationFrame(tick);
  };
  tick();
}
const numberAnimationProps = {
  to: {
    type: Number,
    default: 0
  },
  precision: {
    type: Number,
    default: 0
  },
  showSeparator: Boolean,
  locale: String,
  from: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 2e3
  },
  onFinish: Function
};
const NNumberAnimation = defineComponent({
  name: "NumberAnimation",
  props: numberAnimationProps,
  setup(props) {
    const {
      localeRef
    } = useLocale("name");
    const {
      duration
    } = props;
    const displayedValueRef = ref(props.from);
    const mergedLocaleRef = computed(() => {
      const {
        locale
      } = props;
      if (locale !== void 0) return locale;
      return localeRef.value;
    });
    let animating = false;
    const onUpdate = (currentValue) => {
      displayedValueRef.value = currentValue;
    };
    const onFinish = () => {
      var _a;
      displayedValueRef.value = props.to;
      animating = false;
      (_a = props.onFinish) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    const animate = (from = props.from, to = props.to) => {
      animating = true;
      displayedValueRef.value = props.from;
      if (from !== to) {
        tween({
          from,
          to,
          duration,
          onUpdate,
          onFinish
        });
      }
    };
    const formattedValueRef = computed(() => {
      var _a;
      const formatted = round(displayedValueRef.value, props.precision).toFixed(props.precision);
      const splitValue = formatted.split(".");
      const numberFormatter = new Intl.NumberFormat(mergedLocaleRef.value);
      const decimalSeparator = (_a = numberFormatter.formatToParts(0.5).find((part) => part.type === "decimal")) === null || _a === void 0 ? void 0 : _a.value;
      const integer = props.showSeparator ? numberFormatter.format(Number(splitValue[0])) : splitValue[0];
      const decimal = splitValue[1];
      return {
        integer,
        decimal,
        decimalSeparator
      };
    });
    function play() {
      if (animating) return;
      animate();
    }
    const exposedMethods = {
      play
    };
    return Object.assign({
      formattedValue: formattedValueRef
    }, exposedMethods);
  },
  render() {
    const {
      formattedValue: {
        integer,
        decimal,
        decimalSeparator
      }
    } = this;
    return [integer, decimal ? decimalSeparator : null, decimal];
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NumberAnimation",
  __ssrInlineRender: true,
  setup(__props) {
    const numberAnimationInstRef = ref(null);
    function handleClick() {
      var _a;
      (_a = numberAnimationInstRef.value) == null ? void 0 : _a.play();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Number Animation</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/number-animation" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-lg"
      }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-statistic label="A little goal" tabular-nums>
						<n-number-animation
							ref="numberAnimationInstRef"
							show-separator
							:from="0"
							:to="100000000"
							:active="false"
							:precision="2"
						/>
					</n-statistic>
					<n-button @click="handleClick">Play</n-button>
					`))} ${ssrInterpolate(js(`
						const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)

						function handleClick() {
							numberAnimationInstRef.value?.play()
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-statistic label="A little goal" tabular-nums>
						<n-number-animation
							ref="numberAnimationInstRef"
							show-separator
							:from="0"
							:to="100000000"
							:active="false"
							:precision="2"
						/>
					</n-statistic>
					<n-button @click="handleClick">Play</n-button>
					`)) + " " + toDisplayString(js(`
						const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)

						function handleClick() {
							numberAnimationInstRef.value?.play()
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NStatistic), {
              label: "A little goal",
              "tabular-nums": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NNumberAnimation), {
                    ref_key: "numberAnimationInstRef",
                    ref: numberAnimationInstRef,
                    "show-separator": "",
                    from: 0,
                    to: 1e8,
                    active: false,
                    precision: 2
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NNumberAnimation), {
                      ref_key: "numberAnimationInstRef",
                      ref: numberAnimationInstRef,
                      "show-separator": "",
                      from: 0,
                      to: 1e8,
                      active: false,
                      precision: 2
                    }, null, 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Button), { onClick: handleClick }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Play`);
                } else {
                  return [
                    createTextVNode("Play")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NStatistic), {
                label: "A little goal",
                "tabular-nums": ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(NNumberAnimation), {
                    ref_key: "numberAnimationInstRef",
                    ref: numberAnimationInstRef,
                    "show-separator": "",
                    from: 0,
                    to: 1e8,
                    active: false,
                    precision: 2
                  }, null, 512)
                ]),
                _: 1
              }),
              createVNode(unref(Button), { onClick: handleClick }, {
                default: withCtx(() => [
                  createTextVNode("Play")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/NumberAnimation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=NumberAnimation-BNc2q0hG.mjs.map
