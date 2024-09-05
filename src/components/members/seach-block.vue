<script setup>
import { reactive } from "vue";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const state = reactive({
    email: ""
});
</script>

<template>
    <div class="h-full bg-white p-4 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div class="form-item">
                <Label for="email" class="font-medium text-gray-700">Email</Label>
                <Input v-model="state.email" type="text" placeholder="Tìm kiếm email..." />
            </div>

            <div class="form-item">
                <Label for="email" class="font-medium text-gray-700">Tên người dùng</Label>
                <Input v-model="state.email" type="text" placeholder="Tìm kiếm người dùng..." />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.form-item {
    @apply flex flex-col gap-2;
}
</style>
