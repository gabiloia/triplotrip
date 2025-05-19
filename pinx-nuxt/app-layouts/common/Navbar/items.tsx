import type { MenuMixedOption } from "naive-ui/es/menu/src/interface"

import authentication from "./authentication"
import calendars from "./calendars"
import dashboard from "./dashboard"
import propiedades from "./propiedades"

export default function getItems(args: { mode: "vertical" | "horizontal"; collapsed: boolean }): MenuMixedOption[] {
	return [
		dashboard,
		propiedades,
		calendars,
		{
			key: "divider-1",
			type: "divider",
			props: {
				style: {
					// marginLeft: "32px"
				}
			}
		},
		authentication
	]
}
