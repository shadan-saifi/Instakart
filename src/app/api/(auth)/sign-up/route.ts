import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import { asyncHandler } from "@/helpers/asyncHandler";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { signUpSchema } from "@/schemas/signUpSchema";

export const POST = asyncHandler(
  async (request?: NextRequest): Promise<NextResponse> => {
    await dbConnect();
    const res = await request?.json().catch(() => {
      return NextResponse.json(new ApiError(400, "Invalid JSON format"), {
        status: 400,
      });
    });
    const result = signUpSchema.safeParse(res);
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
    const { username, email, password } = data;

    const existingUserByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingUserByUsername) {
      return NextResponse.json(new ApiError(400, "Username already exists"), {
        status: 400,
      });
    }

    const existingUserByemail = await UserModel.findOne({ email });

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    if (existingUserByemail) {
      if (existingUserByemail.isVerified) {
        return NextResponse.json(
          new ApiError(400, "User with this email already exists"),
          { status: 400 }
        );
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        existingUserByemail.password = hashedPassword;
        existingUserByemail.verifyCode = verifyCode;
        existingUserByemail.verifyCodeExpiry = new Date(
          Date.now() + 60 * 60 * 1000
        );
        await existingUserByemail.save();
      }
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: false,
        isAcceptingMessages: true,
        messages: [],
      });
      await newUser.save();
    }
    const emailResponse = await sendVerificationEmail({
      username,
      email,
      otp: verifyCode,
    });

    if (!emailResponse.success) {
      return NextResponse.json(
        new ApiError(500, emailResponse.message, [], emailResponse),
        { status: 500 }
      );
    }
    return NextResponse.json(
      new ApiResponse(
        200,
        "User registered successfully. An email verification link has been sent to your email. Please verify your email"
      ),
      { status: 200 }
    );
  }
);
