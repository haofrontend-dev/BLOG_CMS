import { defineStore } from "pinia";

import { login, logout } from "@/api/auth.api";
import { setToken } from "@/utils/cache/storage";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null
    }),
    actions: {
        setToken(token) {
            this.token = token;
            setToken(token);
        },
        async login(dataLogin) {
            const result = await login(dataLogin);
            this.setToken(result?.metadata?.accessToken);
        },
        async logout() {
            await logout();
            this.setToken(null);
        }
    }
});
