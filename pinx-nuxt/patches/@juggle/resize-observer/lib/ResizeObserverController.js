import { ResizeObservation } from "./ResizeObservation"
import { ResizeObserverDetail } from "./ResizeObserverDetail"
import { resizeObservers } from "./utils/resizeObservers"
import { scheduler, updateCount } from "./utils/scheduler"

const observerMap = new WeakMap()
function getObservationIndex(observationTargets, target) {
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
export { ResizeObserverController }
