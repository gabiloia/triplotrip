import { defineComponent, ref, useSlots, computed, watch, unref, mergeProps, withCtx, createVNode, renderSlot, createBlock, createCommentVNode, openBlock, h, toRef, watchEffect, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { a as _export_sfc, B as Button, _ as _sfc_main$o, ae as Scrollbar, K as resolveSlot, v as useConfig, x as useTheme, ad as themeLight, k as cB, z as useThemeClass, l as cM, n as cE, m as c$1, C as call } from './server.mjs';
import { useWindowSize, onClickOutside } from '@vueuse/core';
import { on, off } from 'evtd';
import { depx } from 'seemly';
import { useMergedState } from 'vooks';

const style = cB("split", `
 display: flex;
 width: 100%;
 height: 100%;
`, [cM("horizontal", `
 flex-direction: row;
 `), cM("vertical", `
 flex-direction: column;
 `), cB("split-pane-1", `
 overflow: hidden;
 `), cB("split-pane-2", `
 overflow: hidden;
 flex: 1;
 `), cE("resize-trigger", `
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `, [cM("hover", `
 background-color: var(--n-resize-trigger-color-hover);
 `), c$1("&:hover", `
 background-color: var(--n-resize-trigger-color-hover);
 `)])]);
const splitProps = Object.assign(Object.assign({}, useTheme.props), {
  direction: {
    type: String,
    default: "horizontal"
  },
  resizeTriggerSize: {
    type: Number,
    default: 3
  },
  disabled: Boolean,
  defaultSize: {
    type: [String, Number],
    default: 0.5
  },
  "onUpdate:size": [Function, Array],
  onUpdateSize: [Function, Array],
  size: [String, Number],
  min: {
    type: [String, Number],
    default: 0
  },
  max: {
    type: [String, Number],
    default: 1
  },
  pane1Class: String,
  pane1Style: [Object, String],
  pane2Class: String,
  pane2Style: [Object, String],
  onDragStart: Function,
  onDragMove: Function,
  onDragEnd: Function,
  watchProps: Array
});
const NSplit = defineComponent({
  name: "Split",
  props: splitProps,
  slots: Object,
  setup(props) {
    var _a;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Split", "-split", style, themeLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          resizableTriggerColor,
          resizableTriggerColorHover
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-resize-trigger-color": resizableTriggerColor,
        "--n-resize-trigger-color-hover": resizableTriggerColorHover
      };
    });
    const resizeTriggerElRef = ref(null);
    const isDraggingRef = ref(false);
    const controlledSizeRef = toRef(props, "size");
    const uncontrolledSizeRef = ref(props.defaultSize);
    if ((_a = props.watchProps) === null || _a === void 0 ? void 0 : _a.includes("defaultSize")) {
      watchEffect(() => uncontrolledSizeRef.value = props.defaultSize);
    }
    const doUpdateSize = (size) => {
      const _onUpdateSize = props["onUpdate:size"];
      if (props.onUpdateSize) call(props.onUpdateSize, size);
      if (_onUpdateSize) call(_onUpdateSize, size);
      uncontrolledSizeRef.value = size;
    };
    const mergedSizeRef = useMergedState(controlledSizeRef, uncontrolledSizeRef);
    const firstPaneStyle = computed(() => {
      const sizeValue = mergedSizeRef.value;
      if (typeof sizeValue === "string") {
        return {
          flex: `0 0 ${sizeValue}`
        };
      } else if (typeof sizeValue === "number") {
        const size = sizeValue * 100;
        return {
          flex: `0 0 calc(${size}% - ${props.resizeTriggerSize * size / 100}px)`
        };
      }
    });
    const resizeTriggerStyle = computed(() => {
      return props.direction === "horizontal" ? {
        width: `${props.resizeTriggerSize}px`,
        height: "100%"
      } : {
        width: "100%",
        height: `${props.resizeTriggerSize}px`
      };
    });
    const resizeTriggerWrapperStyle = computed(() => {
      const horizontal = props.direction === "horizontal";
      return {
        width: horizontal ? `${props.resizeTriggerSize}px` : "",
        height: horizontal ? "" : `${props.resizeTriggerSize}px`,
        cursor: props.direction === "horizontal" ? "col-resize" : "row-resize"
      };
    });
    let offset = 0;
    const handleMouseDown = (e) => {
      e.preventDefault();
      isDraggingRef.value = true;
      if (props.onDragStart) props.onDragStart(e);
      const mouseMoveEvent = "mousemove";
      const mouseUpEvent = "mouseup";
      const onMouseMove = (e2) => {
        updateSize(e2);
        if (props.onDragMove) props.onDragMove(e2);
      };
      const onMouseUp = () => {
        off(mouseMoveEvent, void 0, onMouseMove);
        off(mouseUpEvent, void 0, onMouseUp);
        isDraggingRef.value = false;
        if (props.onDragEnd) props.onDragEnd(e);
        (void 0).body.style.cursor = "";
      };
      (void 0).body.style.cursor = resizeTriggerWrapperStyle.value.cursor;
      on(mouseMoveEvent, void 0, onMouseMove);
      on(mouseUpEvent, void 0, onMouseUp);
      const resizeTriggerEl = resizeTriggerElRef.value;
      if (resizeTriggerEl) {
        const elRect = resizeTriggerEl.getBoundingClientRect();
        if (props.direction === "horizontal") {
          offset = e.clientX - elRect.left;
        } else {
          offset = elRect.top - e.clientY;
        }
      }
      updateSize(e);
    };
    function updateSize(event) {
      var _a2, _b;
      const containerRect = (_b = (_a2 = resizeTriggerElRef.value) === null || _a2 === void 0 ? void 0 : _a2.parentElement) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
      if (!containerRect) return;
      const {
        direction
      } = props;
      const containerUsableWidth = containerRect.width - props.resizeTriggerSize;
      const containerUsableHeight = containerRect.height - props.resizeTriggerSize;
      const containerUsableSize = direction === "horizontal" ? containerUsableWidth : containerUsableHeight;
      const newPxSize = direction === "horizontal" ? event.clientX - containerRect.left - offset : event.clientY - containerRect.top + offset;
      const {
        min,
        max
      } = props;
      const pxMin = typeof min === "string" ? depx(min) : min * containerUsableSize;
      const pxMax = typeof max === "string" ? depx(max) : max * containerUsableSize;
      let nextPxSize = newPxSize;
      nextPxSize = Math.max(nextPxSize, pxMin);
      nextPxSize = Math.min(nextPxSize, pxMax, containerUsableSize);
      if (typeof mergedSizeRef.value === "string") {
        doUpdateSize(`${nextPxSize}px`);
      } else {
        doUpdateSize(nextPxSize / containerUsableSize);
      }
    }
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("split", void 0, cssVarsRef, props) : void 0;
    return {
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      resizeTriggerElRef,
      isDragging: isDraggingRef,
      mergedClsPrefix: mergedClsPrefixRef,
      resizeTriggerWrapperStyle,
      resizeTriggerStyle,
      handleMouseDown,
      firstPaneStyle
    };
  },
  render() {
    var _a, _b, _c, _d, _e;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${this.mergedClsPrefix}-split`, `${this.mergedClsPrefix}-split--${this.direction}`, this.themeClass],
      style: this.cssVars
    }, h("div", {
      class: [`${this.mergedClsPrefix}-split-pane-1`, this.pane1Class],
      style: [this.firstPaneStyle, this.pane1Style]
    }, (_c = (_b = this.$slots)[1]) === null || _c === void 0 ? void 0 : _c.call(_b)), !this.disabled && h("div", {
      ref: "resizeTriggerElRef",
      class: `${this.mergedClsPrefix}-split__resize-trigger-wrapper`,
      style: this.resizeTriggerWrapperStyle,
      onMousedown: this.handleMouseDown
    }, resolveSlot(this.$slots["resize-trigger"], () => [h("div", {
      style: this.resizeTriggerStyle,
      class: [`${this.mergedClsPrefix}-split__resize-trigger`, this.isDragging && `${this.mergedClsPrefix}-split__resize-trigger--hover`]
    })])), h("div", {
      class: [`${this.mergedClsPrefix}-split-pane-2`, this.pane2Class],
      style: this.pane2Style
    }, (_e = (_d = this.$slots)[2]) === null || _e === void 0 ? void 0 : _e.call(_d)));
  }
});
const MenuIcon = "ph:list-light";
const CloseIcon = "carbon:close";
const SplitIcon = "carbon:draggable";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SegmentedPage",
  __ssrInlineRender: true,
  props: {
    sidebarPosition: { default: "left" },
    hideMenuBtn: { type: Boolean },
    useMainScroll: { type: Boolean, default: true },
    mainContentStyle: {},
    mainContentClass: {},
    sidebarContentStyle: {},
    sidebarContentClass: {},
    enableResize: { type: Boolean },
    disableContainerQuery: { type: Boolean },
    defaultSplit: { default: 0.3 },
    maxSidebarWidth: { default: 450 },
    minSidebarWidth: { default: 250 },
    padding: { default: "30px" },
    paddingMobile: { default: "20px" },
    toolbarHeight: { default: "70px" },
    toolbarHeightMobile: { default: "62px" }
  },
  emits: ["mounted", "sidebar"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const splitPane = ref();
    const sanitizedDefaultSplit = ref(__props.defaultSplit);
    const splitDisabled = ref(false);
    const slots = useSlots();
    const sidebarOpen = ref(false);
    const sidebar = ref(null);
    const mainScrollbar = ref(null);
    const { width } = useWindowSize();
    const sidebarAvailable = computed(
      () => !!slots["sidebar-header"] || !!slots["sidebar-content"] || !!slots["sidebar-footer"]
    );
    const isSidebarLeft = computed(() => __props.sidebarPosition === "left");
    const tplNameMain = computed(() => isSidebarLeft.value ? 2 : 1);
    const tplNameSide = computed(() => isSidebarLeft.value ? 1 : 2);
    const pane1Style = computed(() => ({
      maxWidth: isSidebarLeft.value ? `${__props.maxSidebarWidth}px` : `calc(100% - ${__props.minSidebarWidth}px)`,
      minWidth: isSidebarLeft.value ? `${__props.minSidebarWidth}px` : `calc(100% - ${__props.maxSidebarWidth}px)`
    }));
    function closeSidebar() {
      sidebarOpen.value = false;
    }
    onClickOutside(sidebar, () => closeSidebar());
    watch(
      sidebarOpen,
      (val) => {
        emit("sidebar", val);
      },
      { immediate: true }
    );
    watch(
      width,
      (val) => {
        sanitizedDefaultSplit.value = val <= 700 ? 0 : isSidebarLeft.value ? __props.defaultSplit : 1 - __props.defaultSplit;
        splitDisabled.value = val <= 700;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--1c59c2f2": _ctx.toolbarHeight,
        "--fd877c54": _ctx.padding,
        "--719d5a09": _ctx.toolbarHeightMobile,
        "--4926f3d0": _ctx.paddingMobile
      } };
      _push(ssrRenderComponent(unref(NSplit), mergeProps({
        ref_key: "splitPane",
        ref: splitPane,
        direction: "horizontal",
        "default-size": sanitizedDefaultSplit.value,
        min: 0,
        max: 1,
        "resize-trigger-size": 0,
        disabled: !_ctx.enableResize || splitDisabled.value,
        class: ["wrapper flex grow", [{ "sidebar-open": sidebarOpen.value }, `sidebar-position-${_ctx.sidebarPosition}`]],
        "pane1-style": pane1Style.value
      }, _attrs, _cssVars), {
        [tplNameSide.value]: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (sidebarAvailable.value) {
              _push2(`<div class="sidebar flex flex-col" data-v-a157b104${_scopeId}>`);
              if (_ctx.$slots["sidebar-header"]) {
                _push2(`<div class="sidebar-header flex items-center justify-between" data-v-a157b104${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "sidebar-header", {}, null, _push2, _parent2, _scopeId);
                _push2(ssrRenderComponent(unref(Button), {
                  text: "",
                  class: "close-btn",
                  onClick: ($event) => sidebarOpen.value = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$o, {
                        size: 24,
                        name: CloseIcon
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$o, {
                          size: 24,
                          name: CloseIcon
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$slots["sidebar-content"]) {
                _push2(`<div class="sidebar-main grow" data-v-a157b104${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Scrollbar), { class: "max-h-full" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div style="${ssrRenderStyle(_ctx.sidebarContentStyle)}" class="${ssrRenderClass([_ctx.sidebarContentClass, "sidebar-main-content"])}" data-v-a157b104${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "sidebar-content", {}, null, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ["sidebar-main-content", _ctx.sidebarContentClass],
                          style: _ctx.sidebarContentStyle
                        }, [
                          renderSlot(_ctx.$slots, "sidebar-content", {}, void 0, true)
                        ], 6)
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$slots["sidebar-footer"]) {
                _push2(`<div class="sidebar-footer flex items-center" data-v-a157b104${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "sidebar-footer", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              sidebarAvailable.value ? (openBlock(), createBlock("div", {
                key: 0,
                ref_key: "sidebar",
                ref: sidebar,
                class: "sidebar flex flex-col"
              }, [
                _ctx.$slots["sidebar-header"] ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "sidebar-header flex items-center justify-between"
                }, [
                  renderSlot(_ctx.$slots, "sidebar-header", {}, void 0, true),
                  createVNode(unref(Button), {
                    text: "",
                    class: "close-btn",
                    onClick: ($event) => sidebarOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$o, {
                        size: 24,
                        name: CloseIcon
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                _ctx.$slots["sidebar-content"] ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "sidebar-main grow"
                }, [
                  createVNode(unref(Scrollbar), { class: "max-h-full" }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: ["sidebar-main-content", _ctx.sidebarContentClass],
                        style: _ctx.sidebarContentStyle
                      }, [
                        renderSlot(_ctx.$slots, "sidebar-content", {}, void 0, true)
                      ], 6)
                    ]),
                    _: 3
                  })
                ])) : createCommentVNode("", true),
                _ctx.$slots["sidebar-footer"] ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "sidebar-footer flex items-center"
                }, [
                  renderSlot(_ctx.$slots, "sidebar-footer", {}, void 0, true)
                ])) : createCommentVNode("", true)
              ], 512)) : createCommentVNode("", true)
            ];
          }
        }),
        "resize-trigger": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="split-trigger" data-v-a157b104${_scopeId}><div class="split-trigger-icon" data-v-a157b104${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$o, {
              name: SplitIcon,
              size: 12
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "split-trigger" }, [
                createVNode("div", { class: "split-trigger-icon" }, [
                  createVNode(_sfc_main$o, {
                    name: SplitIcon,
                    size: 12
                  })
                ])
              ])
            ];
          }
        }),
        [tplNameMain.value]: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main flex flex-grow flex-col" data-v-a157b104${_scopeId}>`);
            if (_ctx.$slots["main-toolbar"]) {
              _push2(`<div class="main-toolbar flex items-center" data-v-a157b104${_scopeId}>`);
              if (sidebarAvailable.value && !_ctx.hideMenuBtn) {
                _push2(`<div class="menu-btn flex justify-center opacity-50" data-v-a157b104${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Button), {
                  text: "",
                  onClick: ($event) => sidebarOpen.value = true
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$o, {
                        size: 24,
                        name: MenuIcon
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$o, {
                          size: 24,
                          name: MenuIcon
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="grow" data-v-a157b104${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "main-toolbar", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass([{ "no-container-query": _ctx.disableContainerQuery }, "main-view grow"])}" data-v-a157b104${_scopeId}>`);
            if (_ctx.useMainScroll) {
              _push2(ssrRenderComponent(unref(Scrollbar), {
                ref_key: "mainScrollbar",
                ref: mainScrollbar,
                class: "max-h-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div style="${ssrRenderStyle(_ctx.mainContentStyle)}" class="${ssrRenderClass([_ctx.mainContentClass, "main-content"])}" data-v-a157b104${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "main-content", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["main-content", _ctx.mainContentClass],
                        style: _ctx.mainContentStyle
                      }, [
                        renderSlot(_ctx.$slots, "main-content", {}, void 0, true)
                      ], 6)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<div style="${ssrRenderStyle(_ctx.mainContentStyle)}" class="${ssrRenderClass([_ctx.mainContentClass, "main-content"])}" data-v-a157b104${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "main-content", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }
            _push2(`</div>`);
            if (_ctx.$slots["main-footer"]) {
              _push2(`<div class="main-footer flex items-center" data-v-a157b104${_scopeId}><div class="wrap" data-v-a157b104${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "main-footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (sidebarOpen.value) {
              _push2(`<div class="main-overlay" data-v-a157b104${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "main flex flex-grow flex-col" }, [
                _ctx.$slots["main-toolbar"] ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "main-toolbar flex items-center"
                }, [
                  sidebarAvailable.value && !_ctx.hideMenuBtn ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "menu-btn flex justify-center opacity-50"
                  }, [
                    createVNode(unref(Button), {
                      text: "",
                      onClick: ($event) => sidebarOpen.value = true
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$o, {
                          size: 24,
                          name: MenuIcon
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "grow" }, [
                    renderSlot(_ctx.$slots, "main-toolbar", {}, void 0, true)
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", {
                  class: ["main-view grow", { "no-container-query": _ctx.disableContainerQuery }]
                }, [
                  _ctx.useMainScroll ? (openBlock(), createBlock(unref(Scrollbar), {
                    key: 0,
                    ref_key: "mainScrollbar",
                    ref: mainScrollbar,
                    class: "max-h-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: ["main-content", _ctx.mainContentClass],
                        style: _ctx.mainContentStyle
                      }, [
                        renderSlot(_ctx.$slots, "main-content", {}, void 0, true)
                      ], 6)
                    ]),
                    _: 3
                  }, 512)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: ["main-content", _ctx.mainContentClass],
                    style: _ctx.mainContentStyle
                  }, [
                    renderSlot(_ctx.$slots, "main-content", {}, void 0, true)
                  ], 6))
                ], 2),
                _ctx.$slots["main-footer"] ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "main-footer flex items-center"
                }, [
                  createVNode("div", { class: "wrap" }, [
                    renderSlot(_ctx.$slots, "main-footer", {}, void 0, true)
                  ])
                ])) : createCommentVNode("", true),
                sidebarOpen.value ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "main-overlay"
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SegmentedPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SegmentedPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a157b104"]]);

export { SegmentedPage as S };
//# sourceMappingURL=SegmentedPage-CGYmcYi9.mjs.map
