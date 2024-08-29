<script setup>
import { ref, defineAsyncComponent } from "vue";

import PostFormAction from "@/components/post/FormAction.vue";

const ListPost = defineAsyncComponent(() => import("@/components/post/ListPost.vue"));
const isSelectAll = ref(false);

const handleEdit = () => {
    console.log("--------Edit---------");
};

const handleDelete = () => {
    console.log("--------Delete---------");
};

const handlePublish = () => {
    console.log("--------Publish---------");
};

const handleSeachPost = () => {
    console.log("--------SeachPost---------");
};
</script>

<template>
    <div class="w-full">
        <PostFormAction
            v-model="isSelectAll"
            @edit="handleEdit"
            @delete="handleDelete"
            @publish="handlePublish"
            @seach-post="handleSeachPost"
        />
        <Suspense>
            <ListPost :select-all="isSelectAll" />
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<style lang="scss" scoped></style>
