import { resizeObservers } from "../utils/resizeObservers"

function hasActiveObservations() {
	return resizeObservers.some(ro => {
		return ro.activeTargets.length > 0
	})
}
export { hasActiveObservations }
