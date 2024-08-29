<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import { ExclamationTriangleIcon, ReloadIcon } from "@radix-icons/vue";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { LoginShchema } from "@/schema/loginSchema";
import { useAuthStore } from "@/store/modules/auth";
import MessageResponse from "@/constants/messageResponse";

const authStore = useAuthStore();
const router = useRouter();
const loading = ref(false);
const errorLogin = ref(null);

const { isFieldDirty, handleSubmit, errors } = useForm({
    validationSchema: LoginShchema
});

const onSubmit = handleSubmit(async values => {
    loading.value = true;
    try {
        const { success } = await authStore.dispatchLogin({
            indentifier: values.username,
            password: values.password
        });

        if (!success) {
            errorLogin.value = MessageResponse.LOGIN_BAD;
            return;
        }

        return router.push({ name: "admin" });
    } catch (error) {
        console.error("Handle error: ", error);
    } finally {
        loading.value = false;
    }
});
</script>

<template>
    <div class="h-screen flex items-center justify-center bg-slate-900">
        <div class="min-w-[350px] border border-gray-200 rounded-xl">
            <div id="logo" class="w-[200px] mx-auto mt-3">
                <img src="@/assets/images/logo.png" class="object-cover w-full" />
            </div>
            <form class="w-full space-y-6 px-3 my-3" @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
                    <FormItem>
                        <FormLabel class="text-white">Tài khoản</FormLabel>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Nhập tài khoản"
                                class="text-white h-12"
                                :class="{ 'border-red-500': errors.username }"
                                v-bind="componentField"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
                    <FormItem>
                        <FormLabel class="text-white">Mật khẩu</FormLabel>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Nhập mật khẩu"
                                class="text-white h-12"
                                :class="{ 'border-red-500': errors.password }"
                                v-bind="componentField"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <Alert v-if="errorLogin" variant="destructive">
                    <ExclamationTriangleIcon class="w-4 h-4" />
                    <AlertTitle>Lỗi</AlertTitle>
                    <AlertDescription> {{ errorLogin }} </AlertDescription>
                </Alert>
                <Button :disabled="loading" type="submit" class="hover:bg-primary hover:opacity-90 w-full h-10">
                    <ReloadIcon v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
                    Đăng nhập
                </Button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
