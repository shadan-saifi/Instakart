import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import { asyncHandler } from "@/helpers/asyncHandler";
import dbConnect from "@/lib/dbConnect";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import auth from "@/helpers/auth";

export const POST = asyncHandler(
  async (request?: NextRequest): Promise<NextResponse> => {
    await dbConnect();

    const formData = await request?.formData();
    const avatar = formData?.get("avatar") as File; // as entries can be string also
    console.log("Avatar:", avatar);

    if (!avatar) {
      return NextResponse.json(new ApiError(400, "avatar image is required"));
    }
    if (avatar instanceof File === false) {
      return NextResponse.json(
        new ApiError(400, "avatar image must be a file type")
      );
    }
    const buffer = Buffer.from(await avatar.arrayBuffer());
    const avatarName = Date.now() + avatar.name.replaceAll(" ", "_");
    const avatarURL = path.join(process.cwd(), "public/avatars", avatarName);

    try {
      await writeFile(avatarURL, buffer); //this always returns void hence need trycatch
    } catch (error: unknown) {
      return NextResponse.json(
        new ApiError(500, "Failed to upload avatar", [], { error }),
        { status: 401 }
      );
    }

    try {
      const user = await auth();
      if (user) {
        user.avatar = avatarURL;
        await user.save();
      }
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

    return NextResponse.json(
      new ApiResponse(200, "Avatar uploaded successfully")
    );
  }
);
