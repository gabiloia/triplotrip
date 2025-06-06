<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Cascader</div>
			<div class="links">
				<a
					href="https://www.naiveui.com/en-US/light/components/cascader"
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
					<n-space>
						<n-space>
							<n-switch v-model:value="multiple" />
							Multiple
						</n-space>
						<n-space>
							<n-switch v-model:value="checkStrategyIsChild" />
							Child Check Strategy
						</n-space>
						<n-space>
							<n-switch v-model:value="cascade" />
							Cascade
						</n-space>
						<n-space>
							<n-switch v-model:value="showPath" />
							Show Path
						</n-space>
						<n-space>
							<n-switch v-model:value="hoverTrigger" />
							Hover Trigger
						</n-space>
						<n-space>
							<n-switch v-model:value="filterable" />
							Filterable
						</n-space>
						<n-space>
							<n-switch v-model:value="responsiveMaxTagCount" />
							Responsive MaxTagCount
						</n-space>
						<n-space>
							<n-switch v-model:value="clearFilterAfterSelect" />
							clearFilterAfterSelect
						</n-space>
					</n-space>
					<n-cascader
						v-model:value="value"
						:multiple="multiple"
						placeholder="Meaningless values"
						clearable
						:max-tag-count="responsiveMaxTagCount ? 'responsive' : undefined"
						:expand-trigger="hoverTrigger ? 'hover' : 'click'"
						:options
						:cascade="cascade"
						:check-strategy="checkStrategyIsChild ? 'child' : 'all'"
						:show-path="showPath"
						:filterable="filterable"
						:clear-filter-after-select="clearFilterAfterSelect"
						@update:value="handleUpdateValue"
					/>
				</n-space>
				<template #code="{ html, js }">
					{{ html(`
					<n-space vertical>
						<n-space>
							<n-space>
								<n-switch v-model:value="multiple" />
								Multiple
							</n-space>
							<n-space>
								<n-switch v-model:value="checkStrategyIsChild" />
								Child Check Strategy
							</n-space>
							<n-space>
								<n-switch v-model:value="cascade" />
								Cascade
							</n-space>
							<n-space>
								<n-switch v-model:value="showPath" />
								Show Path
							</n-space>
							<n-space>
								<n-switch v-model:value="hoverTrigger" />
								Hover Trigger
							</n-space>
							<n-space>
								<n-switch v-model:value="filterable" />
								Filterable
							</n-space>
							<n-space>
								<n-switch v-model:value="responsiveMaxTagCount" />
								Responsive MaxTagCount
							</n-space>
							<n-space>
								<n-switch v-model:value="clearFilterAfterSelect" />
								clearFilterAfterSelect
							</n-space>
						</n-space>
						<n-cascader
							v-model:value="value"
							:multiple="multiple"
							placeholder="Meaningless values"
							clearable
							:max-tag-count="responsiveMaxTagCount ? 'responsive' : undefined"
							:expand-trigger="hoverTrigger ? 'hover' : 'click'"
							:options
							:cascade="cascade"
							:check-strategy="checkStrategyIsChild ? 'child' : 'all'"
							:show-path="showPath"
							:filterable="filterable"
							:clear-filter-after-select="clearFilterAfterSelect"
							@update:value="handleUpdateValue"
						/>
					</n-space>
					`) }}

					{{
						js(`
						function getOptions(depth = 3, iterator = 1, prefix = "") {
							const length = 12
							const options: CascaderOption[] = []
							for (let i = 1; i <= length; ++i) {
								if (iterator === 1) {
									options.push({
										value: \`v-\${i}\`,
										label: \`l-\${i}\`,
										disabled: i % 5 === 0,
										children: getOptions(depth, iterator + 1, "" + String(i))
									})
								} else if (iterator === depth) {
									options.push({
										value: \`v-\${prefix}-\${i}\`,
										label: \`l-\${prefix}-\${i}\`,
										disabled: i % 5 === 0
									})
								} else {
									options.push({
										value: \`v-\${prefix}-\${i}\`,
										label: \`l-\${prefix}-\${i}\`,
										disabled: i % 5 === 0,
										children: getOptions(depth, iterator + 1, \`\${prefix}-\${i}\`)
									})
								}
							}
							return options
						}

						const checkStrategyIsChild = ref(true)
						const cascade = ref(true)
						const multiple = ref(true)
						const showPath = ref(true)
						const hoverTrigger = ref(false)
						const value = ref(null)
						const filterable = ref(false)
						const responsiveMaxTagCount = ref(true)
						const clearFilterAfterSelect = ref(true)
						const options = getOptions()
						function handleUpdateValue(value: string[], options: CascaderOption[]) {
							console.log(value, options)
						}
						`)
					}}
				</template>
			</CardCodeExample>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { CascaderOption } from "naive-ui"
import Icon from "@/components/common/Icon.vue"
import { NCascader, NSpace, NSwitch } from "naive-ui"
import { ref } from "vue"

const ExternalIcon = "tabler:external-link"
const checkStrategyIsChild = ref(true)
const cascade = ref(true)
const multiple = ref(true)
const showPath = ref(true)
const hoverTrigger = ref(false)
const value = ref(null)
const filterable = ref(false)
const responsiveMaxTagCount = ref(true)
const clearFilterAfterSelect = ref(true)
const options = getOptions()

function getOptions(depth = 3, iterator = 1, prefix = "") {
	const length = 12
	const options: CascaderOption[] = []
	for (let i = 1; i <= length; ++i) {
		if (iterator === 1) {
			options.push({
				value: `v-${i}`,
				label: `l-${i}`,
				disabled: i % 5 === 0,
				children: getOptions(depth, iterator + 1, `${String(i)}`)
			})
		} else if (iterator === depth) {
			options.push({
				value: `v-${prefix}-${i}`,
				label: `l-${prefix}-${i}`,
				disabled: i % 5 === 0
			})
		} else {
			options.push({
				value: `v-${prefix}-${i}`,
				label: `l-${prefix}-${i}`,
				disabled: i % 5 === 0,
				children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
			})
		}
	}
	return options
}

function handleUpdateValue(value: string[], options: CascaderOption[]) {
	// eslint-disable-next-line no-console
	console.log(value, options)
}
</script>
