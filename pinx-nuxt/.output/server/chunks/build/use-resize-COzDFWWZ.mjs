import { watch } from 'vue';

var _a;
var freeze = function(obj) {
  return Object.freeze(obj);
};
const DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    const _a2 = this;
    const x = _a2.x;
    const y = _a2.y;
    const top = _a2.top;
    const right = _a2.right;
    const bottom = _a2.bottom;
    const left = _a2.left;
    const width = _a2.width;
    const height = _a2.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();
let ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2.BORDER_BOX = "border-box";
  ResizeObserverBoxOptions2.CONTENT_BOX = "content-box";
  ResizeObserverBoxOptions2.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
const ResizeObserverSize = /* @__PURE__ */ function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze(this);
  }
  return ResizeObserverSize2;
}();
function isSVG(target) {
  return target instanceof SVGElement && "getBBox" in target;
}
function isHidden(target) {
  if (isSVG(target)) {
    const _a2 = target.getBBox();
    const width = _a2.width;
    const height = _a2.height;
    return !width && !height;
  }
  const _b = target;
  const offsetWidth = _b.offsetWidth;
  const offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
}
function isElement(obj) {
  let _a2;
  if (obj instanceof Element) {
    return true;
  }
  const scope = (_a2 = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a2 === void 0 ? void 0 : _a2.defaultView;
  return !!(scope && obj instanceof scope.Element);
}
function isReplacedElement(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
}
var global = {};
const cache = /* @__PURE__ */ new WeakMap();
const scrollRegexp = /auto|scroll/;
const verticalRegexp = /^tb|vertical/;
const IE = /msie|trident/i.test(((_a = global == null ? void 0 : global.navigator) == null ? void 0 : _a.userAgent) || "");
function parseDimension(pixel) {
  return Number.parseFloat(pixel || "0");
}
function size(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize(
    (switchSizes ? blockSize : inlineSize) || 0,
    (switchSizes ? inlineSize : blockSize) || 0
  );
}
const zeroBoxes = freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
function calculateBoxSizes(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache.has(target) && !forceRecalculation) {
    return cache.get(target);
  }
  if (isHidden(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }
  const cs = getComputedStyle(target);
  const svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  const removePadding = !IE && cs.boxSizing === "border-box";
  const switchSizes = verticalRegexp.test(cs.writingMode || "");
  const canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  const canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  const paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  const paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  const paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  const paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  const borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  const borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  const borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  const borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  const horizontalPadding = paddingLeft + paddingRight;
  const verticalPadding = paddingTop + paddingBottom;
  const horizontalBorderArea = borderLeft + borderRight;
  const verticalBorderArea = borderTop + borderBottom;
  const horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  const verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  const widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  const heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  const contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  const contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  const borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  const borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  const boxes = freeze({
    devicePixelContentBoxSize: size(
      Math.round(contentWidth * devicePixelRatio),
      Math.round(contentHeight * devicePixelRatio),
      switchSizes
    ),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
}
function calculateBoxSize(target, observedBox, forceRecalculation) {
  const _a2 = calculateBoxSizes(target, forceRecalculation);
  const borderBoxSize = _a2.borderBoxSize;
  const contentBoxSize = _a2.contentBoxSize;
  const devicePixelContentBoxSize = _a2.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
}
function skipNotifyOnElement(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
}
const ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    const size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();
const ResizeObserverDetail = /* @__PURE__ */ function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();
const resizeObservers = [];
const ResizeObserverEntry = /* @__PURE__ */ function() {
  function ResizeObserverEntry2(target) {
    const boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze([boxes.borderBoxSize]);
    this.contentBoxSize = freeze([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();
function calculateDepthForNode(node) {
  if (isHidden(node)) {
    return Infinity;
  }
  let depth = 0;
  let parent = node.parentNode;
  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }
  return depth;
}
function broadcastActiveObservations() {
  let shallowestDepth = Infinity;
  const callbacks2 = [];
  resizeObservers.forEach((ro) => {
    if (ro.activeTargets.length === 0) {
      return;
    }
    const entries = [];
    ro.activeTargets.forEach((ot) => {
      const entry = new ResizeObserverEntry(ot.target);
      const targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(() => {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (let _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    const callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
}
const msg = "ResizeObserver loop completed with undelivered notifications.";
function deliverResizeLoopError() {
  let event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = (void 0).createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  (void 0).dispatchEvent(event);
}
function gatherActiveObservationsAtDepth(depth) {
  resizeObservers.forEach((ro) => {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach((ot) => {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
}
function hasActiveObservations() {
  return resizeObservers.some((ro) => {
    return ro.activeTargets.length > 0;
  });
}
function hasSkippedObservations() {
  return resizeObservers.some((ro) => {
    return ro.skippedTargets.length > 0;
  });
}
function process() {
  let depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
}
let trigger;
const callbacks = [];
function notify() {
  return callbacks.splice(0).forEach((cb) => {
    return cb();
  });
}
function queueMicroTask(callback) {
  if (!trigger) {
    let toggle_1 = 0;
    const el_1 = (void 0).createTextNode("");
    const config = { characterData: true };
    new MutationObserver(() => {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
}
function queueResizeObserver(cb) {
  queueMicroTask(() => {
    requestAnimationFrame(cb);
  });
}
let watching = 0;
function isWatching() {
  return !!watching;
}
const CATCH_PERIOD = 250;
const observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
const events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
function time(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
}
let scheduled = false;
const Scheduler = function() {
  function Scheduler2() {
    const _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    const _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    const until = time(timeout);
    queueResizeObserver(() => {
      let elementsHaveResized = false;
      try {
        elementsHaveResized = process();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    const _this = this;
    const cb = function() {
      return _this.observer && _this.observer.observe((void 0).body, observerConfig);
    };
    (void 0).body ? cb() : global.addEventListener("DOMContentLoaded", cb);
  };
  Scheduler2.prototype.start = function() {
    const _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach((name) => {
        return globalThis.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    const _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach((name) => {
        return globalThis.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
const scheduler = new Scheduler();
function updateCount(n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
}
const observerMap = /* @__PURE__ */ new WeakMap();
function getObservationIndex(observationTargets, target) {
  for (let i = 0; i < observationTargets.length; i += 1) {
    if (observationTargets[i].target === target) {
      return i;
    }
  }
  return -1;
}
const ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    const detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    const detail = observerMap.get(resizeObserver);
    const firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    const detail = observerMap.get(resizeObserver);
    const index = getObservationIndex(detail.observationTargets, target);
    const lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    const _this = this;
    const detail = observerMap.get(resizeObserver);
    detail.observationTargets.slice().forEach((ot) => {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();
const ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError(
        "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
      );
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver2.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError(
        "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
      );
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver2.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError(
        "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
      );
    }
    if (!isElement(target)) {
      throw new TypeError(
        "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
      );
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver2.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver2;
}();
class ResizeObserverDelegate {
  constructor() {
    this.handleResize = this.handleResize.bind(this);
    this.observer = new ResizeObserver(this.handleResize);
    this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(entries) {
    for (const entry of entries) {
      const handler = this.elHandlersMap.get(entry.target);
      if (handler !== void 0) {
        handler(entry);
      }
    }
  }
  registerHandler(el, handler) {
    this.elHandlersMap.set(el, handler);
    this.observer.observe(el);
  }
  unregisterHandler(el) {
    if (!this.elHandlersMap.has(el)) {
      return;
    }
    this.elHandlersMap.delete(el);
    this.observer.unobserve(el);
  }
}
const resizeObserverManager = new ResizeObserverDelegate();
function useOnResize(elRef, onResize) {
  if (onResize) {
    watch(elRef, (_, oldEl) => {
      if (oldEl) {
        resizeObserverManager.unregisterHandler(oldEl);
      }
    }, {
      deep: false
    });
  }
}

export { useOnResize as u };
//# sourceMappingURL=use-resize-COzDFWWZ.mjs.map
