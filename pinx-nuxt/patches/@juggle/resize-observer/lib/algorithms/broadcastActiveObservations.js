import { ResizeObserverEntry } from "../ResizeObserverEntry"
import { resizeObservers } from "../utils/resizeObservers"
import { calculateBoxSize } from "./calculateBoxSize"
import { calculateDepthForNode } from "./calculateDepthForNode"

function broadcastActiveObservations() {
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
export { broadcastActiveObservations }
