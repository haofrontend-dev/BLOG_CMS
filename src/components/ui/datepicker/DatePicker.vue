<script setup>
import { DateFormatter, getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon } from "@radix-icons/vue";
import { Calendar } from "@/components/ui/calendar";
import { RangeCalendar } from "@/components/ui/range-calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const props = defineProps({
    classCalendar: { type: String },
    type: {
        type: String,
        default: "date"
    }
});

const model = defineModel();

const df = new DateFormatter("vi-VN", {
    dateStyle: "long"
});
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                variant="outline"
                :class="cn('w-[280px] justify-start text-left font-normal', !model && 'text-muted-foreground', classCalendar)"
            >
                <CalendarIcon class="mr-2 h-4 w-4" />
                <template v-if="type === 'date'">
                    {{ model ? df.format(model.toDate(getLocalTimeZone())) : "Pick a date" }}
                </template>
                <template v-else>
                    <template v-if="model.start">
                        <template v-if="model.end">
                            {{ df.format(model.start.toDate(getLocalTimeZone())) }} -
                            {{ df.format(model.end.toDate(getLocalTimeZone())) }}
                        </template>

                        <template v-else>
                            {{ df.format(model.start.toDate(getLocalTimeZone())) }}
                        </template>
                    </template>
                    <template v-else> Pick a date </template>
                </template>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0" align="start">
            <template v-if="type === 'date'">
                <Calendar v-model="model" initial-focus />
            </template>
            <template v-else>
                <RangeCalendar
                    v-model="model"
                    initial-focus
                    :number-of-months="2"
                    @update:start-value="startDate => (model.start = startDate)"
                />
            </template>
        </PopoverContent>
    </Popover>
</template>

<style lang="scss" scoped></style>
