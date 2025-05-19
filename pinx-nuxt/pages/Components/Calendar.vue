<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Calendar</div>
			<div class="links">
				<a
					href="https://www.naiveui.com/en-US/light/components/calendar"
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
				<n-calendar #="{ month, date, year }" @update:value="handleUpdateValue">
					{{ month }}-{{ date }}-{{ year }}
				</n-calendar>
				<template #code="{ html, js }">
					{{ html(`
					<n-calendar
						v-model:value="value"
						#="{ month, date, year }"
						:is-date-disabled="isDateDisabled"
						@update:value="handleUpdateValue"
					>
						\{\{ month \}\}-\{\{ date \}\}-\{\{ year \}\}
					</n-calendar>
					`) }}

					{{
						js(`
						const message = useMessage()

						function handleUpdateValue(_: number, {  month, date, year }: { month: number; date: number; year: number }) {
							message.success(\`\$\{month}-\$\{date}-\$\{year}\`)
						}
						`)
					}}
				</template>
			</CardCodeExample>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Icon from "@/components/common/Icon.vue"
import { NCalendar, useMessage } from "naive-ui"

const ExternalIcon = "tabler:external-link"

const message = useMessage()

function handleUpdateValue(_: number, { month, date, year }: { month: number; date: number; year: number }) {
	message.success(`${month}-${date}-${year}`)
}
</script>
