<template>
	<transition name="loading-fade">
		<div v-if="show" class="splash-screen-loading-box">
			<n-spin :size="80" />
		</div>
	</transition>
</template>

<script lang="ts" setup>
import { NSpin } from "naive-ui"

const { show } = defineProps<{
	show: boolean
}>()
</script>

<style scoped lang="scss">
.splash-screen-loading-box {
	position: fixed;
	z-index: 99999;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(20px);
	display: flex;
	align-content: center;
	justify-content: center;
	align-items: center;

	&.loading-fade-enter-active,
	&.loading-fade-leave-active {
		transition: opacity 0.5s ease;
	}

	&.loading-fade-enter-from,
	&.loading-fade-leave-to {
		opacity: 0;
	}
}
</style>
