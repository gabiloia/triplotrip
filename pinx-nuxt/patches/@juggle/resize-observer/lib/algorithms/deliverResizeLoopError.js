const msg = "ResizeObserver loop completed with undelivered notifications."
function deliverResizeLoopError() {
	let event
	if (typeof ErrorEvent === "function") {
		event = new ErrorEvent("error", {
			message: msg
		})
	} else {
		event = document.createEvent("Event")
		event.initEvent("error", false, false)
		event.message = msg
	}
	window.dispatchEvent(event)
}
export { deliverResizeLoopError }
