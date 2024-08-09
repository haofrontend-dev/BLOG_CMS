<script setup>
import { RouterView } from "vue-router";
import AppSidebar from "@/components/app/sidebar/index.vue";
import AppHeader from "@/components/app/header/index.vue";
</script>
<template>
    <div class="flex font-roboto">
        <AppSidebar />
        <div class="flex-1">
            <AppHeader />
            <main class="mt-[50px] p-8">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
