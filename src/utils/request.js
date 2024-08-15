import axios from "axios";
import _ from "lodash";

import { getToken } from "./cache/storage";
import { getDeviceId } from "@/helpers/device";
import { rateLimiter } from "@/helpers/rateLimiter";
import SlugResponse from "@/constants/slugResponse";
import { useAuthStore } from "@/store/modules/auth";

const createService = () => {
    const instance = axios.create();
    const deviceId = getDeviceId();
    let originalRequest = null;
    const headers = {
        "X-DEVICE-ID": deviceId
    };

    instance.interceptors.request.use(
        config => config,
        error => Promise.reject(error)
    );

    instance.interceptors.response.use(
        response => {
            const apiData = response.data;
            const responseType = response.request?.responseType;
            if (responseType === "blob" || responseType === "arraybuffer") return apiData;
            return _.get(apiData, "data", apiData);
        },
        async error => {
            const status = _.get(error, "response.status");
            const slug = _.get(error, "response.data.message");
            originalRequest = error.config;

            // Xử lý các lỗi khác
            switch (status) {
                case 400:
                    error.message = "Request Error";
                    break;
                case 401:
                    const authStore = useAuthStore();
                    error.message = "Login denied";
                    if (slug === "access_expired") {
                        try {
                            await authStore.renewToken();
                            const token = getToken();
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            console.log(originalRequest);

                            return request(originalRequest);
                        } catch (renewError) {
                            return Promise.reject(renewError);
                        }
                    } else if (slug === "invalid_token") {
                        authStore.deleteToken();
                    }
                    break;
                case 403:
                    error.message = "Access denied";
                    break;
                case 404:
                    error.message = "Request address error";
                    break;
                case 408:
                    error.message = "Request timed out";
                    break;
                case 500:
                    error.message = "Internal server error";
                    break;
                case 501:
                    error.message = "Service not implemented";
                    break;
                case 502:
                    error.message = "Gateway Error";
                    break;
                case 503:
                    error.message = "Service is not available";
                    break;
                case 504:
                    error.message = "Gateway timeout";
                    break;
                case 505:
                    error.message = "HTTP version not supported";
                    break;
                default:
                    break;
            }
            return Promise.reject(error);
        }
    );

    instance.defaults.headers = headers;
    return instance;
};

const createRequest = service => {
    return config => {
        const token = getToken();
        const defaultConfig = {
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
                "Content-Type": "application/json"
            },
            timeout: 5000,
            baseURL: "/api/v1",
            data: {}
        };

        const mergeConfig = _.merge(defaultConfig, config);
        return service(mergeConfig);
    };
};

const service = createService();

export const request = createRequest(service);

export const handleAsyncRequest = async (apiName, apiCallFunction) => {
    if (!rateLimiter(apiName)) {
        const error = new Error(SlugResponse.LIMIT_RATE);
        return Promise.reject(error);
    }
    return apiCallFunction();
};
