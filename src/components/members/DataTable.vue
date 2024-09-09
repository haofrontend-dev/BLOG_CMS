<script setup>
import { h } from "vue";
import { CaretSortIcon } from "@radix-icons/vue";

import TableAction from "@/components/tables/TableAction.vue";
import TableHeader from "@/components/tables/TableHeader.vue";
import TableRow from "@/components/tables/TableRow.vue";
import { Table, TableBody } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRenderTable } from "@/hooks/useRenderTable";

const columns = [
    {
        field: "select",
        label: "",
        header: ({ column }) => {
            return h(Checkbox, {
                checked: column.getIsAllSelected(),
                indeterminate: column.getIsSomeSelected(),
                "onUpdate:checked": value => column.toggleAllPageRowsSelected(!!value),
                ariaLabel: "Select all"
            });
        },
        cell: ({ row }) => {
            return h(Checkbox, {
                checked: row.getIsSelected(),
                "onUpdate:checked": value => row.toggleSelected(!!value),
                ariaLabel: "Select row"
            });
        }
    },
    {
        field: "id",
        label: "ID",
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: "ghost"
                },
                [
                    "ID",
                    h(CaretSortIcon, {
                        class: "w-4 h-4 ml-1"
                    })
                ]
            );
        },
        cell: ({ row }) => {
            return h("span", row.getValue("id"));
        }
    },
    {
        field: "email",
        label: "Email",
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: "ghost",
                    onClick: event => {
                        // column.toggleSorting("asc")
                    }
                },
                [
                    "Email",
                    h(CaretSortIcon, {
                        class: "w-4 h-4 ml-1"
                    })
                ]
            );
        },
        cell: ({ row }) => {
            return h("span", row.getValue("email"));
        }
    },
    {
        field: "status",
        label: "Trạng thái",
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: "ghost",
                    onClick: event => {
                        // column.toggleSorting("asc")
                    }
                },
                [
                    "Trạng thái",
                    h(CaretSortIcon, {
                        class: "w-4 h-4 ml-1"
                    })
                ]
            );
        },
        cell: ({ row }) => {
            return h("span", row.getValue("status"));
        }
    },
    {
        field: "amount",
        label: "Giá tiền",
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: "ghost",
                    onClick: event => {
                        // column.toggleSorting("asc");
                        console.log(123);
                    }
                },
                [
                    "Giá tiền",
                    h(CaretSortIcon, {
                        class: "w-4 h-4 ml-1"
                    })
                ]
            );
        },
        cell: ({ row }) => {
            return h("span", row.getValue("amount"));
        }
    }
];

const data = [];

const dataTable = useRenderTable({
    data,
    columns
});
</script>

<template>
    <div class="w-full relative rounded-lg">
        <TableAction />
        <Table class="bg-white">
            <TableHeader :headers="dataTable.tableColumns" />
            <TableBody>
                <TableRow v-for="row in dataTable.tableData" :key="row.id" :row="row" />
            </TableBody>
        </Table>
    </div>
</template>

<style lang="scss" scoped></style>
