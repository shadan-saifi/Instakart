import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import { asyncHandler } from "@/helpers/asyncHandler";
import UserModel from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConnect";
import { logInSchema } from "@/schemas/logInSchema";

export const POST = asyncHandler(
  async (request?: NextRequest): Promise<NextResponse> => {
    await dbConnect();

    const res = await request?.json().catch(() => {
      return NextResponse.json(new ApiError(400, "Invalid JSON format"), {
        status: 400,
      });
    });
    const result = logInSchema.safeParse(res);
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

    const { identifier, password } = data;

    let user;
    if (/\S+@\S+\.\S+/.test(identifier)) { 
        user = await UserModel.findOne({ email: identifier });
    } else {
        user = await UserModel.findOne({ username: identifier });
    }

    if (!user) {
      return NextResponse.json(new ApiError(400, "User not found"), {
        status: 400,
      });
    }

    if (!user.isVerified) {
      return NextResponse.json(
        new ApiError(400, "Please verify the user before login"),
        { status: 400 }
      );
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(new ApiError(400, "Password is incorrect"), {
        status: 400,
      });
    }
    const token = jwt.sign(
      {
        id: user?._id,
        username: user?.username,
        isVerified: user?.isVerified,
        isAcceptingMessages: user?.isAcceptingMessages,
      },
      process.env.TOKEN_SECRET!,
      { expiresIn: process.env.TOKEN_EXPIRY }
    );

    const response = NextResponse.json(
      new ApiResponse(200, "User logged in successfully"),
      { status: 200 }
    );
    response.cookies.set("token", token);
    return response;
  }
);
