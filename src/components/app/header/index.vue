<script setup>
// * LIB
import { ref } from "vue";
import { useRouter } from "vue-router";
import { HamburgerMenuIcon, AvatarIcon, EnterIcon } from "@radix-icons/vue";

// * IMPORT
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import LoadingModal from "@/components/app/loading/modal.vue";
import { useAuthStore } from "@/store/modules/auth";

const router = useRouter();
const authStore = useAuthStore();

const loading = ref(false);

// * FUNCTIONS
/**
 * Logout function
 * This function logs out the user by calling the logout function from the authStore.
 * After logging out, it deletes the token, and redirects the user to the login page.
 * This function is called when the user clicks on the logout button in the header component.
 */
const handleLogout = () => {
    // Call the logout function from the authStore
    loading.value = true;
    authStore
        .logout()
        .then(() => {
            // Delete the token
            authStore.deleteToken();
            // Redirect the user to the login page
            router.push({ name: "login" });
        })
        .catch(error => {
            // If there is an error, delete the token and redirect the user to the login page
            authStore.deleteToken();
            router.push({ name: "login" });
        })
        .finally(() => {
            loading.value = false;
        });
};
</script>

<template>
    <header class="w-full fixed top-0 left-0 right-0 h-[50px] shadow-md lg:pl-[250px]">
        <div class="flex items-center justify-between h-full w-full">
            <Button class="ml-2" variant="outline" size="icon">
                <HamburgerMenuIcon class="w-4 h-4" />
            </Button>
            <div class="flex items-center gap-4 px-4">
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline" size="icon">
                            <AvatarIcon class="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-20" align="end">
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
