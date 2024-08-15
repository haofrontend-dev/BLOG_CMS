<script setup>
import { RouterView, useRouter } from "vue-router";
import AppSidebar from "@/components/app/sidebar/index.vue";
import AppHeader from "@/components/app/header/index.vue";
import AppContainer from "@/components/app/container/index.vue";
import { useSystemStore } from "@/store/modules/system";
import { cn } from "@/lib/utils";
import { computed } from "vue";

const router = useRouter();
const systemStore = useSystemStore();
const handleToggleSidebar = () => {
    systemStore.toogleSidebar();
};

const titlePage = computed(() => router.currentRoute.value.meta.title);
</script>
<template>
    <div class="flex font-roboto">
        <AppSidebar
            class="sidebar-transition"
            :class="cn([systemStore.isSidebar ? 'w-[250px] max-w-[250px]' : 'sidebar-hidden'])"
        />
        <div class="flex-1 transition duration-150 w-full">
            <AppHeader @click-bar="handleToggleSidebar" />
            <main class="mt-[50px]">
                <AppContainer :title="titlePage">
                    <RouterView />
                </AppContainer>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar-transition {
    transition: width 0.2s ease-in-out;
}

.sidebar-hidden {
    width: 0;
}
</style>
