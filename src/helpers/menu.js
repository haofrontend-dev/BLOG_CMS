export const getActiveMenu = routes => {
    const path = window.location.pathname;

    if (Array.isArray(routes)) {
        routes.forEach(route => {
            if (path.startsWith(route)) {
                return "active";
            }
        });
        return "";
    } else {
        if (path.startsWith(routes)) {
            return "active";
        }
        return "";
    }
};
