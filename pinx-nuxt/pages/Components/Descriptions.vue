<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Descriptions</div>
			<div class="links">
				<a
					href="https://www.naiveui.com/en-US/light/components/descriptions"
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
				<n-descriptions label-placement="top" title="Description">
					<n-descriptions-item>
						<template #label>Breakfast</template>
						Apple
					</n-descriptions-item>
					<n-descriptions-item label="Brunch">Apple</n-descriptions-item>
					<n-descriptions-item label="Lunch">Apple</n-descriptions-item>
					<n-descriptions-item label="Supper" :span="2">
						Two
						<br />
						Apples
					</n-descriptions-item>
					<n-descriptions-item label="Midnight Snack">Apple</n-descriptions-item>
				</n-descriptions>
				<template #code="{ html }">
					{{ html(`
					<n-descriptions label-placement="top" title="Description">
						<n-descriptions-item>
							<template #label>Breakfast</template>
							Apple
						</n-descriptions-item>
						<n-descriptions-item label="Brunch">Apple</n-descriptions-item>
						<n-descriptions-item label="Lunch">Apple</n-descriptions-item>
						<n-descriptions-item label="Supper" :span="2">
							Two
							<br />
							Apples
						</n-descriptions-item>
						<n-descriptions-item label="Midnight Snack">Apple</n-descriptions-item>
					</n-descriptions>
					`) }}
				</template>
			</CardCodeExample>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Icon from "@/components/common/Icon.vue"
import { NDescriptions, NDescriptionsItem } from "naive-ui"

const ExternalIcon = "tabler:external-link"
</script>
