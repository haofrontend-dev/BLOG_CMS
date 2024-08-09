<script setup>
// * LIB
import { HamburgerMenuIcon, AvatarIcon, EnterIcon } from "@radix-icons/vue";

// * IMPORT
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// * FUNCTIONS
const handleLogout = () => {};
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
</template>

<style lang="scss" scoped></style>
