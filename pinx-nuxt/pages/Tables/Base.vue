<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Table Base</div>
			<div class="links">
				<a
					href="https://www.naiveui.com/en-US/light/components/table"
					target="_blank"
					alt="docs"
					rel="nofollow noopener noreferrer"
				>
					<Icon :name="ExternalIcon" :size="16" />
					docs
				</a>
			</div>
		</div>

		<div class="components-list">
			<CardCodeExample title="Basic">
				<n-scrollbar x-scrollable class="w-full!">
					<TableBase class="table-min-width" :bordered="false" />
				</n-scrollbar>
			</CardCodeExample>

			<CardCodeExample title="Bordered">
				<n-scrollbar x-scrollable class="w-full!">
					<TableBase class="table-min-width" :bordered="true" />
				</n-scrollbar>
			</CardCodeExample>

			<CardCodeExample title="Size">
				<n-scrollbar x-scrollable class="w-full!">
					<TableBase class="table-min-width mb-4" size="small" />
					<TableBase class="table-min-width" size="large" />
				</n-scrollbar>
			</CardCodeExample>

			<CardCodeExample title="Single column">
				<n-scrollbar x-scrollable class="w-full!">
					<TableBase class="table-min-width" single-column :single-line="false" />
				</n-scrollbar>
			</CardCodeExample>

			<CardCodeExample title="Single line">
				<n-scrollbar x-scrollable class="w-full!">
					<TableBase class="table-min-width" />
				</n-scrollbar>
			</CardCodeExample>

			<CardCodeExample title="Stripe">
				<n-scrollbar x-scrollable class="w-full!">
					<TableBase class="table-min-width" striped />
				</n-scrollbar>
			</CardCodeExample>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Icon from "@/components/common/Icon.vue"
import TableBase from "@/components/tables/Base.vue"
import { NScrollbar } from "naive-ui"

const ExternalIcon = "tabler:external-link"

definePageMeta({
	alias: ["/tables"]
})
</script>

<style scoped lang="scss">
.components-list {
	grid-template-columns: none;
}

.table-min-width {
	min-width: 480px;
}
</style>
