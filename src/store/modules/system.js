import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", {
    state: () => ({
        loading: false,
        isSidebar: true,
        menuList: []
    }),
    actions: {
        setLoading(loading) {
            this.loading = loading;
        },
        setMenuList(menuRouter) {},
        toogleSidebar() {
            this.isSidebar = !this.isSidebar;
        }
    },
    getters: {
        getMenuList: state => state.menuList
    }
});
