import { request, handleAsyncRequest } from "@/utils/request";

export const login = data => {
    return handleAsyncRequest("login", () =>
        request({
            url: "/auth/login",
            method: "POST",
            data
        })
    );
};

export const logout = () => {
    return handleAsyncRequest("logout", () =>
        request({
            url: "/auth/logout",
            method: "POST"
        })
    );
};

export const renewToken = () => {
    return request({
        url: "/auth/renew-token",
        method: "GET"
    });
};
