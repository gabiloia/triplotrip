import type { ResizeObserver } from "./ResizeObserver"
import type { ResizeObserverCallback } from "./ResizeObserverCallback"
import type { ResizeObserverOptions } from "./ResizeObserverOptions"

declare class ResizeObserverController {
	static connect(resizeObserver: ResizeObserver, callback: ResizeObserverCallback): void
	static observe(resizeObserver: ResizeObserver, target: Element, options?: ResizeObserverOptions): void
	static unobserve(resizeObserver: ResizeObserver, target: Element): void
	static disconnect(resizeObserver: ResizeObserver): void
}
export { ResizeObserverController }
