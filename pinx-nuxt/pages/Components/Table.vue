<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Table</div>
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
				<n-table :bordered="false" :single-line="false">
					<thead>
						<tr>
							<th>Abandon</th>
							<th>Abnormal</th>
							<th>Abolish</th>
							<th>...</th>
							<th>It's hard to learn words</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>hard</td>
							<td>those</td>
							<td>words</td>
							<td>...</td>
							<td>Damn it! I can't remember those words.</td>
						</tr>
						<tr>
							<td>...</td>
							<td>...</td>
							<td>...</td>
							<td>...</td>
							<td>...</td>
						</tr>
					</tbody>
				</n-table>
				<template #code="{ html }">
					{{ html(`
					<n-table :bordered="false" :single-line="false">
						<thead>
							<tr>
								<th>Abandon</th>
								<th>Abnormal</th>
								<th>Abolish</th>
								<th>...</th>
								<th>It's hard to learn words</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>hard</td>
								<td>those</td>
								<td>words</td>
								<td>...</td>
								<td>Damn it! I can't remember those words.</td>
							</tr>
							<tr>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
							</tr>
						</tbody>
					</n-table>
					`) }}
				</template>
			</CardCodeExample>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Icon from "@/components/common/Icon.vue"
import { NTable } from "naive-ui"

const ExternalIcon = "tabler:external-link"
</script>
