import { defineStore } from "pinia";

import { login, logout, renewToken } from "@/api/auth.api";
import { setToken, removeToken } from "@/utils/cache/storage";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null
    }),
    actions: {
        /**
         * Sets the authentication token.
         *
         * @param {string} token - The authentication token to be set.
         * @return {void}
         */
        setToken(token) {
            this.token = token;
            setToken(token);
        },
        /**
         * Deletes the authentication token.
         *
         * @return {void}
         */
        deleteToken() {
            removeToken();
        },
        /**
         * Authenticates a user using the provided login data.
         *
         * @param {object} dataLogin - The data required for user authentication.
         * @return {void}
         */
        async login(dataLogin) {
            const result = await login(dataLogin);
            this.setToken(result?.metadata?.accessToken);
        },
        /**
         * Logs out the current user.
         *
         * @return {void}
         */
        async logout() {
            await logout();
        },

        async renewToken() {
            const result = await renewToken();
            if (result?.metadata?.accessToken) {
                this.setToken(result?.metadata?.accessToken);
            }
        }
    }
});
