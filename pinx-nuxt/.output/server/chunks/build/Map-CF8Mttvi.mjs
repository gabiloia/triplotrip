import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { MglDefaults, MglMap, MglFrameRateControl, MglFullscreenControl, MglAttributionControl, MglNavigationControl, MglScaleControl, MglGeolocationControl, MglStyleSwitchControl, MglMarker, MglGeoJsonSource, MglLineLayer, MglVectorSource, MglCircleLayer } from 'vue-maplibre-gl';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Map",
  __ssrInlineRender: true,
  setup(__props) {
    MglDefaults.style = "https://api.maptiler.com/maps/streets/style.json?key=iNb3ueGQ8qzclAON4zsr";
    const mapStyles = [
      {
        name: "Streets",
        label: "Streets",
        style: "https://api.maptiler.com/maps/streets/style.json?key=iNb3ueGQ8qzclAON4zsr"
      },
      { name: "Basic", label: "Basic", style: "https://api.maptiler.com/maps/basic/style.json?key=iNb3ueGQ8qzclAON4zsr" },
      {
        name: "Bright",
        label: "Bright",
        style: "https://api.maptiler.com/maps/bright/style.json?key=iNb3ueGQ8qzclAON4zsr"
      },
      {
        name: "Satellite",
        label: "Satellite",
        style: "https://api.maptiler.com/maps/hybrid/style.json?key=iNb3ueGQ8qzclAON4zsr"
      },
      {
        name: "Voyager",
        label: "Voyager",
        style: "https://api.maptiler.com/maps/voyager/style.json?key=iNb3ueGQ8qzclAON4zsr"
      }
      /*
      {
      	name: "watercolor",
      	label: "Water color",
      	style: {
      		version: 8,
      		sources: {
      			"raster-tiles": {
      				type: "raster",
      				tiles: ["https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"],
      				tileSize: 256,
      				attribution:
      					'Map tiles by <a target="_top" rel="noopener" href="http://stamen.com">Stamen Design</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
      			}
      		},
      		layers: [
      			{
      				id: "simple-tiles",
      				type: "raster",
      				source: "raster-tiles",
      				minzoom: 0,
      				maxzoom: 22
      			}
      		]
      	}
      }
      */
    ];
    const geoJsonSource = ref({
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-67.13734351262877, 45.137451890638886],
            [-66.96466, 44.8097],
            [-68.03252, 44.3252],
            [-69.06, 43.98],
            [-70.11617, 43.68405],
            [-70.64573401557249, 43.090083319667144],
            [-70.75102474636725, 43.08003225358635],
            [-70.79761105007827, 43.21973948828747],
            [-70.98176001655037, 43.36789581966826],
            [-70.94416541205806, 43.46633942318431],
            [-71.08482, 45.3052400000002],
            [-70.6600225491012, 45.46022288673396],
            [-70.30495378282376, 45.914794623389355],
            [-70.00014034695016, 46.69317088478567],
            [-69.23708614772835, 47.44777598732787],
            [-68.90478084987546, 47.184794623394396],
            [-68.23430497910454, 47.35462921812177],
            [-67.79035274928509, 47.066248887716995],
            [-67.79141211614706, 45.702585354182816],
            [-67.13734351262877, 45.137451890638886]
          ]
        ]
      }
    });
    const librariesSourceTiles = ["https://api.librarydata.uk/libraries/{z}/{x}/{y}.mvt"];
    const librariesLayerCirclesPaint = {
      "circle-radius": 5,
      "circle-color": "#1b5e20"
    };
    const controlPosition = ref(
      "top-left"
      /* TOP_LEFT */
    );
    const markerCoordinates = ref([13.377507, 52.516267]);
    const layout = {
      "line-join": "round",
      "line-cap": "round"
    };
    const paint = {
      "line-color": "#FF0000",
      "line-width": 8
    };
    const center = ref([10.288107, 49.405078]);
    const zoom = ref(3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MglMap), mergeProps({
        center: center.value,
        zoom: zoom.value,
        "attribution-control": false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MglFrameRateControl), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglFullscreenControl), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglAttributionControl), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglNavigationControl), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglScaleControl), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglGeolocationControl), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglStyleSwitchControl), {
              "map-styles": mapStyles,
              position: controlPosition.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglMarker), {
              coordinates: markerCoordinates.value,
              color: "#cc0000",
              scale: 0.5
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglGeoJsonSource), {
              "source-id": "geojson",
              data: geoJsonSource.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(MglLineLayer), {
                    "layer-id": "geojson",
                    layout,
                    paint
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(MglLineLayer), {
                      "layer-id": "geojson",
                      layout,
                      paint
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MglVectorSource), {
              "source-id": "libraries",
              tiles: librariesSourceTiles
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(MglCircleLayer), {
                    "layer-id": "libraries",
                    "source-layer": "libraries",
                    paint: librariesLayerCirclesPaint
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(MglCircleLayer), {
                      "layer-id": "libraries",
                      "source-layer": "libraries",
                      paint: librariesLayerCirclesPaint
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MglFrameRateControl)),
              createVNode(unref(MglFullscreenControl)),
              createVNode(unref(MglAttributionControl)),
              createVNode(unref(MglNavigationControl)),
              createVNode(unref(MglScaleControl)),
              createVNode(unref(MglGeolocationControl)),
              createVNode(unref(MglStyleSwitchControl), {
                "map-styles": mapStyles,
                position: controlPosition.value
              }, null, 8, ["position"]),
              createVNode(unref(MglMarker), {
                coordinates: markerCoordinates.value,
                color: "#cc0000",
                scale: 0.5
              }, null, 8, ["coordinates"]),
              createVNode(unref(MglGeoJsonSource), {
                "source-id": "geojson",
                data: geoJsonSource.value
              }, {
                default: withCtx(() => [
                  createVNode(unref(MglLineLayer), {
                    "layer-id": "geojson",
                    layout,
                    paint
                  })
                ]),
                _: 1
              }, 8, ["data"]),
              createVNode(unref(MglVectorSource), {
                "source-id": "libraries",
                tiles: librariesSourceTiles
              }, {
                default: withCtx(() => [
                  createVNode(unref(MglCircleLayer), {
                    "layer-id": "libraries",
                    "source-layer": "libraries",
                    paint: librariesLayerCirclesPaint
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/maps/maplibre/Map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Map-CF8Mttvi.mjs.map
