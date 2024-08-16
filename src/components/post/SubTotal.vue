<script setup>
import { ref } from "vue";

import { Separator } from "@/components/ui/separator";

const subIndex = ref(0);

const selectSubActive = index => {
    subIndex.value = index;
};

const subTitles = [
    {
        title: "Tất cả",
        count: 0
    },
    {
        title: "Đã xuất bản",
        count: 0
    },
    {
        title: "Bản nháp",
        count: 0
    },
    {
        title: "Thùng rác",
        count: 0
    }
];
</script>

<template>
    <Separator class="my-4" label="Or" />
    <div class="flex h-5 items-center flex-wrap space-x-3 text-sm">
        <template v-for="(sub, index) in subTitles" :key="index">
            <button
                class="hover:text-primary-1"
                :class="{ 'text-primary-1': subIndex === index }"
                @click="selectSubActive(index)"
            >
                {{ sub.title }}
                <strong class="text-xs">( {{ sub.count }} )</strong>
            </button>
            <Separator v-if="index !== subTitles.length - 1" orientation="vertical" />
        </template>
    </div>
</template>

<style lang="scss" scoped></style>
