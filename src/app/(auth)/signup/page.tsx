"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
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
import { signUpSchema } from "@/schemas/signUpSchema"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios, { AxiosError } from "axios"
import handleAxiosError from "@/helpers/handleAxiosError"
import { Loader2 } from "lucide-react"
import { ApiErrorInterface } from "@/types/ApiErrorInterface"
import { ApiResponseInterface } from "@/types/ApiResponseInterface"
import Link from "next/link"

export default function SignUpForm() {

  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null); // Store the timeout ID

  const router = useRouter()
  //  const {toast}=useToast()
  const checkUsernameAvailability = async (username: string) => {
    if (!username) return
    setIsCheckingUsername(true);
    try {
      const response = await axios.get<ApiErrorInterface | ApiResponseInterface>('/api/check-username-unique',
        {
          params: {
            username
          }
        }
      );
      setUsernameMessage(response?.data?.message);
    } catch (error) {

      const response = handleAxiosError(error as AxiosError<ApiErrorInterface>);

      const errorMessage = response?.errors ? (response?.errors?.join(', ')) : response?.message;
      setUsernameMessage(errorMessage);

    } finally {
      setIsCheckingUsername(false);
    }

  }
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      checkUsernameAvailability(e.target.value);
    }, 500)
    setTimeoutId(newTimeoutId)
  }
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })

  async function onSubmit(data: z.infer<typeof signUpSchema>) {
    setIsSubmitting(true)
    try {
      const response = await axios.post<ApiResponseInterface | ApiErrorInterface>('/api/sign-up', data);
      if (response?.data?.success) {
        toast({
          title: "Success",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{response?.data?.message}</code>
            </pre>
          ),
        })
        router.push('/verify-account/' + encodeURIComponent(data.username))
      }
    } catch (error) {
      const response = handleAxiosError(error as AxiosError<ApiErrorInterface>);
      const errorMessage = response?.data?.message
      toast({
        title: "User registration failed",
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
          Sign up here
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
           Already have an account?&nbsp;
            <Link href="/log-in" className="text-blue-600">Login here</Link>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleUsernameChange(e)
                      }} />
                  </FormControl>
                  {isCheckingUsername && <Loader2 className="animate-spin" />}
                  {!isCheckingUsername && usernameMessage &&
                    <FormDescription className={`${usernameMessage === "Username is unique" ? "text-green-500" : "text-red-500"}`}>{usernameMessage}</FormDescription>}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormDescription>
                    A verification code will be sent to this email.
                  </FormDescription>
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
                  <FormDescription>
                    Password must be at least 6 characters long.
                  </FormDescription>
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
                'Sign Up'
              )}
            </Button>
      </CardFooter>
    </Card>
  )
}
