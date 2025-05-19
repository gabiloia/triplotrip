import { resizeObservers } from "../utils/resizeObservers"
import { calculateDepthForNode } from "./calculateDepthForNode"

function gatherActiveObservationsAtDepth(depth) {
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
export { gatherActiveObservationsAtDepth }
