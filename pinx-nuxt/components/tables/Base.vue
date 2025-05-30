<template>
	<n-table>
		<thead>
			<tr>
				<th>Product</th>
				<th>Price</th>
				<th v-if="showDate">Date</th>
				<th>Stock</th>
				<th class="!text-right">Orders</th>
				<th v-if="showActions" class="!text-right">Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item of list" :key="item.id">
				<td>
					<div class="product flex items-center gap-3">
						<div class="product-image flex items-center">
							<n-image
								lazy
								:src="item.photo"
								:width="50"
								:height="50"
								:img-props="{ alt: 'product-image' }"
							/>
						</div>
						<div class="product-info">
							<div class="product-name">
								{{ item.name }}
							</div>
							<div class="product-category">
								{{ item.category }}
							</div>
						</div>
					</div>
				</td>
				<td>
					<div class="price">
						{{ item.price }}
					</div>
				</td>
				<td v-if="showDate">
					<div class="date">
						{{ item.date }}
					</div>
				</td>
				<td>
					<div class="stock">
						<n-tag :type="item.stock.type">
							{{ item.stock.name }}
						</n-tag>
					</div>
				</td>
				<td>
					<div class="orders flex items-center justify-end gap-3">
						<div class="orders-value">
							{{ item.orders }}
						</div>
						<div class="orders-percentage flex items-center">
							<n-progress
								type="circle"
								:percentage="item.percentage"
								:show-indicator="false"
								:stroke-width="18"
								class="w-5!"
							/>
						</div>
					</div>
				</td>
				<td v-if="showActions">
					<div class="actions flex items-center justify-end gap-2">
						<n-button secondary>
							<template #icon>
								<Icon :name="DeleteIcon" />
							</template>
						</n-button>
						<n-button secondary>
							<template #icon>
								<Icon :name="DownloadIcon" />
							</template>
						</n-button>
						<n-popselect
							:options="[
								{ label: 'Share', value: 'Share' },
								{ label: 'View', value: 'View' }
							]"
						>
							<n-button secondary>
								<template #icon>
									<Icon :name="MenuIcon" />
								</template>
							</n-button>
						</n-popselect>
					</div>
				</td>
			</tr>
		</tbody>
	</n-table>
</template>

<script lang="ts" setup>
import Icon from "@/components/common/Icon.vue"
import dayjs from "@/utils/dayjs"
import { faker } from "@faker-js/faker"
import _orderBy from "lodash/orderBy"
import { NButton, NImage, NPopselect, NProgress, NTable, NTag } from "naive-ui"
import { ref } from "vue"

const {
	rows = 5,
	showActions = false,
	showDate = false
} = defineProps<{
	rows?: number
	showActions?: boolean
	showDate?: boolean
}>()

const DeleteIcon = "carbon:delete"
const MenuIcon = "carbon:overflow-menu-vertical"
const DownloadIcon = "carbon:cloud-download"

const stock = [
	{
		name: "In stock",
		type: "success"
	},
	{
		name: "Out stock",
		type: "error"
	},
	{
		name: "Only 30",
		type: "warning"
	}
] as { name: string; type: "success" | "error" | "warning" }[]

const data = Array.from({ length: rows }, () => ({
	id: faker.string.nanoid(),
	name: faker.commerce.productName(),
	category: faker.commerce.product(),
	photo: faker.image.urlPicsumPhotos({ width: 240, height: 240 }),
	price: faker.commerce.price({ symbol: "$" }),
	stock: faker.helpers.arrayElement(stock),
	orders: faker.number.int({ min: 13, max: 1836 }),
	percentage: faker.number.int({ min: 0, max: 100 }),
	date: dayjs(faker.date.between({ from: dayjs().subtract(2, "w").toDate(), to: dayjs().toDate() })).format(
		"DD MMM YYYY"
	)
}))

const list = ref(_orderBy(data, ["date"], ["desc"]))
</script>

<style scoped lang="scss">
.product {
	.product-image {
		.n-image {
			:deep(img) {
				border-radius: var(--border-radius-small);
			}
		}
	}

	.product-info {
		.product-name {
			font-weight: 500;
			font-size: 16px;
			line-height: 1.2;
		}
		.product-category {
			opacity: 0.6;
		}
	}
}

.price {
	white-space: nowrap;
}

.orders {
	text-align: right;
	.orders-value {
		white-space: nowrap;
	}
}

.direction-rtl {
	.orders,
	.actions {
		justify-content: flex-start;
	}
}
</style>
