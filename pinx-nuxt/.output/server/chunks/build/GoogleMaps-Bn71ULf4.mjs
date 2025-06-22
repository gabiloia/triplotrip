import { defineComponent, ref, resolveComponent, mergeProps, unref, withCtx, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$o, N as NCard } from './server.mjs';
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

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GoogleMaps",
  __ssrInlineRender: true,
  setup(__props) {
    const center = ref({ lat: 42.50974755936583, lng: 11.917505449320428 });
    const markers = ref([
      {
        position: {
          lat: 42.50974755936583,
          lng: 11.917505449320428
        }
      },
      {
        position: {
          lat: 54.333850327927905,
          lng: 52.78937854256488
        }
      },
      {
        position: {
          lat: 18.01252674640049,
          lng: 13.608381625739803
        }
      },
      {
        position: {
          lat: 47.72166505031789,
          lng: -97.38239022435489
        }
      },
      {
        position: {
          lat: -5.786721981148869,
          lng: -59.851314166681775
        }
      },
      {
        position: {
          lat: 35.83726851258224,
          lng: 138.4458901659339
        }
      },
      {
        position: {
          lat: -25.442451809683316,
          lng: 132.80387723696182
        }
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GMapMap = resolveComponent("GMapMap");
      const _component_GMapMarker = resolveComponent("GMapMarker");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Google Maps</div><div class="links"><a href="https://vue-map.netlify.app/" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div>`);
      _push(ssrRenderComponent(unref(NCard), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GMapMap, {
              center: center.value,
              zoom: 7,
              "map-type-id": "terrain",
              class: "h-[60vh] w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(markers.value, (m, index) => {
                    _push3(ssrRenderComponent(_component_GMapMarker, {
                      key: index,
                      position: m.position,
                      clickable: true,
                      draggable: true,
                      onClick: ($event) => center.value = m.position
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(markers.value, (m, index) => {
                      return openBlock(), createBlock(_component_GMapMarker, {
                        key: index,
                        position: m.position,
                        clickable: true,
                        draggable: true,
                        onClick: ($event) => center.value = m.position
                      }, null, 8, ["position", "onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_GMapMap, {
                center: center.value,
                zoom: 7,
                "map-type-id": "terrain",
                class: "h-[60vh] w-full"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(markers.value, (m, index) => {
                    return openBlock(), createBlock(_component_GMapMarker, {
                      key: index,
                      position: m.position,
                      clickable: true,
                      draggable: true,
                      onClick: ($event) => center.value = m.position
                    }, null, 8, ["position", "onClick"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["center"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Maps/GoogleMaps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=GoogleMaps-Bn71ULf4.mjs.map
