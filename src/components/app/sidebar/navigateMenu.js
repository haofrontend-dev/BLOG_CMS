import { DrawingPinIcon, TokensIcon, PersonIcon } from "@radix-icons/vue";

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
                        name: "post",
                        displayName: "QL Bài viết",
                        icon: DrawingPinIcon,
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
        // {
        //     root: {
        //         displayName: "Members",
        //         children: [
        //             {
        //                 name: "member",
        //                 displayName: "QL Thành viên",
        //                 icon: PersonIcon,
        //                 children: [
        //                     {
        //                         name: "allUser",
        //                         displayName: "QL Tất cả thành viên",
        //                         path: "/"
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
    ]
};
