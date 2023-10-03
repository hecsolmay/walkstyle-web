import type { Brand } from '@/types/brand'

export interface Product {
  productId: string
  name: string
  brand: Brand
  price: number
  imageUrl: string
  gender: Gender
  description: string
  sizes: number[]
}

export interface ItemProduct {
  product: Product
  quantity: number
  size: number
}

export interface Gender {
  genderId: string
  name: string
}
