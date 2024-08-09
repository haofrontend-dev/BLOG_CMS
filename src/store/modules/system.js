import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", {
    state: () => ({
        loading: false,
        isSidarenOpen: true,
        menuList: []
    }),
    actions: {
        setLoading(loading) {
            this.loading = loading;
        },
        setMenuList(menuRouter) {}
    },
    getters: {
        getMenuList: state => state.menuList
    }
});
