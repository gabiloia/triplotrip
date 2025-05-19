<template>
	<div class="navigator flex items-center">
		<div class="nav-btns flex items-center gap-2">
			<span class="opacity-70">1 - 30 of 635</span>
			<n-button text size="small">
				<Icon :size="24" :name="ChevronLeftIcon" />
			</n-button>
			<n-button text size="small">
				<Icon :size="24" :name="ChevronRightIcon" />
			</n-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import Icon from "@/components/common/Icon.vue"
import { NButton } from "naive-ui"

const ChevronLeftIcon = "carbon:chevron-left"
const ChevronRightIcon = "carbon:chevron-right"
</script>

<style lang="scss" scoped>
.navigator {
	@container (max-width:600px) {
		.nav-btns {
			span {
				display: none;
			}
		}
	}
}
</style>
