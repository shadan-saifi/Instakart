import { NextRequest, NextResponse } from 'next/server';  // Import Next.js types
import { ApiError } from './ApiError';  // Assuming you have a custom ApiError class

const asyncHandler = (fn: (request?: NextRequest, response?: NextResponse) => Promise<NextResponse>) => async (request?: NextRequest, response?: NextResponse) => {
  try {
    return await fn(request, response);
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          statusCode: error.statusCode,
          message: error.message || 'Error before running API',
          errors: error.errors,
          data: error?.data,
          success: error.success,
        },
        { status: error.statusCode }
      );
    }

    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
};

export { asyncHandler };
