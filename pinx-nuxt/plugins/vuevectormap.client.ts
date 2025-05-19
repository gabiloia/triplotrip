import VueVectorMap from "vuevectormap"
import "jsvectormap/src/scss/jsvectormap.scss"
// Import your preferred map
import "jsvectormap/dist/maps/world-merc"

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(VueVectorMap)
})
