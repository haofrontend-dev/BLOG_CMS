<script setup>
import { ReloadIcon } from "@radix-icons/vue";
</script>

<template>
    <div
        class="fixed inset-0 z-50 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 backdrop-blur"
    >
        <div class="flex items-center justify-center h-full">
            <ReloadIcon class="w-12 h-12 text-white mr-2 animate-spin" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
