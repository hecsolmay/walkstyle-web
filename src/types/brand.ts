import { type Details } from '@/types/details'
import { type Image } from '@/types/image'

export interface Brand {
  brandId: string
  name: string
  banner: Image
  image: Image
}

export interface BrandDetails extends Brand, Details {
  totalProducts?: number
}
