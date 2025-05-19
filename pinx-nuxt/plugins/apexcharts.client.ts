import VueApexCharts from "vue3-apexcharts"

export default defineNuxtPlugin(nuxtApp => {
	if (import.meta.client) {
		nuxtApp.vueApp.use(VueApexCharts)
	}
})
