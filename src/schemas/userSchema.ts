import { z } from "zod";

export const UserSchema = z.object({
    email: z
        .string()
        .min(2, {
            message: "Email must be at least 2 characters.",
        })
        .email({ message: "Email is Invalid" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters." }),
});

export type UserSchemaType = z.infer<typeof UserSchema>;