import type { MenuMixedOption } from "naive-ui/es/menu/src/interface"
import { NBadge } from "naive-ui"
import { h } from "vue"
import { RouterLink } from "vue-router"
import { renderIcon } from "@/utils"

import calendars from "./calendars"
import dashboard from "./dashboard"

const PropiedadesIcon = "fluent:building-home-24-regular"
const ReservasIcon = "fluent:calendar-clock-16-regular"

export default function getItems(args: { mode: "vertical" | "horizontal"; collapsed: boolean }): MenuMixedOption[] {
	return [
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Reservas"
						}
					},
					{ default: () => "Reservas" }
				),
			key: "Reservas",
			icon: renderIcon(ReservasIcon)
		},
		calendars,
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Propiedades"
						}
					},
					{ default: () => "Propiedades" }
				),
			key: "Propiedades",
			icon: renderIcon(PropiedadesIcon)
		},
		dashboard
	]
}
