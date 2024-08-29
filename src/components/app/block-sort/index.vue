<script setup>
import { defineProps, ref } from "vue";
import { ChevronDownIcon, ChevronUpIcon, TriangleDownIcon } from "@radix-icons/vue";

defineProps({
    title: {
        type: String,
        default: () => ""
    }
});

const isContent = ref(true);

// TODO: FUNCTION
const handleShowContent = () => {
    isContent.value = !isContent.value;
};
</script>

<template>
    <div class="">
        <div class="py-2 px-3 border border-gray-200 flex justify-between items-center">
            <h5 class="font-bold text-gray-700">{{ title }}</h5>
            <div class="action flex items-center gap-1">
                <span class="cursor-pointer font-bold">
                    <ChevronUpIcon class="size-6 text-muted-foreground" />
                </span>
                <span class="cursor-pointer font-bold">
                    <ChevronDownIcon class="size-6 text-muted-foreground" />
                </span>
                <span class="cursor-pointer font-bold" @click="handleShowContent">
                    <TriangleDownIcon class="size-6" />
                </span>
            </div>
        </div>

        <div v-if="isContent" class="px-3 py-2 border border-gray-200">
            <slot name="content" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
