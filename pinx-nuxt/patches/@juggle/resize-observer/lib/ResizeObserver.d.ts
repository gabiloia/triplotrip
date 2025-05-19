import type { ResizeObserverCallback } from "./ResizeObserverCallback"
import type { ResizeObserverOptions } from "./ResizeObserverOptions"

declare class ResizeObserver {
	constructor(callback: ResizeObserverCallback)
	observe(target: Element, options?: ResizeObserverOptions): void
	unobserve(target: Element): void
	disconnect(): void
	static toString(): string
}
export { ResizeObserver }
