import { getPadding, depx, pxfy, repeat, happensIn } from 'seemly';
import { createTreeMate, flatten, createIndexGetter } from 'treemate';
import { useMergedState, useMemo } from 'vooks';
import { defineComponent, h, ref, computed, inject, watchEffect, toRef, watch, nextTick, provide } from 'vue';
import { bf as XScrollbar, K as resolveSlot, ay as NEmpty, v as useConfig, X as useRtl, x as useTheme, bg as treeLight, k as cB, h as createInjectionKey, C as call, z as useThemeClass, m as c$1, l as cM, p as cNotM, n as cE, E as fadeInHeightExpandTransition, F as iconSwitchTransition, G as NFadeInExpandTransition, I as NIconSwitchTransition, a0 as NBaseLoading, i as NBaseIcon, r as render } from './server.mjs';
import { N as NCheckbox } from './Checkbox-PH_UPMG8.mjs';
import { V as VVirtualList } from './VirtualList-xBpsIw2j.mjs';

function createDataKey(key) {
  return typeof key === "string" ? `s-${key}` : `n-${key}`;
}
const SwitcherIcon = defineComponent({
  name: "Switcher",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, h("path", {
      d: "M12 8l10 8l-10 8z"
    }));
  }
});
const treeSelectInjectionKey = createInjectionKey("n-tree-select");
function renderDropMark({
  position,
  offsetLevel,
  indent,
  el
}) {
  const style2 = {
    position: "absolute",
    boxSizing: "border-box",
    right: 0
  };
  if (position === "inside") {
    style2.left = 0;
    style2.top = 0;
    style2.bottom = 0;
    style2.borderRadius = "inherit";
    style2.boxShadow = "inset 0 0 0 2px var(--n-drop-mark-color)";
  } else {
    const cssPosition = position === "before" ? "top" : "bottom";
    style2[cssPosition] = 0;
    style2.left = `${el.offsetLeft + 6 - offsetLevel * indent}px`;
    style2.height = "2px";
    style2.backgroundColor = "var(--n-drop-mark-color)";
    style2.transformOrigin = cssPosition;
    style2.borderRadius = "1px";
    style2.transform = position === "before" ? "translateY(-4px)" : "translateY(4px)";
  }
  return h("div", {
    style: style2
  });
}
function defaultAllowDrop({
  dropPosition,
  node
}) {
  if (node.isLeaf === false) return true;
  if (node.children) {
    return true;
  }
  return dropPosition !== "inside";
}
const treeInjectionKey = createInjectionKey("n-tree");
function useKeyboard({
  props,
  fNodesRef,
  mergedExpandedKeysRef,
  mergedSelectedKeysRef,
  mergedCheckedKeysRef,
  handleCheck,
  handleSelect,
  handleSwitcherClick
}) {
  const {
    value: mergedSelectedKeys
  } = mergedSelectedKeysRef;
  const treeSelectInjection = inject(treeSelectInjectionKey, null);
  const pendingNodeKeyRef = treeSelectInjection ? treeSelectInjection.pendingNodeKeyRef : ref(mergedSelectedKeys.length ? mergedSelectedKeys[mergedSelectedKeys.length - 1] : null);
  function handleKeydown(e) {
    var _a;
    if (!props.keyboard) return {
      enterBehavior: null
    };
    const {
      value: pendingNodeKey
    } = pendingNodeKeyRef;
    let enterBehavior = null;
    if (pendingNodeKey === null) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
      }
      if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        if (pendingNodeKey === null) {
          const {
            value: fNodes
          } = fNodesRef;
          let fIndex = 0;
          while (fIndex < fNodes.length) {
            if (!fNodes[fIndex].disabled) {
              pendingNodeKeyRef.value = fNodes[fIndex].key;
              break;
            }
            fIndex += 1;
          }
        }
      }
    } else {
      const {
        value: fNodes
      } = fNodesRef;
      let fIndex = fNodes.findIndex((tmNode) => tmNode.key === pendingNodeKey);
      if (!~fIndex) return {
        enterBehavior: null
      };
      if (e.key === "Enter") {
        const tmNode = fNodes[fIndex];
        enterBehavior = ((_a = props.overrideDefaultNodeClickBehavior) === null || _a === void 0 ? void 0 : _a.call(props, {
          option: tmNode.rawNode
        })) || null;
        switch (enterBehavior) {
          case "toggleCheck":
            handleCheck(tmNode, !mergedCheckedKeysRef.value.includes(tmNode.key));
            break;
          case "toggleSelect":
            handleSelect(tmNode);
            break;
          case "toggleExpand":
            handleSwitcherClick(tmNode);
            break;
          case "none":
            break;
          case "default":
          default:
            enterBehavior = "default";
            handleSelect(tmNode);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        fIndex += 1;
        while (fIndex < fNodes.length) {
          if (!fNodes[fIndex].disabled) {
            pendingNodeKeyRef.value = fNodes[fIndex].key;
            break;
          }
          fIndex += 1;
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        fIndex -= 1;
        while (fIndex >= 0) {
          if (!fNodes[fIndex].disabled) {
            pendingNodeKeyRef.value = fNodes[fIndex].key;
            break;
          }
          fIndex -= 1;
        }
      } else if (e.key === "ArrowLeft") {
        const pendingNode = fNodes[fIndex];
        if (pendingNode.isLeaf || !mergedExpandedKeysRef.value.includes(pendingNodeKey)) {
          const parentTmNode = pendingNode.getParent();
          if (parentTmNode) {
            pendingNodeKeyRef.value = parentTmNode.key;
          }
        } else {
          handleSwitcherClick(pendingNode);
        }
      } else if (e.key === "ArrowRight") {
        const pendingNode = fNodes[fIndex];
        if (pendingNode.isLeaf) return {
          enterBehavior: null
        };
        if (!mergedExpandedKeysRef.value.includes(pendingNodeKey)) {
          handleSwitcherClick(pendingNode);
        } else {
          fIndex += 1;
          while (fIndex < fNodes.length) {
            if (!fNodes[fIndex].disabled) {
              pendingNodeKeyRef.value = fNodes[fIndex].key;
              break;
            }
            fIndex += 1;
          }
        }
      }
    }
    return {
      enterBehavior
    };
  }
  return {
    pendingNodeKeyRef,
    handleKeydown
  };
}
const NTreeNodeCheckbox = defineComponent({
  name: "NTreeNodeCheckbox",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    indent: {
      type: Number,
      required: true
    },
    right: Boolean,
    focusable: Boolean,
    disabled: Boolean,
    checked: Boolean,
    indeterminate: Boolean,
    onCheck: Function
  },
  setup(props) {
    const NTree2 = inject(treeInjectionKey);
    function doCheck(value) {
      const {
        onCheck
      } = props;
      if (onCheck) {
        onCheck(value);
      }
    }
    function handleUpdateValue(value) {
      doCheck(value);
    }
    return {
      handleUpdateValue,
      mergedTheme: NTree2.mergedThemeRef
    };
  },
  render() {
    const {
      clsPrefix,
      mergedTheme,
      checked,
      indeterminate,
      disabled,
      focusable,
      indent,
      handleUpdateValue
    } = this;
    return h("span", {
      class: [`${clsPrefix}-tree-node-checkbox`, this.right && `${clsPrefix}-tree-node-checkbox--right`],
      style: {
        width: `${indent}px`
      },
      "data-checkbox": true
    }, h(NCheckbox, {
      focusable,
      disabled,
      theme: mergedTheme.peers.Checkbox,
      themeOverrides: mergedTheme.peerOverrides.Checkbox,
      checked,
      indeterminate,
      onUpdateChecked: handleUpdateValue
    }));
  }
});
const NTreeNodeContent = defineComponent({
  name: "TreeNodeContent",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    disabled: Boolean,
    checked: Boolean,
    selected: Boolean,
    onClick: Function,
    onDragstart: Function,
    tmNode: {
      type: Object,
      required: true
    },
    nodeProps: Object
  },
  setup(props) {
    const {
      renderLabelRef,
      renderPrefixRef,
      renderSuffixRef,
      labelFieldRef
    } = inject(treeInjectionKey);
    const selfRef = ref(null);
    function doClick(e) {
      const {
        onClick
      } = props;
      if (onClick) onClick(e);
    }
    function handleClick(e) {
      doClick(e);
    }
    return {
      selfRef,
      renderLabel: renderLabelRef,
      renderPrefix: renderPrefixRef,
      renderSuffix: renderSuffixRef,
      labelField: labelFieldRef,
      handleClick
    };
  },
  render() {
    const {
      clsPrefix,
      labelField,
      nodeProps,
      checked = false,
      selected = false,
      renderLabel,
      renderPrefix,
      renderSuffix,
      handleClick,
      onDragstart,
      tmNode: {
        rawNode,
        rawNode: {
          prefix,
          suffix,
          [labelField]: label
        }
      }
    } = this;
    return h("span", Object.assign({}, nodeProps, {
      ref: "selfRef",
      class: [`${clsPrefix}-tree-node-content`, nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps.class],
      onClick: handleClick,
      draggable: onDragstart === void 0 ? void 0 : true,
      onDragstart
    }), renderPrefix || prefix ? h("div", {
      class: `${clsPrefix}-tree-node-content__prefix`
    }, renderPrefix ? renderPrefix({
      option: rawNode,
      selected,
      checked
    }) : render(prefix)) : null, h("div", {
      class: `${clsPrefix}-tree-node-content__text`
    }, renderLabel ? renderLabel({
      option: rawNode,
      selected,
      checked
    }) : render(label)), renderSuffix || suffix ? h("div", {
      class: `${clsPrefix}-tree-node-content__suffix`
    }, renderSuffix ? renderSuffix({
      option: rawNode,
      selected,
      checked
    }) : render(suffix)) : null);
  }
});
const NTreeNodeSwitcher = defineComponent({
  name: "NTreeSwitcher",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    indent: {
      type: Number,
      required: true
    },
    expanded: Boolean,
    selected: Boolean,
    hide: Boolean,
    loading: Boolean,
    onClick: Function,
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      renderSwitcherIconRef
    } = inject(treeInjectionKey, null);
    return () => {
      const {
        clsPrefix,
        expanded,
        hide,
        indent,
        onClick
      } = props;
      return h("span", {
        "data-switcher": true,
        class: [`${clsPrefix}-tree-node-switcher`, expanded && `${clsPrefix}-tree-node-switcher--expanded`, hide && `${clsPrefix}-tree-node-switcher--hide`],
        style: {
          width: `${indent}px`
        },
        onClick
      }, h("div", {
        class: `${clsPrefix}-tree-node-switcher__icon`
      }, h(NIconSwitchTransition, null, {
        default: () => {
          if (props.loading) {
            return h(NBaseLoading, {
              clsPrefix,
              key: "loading",
              radius: 85,
              strokeWidth: 20
            });
          }
          const {
            value: renderSwitcherIcon
          } = renderSwitcherIconRef;
          return renderSwitcherIcon ? renderSwitcherIcon({
            expanded: props.expanded,
            selected: props.selected,
            option: props.tmNode.rawNode
          }) : h(NBaseIcon, {
            clsPrefix,
            key: "switcher"
          }, {
            default: () => h(SwitcherIcon, null)
          });
        }
      })));
    };
  }
});
function useMergedCheckStrategy(props) {
  return computed(() => props.leafOnly ? "child" : props.checkStrategy);
}
function isNodeDisabled(node, disabledField) {
  return !!node.rawNode[disabledField];
}
function traverse(nodes, childrenField, callback, callbackAfter) {
  nodes === null || nodes === void 0 ? void 0 : nodes.forEach((node) => {
    callback(node);
    traverse(node[childrenField], childrenField, callback, callbackAfter);
    callbackAfter(node);
  });
}
function keysWithFilter(nodes, pattern, keyField, childrenField, filter) {
  const keys = /* @__PURE__ */ new Set();
  const highlightKeySet = /* @__PURE__ */ new Set();
  const path = [];
  traverse(nodes, childrenField, (node) => {
    path.push(node);
    if (filter(pattern, node)) {
      highlightKeySet.add(node[keyField]);
      for (let i = path.length - 2; i >= 0; --i) {
        if (!keys.has(path[i][keyField])) {
          keys.add(path[i][keyField]);
        } else {
          return;
        }
      }
    }
  }, () => {
    path.pop();
  });
  return {
    expandedKeys: Array.from(keys),
    highlightKeySet
  };
}
function filterTree(tree, filter, pattern, keyField, childrenField) {
  const visitedTailKeys = /* @__PURE__ */ new Set();
  const visitedNonTailKeys = /* @__PURE__ */ new Set();
  const highlightKeySet = /* @__PURE__ */ new Set();
  const expandedKeys = [];
  const filteredTree = [];
  const path = [];
  function visit(t) {
    t.forEach((n) => {
      path.push(n);
      if (filter(pattern, n)) {
        visitedTailKeys.add(n[keyField]);
        highlightKeySet.add(n[keyField]);
        for (let i = path.length - 2; i >= 0; --i) {
          const key = path[i][keyField];
          if (!visitedNonTailKeys.has(key)) {
            visitedNonTailKeys.add(key);
            if (visitedTailKeys.has(key)) {
              visitedTailKeys.delete(key);
            }
          } else {
            break;
          }
        }
      }
      const children = n[childrenField];
      if (children) {
        visit(children);
      }
      path.pop();
    });
  }
  visit(tree);
  function build(t, sibs) {
    t.forEach((n) => {
      const key = n[keyField];
      const isVisitedTail = visitedTailKeys.has(key);
      const isVisitedNonTail = visitedNonTailKeys.has(key);
      if (!isVisitedTail && !isVisitedNonTail) return;
      const children = n[childrenField];
      if (children) {
        if (isVisitedTail) {
          sibs.push(n);
        } else {
          expandedKeys.push(key);
          const clonedNode = Object.assign(Object.assign({}, n), {
            [childrenField]: []
          });
          sibs.push(clonedNode);
          build(children, clonedNode[childrenField]);
        }
      } else {
        sibs.push(n);
      }
    });
  }
  build(tree, filteredTree);
  return {
    filteredTree,
    highlightKeySet,
    expandedKeys
  };
}
const TreeNode = defineComponent({
  name: "TreeNode",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const NTree2 = inject(treeInjectionKey);
    const {
      droppingNodeParentRef,
      droppingMouseNodeRef,
      draggingNodeRef,
      droppingPositionRef,
      droppingOffsetLevelRef,
      nodePropsRef,
      indentRef,
      blockLineRef,
      checkboxPlacementRef,
      checkOnClickRef,
      disabledFieldRef,
      showLineRef,
      renderSwitcherIconRef,
      overrideDefaultNodeClickBehaviorRef
    } = NTree2;
    const checkboxDisabledRef = useMemo(() => !!props.tmNode.rawNode.checkboxDisabled);
    const nodeIsDisabledRef = useMemo(() => {
      return isNodeDisabled(props.tmNode, disabledFieldRef.value);
    });
    const disabledRef = useMemo(() => NTree2.disabledRef.value || nodeIsDisabledRef.value);
    const resolvedNodePropsRef = computed(() => {
      const {
        value: nodeProps
      } = nodePropsRef;
      if (!nodeProps) return void 0;
      return nodeProps({
        option: props.tmNode.rawNode
      });
    });
    const contentInstRef = ref(null);
    const contentElRef = {
      value: null
    };
    function handleSwitcherClick() {
      const callback = () => {
        const {
          tmNode
        } = props;
        if (!tmNode.isLeaf && !tmNode.shallowLoaded) {
          if (!NTree2.loadingKeysRef.value.has(tmNode.key)) {
            NTree2.loadingKeysRef.value.add(tmNode.key);
          } else {
            return;
          }
          const {
            onLoadRef: {
              value: onLoad
            }
          } = NTree2;
          if (onLoad) {
            void onLoad(tmNode.rawNode).then((value) => {
              if (value !== false) {
                NTree2.handleSwitcherClick(tmNode);
              }
            }).finally(() => {
              NTree2.loadingKeysRef.value.delete(tmNode.key);
            });
          }
        } else {
          NTree2.handleSwitcherClick(tmNode);
        }
      };
      if (renderSwitcherIconRef.value) {
        setTimeout(callback, 0);
      } else {
        callback();
      }
    }
    const selectableRef = useMemo(() => !nodeIsDisabledRef.value && NTree2.selectableRef.value && (NTree2.internalTreeSelect ? NTree2.mergedCheckStrategyRef.value !== "child" || NTree2.multipleRef.value && NTree2.cascadeRef.value || props.tmNode.isLeaf : true));
    const checkableRef = useMemo(() => NTree2.checkableRef.value && (NTree2.cascadeRef.value || NTree2.mergedCheckStrategyRef.value !== "child" || props.tmNode.isLeaf));
    const checkedRef = useMemo(() => NTree2.displayedCheckedKeysRef.value.includes(props.tmNode.key));
    const mergedCheckOnClickRef = useMemo(() => {
      const {
        value: checkable
      } = checkableRef;
      if (!checkable) return false;
      const {
        value: checkOnClick
      } = checkOnClickRef;
      const {
        tmNode
      } = props;
      if (typeof checkOnClick === "boolean") {
        return !tmNode.disabled && checkOnClick;
      }
      return checkOnClick(props.tmNode.rawNode);
    });
    function _handleClick(e) {
      const {
        value: expandOnClick
      } = NTree2.expandOnClickRef;
      const {
        value: selectable
      } = selectableRef;
      const {
        value: mergedCheckOnClick
      } = mergedCheckOnClickRef;
      if (!selectable && !expandOnClick && !mergedCheckOnClick) return;
      if (happensIn(e, "checkbox") || happensIn(e, "switcher")) return;
      const {
        tmNode
      } = props;
      if (selectable) {
        NTree2.handleSelect(tmNode);
      }
      if (expandOnClick && !tmNode.isLeaf) {
        handleSwitcherClick();
      }
      if (mergedCheckOnClick) {
        handleCheck(!checkedRef.value);
      }
    }
    function handleNodeClick(e) {
      var _a, _b;
      if (happensIn(e, "checkbox") || happensIn(e, "switcher")) return;
      if (!disabledRef.value) {
        const overrideDefaultNodeClickBehavior = overrideDefaultNodeClickBehaviorRef.value;
        let shouldOverride = false;
        if (overrideDefaultNodeClickBehavior) {
          switch (overrideDefaultNodeClickBehavior({
            option: props.tmNode.rawNode
          })) {
            case "toggleCheck":
              shouldOverride = true;
              handleCheck(!checkedRef.value);
              break;
            case "toggleSelect":
              shouldOverride = true;
              NTree2.handleSelect(props.tmNode);
              break;
            case "toggleExpand":
              shouldOverride = true;
              handleSwitcherClick();
              shouldOverride = true;
              break;
            case "none":
              shouldOverride = true;
              shouldOverride = true;
              return;
          }
        }
        if (!shouldOverride) {
          _handleClick(e);
        }
      }
      (_b = (_a = resolvedNodePropsRef.value) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    }
    function handleContentClick(e) {
      if (blockLineRef.value) return;
      handleNodeClick(e);
    }
    function handleLineClick(e) {
      if (!blockLineRef.value) return;
      handleNodeClick(e);
    }
    function handleCheck(checked) {
      NTree2.handleCheck(props.tmNode, checked);
    }
    function handleDragStart(e) {
      NTree2.handleDragStart({
        event: e,
        node: props.tmNode
      });
    }
    function handleDragEnter(e) {
      if (e.currentTarget !== e.target) {
        return;
      }
      NTree2.handleDragEnter({
        event: e,
        node: props.tmNode
      });
    }
    function handleDragOver(e) {
      e.preventDefault();
      NTree2.handleDragOver({
        event: e,
        node: props.tmNode
      });
    }
    function handleDragEnd(e) {
      NTree2.handleDragEnd({
        event: e,
        node: props.tmNode
      });
    }
    function handleDragLeave(e) {
      if (e.currentTarget !== e.target) {
        return;
      }
      NTree2.handleDragLeave({
        event: e,
        node: props.tmNode
      });
    }
    function handleDrop(e) {
      e.preventDefault();
      if (droppingPositionRef.value !== null) {
        NTree2.handleDrop({
          event: e,
          node: props.tmNode,
          dropPosition: droppingPositionRef.value
        });
      }
    }
    const indentNodes = computed(() => {
      const {
        clsPrefix
      } = props;
      const {
        value: indent
      } = indentRef;
      if (showLineRef.value) {
        const indentNodes2 = [];
        let cursor = props.tmNode.parent;
        while (cursor) {
          if (cursor.isLastChild) {
            indentNodes2.push(h("div", {
              class: `${clsPrefix}-tree-node-indent`
            }, h("div", {
              style: {
                width: `${indent}px`
              }
            })));
          } else {
            indentNodes2.push(h("div", {
              class: [`${clsPrefix}-tree-node-indent`, `${clsPrefix}-tree-node-indent--show-line`]
            }, h("div", {
              style: {
                width: `${indent}px`
              }
            })));
          }
          cursor = cursor.parent;
        }
        return indentNodes2.reverse();
      } else {
        return repeat(props.tmNode.level, h("div", {
          class: `${props.clsPrefix}-tree-node-indent`
        }, h("div", {
          style: {
            width: `${indent}px`
          }
        })));
      }
    });
    return {
      showDropMark: useMemo(() => {
        const {
          value: draggingNode
        } = draggingNodeRef;
        if (!draggingNode) return;
        const {
          value: droppingPosition
        } = droppingPositionRef;
        if (!droppingPosition) return;
        const {
          value: droppingMouseNode
        } = droppingMouseNodeRef;
        if (!droppingMouseNode) {
          return;
        }
        const {
          tmNode
        } = props;
        if (tmNode.key === droppingMouseNode.key) return true;
        return false;
      }),
      showDropMarkAsParent: useMemo(() => {
        const {
          value: droppingNodeParent
        } = droppingNodeParentRef;
        if (!droppingNodeParent) return false;
        const {
          tmNode
        } = props;
        const {
          value: droppingPosition
        } = droppingPositionRef;
        if (droppingPosition === "before" || droppingPosition === "after") {
          return droppingNodeParent.key === tmNode.key;
        }
        return false;
      }),
      pending: useMemo(() => NTree2.pendingNodeKeyRef.value === props.tmNode.key),
      loading: useMemo(() => NTree2.loadingKeysRef.value.has(props.tmNode.key)),
      highlight: useMemo(() => {
        var _a;
        return (_a = NTree2.highlightKeySetRef.value) === null || _a === void 0 ? void 0 : _a.has(props.tmNode.key);
      }),
      checked: checkedRef,
      indeterminate: useMemo(() => NTree2.displayedIndeterminateKeysRef.value.includes(props.tmNode.key)),
      selected: useMemo(() => NTree2.mergedSelectedKeysRef.value.includes(props.tmNode.key)),
      expanded: useMemo(() => NTree2.mergedExpandedKeysRef.value.includes(props.tmNode.key)),
      disabled: disabledRef,
      checkable: checkableRef,
      mergedCheckOnClick: mergedCheckOnClickRef,
      checkboxDisabled: checkboxDisabledRef,
      selectable: selectableRef,
      expandOnClick: NTree2.expandOnClickRef,
      internalScrollable: NTree2.internalScrollableRef,
      draggable: NTree2.draggableRef,
      blockLine: blockLineRef,
      nodeProps: resolvedNodePropsRef,
      checkboxFocusable: NTree2.internalCheckboxFocusableRef,
      droppingPosition: droppingPositionRef,
      droppingOffsetLevel: droppingOffsetLevelRef,
      indent: indentRef,
      checkboxPlacement: checkboxPlacementRef,
      showLine: showLineRef,
      contentInstRef,
      contentElRef,
      indentNodes,
      handleCheck,
      handleDrop,
      handleDragStart,
      handleDragEnter,
      handleDragOver,
      handleDragEnd,
      handleDragLeave,
      handleLineClick,
      handleContentClick,
      handleSwitcherClick
    };
  },
  render() {
    const {
      tmNode,
      clsPrefix,
      checkable,
      expandOnClick,
      selectable,
      selected,
      checked,
      highlight,
      draggable,
      blockLine,
      indent,
      indentNodes,
      disabled,
      pending,
      internalScrollable,
      nodeProps,
      checkboxPlacement
    } = this;
    const dragEventHandlers = draggable && !disabled ? {
      onDragenter: this.handleDragEnter,
      onDragleave: this.handleDragLeave,
      onDragend: this.handleDragEnd,
      onDrop: this.handleDrop,
      onDragover: this.handleDragOver
    } : void 0;
    const dataKey = internalScrollable ? createDataKey(tmNode.key) : void 0;
    const checkboxOnRight = checkboxPlacement === "right";
    const checkboxNode = checkable ? h(NTreeNodeCheckbox, {
      indent,
      right: checkboxOnRight,
      focusable: this.checkboxFocusable,
      disabled: disabled || this.checkboxDisabled,
      clsPrefix,
      checked: this.checked,
      indeterminate: this.indeterminate,
      onCheck: this.handleCheck
    }) : null;
    return h("div", Object.assign({
      class: `${clsPrefix}-tree-node-wrapper`
    }, dragEventHandlers), h("div", Object.assign({}, blockLine ? nodeProps : void 0, {
      class: [`${clsPrefix}-tree-node`, {
        [`${clsPrefix}-tree-node--selected`]: selected,
        [`${clsPrefix}-tree-node--checkable`]: checkable,
        [`${clsPrefix}-tree-node--highlight`]: highlight,
        [`${clsPrefix}-tree-node--pending`]: pending,
        [`${clsPrefix}-tree-node--disabled`]: disabled,
        [`${clsPrefix}-tree-node--selectable`]: selectable,
        [`${clsPrefix}-tree-node--clickable`]: selectable || expandOnClick || this.mergedCheckOnClick
      }, nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps.class],
      "data-key": dataKey,
      draggable: draggable && blockLine,
      onClick: this.handleLineClick,
      onDragstart: draggable && blockLine && !disabled ? this.handleDragStart : void 0
    }), indentNodes, tmNode.isLeaf && this.showLine ? h("div", {
      class: [`${clsPrefix}-tree-node-indent`, `${clsPrefix}-tree-node-indent--show-line`, tmNode.isLeaf && `${clsPrefix}-tree-node-indent--is-leaf`, tmNode.isLastChild && `${clsPrefix}-tree-node-indent--last-child`]
    }, h("div", {
      style: {
        width: `${indent}px`
      }
    })) : h(NTreeNodeSwitcher, {
      clsPrefix,
      expanded: this.expanded,
      selected,
      loading: this.loading,
      hide: tmNode.isLeaf,
      tmNode: this.tmNode,
      indent,
      onClick: this.handleSwitcherClick
    }), !checkboxOnRight ? checkboxNode : null, h(NTreeNodeContent, {
      ref: "contentInstRef",
      clsPrefix,
      checked,
      selected,
      onClick: this.handleContentClick,
      nodeProps: blockLine ? void 0 : nodeProps,
      onDragstart: draggable && !blockLine && !disabled ? this.handleDragStart : void 0,
      tmNode
    }), draggable ? this.showDropMark ? renderDropMark({
      el: this.contentElRef.value,
      position: this.droppingPosition,
      offsetLevel: this.droppingOffsetLevel,
      indent
    }) : this.showDropMarkAsParent ? renderDropMark({
      el: this.contentElRef.value,
      position: "inside",
      offsetLevel: this.droppingOffsetLevel,
      indent
    }) : null : null, checkboxOnRight ? checkboxNode : null));
  }
});
const MotionWrapper = defineComponent({
  name: "TreeMotionWrapper",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    height: Number,
    nodes: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    onAfterEnter: {
      type: Function,
      required: true
    }
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h(NFadeInExpandTransition, {
      onAfterEnter: this.onAfterEnter,
      appear: true,
      reverse: this.mode === "collapse"
    }, {
      default: () => h("div", {
        class: [`${clsPrefix}-tree-motion-wrapper`, `${clsPrefix}-tree-motion-wrapper--${this.mode}`],
        style: {
          height: pxfy(this.height)
        }
      }, this.nodes.map((node) => h(TreeNode, {
        clsPrefix,
        tmNode: node
      })))
    });
  }
});
const iconSwitchTransitionNode = iconSwitchTransition();
const style = cB("tree", `
 font-size: var(--n-font-size);
 outline: none;
`, [c$1("ul, li", `
 margin: 0;
 padding: 0;
 list-style: none;
 `), c$1(">", [cB("tree-node", [c$1("&:first-child", "margin-top: 0;")])]), cB("tree-motion-wrapper", [cM("expand", [fadeInHeightExpandTransition({
  duration: "0.2s"
})]), cM("collapse", [fadeInHeightExpandTransition({
  duration: "0.2s",
  reverse: true
})])]), cB("tree-node-wrapper", `
 box-sizing: border-box;
 padding: var(--n-node-wrapper-padding);
 `), cB("tree-node", `
 transform: translate3d(0,0,0);
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `, [cM("highlight", [cB("tree-node-content", [cE("text", "border-bottom-color: var(--n-node-text-color-disabled);")])]), cM("disabled", [cB("tree-node-content", `
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `)]), cNotM("disabled", [cM("clickable", [cB("tree-node-content", `
 cursor: pointer;
 `)])])]), cM("block-node", [cB("tree-node-content", `
 flex: 1;
 min-width: 0;
 `)]), cNotM("block-line", [cB("tree-node", [cNotM("disabled", [cB("tree-node-content", [c$1("&:hover", "background: var(--n-node-color-hover);")]), cM("selectable", [cB("tree-node-content", [c$1("&:active", "background: var(--n-node-color-pressed);")])]), cM("pending", [cB("tree-node-content", `
 background: var(--n-node-color-hover);
 `)]), cM("selected", [cB("tree-node-content", "background: var(--n-node-color-active);")])]), cM("selected", [cB("tree-node-content", "background: var(--n-node-color-active);")])])]), cM("block-line", [cB("tree-node", [cNotM("disabled", [c$1("&:hover", "background: var(--n-node-color-hover);"), cM("pending", `
 background: var(--n-node-color-hover);
 `), cM("selectable", [cNotM("selected", [c$1("&:active", "background: var(--n-node-color-pressed);")])]), cM("selected", "background: var(--n-node-color-active);")]), cM("selected", "background: var(--n-node-color-active);"), cM("disabled", `
 cursor: not-allowed;
 `)])]), cB("tree-node-indent", `
 flex-grow: 0;
 flex-shrink: 0;
 `, [cM("show-line", "position: relative", [c$1("&::before", `
 position: absolute;
 left: 50%;
 border-left: 1px solid var(--n-line-color);
 transition: border-color .3s var(--n-bezier);
 transform: translate(-50%);
 content: "";
 top: var(--n-line-offset-top);
 bottom: var(--n-line-offset-bottom);
 `), cM("last-child", [c$1("&::before", `
 bottom: 50%;
 `)]), cM("is-leaf", [c$1("&::after", `
 position: absolute;
 content: "";
 left: calc(50% + 0.5px);
 right: 0;
 bottom: 50%;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-line-color);
 `)])]), cNotM("show-line", "height: 0;")]), cB("tree-node-switcher", `
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: var(--n-node-content-height);
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `, [cE("icon", `
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `, [cB("icon", [iconSwitchTransitionNode]), cB("base-loading", `
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [iconSwitchTransitionNode]), cB("base-icon", [iconSwitchTransitionNode])]), cM("hide", "visibility: hidden;"), cM("expanded", "transform: rotate(90deg);")]), cB("tree-node-checkbox", `
 display: inline-flex;
 height: var(--n-node-content-height);
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 `), cB("tree-node-content", `
 user-select: none;
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: var(--n-node-content-height);
 box-sizing: border-box;
 line-height: var(--n-line-height);
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [c$1("&:last-child", "margin-bottom: 0;"), cE("prefix", `
 display: inline-flex;
 margin-right: 8px;
 `), cE("text", `
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow: 1;
 max-width: 100%;
 `), cE("suffix", `
 display: inline-flex;
 `)]), cE("empty", "margin: auto;")]);
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
function createTreeMateOptions(keyField, childrenField, disabledField, getChildren) {
  const settledGetChildren = getChildren || ((node) => {
    return node[childrenField];
  });
  return {
    getIsGroup() {
      return false;
    },
    getKey(node) {
      return node[keyField];
    },
    getChildren: settledGetChildren,
    getDisabled(node) {
      return !!(node[disabledField] || node.checkboxDisabled);
    }
  };
}
const treeSharedProps = {
  allowCheckingNotLoaded: Boolean,
  filter: Function,
  defaultExpandAll: Boolean,
  expandedKeys: Array,
  keyField: {
    type: String,
    default: "key"
  },
  labelField: {
    type: String,
    default: "label"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  disabledField: {
    type: String,
    default: "disabled"
  },
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  indeterminateKeys: Array,
  renderSwitcherIcon: Function,
  onUpdateIndeterminateKeys: [Function, Array],
  "onUpdate:indeterminateKeys": [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  "onUpdate:expandedKeys": [Function, Array],
  overrideDefaultNodeClickBehavior: Function
};
const treeProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), {
  accordion: Boolean,
  showIrrelevantNodes: {
    type: Boolean,
    default: true
  },
  data: {
    type: Array,
    default: () => []
  },
  expandOnDragenter: {
    type: Boolean,
    default: true
  },
  expandOnClick: Boolean,
  checkOnClick: {
    type: [Boolean, Function],
    default: false
  },
  cancelable: {
    type: Boolean,
    default: true
  },
  checkable: Boolean,
  draggable: Boolean,
  blockNode: Boolean,
  blockLine: Boolean,
  showLine: Boolean,
  disabled: Boolean,
  checkedKeys: Array,
  defaultCheckedKeys: {
    type: Array,
    default: () => []
  },
  selectedKeys: Array,
  defaultSelectedKeys: {
    type: Array,
    default: () => []
  },
  multiple: Boolean,
  pattern: {
    type: String,
    default: ""
  },
  onLoad: Function,
  cascade: Boolean,
  selectable: {
    type: Boolean,
    default: true
  },
  scrollbarProps: Object,
  indent: {
    type: Number,
    default: 24
  },
  allowDrop: {
    type: Function,
    default: defaultAllowDrop
  },
  animated: {
    type: Boolean,
    default: true
  },
  checkboxPlacement: {
    type: String,
    default: "left"
  },
  virtualScroll: Boolean,
  watchProps: Array,
  renderLabel: Function,
  renderPrefix: Function,
  renderSuffix: Function,
  nodeProps: Function,
  keyboard: {
    type: Boolean,
    default: true
  },
  getChildren: Function,
  onDragenter: [Function, Array],
  onDragleave: [Function, Array],
  onDragend: [Function, Array],
  onDragstart: [Function, Array],
  onDragover: [Function, Array],
  onDrop: [Function, Array],
  onUpdateCheckedKeys: [Function, Array],
  "onUpdate:checkedKeys": [Function, Array],
  onUpdateSelectedKeys: [Function, Array],
  "onUpdate:selectedKeys": [Function, Array]
}), treeSharedProps), {
  // internal props for tree-select
  internalTreeSelect: Boolean,
  internalScrollable: Boolean,
  internalScrollablePadding: String,
  // use it to display
  internalRenderEmpty: Function,
  internalHighlightKeySet: Object,
  internalUnifySelectCheck: Boolean,
  internalCheckboxFocusable: {
    type: Boolean,
    default: true
  },
  internalFocusable: {
    // Make tree-select take over keyboard operations
    type: Boolean,
    default: true
  },
  checkStrategy: {
    type: String,
    default: "all"
  },
  /**
   * @deprecated
   */
  leafOnly: Boolean
});
const NTree = defineComponent({
  name: "Tree",
  props: treeProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("Tree", mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme("Tree", "-tree", style, treeLight, props, mergedClsPrefixRef);
    const selfElRef = ref(null);
    const scrollbarInstRef = ref(null);
    const virtualListInstRef = ref(null);
    function getScrollContainer() {
      var _a;
      return (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.listElRef;
    }
    function getScrollContent() {
      var _a;
      return (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.itemsElRef;
    }
    const mergedFilterRef = computed(() => {
      const {
        filter
      } = props;
      if (filter) return filter;
      const {
        labelField
      } = props;
      return (pattern, node) => {
        if (!pattern.length) return true;
        const label = node[labelField];
        if (typeof label === "string") {
          return label.toLowerCase().includes(pattern.toLowerCase());
        }
        return false;
      };
    });
    const filteredTreeInfoRef = computed(() => {
      const {
        pattern
      } = props;
      if (!pattern) {
        return {
          filteredTree: props.data,
          highlightKeySet: null,
          expandedKeys: void 0
        };
      }
      if (!pattern.length || !mergedFilterRef.value) {
        return {
          filteredTree: props.data,
          highlightKeySet: null,
          expandedKeys: void 0
        };
      }
      return filterTree(props.data, mergedFilterRef.value, pattern, props.keyField, props.childrenField);
    });
    const displayTreeMateRef = computed(() => createTreeMate(props.showIrrelevantNodes ? props.data : filteredTreeInfoRef.value.filteredTree, createTreeMateOptions(props.keyField, props.childrenField, props.disabledField, props.getChildren)));
    const treeSelectInjection = inject(treeSelectInjectionKey, null);
    const dataTreeMateRef = props.internalTreeSelect ? treeSelectInjection.dataTreeMate : computed(() => props.showIrrelevantNodes ? displayTreeMateRef.value : createTreeMate(props.data, createTreeMateOptions(props.keyField, props.childrenField, props.disabledField, props.getChildren)));
    const {
      watchProps
    } = props;
    const uncontrolledCheckedKeysRef = ref([]);
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultCheckedKeys")) {
      watchEffect(() => {
        uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys;
      });
    } else {
      uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys;
    }
    const controlledCheckedKeysRef = toRef(props, "checkedKeys");
    const mergedCheckedKeysRef = useMergedState(controlledCheckedKeysRef, uncontrolledCheckedKeysRef);
    const checkedStatusRef = computed(() => {
      const value = dataTreeMateRef.value.getCheckedKeys(mergedCheckedKeysRef.value, {
        cascade: props.cascade,
        allowNotLoaded: props.allowCheckingNotLoaded
      });
      return value;
    });
    const mergedCheckStrategyRef = useMergedCheckStrategy(props);
    const displayedCheckedKeysRef = computed(() => {
      return checkedStatusRef.value.checkedKeys;
    });
    const displayedIndeterminateKeysRef = computed(() => {
      const {
        indeterminateKeys
      } = props;
      if (indeterminateKeys !== void 0) return indeterminateKeys;
      return checkedStatusRef.value.indeterminateKeys;
    });
    const uncontrolledSelectedKeysRef = ref([]);
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultSelectedKeys")) {
      watchEffect(() => {
        uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys;
      });
    } else {
      uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys;
    }
    const controlledSelectedKeysRef = toRef(props, "selectedKeys");
    const mergedSelectedKeysRef = useMergedState(controlledSelectedKeysRef, uncontrolledSelectedKeysRef);
    const uncontrolledExpandedKeysRef = ref([]);
    const initUncontrolledExpandedKeys = (keys) => {
      uncontrolledExpandedKeysRef.value = props.defaultExpandAll ? dataTreeMateRef.value.getNonLeafKeys() : keys === void 0 ? props.defaultExpandedKeys : keys;
    };
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultExpandedKeys")) {
      watchEffect(() => {
        initUncontrolledExpandedKeys(void 0);
      });
    } else {
      watchEffect(() => {
        initUncontrolledExpandedKeys(props.defaultExpandedKeys);
      });
    }
    const controlledExpandedKeysRef = toRef(props, "expandedKeys");
    const mergedExpandedKeysRef = useMergedState(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
    const fNodesRef = computed(() => displayTreeMateRef.value.getFlattenedNodes(mergedExpandedKeysRef.value));
    const {
      pendingNodeKeyRef,
      handleKeydown
    } = useKeyboard({
      props,
      mergedCheckedKeysRef,
      mergedSelectedKeysRef,
      fNodesRef,
      mergedExpandedKeysRef,
      handleCheck,
      handleSelect,
      handleSwitcherClick
    });
    let expandTimerId = null;
    let nodeKeyToBeExpanded = null;
    const uncontrolledHighlightKeySetRef = ref(/* @__PURE__ */ new Set());
    const controlledHighlightKeySetRef = computed(() => {
      return props.internalHighlightKeySet || filteredTreeInfoRef.value.highlightKeySet;
    });
    const mergedHighlightKeySetRef = useMergedState(controlledHighlightKeySetRef, uncontrolledHighlightKeySetRef);
    const loadingKeysRef = ref(/* @__PURE__ */ new Set());
    const expandedNonLoadingKeysRef = computed(() => {
      return mergedExpandedKeysRef.value.filter((key) => !loadingKeysRef.value.has(key));
    });
    let dragStartX = 0;
    const draggingNodeRef = ref(null);
    const droppingNodeRef = ref(null);
    const droppingMouseNodeRef = ref(null);
    const droppingPositionRef = ref(null);
    const droppingOffsetLevelRef = ref(0);
    const droppingNodeParentRef = computed(() => {
      const {
        value: droppingNode
      } = droppingNodeRef;
      if (!droppingNode) return null;
      return droppingNode.parent;
    });
    let isDataReset = false;
    watch(toRef(props, "data"), () => {
      isDataReset = true;
      void nextTick(() => {
        isDataReset = false;
      });
      loadingKeysRef.value.clear();
      pendingNodeKeyRef.value = null;
      resetDndState();
    }, {
      deep: false
    });
    let expandAnimationDisabled = false;
    const disableExpandAnimationForOneTick = () => {
      expandAnimationDisabled = true;
      void nextTick(() => {
        expandAnimationDisabled = false;
      });
    };
    let memoizedExpandedKeys;
    watch(toRef(props, "pattern"), (value, oldValue) => {
      if (props.showIrrelevantNodes) {
        memoizedExpandedKeys = void 0;
        if (value) {
          const {
            expandedKeys: expandedKeysAfterChange,
            highlightKeySet
          } = keysWithFilter(props.data, props.pattern, props.keyField, props.childrenField, mergedFilterRef.value);
          uncontrolledHighlightKeySetRef.value = highlightKeySet;
          disableExpandAnimationForOneTick();
          doUpdateExpandedKeys(expandedKeysAfterChange, getOptionsByKeys(expandedKeysAfterChange), {
            node: null,
            action: "filter"
          });
        } else {
          uncontrolledHighlightKeySetRef.value = /* @__PURE__ */ new Set();
        }
      } else {
        if (!value.length) {
          if (memoizedExpandedKeys !== void 0) {
            disableExpandAnimationForOneTick();
            doUpdateExpandedKeys(memoizedExpandedKeys, getOptionsByKeys(memoizedExpandedKeys), {
              node: null,
              action: "filter"
            });
          }
        } else {
          if (!oldValue.length) {
            memoizedExpandedKeys = mergedExpandedKeysRef.value;
          }
          const {
            expandedKeys
          } = filteredTreeInfoRef.value;
          if (expandedKeys !== void 0) {
            disableExpandAnimationForOneTick();
            doUpdateExpandedKeys(expandedKeys, getOptionsByKeys(expandedKeys), {
              node: null,
              action: "filter"
            });
          }
        }
      }
    });
    function triggerLoading(node) {
      return __awaiter(this, void 0, void 0, function* () {
        const {
          onLoad
        } = props;
        if (!onLoad) {
          yield Promise.resolve();
          return;
        }
        const {
          value: loadingKeys
        } = loadingKeysRef;
        if (!loadingKeys.has(node.key)) {
          loadingKeys.add(node.key);
          try {
            const loadResult = yield onLoad(node.rawNode);
            if (loadResult === false) {
              resetDragExpandState();
            }
          } catch (loadError) {
            console.error(loadError);
            resetDragExpandState();
          }
          loadingKeys.delete(node.key);
        }
      });
    }
    watchEffect(() => {
      var _a;
      const {
        value: displayTreeMate
      } = displayTreeMateRef;
      if (!displayTreeMate) return;
      const {
        getNode
      } = displayTreeMate;
      (_a = mergedExpandedKeysRef.value) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
        const node = getNode(key);
        if (node && !node.shallowLoaded) {
          void triggerLoading(node);
        }
      });
    });
    const aipRef = ref(false);
    const afNodesRef = ref([]);
    watch(expandedNonLoadingKeysRef, (value, prevValue) => {
      if (!props.animated || expandAnimationDisabled) {
        void nextTick(syncScrollbar);
        return;
      }
      if (isDataReset) {
        return;
      }
      const nodeHeight = depx(themeRef.value.self.nodeHeight);
      const prevVSet = new Set(prevValue);
      let addedKey = null;
      let removedKey = null;
      for (const expandedKey of value) {
        if (!prevVSet.has(expandedKey)) {
          if (addedKey !== null) return;
          addedKey = expandedKey;
        }
      }
      const currentVSet = new Set(value);
      for (const expandedKey of prevValue) {
        if (!currentVSet.has(expandedKey)) {
          if (removedKey !== null) return;
          removedKey = expandedKey;
        }
      }
      if (addedKey === null && removedKey === null) {
        return;
      }
      const {
        virtualScroll
      } = props;
      const viewportHeight = (virtualScroll ? virtualListInstRef.value.listElRef : selfElRef.value).offsetHeight;
      const viewportItemCount = Math.ceil(viewportHeight / nodeHeight) + 1;
      let baseExpandedKeys;
      if (addedKey !== null) {
        baseExpandedKeys = prevValue;
      }
      if (removedKey !== null) {
        if (baseExpandedKeys === void 0) {
          baseExpandedKeys = value;
        } else {
          baseExpandedKeys = baseExpandedKeys.filter((key) => key !== removedKey);
        }
      }
      aipRef.value = true;
      afNodesRef.value = displayTreeMateRef.value.getFlattenedNodes(baseExpandedKeys);
      if (addedKey !== null) {
        const expandedNodeIndex = afNodesRef.value.findIndex((node) => node.key === addedKey);
        if (~expandedNodeIndex) {
          const children = afNodesRef.value[expandedNodeIndex].children;
          if (children) {
            const expandedChildren = flatten(children, value);
            afNodesRef.value.splice(expandedNodeIndex + 1, 0, {
              __motion: true,
              mode: "expand",
              height: virtualScroll ? expandedChildren.length * nodeHeight : void 0,
              nodes: virtualScroll ? expandedChildren.slice(0, viewportItemCount) : expandedChildren
            });
          }
        }
      }
      if (removedKey !== null) {
        const collapsedNodeIndex = afNodesRef.value.findIndex((node) => node.key === removedKey);
        if (~collapsedNodeIndex) {
          const collapsedNodeChildren = afNodesRef.value[collapsedNodeIndex].children;
          if (!collapsedNodeChildren) return;
          aipRef.value = true;
          const collapsedChildren = flatten(collapsedNodeChildren, value);
          afNodesRef.value.splice(collapsedNodeIndex + 1, 0, {
            __motion: true,
            mode: "collapse",
            height: virtualScroll ? collapsedChildren.length * nodeHeight : void 0,
            nodes: virtualScroll ? collapsedChildren.slice(0, viewportItemCount) : collapsedChildren
          });
        }
      }
    });
    const getFIndexRef = computed(() => {
      return createIndexGetter(fNodesRef.value);
    });
    const mergedFNodesRef = computed(() => {
      if (aipRef.value) return afNodesRef.value;
      else return fNodesRef.value;
    });
    function syncScrollbar() {
      const {
        value: scrollbarInst
      } = scrollbarInstRef;
      if (scrollbarInst) scrollbarInst.sync();
    }
    function handleAfterEnter() {
      aipRef.value = false;
      if (props.virtualScroll) {
        void nextTick(syncScrollbar);
      }
    }
    function getOptionsByKeys(keys) {
      const {
        getNode
      } = dataTreeMateRef.value;
      return keys.map((key) => {
        var _a;
        return ((_a = getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode) || null;
      });
    }
    function doUpdateExpandedKeys(value, option, meta) {
      const {
        "onUpdate:expandedKeys": _onUpdateExpandedKeys,
        onUpdateExpandedKeys
      } = props;
      uncontrolledExpandedKeysRef.value = value;
      if (_onUpdateExpandedKeys) {
        call(_onUpdateExpandedKeys, value, option, meta);
      }
      if (onUpdateExpandedKeys) {
        call(onUpdateExpandedKeys, value, option, meta);
      }
    }
    function doUpdateCheckedKeys(value, option, meta) {
      const {
        "onUpdate:checkedKeys": _onUpdateCheckedKeys,
        onUpdateCheckedKeys
      } = props;
      uncontrolledCheckedKeysRef.value = value;
      if (onUpdateCheckedKeys) {
        call(onUpdateCheckedKeys, value, option, meta);
      }
      if (_onUpdateCheckedKeys) {
        call(_onUpdateCheckedKeys, value, option, meta);
      }
    }
    function doUpdateIndeterminateKeys(value, option) {
      const {
        "onUpdate:indeterminateKeys": _onUpdateIndeterminateKeys,
        onUpdateIndeterminateKeys
      } = props;
      if (_onUpdateIndeterminateKeys) {
        call(_onUpdateIndeterminateKeys, value, option);
      }
      if (onUpdateIndeterminateKeys) {
        call(onUpdateIndeterminateKeys, value, option);
      }
    }
    function doUpdateSelectedKeys(value, option, meta) {
      const {
        "onUpdate:selectedKeys": _onUpdateSelectedKeys,
        onUpdateSelectedKeys
      } = props;
      uncontrolledSelectedKeysRef.value = value;
      if (onUpdateSelectedKeys) {
        call(onUpdateSelectedKeys, value, option, meta);
      }
      if (_onUpdateSelectedKeys) {
        call(_onUpdateSelectedKeys, value, option, meta);
      }
    }
    function doDragEnter(info) {
      const {
        onDragenter
      } = props;
      if (onDragenter) call(onDragenter, info);
    }
    function doDragLeave(info) {
      const {
        onDragleave
      } = props;
      if (onDragleave) call(onDragleave, info);
    }
    function doDragEnd(info) {
      const {
        onDragend
      } = props;
      if (onDragend) call(onDragend, info);
    }
    function doDragStart(info) {
      const {
        onDragstart
      } = props;
      if (onDragstart) call(onDragstart, info);
    }
    function doDragOver(info) {
      const {
        onDragover
      } = props;
      if (onDragover) call(onDragover, info);
    }
    function doDrop(info) {
      const {
        onDrop
      } = props;
      if (onDrop) call(onDrop, info);
    }
    function resetDndState() {
      resetDragState();
      resetDropState();
    }
    function resetDragState() {
      draggingNodeRef.value = null;
    }
    function resetDropState() {
      droppingOffsetLevelRef.value = 0;
      droppingNodeRef.value = null;
      droppingMouseNodeRef.value = null;
      droppingPositionRef.value = null;
      resetDragExpandState();
    }
    function resetDragExpandState() {
      if (expandTimerId) {
        (void 0).clearTimeout(expandTimerId);
        expandTimerId = null;
      }
      nodeKeyToBeExpanded = null;
    }
    function handleCheck(node, checked) {
      if (props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      if (props.internalUnifySelectCheck && !props.multiple) {
        handleSelect(node);
        return;
      }
      const checkedAction = checked ? "check" : "uncheck";
      const {
        checkedKeys,
        indeterminateKeys
      } = dataTreeMateRef.value[checkedAction](node.key, displayedCheckedKeysRef.value, {
        cascade: props.cascade,
        checkStrategy: mergedCheckStrategyRef.value,
        allowNotLoaded: props.allowCheckingNotLoaded
      });
      doUpdateCheckedKeys(checkedKeys, getOptionsByKeys(checkedKeys), {
        node: node.rawNode,
        action: checkedAction
      });
      doUpdateIndeterminateKeys(indeterminateKeys, getOptionsByKeys(indeterminateKeys));
    }
    function toggleExpand(node) {
      if (props.disabled) return;
      const {
        key
      } = node;
      const {
        value: mergedExpandedKeys
      } = mergedExpandedKeysRef;
      const index = mergedExpandedKeys.findIndex((expandNodeId) => expandNodeId === key);
      if (~index) {
        const expandedKeysAfterChange = Array.from(mergedExpandedKeys);
        expandedKeysAfterChange.splice(index, 1);
        doUpdateExpandedKeys(expandedKeysAfterChange, getOptionsByKeys(expandedKeysAfterChange), {
          node: node.rawNode,
          action: "collapse"
        });
      } else {
        const nodeToBeExpanded = displayTreeMateRef.value.getNode(key);
        if (!nodeToBeExpanded || nodeToBeExpanded.isLeaf) {
          return;
        }
        let nextKeys;
        if (props.accordion) {
          const siblingKeySet = new Set(node.siblings.map(({
            key: key2
          }) => key2));
          nextKeys = mergedExpandedKeys.filter((expandedKey) => {
            return !siblingKeySet.has(expandedKey);
          });
          nextKeys.push(key);
        } else {
          nextKeys = mergedExpandedKeys.concat(key);
        }
        doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys), {
          node: node.rawNode,
          action: "expand"
        });
      }
    }
    function handleSwitcherClick(node) {
      if (props.disabled || aipRef.value) return;
      toggleExpand(node);
    }
    function handleSelect(node) {
      if (props.disabled || !props.selectable) {
        return;
      }
      pendingNodeKeyRef.value = node.key;
      if (props.internalUnifySelectCheck) {
        const {
          value: {
            checkedKeys,
            indeterminateKeys
          }
        } = checkedStatusRef;
        if (props.multiple) {
          handleCheck(node, !(checkedKeys.includes(node.key) || indeterminateKeys.includes(node.key)));
        } else {
          doUpdateCheckedKeys([node.key], getOptionsByKeys([node.key]), {
            node: node.rawNode,
            action: "check"
          });
        }
      }
      if (props.multiple) {
        const selectedKeys = Array.from(mergedSelectedKeysRef.value);
        const index = selectedKeys.findIndex((key) => key === node.key);
        if (~index) {
          if (props.cancelable) {
            selectedKeys.splice(index, 1);
          }
        } else if (!~index) {
          selectedKeys.push(node.key);
        }
        doUpdateSelectedKeys(selectedKeys, getOptionsByKeys(selectedKeys), {
          node: node.rawNode,
          action: ~index ? "unselect" : "select"
        });
      } else {
        const selectedKeys = mergedSelectedKeysRef.value;
        if (selectedKeys.includes(node.key)) {
          if (props.cancelable) {
            doUpdateSelectedKeys([], [], {
              node: node.rawNode,
              action: "unselect"
            });
          }
        } else {
          doUpdateSelectedKeys([node.key], getOptionsByKeys([node.key]), {
            node: node.rawNode,
            action: "select"
          });
        }
      }
    }
    function expandDragEnterNode(node) {
      if (expandTimerId) {
        (void 0).clearTimeout(expandTimerId);
        expandTimerId = null;
      }
      if (node.isLeaf) return;
      nodeKeyToBeExpanded = node.key;
      const expand = () => {
        if (nodeKeyToBeExpanded !== node.key) return;
        const {
          value: droppingMouseNode
        } = droppingMouseNodeRef;
        if (droppingMouseNode && droppingMouseNode.key === node.key && !mergedExpandedKeysRef.value.includes(node.key)) {
          const nextKeys = mergedExpandedKeysRef.value.concat(node.key);
          doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys), {
            node: node.rawNode,
            action: "expand"
          });
        }
        expandTimerId = null;
        nodeKeyToBeExpanded = null;
      };
      if (!node.shallowLoaded) {
        expandTimerId = (void 0).setTimeout(() => {
          void triggerLoading(node).then(() => {
            expand();
          });
        }, 1e3);
      } else {
        expandTimerId = (void 0).setTimeout(() => {
          expand();
        }, 1e3);
      }
    }
    function handleDragEnter({
      event,
      node
    }) {
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      handleDragOver({
        event,
        node
      }, false);
      doDragEnter({
        event,
        node: node.rawNode
      });
    }
    function handleDragLeave({
      event,
      node
    }) {
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      doDragLeave({
        event,
        node: node.rawNode
      });
    }
    function handleDragLeaveTree(e) {
      if (e.target !== e.currentTarget) return;
      resetDropState();
    }
    function handleDragEnd({
      event,
      node
    }) {
      resetDndState();
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      doDragEnd({
        event,
        node: node.rawNode
      });
    }
    function handleDragStart({
      event,
      node
    }) {
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      dragStartX = event.clientX;
      draggingNodeRef.value = node;
      doDragStart({
        event,
        node: node.rawNode
      });
    }
    function handleDragOver({
      event,
      node
    }, emit = true) {
      var _a;
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      const {
        value: draggingNode
      } = draggingNodeRef;
      if (!draggingNode) return;
      const {
        allowDrop,
        indent
      } = props;
      if (emit) doDragOver({
        event,
        node: node.rawNode
      });
      const el = event.currentTarget;
      const {
        height: elOffsetHeight,
        top: elClientTop
      } = el.getBoundingClientRect();
      const eventOffsetY = event.clientY - elClientTop;
      let mousePosition;
      const allowDropInside = allowDrop({
        node: node.rawNode,
        dropPosition: "inside",
        phase: "drag"
      });
      if (allowDropInside) {
        if (eventOffsetY <= 8) {
          mousePosition = "before";
        } else if (eventOffsetY >= elOffsetHeight - 8) {
          mousePosition = "after";
        } else {
          mousePosition = "inside";
        }
      } else {
        if (eventOffsetY <= elOffsetHeight / 2) {
          mousePosition = "before";
        } else {
          mousePosition = "after";
        }
      }
      const {
        value: getFindex
      } = getFIndexRef;
      let finalDropNode;
      let finalDropPosition;
      const hoverNodeFIndex = getFindex(node.key);
      if (hoverNodeFIndex === null) {
        resetDropState();
        return;
      }
      let mouseAtExpandedNonLeafNode = false;
      if (mousePosition === "inside") {
        finalDropNode = node;
        finalDropPosition = "inside";
      } else {
        if (mousePosition === "before") {
          if (node.isFirstChild) {
            finalDropNode = node;
            finalDropPosition = "before";
          } else {
            finalDropNode = fNodesRef.value[hoverNodeFIndex - 1];
            finalDropPosition = "after";
          }
        } else {
          finalDropNode = node;
          finalDropPosition = "after";
        }
      }
      if (!finalDropNode.isLeaf && mergedExpandedKeysRef.value.includes(finalDropNode.key)) {
        mouseAtExpandedNonLeafNode = true;
        if (finalDropPosition === "after") {
          finalDropNode = fNodesRef.value[hoverNodeFIndex + 1];
          if (!finalDropNode) {
            finalDropNode = node;
            finalDropPosition = "inside";
          } else {
            finalDropPosition = "before";
          }
        }
      }
      const droppingMouseNode = finalDropNode;
      droppingMouseNodeRef.value = droppingMouseNode;
      if (!mouseAtExpandedNonLeafNode && draggingNode.isLastChild && draggingNode.key === finalDropNode.key) {
        finalDropPosition = "after";
      }
      if (finalDropPosition === "after") {
        let offset = dragStartX - event.clientX;
        let offsetLevel = 0;
        while (offset >= indent / 2 && finalDropNode.parent !== null && finalDropNode.isLastChild && offsetLevel < 1) {
          offset -= indent;
          offsetLevel += 1;
          finalDropNode = finalDropNode.parent;
        }
        droppingOffsetLevelRef.value = offsetLevel;
      } else {
        droppingOffsetLevelRef.value = 0;
      }
      if (draggingNode.contains(finalDropNode) || finalDropPosition === "inside" && ((_a = draggingNode.parent) === null || _a === void 0 ? void 0 : _a.key) === finalDropNode.key) {
        if (draggingNode.key === droppingMouseNode.key && draggingNode.key === finalDropNode.key) ;
        else {
          resetDropState();
          return;
        }
      }
      if (!allowDrop({
        node: finalDropNode.rawNode,
        dropPosition: finalDropPosition,
        phase: "drag"
      })) {
        resetDropState();
        return;
      }
      if (draggingNode.key === finalDropNode.key) {
        resetDragExpandState();
      } else {
        if (nodeKeyToBeExpanded !== finalDropNode.key) {
          if (finalDropPosition === "inside") {
            if (props.expandOnDragenter) {
              expandDragEnterNode(finalDropNode);
              if (!finalDropNode.shallowLoaded && nodeKeyToBeExpanded !== finalDropNode.key) {
                resetDndState();
                return;
              }
            } else {
              if (!finalDropNode.shallowLoaded) {
                resetDndState();
                return;
              }
            }
          } else {
            resetDragExpandState();
          }
        } else {
          if (finalDropPosition !== "inside") {
            resetDragExpandState();
          }
        }
      }
      droppingPositionRef.value = finalDropPosition;
      droppingNodeRef.value = finalDropNode;
    }
    function handleDrop({
      event,
      node,
      dropPosition
    }) {
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      const {
        value: draggingNode
      } = draggingNodeRef;
      const {
        value: droppingNode
      } = droppingNodeRef;
      const {
        value: droppingPosition
      } = droppingPositionRef;
      if (!draggingNode || !droppingNode || !droppingPosition) {
        return;
      }
      if (!props.allowDrop({
        node: droppingNode.rawNode,
        dropPosition: droppingPosition,
        phase: "drag"
      })) {
        return;
      }
      if (draggingNode.key === droppingNode.key) {
        return;
      }
      if (droppingPosition === "before") {
        const nextNode = draggingNode.getNext({
          includeDisabled: true
        });
        if (nextNode) {
          if (nextNode.key === droppingNode.key) {
            resetDropState();
            return;
          }
        }
      }
      if (droppingPosition === "after") {
        const prevNode = draggingNode.getPrev({
          includeDisabled: true
        });
        if (prevNode) {
          if (prevNode.key === droppingNode.key) {
            resetDropState();
            return;
          }
        }
      }
      doDrop({
        event,
        node: droppingNode.rawNode,
        dragNode: draggingNode.rawNode,
        dropPosition
      });
      resetDndState();
    }
    function handleScroll() {
      syncScrollbar();
    }
    function handleResize() {
      syncScrollbar();
    }
    function handleFocusout(e) {
      var _a;
      if (props.virtualScroll || props.internalScrollable) {
        const {
          value: scrollbarInst
        } = scrollbarInstRef;
        if ((_a = scrollbarInst === null || scrollbarInst === void 0 ? void 0 : scrollbarInst.containerRef) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) {
          return;
        }
        pendingNodeKeyRef.value = null;
      } else {
        const {
          value: selfEl
        } = selfElRef;
        if (selfEl === null || selfEl === void 0 ? void 0 : selfEl.contains(e.relatedTarget)) return;
        pendingNodeKeyRef.value = null;
      }
    }
    watch(pendingNodeKeyRef, (value) => {
      var _a, _b;
      if (value === null) return;
      if (props.virtualScroll) {
        (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({
          key: value
        });
      } else if (props.internalScrollable) {
        const {
          value: scrollbarInst
        } = scrollbarInstRef;
        if (scrollbarInst === null) return;
        const targetEl = (_b = scrollbarInst.contentRef) === null || _b === void 0 ? void 0 : _b.querySelector(`[data-key="${createDataKey(value)}"]`);
        if (!targetEl) return;
        scrollbarInst.scrollTo({
          el: targetEl
        });
      }
    });
    provide(treeInjectionKey, {
      loadingKeysRef,
      highlightKeySetRef: mergedHighlightKeySetRef,
      displayedCheckedKeysRef,
      displayedIndeterminateKeysRef,
      mergedSelectedKeysRef,
      mergedExpandedKeysRef,
      mergedThemeRef: themeRef,
      mergedCheckStrategyRef,
      nodePropsRef: toRef(props, "nodeProps"),
      disabledRef: toRef(props, "disabled"),
      checkableRef: toRef(props, "checkable"),
      selectableRef: toRef(props, "selectable"),
      expandOnClickRef: toRef(props, "expandOnClick"),
      onLoadRef: toRef(props, "onLoad"),
      draggableRef: toRef(props, "draggable"),
      blockLineRef: toRef(props, "blockLine"),
      indentRef: toRef(props, "indent"),
      cascadeRef: toRef(props, "cascade"),
      checkOnClickRef: toRef(props, "checkOnClick"),
      checkboxPlacementRef: props.checkboxPlacement,
      droppingMouseNodeRef,
      droppingNodeParentRef,
      draggingNodeRef,
      droppingPositionRef,
      droppingOffsetLevelRef,
      fNodesRef,
      pendingNodeKeyRef,
      showLineRef: toRef(props, "showLine"),
      disabledFieldRef: toRef(props, "disabledField"),
      internalScrollableRef: toRef(props, "internalScrollable"),
      internalCheckboxFocusableRef: toRef(props, "internalCheckboxFocusable"),
      internalTreeSelect: props.internalTreeSelect,
      renderLabelRef: toRef(props, "renderLabel"),
      renderPrefixRef: toRef(props, "renderPrefix"),
      renderSuffixRef: toRef(props, "renderSuffix"),
      renderSwitcherIconRef: toRef(props, "renderSwitcherIcon"),
      labelFieldRef: toRef(props, "labelField"),
      multipleRef: toRef(props, "multiple"),
      overrideDefaultNodeClickBehaviorRef: toRef(props, "overrideDefaultNodeClickBehavior"),
      handleSwitcherClick,
      handleDragEnd,
      handleDragEnter,
      handleDragLeave,
      handleDragStart,
      handleDrop,
      handleDragOver,
      handleSelect,
      handleCheck
    });
    function scrollTo(options, y) {
      var _a, _b;
      if (typeof options === "number") {
        (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(options, y || 0);
      } else {
        (_b = virtualListInstRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo(options);
      }
    }
    const exposedMethods = {
      handleKeydown,
      scrollTo,
      getCheckedData: () => {
        if (!props.checkable) return {
          keys: [],
          options: []
        };
        const {
          checkedKeys
        } = checkedStatusRef.value;
        return {
          keys: checkedKeys,
          options: getOptionsByKeys(checkedKeys)
        };
      },
      getIndeterminateData: () => {
        if (!props.checkable) return {
          keys: [],
          options: []
        };
        const {
          indeterminateKeys
        } = checkedStatusRef.value;
        return {
          keys: indeterminateKeys,
          options: getOptionsByKeys(indeterminateKeys)
        };
      }
    };
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          nodeBorderRadius,
          nodeColorHover,
          nodeColorPressed,
          nodeColorActive,
          arrowColor,
          loadingColor,
          nodeTextColor,
          nodeTextColorDisabled,
          dropMarkColor,
          nodeWrapperPadding,
          nodeHeight,
          lineHeight,
          lineColor
        }
      } = themeRef.value;
      const lineOffsetTop = getPadding(nodeWrapperPadding, "top");
      const lineOffsetBottom = getPadding(nodeWrapperPadding, "bottom");
      const nodeContentHeight = pxfy(depx(nodeHeight) - depx(lineOffsetTop) - depx(lineOffsetBottom));
      return {
        "--n-arrow-color": arrowColor,
        "--n-loading-color": loadingColor,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-node-border-radius": nodeBorderRadius,
        "--n-node-color-active": nodeColorActive,
        "--n-node-color-hover": nodeColorHover,
        "--n-node-color-pressed": nodeColorPressed,
        "--n-node-text-color": nodeTextColor,
        "--n-node-text-color-disabled": nodeTextColorDisabled,
        "--n-drop-mark-color": dropMarkColor,
        "--n-node-wrapper-padding": nodeWrapperPadding,
        "--n-line-offset-top": `-${lineOffsetTop}`,
        "--n-line-offset-bottom": `-${lineOffsetBottom}`,
        "--n-node-content-height": nodeContentHeight,
        "--n-line-height": lineHeight,
        "--n-line-color": lineColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tree", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      rtlEnabled: rtlEnabledRef,
      fNodes: mergedFNodesRef,
      aip: aipRef,
      selfElRef,
      virtualListInstRef,
      scrollbarInstRef,
      handleFocusout,
      handleDragLeaveTree,
      handleScroll,
      getScrollContainer,
      getScrollContent,
      handleAfterEnter,
      handleResize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const {
      fNodes,
      internalRenderEmpty
    } = this;
    if (!fNodes.length && internalRenderEmpty) {
      return internalRenderEmpty();
    }
    const {
      mergedClsPrefix,
      blockNode,
      blockLine,
      draggable,
      disabled,
      internalFocusable,
      checkable,
      handleKeydown,
      rtlEnabled,
      handleFocusout,
      scrollbarProps
    } = this;
    const mergedFocusable = internalFocusable && !disabled;
    const tabindex = mergedFocusable ? "0" : void 0;
    const treeClass = [`${mergedClsPrefix}-tree`, rtlEnabled && `${mergedClsPrefix}-tree--rtl`, checkable && `${mergedClsPrefix}-tree--checkable`, (blockLine || blockNode) && `${mergedClsPrefix}-tree--block-node`, blockLine && `${mergedClsPrefix}-tree--block-line`];
    const createNode = (tmNode) => {
      return "__motion" in tmNode ? h(MotionWrapper, {
        height: tmNode.height,
        nodes: tmNode.nodes,
        clsPrefix: mergedClsPrefix,
        mode: tmNode.mode,
        onAfterEnter: this.handleAfterEnter
      }) : h(TreeNode, {
        key: tmNode.key,
        tmNode,
        clsPrefix: mergedClsPrefix
      });
    };
    if (this.virtualScroll) {
      const {
        mergedTheme,
        internalScrollablePadding
      } = this;
      const padding = getPadding(internalScrollablePadding || "0");
      return h(XScrollbar, Object.assign({}, scrollbarProps, {
        ref: "scrollbarInstRef",
        onDragleave: draggable ? this.handleDragLeaveTree : void 0,
        container: this.getScrollContainer,
        content: this.getScrollContent,
        class: treeClass,
        theme: mergedTheme.peers.Scrollbar,
        themeOverrides: mergedTheme.peerOverrides.Scrollbar,
        tabindex,
        onKeydown: mergedFocusable ? handleKeydown : void 0,
        onFocusout: mergedFocusable ? handleFocusout : void 0
      }), {
        default: () => {
          var _a2;
          (_a2 = this.onRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
          return !fNodes.length ? resolveSlot(this.$slots.empty, () => [h(NEmpty, {
            class: `${mergedClsPrefix}-tree__empty`,
            theme: this.mergedTheme.peers.Empty,
            themeOverrides: this.mergedTheme.peerOverrides.Empty
          })]) : h(VVirtualList, {
            ref: "virtualListInstRef",
            items: this.fNodes,
            itemSize: depx(mergedTheme.self.nodeHeight),
            ignoreItemResize: this.aip,
            paddingTop: padding.top,
            paddingBottom: padding.bottom,
            class: this.themeClass,
            style: [this.cssVars, {
              paddingLeft: padding.left,
              paddingRight: padding.right
            }],
            onScroll: this.handleScroll,
            onResize: this.handleResize,
            showScrollbar: false,
            itemResizable: true
          }, {
            default: ({
              item
            }) => createNode(item)
          });
        }
      });
    }
    const {
      internalScrollable
    } = this;
    treeClass.push(this.themeClass);
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    if (internalScrollable) {
      return h(XScrollbar, Object.assign({}, scrollbarProps, {
        class: treeClass,
        tabindex,
        onKeydown: mergedFocusable ? handleKeydown : void 0,
        onFocusout: mergedFocusable ? handleFocusout : void 0,
        style: this.cssVars,
        contentStyle: {
          padding: this.internalScrollablePadding
        }
      }), {
        default: () => h("div", {
          onDragleave: draggable ? this.handleDragLeaveTree : void 0,
          ref: "selfElRef"
        }, this.fNodes.map(createNode))
      });
    } else {
      return h("div", {
        class: treeClass,
        tabindex,
        ref: "selfElRef",
        style: this.cssVars,
        onKeydown: mergedFocusable ? handleKeydown : void 0,
        onFocusout: mergedFocusable ? handleFocusout : void 0,
        onDragleave: draggable ? this.handleDragLeaveTree : void 0
      }, !fNodes.length ? resolveSlot(this.$slots.empty, () => [h(NEmpty, {
        class: `${mergedClsPrefix}-tree__empty`,
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })]) : fNodes.map(createNode));
    }
  }
});

export { NTree as N, treeSharedProps as a, createTreeMateOptions as c, treeSelectInjectionKey as t, useMergedCheckStrategy as u };
//# sourceMappingURL=Tree-lyCRjKWs.mjs.map
