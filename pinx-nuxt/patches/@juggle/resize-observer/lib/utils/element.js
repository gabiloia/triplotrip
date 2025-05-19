function isSVG(target) {
	return target instanceof SVGElement && "getBBox" in target
}
function isHidden(target) {
	if (isSVG(target)) {
		const _a = target.getBBox()
		const width = _a.width
		const height = _a.height
		return !width && !height
	}
	const _b = target
	const offsetWidth = _b.offsetWidth
	const offsetHeight = _b.offsetHeight
	return !(offsetWidth || offsetHeight || target.getClientRects().length)
}
function isElement(obj) {
	let _a
	if (obj instanceof Element) {
		return true
	}
	const scope =
		(_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0
			? void 0
			: _a.defaultView
	return !!(scope && obj instanceof scope.Element)
}
function isReplacedElement(target) {
	switch (target.tagName) {
		case "INPUT":
			if (target.type !== "image") {
				break
			}
		case "VIDEO":
		case "AUDIO":
		case "EMBED":
		case "OBJECT":
		case "CANVAS":
		case "IFRAME":
		case "IMG":
			return true
	}
	return false
}
export { isElement, isHidden, isReplacedElement, isSVG }
