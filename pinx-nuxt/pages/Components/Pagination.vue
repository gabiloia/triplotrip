<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Pagination</div>
			<div class="links">
				<a
					href="https://www.naiveui.com/en-US/light/components/pagination"
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
				<n-space vertical>
					<n-pagination
						v-model:page="page"
						:page-count="100"
						size="small"
						show-quick-jumper
						show-size-picker
					/>
					<n-pagination
						v-model:page="page"
						:page-count="100"
						size="medium"
						show-quick-jumper
						show-size-picker
					/>
					<n-pagination
						v-model:page="page"
						:page-count="100"
						size="large"
						show-quick-jumper
						show-size-picker
					/>
				</n-space>
				<template #code="{ html, js }">
					{{ html(`
					<n-space vertical>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="small"
							show-quick-jumper
							show-size-picker
						/>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="medium"
							show-quick-jumper
							show-size-picker
						/>
						<n-pagination
							v-model:page="page"
							:page-count="100"
							size="large"
							show-quick-jumper
							show-size-picker
						/>
					</n-space>
					`) }}

					{{ js(`const page = ref(2)`) }}
				</template>
			</CardCodeExample>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Icon from "@/components/common/Icon.vue"
import { NPagination, NSpace } from "naive-ui"
import { ref } from "vue"

const ExternalIcon = "tabler:external-link"
const page = ref(2)
</script>
