import { type Details } from '@/types/details'
import { type Image } from '@/types/image'

export interface Brand {
  brandId: string
  name: string
  banner: Image
  image: Image
}

export interface BrandWithOutImage extends Omit<Brand, 'image' | 'banner'> {}

export interface BrandDetails extends Brand, Details {
  productsCount?: number
}
