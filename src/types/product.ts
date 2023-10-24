import type { Brand } from '@/types/brand'
import { type Category } from '@/types/category'
import { type GENDER } from '@/types/enums'
import { type Image } from '@/types/image'
import { type Size } from '@/types/size'

type CategoryWithoutImage = Omit<Category, 'image' | 'banner'>

export interface Product {
  productId: string
  name: string
  brand: Brand
  price: number
  details: string
  images: Image[]
  gender: Gender
  sizes: Size[]
  categories: CategoryWithoutImage[]
}

export interface ItemProduct {
  product: Product
  quantity: number
  size: number
}

export interface Gender {
  genderId: string
  name: GENDER
}
