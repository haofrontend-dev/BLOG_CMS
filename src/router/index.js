import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "@/layouts/AppLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        redirect: {
            name: "dashboard"
        }
    },
    {
        path: "/",
        component: () => AppLayout,
        name: "admin",
        children: [
            {
                path: "",
                name: "dashboard",
                component: () => import("@/views/dashboard/index.vue"),
                meta: {
                    title: "Bảng tin",
                    key: "new"
                }
            },
            {
                path: "/posts",
                name: "post",
                component: () => import("@/views/posts/index.vue"),
                meta: {
                    title: "Tất cả bài viết",
                    key: "post"
                }
            },
            {
                path: "/posts/create",
                name: "postCreate",
                component: () => import("@/views/posts/create.vue"),
                meta: {
                    title: "Tạo bài viết",
                    key: "post"
                }
            }
        ]
    },
    {
        path: "/login",
        name: "authLogin",
        component: AuthLayout,
        children: [
            {
                path: "",
                name: "login",
                component: () => import("@/views/auth/LoginView.vue"),
                meta: {
                    title: "Đăng nhập"
                }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth"
            };
        } else {
            window.scrollTo(0, 0);
        }
    },
    routes
});

export default router;
