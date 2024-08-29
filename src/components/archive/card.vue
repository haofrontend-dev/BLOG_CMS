<script setup>
import { Pencil1Icon } from "@radix-icons/vue";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

defineProps({
    post: { type: Object, required: true },
    isCheck: { type: Boolean, default: false }
});
const emits = defineEmits(["selectPost"]);
</script>

<template>
    <Card class="post cursor-pointer hover:border-primary" :class="cn('border', isCheck ? 'border-primary' : 'border-muted')">
        <CardContent class="px-2 py-6 post-content">
            <div class="flex items-center gap-4">
                <div class="post-checked flex-shrink-0">
                    <Checkbox :checked="isCheck" @update:checked="emits('selectPost', post.id)" />
                </div>
                <div class="post-post flex-shrink-0">
                    <img
                        src="https://tingtingreview.vercel.app/_vercel/image?url=%2Fblogs-img%2Fblog3.jpg&w=320&q=100"
                        alt="Image Post"
                        class="h-full w-[80px]"
                    />
                </div>
                <div class="post-title">
                    <CardTitle class="line-clamp-2">{{ post.title }}</CardTitle>
                    <CardDescription class="line-clamp-1 mt-2">{{ post.body }}</CardDescription>
                </div>

                <div class="post-action">
                    <Button variant="ghost" size="icon">
                        <Pencil1Icon />
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<style lang="scss" scoped></style>
