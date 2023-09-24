import type { Brand } from '@/types/brand'

export interface Product {
  productId: string
  name: string
  brand: Brand
  price: number
  imageUrl: string
  gender: Gender
  description: string
}

export interface Gender {
  genderId: string
  name: string
}
