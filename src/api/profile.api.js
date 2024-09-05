import { request, handleAsyncRequest } from "@/utils/request";

export const getProfile = () => {
    return handleAsyncRequest("getProfile", () =>
        request({
            url: "/profile",
            method: "GET"
        })
    );
};
