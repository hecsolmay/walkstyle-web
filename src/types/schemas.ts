import { type loginSchema } from '@/schemas/login'
import { type registerSchema } from '@/schemas/register'
import { type z } from 'zod'

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
