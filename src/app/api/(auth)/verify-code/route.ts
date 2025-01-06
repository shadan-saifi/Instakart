import { ApiError } from "@/helpers/ApiError"
import { ApiResponse } from "@/helpers/ApiResponse"
import { asyncHandler } from "@/helpers/asyncHandler"
import dbConnect from "@/lib/dbConnect"
import UserModel from "@/models/user.model"
import { NextRequest, NextResponse } from "next/server"



export const POST = asyncHandler(async (request?: NextRequest): Promise<NextResponse> => {
    await dbConnect()
    
    let { username, code } = await request?.json()
    username = username.trim()
    code = code.trim()
    if (!username || !code) {
        return NextResponse.json(new ApiError(400, 'Username and code are required'), { status: 400 })
    }

    const decodedUsername = decodeURIComponent(username)
    
    const user = await UserModel.findOne({ username: decodedUsername })
    
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