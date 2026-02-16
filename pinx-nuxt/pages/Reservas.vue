<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Reservas</div>
		</div>

		<div class="components-list">
			<Sorting />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Sorting from "@/pages/Components/data-table-components/Sorting.vue"

definePageMeta({
	alias: ["/", "/reservas"],
	auth: true
	// roles: "all" // Remover esta línea
})
</script>

<style lang="scss" scoped>
.components-list {
	grid-template-columns: none;
}
</style>
