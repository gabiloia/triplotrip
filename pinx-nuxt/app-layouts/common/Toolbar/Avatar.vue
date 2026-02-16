<template>
	<n-dropdown :options="options" placement="bottom-end" @select="handleSelect">
		<n-avatar
			round
			:size="32"
			:src="avatarUrl || '/images/avatar-64.jpg'"
			:img-props="{ alt: 'avatar' }"
		/>
	</n-dropdown>
</template>

<script lang="ts" setup>
import { h, ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { renderIcon } from "@/utils"
import { NAvatar, NDropdown } from "naive-ui"

const avatarUrl = ref<string | null>(null)
const router = useRouter()

const UserIcon = "ion:person-outline"
const LogoutIcon = "ion:log-out-outline"

const options = ref([
	{
		label: "Profile",
		key: "route-Profile",
		icon: renderIcon(UserIcon)
	},
	{
		label: "Logout",
		key: "route-Logout",
		icon: renderIcon(LogoutIcon)
	}
])

function handleSelect(key: string) {
	if (key.startsWith("route-")) {
		const path = key.replace("route-", "")
		router.push({ name: path })
	}
}

onMounted(async () => {
	const token = localStorage.getItem("auth_token")
	if (!token) return

	try {
		const user = await $fetch("https://admin.triplotrip.com/api/users/me?populate=avatar", {
			headers: { Authorization: `Bearer ${token}` }
		})

		if (user?.avatar?.url) {
			avatarUrl.value = `https://admin.triplotrip.com${user.avatar.url}`
		}
	} catch (e) {
		console.error("Error fetching user avatar", e)
	}
})
</script>
