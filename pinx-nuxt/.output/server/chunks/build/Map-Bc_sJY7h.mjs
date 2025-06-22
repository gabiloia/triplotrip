import { defineComponent, ref, unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { bV as logo } from './server.mjs';
import { LMap, LTileLayer, LControlLayers, LMarker, LTooltip, LIcon, LPopup, LPolyline, LPolygon, LRectangle } from '@vue-leaflet/vue-leaflet';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Map",
  __ssrInlineRender: true,
  setup(__props) {
    const zoom = ref(4);
    const iconSize = ref([50, 50]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(LMap), mergeProps({
        zoom: zoom.value,
        "onUpdate:zoom": ($event) => zoom.value = $event,
        center: [47.41322, -1.219482],
        "use-global-leaflet": false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LTileLayer), {
              url: "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg",
              "layer-type": "base",
              name: "Stamen Watercolor",
              attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LTileLayer), {
              url: "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png",
              "layer-type": "base",
              name: "Stamen Toner",
              attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LTileLayer), {
              url: "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png",
              "layer-type": "base",
              name: "Stamen Terrain",
              attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LTileLayer), {
              url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
              "layer-type": "base",
              name: "OpenTopoMap",
              attribution: "Map data: \xA9 <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, <a href='http://viewfinderpanoramas.org'>SRTM</a> | Map style: \xA9 <a href='https://opentopomap.org'>OpenTopoMap</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>)"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LTileLayer), {
              url: "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level{maxZoom}/{z}/{y}/{x}.jpg",
              "layer-type": "base",
              name: "NASA/GSFC/Earth",
              attribution: "Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href='https://earthdata.nasa.gov'>ESDIS</a>) with funding provided by NASA/HQ.",
              bounds: [
                [-85.0511287776, -179.999999975],
                [85.0511287776, 179.999999975]
              ],
              "min-zoom": 1,
              "max-zoom": 8
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LTileLayer), {
              url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
              "layer-type": "base",
              name: "Positron",
              attribution: "\xA9 <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors \xA9 <a href='https://carto.com/attributions'>CARTO</a>"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LTileLayer), {
              url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
              "layer-type": "base",
              name: "Dark Matter",
              attribution: "\xA9 <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors \xA9 <a href='https://carto.com/attributions'>CARTO</a>"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LTileLayer), {
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "layer-type": "base",
              name: "OpenStreetMap",
              attribution: "\xA9 <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LControlLayers), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LMarker), {
              "lat-lng": [47.85549887088562, 10.087190790477521],
              draggable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LTooltip), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`tooltip`);
                      } else {
                        return [
                          createTextVNode("tooltip")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(LTooltip), null, {
                      default: withCtx(() => [
                        createTextVNode("tooltip")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LMarker), { "lat-lng": [45.39799982105989, 9.05183645038641] }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LIcon), {
                    "icon-url": unref(logo),
                    "icon-size": iconSize.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(LIcon), {
                      "icon-url": unref(logo),
                      "icon-size": iconSize.value
                    }, null, 8, ["icon-url", "icon-size"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LMarker), {
              "lat-lng": [46.731739550358135, -1.3987144591730958],
              draggable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LPopup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`popup`);
                      } else {
                        return [
                          createTextVNode("popup")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(LPopup), null, {
                      default: withCtx(() => [
                        createTextVNode("popup")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LPolyline), {
              "lat-lngs": [
                [47.334852, -1.509485],
                [47.342596, -1.328731],
                [47.241487, -1.190568],
                [47.234787, -1.358337]
              ],
              color: "green"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LPolygon), {
              "lat-lngs": [
                [46.334852, -1.509485],
                [46.342596, -1.328731],
                [46.241487, -1.190568],
                [46.234787, -1.358337]
              ],
              color: "#41b782",
              fill: true,
              "fill-opacity": 0.5,
              "fill-color": "#41b782"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LRectangle), {
              "lat-lngs": [
                [46.334852, -1.509485],
                [46.342596, -1.328731],
                [46.241487, -1.190568],
                [46.234787, -1.358337]
              ],
              fill: true,
              color: "#35495d"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LRectangle), { bounds: [
              [46.334852, -1.190568],
              [46.241487, -1.090357]
            ] }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LPopup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`lol`);
                      } else {
                        return [
                          createTextVNode("lol")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(LPopup), null, {
                      default: withCtx(() => [
                        createTextVNode("lol")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LTileLayer), {
                url: "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg",
                "layer-type": "base",
                name: "Stamen Watercolor",
                attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
              }),
              createVNode(unref(LTileLayer), {
                url: "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png",
                "layer-type": "base",
                name: "Stamen Toner",
                attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
              }),
              createVNode(unref(LTileLayer), {
                url: "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png",
                "layer-type": "base",
                name: "Stamen Terrain",
                attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
              }),
              createVNode(unref(LTileLayer), {
                url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
                "layer-type": "base",
                name: "OpenTopoMap",
                attribution: "Map data: \xA9 <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, <a href='http://viewfinderpanoramas.org'>SRTM</a> | Map style: \xA9 <a href='https://opentopomap.org'>OpenTopoMap</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>)"
              }),
              createVNode(unref(LTileLayer), {
                url: "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level{maxZoom}/{z}/{y}/{x}.jpg",
                "layer-type": "base",
                name: "NASA/GSFC/Earth",
                attribution: "Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href='https://earthdata.nasa.gov'>ESDIS</a>) with funding provided by NASA/HQ.",
                bounds: [
                  [-85.0511287776, -179.999999975],
                  [85.0511287776, 179.999999975]
                ],
                "min-zoom": 1,
                "max-zoom": 8
              }),
              createVNode(unref(LTileLayer), {
                url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
                "layer-type": "base",
                name: "Positron",
                attribution: "\xA9 <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors \xA9 <a href='https://carto.com/attributions'>CARTO</a>"
              }),
              createVNode(unref(LTileLayer), {
                url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
                "layer-type": "base",
                name: "Dark Matter",
                attribution: "\xA9 <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors \xA9 <a href='https://carto.com/attributions'>CARTO</a>"
              }),
              createVNode(unref(LTileLayer), {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                "layer-type": "base",
                name: "OpenStreetMap",
                attribution: "\xA9 <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              }),
              createVNode(unref(LControlLayers)),
              createVNode(unref(LMarker), {
                "lat-lng": [47.85549887088562, 10.087190790477521],
                draggable: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(LTooltip), null, {
                    default: withCtx(() => [
                      createTextVNode("tooltip")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(LMarker), { "lat-lng": [45.39799982105989, 9.05183645038641] }, {
                default: withCtx(() => [
                  createVNode(unref(LIcon), {
                    "icon-url": unref(logo),
                    "icon-size": iconSize.value
                  }, null, 8, ["icon-url", "icon-size"])
                ]),
                _: 1
              }),
              createVNode(unref(LMarker), {
                "lat-lng": [46.731739550358135, -1.3987144591730958],
                draggable: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(LPopup), null, {
                    default: withCtx(() => [
                      createTextVNode("popup")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(LPolyline), {
                "lat-lngs": [
                  [47.334852, -1.509485],
                  [47.342596, -1.328731],
                  [47.241487, -1.190568],
                  [47.234787, -1.358337]
                ],
                color: "green"
              }),
              createVNode(unref(LPolygon), {
                "lat-lngs": [
                  [46.334852, -1.509485],
                  [46.342596, -1.328731],
                  [46.241487, -1.190568],
                  [46.234787, -1.358337]
                ],
                color: "#41b782",
                fill: true,
                "fill-opacity": 0.5,
                "fill-color": "#41b782"
              }),
              createVNode(unref(LRectangle), {
                "lat-lngs": [
                  [46.334852, -1.509485],
                  [46.342596, -1.328731],
                  [46.241487, -1.190568],
                  [46.234787, -1.358337]
                ],
                fill: true,
                color: "#35495d"
              }),
              createVNode(unref(LRectangle), { bounds: [
                [46.334852, -1.190568],
                [46.241487, -1.090357]
              ] }, {
                default: withCtx(() => [
                  createVNode(unref(LPopup), null, {
                    default: withCtx(() => [
                      createTextVNode("lol")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/maps/leaflet/Map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Map-Bc_sJY7h.mjs.map
