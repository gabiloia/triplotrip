import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { ab as useThemeStore, N as NCard, B as Button, b2 as useLocalesStore, b3 as useI18n, _ as _sfc_main$o } from './server.mjs';
import { N as NSelect } from './Select-C3EjoE5y.mjs';
import { N as NAlert } from './Alert-BXe_RePJ.mjs';
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
import 'vooks';
import '@vueuse/core';
import 'lodash/set.js';
import 'seemly';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LocaleSelect",
  __ssrInlineRender: true,
  setup(__props) {
    const localesStore = useLocalesStore();
    const { setLocale } = localesStore;
    const { t } = useI18n();
    const list = computed(
      () => localesStore.availableLocales.map((i) => ({
        label: i,
        value: i
      }))
    );
    const currentLocale = computed({
      get: () => localesStore.locale,
      set: (v) => setLocale(v)
    });
    function renderLabel(option) {
      return [
        h(_sfc_main$o, {
          color: "#000",
          style: {
            verticalAlign: "-0.15em",
            marginRight: "8px"
          },
          name: `circle-flags:${option.label}`
        }),
        h(
          "span",
          {},
          {
            default: () => t(`locales.${option.label}`, `${option.label}`)
          }
        )
      ];
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-60" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NSelect), {
        value: currentLocale.value,
        "onUpdate:value": ($event) => currentLocale.value = $event,
        options: list.value,
        "render-label": renderLabel
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/LocaleSelect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MultiLanguage",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const isRTL = computed(() => themeStore.isRTL);
    function toggleRTL() {
      themeStore.setRTL(!isRTL.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Multi Language</div></div> Multi language support is provided by the <a href="https://vue-i18n.intlify.dev/" target="_blank" alt="docs" rel="nofollow noopener noreferrer"> vue-i18n </a> plugin. For more information and to find out about all possible implementations, I invite you to read the plugin documentation. <br> In the <a href="https://pinx-docs.vercel.app/i18n" target="_blank" alt="docs" rel="nofollow noopener noreferrer"> template documentation </a> you can find out how it was implemented. `);
      _push(ssrRenderComponent(unref(NCard), { class: "mt-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { class: "mb-5" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("sun_description"))}</p>`);
          } else {
            return [
              createVNode(_sfc_main$1, { class: "mb-5" }),
              createVNode("p", null, toDisplayString(_ctx.$t("sun_description")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NCard), {
        class: "mt-6",
        segmented: {
          content: true,
          footer: "soft"
        }
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-3"${_scopeId}> RTL <span class="text-secondary"${_scopeId}>Right-to-Left</span></span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-3" }, [
                createTextVNode(" RTL "),
                createVNode("span", { class: "text-secondary" }, "Right-to-Left")
              ])
            ];
          }
        }),
        "header-extra": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              onClick: ($event) => toggleRTL()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Set ${ssrInterpolate(isRTL.value ? "LTR" : "RTL")}`);
                } else {
                  return [
                    createTextVNode("Set " + toDisplayString(isRTL.value ? "LTR" : "RTL"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), {
                type: "primary",
                onClick: ($event) => toggleRTL()
              }, {
                default: withCtx(() => [
                  createTextVNode("Set " + toDisplayString(isRTL.value ? "LTR" : "RTL"), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NAlert), {
              title: "BETA Feature",
              type: "warning",
              class: "mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<p class="mb-4"${_scopeId}> The RTL mode is a feature designed to enhance the user experience for languages read from right to left, such as Arabic, Hebrew, Sindhi, Aramaic and Persian. </p><p class="mb-4"${_scopeId}> Enabling RTL mode automatically adapts the user interface of our application to align correctly with the reading conventions of these languages. This includes reversing the entire layout, ensuring that text, images, buttons, and other visual elements are arranged in a coherent and natural manner for RTL users. </p><p class="mb-4"${_scopeId}> To activate RTL mode, simply use the <code${_scopeId}>themeStore.setRTL(true)</code> function. This function will instantly adjust the layout orientation to support right-to-left reading. </p><p${_scopeId}> With this new feature, our template becomes even more versatile and inclusive, allowing a wider range of users to enjoy an optimized user experience. </p>`);
          } else {
            return [
              createVNode(unref(NAlert), {
                title: "BETA Feature",
                type: "warning",
                class: "mb-4"
              }),
              createVNode("p", { class: "mb-4" }, " The RTL mode is a feature designed to enhance the user experience for languages read from right to left, such as Arabic, Hebrew, Sindhi, Aramaic and Persian. "),
              createVNode("p", { class: "mb-4" }, " Enabling RTL mode automatically adapts the user interface of our application to align correctly with the reading conventions of these languages. This includes reversing the entire layout, ensuring that text, images, buttons, and other visual elements are arranged in a coherent and natural manner for RTL users. "),
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" To activate RTL mode, simply use the "),
                createVNode("code", null, "themeStore.setRTL(true)"),
                createTextVNode(" function. This function will instantly adjust the layout orientation to support right-to-left reading. ")
              ]),
              createVNode("p", null, " With this new feature, our template becomes even more versatile and inclusive, allowing a wider range of users to enjoy an optimized user experience. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/MultiLanguage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MultiLanguage-Co6rka5J.mjs.map
