import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { N as NTimeline, a as NTimelineItem } from './TimelineItem-BTXX02CD.mjs';
import './LtrContext-CjyxPKj1.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BZVO93eO.mjs';
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
  __name: "Timeline",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Timeline</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/timeline" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-timeline>
						<n-timeline-item content="Oops" />
						<n-timeline-item
							type="success"
							title="Success"
							content="success content"
							time="2023-04-03 20:46"
						/>
						<n-timeline-item type="error" content="Error content" time="2023-04-03 20:46" />
						<n-timeline-item
							type="warning"
							title="Warning"
							content="warning content"
							time="2023-04-03 20:46"
						/>
						<n-timeline-item
							type="info"
							title="Info"
							content="info content"
							time="2023-04-03 20:46"
							line-type="dashed"
						/>
						<n-timeline-item content="Oops" />
					</n-timeline>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-timeline>
						<n-timeline-item content="Oops" />
						<n-timeline-item
							type="success"
							title="Success"
							content="success content"
							time="2023-04-03 20:46"
						/>
						<n-timeline-item type="error" content="Error content" time="2023-04-03 20:46" />
						<n-timeline-item
							type="warning"
							title="Warning"
							content="warning content"
							time="2023-04-03 20:46"
						/>
						<n-timeline-item
							type="info"
							title="Info"
							content="info content"
							time="2023-04-03 20:46"
							line-type="dashed"
						/>
						<n-timeline-item content="Oops" />
					</n-timeline>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTimeline), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTimelineItem), { content: "Oops" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), {
                    type: "success",
                    title: "Success",
                    content: "success content",
                    time: "2023-04-03 20:46"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), {
                    type: "error",
                    content: "Error content",
                    time: "2023-04-03 20:46"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), {
                    type: "warning",
                    title: "Warning",
                    content: "warning content",
                    time: "2023-04-03 20:46"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), {
                    type: "info",
                    title: "Info",
                    content: "info content",
                    time: "2023-04-03 20:46",
                    "line-type": "dashed"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), { content: "Oops" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTimelineItem), { content: "Oops" }),
                    createVNode(unref(NTimelineItem), {
                      type: "success",
                      title: "Success",
                      content: "success content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "error",
                      content: "Error content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "warning",
                      title: "Warning",
                      content: "warning content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "info",
                      title: "Info",
                      content: "info content",
                      time: "2023-04-03 20:46",
                      "line-type": "dashed"
                    }),
                    createVNode(unref(NTimelineItem), { content: "Oops" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTimeline), null, {
                default: withCtx(() => [
                  createVNode(unref(NTimelineItem), { content: "Oops" }),
                  createVNode(unref(NTimelineItem), {
                    type: "success",
                    title: "Success",
                    content: "success content",
                    time: "2023-04-03 20:46"
                  }),
                  createVNode(unref(NTimelineItem), {
                    type: "error",
                    content: "Error content",
                    time: "2023-04-03 20:46"
                  }),
                  createVNode(unref(NTimelineItem), {
                    type: "warning",
                    title: "Warning",
                    content: "warning content",
                    time: "2023-04-03 20:46"
                  }),
                  createVNode(unref(NTimelineItem), {
                    type: "info",
                    title: "Info",
                    content: "info content",
                    time: "2023-04-03 20:46",
                    "line-type": "dashed"
                  }),
                  createVNode(unref(NTimelineItem), { content: "Oops" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Horizontal" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<div style="overflow: auto">
						<n-timeline horizontal>
							<n-timeline-item content="Oops" />
							<n-timeline-item
								type="success"
								title="Success"
								content="Success content"
								time="2023-04-03 20:46"
							/>
							<n-timeline-item type="error" content="Error content" time="2023-04-03 20:46" />
							<n-timeline-item
								type="warning"
								title="Warning"
								content="Warning content"
								time="2023-04-03 20:46"
							/>
							<n-timeline-item type="info" title="Info" content="Info content" time="2023-04-03 20:46" />
						</n-timeline>
					</div>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<div style="overflow: auto">
						<n-timeline horizontal>
							<n-timeline-item content="Oops" />
							<n-timeline-item
								type="success"
								title="Success"
								content="Success content"
								time="2023-04-03 20:46"
							/>
							<n-timeline-item type="error" content="Error content" time="2023-04-03 20:46" />
							<n-timeline-item
								type="warning"
								title="Warning"
								content="Warning content"
								time="2023-04-03 20:46"
							/>
							<n-timeline-item type="info" title="Info" content="Info content" time="2023-04-03 20:46" />
						</n-timeline>
					</div>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "overflow": "auto" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NTimeline), { horizontal: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTimelineItem), { content: "Oops" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), {
                    type: "success",
                    title: "Success",
                    content: "Success content",
                    time: "2023-04-03 20:46"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), {
                    type: "error",
                    content: "Error content",
                    time: "2023-04-03 20:46"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), {
                    type: "warning",
                    title: "Warning",
                    content: "Warning content",
                    time: "2023-04-03 20:46"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTimelineItem), {
                    type: "info",
                    title: "Info",
                    content: "Info content",
                    time: "2023-04-03 20:46"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTimelineItem), { content: "Oops" }),
                    createVNode(unref(NTimelineItem), {
                      type: "success",
                      title: "Success",
                      content: "Success content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "error",
                      content: "Error content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "warning",
                      title: "Warning",
                      content: "Warning content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "info",
                      title: "Info",
                      content: "Info content",
                      time: "2023-04-03 20:46"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { style: { "overflow": "auto" } }, [
                createVNode(unref(NTimeline), { horizontal: "" }, {
                  default: withCtx(() => [
                    createVNode(unref(NTimelineItem), { content: "Oops" }),
                    createVNode(unref(NTimelineItem), {
                      type: "success",
                      title: "Success",
                      content: "Success content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "error",
                      content: "Error content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "warning",
                      title: "Warning",
                      content: "Warning content",
                      time: "2023-04-03 20:46"
                    }),
                    createVNode(unref(NTimelineItem), {
                      type: "info",
                      title: "Info",
                      content: "Info content",
                      time: "2023-04-03 20:46"
                    })
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Timeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Timeline-COIUD5Nd.mjs.map
