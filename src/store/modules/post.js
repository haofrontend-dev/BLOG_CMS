import { defineStore } from "pinia";

import { getPosts } from "@/api/post.api";
import { reponseSuscess, reponseError } from "@/utils/response";

export const usePostStore = defineStore("post", {
    state: () => ({
        loading: false,
        postList: [],
        postDetail: {},
        totalPost: 0,
        limit: 0
    }),
    actions: {
        initPosts(data) {
            this.postList = data.posts;
            this.totalPost = data.total;
            this.limit = data.limit;
        },

        async dispatchGetPosts() {
            try {
                const data = await getPosts();
                if (data) {
                    this.initPosts(data);
                    return reponseSuscess({});
                }
            } catch (error) {
                return reponseError({
                    status: error.response?.status
                });
            }

            return reponseError({});
        }
    }
});
