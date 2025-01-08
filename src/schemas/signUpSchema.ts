import {z} from "zod";

export const usernameSchmea = z.string()
.trim()
.min(6, "Username must be at least 6 characters long")
.max(20, "Username must be at most 20 characters long")
.regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores");

export const signUpSchema = z.object({
    username: usernameSchmea,
    email: z.string().trim().email({message: "Please enter a valid email address"}).min(1, "Email is required"),
    password: z.string().trim().min(6, "Password must be at least 6 characters long")
})