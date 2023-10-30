import { type User } from '@/types/user'
import { type ProductSale } from './product'

export interface Sale {
  saleId: string
  user: User
  total: number
  quantity: number
  date: Date
}

export interface SaleProduct {
  saleProductId: string
  originalPrice: number
  extraPrice: number
  quantity: number
  total: number
  size: number
  product: ProductSale
}

export interface SaleDetails {
  saleId: string
  totalPaid: number
  createdAt: Date
  updatedAt: Date
  user: User
  products: SaleProduct[]
}
