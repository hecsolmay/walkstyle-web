import { type bannerAndImageShema } from '@/schemas/category'
import { type z } from 'zod'

export type BannerAndImage = z.infer<typeof bannerAndImageShema>
