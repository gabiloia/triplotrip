import { DOMRectReadOnly } from "../DOMRectReadOnly"
import { ResizeObserverBoxOptions } from "../ResizeObserverBoxOptions"
import { ResizeObserverSize } from "../ResizeObserverSize"
import { isHidden, isSVG } from "../utils/element"
import { freeze } from "../utils/freeze"
import { global } from "../utils/global"

const cache = new WeakMap()
const scrollRegexp = /auto|scroll/
const verticalRegexp = /^tb|vertical/
const IE = /msie|trident/i.test(global?.navigator?.userAgent || "")
function parseDimension(pixel) {
	return Number.parseFloat(pixel || "0")
}
function size(inlineSize, blockSize, switchSizes) {
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
function calculateBoxSizes(target, forceRecalculation) {
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
	const contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness
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
function calculateBoxSize(target, observedBox, forceRecalculation) {
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
export { calculateBoxSize, calculateBoxSizes }
