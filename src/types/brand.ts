import { type Status } from '@/types/enums'

export interface Brand {
  brandId: string
  name: string
}

export interface BrandInfo {
  brandId: string
  imgUrl: string
  name: string
  totalProducts: number
  status: Status
}
