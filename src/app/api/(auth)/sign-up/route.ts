import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import { asyncHandler } from "@/helpers/asyncHandler";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";


export const POST = asyncHandler(
    async (request?: NextRequest): Promise<NextResponse> => {
        await dbConnect()
        let { username, email, password } = await request?.json()
        username = username?.trim();
        email = email?.trim();
        password = password?.trim();
        if (!username || !email || !password) {

            return NextResponse.json(new ApiError(400, 'Username, email and password are required'), { status: 400 })
        
        }

        const existingUserByUsername = await UserModel.findOne({
            username,
            isVerified: true
        })

        if (existingUserByUsername) {
            return NextResponse.json(new ApiError(400, 'Username already exists'), { status: 400 })
        }
        
        const existingUserByemail = await UserModel.findOne({ email })

        let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

        if (existingUserByemail) {

            if (existingUserByemail.isVerified) {

                return NextResponse.json(new ApiError(400, 'User with this email already exists'), { status: 400 })

            } else {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                existingUserByemail.password = hashedPassword;
                existingUserByemail.verifyCode = verifyCode;
                existingUserByemail.verifyCodeExpiry = new Date(Date.now() + 60 * 60 * 1000);
                await existingUserByemail.save();
            }
        } else {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1);
            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessages: true,
                messages: []
            })
            await newUser.save();
        }
        const emailResponse = await sendVerificationEmail({
            username,
            email,
            otp: verifyCode
        })

        if (!emailResponse.success) {
            return NextResponse.json(new ApiError(500, emailResponse.message, [], emailResponse), { status: 500 })
        }
        return NextResponse.json(new ApiResponse(
            200, 'User registered successfully. An email verification link has been sent to your email. Please verify your email'
        ), { status: 200 }
        )
    }
)
