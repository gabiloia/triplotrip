import { freeze } from "./utils/freeze"

const ResizeObserverSize = (function () {
	function ResizeObserverSize(inlineSize, blockSize) {
		this.inlineSize = inlineSize
		this.blockSize = blockSize
		freeze(this)
	}
	return ResizeObserverSize
})()
export { ResizeObserverSize }
