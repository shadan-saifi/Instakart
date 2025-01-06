import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import { asyncHandler } from "@/helpers/asyncHandler";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user.model";
import { usernameSchmea } from "@/schemas/signUpSchema";
import { NextRequest, NextResponse } from "next/server";



export const GET = asyncHandler(async (request?: NextRequest): Promise<NextResponse> => {
    await dbConnect()

    const searchParam = request?.nextUrl.searchParams
    const result = searchParam?.get('username')?.trim()
    if (!result) {
        return NextResponse.json(
            new ApiError(400, 'Username parameter is required', []),
            { status: 400 }
        );
    }
   const response = usernameSchmea.safeParse(result)
   
  if(!response.success) {
    const errosArray=response?.error?.format()?._errors || [];
    return NextResponse.json(new ApiError(400, 'Invalid username', errosArray.length>0?errosArray:[]), { status: 400 })
   }
   
   const username=response?.data
   const user = await UserModel.findOne({ username, isVerified: true })
   
   if (user) {
    return NextResponse.json(new ApiError(409, 'Username already exists'), { status: 409 })
   }
   
   return NextResponse.json(new ApiResponse(200, 'Username is unique'), { status: 200 })
})