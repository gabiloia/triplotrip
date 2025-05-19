import { broadcastActiveObservations } from "../algorithms/broadcastActiveObservations"
import { deliverResizeLoopError } from "../algorithms/deliverResizeLoopError"
import { gatherActiveObservationsAtDepth } from "../algorithms/gatherActiveObservationsAtDepth"
import { hasActiveObservations } from "../algorithms/hasActiveObservations"
import { hasSkippedObservations } from "../algorithms/hasSkippedObservations"

function process() {
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
export { process }
