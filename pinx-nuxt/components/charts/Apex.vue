<template>
	<client-only>
		<apexchart v-if="ready" ref="chart" :width :height :type :options :series />
	</client-only>
</template>

<script lang="ts" setup>
import type { ApexOptions } from "apexcharts"
import { useThemeStore } from "@/stores/theme"
import { nextTick, onMounted, ref } from "vue"

export interface VueApexChartsComponent {
	type?:
		| "line"
		| "area"
		| "bar"
		| "histogram"
		| "pie"
		| "donut"
		| "radialBar"
		| "rangeBar"
		| "scatter"
		| "bubble"
		| "heatmap"
		| "candlestick"
		| "radar"
		| "polarArea"
	options?: ApexOptions
	series?: ApexOptions["series"]
	updateSeries: (newSeries: ApexOptions["series"], animate?: boolean) => Promise<void>
	refresh: () => Promise<void>
}

const { width, height, type, options, series } = defineProps<{
	width?: string | number
	height?: string | number
	type?: VueApexChartsComponent["type"]
	options?: VueApexChartsComponent["options"]
	series?: VueApexChartsComponent["series"]
}>()
const emit = defineEmits<{
	(e: "mounted", value: VueApexChartsComponent): void
}>()

const ready = ref(false)
const chart = ref<VueApexChartsComponent | null>()
const themeStore = useThemeStore()

onMounted(() =>
	nextTick(() => {
		const duration = 1000 * themeStore.routerTransitionDuration
		const gap = 500

		// TIMEOUT REQUIRED BY PAGE ANIMATION
		setTimeout(() => {
			ready.value = true

			setTimeout(() => {
				if (chart.value) {
					emit("mounted", chart.value)
				}
			}, 100)
		}, duration + gap)
	})
)
</script>
