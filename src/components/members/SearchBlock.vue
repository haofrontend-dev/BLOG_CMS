<script setup>
import { reactive } from "vue";
import { MagnifyingGlassIcon, Cross1Icon } from "@radix-icons/vue";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Datepicker } from "@/components/ui/datepicker";
import { Button } from "@/components/ui/button";

const state = reactive({
    email: "",
    user_name: "",
    role: "",
    status: "",
    created_date: "",
    last_updated_date: ""
});

const Roles = ["editor", "member"];
const listStatus = [
    { key: 10, value: "Đang hoạt động", started: true },
    { key: 20, value: "Không hoạt động", started: false },
    { key: 30, value: "Đã xóa", started: false },
    { key: 40, value: "Đã khóa", started: false }
];
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

            <div class="form-item">
                <Label for="email" class="font-medium text-gray-700">Vị trí</Label>
                <Select v-model="state.role">
                    <SelectTrigger class="">
                        <SelectValue placeholder="Chọn vị trí" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem v-for="role in Roles" :key="role" :value="role">
                                <span class="uppercase">{{ role }}</span>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div class="form-item">
                <Label for="email" class="font-medium text-gray-700">Trạng thái</Label>
                <Select v-model="state.status">
                    <SelectTrigger class="">
                        <SelectValue placeholder="Chọn vị trí" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem v-for="status in listStatus" :key="status.key" :value="String(status.key)">
                                <span class="uppercase">{{ status.value }}</span>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div class="form-item">
                <Label for="email" class="font-medium text-gray-700">Ngày tạo tài khoản </Label>
                <Datepicker v-model="state.created_date" />
            </div>

            <div class="form-item">
                <Label for="email" class="font-medium text-gray-700">Ngày cập nhật cuối</Label>
                <Datepicker v-model="state.created_date" />
            </div>
        </div>

        <div class="flex justify-center gap-4 items-center my-6">
            <Button type="button" class="hover:bg-primary hover:opacity-90">
                <MagnifyingGlassIcon class="w-4 h-4 mr-1" />
                Tìm kiếm
            </Button>
            <Button type="button" variant="destructive">
                <Cross1Icon class="w-4 h-4 mr-1" />
                Xóa
            </Button>
        </div>
    </div>
</template>

<style lang="scss">
.form-item {
    @apply flex flex-col gap-2;
}
</style>
