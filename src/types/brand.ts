import { type Image } from './image'
import { type STATUS } from '@/types/enums'

export interface Brand {
  brandId: string
  name: string
  banner: Image
  image: Image
}

export interface BrandDetails extends Brand {
  totalProducts?: number
  status: STATUS
  createdAt: Date
  updatedAt: Date
}
