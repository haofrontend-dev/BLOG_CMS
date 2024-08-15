<script setup>
defineProps({
    title: {
        type: String,
        required: true,
        default: "Bảng tin"
    }
});
</script>

<template>
    <div class="p-8 overflow-y-auto">
        <div class="title">
            <h1 class="text-2xl font-semibold text-slate-700">
                {{ title }}
            </h1>
        </div>
        <div class="my-5">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
