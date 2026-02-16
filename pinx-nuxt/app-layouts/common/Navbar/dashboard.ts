import { renderIcon } from "@/utils"
import { h } from "vue"
import { RouterLink } from "vue-router"

const DashboardIcon = "carbon:dashboard"

export default {
	key: "Dashboard-Analytics",
	icon: renderIcon(DashboardIcon),
	label: () =>
	h(
		RouterLink,
		{
			to: {
				name: "Dashboard-Analytics"
			}
		},
		{ default: () => "Analíticas" }
	)
}
