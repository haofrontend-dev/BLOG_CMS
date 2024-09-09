<template>
    <div class="bg-white rounded-3xl ml-auto px-6 py-4 fixed bottom-0 right-0 left-0 lg:left-[250px] z-10">
        <div class="flex items-center gap-2 justify-between">
            <div class="flex items-center gap-3">
                <Button size="icon" variant="ghost" @click="clearAll">
                    <Cross1Icon class="w-4 h-4" />
                </Button>
                <span class="text-lg">
                    <Badge variant="destructive" class="mr-2 align-middle">{{ numberSelect }}</Badge>
                    <span class="align-middle">đã chọn</span>
                </span>
            </div>

            <div class="flex items-center gap-3">
                <Button class="bg-slate-100 text-gray-800 rounded-full flex items-center gap-2">
                    <EnvelopeOpenIcon /> Gửi mail
                </Button>
                <Button class="bg-slate-100 text-gray-800 rounded-full flex items-center gap-2">
                    <Pencil1Icon /> Chỉnh sửa
                </Button>
                <Button class="bg-slate-100 text-gray-800 rounded-full flex items-center gap-2">
                    <DownloadIcon /> Tải xuống
                </Button>
                <Button variant="destructive" class="rounded-full flex items-center gap-2"> <TrashIcon /> Xóa </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Cross1Icon, EnvelopeOpenIcon, Pencil1Icon, DownloadIcon, TrashIcon } from "@radix-icons/vue";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const props = defineProps({
    render: { type: Function, required: true },
    numberSelect: { type: Number, default: 0 }
});
const emits = defineEmits(["clear-all", "send-mail", "edit", "delete"]);

const clearAll = () => {
    emits("clear-all");
};
</script>

<style lang="scss" scoped></style>
