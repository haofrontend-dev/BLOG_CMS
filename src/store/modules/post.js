import { defineStore } from "pinia";

import { getPosts, getPostWithPage } from "@/api/post.api";
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

        setPostList(data) {
            this.postList = data.posts;
        },

        setLoading(loading) {
            this.loading = loading;
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
        },

        async dispatchGetPostsFindPage(page = 1) {
            this.setLoading(true);
            try {
                const data = await getPostWithPage(page);

                if (data) {
                    this.setPostList(data);
                    return reponseSuscess({});
                }
            } catch (error) {
                return reponseError({
                    status: error.response?.status
                });
            } finally {
                this.setLoading(false);
            }
        }
    }
});
