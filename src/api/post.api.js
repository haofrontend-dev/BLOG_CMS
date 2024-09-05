import { request, handleAsyncRequest } from "@/utils/request";

export const getPosts = () => {
    return fetch("https://dummyjson.com/posts?limit=10").then(res => res.json());
};

export const getPostWithPage = (page = 1) => {
    return fetch(`https://dummyjson.com/posts?limit=10&skip=${page * 10}`).then(res => res.json());
};
