<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Pencil1Icon, TrashIcon, MagnifyingGlassIcon, UploadIcon, PlusIcon } from "@radix-icons/vue";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const model = defineModel();
const emits = defineEmits(["edit", "delete", "publish", "seach-post"]);

const router = useRouter();
const isShowInputSearch = ref(false);
const searchValue = ref("");

const actionPost = [
    {
        name: "Sữa bài viết",
        icon: Pencil1Icon,
        handleAction: () => emits("edit")
    },
    {
        name: "Xóa bài viết",
        icon: TrashIcon,
        handleAction: () => emits("delete")
    },
    {
        name: "Tìm kiếm",
        icon: MagnifyingGlassIcon,
        handleAction: () => (isShowInputSearch.value = !isShowInputSearch.value)
    },
    {
        name: "Publish",
        icon: UploadIcon,
        handleAction: () => emits("publish")
    }
];

const handleSeachPost = () => {
    emits("seach-post", searchValue.value);
};

const createPost = () => {
    router.push({
        name: "postCreate"
    });
};
</script>

<template>
    <div class="flex justify-between flex-wrap items-center gap-3">
        <div class="flex items-center space-x-2">
            <Checkbox v-model:checked="model" id="terms" />
            <label for="terms" class="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Chọn tất cả
            </label>
        </div>

        <div class="flex items-center flex-wrap bg-white rounded relative">
            <Button v-for="action in actionPost" :key="action.name" variant="ghost" class="" @click="action.handleAction">
                <component :is="action.icon" class="mr-2" />
                {{ action.name }}
            </Button>
            <Transition
                enter-class="opacity-0"
                enter-active-class="transition-opacity duration-150 ease-out"
                leave-class="opacity-0"
                leave-active-class="transition-opacity duration-150 ease-out"
            >
                <div
                    v-if="isShowInputSearch"
                    class="flex items-center bg-white rounded-md shadow-md absolute top-[calc(100%+5px)] left-0 right-0 z-10"
                >
                    <Input
                        v-model="searchValue"
                        class="outline-none focus:ring-transparent focus-visible:ring-transparent h-10 border-none"
                        placeholder="Tìm kiếm..."
                    />
                    <Button variant="outline" size="icon" class="border-none" @click="handleSeachPost">
                        <MagnifyingGlassIcon class="w-4 h-4" />
                    </Button>
                </div>
            </Transition>
        </div>
        <Button class="hover:bg-primary hover:opacity-90" @click="createPost">
            <PlusIcon />
            Tạo bài viết
        </Button>
    </div>
</template>

<style lang="scss" scoped></style>
