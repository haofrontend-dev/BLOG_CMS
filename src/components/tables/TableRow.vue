<script setup>
import { TableRow, TableCell } from "@/components/ui/table";
import FlexRender from "@/components/app/flex-render/index.vue";

const props = defineProps({
    row: { type: Object, required: true }
});
</script>

<template>
    <TableRow>
        <TableCell v-for="cell in row" :key="cell">
            {{ console.log(cell) }}
            <FlexRender :render="cell.renderCell" />
        </TableCell>
    </TableRow>
</template>
<style lang="scss" scoped></style>
