"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios, { AxiosError } from "axios"
import handleAxiosError from "@/helpers/handleAxiosError"
import { Loader2 } from "lucide-react"
import { ApiErrorInterface } from "@/types/ApiErrorInterface"
import { ApiResponseInterface } from "@/types/ApiResponseInterface"
import Link from "next/link"
import { logInSchema } from "@/schemas/logInSchema"

export default function SignUpForm() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter()
    //  const {toast}=useToast()


    const form = useForm<z.infer<typeof logInSchema>>({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            identifier: "",
            password: ""
        },
    })

    async function onSubmit(data: z.infer<typeof logInSchema>) {
        setIsSubmitting(true)
        try {
            const response = await axios.post<ApiResponseInterface | ApiErrorInterface>('/api/log-in', data);
            if (response?.data?.success) {
                toast({
                    title: "Success. You submitted the following values:",
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    ),
                })
                router.replace('/')
            }
        } catch (error) {
            const response = handleAxiosError(error as AxiosError<ApiErrorInterface>);
            const errorMessage = response?.message
            console.log("Login error", response);

            toast({
                title: "User login failed",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{errorMessage || "Something went wrong"}</code>
                    </pre>
                ),
                variant: "destructive",
            })

        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card className="w-[450px] max-w-7xl mx-auto my-16 shadow-md">
            <CardHeader>
                <CardTitle>Whisper Net</CardTitle>
                <CardDescription>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Log in here
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Do not have an account?&nbsp;
                        <Link href="/sign-up" className="text-blue-600">Sign up here</Link>
                    </p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="identifier"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email or Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter email or username..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter password..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button type="submit" onClick={form.handleSubmit(onSubmit)} className='w-full' disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                    ) : (
                        'Log in'
                    )}
                </Button>
            </CardFooter>
        </Card>
    )
}
