import { calculateBoxSizes } from "./algorithms/calculateBoxSize"
import { freeze } from "./utils/freeze"

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
export { ResizeObserverEntry }
