<template>
	<n-modal
		:show="show"
		preset="dialog"
		title="Editar Propiedad"
		@update:show="$emit('update:show', $event)"
	>
		<div class="space-y-4">
			<n-input
				v-model:value="propiedadLocal.Titulo"
				placeholder="Título"
			/>
			<n-input
				v-model:value="propiedadLocal.Descripcion"
				type="textarea"
				placeholder="Descripción"
				rows="4"
			/>
		</div>
		<template #action>
			<div class="flex justify-end gap-2 mt-4">
				<n-button @click="$emit('update:show', false)">Cancelar</n-button>
				<n-button type="primary" @click="guardarCambios">Guardar</n-button>
			</div>
		</template>
	</n-modal>
</template>

  <script setup lang="ts">
  import { NButton, NInput, NModal } from "naive-ui"
  import { ref, watch } from "vue"

  const props = defineProps<{
    show: boolean
    propiedad: any
  }>()

  const emit = defineEmits(["update:show", "guardar"])

  const propiedadLocal = ref<any>({})

  watch(() => props.propiedad, (nueva) => {
    propiedadLocal.value = { ...nueva }
  }, { immediate: true })

  async function guardarCambios() {
  try {
    // PUT para guardar
    const res = await fetch(`http://localhost:1337/api/propiedades/${propiedadLocal.value.documentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          Titulo: propiedadLocal.value.Titulo,
          Descripcion: propiedadLocal.value.Descripcion
        }
      })
    })

    if (!res.ok) throw new Error("Error al guardar en Strapi")

    // Ahora, GET para traer datos actualizados con imagen populada
    const res2 = await fetch(`http://localhost:1337/api/propiedades/${propiedadLocal.value.documentId}?populate=FotoPrincipal`)
    const json = await res2.json()

    const actualizada = {
      ...json.data,
      ...json.data.attributes,
      documentId: propiedadLocal.value.documentId
    }

    emit("guardar", actualizada)
    emit("update:show", false)
  } catch (err) {
    console.error("Error al guardar cambios:", err)
  }
}
  </script>
