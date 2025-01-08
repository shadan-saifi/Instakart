import { ApiError } from "@/helpers/ApiError"
import { ApiResponse } from "@/helpers/ApiResponse"
import { asyncHandler } from "@/helpers/asyncHandler"
import dbConnect from "@/lib/dbConnect"
import UserModel from "@/models/user.model"
import { verificationCodeSchema } from "@/schemas/verifySchema"
import { NextRequest, NextResponse } from "next/server"



export const POST = asyncHandler(async (request?: NextRequest): Promise<NextResponse> => {
    await dbConnect()
   const res = await request?.json().catch(() => {
        return NextResponse.json(new ApiError(400, "Invalid JSON format"), {
          status: 400,
        });
      });
      const result = verificationCodeSchema.safeParse(res);
      const { success, error, data } = result;
    
      if (!success) {
        const errosArray = error?.format()?._errors || [];
        return NextResponse.json(
          new ApiError(
            400,
            "Invalid username",
            errosArray.length > 0 ? errosArray : []
          ),
          { status: 400 }
        );
      }
    const { username, code } = data
    if (!username || !code) {
        return NextResponse.json(new ApiError(400, 'Username and code are required'), { status: 400 })
    }
    
    const user = await UserModel.findOne({ username })
    
    if (!user) {
        
        return NextResponse.json(new ApiError(400, 'User not found'), { status: 400 })
    }
    const isCodeValid = user.verifyCode === code
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date()

    if (isCodeValid && isCodeNotExpired) {

        user.isVerified = true
        await user.save()
        return NextResponse.json(new ApiResponse(200, 'User verified successfully'), { status: 200 })

    } else if (!isCodeValid) {

        return NextResponse.json(new ApiError(400, 'Invalid verification code'), { status: 400 })

    } else {

        return NextResponse.json(new ApiError(400, 'Verification code has expired. Sign up again to get a new code'), { status: 400 })
    }
})