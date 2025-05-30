<template>
	<CardCodeExample title="Merge Cell">
		<template #description>
			Set colspan and rowspan by setting
			<n-text code>colSpan</n-text>
			and
			<n-text code>rowSpan</n-text>
			of column object. Set colspan in header by setting
			<n-text code>titleColSpan</n-text>
			of column object
		</template>

		<n-data-table :columns :data :pagination :single-line="false" />
	</CardCodeExample>
</template>

<script>
import { NButton, NDataTable, NTag, NText, useMessage } from "naive-ui"
import { defineComponent, h } from "vue"

function createColumns({ sendMail }) {
	return [
		{
			title: "Name",
			key: "name",
			minWidth: 150,
			rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
			colSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1)
		},
		{
			title: "Age",
			key: "age",
			minWidth: 60
		},
		{
			title: "Address",
			key: "address",
			minWidth: 200,
			colSpan: (rowData, rowIndex) => (rowIndex === 2 ? 2 : 1)
		},
		{
			title: "Tags",
			key: "tags",
			render(row) {
				const tags = row.tags.map(tagKey => {
					return h(
						NTag,
						{
							style: {
								marginRight: "6px"
							},
							type: "info",
							bordered: false
						},
						{
							default: () => tagKey
						}
					)
				})
				return tags
			}
		},
		{
			title: "Action",
			key: "actions",
			rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
			render(row) {
				return h(
					NButton,
					{
						size: "small",
						onClick: () => sendMail(row)
					},
					{ default: () => "Send Email" }
				)
			}
		}
	]
}

function createData() {
	return [
		{
			key: 0,
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
			tags: ["nice", "developer"]
		},
		{
			key: 1,
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
			tags: ["wow"]
		},
		{
			key: 2,
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
			tags: ["cool", "teacher"]
		}
	]
}

export default defineComponent({
	components: { NDataTable, NText },
	setup() {
		const message = useMessage()
		return {
			data: createData(),
			columns: createColumns({
				sendMail(rowData) {
					message.info(`send mail to ${rowData.name}`)
				}
			}),
			pagination: {
				pageSize: 10
			}
		}
	}
})
</script>
