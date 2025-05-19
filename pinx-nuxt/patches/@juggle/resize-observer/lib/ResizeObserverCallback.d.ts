import type { ResizeObserver } from "./ResizeObserver"
import type { ResizeObserverEntry } from "./ResizeObserverEntry"

declare type ResizeObserverCallback = (entries: ResizeObserverEntry[], observer: ResizeObserver) => void
export { ResizeObserverCallback }
