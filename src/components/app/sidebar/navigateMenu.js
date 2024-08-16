import { DrawingPinIcon, TokensIcon } from "@radix-icons/vue";

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
                        displayName: "Bài viết",
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
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
