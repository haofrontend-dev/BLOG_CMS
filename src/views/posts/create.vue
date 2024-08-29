<script setup>
import { reactive } from "vue";
import FormPostContent from "@/components/app/form/ContentPost.vue";
import { CameraIcon } from "@radix-icons/vue";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlockSort from "@/components/app/block-sort/index.vue";

// TODO: VARIABLE
const state = reactive({
    title: "",
    content: ""
});

// TODO: FUNCTION
const handleSubmit = () => {
    console.log("-------1---------", state);
};
</script>

<template>
    <div class="w-full">
        <!-- Form create post -->
        <FormPostContent @submit="handleSubmit">
            <template #left>
                <div class="w-full">
                    <Input v-model="state.title" type="text" placeholder="Thêm tiêu đề" class="h-12 text-xl text-gray-800" />
                    <Button variant="outline" class="mt-3" type="button">
                        <CameraIcon class="mr-3" />
                        Thêm media
                    </Button>
                    <!-- Quill editor -->
                    <div class="mt-4">
                        <quill-editor
                            toolbar="essential"
                            v-model:content="state.content"
                            style="min-height: 400px"
                            theme="snow"
                        ></quill-editor>
                    </div>
                </div>
            </template>

            <template #right>
                <div class="px-4 grid grid-cols-1 gap-3">
                    <BlockSort title="Đăng bài viết">
                        <template #content> Hello </template>
                    </BlockSort>
                </div>
            </template>
        </FormPostContent>
    </div>
</template>

<style lang="scss" scoped></style>
