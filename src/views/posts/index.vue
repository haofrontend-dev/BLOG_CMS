<script setup>
import { ref } from "vue";

import PostFormAction from "@/components/post/FormAction.vue";

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
    </div>
</template>

<style lang="scss" scoped></style>
