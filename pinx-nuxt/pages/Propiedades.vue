<template>
	<div class="page">
		<h1>Propiedades</h1>
		<div class="masonry">
			<div
				v-for="prop in propiedades"
				:key="prop.documentId"
				class="card-wrap"
			>
				<n-card hoverable>
					<template #cover>
						<img
							v-if="getImagenUrl(prop)"
							:src="getImagenUrl(prop)"
							alt="Foto principal"
							width="900"
							height="400"
						/>
					</template>
					<template #header>
						<span>{{ prop.Titulo || "Cargando título..." }}</span>
					</template>
					<template #default>
						<p>{{ prop.Descripcion || "Cargando descripcion..." }}</p>
					</template>
					<template #action>
						<div class="flex items-center justify-between">
							<n-button type="primary" @click="abrirModal(prop)">
								<template #icon>
									<Icon :name="EditIcon" />
								</template>
								Editar
							</n-button>
						</div>
					</template>
				</n-card>
			</div>
		</div>

		<ModalEditarPropiedad
			:show="mostrarModal"
			:propiedad="propiedadSeleccionada"
			@update:show="mostrarModal = $event"
			@guardar="guardarEdicion"
		/>
	</div>
</template>

<script setup lang="ts">
import Icon from "@/components/common/Icon.vue"
import ModalEditarPropiedad from "@/components/propiedades/ModalEditarPropiedad.vue"
import { NButton, NCard } from "naive-ui"
import { onMounted, ref } from "vue"

const EditIcon = "tabler:edit"

const propiedades = ref<any[]>([])
const mostrarModal = ref(false)
const propiedadSeleccionada = ref<any | null>(null)

function getImagenUrl(prop: any) {
	const imagen = prop.FotoPrincipal?.formats?.medium?.url || prop.FotoPrincipal?.url
	return imagen ? `http://localhost:1337${imagen}` : null
}

function abrirModal(prop: any) {
	propiedadSeleccionada.value = prop
	mostrarModal.value = true
}

function guardarEdicion(propEditada: any) {
	const index = propiedades.value.findIndex(p => p.documentId === propEditada.documentId)
	if (index !== -1) {
		propiedades.value[index] = { ...propEditada }
	}
}

onMounted(async () => {
	try {
		const res = await fetch("http://localhost:1337/api/propiedades?populate=FotoPrincipal")
		const json = await res.json()
		propiedades.value = json.data.map((p: any) => ({
			...p,
			documentId: p.documentId // Aseguramos que esté disponible
		}))
	} catch (err) {
		console.error("Error al cargar propiedades:", err)
	}
})
</script>

<style lang="scss" scoped>
.page {
	container-type: inline-size;

	.masonry {
		--card-gap: 1.25em;
		column-count: 3;
		column-gap: var(--card-gap);

		@container (min-width: 1600px) {
			column-count: 4;
		}

		@container (max-width: 1200px) {
			column-count: 3;
		}

		@container (max-width: 900px) {
			column-count: 2;
		}

		@container (max-width: 600px) {
			column-count: 1;
		}

		.card-wrap {
			margin-bottom: var(--card-gap);
			overflow: hidden;
		}
	}
}
</style>
