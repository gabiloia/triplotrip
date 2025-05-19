import { isHidden } from "../utils/element"

function calculateDepthForNode(node) {
	if (isHidden(node)) {
		return Infinity
	}
	let depth = 0
	let parent = node.parentNode
	while (parent) {
		depth += 1
		parent = parent.parentNode
	}
	return depth
}
export { calculateDepthForNode }
