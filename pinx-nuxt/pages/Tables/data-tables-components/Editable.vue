<template>
	<CardCodeExample title="Editable">
		<n-data-table
			:key="row => row.key"
			:columns
			:data
			:pagination="paginationRef"
			:on-update:page="handlePageChange"
		/>
	</CardCodeExample>
</template>

<script>
import { useWindowSize } from "@vueuse/core"
import { NDataTable, NInput } from "naive-ui"
import { computed, defineComponent, h, nextTick, ref } from "vue"

function createData() {
	return Array.from({ length: 100 }, (_, index) => ({
		key: index,
		name: `John Brown ${index}`,
		age: (Math.random() * 40) | 0,
		address: `New York No. ${index} Lake Park`
	}))
}

const ShowOrEdit = defineComponent({
	props: {
		value: [String, Number],
		onUpdateValue: [Function, Array]
	},
	setup(props) {
		const isEdit = ref(false)
		const inputRef = ref(null)
		const inputValue = ref(props.value)
		function handleOnClick() {
			isEdit.value = true
			nextTick(() => {
				inputRef.value.focus()
			})
		}
		function handleChange() {
			props.onUpdateValue(inputValue.value)
			isEdit.value = false
		}
		return () =>
			h(
				"div",
				{
					style: "min-height: 22px",
					onClick: handleOnClick
				},
				isEdit.value
					? h(NInput, {
							ref: inputRef,
							value: inputValue.value,
							onUpdateValue: v => {
								inputValue.value = v
							},
							onChange: handleChange,
							onBlur: handleChange
						}) /* eslint  no-mixed-spaces-and-tabs: "off" */
					: props.value
			)
	}
})

export default defineComponent({
	components: { NDataTable },
	setup() {
		const data = ref(createData())

		const getDataIndex = key => {
			return data.value.findIndex(item => item.key === key)
		}
		const page = ref(1)

		const handlePageChange = curPage => {
			page.value = curPage
		}

		const { width } = useWindowSize()

		const paginationRef = computed(() => ({
			pageSize: 10,
			simple: width.value < 500,
			page: page.value
		}))

		return {
			data,
			paginationRef,
			handlePageChange,
			columns: [
				{
					title: "Name",
					key: "name",
					width: 150,
					render(row) {
						const index = getDataIndex(row.key)
						return h(ShowOrEdit, {
							value: row.name,
							onUpdateValue(v) {
								data.value[index].name = v
							}
						})
					}
				},
				{
					title: "Age",
					key: "age",
					width: 100,
					render(row) {
						const index = getDataIndex(row.key)
						return h(ShowOrEdit, {
							value: row.age,
							onUpdateValue(v) {
								data.value[index].age = v
							}
						})
					}
				},
				{
					title: "Address",
					key: "address",
					render(row) {
						const index = getDataIndex(row.key)
						return h(ShowOrEdit, {
							value: row.address,
							onUpdateValue(v) {
								data.value[index].address = v
							}
						})
					}
				}
			]
		}
	}
})
</script>
