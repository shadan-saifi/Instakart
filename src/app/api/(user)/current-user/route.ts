import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import { asyncHandler } from "@/helpers/asyncHandler";
import auth from "@/helpers/auth";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";



export const GET = asyncHandler(async (): Promise<NextResponse> => {

  await dbConnect()
   try {
        const user = await auth();
        return NextResponse.json(new ApiResponse(200, "success", user), { status: 200 });
      } catch (error: unknown) {
        if (error instanceof Error) {
          return NextResponse.json(new ApiError(401, error.message), {
            status: 401,
          });
        } else {
          return NextResponse.json(new ApiError(401, "unauthorized request"), {
            status: 401,
          });
        }
      }
})