<template>
	<div class="page">
		<div v-if="loading" class="text-center my-4">
			Cargando imágenes...
		</div>

		<div class="page-header">
			<div class="title">Propiedades</div>
		</div>

		<div class="main">
			<div class="mb-4 flex">
				<n-button @click="openNewModal">Nueva propiedad</n-button>
			</div>

			<div class="masonry">
				<div v-for="(prop, index) in propiedades" :key="prop.documentId" class="card-wrap">
					<n-card hoverable class="property-card">
						<template #cover>
							<img
								class="property-image"
								:alt="prop.Titulo || 'Imagen'"
								:src="getImageUrl(prop.FotoPrincipal)"
								@load="onImageLoad"
								@error="onImageLoad"
							/>
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

			<!-- MODAL -->
			<n-modal
				v-model:show="showModal"
				preset="dialog"
				:title="isEditing ? 'Editar propiedad' : 'Crear nueva propiedad'"
				style="width: 600px;"
			>
				<n-form
					ref="formRef"
					:model="form"
					:rules="rules"
					label-placement="top"
				>
					<n-form-item label="Título" path="Titulo">
						<n-input v-model:value="form.Titulo" placeholder="Ingresá el título de la propiedad" />
					</n-form-item>

					<n-form-item label="Descripción" path="Descripcion">
						<n-input
							v-model:value="form.Descripcion"
							type="textarea"
							placeholder="Ingresá una descripción"
							:autosize="{ minRows: 3 }"
						/>
					</n-form-item>

					<n-form-item label="Foto principal" path="FotoPrincipal">
						<n-upload
							:default-upload="false"
							:on-change="handleFileChange"
							accept="image/*"
						>
							<n-upload-dragger>
								<div style="padding: 20px; text-align: center;">
									<n-text v-if="!form.FotoPrincipal">Arrastrá o seleccioná una imagen</n-text>
									<n-text v-else type="success">Imagen seleccionada</n-text>
								</div>
							</n-upload-dragger>
						</n-upload>
					</n-form-item>
					<!-- Preview de foto actual cuando estás editando y no seleccionaste una nueva -->
					<n-upload>
						<div v-if="isEditing && hasExistingFoto && !form.FotoPrincipal" class="mt-2">
							<n-form-item label="Foto actual">
								<img
									:src="getImageUrl(existingFoto)"
									alt="Foto actual"
									style="display:block; margin-top:8px; max-width:100%;  object-fit:cover; border-radius:8px;"
								/>
							</n-form-item>
						</div>
					</n-upload>
				</n-form>

				<!-- BOTONES DE ACCIÓN DEL MODAL -->
				<template #action>
					<div class="flex justify-end gap-2">
						<n-button @click="showModal = false">Cancelar</n-button>

						<n-button
							v-if="isEditing"
							type="error"
							ghost
							@click="confirmDelete"
						>
							Eliminar
						</n-button>

						<n-button type="primary" @click="submitForm">
							{{ isEditing ? "Guardar cambios" : "Crear propiedad" }}
						</n-button>
					</div>
				</template>
			</n-modal>
		</div>
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
const editingDocumentId = ref<string | null>(null)
const form = ref<{ Titulo: string; Descripcion: string; FotoPrincipal: File | null }>({
  Titulo: "",
  Descripcion: "",
  FotoPrincipal: null
})
const currentUser = ref<any>(null)
const notification = useNotification()
const dialog = useDialog()
const formRef = ref()

// Para validar/manejar la foto existente al editar
const existingFoto = ref<any>(null)
const hasExistingFoto = ref(false)

const loading = ref(true)
let imagesToLoadCount = 0

// VALIDACIONES (Foto requerida: nueva o existente)
const rules: any = {
  Titulo: {
    required: true,
    message: "El título es obligatorio",
    trigger: ["input", "blur"]
  },
  Descripcion: {
    required: true,
    message: "La descripción es obligatoria",
    trigger: ["input", "blur"]
  },
  FotoPrincipal: {
    validator: () => {
      if (form.value.FotoPrincipal || hasExistingFoto.value) return true
      return new Error("La foto principal es obligatoria")
    },
    trigger: ["change", "blur"]
  }
}

function getImageUrl(media: any) {
  if (!media || !media.url) return "/images/default.jpg"
  return media.url.startsWith("http") ? media.url : `https://admin.triplotrip.com${media.url}`
}

function openNewModal() {
  isEditing.value = false
  editingDocumentId.value = null
  form.value = { Titulo: "", Descripcion: "", FotoPrincipal: null }
  existingFoto.value = null
  hasExistingFoto.value = false
  showModal.value = true
}

async function fetchPropiedades() {
  try {
    loading.value = true

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

    imagesToLoadCount = propiedades.value.length
    if (imagesToLoadCount === 0) loading.value = false
  } catch (e) {
    console.error("Error cargando propiedades:", e)
    loading.value = false
  }
}

function onImageLoad() {
  imagesToLoadCount--
  if (imagesToLoadCount <= 0) {
    loading.value = false
  }
}

function handleFileChange({ file }: any) {
  form.value.FotoPrincipal = file?.file ?? null
}

function openEditModal(prop: any) {
  isEditing.value = true
  editingDocumentId.value = prop.documentId
  form.value = {
    Titulo: prop.Titulo ?? "",
    Descripcion: prop.Descripcion ?? "",
    FotoPrincipal: null
  }
  existingFoto.value = prop.FotoPrincipal ?? null
  hasExistingFoto.value = Boolean(existingFoto.value && (existingFoto.value.url || existingFoto.value.id))
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
    await formRef.value?.validate()

    const token = localStorage.getItem("auth_token")
    if (!token || !currentUser.value) throw new Error("No autenticado")

    let uploadedFileId: number | null = null

    // Si el usuario seleccionó una nueva imagen, subimos esa.
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

    // Si se subió nueva imagen, seteamos; si no, en edición dejamos la existente.
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
    existingFoto.value = null
    hasExistingFoto.value = false
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
.main {
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

.text-center {
  text-align: center;
}

.my-4 {
  margin: 1rem 0;
}

.text-green-600 {
  color: #16a34a;
}
</style>
