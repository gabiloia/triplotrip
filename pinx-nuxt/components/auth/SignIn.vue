<template>
	<div>
		<n-form ref="formRef" :model="model" :rules="rules">
			<n-form-item path="email" label="Email" first>
				<n-input
					v-model:value="model.email"
					placeholder="Insert your email"
					size="large"
					autocomplete="on"
					@keydown.enter="signIn"
				/>
			</n-form-item>
			<n-form-item path="password" label="Password">
				<n-input
					v-model:value="model.password"
					type="password"
					show-password-on="click"
					placeholder="Insert your password"
					autocomplete="on"
					size="large"
					@keydown.enter="signIn"
				/>
			</n-form-item>
			<div class="flex flex-col items-end gap-6">
				<div class="flex w-full justify-between">
					<n-checkbox size="large">Recordame</n-checkbox>
					<slot name="extra-actions" />
				</div>
				<div class="w-full">
					<n-button type="primary" class="w-full!" size="large" :disabled="!isValid" @click="signIn">
						Sign in
					</n-button>
				</div>
			</div>
		</n-form>

		<n-divider title-placement="center">Or</n-divider>

		<div class="social-btns mb-12 flex flex-col gap-4">
			<n-button strong secondary size="large">
				<template #icon>
					<img alt="google-icon" class="block h-5" src="@/assets/images/google-icon.svg?url" />
				</template>
				<span class="px-2">Ingresá con Google</span>
			</n-button>
		</div>

		<slot name="bottom-area" />
	</div>
</template>

<script lang="ts" setup>
import type { FormInst, FormItemRule, FormRules, FormValidationError } from "naive-ui"
import { NButton, NCheckbox, NDivider, NForm, NFormItem, NInput, useMessage } from "naive-ui"
import isEmail from "validator/es/lib/isEmail"
import { computed, ref, watch } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"

interface ModelType {
	email: string | null
	password: string | null
}

const router = useRouter()
const formRef = ref<FormInst | null>(null)
const message = useMessage()
const authStore = useAuthStore()

const model = ref<ModelType>({
	email: "",
	password: ""
})

const rules: FormRules = {
	email: [
		{ required: true, trigger: ["blur"], message: "Email es un campo requerido" },
		{
			validator: (rule: FormItemRule, value: string): boolean => isEmail(value || ""),
			message: "Invalid email format",
			trigger: ["blur"]
		}
	],
	password: [{ required: true, trigger: ["blur"], message: "Password es un campo requerido" }]
}

const isValid = computed(() => {
	return !!model.value.password && isEmail(model.value.email || "")
})

async function signIn(e: Event) {
	e.preventDefault()
	formRef.value?.validate(async errors => {
		if (!errors) {
			try {
				const res = await $fetch("https://admin.triplotrip.com/api/auth/local", {
					method: "POST",
					body: {
						identifier: model.value.email,
						password: model.value.password
					}
				})

				if (res.jwt && res.user) {
					localStorage.setItem("auth_token", res.jwt)
					authStore.setLogged(res.user)
					message.success("Login exitoso")
					router.push({ path: "/" })
				}
			} catch (err: any) {
				console.error("Login error:", err)
				message.error("Credenciales inválidas")
			}
		} else {
			message.error("Datos incompletos o inválidos")
		}
	})
}

watch(isValid, val => {
	if (val) formRef.value?.validate()
})
</script>
