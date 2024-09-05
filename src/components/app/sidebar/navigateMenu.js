import { DrawingPinIcon, TokensIcon, PersonIcon } from "@radix-icons/vue";

import { ROLE } from "@/constants/auth";

export default {
    root: {
        name: "/",
        displayName: "Dash board"
    },
    routes: [
        {
            root: {
                displayName: "News",
                children: [
                    {
                        name: "new",
                        displayName: "Bản tin",
                        icon: TokensIcon,
                        roles: [ROLE.ADMIN, ROLE.EDITOR],
                        children: [
                            {
                                name: "overview",
                                displayName: "Tổng quan",
                                path: "/"
                            },
                            {
                                name: "update",
                                displayName: "Cập nhật",
                                path: "/update-core"
                            }
                        ]
                    }
                ]
            }
        },
        {
            root: {
                displayName: "Function",
                children: [
                    {
                        name: "members",
                        displayName: "QL Thành viên",
                        icon: PersonIcon,
                        roles: [ROLE.ADMIN],
                        children: [
                            {
                                name: "allMembers",
                                displayName: "Tất cả thành viên",
                                path: "/members/list"
                            },
                            {
                                name: "memberCreate",
                                displayName: "Tạo thành viên",
                                path: "/members/create"
                            }
                        ]
                    },
                    {
                        name: "post",
                        displayName: "QL Bài viết",
                        icon: DrawingPinIcon,
                        roles: [ROLE.ADMIN, ROLE.EDITOR],
                        children: [
                            {
                                name: "postAll",
                                displayName: "QL Tất cả bài viết",
                                path: "/posts"
                            },
                            {
                                name: "postCreate",
                                displayName: "Tạo bài viết",
                                path: "/posts/create"
                            },
                            {
                                name: "postCategory",
                                displayName: "Quản lý danh mục",
                                path: "/posts/category"
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
