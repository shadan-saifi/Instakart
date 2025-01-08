import { z } from "zod";

export const logInSchema = z.object({
    identifier: z.string().trim().min(1, { message: "Identifier is required" }),
    password: z.string().trim().min(1, { message: "Password is required" }),
});
