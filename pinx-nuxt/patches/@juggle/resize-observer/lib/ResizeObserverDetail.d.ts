import type { ResizeObservation } from "./ResizeObservation"
import type { ResizeObserver } from "./ResizeObserver"
import type { ResizeObserverCallback } from "./ResizeObserverCallback"

declare class ResizeObserverDetail {
	callback: ResizeObserverCallback
	observer: ResizeObserver
	activeTargets: ResizeObservation[]
	skippedTargets: ResizeObservation[]
	observationTargets: ResizeObservation[]
	constructor(resizeObserver: ResizeObserver, callback: ResizeObserverCallback)
}
export { ResizeObserverDetail }
