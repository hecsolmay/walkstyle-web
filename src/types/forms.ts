import { type bannerAndImageShema } from '@/schemas/category'
import { type sizeSchema } from '@/schemas/size'
import { type z } from 'zod'

export type BannerAndImage = z.infer<typeof bannerAndImageShema>
export type Size = z.infer<typeof sizeSchema>
