import {z} from "zod";

export const usernameSchmea = z.string()
.min(6, "Username must be at least 6 characters long")
.max(20, "Username must be at most 20 characters long")
.regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores");

export const signUpSchema = z.object({
    username: usernameSchmea,
    email: z.string().email({message: "Please enter a valid email address"}),
    password: z.string().min(6, "Password must be at least 6 characters long")
})