import {z} from 'zod'
import { usernameSchmea } from './signUpSchema'

export const verificationCodeSchema=z.object({
    code:z.string().trim().min(6,'Code must be at least 6 digits long'),
    username:usernameSchmea.optional()
})