"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast, useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { avatarSchema } from "@/schemas/avatarSchema"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { ApiResponseInterface } from "@/types/ApiResponseInterface"
import { ApiErrorInterface } from "@/types/ApiErrorInterface"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import handleAxiosError from "@/helpers/handleAxiosError"
function UploadAvatar() {
    const [isUploading, setIsUploading]=useState(false)
    const router = useRouter()

    const {toast}=useToast()
    const form = useForm<z.infer<typeof avatarSchema>>({
        resolver: zodResolver(avatarSchema),
    })

    async function onSubmit(data: z.infer<typeof avatarSchema>) {
        setIsUploading(true)
        try {
            if (data.avatar) {
                const formData = new FormData();
                formData.append("avatar", data.avatar);
                const response = await axios.post<ApiResponseInterface | ApiErrorInterface>('/api/upload-avatar', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                console.log("Avatar upload response:", response);
                
                if (response?.data?.success) {
                    toast({
                        title: "Success",
                        description: response?.data?.message || "Avatar uploaded successfully",
                    })
                }
            }

        } catch (error) {
            const response = handleAxiosError(error as AxiosError<ApiErrorInterface>);
            const errorMessage = response?.message
            console.log('Error whhile uploading avatar:', response);
            
            toast({
                title: "Upload failed",
                description: errorMessage || "Error occurred while uploading avatar",
            })
        } finally{
            setIsUploading(false)
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="avatar"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Avatar Image</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="avatar"
                                    type="file"
                                    alt="avatar"
                                    accept="image/*"  // not using {...field } here beacuse it does not define a type for FIle type
                                    onChange={(e) => {
                                        // Manually set the selected file
                                        field.onChange(e.target.files?.[0])
                                    }}
                                    onBlur={field.onBlur}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit"> {isUploading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                    ) : (
                        'Upload'
                    )}</Button>
            </form>
        </Form>
    )
}

export default UploadAvatar;