const requestLimits = {};
const maxRequests = 5; // Số lần request tối đa
const resetTime = 30 * 1000; // 30 giây

export const rateLimiter = apiName => {
    if (!requestLimits[apiName]) {
        requestLimits[apiName] = { count: 0, firstRequestTime: Date.now() };
    }

    const currentTime = Date.now();
    const elapsedTime = currentTime - requestLimits[apiName].firstRequestTime;

    if (elapsedTime > resetTime) {
        // Reset request counter sau thời gian reset
        requestLimits[apiName] = { count: 0, firstRequestTime: currentTime };
    }

    if (requestLimits[apiName].count >= maxRequests) {
        return false; // Chặn request nếu vượt quá giới hạn
    }
    requestLimits[apiName].count++;
    return true; // Cho phép request
};
