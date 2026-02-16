<template>
	<CardCodeExample title="Próximas Reservas">
		<n-space vertical :size="12">
			<n-space>
				<n-button @click="sortTitle">Ordenar por Título (Ascendente)</n-button>
				<n-button @click="clearFilters">Limpiar Filtros</n-button>
				<n-button @click="clearSorter">Limpiar Ordenamiento</n-button>
			</n-space>
			<n-data-table ref="dataTableInst" :columns="columns" :data="events" :pagination="pagination" />
		</n-space>
	</CardCodeExample>
</template>

<script setup>
import { NButton, NDataTable, NSpace } from 'naive-ui'
import { onMounted, ref } from 'vue'

const dataTableInst = ref(null)
const events = ref([])
const pagination = ref({ pageSize: 10 })

const columns = [
  {
    title: 'Título',
    key: 'title'
  },
  {
    title: 'Inicio',
    key: 'start'
  },
  {
    title: 'Fin',
    key: 'end'
  },
  {
    title: 'Excursión',
    key: 'excursion'
  }
]

function sortTitle() {
  dataTableInst.value.sort('title', 'ascend')
}

function clearFilters() {
  dataTableInst.value.filter(null)
}

function clearSorter() {
  dataTableInst.value.sort(null)
}

onMounted(async () => {
  try {
    const token = localStorage.getItem('auth_token')
    if (!token) throw new Error('No autenticado')

    const user = await $fetch('https://admin.triplotrip.com/api/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    })

    const res = await $fetch(`https://admin.triplotrip.com/api/events?filters[user][documentId][$eq]=${user.documentId}&populate=*`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    events.value = (res.data || []).map(evt => ({
      key: evt.id,
      title: evt.Title,
      start: evt.Start,
      end: evt.End,
      excursion: evt.excursion?.Nombre || 'Sin info'
    }))
  } catch (err) {
    console.error('Error al cargar eventos:', err)
  }
})
</script>
