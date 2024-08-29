<template>
    <form class="grid grid-cols-1 lg:grid-cols-12" @submit.prevent="onSubmit">
        <div class="lg:col-span-9">
            <slot name="left" />
        </div>
        <div class="lg:col-span-3">
            <slot name="right" />
        </div>
    </form>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["submit"]);
const onSubmit = () => {
    emits("submit");
};
</script>

<style lang="scss" scoped></style>
