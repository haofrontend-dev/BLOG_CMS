import NProgress from "nprogress";
import "nprogress/nprogress.css";
import router from "./index";
import { useTitle } from "@/hooks/useTitle";
import { getToken } from "@/utils/cache/storage";
import isWhiteList from "@/configs/whiteList";

const { setTitle } = useTitle();

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
    NProgress.start();

    const token = getToken();

    if (!token && !isWhiteList(to)) {
        return next("/login");
    }

    if (to.path === "/login" && token) {
        return next({ path: "/" });
    }

    next();
});

router.afterEach(to => {
    setTitle(to.meta.title);
    NProgress.done();
});
