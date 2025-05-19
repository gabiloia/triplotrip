import type { ResizeObserver } from "../ResizeObserver"
import type { ResizeObserverEntry } from "../ResizeObserverEntry"
import type { ResizeObserverSize } from "../ResizeObserverSize"

declare type IsomorphicWindow = Window & {
	ResizeObserver?: typeof ResizeObserver
	ResizeObserverEntry?: typeof ResizeObserverEntry
	ResizeObserverSize?: typeof ResizeObserverSize
}
export declare const global: IsomorphicWindow
export {}
