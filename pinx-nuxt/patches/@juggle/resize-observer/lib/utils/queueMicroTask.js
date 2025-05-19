let trigger
const callbacks = []
function notify() {
	return callbacks.splice(0).forEach(cb => {
		return cb()
	})
}
function queueMicroTask(callback) {
	if (!trigger) {
		let toggle_1 = 0
		const el_1 = document.createTextNode("")
		const config = { characterData: true }
		new MutationObserver(() => {
			return notify()
		}).observe(el_1, config)
		trigger = function () {
			el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++)
		}
	}
	callbacks.push(callback)
	trigger()
}
export { queueMicroTask }
