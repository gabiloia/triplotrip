<template>
	<div class="page">
		<h1>Tests</h1>
		<ul>
			<li v-for="item in tests" :key="item.documentId">
				{{ item.title || "Sin título" }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

const tests = ref<any[]>([])

onMounted(async () => {
  try {
    const res = await fetch("https://admin.triplotrip.com/api/tests")
    const json = await res.json()
    tests.value = json.data.map((item: any) => ({
      ...item,
      documentId: item.documentId
    }))
  } catch (err) {
    console.error("Error al cargar tests:", err)
  }
})
</script>

<style scoped>
.page {
  padding: 2rem;
  font-family: sans-serif;
}
</style>