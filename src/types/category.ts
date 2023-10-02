import { type Status } from '@/types/enums'

export interface Category {
  categoryId: string
  name: string
  imgUrl: string
  totalProducts: number
  status: Status
}
