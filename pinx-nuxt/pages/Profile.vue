<template>
	<div class="page">
		<n-card class="header flex flex-col" content-class="p-0!">
			<div class="user-info flex flex-wrap">
				<div class="propic">
					<n-avatar :size="100" :src="propic" round :img-props="{ alt: 'avatar' }" />
					<ImageCropper
						v-slot="{ openCropper }"
						placeholder="Select your profile picture"
						@crop="setCroppedImage"
					>
						<Icon :name="EditIcon" :size="16" class="edit" @click="openCropper()" />
					</ImageCropper>
				</div>
				<div class="info flex grow flex-col justify-center">
					<div class="name">
						<h1>Margie Dibbert</h1>
					</div>
					<div class="details flex flex-wrap">
						<div class="item">
							<n-tooltip placement="top">
								<template #trigger>
									<div class="tooltip-wrap">
										<Icon :name="RoleIcon" />
										<span>Editor</span>
									</div>
								</template>
								<span>Role</span>
							</n-tooltip>
						</div>
						<div class="item">
							<n-tooltip placement="top">
								<template #trigger>
									<div class="tooltip-wrap">
										<Icon :name="LocationIcon" />
										<span>New York No. 1 Lake Park</span>
									</div>
								</template>
								<span>Location</span>
							</n-tooltip>
						</div>
						<div class="item">
							<n-tooltip placement="top">
								<template #trigger>
									<div class="tooltip-wrap">
										<Icon :name="MailIcon" />
										<span>sigmund67@gmail.com</span>
									</div>
								</template>
								<span>Contacts</span>
							</n-tooltip>
						</div>
					</div>
				</div>
				<div class="actions">
					<ImageCropper
						v-slot="{ openCropper }"
						placeholder="Select your profile picture"
						@crop="setCroppedImage"
					>
						<n-button size="large" type="primary" @click="openCropper()">Edit profile image</n-button>
					</ImageCropper>
				</div>
			</div>
			<div class="section-selector">
				<n-tabs v-model:value="tabActive">
					<n-tab name="activity">Activity</n-tab>
					<n-tab name="settings">Settings</n-tab>
				</n-tabs>
			</div>
		</n-card>
		<div class="main">
			<n-tabs v-model:value="tabActive" tab-class="hidden!" animated>
				<n-tab-pane name="activity">
					<ProfileActivity />
				</n-tab-pane>
				<n-tab-pane name="settings">
					<ProfileSettings />
				</n-tab-pane>
			</n-tabs>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { ImageCropperResult } from "@/components/common/ImageCropper.vue"
import Icon from "@/components/common/Icon.vue"
import ImageCropper from "@/components/common/ImageCropper.vue"
import ProfileActivity from "@/components/profile/ProfileActivity.vue"
import ProfileSettings from "@/components/profile/ProfileSettings.vue"
import { NAvatar, NButton, NCard, NTab, NTabPane, NTabs, NTooltip } from "naive-ui"
import { ref } from "vue"

definePageMeta({
	auth: true,
	roles: "all"
})

const RoleIcon = "tabler:user"
const LocationIcon = "tabler:map-pin"
const EditIcon = "uil:image-edit"
const MailIcon = "tabler:mail"

const tabActive = ref("activity")
const propic = ref("/images/avatar-200.jpg")

function setCroppedImage(result: ImageCropperResult) {
	const canvas = result.canvas as HTMLCanvasElement
	propic.value = canvas.toDataURL()
}
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
