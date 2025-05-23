import { calculateBoxSize } from "./algorithms/calculateBoxSize"
import { ResizeObserverBoxOptions } from "./ResizeObserverBoxOptions"
import { isReplacedElement, isSVG } from "./utils/element"

function skipNotifyOnElement(target) {
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
export { ResizeObservation }
