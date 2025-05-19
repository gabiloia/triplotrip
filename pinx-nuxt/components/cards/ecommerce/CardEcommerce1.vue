<template>
	<n-card hoverable>
		<template #cover>
			<img
				v-if="imagenUrl"
				:src="imagenUrl"
				alt="Foto principal"
				width="900"
				height="400"
			/>
		</template>
		<template #header>
			<span>{{ propiedad?.Titulo || 'Cargando título...' }}</span>
			<span class="text-secondary ml-3">$644,00</span>
		</template>
		<template #header-extra>
			<span class="flex items-center gap-3">
				<Icon :size="20" color="#FF0156" :name="HeartIcon" />
				<Icon :size="20" :name="ShareIcon" />
			</span>
		</template>
		<template #default>
			<p>
				{{ propiedad?.Descripcion || 'Cargando descripcion...' }}
			</p>
		</template>
		<template #action>
			<div class="flex items-center justify-between">
				<n-button type="primary" quaternary>Details</n-button>
				<n-button type="primary">
					<template #icon>
						<Icon :name="EditIcon" />
					</template>
					Editar
				</n-button>
			</div>
		</template>
	</n-card>
</template>

<script setup lang="ts">
import Icon from "@/components/common/Icon.vue"
import { NButton, NCard } from "naive-ui"
import { onMounted, ref } from "vue"

const EditIcon = "tabler:edit"
const HeartIcon = "ion:heart"
const ShareIcon = "carbon:share"

const propiedad = ref<any>(null)
const imagenUrl = ref<string | null>(null)

onMounted(async () => {
  try {
    const res = await fetch("http://localhost:1337/api/propiedades?populate=FotoPrincipal")
    const json = await res.json()
    const prop = json.data[0]
    propiedad.value = prop

    // Ahora obtenemos la imagen desde la estructura correcta
    const imagen = prop.FotoPrincipal?.formats?.medium?.url || prop.FotoPrincipal?.url
    if (imagen) {
      imagenUrl.value = `http://localhost:1337${imagen}`
    }
  } catch (err) {
    console.error("Error al cargar propiedad:", err)
  }
})
</script>