import { queueMicroTask } from "./queueMicroTask"

function queueResizeObserver(cb) {
	queueMicroTask(() => {
		requestAnimationFrame(cb)
	})
}
export { queueResizeObserver }
