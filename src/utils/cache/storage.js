// * LIB
// * IMPORT
import CacheKey from "@/constants/cacheKey";

export const setToken = token => localStorage.setItem(CacheKey.TOKEN, token);

export const getToken = () => localStorage.getItem(CacheKey.TOKEN);

export const removeToken = () => localStorage.removeItem(CacheKey.TOKEN);

export const setStorageDeviceId = deviceId => localStorage.setItem(CacheKey.DEVICE_ID, deviceId);

export const getStorageDeviceId = () => localStorage.getItem(CacheKey.DEVICE_ID);
