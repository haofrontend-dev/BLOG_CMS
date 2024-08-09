import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export const LoginShchema = toTypedSchema(
    z.object({
        username: z
            .string({
                message: "Nhập tên người dùng"
            })
            .min(1, {
                message: "Nhập tên người dùng"
            }),
        password: z
            .string({
                message: "Nhập mật khảu"
            })
            .min(4, {
                message: "Nhập mật khảu"
            })
    })
);
