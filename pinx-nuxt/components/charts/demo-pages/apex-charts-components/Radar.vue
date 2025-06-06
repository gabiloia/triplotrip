<template>
	<CardCodeExample title="Radar" class="card grid!">
		<Apex type="radar" width="100%" :options="chartOptions" :series="series" />
	</CardCodeExample>
</template>

<script setup lang="ts">
import type { ApexOptions } from "apexcharts"
import Apex from "@/components/charts/Apex.vue"
import { useThemeStore } from "@/stores/theme"
import { computed, ref, watch } from "vue"

const themeStore = useThemeStore()
const isThemeDark = computed(() => themeStore.isThemeDark)
const style = computed(() => themeStore.style)

const series = ref([
	{
		name: "Series 1",
		data: [20, 100, 40, 30, 50, 80, 33]
	}
])

function getOptions(): ApexOptions {
	return {
		chart: {
			width: "100%",
			type: "radar",
			toolbar: {
				show: false
			}
		},
		dataLabels: {
			enabled: true
		},
		plotOptions: {
			radar: {
				// size: 140,
				polygons: {
					strokeColors: style.value["bg-default-color"],
					fill: {
						colors: [style.value["bg-body-color"], style.value["bg-default-color"]]
					}
				}
			}
		},
		colors: [style.value["primary-color"]],
		markers: {
			size: 4,
			colors: ["#fff"],
			strokeColors: [style.value["primary-color"]],
			strokeWidth: 2
		},
		tooltip: {
			y: {
				formatter(val: number) {
					return val.toString()
				}
			},
			theme: isThemeDark.value ? "dark" : "light"
		},
		xaxis: {
			categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			labels: {
				style: {
					colors: [style.value["fg-default-color"]]
				}
			}
		},
		yaxis: {
			tickAmount: 7,
			labels: {
				style: {
					colors: [style.value["fg-default-color"]]
				},
				formatter(val: number, i: number) {
					if (i % 2 === 0) {
						return val.toString()
					} else {
						return ""
					}
				}
			}
		}
	}
}

const chartOptions = ref(getOptions())

watch(style, () => {
	chartOptions.value = getOptions()
})
</script>

<style scoped lang="scss">
.card {
	height: 100%;
	:deep(.n-card-header) {
		height: 68px;
	}

	:deep() {
		.apexcharts-text {
			fill: var(--fg-secondary-color);
		}
	}
}
</style>
