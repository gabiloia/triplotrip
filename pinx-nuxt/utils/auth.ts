import type { RouteMetaAuth } from "@/types/auth.d"
import type { RouteLocationNormalized } from "vue-router"
import { useAuthStore } from "@/stores/auth"

export function authCheck(route: RouteLocationNormalized): string | null {
	try {
		const { checkAuth, authRedirect, auth, roles }: RouteMetaAuth = route.meta
		const authStore = useAuthStore()

		if (auth && (!authStore.isLogged || (roles && !authStore.isRoleGranted(roles)))) {
			return "/auth/login" // Cambié de "/login" a "/auth/login"
		}

		if (checkAuth && authStore.isLogged && (!roles || authStore.isRoleGranted(roles))) {
			return authRedirect || "/"
		}

		return null
	} catch (err) {
		return null
	}
}