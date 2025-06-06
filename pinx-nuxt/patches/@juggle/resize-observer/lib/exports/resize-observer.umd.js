;(function (global, factory) {
	typeof exports === "object" && typeof module !== "undefined"
		? factory(exports)
		: typeof define === "function" && define.amd
			? define(["exports"], factory)
			: ((global = typeof globalThis !== "undefined" ? globalThis : global || self),
				factory((global.ResizeObserver = {})))
})(this, exports => {
	"use strict"

	const resizeObservers = []

	const hasActiveObservations = function () {
		return resizeObservers.some(ro => {
			return ro.activeTargets.length > 0
		})
	}

	const hasSkippedObservations = function () {
		return resizeObservers.some(ro => {
			return ro.skippedTargets.length > 0
		})
	}

	const msg = "ResizeObserver loop completed with undelivered notifications."
	const deliverResizeLoopError = function () {
		let event
		if (typeof ErrorEvent === "function") {
			event = new ErrorEvent("error", {
				message: msg
			})
		} else {
			event = document.createEvent("Event")
			event.initEvent("error", false, false)
			event.message = msg
		}
		window.dispatchEvent(event)
	}

	let ResizeObserverBoxOptions
	;(function (ResizeObserverBoxOptions) {
		ResizeObserverBoxOptions.BORDER_BOX = "border-box"
		ResizeObserverBoxOptions.CONTENT_BOX = "content-box"
		ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
	})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}))

	const freeze = function (obj) {
		return Object.freeze(obj)
	}

	const ResizeObserverSize = (function () {
		function ResizeObserverSize(inlineSize, blockSize) {
			this.inlineSize = inlineSize
			this.blockSize = blockSize
			freeze(this)
		}
		return ResizeObserverSize
	})()

	const DOMRectReadOnly = (function () {
		function DOMRectReadOnly(x, y, width, height) {
			this.x = x
			this.y = y
			this.width = width
			this.height = height
			this.top = this.y
			this.left = this.x
			this.bottom = this.top + this.height
			this.right = this.left + this.width
			return freeze(this)
		}
		DOMRectReadOnly.prototype.toJSON = function () {
			const _a = this
			const x = _a.x
			const y = _a.y
			const top = _a.top
			const right = _a.right
			const bottom = _a.bottom
			const left = _a.left
			const width = _a.width
			const height = _a.height
			return { x, y, top, right, bottom, left, width, height }
		}
		DOMRectReadOnly.fromRect = function (rectangle) {
			return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
		}
		return DOMRectReadOnly
	})()

	const isSVG = function (target) {
		return target instanceof SVGElement && "getBBox" in target
	}
	const isHidden = function (target) {
		if (isSVG(target)) {
			const _a = target.getBBox()
			const width = _a.width
			const height = _a.height
			return !width && !height
		}
		const _b = target
		const offsetWidth = _b.offsetWidth
		const offsetHeight = _b.offsetHeight
		return !(offsetWidth || offsetHeight || target.getClientRects().length)
	}
	const isElement = function (obj) {
		let _a
		if (obj instanceof Element) {
			return true
		}
		const scope =
			(_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0
				? void 0
				: _a.defaultView
		return !!(scope && obj instanceof scope.Element)
	}
	const isReplacedElement = function (target) {
		switch (target.tagName) {
			case "INPUT":
				if (target.type !== "image") {
					break
				}
			case "VIDEO":
			case "AUDIO":
			case "EMBED":
			case "OBJECT":
			case "CANVAS":
			case "IFRAME":
			case "IMG":
				return true
		}
		return false
	}

	const global = typeof window !== "undefined" ? window : {}

	const cache = new WeakMap()
	const scrollRegexp = /auto|scroll/
	const verticalRegexp = /^tb|vertical/
	const IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent)
	const parseDimension = function (pixel) {
		return Number.parseFloat(pixel || "0")
	}
	const size = function (inlineSize, blockSize, switchSizes) {
		if (inlineSize === void 0) {
			inlineSize = 0
		}
		if (blockSize === void 0) {
			blockSize = 0
		}
		if (switchSizes === void 0) {
			switchSizes = false
		}
		return new ResizeObserverSize(
			(switchSizes ? blockSize : inlineSize) || 0,
			(switchSizes ? inlineSize : blockSize) || 0
		)
	}
	const zeroBoxes = freeze({
		devicePixelContentBoxSize: size(),
		borderBoxSize: size(),
		contentBoxSize: size(),
		contentRect: new DOMRectReadOnly(0, 0, 0, 0)
	})
	const calculateBoxSizes = function (target, forceRecalculation) {
		if (forceRecalculation === void 0) {
			forceRecalculation = false
		}
		if (cache.has(target) && !forceRecalculation) {
			return cache.get(target)
		}
		if (isHidden(target)) {
			cache.set(target, zeroBoxes)
			return zeroBoxes
		}
		const cs = getComputedStyle(target)
		const svg = isSVG(target) && target.ownerSVGElement && target.getBBox()
		const removePadding = !IE && cs.boxSizing === "border-box"
		const switchSizes = verticalRegexp.test(cs.writingMode || "")
		const canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "")
		const canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "")
		const paddingTop = svg ? 0 : parseDimension(cs.paddingTop)
		const paddingRight = svg ? 0 : parseDimension(cs.paddingRight)
		const paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom)
		const paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft)
		const borderTop = svg ? 0 : parseDimension(cs.borderTopWidth)
		const borderRight = svg ? 0 : parseDimension(cs.borderRightWidth)
		const borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth)
		const borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth)
		const horizontalPadding = paddingLeft + paddingRight
		const verticalPadding = paddingTop + paddingBottom
		const horizontalBorderArea = borderLeft + borderRight
		const verticalBorderArea = borderTop + borderBottom
		const horizontalScrollbarThickness = !canScrollHorizontally
			? 0
			: target.offsetHeight - verticalBorderArea - target.clientHeight
		const verticalScrollbarThickness = !canScrollVertically
			? 0
			: target.offsetWidth - horizontalBorderArea - target.clientWidth
		const widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0
		const heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0
		const contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness
		const contentHeight = svg
			? svg.height
			: parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness
		const borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea
		const borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea
		const boxes = freeze({
			devicePixelContentBoxSize: size(
				Math.round(contentWidth * devicePixelRatio),
				Math.round(contentHeight * devicePixelRatio),
				switchSizes
			),
			borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
			contentBoxSize: size(contentWidth, contentHeight, switchSizes),
			contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
		})
		cache.set(target, boxes)
		return boxes
	}
	const calculateBoxSize = function (target, observedBox, forceRecalculation) {
		const _a = calculateBoxSizes(target, forceRecalculation)
		const borderBoxSize = _a.borderBoxSize
		const contentBoxSize = _a.contentBoxSize
		const devicePixelContentBoxSize = _a.devicePixelContentBoxSize
		switch (observedBox) {
			case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
				return devicePixelContentBoxSize
			case ResizeObserverBoxOptions.BORDER_BOX:
				return borderBoxSize
			default:
				return contentBoxSize
		}
	}

	const ResizeObserverEntry = (function () {
		function ResizeObserverEntry(target) {
			const boxes = calculateBoxSizes(target)
			this.target = target
			this.contentRect = boxes.contentRect
			this.borderBoxSize = freeze([boxes.borderBoxSize])
			this.contentBoxSize = freeze([boxes.contentBoxSize])
			this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize])
		}
		return ResizeObserverEntry
	})()

	const calculateDepthForNode = function (node) {
		if (isHidden(node)) {
			return Infinity
		}
		let depth = 0
		let parent = node.parentNode
		while (parent) {
			depth += 1
			parent = parent.parentNode
		}
		return depth
	}

	const broadcastActiveObservations = function () {
		let shallowestDepth = Infinity
		const callbacks = []
		resizeObservers.forEach(ro => {
			if (ro.activeTargets.length === 0) {
				return
			}
			const entries = []
			ro.activeTargets.forEach(ot => {
				const entry = new ResizeObserverEntry(ot.target)
				const targetDepth = calculateDepthForNode(ot.target)
				entries.push(entry)
				ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox)
				if (targetDepth < shallowestDepth) {
					shallowestDepth = targetDepth
				}
			})
			callbacks.push(() => {
				ro.callback.call(ro.observer, entries, ro.observer)
			})
			ro.activeTargets.splice(0, ro.activeTargets.length)
		})
		for (let _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
			const callback = callbacks_1[_i]
			callback()
		}
		return shallowestDepth
	}

	const gatherActiveObservationsAtDepth = function (depth) {
		resizeObservers.forEach(ro => {
			ro.activeTargets.splice(0, ro.activeTargets.length)
			ro.skippedTargets.splice(0, ro.skippedTargets.length)
			ro.observationTargets.forEach(ot => {
				if (ot.isActive()) {
					if (calculateDepthForNode(ot.target) > depth) {
						ro.activeTargets.push(ot)
					} else {
						ro.skippedTargets.push(ot)
					}
				}
			})
		})
	}

	const process = function () {
		let depth = 0
		gatherActiveObservationsAtDepth(depth)
		while (hasActiveObservations()) {
			depth = broadcastActiveObservations()
			gatherActiveObservationsAtDepth(depth)
		}
		if (hasSkippedObservations()) {
			deliverResizeLoopError()
		}
		return depth > 0
	}

	let trigger
	const callbacks = []
	const notify = function () {
		return callbacks.splice(0).forEach(cb => {
			return cb()
		})
	}
	const queueMicroTask = function (callback) {
		if (!trigger) {
			let toggle_1 = 0
			const el_1 = document.createTextNode("")
			const config = { characterData: true }
			new MutationObserver(() => {
				return notify()
			}).observe(el_1, config)
			trigger = function () {
				el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++)
			}
		}
		callbacks.push(callback)
		trigger()
	}

	const queueResizeObserver = function (cb) {
		queueMicroTask(() => {
			requestAnimationFrame(cb)
		})
	}

	let watching = 0
	const isWatching = function () {
		return !!watching
	}
	const CATCH_PERIOD = 250
	const observerConfig = { attributes: true, characterData: true, childList: true, subtree: true }
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
	]
	const time = function (timeout) {
		if (timeout === void 0) {
			timeout = 0
		}
		return Date.now() + timeout
	}
	let scheduled = false
	const Scheduler = (function () {
		function Scheduler() {
			const _this = this
			this.stopped = true
			this.listener = function () {
				return _this.schedule()
			}
		}
		Scheduler.prototype.run = function (timeout) {
			const _this = this
			if (timeout === void 0) {
				timeout = CATCH_PERIOD
			}
			if (scheduled) {
				return
			}
			scheduled = true
			const until = time(timeout)
			queueResizeObserver(() => {
				let elementsHaveResized = false
				try {
					elementsHaveResized = process()
				} finally {
					scheduled = false
					timeout = until - time()
					if (!isWatching()) {
						return
					}
					if (elementsHaveResized) {
						_this.run(1000)
					} else if (timeout > 0) {
						_this.run(timeout)
					} else {
						_this.start()
					}
				}
			})
		}
		Scheduler.prototype.schedule = function () {
			this.stop()
			this.run()
		}
		Scheduler.prototype.observe = function () {
			const _this = this
			const cb = function () {
				return _this.observer && _this.observer.observe(document.body, observerConfig)
			}
			document.body ? cb() : global.addEventListener("DOMContentLoaded", cb)
		}
		Scheduler.prototype.start = function () {
			const _this = this
			if (this.stopped) {
				this.stopped = false
				this.observer = new MutationObserver(this.listener)
				this.observe()
				events.forEach(name => {
					return global.addEventListener(name, _this.listener, true)
				})
			}
		}
		Scheduler.prototype.stop = function () {
			const _this = this
			if (!this.stopped) {
				this.observer && this.observer.disconnect()
				events.forEach(name => {
					return global.removeEventListener(name, _this.listener, true)
				})
				this.stopped = true
			}
		}
		return Scheduler
	})()
	const scheduler = new Scheduler()
	const updateCount = function (n) {
		!watching && n > 0 && scheduler.start()
		watching += n
		!watching && scheduler.stop()
	}

	const skipNotifyOnElement = function (target) {
		return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline"
	}
	const ResizeObservation = (function () {
		function ResizeObservation(target, observedBox) {
			this.target = target
			this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX
			this.lastReportedSize = {
				inlineSize: 0,
				blockSize: 0
			}
		}
		ResizeObservation.prototype.isActive = function () {
			const size = calculateBoxSize(this.target, this.observedBox, true)
			if (skipNotifyOnElement(this.target)) {
				this.lastReportedSize = size
			}
			if (
				this.lastReportedSize.inlineSize !== size.inlineSize ||
				this.lastReportedSize.blockSize !== size.blockSize
			) {
				return true
			}
			return false
		}
		return ResizeObservation
	})()

	const ResizeObserverDetail = (function () {
		function ResizeObserverDetail(resizeObserver, callback) {
			this.activeTargets = []
			this.skippedTargets = []
			this.observationTargets = []
			this.observer = resizeObserver
			this.callback = callback
		}
		return ResizeObserverDetail
	})()

	const observerMap = new WeakMap()
	const getObservationIndex = function (observationTargets, target) {
		for (let i = 0; i < observationTargets.length; i += 1) {
			if (observationTargets[i].target === target) {
				return i
			}
		}
		return -1
	}
	const ResizeObserverController = (function () {
		function ResizeObserverController() {}
		ResizeObserverController.connect = function (resizeObserver, callback) {
			const detail = new ResizeObserverDetail(resizeObserver, callback)
			observerMap.set(resizeObserver, detail)
		}
		ResizeObserverController.observe = function (resizeObserver, target, options) {
			const detail = observerMap.get(resizeObserver)
			const firstObservation = detail.observationTargets.length === 0
			if (getObservationIndex(detail.observationTargets, target) < 0) {
				firstObservation && resizeObservers.push(detail)
				detail.observationTargets.push(new ResizeObservation(target, options && options.box))
				updateCount(1)
				scheduler.schedule()
			}
		}
		ResizeObserverController.unobserve = function (resizeObserver, target) {
			const detail = observerMap.get(resizeObserver)
			const index = getObservationIndex(detail.observationTargets, target)
			const lastObservation = detail.observationTargets.length === 1
			if (index >= 0) {
				lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1)
				detail.observationTargets.splice(index, 1)
				updateCount(-1)
			}
		}
		ResizeObserverController.disconnect = function (resizeObserver) {
			const _this = this
			const detail = observerMap.get(resizeObserver)
			detail.observationTargets.slice().forEach(ot => {
				return _this.unobserve(resizeObserver, ot.target)
			})
			detail.activeTargets.splice(0, detail.activeTargets.length)
		}
		return ResizeObserverController
	})()

	const ResizeObserver = (function () {
		function ResizeObserver(callback) {
			if (arguments.length === 0) {
				throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.")
			}
			if (typeof callback !== "function") {
				throw new TypeError(
					"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
				)
			}
			ResizeObserverController.connect(this, callback)
		}
		ResizeObserver.prototype.observe = function (target, options) {
			if (arguments.length === 0) {
				throw new TypeError(
					"Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
				)
			}
			if (!isElement(target)) {
				throw new TypeError(
					"Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
				)
			}
			ResizeObserverController.observe(this, target, options)
		}
		ResizeObserver.prototype.unobserve = function (target) {
			if (arguments.length === 0) {
				throw new TypeError(
					"Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
				)
			}
			if (!isElement(target)) {
				throw new TypeError(
					"Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
				)
			}
			ResizeObserverController.unobserve(this, target)
		}
		ResizeObserver.prototype.disconnect = function () {
			ResizeObserverController.disconnect(this)
		}
		ResizeObserver.toString = function () {
			return "function ResizeObserver () { [polyfill code] }"
		}
		return ResizeObserver
	})()

	exports.ResizeObserver = ResizeObserver
	exports.ResizeObserverEntry = ResizeObserverEntry
	exports.ResizeObserverSize = ResizeObserverSize

	Object.defineProperty(exports, "__esModule", { value: true })
})
