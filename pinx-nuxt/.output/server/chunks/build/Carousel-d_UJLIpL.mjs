import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _export_sfc, _ as _sfc_main$o, c as NText } from './server.mjs';
import { N as NCarousel } from './Carousel-DjTVWQId.mjs';
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

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-f82e85fc><div class="page-header" data-v-f82e85fc><div class="title" data-v-f82e85fc>Carousel</div><div class="links" data-v-f82e85fc><a href="https://www.naiveui.com/en-US/light/components/carousel" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-f82e85fc>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list" data-v-f82e85fc>`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, css }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-carousel draggable>
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`))} ${ssrInterpolate(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-carousel draggable>
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`)) + " " + toDisplayString(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCarousel), { draggable: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" data-v-f82e85fc${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/VZLH8/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/easJc3/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/mW1uVF/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/IqZMU/640/415"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCarousel), { draggable: "" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/VZLH8/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/easJc3/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/mW1uVF/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/IqZMU/640/415"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Arrow" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Set `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`show-arrow`);
                } else {
                  return [
                    createTextVNode("show-arrow")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` to show the arrow `);
          } else {
            return [
              createTextVNode(" Set "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("show-arrow")
                ]),
                _: 1
              }),
              createTextVNode(" to show the arrow ")
            ];
          }
        }),
        code: withCtx(({ html, css }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-carousel draggable show-arrow>
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`))} ${ssrInterpolate(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-carousel draggable show-arrow>
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`)) + " " + toDisplayString(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCarousel), {
              draggable: "",
              "show-arrow": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" data-v-f82e85fc${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/VZLH8/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/easJc3/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/mW1uVF/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/IqZMU/640/415"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCarousel), {
                draggable: "",
                "show-arrow": ""
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/VZLH8/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/easJc3/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/mW1uVF/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/IqZMU/640/415"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Autoplay" }, {
        code: withCtx(({ html, css }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-carousel draggable autoplay>
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`))} ${ssrInterpolate(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-carousel draggable autoplay>
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`)) + " " + toDisplayString(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCarousel), {
              draggable: "",
              autoplay: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" data-v-f82e85fc${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/VZLH8/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/easJc3/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/mW1uVF/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/IqZMU/640/415"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCarousel), {
                draggable: "",
                autoplay: ""
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/VZLH8/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/easJc3/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/mW1uVF/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/IqZMU/640/415"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Vertical" }, {
        code: withCtx(({ html, css }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-carousel draggable direction="vertical" dot-placement="right" style="width: 100%; height: 240px">
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`))} ${ssrInterpolate(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-carousel draggable direction="vertical" dot-placement="right" style="width: 100%; height: 240px">
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`)) + " " + toDisplayString(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCarousel), {
              draggable: "",
              direction: "vertical",
              "dot-placement": "right",
              style: { "width": "100%", "height": "240px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" data-v-f82e85fc${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/VZLH8/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/easJc3/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/mW1uVF/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/IqZMU/640/415"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCarousel), {
                draggable: "",
                direction: "vertical",
                "dot-placement": "right",
                style: { "width": "100%", "height": "240px" }
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/VZLH8/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/easJc3/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/mW1uVF/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/IqZMU/640/415"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Slides per view" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Please note that this prop will conflict with `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`loop`);
                } else {
                  return [
                    createTextVNode("loop")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` . If you need to customize the number of displays per view, then the `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`loop`);
                } else {
                  return [
                    createTextVNode("loop")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` prop will be disabled. `);
          } else {
            return [
              createTextVNode(" Please note that this prop will conflict with "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("loop")
                ]),
                _: 1
              }),
              createTextVNode(" . If you need to customize the number of displays per view, then the "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("loop")
                ]),
                _: 1
              }),
              createTextVNode(" prop will be disabled. ")
            ];
          }
        }),
        code: withCtx(({ html, css }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-carousel :slides-per-view="3" :space-between="20" :loop="false" draggable>
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`))} ${ssrInterpolate(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-carousel :slides-per-view="3" :space-between="20" :loop="false" draggable>
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" />
						<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" />
					</n-carousel>
					`)) + " " + toDisplayString(css(`
						.carousel-img {
							width: 100%;
							height: 240px;
							object-fit: cover;
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NCarousel), {
              "slides-per-view": 3,
              "space-between": 20,
              loop: false,
              draggable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/VZLH8/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/easJc3/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/mW1uVF/640/415" data-v-f82e85fc${_scopeId2}><img class="carousel-img" alt="carousel-img" src="https://picsum.photos/seed/IqZMU/640/415" data-v-f82e85fc${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/VZLH8/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/easJc3/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/mW1uVF/640/415"
                    }),
                    createVNode("img", {
                      class: "carousel-img",
                      alt: "carousel-img",
                      src: "https://picsum.photos/seed/IqZMU/640/415"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NCarousel), {
                "slides-per-view": 3,
                "space-between": 20,
                loop: false,
                draggable: ""
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/VZLH8/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/easJc3/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/mW1uVF/640/415"
                  }),
                  createVNode("img", {
                    class: "carousel-img",
                    alt: "carousel-img",
                    src: "https://picsum.photos/seed/IqZMU/640/415"
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f82e85fc"]]);

export { Carousel as default };
//# sourceMappingURL=Carousel-d_UJLIpL.mjs.map
