import {z} from 'zod'

export const verificationCodeSchema=z.object({
    code:z.string().min(6,'Code must be at least 6 digits long')
})