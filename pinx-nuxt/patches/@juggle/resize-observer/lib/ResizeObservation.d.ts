import type { ResizeObserverBoxOptions } from "./ResizeObserverBoxOptions"
import type { ResizeObserverSize } from "./ResizeObserverSize"

declare class ResizeObservation {
	target: Element
	observedBox: ResizeObserverBoxOptions
	lastReportedSize: ResizeObserverSize
	constructor(target: Element, observedBox?: ResizeObserverBoxOptions)
	isActive(): boolean
}
export { ResizeObservation }
