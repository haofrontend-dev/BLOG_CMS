import { defineStore } from "pinia";

import { login, logout, renewToken } from "@/api/auth.api";
import { setToken, removeToken } from "@/utils/cache/storage";
import { reponseError, reponseSuscess } from "@/utils/response";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null
    }),
    actions: {
        setToken(token) {
            this.token = token;
            setToken(token);
        },

        deleteToken() {
            removeToken();
        },

        goToLogout() {
            window.location = "/login";
        },

        async dispatchLogin(dataLogin) {
            try {
                const { status, metadata } = await login(dataLogin);
                if (status === 200) {
                    this.setToken(metadata?.accessToken);
                    return reponseSuscess({});
                }
            } catch (error) {
                return reponseError({
                    status: error.response?.status
                });
            }
        },

        async dispatchLogout() {
            try {
                const { status } = await await logout();
                if (status === 200) {
                    this.deleteToken();
                    return reponseSuscess({});
                }
            } catch (error) {
                return reponseError({
                    status: error.response?.status
                });
            }

            return reponseError({});
        },

        async dispatchRenewToken() {
            try {
                const { status, metadata } = await renewToken();
                if (status === 200) {
                    this.setToken(metadata?.accessToken);
                    return reponseSuscess({});
                }
            } catch (error) {
                return reponseError({
                    status: error.response?.status
                });
            }
            return reponseError({});
        }
    }
});
