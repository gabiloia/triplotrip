import { _ as __nuxt_component_0 } from './CardCodeExample-p8OrIVo5.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$o, c as NText } from './server.mjs';
import { N as NRadio } from './Radio-D9VsZIQK.mjs';
import { N as NSpace } from './Space-BkDN_nha.mjs';
import { N as NRadioGroup } from './RadioGroup-CF89wNuC.mjs';
import { N as NTabs, b as NTabPane } from './Tabs-utWLgCyk.mjs';
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
import './get-slot-BIpdyb5h.mjs';
import './Add-niv5NbQA.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    const placement = ref("top");
    const type = ref("line");
    const valueRef = ref(1);
    const panelsRef = ref([1, 2, 3, 4, 5]);
    const addableRef = computed(() => {
      return {
        disabled: panelsRef.value.length >= 10
      };
    });
    const closableRef = computed(() => {
      return panelsRef.value.length > 1;
    });
    function handleAdd() {
      const newValue = Math.max(...panelsRef.value) + 1;
      panelsRef.value.push(newValue);
      valueRef.value = newValue;
    }
    function handleClose(name) {
      const { value: panels } = panelsRef;
      const nameIndex = panels.findIndex((panelName) => panelName === name);
      if (!~nameIndex) return;
      panels.splice(nameIndex, 1);
      if (name === valueRef.value) {
        valueRef.value = panels[Math.min(nameIndex, panels.length - 1)];
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Tabs</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/tabs" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical>
						<n-radio-group v-model:value="placement">
							<n-radio label="top" value="top" />
							<n-radio label="bottom" value="bottom" />
							<n-radio label="left" value="left" />
							<n-radio label="right" value="right" />
						</n-radio-group>
						<n-radio-group v-model:value="type">
							<n-radio label="card" value="card" />
							<n-radio label="bar" value="bar" />
							<n-radio label="line" value="line" />
						</n-radio-group>
						<n-tabs
							:key="type + placement"
							:type="type"
							animated
							:placement="placement"
							:style="placement === 'left' || placement === 'right' ? { height: '240px' } : undefined"
						>
							<n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou" tab="Jay Chou"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis1" tab="Oasis1"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles1" tab="the Beatles1"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou1" tab="Jay Chou1"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis2" tab="Oasis2"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles2" tab="the Beatles2"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou2" tab="Jay Chou2"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis3" tab="Oasis3"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles3" tab="the Beatles3"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou3" tab="Jay Chou3"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis4" tab="Oasis4"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles4" tab="the Beatles4"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou4" tab="Jay Chou4"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis5" tab="Oasis5"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles5" tab="the Beatles5"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou5" tab="Jay Chou5"> Qilixiang </n-tab-pane>
						</n-tabs>
					</n-space>
					`))} ${ssrInterpolate(js(`
						import { ref } from "vue"
						import type { TabsProps } from "naive-ui"

						const placement = ref<NonNullable<TabsProps["placement"]>>("top")
						const type = ref<TabsProps["type"]>("line")
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical>
						<n-radio-group v-model:value="placement">
							<n-radio label="top" value="top" />
							<n-radio label="bottom" value="bottom" />
							<n-radio label="left" value="left" />
							<n-radio label="right" value="right" />
						</n-radio-group>
						<n-radio-group v-model:value="type">
							<n-radio label="card" value="card" />
							<n-radio label="bar" value="bar" />
							<n-radio label="line" value="line" />
						</n-radio-group>
						<n-tabs
							:key="type + placement"
							:type="type"
							animated
							:placement="placement"
							:style="placement === 'left' || placement === 'right' ? { height: '240px' } : undefined"
						>
							<n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou" tab="Jay Chou"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis1" tab="Oasis1"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles1" tab="the Beatles1"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou1" tab="Jay Chou1"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis2" tab="Oasis2"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles2" tab="the Beatles2"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou2" tab="Jay Chou2"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis3" tab="Oasis3"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles3" tab="the Beatles3"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou3" tab="Jay Chou3"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis4" tab="Oasis4"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles4" tab="the Beatles4"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou4" tab="Jay Chou4"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis5" tab="Oasis5"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles5" tab="the Beatles5"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou5" tab="Jay Chou5"> Qilixiang </n-tab-pane>
						</n-tabs>
					</n-space>
					`)) + " " + toDisplayString(js(`
						import { ref } from "vue"
						import type { TabsProps } from "naive-ui"

						const placement = ref<NonNullable<TabsProps["placement"]>>("top")
						const type = ref<TabsProps["type"]>("line")
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NRadioGroup), {
                    value: placement.value,
                    "onUpdate:value": ($event) => placement.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NRadio), {
                          label: "top",
                          value: "top"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadio), {
                          label: "bottom",
                          value: "bottom"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadio), {
                          label: "left",
                          value: "left"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadio), {
                          label: "right",
                          value: "right"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NRadio), {
                            label: "top",
                            value: "top"
                          }),
                          createVNode(unref(NRadio), {
                            label: "bottom",
                            value: "bottom"
                          }),
                          createVNode(unref(NRadio), {
                            label: "left",
                            value: "left"
                          }),
                          createVNode(unref(NRadio), {
                            label: "right",
                            value: "right"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NRadioGroup), {
                    value: type.value,
                    "onUpdate:value": ($event) => type.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NRadio), {
                          label: "card",
                          value: "card"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadio), {
                          label: "bar",
                          value: "bar"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NRadio), {
                          label: "line",
                          value: "line"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NRadio), {
                            label: "card",
                            value: "card"
                          }),
                          createVNode(unref(NRadio), {
                            label: "bar",
                            value: "bar"
                          }),
                          createVNode(unref(NRadio), {
                            label: "line",
                            value: "line"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTabs), {
                    key: type.value + placement.value,
                    type: type.value,
                    animated: "",
                    placement: placement.value,
                    style: placement.value === "left" || placement.value === "right" ? { height: "240px" } : void 0
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "oasis",
                          tab: "Oasis"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Wonderwall `);
                            } else {
                              return [
                                createTextVNode(" Wonderwall ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "the beatles",
                          tab: "the Beatles"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hey Jude `);
                            } else {
                              return [
                                createTextVNode(" Hey Jude ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "jay chou",
                          tab: "Jay Chou"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Qilixiang `);
                            } else {
                              return [
                                createTextVNode(" Qilixiang ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "oasis1",
                          tab: "Oasis1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Wonderwall `);
                            } else {
                              return [
                                createTextVNode(" Wonderwall ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "the beatles1",
                          tab: "the Beatles1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hey Jude `);
                            } else {
                              return [
                                createTextVNode(" Hey Jude ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "jay chou1",
                          tab: "Jay Chou1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Qilixiang `);
                            } else {
                              return [
                                createTextVNode(" Qilixiang ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "oasis2",
                          tab: "Oasis2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Wonderwall `);
                            } else {
                              return [
                                createTextVNode(" Wonderwall ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "the beatles2",
                          tab: "the Beatles2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hey Jude `);
                            } else {
                              return [
                                createTextVNode(" Hey Jude ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "jay chou2",
                          tab: "Jay Chou2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Qilixiang `);
                            } else {
                              return [
                                createTextVNode(" Qilixiang ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "oasis3",
                          tab: "Oasis3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Wonderwall `);
                            } else {
                              return [
                                createTextVNode(" Wonderwall ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "the beatles3",
                          tab: "the Beatles3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hey Jude `);
                            } else {
                              return [
                                createTextVNode(" Hey Jude ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "jay chou3",
                          tab: "Jay Chou3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Qilixiang `);
                            } else {
                              return [
                                createTextVNode(" Qilixiang ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "oasis4",
                          tab: "Oasis4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Wonderwall `);
                            } else {
                              return [
                                createTextVNode(" Wonderwall ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "the beatles4",
                          tab: "the Beatles4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hey Jude `);
                            } else {
                              return [
                                createTextVNode(" Hey Jude ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "jay chou4",
                          tab: "Jay Chou4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Qilixiang `);
                            } else {
                              return [
                                createTextVNode(" Qilixiang ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "oasis5",
                          tab: "Oasis5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Wonderwall `);
                            } else {
                              return [
                                createTextVNode(" Wonderwall ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "the beatles5",
                          tab: "the Beatles5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hey Jude `);
                            } else {
                              return [
                                createTextVNode(" Hey Jude ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NTabPane), {
                          name: "jay chou5",
                          tab: "Jay Chou5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Qilixiang `);
                            } else {
                              return [
                                createTextVNode(" Qilixiang ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NTabPane), {
                            name: "oasis",
                            tab: "Oasis"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Wonderwall ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "the beatles",
                            tab: "the Beatles"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Hey Jude ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "jay chou",
                            tab: "Jay Chou"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Qilixiang ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "oasis1",
                            tab: "Oasis1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Wonderwall ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "the beatles1",
                            tab: "the Beatles1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Hey Jude ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "jay chou1",
                            tab: "Jay Chou1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Qilixiang ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "oasis2",
                            tab: "Oasis2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Wonderwall ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "the beatles2",
                            tab: "the Beatles2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Hey Jude ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "jay chou2",
                            tab: "Jay Chou2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Qilixiang ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "oasis3",
                            tab: "Oasis3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Wonderwall ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "the beatles3",
                            tab: "the Beatles3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Hey Jude ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "jay chou3",
                            tab: "Jay Chou3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Qilixiang ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "oasis4",
                            tab: "Oasis4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Wonderwall ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "the beatles4",
                            tab: "the Beatles4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Hey Jude ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "jay chou4",
                            tab: "Jay Chou4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Qilixiang ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "oasis5",
                            tab: "Oasis5"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Wonderwall ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "the beatles5",
                            tab: "the Beatles5"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Hey Jude ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NTabPane), {
                            name: "jay chou5",
                            tab: "Jay Chou5"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Qilixiang ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NRadioGroup), {
                      value: placement.value,
                      "onUpdate:value": ($event) => placement.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NRadio), {
                          label: "top",
                          value: "top"
                        }),
                        createVNode(unref(NRadio), {
                          label: "bottom",
                          value: "bottom"
                        }),
                        createVNode(unref(NRadio), {
                          label: "left",
                          value: "left"
                        }),
                        createVNode(unref(NRadio), {
                          label: "right",
                          value: "right"
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NRadioGroup), {
                      value: type.value,
                      "onUpdate:value": ($event) => type.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NRadio), {
                          label: "card",
                          value: "card"
                        }),
                        createVNode(unref(NRadio), {
                          label: "bar",
                          value: "bar"
                        }),
                        createVNode(unref(NRadio), {
                          label: "line",
                          value: "line"
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"]),
                    (openBlock(), createBlock(unref(NTabs), {
                      key: type.value + placement.value,
                      type: type.value,
                      animated: "",
                      placement: placement.value,
                      style: placement.value === "left" || placement.value === "right" ? { height: "240px" } : void 0
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NTabPane), {
                          name: "oasis",
                          tab: "Oasis"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Wonderwall ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "the beatles",
                          tab: "the Beatles"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hey Jude ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "jay chou",
                          tab: "Jay Chou"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Qilixiang ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "oasis1",
                          tab: "Oasis1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Wonderwall ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "the beatles1",
                          tab: "the Beatles1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hey Jude ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "jay chou1",
                          tab: "Jay Chou1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Qilixiang ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "oasis2",
                          tab: "Oasis2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Wonderwall ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "the beatles2",
                          tab: "the Beatles2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hey Jude ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "jay chou2",
                          tab: "Jay Chou2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Qilixiang ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "oasis3",
                          tab: "Oasis3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Wonderwall ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "the beatles3",
                          tab: "the Beatles3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hey Jude ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "jay chou3",
                          tab: "Jay Chou3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Qilixiang ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "oasis4",
                          tab: "Oasis4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Wonderwall ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "the beatles4",
                          tab: "the Beatles4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hey Jude ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "jay chou4",
                          tab: "Jay Chou4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Qilixiang ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "oasis5",
                          tab: "Oasis5"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Wonderwall ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "the beatles5",
                          tab: "the Beatles5"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hey Jude ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NTabPane), {
                          name: "jay chou5",
                          tab: "Jay Chou5"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Qilixiang ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["type", "placement", "style"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(unref(NRadioGroup), {
                    value: placement.value,
                    "onUpdate:value": ($event) => placement.value = $event
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NRadio), {
                        label: "top",
                        value: "top"
                      }),
                      createVNode(unref(NRadio), {
                        label: "bottom",
                        value: "bottom"
                      }),
                      createVNode(unref(NRadio), {
                        label: "left",
                        value: "left"
                      }),
                      createVNode(unref(NRadio), {
                        label: "right",
                        value: "right"
                      })
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"]),
                  createVNode(unref(NRadioGroup), {
                    value: type.value,
                    "onUpdate:value": ($event) => type.value = $event
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NRadio), {
                        label: "card",
                        value: "card"
                      }),
                      createVNode(unref(NRadio), {
                        label: "bar",
                        value: "bar"
                      }),
                      createVNode(unref(NRadio), {
                        label: "line",
                        value: "line"
                      })
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"]),
                  (openBlock(), createBlock(unref(NTabs), {
                    key: type.value + placement.value,
                    type: type.value,
                    animated: "",
                    placement: placement.value,
                    style: placement.value === "left" || placement.value === "right" ? { height: "240px" } : void 0
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NTabPane), {
                        name: "oasis",
                        tab: "Oasis"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Wonderwall ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "the beatles",
                        tab: "the Beatles"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hey Jude ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "jay chou",
                        tab: "Jay Chou"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Qilixiang ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "oasis1",
                        tab: "Oasis1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Wonderwall ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "the beatles1",
                        tab: "the Beatles1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hey Jude ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "jay chou1",
                        tab: "Jay Chou1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Qilixiang ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "oasis2",
                        tab: "Oasis2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Wonderwall ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "the beatles2",
                        tab: "the Beatles2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hey Jude ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "jay chou2",
                        tab: "Jay Chou2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Qilixiang ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "oasis3",
                        tab: "Oasis3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Wonderwall ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "the beatles3",
                        tab: "the Beatles3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hey Jude ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "jay chou3",
                        tab: "Jay Chou3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Qilixiang ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "oasis4",
                        tab: "Oasis4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Wonderwall ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "the beatles4",
                        tab: "the Beatles4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hey Jude ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "jay chou4",
                        tab: "Jay Chou4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Qilixiang ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "oasis5",
                        tab: "Oasis5"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Wonderwall ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "the beatles5",
                        tab: "the Beatles5"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hey Jude ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NTabPane), {
                        name: "jay chou5",
                        tab: "Jay Chou5"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Qilixiang ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["type", "placement", "style"]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Segment" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-tabs type="segment" animated>
						<n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
						<n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
						<n-tab-pane name="jay chou" tab="Jay Chou"> Qilixiang </n-tab-pane>
					</n-tabs>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-tabs type="segment" animated>
						<n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
						<n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
						<n-tab-pane name="jay chou" tab="Jay Chou"> Qilixiang </n-tab-pane>
					</n-tabs>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTabs), {
              type: "segment",
              animated: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NTabPane), {
                    name: "oasis",
                    tab: "Oasis"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Wonderwall `);
                      } else {
                        return [
                          createTextVNode(" Wonderwall ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTabPane), {
                    name: "the beatles",
                    tab: "the Beatles"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Hey Jude `);
                      } else {
                        return [
                          createTextVNode(" Hey Jude ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTabPane), {
                    name: "jay chou",
                    tab: "Jay Chou"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Qilixiang `);
                      } else {
                        return [
                          createTextVNode(" Qilixiang ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NTabPane), {
                      name: "oasis",
                      tab: "Oasis"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Wonderwall ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTabPane), {
                      name: "the beatles",
                      tab: "the Beatles"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Hey Jude ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NTabPane), {
                      name: "jay chou",
                      tab: "Jay Chou"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Qilixiang ")
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
              createVNode(unref(NTabs), {
                type: "segment",
                animated: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(NTabPane), {
                    name: "oasis",
                    tab: "Oasis"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Wonderwall ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTabPane), {
                    name: "the beatles",
                    tab: "the Beatles"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Hey Jude ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTabPane), {
                    name: "jay chou",
                    tab: "Jay Chou"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Qilixiang ")
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
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Addable" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add some tabs. Only work with `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`&#39;card&#39;`);
                } else {
                  return [
                    createTextVNode("'card'")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` type. `);
          } else {
            return [
              createTextVNode(" Add some tabs. Only work with "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("'card'")
                ]),
                _: 1
              }),
              createTextVNode(" type. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-tabs
						v-model:value="value"
						type="card"
						:addable="addable"
						:closable="closable"
						tab-style="min-width: 80px;"
						@close="handleClose"
						@add="handleAdd"
					>
						<n-tab-pane v-for="panel in panels" :key="panel" :name="panel"> {{ panel }} </n-tab-pane>
						<template #prefix> Prefix </template>
						<template #suffix> Suffix </template>
					</n-tabs>
					`))} ${ssrInterpolate(js(`
						const valueRef = ref(1)
						const panelsRef = ref([1, 2, 3, 4, 5])
						const addableRef = computed(() => {
							return {
								disabled: panelsRef.value.length >= 10
							}
						})
						const closableRef = computed(() => {
							return panelsRef.value.length > 1
						})

						function handleAdd() {
							const newValue = Math.max(...panelsRef.value) + 1
							panelsRef.value.push(newValue)
							valueRef.value = newValue
						}
						function handleClose(name: number) {
							const { value: panels } = panelsRef
							const nameIndex = panels.findIndex(panelName => panelName === name)
							if (!~nameIndex) return
							panels.splice(nameIndex, 1)
							if (name === valueRef.value) {
								valueRef.value = panels[Math.min(nameIndex, panels.length - 1)]
							}
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-tabs
						v-model:value="value"
						type="card"
						:addable="addable"
						:closable="closable"
						tab-style="min-width: 80px;"
						@close="handleClose"
						@add="handleAdd"
					>
						<n-tab-pane v-for="panel in panels" :key="panel" :name="panel"> {{ panel }} </n-tab-pane>
						<template #prefix> Prefix </template>
						<template #suffix> Suffix </template>
					</n-tabs>
					`)) + " " + toDisplayString(js(`
						const valueRef = ref(1)
						const panelsRef = ref([1, 2, 3, 4, 5])
						const addableRef = computed(() => {
							return {
								disabled: panelsRef.value.length >= 10
							}
						})
						const closableRef = computed(() => {
							return panelsRef.value.length > 1
						})

						function handleAdd() {
							const newValue = Math.max(...panelsRef.value) + 1
							panelsRef.value.push(newValue)
							valueRef.value = newValue
						}
						function handleClose(name: number) {
							const { value: panels } = panelsRef
							const nameIndex = panels.findIndex(panelName => panelName === name)
							if (!~nameIndex) return
							panels.splice(nameIndex, 1)
							if (name === valueRef.value) {
								valueRef.value = panels[Math.min(nameIndex, panels.length - 1)]
							}
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTabs), {
              value: valueRef.value,
              "onUpdate:value": ($event) => valueRef.value = $event,
              type: "card",
              addable: addableRef.value,
              closable: closableRef.value,
              "tab-style": "min-width: 80px;",
              onClose: handleClose,
              onAdd: handleAdd
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Prefix `);
                } else {
                  return [
                    createTextVNode(" Prefix ")
                  ];
                }
              }),
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Suffix `);
                } else {
                  return [
                    createTextVNode(" Suffix ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(panelsRef.value, (panel) => {
                    _push3(ssrRenderComponent(unref(NTabPane), {
                      key: panel,
                      name: panel
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(panel)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(panel), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(panelsRef.value, (panel) => {
                      return openBlock(), createBlock(unref(NTabPane), {
                        key: panel,
                        name: panel
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(panel), 1)
                        ]),
                        _: 2
                      }, 1032, ["name"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTabs), {
                value: valueRef.value,
                "onUpdate:value": ($event) => valueRef.value = $event,
                type: "card",
                addable: addableRef.value,
                closable: closableRef.value,
                "tab-style": "min-width: 80px;",
                onClose: handleClose,
                onAdd: handleAdd
              }, {
                prefix: withCtx(() => [
                  createTextVNode(" Prefix ")
                ]),
                suffix: withCtx(() => [
                  createTextVNode(" Suffix ")
                ]),
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(panelsRef.value, (panel) => {
                    return openBlock(), createBlock(unref(NTabPane), {
                      key: panel,
                      name: panel
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(panel), 1)
                      ]),
                      _: 2
                    }, 1032, ["name"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["value", "onUpdate:value", "addable", "closable"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tabs-4PHxZKJT.mjs.map
