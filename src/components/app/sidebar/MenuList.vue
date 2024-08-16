<script setup>
import { defineProps, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { DotIcon } from "@radix-icons/vue";

import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AccordionContent from "@/components/ui/accordion/AccordionContent.vue";

defineProps({
    menus: Array
});

const router = useRouter();
const currentRoutePath = computed(() => router.currentRoute.value.path);
const defaultValue = computed(() => router.currentRoute.value.meta?.key);

const getActiveMenu = routes => {
    const pathListParent = routes?.children.map(route => route.path);

    if (Array.isArray(pathListParent)) {
        if (pathListParent.includes(currentRoutePath.value)) {
            return "active";
        }
        return "";
    } else {
        return currentRoutePath.value === routes ? "active" : "";
    }
};
</script>

<template>
    <div v-for="menu in menus" :key="menu.title" class="flex flex-col mx-3 mb-4">
        <span class="uppercase text-[10px] text-gray-300 font-bold mb-2">{{ menu?.root?.displayName }}</span>
        <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
            <AccordionItem
                v-for="childMenu in menu?.root?.children"
                :key="childMenu?.name"
                :value="childMenu?.name"
                class="border-none"
            >
                <AccordionTrigger
                    class="text-white py-3 px-3 hover:no-underline font-bold hover:bg-gray-500 transition duration-200 rounded-lg"
                    :class="getActiveMenu(childMenu)"
                >
                    <div class="flex items-center gap-3">
                        <component :is="childMenu.icon" />
                        {{ childMenu.displayName }}
                    </div>
                </AccordionTrigger>
                <AccordionContent class="pl-3 mt-2">
                    <div
                        v-for="route in childMenu?.children"
                        :key="route.name"
                        class="rounded-lg hover:bg-gray-500 mb-2"
                        :class="{ active: currentRoutePath === route?.path }"
                    >
                        <RouterLink class="flex items-center gap-2 py-3 px-1 text-white font-semibold pl-3" :to="route?.path">
                            <DotIcon />
                            <span>
                                {{ route?.displayName }}
                            </span>
                        </RouterLink>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
</template>

<style lang="scss">
.active {
    @apply bg-gray-700;
    color: #fff;
}
</style>
