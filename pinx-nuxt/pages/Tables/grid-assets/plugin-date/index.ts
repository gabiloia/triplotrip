import type { ColumnRegular, EditCell, EditorBase, HyperFunc, VNode } from "@revolist/revogrid"
import dayjs from "@/utils/dayjs"
import icon from "./calendar.svg?url"

function ColumnRenderer(h: HyperFunc<VNode[]>, { model, prop }: ColumnRegular): VNode[] {
	const val = model[prop]
	const isValid = dayjs(val).isValid()
	return h(
		"span",
		{
			style: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center"
			}
		},
		[
			isValid ? dayjs(val).format("DD/MM/YYYY") : val,
			h("img", {
				width: 14,
				src: icon
			})
		]
	)
}

class DateEditor implements EditorBase {
	public element: Element | null = null
	public editCell: EditCell | undefined

	constructor(
		public column: ColumnRegular,
		private saveCallback: (value: string | number) => void
		// private closeCallback: () => void
	) {}

	// optional, called after editor rendered
	componentDidRender() {}

	// optional, called after editor destroyed
	disconnectedCallback() {}

	render(createComponent: HyperFunc<VNode>) {
		let val = ""
		if (this?.editCell) {
			const model = this?.editCell.model || {}
			val = model[this?.editCell?.prop] || ""
		}

		return createComponent("input", {
			type: "date",
			value: val,
			style: {
				margin: "0 15px",
				width: " calc(100% - 30px)",
				height: "100%"
			},
			onChange: (event: Event) => {
				const inputElement = event.target as HTMLInputElement
				this.saveCallback(inputElement?.value)
			}
		})
	}
}

export default class ColumnType {
	constructor() {}

	readonly editor = DateEditor

	readonly cellTemplate = ColumnRenderer
}
