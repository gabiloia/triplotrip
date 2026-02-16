<template>
	<div class="page">
		<n-card class="header flex flex-col" content-class="p-0!">
			<div class="user-info flex flex-wrap">
				<div class="propic">
					<n-avatar :size="100" :src="propic" round :img-props="{ alt: 'avatar' }" />
					<ImageCropper v-slot="{ openCropper }" @crop="setCroppedImage">
						<Icon :name="EditIcon" :size="16" class="edit" @click="openCropper()" />
					</ImageCropper>
				</div>
				<div class="info flex grow flex-col justify-center">
					<div class="name">
						<h1>{{ user?.name || 'Usuario' }}</h1>
					</div>
					<div class="details flex flex-wrap">
						<div class="item">
							<n-tooltip placement="top">
								<template #trigger>
									<div class="tooltip-wrap">
										<Icon :name="MailIcon" />
										<span>{{ user?.email || 'Sin email' }}</span>
									</div>
								</template>
								<span>Email</span>
							</n-tooltip>
						</div>
					</div>
				</div>
				<div class="actions">
					<ImageCropper v-slot="{ openCropper }" @crop="setCroppedImage">
						<n-button size="large" type="primary" @click="openCropper()">Cambiar imagen</n-button>
					</ImageCropper>
				</div>
			</div>

			<div class="section-selector">
				<n-tabs v-model:value="tabActive">
					<n-tab name="settings">Configuración</n-tab>
					<n-tab name="activity">Propiedades</n-tab>
				</n-tabs>
			</div>
		</n-card>

		<div class="main">
			<n-tabs v-model:value="tabActive" tab-class="hidden!" animated>
				<n-tab-pane name="settings">
					<ProfileSettings />
				</n-tab-pane>
				<n-tab-pane name="activity">
					<ProfileActivity />
				</n-tab-pane>
			</n-tabs>
		</div>

		<div v-if="error" style="color: red;" class="mt-4 text-center">{{ error }}</div>
	</div>
</template>

<script setup lang="ts">
import type { ImageCropperResult } from "@/components/common/ImageCropper.vue"
import { NAvatar, NButton, NCard, NTab, NTabPane, NTabs, NTooltip, useNotification } from "naive-ui"
import qs from "qs"
import { onMounted, ref } from "vue"
import Icon from "@/components/common/Icon.vue"
import ImageCropper from "@/components/common/ImageCropper.vue"
import ProfileActivity from "@/components/profile/ProfileActivity.vue"
import ProfileSettings from "@/components/profile/ProfileSettings.vue"

definePageMeta({ auth: true, roles: "all" })

const MailIcon = "tabler:mail"
const EditIcon = "uil:image-edit"

const tabActive = ref("settings")
const propic = ref("/images/avatar-200.jpg")
const user = ref<any>(null)
const propiedades = ref([])
const error = ref<string | null>(null)
const notification = useNotification()

async function setCroppedImage(result: ImageCropperResult) {
	const canvas = result.canvas as HTMLCanvasElement
	const dataUrl = canvas.toDataURL()
	propic.value = dataUrl

	try {
		const token = localStorage.getItem("auth_token")
		if (!token) throw new Error("No estás autenticado")

		const blob = await (await fetch(dataUrl)).blob()
		const formData = new FormData()
		formData.append("files", blob, "avatar.jpg")

		const uploadRes = await $fetch("https://admin.triplotrip.com/api/upload", {
			method: "POST",
			headers: { Authorization: `Bearer ${token}` },
			body: formData
		})

		const uploaded = Array.isArray(uploadRes) ? uploadRes[0] : uploadRes
		const avatarId = uploaded.id

		// Traer el user ID
		const userRes = await $fetch("https://admin.triplotrip.com/api/users/me", {
			headers: { Authorization: `Bearer ${token}` }
		})

		await $fetch(`https://admin.triplotrip.com/api/users/${userRes.id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: { avatar: avatarId }
		})

		notification.success({
			title: "Imagen actualizada",
			content: "Tu foto de perfil fue guardada correctamente."
		})

		// Refrescar avatar desde Strapi
		await loadUser()
	} catch (err: any) {
		console.error(err)
		notification.error({
			title: "Error al subir imagen",
			content: err.message || "Ocurrió un error"
		})
	}
}

async function loadUser() {
	try {
		const token = localStorage.getItem("auth_token")
		if (!token) {
			error.value = "No estás autenticado"
			return
		}

		const currentUser = await $fetch("https://admin.triplotrip.com/api/users/me?populate=avatar", {
			headers: { Authorization: `Bearer ${token}` }
		})

		user.value = currentUser
		propic.value = currentUser.avatar?.url
			? `https://admin.triplotrip.com${currentUser.avatar.url}`
			: "/images/avatar-200.jpg"

		const query = qs.stringify({
			filters: {
				owner: {
					documentId: {
						$eq: currentUser.documentId
					}
				}
			},
			populate: ["owner"]
		}, { encodeValuesOnly: true })

		const res = await $fetch(`https://admin.triplotrip.com/api/propiedades?${query}`, {
			headers: { Authorization: `Bearer ${token}` }
		})

		propiedades.value = res.data || []
	} catch (e: any) {
		error.value = `Error cargando perfil: ${e.message || e}`
		console.error(e)
	}
}

onMounted(loadUser)
</script>

<style lang="scss" scoped>
.page {
	.header {
		.user-info {
			gap: 30px;
			padding: 30px;
			padding-bottom: 20px;
			border-block-end: 1px solid var(--border-color);
			container-type: inline-size;

			.propic {
				position: relative;
				height: 100px;

				.edit {
					display: none;
					align-items: center;
					justify-content: center;
					background-color: var(--primary-color);
					color: var(--bg-default-color);
					position: absolute;
					width: 26px;
					height: 26px;
					border-radius: 50%;
					top: -1px;
					right: -1px;
					border: 1px solid var(--bg-default-color);
					cursor: pointer;
				}
			}

			.info {
				.name {
					margin-bottom: 12px;

					@media (max-width: 450px) {
						h1 {
							font-size: 28px;
						}
					}
				}

				.details {
					gap: 24px;

					.item {
						.tooltip-wrap {
							display: flex;
							align-items: center;
							gap: 8px;
							line-height: 1;
						}
					}
				}
			}

			@container (max-width: 900px) {
				.propic {
					.edit {
						display: flex;
					}
				}
				.actions {
					display: none;
				}
			}
		}

		.section-selector {
			padding: 0px 30px;
			padding-top: 15px;

			:deep() {
				.n-tabs .n-tabs-tab {
					padding-bottom: 20px;
				}
			}
		}
	}

	.main {
		margin-top: 18px;
	}
}
</style>
