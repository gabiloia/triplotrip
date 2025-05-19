import { renderIcon } from "@/utils"
import { h } from "vue"
import { RouterLink } from "vue-router"

const DashboardIcon = "carbon:dashboard"

export default {
	label: "Panel",
	key: "Dashboard",
	icon: renderIcon(DashboardIcon),
	children: [
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Dashboard-Analytics"
						}
					},
					{ default: () => "Analíticas" }
				),
			key: "Dashboard-Analytics"
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Dashboard-eCommerce"
						}
					},
					{ default: () => "Ventas" }
				),
			key: "Dashboard-eCommerce"
		}
	]
}
