<script setup>
import MenuList from "./MenuList.vue";
import navigateMenu from "./navigateMenu";
</script>

<template>
    <aside class="hidden lg:block h-screen bg-gray-800 z-10 overflow-x-auto">
        <div class="flex flex-col">
            <div class="logo mt-2 flex justify-center px-3">
                <img src="@/assets/images/logo.png" alt="Image Logo" class="w-full object-cover" />
            </div>
            <nav class="my-6">
                <MenuList :menus="navigateMenu.routes" />
            </nav>
        </div>
    </aside>
</template>

<style lang="scss" scoped></style>
