<template>
	<div class="page">
		<div class="page-header">
			<div class="title">ApexCharts</div>
			<div class="links">
				<a href="https://apexcharts.com/" target="_blank" alt="docs" rel="nofollow noopener noreferrer">
					<Icon :name="ExternalIcon" :size="16" />
					docs
				</a>
			</div>
		</div>

		<div class="components-list">
			<n-spin v-if="!mounted" class="h-full w-full" />
			<Brush v-if="mounted" />
			<Realtime v-if="mounted" />
			<Sync v-if="mounted" />
			<Column v-if="mounted" />
			<Bar v-if="mounted" />
			<div class="flex flex-col gap-5 lg:flex-row">
				<div class="basis-full lg:min-h-full lg:basis-1/2">
					<Pie v-if="mounted" />
				</div>
				<div class="basis-full lg:min-h-full lg:basis-1/2">
					<Radar v-if="mounted" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Icon from "@/components/common/Icon.vue"
import { useThemeStore } from "@/stores/theme"
import { NSpin } from "naive-ui"
import { defineAsyncComponent, onMounted, ref } from "vue"

const ExternalIcon = "tabler:external-link"
const Brush = defineAsyncComponent(() => import("@/components/charts/demo-pages/apex-charts-components/Brush.vue"))
const Realtime = defineAsyncComponent(
	() => import("@/components/charts/demo-pages/apex-charts-components/Realtime.vue")
)
const Sync = defineAsyncComponent(() => import("@/components/charts/demo-pages/apex-charts-components/Sync.vue"))
const Column = defineAsyncComponent(() => import("@/components/charts/demo-pages/apex-charts-components/Column.vue"))
const Bar = defineAsyncComponent(() => import("@/components/charts/demo-pages/apex-charts-components/Bar.vue"))
const Pie = defineAsyncComponent(() => import("@/components/charts/demo-pages/apex-charts-components/Pie.vue"))
const Radar = defineAsyncComponent(() => import("@/components/charts/demo-pages/apex-charts-components/Radar.vue"))
const mounted = ref(false)
const themeStore = useThemeStore()

definePageMeta({
	alias: ["/charts"]
})

onMounted(() => {
	const duration = 1000 * themeStore.routerTransitionDuration
	const gap = 500

	// TIMEOUT REQUIRED BY PAGE ANIMATION
	setTimeout(() => {
		mounted.value = true
	}, duration + gap)
})
</script>

<style scoped lang="scss">
.components-list {
	grid-template-columns: none;
}
</style>
