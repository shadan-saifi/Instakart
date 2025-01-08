import { ApiResponse } from "@/helpers/ApiResponse";
import { asyncHandler } from "@/helpers/asyncHandler";
import dbConnect from "@/lib/dbConnect";
import {  NextResponse } from "next/server";



export const POST = asyncHandler(async (): Promise<NextResponse> => {
    await dbConnect()

    const response = NextResponse.json(new ApiResponse(200, 'User logged out successfully'), { status: 200 })
    response.cookies.set("token", "", {
        httpOnly: true,
        expires: new Date(0),
    })
    return response
})