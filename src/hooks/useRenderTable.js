import { ref, computed } from "vue";

// * RENDER TABLE
export const useRenderTable = ({ data, columns: defaultColumns, onRowClick, onSortChange }) => {
    const tableLoading = ref(false);
    const selectAll = ref(false);
    const selectRows = ref([]);

    const columns = computed(() => {
        return defaultColumns.map(column => {
            return {
                ...column,
                getIsAllSelected: () => selectAll.value,
                getIsSomeSelected: () => selectRows.value.length > 0 && selectRows.value.length < data.length,
                toggleSorting: () => column.onSort(),
                toggleAllPageRowsSelected: value => {
                    selectAll.value = value;
                    if (value) {
                        selectRows.value = data.map(row => row.id);
                    } else {
                        selectRows.value = [];
                    }
                }
            };
        });
    });

    const tableColumns = computed(() => {
        return columns.value.map((column, index, array) => {
            return {
                ...column,
                onSort: () => onSort(column, index, array),
                renderColum: () => {
                    return column.header({ column });
                }
            };
        });
    });

    const tableData = computed(() => {
        return data.map(row => {
            const newRow = {};
            columns.value.forEach(column => {
                newRow[column.field] = {
                    value: row[column.field] ?? false,
                    getIsSelected: () => selectRows.value.includes(row.id),
                    toggleSelected: value => onSelectRow(row.id),
                    getValue: value => row[value],
                    renderCell: () => column.cell({ row: { ...newRow[column.field] } })
                };
            });
            return newRow;
        });
    });

    const onSort = (column, order) => {
        if (onSortChange) {
            onSortChange(column, order);
        }
    };

    const onRowClickHandler = row => {
        if (onRowClick) {
            onRowClick(row);
        }
    };

    const updateData = newData => {
        tableData.value = newData;
    };

    const updateLoading = isLoading => {
        tableLoading.value = isLoading;
    };

    const hadleSelectAll = () => {
        selectAll.value = !selectAll.value;
    };

    const onSelectRow = id => {
        if (selectRows.value.includes(id)) {
            selectRows.value.splice(selectRows.indexOf(id), 1);
        } else {
            selectRows.value.push(id);
        }
    };

    return {
        tableData: tableData.value,
        tableColumns: tableColumns.value,
        tableLoading: tableLoading.value,
        onSort,
        onRowClick: onRowClickHandler,
        updateData,
        updateLoading,
        tableSelectAll: hadleSelectAll
    };
};
