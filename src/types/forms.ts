import { type bannerAndImagePartialShema, type bannerAndImageShema } from '@/schemas/banner-image'
import { type productUpdateSchema, type productCreateSchema } from '@/schemas/product'
import { type sizeSchema } from '@/schemas/size'
import { type z } from 'zod'

export type BannerAndImage = z.infer<typeof bannerAndImageShema>
export type SizeDTO = z.infer<typeof sizeSchema>
export type ProductCreate = z.infer<typeof productCreateSchema>
export type BannerAndImageUpdate = z.infer<typeof bannerAndImagePartialShema>
export type ProductUpdate = z.infer<typeof productUpdateSchema>
