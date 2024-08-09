import { v4 as uuidv4 } from "uuid";
import { getStorageDeviceId, setStorageDeviceId } from "@/utils/cache/storage";

export const getDeviceId = () => {
    const deviceId = getStorageDeviceId();

    if (!deviceId) {
        const newDeviceId = uuidv4();
        setStorageDeviceId(newDeviceId);
        return newDeviceId;
    }

    return deviceId;
};
