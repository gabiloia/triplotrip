import { _ as __nuxt_component_0 } from './CardCodeExample-CdN9gDr0.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, h, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$o, q as flatten, v as useConfig, x as useTheme, bS as descriptionsLight, m as c$1, y as createKey, z as useThemeClass, k as cB, ak as insideModal, al as insidePopover, p as cNotM, l as cM, n as cE } from './server.mjs';
import { repeat } from 'seemly';
import { useCompitable } from 'vooks';
import { g as getSlot } from './get-slot-BIpdyb5h.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-S6SsK5xW.mjs';
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

function getVNodeChildren(vNode, slotName = "default", fallback = []) {
  const {
    children
  } = vNode;
  if (children !== null && typeof children === "object" && !Array.isArray(children)) {
    const slot = children[slotName];
    if (typeof slot === "function") {
      return slot();
    }
  }
  return fallback;
}
const style = c$1([cB("descriptions", {
  fontSize: "var(--n-font-size)"
}, [cB("descriptions-separator", `
 display: inline-block;
 margin: 0 8px 0 2px;
 `), cB("descriptions-table-wrapper", [cB("descriptions-table", [cB("descriptions-table-row", [cB("descriptions-table-header", {
  padding: "var(--n-th-padding)"
}), cB("descriptions-table-content", {
  padding: "var(--n-td-padding)"
})])])]), cNotM("bordered", [cB("descriptions-table-wrapper", [cB("descriptions-table", [cB("descriptions-table-row", [c$1("&:last-child", [cB("descriptions-table-content", {
  paddingBottom: 0
})])])])])]), cM("left-label-placement", [cB("descriptions-table-content", [c$1("> *", {
  verticalAlign: "top"
})])]), cM("left-label-align", [c$1("th", {
  textAlign: "left"
})]), cM("center-label-align", [c$1("th", {
  textAlign: "center"
})]), cM("right-label-align", [c$1("th", {
  textAlign: "right"
})]), cM("bordered", [cB("descriptions-table-wrapper", `
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `, [cB("descriptions-table", [cB("descriptions-table-row", [c$1("&:not(:last-child)", [cB("descriptions-table-content", {
  borderBottom: "1px solid var(--n-merged-border-color)"
}), cB("descriptions-table-header", {
  borderBottom: "1px solid var(--n-merged-border-color)"
})]), cB("descriptions-table-header", `
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `, [c$1("&:not(:last-child)", {
  borderRight: "1px solid var(--n-merged-border-color)"
})]), cB("descriptions-table-content", [c$1("&:not(:last-child)", {
  borderRight: "1px solid var(--n-merged-border-color)"
})])])])])]), cB("descriptions-header", `
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `), cB("descriptions-table-wrapper", `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cB("descriptions-table", `
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `, [cB("descriptions-table-row", `
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [cB("descriptions-table-header", `
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cB("descriptions-table-content", `
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cE("content", `
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]), cE("label", `
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]), cB("descriptions-table-wrapper", `
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `), insideModal(cB("descriptions-table-wrapper", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), insidePopover(cB("descriptions-table-wrapper", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);
const DESCRIPTION_ITEM_FLAG = "DESCRIPTION_ITEM_FLAG";
function isDescriptionsItem(vNode) {
  if (typeof vNode === "object" && vNode && !Array.isArray(vNode)) {
    return vNode.type && vNode.type[DESCRIPTION_ITEM_FLAG];
  }
  return false;
}
const descriptionsProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  column: {
    type: Number,
    default: 3
  },
  columns: Number,
  labelPlacement: {
    type: String,
    default: "top"
  },
  labelAlign: {
    type: String,
    default: "left"
  },
  separator: {
    type: String,
    default: ":"
  },
  size: {
    type: String,
    default: "medium"
  },
  bordered: Boolean,
  labelClass: String,
  labelStyle: [Object, String],
  contentClass: String,
  contentStyle: [Object, String]
});
const NDescriptions = defineComponent({
  name: "Descriptions",
  props: descriptionsProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Descriptions", "-descriptions", style, descriptionsLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size,
        bordered
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          titleTextColor,
          thColor,
          thColorModal,
          thColorPopover,
          thTextColor,
          thFontWeight,
          tdTextColor,
          tdColor,
          tdColorModal,
          tdColorPopover,
          borderColor,
          borderColorModal,
          borderColorPopover,
          borderRadius,
          lineHeight,
          [createKey("fontSize", size)]: fontSize,
          [createKey(bordered ? "thPaddingBordered" : "thPadding", size)]: thPadding,
          [createKey(bordered ? "tdPaddingBordered" : "tdPadding", size)]: tdPadding
        }
      } = themeRef.value;
      return {
        "--n-title-text-color": titleTextColor,
        "--n-th-padding": thPadding,
        "--n-td-padding": tdPadding,
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-th-font-weight": thFontWeight,
        "--n-line-height": lineHeight,
        "--n-th-text-color": thTextColor,
        "--n-td-text-color": tdTextColor,
        "--n-th-color": thColor,
        "--n-th-color-modal": thColorModal,
        "--n-th-color-popover": thColorPopover,
        "--n-td-color": tdColor,
        "--n-td-color-modal": tdColorModal,
        "--n-td-color-popover": tdColorPopover,
        "--n-border-radius": borderRadius,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("descriptions", computed(() => {
      let hash = "";
      const {
        size,
        bordered
      } = props;
      if (bordered) hash += "a";
      hash += size[0];
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      compitableColumn: useCompitable(props, ["columns", "column"]),
      inlineThemeDisabled
    };
  },
  render() {
    const defaultSlots = this.$slots.default;
    const children = defaultSlots ? flatten(defaultSlots()) : [];
    children.length;
    const {
      contentClass,
      labelClass,
      compitableColumn,
      labelPlacement,
      labelAlign,
      size,
      bordered,
      title,
      cssVars,
      mergedClsPrefix,
      separator,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const filteredChildren = children.filter((child) => isDescriptionsItem(child));
    const defaultState = {
      span: 0,
      row: [],
      secondRow: [],
      rows: []
    };
    const itemState = filteredChildren.reduce((state, vNode, index) => {
      const props = vNode.props || {};
      const isLastIteration = filteredChildren.length - 1 === index;
      const itemLabel = ["label" in props ? props.label : getVNodeChildren(vNode, "label")];
      const itemChildren = [getVNodeChildren(vNode)];
      const itemSpan = props.span || 1;
      const memorizedSpan = state.span;
      state.span += itemSpan;
      const labelStyle = props.labelStyle || props["label-style"] || this.labelStyle;
      const contentStyle = props.contentStyle || props["content-style"] || this.contentStyle;
      if (labelPlacement === "left") {
        if (bordered) {
          state.row.push(h("th", {
            class: [`${mergedClsPrefix}-descriptions-table-header`, labelClass],
            colspan: 1,
            style: labelStyle
          }, itemLabel), h("td", {
            class: [`${mergedClsPrefix}-descriptions-table-content`, contentClass],
            colspan: isLastIteration ? (compitableColumn - memorizedSpan) * 2 + 1 : itemSpan * 2 - 1,
            style: contentStyle
          }, itemChildren));
        } else {
          state.row.push(h("td", {
            class: `${mergedClsPrefix}-descriptions-table-content`,
            colspan: isLastIteration ? (compitableColumn - memorizedSpan) * 2 : itemSpan * 2
          }, h("span", {
            class: [`${mergedClsPrefix}-descriptions-table-content__label`, labelClass],
            style: labelStyle
          }, [...itemLabel, separator && h("span", {
            class: `${mergedClsPrefix}-descriptions-separator`
          }, separator)]), h("span", {
            class: [`${mergedClsPrefix}-descriptions-table-content__content`, contentClass],
            style: contentStyle
          }, itemChildren)));
        }
      } else {
        const colspan = isLastIteration ? (compitableColumn - memorizedSpan) * 2 : itemSpan * 2;
        state.row.push(h("th", {
          class: [`${mergedClsPrefix}-descriptions-table-header`, labelClass],
          colspan,
          style: labelStyle
        }, itemLabel));
        state.secondRow.push(h("td", {
          class: [`${mergedClsPrefix}-descriptions-table-content`, contentClass],
          colspan,
          style: contentStyle
        }, itemChildren));
      }
      if (state.span >= compitableColumn || isLastIteration) {
        state.span = 0;
        if (state.row.length) {
          state.rows.push(state.row);
          state.row = [];
        }
        if (labelPlacement !== "left") {
          if (state.secondRow.length) {
            state.rows.push(state.secondRow);
            state.secondRow = [];
          }
        }
      }
      return state;
    }, defaultState);
    const rows = itemState.rows.map((row) => h("tr", {
      class: `${mergedClsPrefix}-descriptions-table-row`
    }, row));
    return h("div", {
      style: cssVars,
      class: [`${mergedClsPrefix}-descriptions`, this.themeClass, `${mergedClsPrefix}-descriptions--${labelPlacement}-label-placement`, `${mergedClsPrefix}-descriptions--${labelAlign}-label-align`, `${mergedClsPrefix}-descriptions--${size}-size`, bordered && `${mergedClsPrefix}-descriptions--bordered`]
    }, title || this.$slots.header ? h("div", {
      class: `${mergedClsPrefix}-descriptions-header`
    }, title || getSlot(this, "header")) : null, h("div", {
      class: `${mergedClsPrefix}-descriptions-table-wrapper`
    }, h("table", {
      class: `${mergedClsPrefix}-descriptions-table`
    }, h("tbody", null, labelPlacement === "top" && h("tr", {
      class: `${mergedClsPrefix}-descriptions-table-row`,
      style: {
        visibility: "collapse"
      }
    }, repeat(compitableColumn * 2, h("td", null))), rows))));
  }
});
const descriptionsItemProps = {
  label: String,
  span: {
    type: Number,
    default: 1
  },
  labelClass: String,
  labelStyle: [Object, String],
  contentClass: String,
  contentStyle: [Object, String]
};
const NDescriptionsItem = defineComponent({
  name: "DescriptionsItem",
  [DESCRIPTION_ITEM_FLAG]: true,
  props: descriptionsItemProps,
  slots: Object,
  render() {
    return null;
  }
});
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Descriptions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Descriptions</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/descriptions" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-descriptions label-placement="top" title="Description">
						<n-descriptions-item>
							<template #label>Breakfast</template>
							Apple
						</n-descriptions-item>
						<n-descriptions-item label="Brunch">Apple</n-descriptions-item>
						<n-descriptions-item label="Lunch">Apple</n-descriptions-item>
						<n-descriptions-item label="Supper" :span="2">
							Two
							<br />
							Apples
						</n-descriptions-item>
						<n-descriptions-item label="Midnight Snack">Apple</n-descriptions-item>
					</n-descriptions>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-descriptions label-placement="top" title="Description">
						<n-descriptions-item>
							<template #label>Breakfast</template>
							Apple
						</n-descriptions-item>
						<n-descriptions-item label="Brunch">Apple</n-descriptions-item>
						<n-descriptions-item label="Lunch">Apple</n-descriptions-item>
						<n-descriptions-item label="Supper" :span="2">
							Two
							<br />
							Apples
						</n-descriptions-item>
						<n-descriptions-item label="Midnight Snack">Apple</n-descriptions-item>
					</n-descriptions>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDescriptions), {
              "label-placement": "top",
              title: "Description"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NDescriptionsItem), null, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Breakfast`);
                      } else {
                        return [
                          createTextVNode("Breakfast")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Apple `);
                      } else {
                        return [
                          createTextVNode(" Apple ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NDescriptionsItem), { label: "Brunch" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Apple`);
                      } else {
                        return [
                          createTextVNode("Apple")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NDescriptionsItem), { label: "Lunch" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Apple`);
                      } else {
                        return [
                          createTextVNode("Apple")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NDescriptionsItem), {
                    label: "Supper",
                    span: 2
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Two <br${_scopeId3}> Apples `);
                      } else {
                        return [
                          createTextVNode(" Two "),
                          createVNode("br"),
                          createTextVNode(" Apples ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NDescriptionsItem), { label: "Midnight Snack" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Apple`);
                      } else {
                        return [
                          createTextVNode("Apple")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NDescriptionsItem), null, {
                      label: withCtx(() => [
                        createTextVNode("Breakfast")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Apple ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NDescriptionsItem), { label: "Brunch" }, {
                      default: withCtx(() => [
                        createTextVNode("Apple")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NDescriptionsItem), { label: "Lunch" }, {
                      default: withCtx(() => [
                        createTextVNode("Apple")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NDescriptionsItem), {
                      label: "Supper",
                      span: 2
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Two "),
                        createVNode("br"),
                        createTextVNode(" Apples ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NDescriptionsItem), { label: "Midnight Snack" }, {
                      default: withCtx(() => [
                        createTextVNode("Apple")
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
              createVNode(unref(NDescriptions), {
                "label-placement": "top",
                title: "Description"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NDescriptionsItem), null, {
                    label: withCtx(() => [
                      createTextVNode("Breakfast")
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Apple ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NDescriptionsItem), { label: "Brunch" }, {
                    default: withCtx(() => [
                      createTextVNode("Apple")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NDescriptionsItem), { label: "Lunch" }, {
                    default: withCtx(() => [
                      createTextVNode("Apple")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NDescriptionsItem), {
                    label: "Supper",
                    span: 2
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Two "),
                      createVNode("br"),
                      createTextVNode(" Apples ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NDescriptionsItem), { label: "Midnight Snack" }, {
                    default: withCtx(() => [
                      createTextVNode("Apple")
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Descriptions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Descriptions-D9sf9ZES.mjs.map
