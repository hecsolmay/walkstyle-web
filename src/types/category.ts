import { type Image } from '@/types/image'
import { type Status } from '@/types/enums'

export interface Category {
  categoryId: string
  name: string
  banner: Image
  image: Image
}

export interface CategoryDetails extends Category {
  totalProducts?: number
  status: Status
  createdAt: Date
  updatedAt: Date
}
