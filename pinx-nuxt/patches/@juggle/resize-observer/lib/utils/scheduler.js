import { global } from "./global"
import { process } from "./process"
import { queueResizeObserver } from "./queueResizeObserver"

let watching = 0
function isWatching() {
	return !!watching
}
const CATCH_PERIOD = 250
const observerConfig = { attributes: true, characterData: true, childList: true, subtree: true }
const events = [
	"resize",
	"load",
	"transitionend",
	"animationend",
	"animationstart",
	"animationiteration",
	"keyup",
	"keydown",
	"mouseup",
	"mousedown",
	"mouseover",
	"mouseout",
	"blur",
	"focus"
]
function time(timeout) {
	if (timeout === void 0) {
		timeout = 0
	}
	return Date.now() + timeout
}
let scheduled = false
const Scheduler = (function () {
	function Scheduler() {
		const _this = this
		this.stopped = true
		this.listener = function () {
			return _this.schedule()
		}
	}
	Scheduler.prototype.run = function (timeout) {
		const _this = this
		if (timeout === void 0) {
			timeout = CATCH_PERIOD
		}
		if (scheduled) {
			return
		}
		scheduled = true
		const until = time(timeout)
		queueResizeObserver(() => {
			let elementsHaveResized = false
			try {
				elementsHaveResized = process()
			} finally {
				scheduled = false
				timeout = until - time()
				if (!isWatching()) {
					return
				}
				if (elementsHaveResized) {
					_this.run(1000)
				} else if (timeout > 0) {
					_this.run(timeout)
				} else {
					_this.start()
				}
			}
		})
	}
	Scheduler.prototype.schedule = function () {
		this.stop()
		this.run()
	}
	Scheduler.prototype.observe = function () {
		const _this = this
		const cb = function () {
			return _this.observer && _this.observer.observe(document.body, observerConfig)
		}
		document.body ? cb() : global.addEventListener("DOMContentLoaded", cb)
	}
	Scheduler.prototype.start = function () {
		const _this = this
		if (this.stopped) {
			this.stopped = false
			this.observer = new MutationObserver(this.listener)
			this.observe()
			events.forEach(name => {
				return global.addEventListener(name, _this.listener, true)
			})
		}
	}
	Scheduler.prototype.stop = function () {
		const _this = this
		if (!this.stopped) {
			this.observer && this.observer.disconnect()
			events.forEach(name => {
				return global.removeEventListener(name, _this.listener, true)
			})
			this.stopped = true
		}
	}
	return Scheduler
})()
const scheduler = new Scheduler()
function updateCount(n) {
	!watching && n > 0 && scheduler.start()
	watching += n
	!watching && scheduler.stop()
}
export { scheduler, updateCount }
