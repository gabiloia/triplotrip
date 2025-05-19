import { resizeObservers } from "../utils/resizeObservers"

function hasSkippedObservations() {
	return resizeObservers.some(ro => {
		return ro.skippedTargets.length > 0
	})
}
export { hasSkippedObservations }
