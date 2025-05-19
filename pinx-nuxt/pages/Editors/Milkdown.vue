<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Milkdown</div>
			<div class="links">
				<a href="https://milkdown.dev/" target="_blank" alt="docs" rel="nofollow noopener noreferrer">
					<Icon :name="ExternalIcon" :size="16" />
					docs
				</a>
			</div>
		</div>

		<n-card><Milkdown /></n-card>
	</div>
</template>

<script setup lang="ts">
import Icon from "@/components/common/Icon.vue"
import Milkdown from "@/components/editors/Milkdown"
import { NCard } from "naive-ui"

const ExternalIcon = "tabler:external-link"
</script>
