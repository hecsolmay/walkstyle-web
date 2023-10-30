import { type SizeDTO as SizeForm } from '@/types/forms'
import { type Details } from '@/types/details'

export interface Size {
  sizeId: string
  extraPrice: number
  size: number
  stock: number
}

export interface SizeDetails extends Size, Details {}

export interface SizeCreate extends SizeForm {
  productId: string
}
