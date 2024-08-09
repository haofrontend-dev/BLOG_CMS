import axios from "axios";
import _ from "lodash";

import { getToken } from "./cache/storage";
import { getDeviceId } from "@/helpers/device";
import { rateLimiter } from "@/helpers/rateLimiter";
import SlugResponse from "@/constants/slugResponse";

const createService = () => {
    const instance = axios.create();
    const deviceId = getDeviceId();

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
        error => {
            // status 是 HTTP 状态码
            const status = _.get(error, "response.status");
            switch (status) {
                case 400:
                    error.message = "Request Error";
                    break;
                case 401:
                    // Token 过期时
                    error.message = "Login expired";
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
