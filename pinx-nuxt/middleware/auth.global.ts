// middleware/auth.global.ts
import { useAuthStore } from "@/stores/auth"

interface RouteMetaAuth {
	auth?: boolean
	checkAuth?: boolean
	authRedirect?: string
	roles?: string | string[]
}

export default defineNuxtRouteMiddleware((to) => {
	// Solo ejecutar en el cliente para evitar problemas de hidratación
	if (import.meta.server) return

	try {
		console.log('🔍 Middleware ejecutándose para:', to.path)
		console.log('📋 Route meta:', to.meta)

		const { checkAuth, authRedirect, auth, roles }: RouteMetaAuth = to.meta || {}
		const authStore = useAuthStore()

		console.log('🔐 Auth requerido:', auth)
		console.log('👤 Usuario logueado:', authStore.isLogged)
		console.log('🎭 Roles requeridos:', roles)

		// Si la ruta requiere autenticación
		if (auth) {
			// Si no está logueado, redirigir al login
			if (!authStore.isLogged) {
				console.log('❌ Usuario no logueado, redirigiendo a login')
				return navigateTo('/auth/login')
			}

			// Si está logueado pero hay roles específicos requeridos
			if (roles && !authStore.isRoleGranted(roles)) {
				console.log('❌ Usuario sin permisos, redirigiendo a login')
				return navigateTo('/auth/login')
			}

			console.log('✅ Usuario autorizado')
		}

		// Si checkAuth está activo y el usuario está logueado, redirigir
		// (usado para páginas como login que no deberían ser accesibles si ya estás logueado)
		if (checkAuth && authStore.isLogged && (!roles || authStore.isRoleGranted(roles))) {
			console.log('🔄 Redirigiendo usuario logueado desde página de auth')
			return navigateTo(authRedirect || '/')
		}

		console.log('➡️ Permitiendo acceso')
	} catch (err) {
		console.error('💥 Error en middleware:', err)
		// En caso de error, permitir acceso para no romper la aplicación
	}
})