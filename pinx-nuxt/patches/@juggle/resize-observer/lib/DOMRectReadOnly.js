import { freeze } from "./utils/freeze"

const DOMRectReadOnly = (function () {
	function DOMRectReadOnly(x, y, width, height) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.top = this.y
		this.left = this.x
		this.bottom = this.top + this.height
		this.right = this.left + this.width
		return freeze(this)
	}
	DOMRectReadOnly.prototype.toJSON = function () {
		const _a = this
		const x = _a.x
		const y = _a.y
		const top = _a.top
		const right = _a.right
		const bottom = _a.bottom
		const left = _a.left
		const width = _a.width
		const height = _a.height
		return { x, y, top, right, bottom, left, width, height }
	}
	DOMRectReadOnly.fromRect = function (rectangle) {
		return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
	}
	return DOMRectReadOnly
})()
export { DOMRectReadOnly }
