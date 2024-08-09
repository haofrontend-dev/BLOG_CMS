export const getAllChildrenRoutes = route => {
    let childrenRoutes = [];
    if (route.children) {
        route.children.forEach(child => {
            childrenRoutes.push(child);
            childrenRoutes.push(...getAllChildrenRoutes(child));
        });
    }
    return childrenRoutes;
};
