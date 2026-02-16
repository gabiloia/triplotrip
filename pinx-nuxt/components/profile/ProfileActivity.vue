<template>
	<div class="activity">
		<div class="mb-4 flex justify-end">
			<n-button type="primary" @click="openNewModal">Nueva propiedad</n-button>
		</div>

		<div class="masonry">
			<div v-for="(prop, index) in propiedades" :key="prop.documentId" class="card-wrap">
				<n-card hoverable class="property-card">
					<template #cover>
						<img class="property-image" :alt="prop.Titulo || 'Imagen'" :src="getImageUrl(prop.FotoPrincipal)" />
					</template>
					<template #header>
						<span>{{ prop.Titulo }}</span>
					</template>
					<template #default>
						<p>{{ prop.Descripcion }}</p>
					</template>
					<template #footer>
						<n-button size="small" @click="openEditModal(prop)">Editar</n-button>
					</template>
				</n-card>
			</div>
		</div>

		<n-modal v-model:show="showModal" preset="dialog" :title="isEditing ? 'Editar propiedad' : 'Crear nueva propiedad'">
			<n-form :model="form" @submit.prevent="submitForm">
				<n-form-item label="Título" required>
					<n-input v-model:value="form.Titulo" placeholder="Título de la propiedad" />
				</n-form-item>
				<n-form-item label="Descripción" required>
					<n-input v-model:value="form.Descripcion" type="textarea" placeholder="Descripción de la propiedad" />
				</n-form-item>
				<n-form-item label="Imagen principal">
					<n-upload :max="1" :default-upload="false" @change="handleFileChange">
						<n-upload-dragger>
							<n-text style="font-size: 16px">Click o arrastrá una imagen para subir</n-text>
							<n-p depth="3" style="margin: 8px 0 0 0">Máximo 1 imagen.</n-p>
						</n-upload-dragger>
					</n-upload>
				</n-form-item>
				<n-form-item>
					<n-button v-if="isEditing" @click="confirmDelete">Eliminar</n-button>
					<n-button type="primary" attr-type="submit">Guardar</n-button>
				</n-form-item>
			</n-form>
		</n-modal>
	</div>
</template>

<script setup lang="ts">
import {
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NModal,
  NP,
  NText,
  NUpload,
  NUploadDragger,
  useDialog,
  useNotification
} from "naive-ui"
import qs from "qs"
import { onMounted, ref } from "vue"

const propiedades = ref<any[]>([])
const showModal = ref(false)
const isEditing = ref(false)
const editingDocumentId = ref<string | null>(null) // ahora string porque es ObjectId
const form = ref({ Titulo: "", Descripcion: "", FotoPrincipal: null })
const currentUser = ref<any>(null)
const notification = useNotification()
const dialog = useDialog()

function getImageUrl(media: any) {
  if (!media || !media.url) return "/images/default.jpg"
  return media.url.startsWith("http") ? media.url : `https://admin.triplotrip.com${media.url}`
}

function openNewModal() {
  isEditing.value = false
  editingDocumentId.value = null
  form.value = { Titulo: "", Descripcion: "", FotoPrincipal: null }
  showModal.value = true
}

async function fetchPropiedades() {
  try {
    const token = localStorage.getItem("auth_token")
    if (!token) return

    currentUser.value = await $fetch("https://admin.triplotrip.com/api/users/me", {
      headers: { Authorization: `Bearer ${token}` }
    })

    const query = qs.stringify(
      {
        filters: {
          owner: { documentId: { $eq: currentUser.value.documentId } }
        },
        populate: ["FotoPrincipal"]
      },
      { encodeValuesOnly: true }
    )

    const res = await $fetch(`https://admin.triplotrip.com/api/propiedades?${query}`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    propiedades.value = res.data || []
  } catch (e) {
    console.error("Error cargando propiedades:", e)
  }
}

function handleFileChange({ file }: any) {
  form.value.FotoPrincipal = file.file
}

function openEditModal(prop: any) {
  isEditing.value = true
  editingDocumentId.value = prop.documentId // clave: documentId
  form.value = {
    Titulo: prop.Titulo,
    Descripcion: prop.Descripcion,
    FotoPrincipal: null
  }
  showModal.value = true
}

function confirmDelete() {
  dialog.warning({
    title: "¿Eliminar propiedad?",
    content: "Esta acción no se puede deshacer.",
    positiveText: "Eliminar",
    negativeText: "Cancelar",
    onPositiveClick: () => deletePropiedad()
  })
}

async function deletePropiedad() {
  try {
    const token = localStorage.getItem("auth_token")
    if (!token || !editingDocumentId.value) return

    const response = await fetch(`https://admin.triplotrip.com/api/propiedades/${editingDocumentId.value}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `Error borrando propiedad: ${response.statusText}`)
    }

    // Actualizo la lista removiendo la propiedad borrada
    propiedades.value = propiedades.value.filter((p) => p.documentId !== editingDocumentId.value)

    notification.success({ title: "Propiedad eliminada" })
    showModal.value = false
    editingDocumentId.value = null
    isEditing.value = false
  } catch (err: any) {
    console.error(err)
    notification.error({ title: "Error", content: err.message || "No se pudo eliminar" })
  }
}

async function submitForm() {
  try {
    const token = localStorage.getItem("auth_token")
    if (!token || !currentUser.value) throw new Error("No autenticado")

    let uploadedFileId = null

    if (form.value.FotoPrincipal) {
      const formData = new FormData()
      formData.append("files", form.value.FotoPrincipal)

      const uploadResponse = await fetch("https://admin.triplotrip.com/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      })

      if (!uploadResponse.ok) throw new Error(`Error subiendo imagen: ${uploadResponse.statusText}`)
      const uploaded = await uploadResponse.json()
      uploadedFileId = Array.isArray(uploaded) ? uploaded[0].id : uploaded.id
    }

    const payload: any = {
      Titulo: form.value.Titulo,
      Descripcion: form.value.Descripcion
    }

    if (uploadedFileId) payload.FotoPrincipal = uploadedFileId
    if (!isEditing.value) payload.owner = { connect: [currentUser.value.id] }

    const url = isEditing.value
      ? `https://admin.triplotrip.com/api/propiedades/${editingDocumentId.value}`
      : `https://admin.triplotrip.com/api/propiedades`

    const method = isEditing.value ? "PUT" : "POST"

    await $fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: payload })
    })

    notification.success({ title: "Propiedad guardada correctamente" })
    showModal.value = false
    form.value = { Titulo: "", Descripcion: "", FotoPrincipal: null }
    editingDocumentId.value = null
    isEditing.value = false
    await fetchPropiedades()
  } catch (err: any) {
    console.error(err)
    notification.error({ title: "Error", content: err.message || "No se pudo guardar" })
  }
}

onMounted(fetchPropiedades)
</script>

<style lang="scss" scoped>
.activity {
  container-type: inline-size;

  .masonry {
    --card-gap: 30px;
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

.property-card {
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.property-image {
  object-fit: cover;
  width: 100%;
  height: 300px;
}
</style>
