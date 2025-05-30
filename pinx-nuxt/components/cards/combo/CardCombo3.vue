<template>
	<n-card content-class="p-0!" hoverable>
		<div class="card-wrap flex flex-col">
			<div class="overlay" :class="{ twoSeries }">
				<div class="info">
					<div class="title">
						<span>Updated at</span>
						<span class="time">&nbsp;{{ updateTime }}</span>
					</div>

					<div class="box-wrapper flex">
						<CardCombo4
							title="Users"
							val-string="248.3K"
							percentage
							:percentage-props="{
								value: 2.45,
								direction: 'up'
							}"
						/>
						<CardCombo4
							v-if="twoSeries"
							title="Sales"
							val-string="$37.5K"
							percentage
							:percentage-props="{
								value: 1.96,
								direction: 'down'
							}"
						/>
					</div>
				</div>
				<div class="toolbar flex gap-2">
					<div v-if="twoSeries" class="flex gap-2">
						<n-button
							v-for="series of chartSeries"
							:key="series.name"
							secondary
							:type="series.active ? 'default' : 'tertiary'"
							@click="toggleSeries(series)"
						>
							<div class="flex items-center gap-2">
								<Icon :size="12" :color="series.color" :name="DotIcon" />
								<span>
									{{ series.name }}
								</span>
							</div>
						</n-button>
					</div>
					<n-popselect
						v-model:value="chartTypeValue"
						:options="[
							{ label: 'Years', value: 'years' },
							{ label: 'Months', value: 'months' },
							{ label: 'Week', value: 'week' }
						]"
					>
						<n-button secondary>
							<div class="flex items-center gap-2">
								<Icon :size="14" :name="TimeIcon" />
								<span>
									{{ capitalized(chartTypeValue) }}
								</span>
							</div>
						</n-button>
					</n-popselect>
				</div>
			</div>
			<n-spin :show="!loaded" class="chart grow">
				<DemoChart
					v-if="loaded"
					type="area"
					:series-list="twoSeries ? ['Users', 'Sales'] : ['Users']"
					use-palette
					:data-type="chartTypeValue"
					:stroke-width="2"
					hide-legend
					:legend-offset="130"
					:font-color="textSecondaryColor"
					@mounted="setChartContext"
				/>
			</n-spin>
		</div>
	</n-card>
</template>

<script setup lang="ts">
import type { DataType, VueApexChartsComponent } from "@/components/charts/DemoApex.vue"
import type { ApexOptions } from "apexcharts"
import DemoChart from "@/components/charts/DemoApex.vue"
import Icon from "@/components/common/Icon.vue"
import { useThemeStore } from "@/stores/theme"
import dayjs from "@/utils/dayjs"
import { NButton, NCard, NPopselect, NSpin } from "naive-ui"
import { computed, onMounted, ref } from "vue"

interface ChartSeries {
	active: boolean
	name: string
	color: string
}
type ChartSeriesList = ChartSeries[]

const { oneSeries = false } = defineProps<{
	oneSeries?: boolean
}>()

const DotIcon = "carbon:circle-solid"
const TimeIcon = "carbon:time"

const themeStore = useThemeStore()

const twoSeries = computed(() => !oneSeries)
const textSecondaryColor = computed(() => themeStore.style["fg-secondary-color"])
const loaded = ref(false)

const updateTime = ref(dayjs().format("DD-MM-YYYY HH:mm"))
const chartTypeValue = ref<DataType>("years")

const chartCTX = ref<VueApexChartsComponent | null>(null)
const chartSeries = ref<ChartSeriesList>([])

function setChartContext(ctx: VueApexChartsComponent) {
	chartCTX.value = ctx
	getSeries()
}

function toggleSeries(series: ChartSeries) {
	if (chartCTX.value) {
		series.active = !series.active
		chartCTX.value.toggleSeries(series.name)
	}
}

function getSeries() {
	const chartColors: string[] = chartCTX.value?.options?.colors || []
	// @ts-expect-error "map" doesn't map series correctly
	chartSeries.value = (chartCTX.value?.series || []).map((s: ApexOptions["series"], index: number) => {
		return {
			active: true,
			// @ts-expect-error expect "s" as series
			name: s.name,
			color: chartColors[index % chartColors.length]
		}
	})
}

function capitalized(text: string) {
	const capitalizedFirst = text[0].toUpperCase()
	const rest = text.slice(1)

	return capitalizedFirst + rest
}

onMounted(() => {
	setTimeout(() => {
		loaded.value = true
	}, 1000)
})
</script>

<style scoped lang="scss">
.n-card {
	.card-wrap {
		position: relative;
		height: 100%;
		container-type: inline-size;

		.chart {
			overflow: hidden;
			width: 100%;
			padding-top: 40px;
			padding-bottom: 24px;

			:deep() {
				.n-spin-content {
					height: 100%;
					min-height: 300px;
				}
			}
		}

		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1;
			padding: 26px;
			overflow: hidden;
			display: flex;
			justify-content: space-between;

			.info {
				position: relative;
				width: fit-content;
				margin: -12px;
				padding: 12px;

				&::after {
					content: "";
					width: 100%;
					height: 100%;
					position: absolute;
					display: block;
					top: 0;
					left: 0;
					z-index: -1;
					backdrop-filter: blur(6px);
					mask-image: radial-gradient(
						farthest-side,
						rgba(0, 0, 0, 1) 0%,
						rgba(0, 0, 0, 0.96) 70%,
						rgba(0, 0, 0, 0.8) 80%,
						rgba(0, 0, 0, 0) 100%
					);
				}

				.title {
					color: var(--fg-secondary-color);
					letter-spacing: 0.1em;
					text-transform: uppercase;
					font-size: 10px;
					font-weight: bold;
				}
				.box-wrapper {
					gap: 40px;
				}
			}
			&.twoSeries {
				.info {
					.box-wrapper {
						margin-top: 20px;
					}
				}
			}
		}

		@container (max-width: 650px) {
			.overlay {
				&.twoSeries {
					flex-direction: column-reverse;
				}

				.info {
					.title {
						display: none;
					}
				}
			}
		}

		@container (max-width: 280px) {
			.overlay {
				flex-direction: column-reverse;

				.info {
					.box-wrapper {
						margin-top: 20px;
					}
				}
			}
		}
	}
}
</style>
