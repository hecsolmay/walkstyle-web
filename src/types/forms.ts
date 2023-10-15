import { type categoryCreateShema } from '@/schemas/category'
import { type z } from 'zod'

export type CategoryCreate = z.infer<typeof categoryCreateShema>
