<script setup>
import { Pencil1Icon, TrashIcon, EyeOpenIcon } from "@radix-icons/vue";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

defineProps({
    post: { type: Object, required: true },
    isCheck: { type: Boolean, default: false }
});
const emits = defineEmits(["selectPost", "edit", "delete", "preview"]);
</script>

<template>
    <Card class="post cursor-pointer hover:border-primary" :class="cn('border', isCheck ? 'border-primary' : 'border-muted')">
        <CardContent class="px-2 py-6 post-content h-full">
            <div class="flex items-center gap-4 h-full">
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
                <div class="post-title my-2">
                    <CardTitle class="line-clamp-1 font-medium">{{ post.title }}</CardTitle>
                    <CardDescription class="line-clamp-1">{{ post.body }}</CardDescription>
                    <div class="post-tags mt-2">
                        <Badge v-for="tag in post.tags" :key="tag" class="mr-1" variant="outline">{{ tag }}</Badge>
                    </div>
                </div>

                <div class="post-action flex items-center">
                    <Button variant="ghost" size="icon" @click="emits('edit', post.id)">
                        <Pencil1Icon />
                    </Button>
                    <Button variant="ghost" size="icon" @click="emits('delete', post.id)">
                        <TrashIcon />
                    </Button>
                    <Button variant="ghost" size="icon" @click="emits('preview', post.id)">
                        <EyeOpenIcon />
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<style lang="scss" scoped></style>
