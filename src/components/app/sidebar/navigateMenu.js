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
                        name: "/",
                        displayName: "Bản tin",
                        children: [
                            {
                                name: "/",
                                displayName: "Tổng quan",
                                path: "/"
                            },
                            {
                                name: "/update-core",
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
                        name: "/posts",
                        displayName: "Bài viết",
                        children: [
                            {
                                name: "/posts",
                                displayName: "Tất cả bài viết",
                                path: "/posts"
                            },
                            {
                                name: "/posts/create",
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
