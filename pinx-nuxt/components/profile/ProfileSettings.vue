<template>
	<n-card class="settings">
		<n-form ref="refForm" :label-width="80" :model="formValue" :rules="formRules">
			<div class="title">General</div>
			<div class="flex flex-col justify-between md:flex-row md:gap-4">
				<n-form-item label="Username" path="username" class="basis-1/2">
					<n-input v-model:value="formValue.username" placeholder="Type username">
						<template #prefix>@</template>
					</n-input>
				</n-form-item>
				<n-form-item label="Email" path="email" class="basis-1/2">
					<n-input v-model:value="formValue.email" placeholder="Type email" />
				</n-form-item>
			</div>

			<div class="title">Profile</div>
			<n-form-item label="Fullname" path="name">
				<n-input v-model:value="formValue.name" placeholder="Type fullname" />
			</n-form-item>
			<div class="flex flex-col justify-between md:flex-row md:gap-4">
				<n-form-item label="Location" path="location" class="basis-1/2">
					<n-input v-model:value="formValue.location" placeholder="Type location" />
				</n-form-item>
				<n-form-item label="Website" path="website" class="basis-1/2">
					<n-input v-model:value="formValue.website" placeholder="Type website" />
				</n-form-item>
			</div>
			<n-form-item label="Bio" path="bio">
				<n-input v-model:value="formValue.bio" type="textarea" placeholder="Type bio" />
			</n-form-item>

			<n-form-item>
				<n-button type="primary" @click="handleSave" :loading="loading">Guardar</n-button>
			</n-form-item>
		</n-form>
	</n-card>
</template>

<script setup lang="ts">
import {
	NButton,
	NCard,
	NForm,
	NFormItem,
	NInput,
	useNotification
} from "naive-ui"
import { ref, onMounted } from "vue"

const refForm = ref()
const loading = ref(false)
const notification = useNotification()
const userId = ref<number | null>(null)

const formValue = ref({
	username: "",
	email: "",
	name: "",
	location: "",
	bio: "",
	website: "",
})

const formRules = {
	username: {
		required: true,
		message: "Please input username",
		trigger: "blur"
	},
	email: {
		required: true,
		message: "Please input email",
		trigger: "blur"
	}
}

async function loadUser() {
	const token = localStorage.getItem("auth_token")
	if (!token) {
		notification.error({ title: "Error", content: "No estás autenticado" })
		return
	}

	try {
		const user = await $fetch("https://admin.triplotrip.com/api/users/me", {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		userId.value = user.id

		formValue.value = {
			username: user.username || "",
			email: user.email || "",
			name: user.name || "",
			location: user.location || "",
			bio: user.bio || "",
			website: user.website || "",
			twitter: user.twitter || "",
			facebook: user.facebook || "",
			google: user.google || "",
			instagram: user.instagram || "",
			threads: user.threads || "",
			github: user.github || ""
		}
	} catch (e: any) {
		notification.error({
			title: "Error al cargar datos",
			content: e.message || "Falló la carga del perfil"
		})
		console.error(e)
	}
}

async function handleSave() {
	const token = localStorage.getItem("auth_token")
	if (!token) {
		notification.error({ title: "Error", content: "No estás autenticado" })
		return
	}

	if (!userId.value) {
		notification.error({ title: "Error", content: "No se pudo obtener el ID del usuario" })
		return
	}

	loading.value = true

	try {
		await $fetch(`https://admin.triplotrip.com/api/users/${userId.value}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: formValue.value
		})

		notification.success({
			title: "Perfil actualizado",
			content: "Los cambios fueron guardados correctamente.",
			duration: 2500
		})
	} catch (e: any) {
		notification.error({
			title: "Error al guardar",
			content: e?.data?.error?.message || e.message || "Ocurrió un error inesperado",
			duration: 3000
		})
		console.error(e)
	} finally {
		loading.value = false
	}
}

onMounted(loadUser)
</script>

<style scoped lang="scss">
.settings {
	.title {
		font-size: 20px;
		margin-bottom: 20px;

		&:not(:first-child) {
			margin-top: 20px;
		}
	}
}
</style>
