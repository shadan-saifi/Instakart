import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import UserModel from '@/models/user.model';
import { ApiError } from './ApiError';
import { User } from '@/models/user.model';

interface DecodedToken extends JwtPayload {
    id: string;
}

export default async function auth(): Promise< User> {
    try {
        const token = (await cookies()).get('token')?.value;
        
        if (!token) {
            throw new ApiError(401, 'Unauthorized Request');
        }

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as DecodedToken;

        const user = await UserModel.findById(decodedToken.id).select('-password');
        
        if (!user) {
            throw new ApiError(401, 'Invalid Access Token');
        }
        
        return user;
    } catch (error: unknown) {
        if (error instanceof Error) {
            // Now TypeScript knows error is an instance of Error
            throw new ApiError(401, error.message || 'Invalid Access Token');
        } else {
            // If it's not an Error object, handle it accordingly (e.g., unknown error)
            throw new ApiError(401, 'Invalid Access Token');
        }
    }
}
