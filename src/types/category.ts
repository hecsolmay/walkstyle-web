import { type Image } from '@/types/image'
import { type STATUS } from '@/types/enums'

export interface Category {
  categoryId: string
  name: string
  banner: Image
  image: Image
}

export interface CategoryDetails extends Category {
  totalProducts?: number
  status: STATUS
  createdAt: Date
  updatedAt: Date
}
