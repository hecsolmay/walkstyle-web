import { type Details } from '@/types/details'
import { type Image } from '@/types/image'

export interface Category {
  categoryId: string
  name: string
  banner: Image
  image: Image
}

export interface CategoryDetails extends Category, Details {
  productsCount?: number
}
