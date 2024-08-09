import { ref, watch } from "vue";

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE || "TingTing Admin";

const dynamicTitle = ref("");

const setTitle = title => {
    dynamicTitle.value = title ? `${title} - ${VITE_APP_TITLE}` : VITE_APP_TITLE;
};

watch(dynamicTitle, (value, oldValue) => {
    if (document && value !== oldValue) {
        document.title = value;
    }
});

export const useTitle = () => {
    return {
        setTitle
    };
};
