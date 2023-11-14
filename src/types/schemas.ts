import { type itemProductArray, type itemProductSchema } from '@/schemas/item-product'
import { type loginSchema } from '@/schemas/login'
import { type registerSchema } from '@/schemas/register'
import { type z } from 'zod'

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
export type ItemProductSchema = z.infer<typeof itemProductSchema>
export type ItemProductArray = z.infer<typeof itemProductArray>
