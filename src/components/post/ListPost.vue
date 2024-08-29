<script setup>
import { usePostStore } from "@/store/modules/post";
import ArchiveCard from "@/components/archive/card.vue";
import { ref } from "vue";
import { watch } from "vue";

const props = defineProps({
    selectAll: {
        type: Boolean,
        default: false
    }
});

const postStore = usePostStore();
await postStore.dispatchGetPosts();

const postSelectIds = ref([]);

const handleSelectPostId = postId => {
    if (postSelectIds.value.includes(postId)) {
        postSelectIds.value = postSelectIds.value.filter(id => id !== postId);
    } else {
        postSelectIds.value.push(postId);
    }
};

watch(
    () => props.selectAll,
    value => {
        if (value) {
            postSelectIds.value = postStore.postList.map(post => post.id);
        } else {
            postSelectIds.value = [];
        }
    }
);
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 my-10">
        <ArchiveCard
            v-for="post in postStore.postList"
            :key="post.id"
            :post="post"
            :is-check="postSelectIds.includes(post.id)"
            @select-post="handleSelectPostId"
        />
    </div>
</template>

<style lang="scss" scoped></style>
