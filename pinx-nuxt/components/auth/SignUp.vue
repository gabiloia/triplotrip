<template>
	<div>
		<n-form ref="formRef" :model="model" :rules="rules">
			<n-form-item path="email" label="Email" first>
				<n-input v-model:value="model.email" size="large" placeholder="Insert the email" />
			</n-form-item>
			<n-form-item path="password" label="Password">
				<div class="flex w-full flex-col gap-3">
					<n-input
						v-model:value="model.password"
						type="password"
						size="large"
						show-password-on="click"
						placeholder="Insert the password"
					/>
					<PasswordStrengthMeter
						v-if="model.password"
						:password="model.password"
						@strength="passwordStrength = $event"
					/>
				</div>
			</n-form-item>
			<n-form-item path="confirmPassword" label="Confirm Password" first>
				<n-input
					v-model:value="model.confirmPassword"
					type="password"
					:disabled="!model.password"
					size="large"
					show-password-on="click"
					placeholder="Confirm the password"
				/>
			</n-form-item>
			<div class="flex flex-col items-end">
				<div class="w-full">
					<n-button type="primary" class="w-full!" size="large" :disabled="!isValid" @click="register">
						Create an account
					</n-button>
				</div>
			</div>
		</n-form>

		<n-divider title-placement="center">Ó</n-divider>

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
import type { FormInst, FormItemRule, FormRules } from "naive-ui"
import { NButton, NDivider, NForm, NFormItem, NInput, useMessage } from "naive-ui"
import isEmail from "validator/es/lib/isEmail"
import { computed, ref, watch } from "vue"
import { useRouter } from "vue-router"
import PasswordStrengthMeter from "@/components/common/PasswordStrengthMeter.vue"

interface ModelType {
	email: string | null
	password: string | null
	confirmPassword: string | null
}

const formRef = ref<FormInst | null>(null)
const passwordStrength = ref<number>(0)
const model = ref<ModelType>({
	email: null,
	password: null,
	confirmPassword: null
})

const rules: FormRules = {
	email: [
		{ required: true, trigger: ["blur"], message: "Email is required" },
		{
			validator: (rule: FormItemRule, value: string): boolean => isEmail(value || ""),
			message: "The email is not formatted correctly",
			trigger: ["blur"]
		}
	],
	password: [
		{ required: true, trigger: ["blur"], message: "Password is required" }
	],
	confirmPassword: [
		{ required: true, trigger: ["blur"], message: "confirmPassword is required" },
		{
			validator: (rule: FormItemRule, value: string): boolean => {
				return value === model.value.password
			},
			message: "Passwords do not match",
			trigger: ["blur"]
		}
	]
}

const isValid = computed(() => {
	return (
		isEmail(model.value.email || "") &&
		model.value.password &&
		model.value.confirmPassword &&
		model.value.password === model.value.confirmPassword &&
		passwordStrength.value === 100
	)
})

const message = useMessage()
const router = useRouter()

async function register() {
	formRef.value?.validate(async (errors) => {
		if (!errors) {
			try {
				const response = await $fetch("https://admin.triplotrip.com/api/auth/local/register", {
					method: "POST",
					body: {
						username: model.value.email,
						email: model.value.email,
						password: model.value.password
					}
				})

				if (response.jwt) {
					localStorage.setItem("auth_token", response.jwt)
					message.success("Cuenta creada con éxito")
					router.push("/")
				}
			} catch (err: any) {
				console.error(err)
				message.error(err?.data?.error?.message || "Error al registrar usuario")
			}
		} else {
			message.error("Por favor completá los campos correctamente.")
		}
	})
}

watch(isValid, val => {
	if (val) {
		formRef.value?.validate()
	}
})
</script>
