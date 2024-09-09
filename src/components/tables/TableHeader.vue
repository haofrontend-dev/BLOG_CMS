<template>
    <TableHeader>
        <TableRow>
            <TableHead v-for="col in headers" :key="col?.field">
                <FlexRender :render="col?.renderColum" />
            </TableHead>
        </TableRow>
    </TableHeader>
</template>

<script setup>
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";
import FlexRender from "@/components/app/flex-render/index.vue";
const props = defineProps({
    headers: { type: Array, required: true }
});
</script>

<style lang="scss" scoped></style>
