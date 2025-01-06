import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const avatarSchema=z.object({
    avatar:z.instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only image files are allowed",
    }).refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),    // formultiple files .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type)
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
})