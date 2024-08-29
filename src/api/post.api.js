import { request, handleAsyncRequest } from "@/utils/request";

export const getPosts = () => {
    return fetch("https://dummyjson.com/posts").then(res => res.json());
};
