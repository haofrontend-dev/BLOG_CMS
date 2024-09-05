<script setup>
// * LIB
import { ref, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { HamburgerMenuIcon, AvatarIcon, EnterIcon, PersonIcon } from "@radix-icons/vue";

// * IMPORT
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import LoadingModal from "@/components/app/loading/modal.vue";
import { useAuthStore } from "@/store/modules/auth";
import { useProfileStore } from "@/store/modules/profile";
import { useSystemStore } from "@/store/modules/system";
import { cn } from "@/lib/utils";

const router = useRouter();
const authStore = useAuthStore();
const systemStore = useSystemStore();
const profileStore = useProfileStore();

const emits = defineEmits(["clickBar"]);
const loading = ref(false);

// * FUNCTIONS

const handleLogout = async () => {
    // Call the logout function from the authStore
    loading.value = true;
    try {
        await authStore.dispatchLogout();
        router.push({ name: "login" });
    } catch (error) {
        router.push({ name: "login" });
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <header
        class="fixed left-0 top-0 right-0 h-[50px] shadow-md transition-all bg-white"
        :class="cn([systemStore.isSidebar ? 'lg:left-[250px]' : 'lg:left-0'])"
    >
        <div class="flex items-center justify-between h-full w-full">
            <Button class="ml-2" variant="outline" size="icon" @click="emits('clickBar')">
                <HamburgerMenuIcon class="w-4 h-4" />
            </Button>
            <div class="flex items-center gap-4 px-4">
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline" size="icon">
                            <AvatarIcon class="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-40" align="end">
                        <DropdownMenuItem>{{ profileStore.profile?.username }}</DropdownMenuItem>
                        <DropdownMenuItem
                            class="cursor-pointer"
                            @click="
                                router.push({
                                    name: 'profile'
                                })
                            "
                        >
                            <PersonIcon class="mr-2 h-4 w-4" /> Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem class="cursor-pointer" @click="handleLogout">
                            <EnterIcon class="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </header>
    <LoadingModal v-if="loading" />
</template>

<style lang="scss" scoped></style>
