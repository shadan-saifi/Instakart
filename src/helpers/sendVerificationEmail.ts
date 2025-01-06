
import VerificationEmail from "@/emails/verificationEmail";
import { ApiResponseInterface } from "@/types/ApiResponseInterface";
import { Resend } from 'resend';
import { ApiErrorInterface } from "@/types/ApiErrorInterface";
import { ApiError } from "./ApiError";
import { ApiResponse } from "./ApiResponse";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail({username,
  email,
    otp
}:{
    username:string,
    email:string,
    otp:string
}):Promise<ApiResponseInterface | ApiErrorInterface> {
  try {
    const { data } =await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
       to:  ['delivered@resend.dev',email],
      subject: 'Hello world',
      react: VerificationEmail({ username, otp }),
    });
    console.log("Verification email sent response:",data);
    return new ApiResponse(200, "Email sent successfully", data);
} catch (error) {
    console.log("Verification email sent error",error);
    return new ApiError(500, "Failed to send verification email:", [], error as any);
  }
}

