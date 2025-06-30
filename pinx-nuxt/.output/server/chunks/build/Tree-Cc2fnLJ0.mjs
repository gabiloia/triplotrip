import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './server.mjs';
import { N as NTree } from './Tree-aiZOG6Xj.mjs';
import { N as NSpace } from './Space-Cilv8mAw.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { N as NSwitch } from './Switch-B_SrCjtw.mjs';
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
import './Checkbox-DOjB2S1h.mjs';
import './VirtualList-xBpsIw2j.mjs';
import './get-slot-BIpdyb5h.mjs';
import './Suffix-CHHaPGTv.mjs';
import './Eye-DafrR3c8.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tree",
  __ssrInlineRender: true,
  setup(__props) {
    function createData(level = 4, baseKey = "") {
      if (!level) return void 0;
      return [6 - level, void 0].map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
          label: createLabel(level),
          key,
          children: createData(level - 1, key)
        };
      });
    }
    function createLabel(level) {
      if (level === 4) return "Out of Tao, One is born";
      if (level === 3) return "Out of One, Two";
      if (level === 2) return "Out of Two, Three";
      if (level === 1) return "Out of Three, the created universe";
      return "";
    }
    const data = createData();
    const defaultExpandedKeys = ref(["40", "4030", "403020"]);
    const defaultCheckedKeys = ref(["40302010"]);
    function updateCheckedKeys(keys, options, meta) {
      console.log("updateCheckedKeys", keys, options, meta);
    }
    const data1 = [
      {
        label: "0",
        key: "0",
        children: [
          {
            label: "0-0",
            key: "0-0",
            children: [
              { label: "0-0-0", key: "0-0-0" },
              { label: "0-0-1", key: "0-0-1" }
            ]
          },
          {
            label: "0-1",
            key: "0-1",
            children: [
              { label: "0-1-0", key: "0-1-0" },
              { label: "0-1-1", key: "0-1-1" }
            ]
          }
        ]
      },
      {
        label: "1",
        key: "1",
        children: [
          {
            label: "1-0",
            key: "1-0",
            children: [
              { label: "1-0-0", key: "1-0-0" },
              { label: "1-0-1", key: "1-0-1" }
            ]
          },
          {
            label: "1-1",
            key: "1-1",
            children: [
              { label: "1-1-0", key: "1-1-0" },
              { label: "1-1-1", key: "1-1-1" }
            ]
          }
        ]
      }
    ];
    const pattern = ref("");
    const showIrrelevantNodes = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Tree</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/tree" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-tree block-line :data :default-expanded-keys="defaultExpandedKeys" selectable />
					`))} ${ssrInterpolate(js(`
						function createData(level = 4, baseKey = ""): TreeOption[] | undefined {
							if (!level) return undefined
							return new Array(6 - level, undefined).map((_, index) => {
								const key = "" + baseKey + level + index
								return {
									label: createLabel(level),
									key,
									children: createData(level - 1, key)
								}
							})
						}

						function createLabel(level: number): string {
							if (level === 4) return "Out of Tao, One is born"
							if (level === 3) return "Out of One, Two"
							if (level === 2) return "Out of Two, Three"
							if (level === 1) return "Out of Three, the created universe"
							return ""
						}

						const data = createData()
						const defaultExpandedKeys = ref(["40", "41"])
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-tree block-line :data :default-expanded-keys="defaultExpandedKeys" selectable />
					`)) + " " + toDisplayString(js(`
						function createData(level = 4, baseKey = ""): TreeOption[] | undefined {
							if (!level) return undefined
							return new Array(6 - level, undefined).map((_, index) => {
								const key = "" + baseKey + level + index
								return {
									label: createLabel(level),
									key,
									children: createData(level - 1, key)
								}
							})
						}

						function createLabel(level: number): string {
							if (level === 4) return "Out of Tao, One is born"
							if (level === 3) return "Out of One, Two"
							if (level === 2) return "Out of Two, Three"
							if (level === 1) return "Out of Three, the created universe"
							return ""
						}

						const data = createData()
						const defaultExpandedKeys = ref(["40", "41"])
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTree), {
              "block-line": "",
              data: unref(data),
              "default-expanded-keys": defaultExpandedKeys.value,
              selectable: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTree), {
                "block-line": "",
                data: unref(data),
                "default-expanded-keys": defaultExpandedKeys.value,
                selectable: ""
              }, null, 8, ["data", "default-expanded-keys"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Checking" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-tree
						block-line
						cascade
						checkable
						:data
						:default-expanded-keys="defaultExpandedKeys"
						:default-checked-keys="defaultCheckedKeys"
						@update:checked-keys="updateCheckedKeys"
					/>
					`))} ${ssrInterpolate(js(`
						function createData(level = 4, baseKey = ""): TreeOption[] | undefined {
							if (!level) return undefined
							return new Array(6 - level, undefined).map((_, index) => {
								const key = "" + baseKey + level + index
								return {
									label: createLabel(level),
									key,
									children: createData(level - 1, key)
								}
							})
						}

						function createLabel(level: number): string {
							if (level === 4) return "Out of Tao, One is born"
							if (level === 3) return "Out of One, Two"
							if (level === 2) return "Out of Two, Three"
							if (level === 1) return "Out of Three, the created universe"
							return ""
						}

						const data = createData()

						const defaultExpandedKeys = ref(["40", "4030", "403020"])
						const defaultCheckedKeys = ref(["40302010"])
						const updateCheckedKeys = (
							keys: Array<string | number>,
							options: Array<TreeOption | null>,
							meta: {
								node: TreeOption | null
								action: "check" | "uncheck"
							}
						) => {
							console.log("updateCheckedKeys", keys, options, meta)
						}
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-tree
						block-line
						cascade
						checkable
						:data
						:default-expanded-keys="defaultExpandedKeys"
						:default-checked-keys="defaultCheckedKeys"
						@update:checked-keys="updateCheckedKeys"
					/>
					`)) + " " + toDisplayString(js(`
						function createData(level = 4, baseKey = ""): TreeOption[] | undefined {
							if (!level) return undefined
							return new Array(6 - level, undefined).map((_, index) => {
								const key = "" + baseKey + level + index
								return {
									label: createLabel(level),
									key,
									children: createData(level - 1, key)
								}
							})
						}

						function createLabel(level: number): string {
							if (level === 4) return "Out of Tao, One is born"
							if (level === 3) return "Out of One, Two"
							if (level === 2) return "Out of Two, Three"
							if (level === 1) return "Out of Three, the created universe"
							return ""
						}

						const data = createData()

						const defaultExpandedKeys = ref(["40", "4030", "403020"])
						const defaultCheckedKeys = ref(["40302010"])
						const updateCheckedKeys = (
							keys: Array<string | number>,
							options: Array<TreeOption | null>,
							meta: {
								node: TreeOption | null
								action: "check" | "uncheck"
							}
						) => {
							console.log("updateCheckedKeys", keys, options, meta)
						}
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NTree), {
              "block-line": "",
              cascade: "",
              checkable: "",
              data: unref(data),
              "default-expanded-keys": defaultExpandedKeys.value,
              "default-checked-keys": defaultCheckedKeys.value,
              "onUpdate:checkedKeys": updateCheckedKeys
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NTree), {
                "block-line": "",
                cascade: "",
                checkable: "",
                data: unref(data),
                "default-expanded-keys": defaultExpandedKeys.value,
                "default-checked-keys": defaultCheckedKeys.value,
                "onUpdate:checkedKeys": updateCheckedKeys
              }, null, 8, ["data", "default-expanded-keys", "default-checked-keys"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Search" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space vertical :size="12">
						<n-input v-model:value="pattern" placeholder="Search" clearable />
						<n-switch v-model:value="showIrrelevantNodes">
							<template #checked>Show irrelevant nodes</template>
							<template #unchecked>Hide irrelevant nodes</template>
						</n-switch>
						<n-tree
							:show-irrelevant-nodes="showIrrelevantNodes"
							:pattern="pattern"
							:data="data1"
							block-line
						/>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const data1: TreeOption[] = [
							{
								label: "0",
								key: "0",
								children: [
									{
										label: "0-0",
										key: "0-0",
										children: [
											{ label: "0-0-0", key: "0-0-0" },
											{ label: "0-0-1", key: "0-0-1" }
										]
									},
									{
										label: "0-1",
										key: "0-1",
										children: [
											{ label: "0-1-0", key: "0-1-0" },
											{ label: "0-1-1", key: "0-1-1" }
										]
									}
								]
							},
							{
								label: "1",
								key: "1",
								children: [
									{
										label: "1-0",
										key: "1-0",
										children: [
											{ label: "1-0-0", key: "1-0-0" },
											{ label: "1-0-1", key: "1-0-1" }
										]
									},
									{
										label: "1-1",
										key: "1-1",
										children: [
											{ label: "1-1-0", key: "1-1-0" },
											{ label: "1-1-1", key: "1-1-1" }
										]
									}
								]
							}
						]
						const pattern = ref("")
						const showIrrelevantNodes = ref(false)
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space vertical :size="12">
						<n-input v-model:value="pattern" placeholder="Search" clearable />
						<n-switch v-model:value="showIrrelevantNodes">
							<template #checked>Show irrelevant nodes</template>
							<template #unchecked>Hide irrelevant nodes</template>
						</n-switch>
						<n-tree
							:show-irrelevant-nodes="showIrrelevantNodes"
							:pattern="pattern"
							:data="data1"
							block-line
						/>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const data1: TreeOption[] = [
							{
								label: "0",
								key: "0",
								children: [
									{
										label: "0-0",
										key: "0-0",
										children: [
											{ label: "0-0-0", key: "0-0-0" },
											{ label: "0-0-1", key: "0-0-1" }
										]
									},
									{
										label: "0-1",
										key: "0-1",
										children: [
											{ label: "0-1-0", key: "0-1-0" },
											{ label: "0-1-1", key: "0-1-1" }
										]
									}
								]
							},
							{
								label: "1",
								key: "1",
								children: [
									{
										label: "1-0",
										key: "1-0",
										children: [
											{ label: "1-0-0", key: "1-0-0" },
											{ label: "1-0-1", key: "1-0-1" }
										]
									},
									{
										label: "1-1",
										key: "1-1",
										children: [
											{ label: "1-1-0", key: "1-1-0" },
											{ label: "1-1-1", key: "1-1-1" }
										]
									}
								]
							}
						]
						const pattern = ref("")
						const showIrrelevantNodes = ref(false)
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), {
              vertical: "",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: pattern.value,
                    "onUpdate:value": ($event) => pattern.value = $event,
                    placeholder: "Search",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NSwitch), {
                    value: showIrrelevantNodes.value,
                    "onUpdate:value": ($event) => showIrrelevantNodes.value = $event
                  }, {
                    checked: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Show irrelevant nodes`);
                      } else {
                        return [
                          createTextVNode("Show irrelevant nodes")
                        ];
                      }
                    }),
                    unchecked: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Hide irrelevant nodes`);
                      } else {
                        return [
                          createTextVNode("Hide irrelevant nodes")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NTree), {
                    "show-irrelevant-nodes": showIrrelevantNodes.value,
                    pattern: pattern.value,
                    data: data1,
                    "block-line": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      value: pattern.value,
                      "onUpdate:value": ($event) => pattern.value = $event,
                      placeholder: "Search",
                      clearable: ""
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NSwitch), {
                      value: showIrrelevantNodes.value,
                      "onUpdate:value": ($event) => showIrrelevantNodes.value = $event
                    }, {
                      checked: withCtx(() => [
                        createTextVNode("Show irrelevant nodes")
                      ]),
                      unchecked: withCtx(() => [
                        createTextVNode("Hide irrelevant nodes")
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(NTree), {
                      "show-irrelevant-nodes": showIrrelevantNodes.value,
                      pattern: pattern.value,
                      data: data1,
                      "block-line": ""
                    }, null, 8, ["show-irrelevant-nodes", "pattern"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), {
                vertical: "",
                size: 12
              }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), {
                    value: pattern.value,
                    "onUpdate:value": ($event) => pattern.value = $event,
                    placeholder: "Search",
                    clearable: ""
                  }, null, 8, ["value", "onUpdate:value"]),
                  createVNode(unref(NSwitch), {
                    value: showIrrelevantNodes.value,
                    "onUpdate:value": ($event) => showIrrelevantNodes.value = $event
                  }, {
                    checked: withCtx(() => [
                      createTextVNode("Show irrelevant nodes")
                    ]),
                    unchecked: withCtx(() => [
                      createTextVNode("Hide irrelevant nodes")
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"]),
                  createVNode(unref(NTree), {
                    "show-irrelevant-nodes": showIrrelevantNodes.value,
                    pattern: pattern.value,
                    data: data1,
                    "block-line": ""
                  }, null, 8, ["show-irrelevant-nodes", "pattern"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Tree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tree-Cc2fnLJ0.mjs.map
