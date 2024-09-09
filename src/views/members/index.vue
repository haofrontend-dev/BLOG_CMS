<script setup>
import { PlusIcon } from "@radix-icons/vue";
import { Button } from "@/components/ui/button";
import MemberSearchBlock from "@/components/members/SearchBlock.vue";
import MemberDataTable from "@/components/members/DataTable.vue";
</script>

<template>
    <div class="relative w-full flex flex-col gap-4">
        <div class="flex justify-end">
            <Button class="hover:bg-primary hover:opacity-90">
                <PlusIcon class="w-4 h-4 mr-1" />
                Tạo thành viên
            </Button>
        </div>
        <MemberSearchBlock />
        <MemberDataTable />
    </div>
</template>

<style lang="scss" scoped></style>
