import { renderIcon } from "@/utils"
import { h } from "vue"
import { RouterLink } from "vue-router"

const PropiedadesIcon = "carbon:home"

export default {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: "Propiedades"
                    }
                },
                { default: () => "Mis Propiedades" }
            ),
        key: "Propiedades",
        icon: renderIcon(PropiedadesIcon)
}
