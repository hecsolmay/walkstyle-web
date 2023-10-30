import type { Brand, BrandWithOutImage } from '@/types/brand'
import { type Category } from '@/types/category'
import { type GENDER } from '@/types/enums'
import { type Image } from '@/types/image'
import { type Size } from '@/types/size'
import { type Details } from '@/types/details'

export type CategoryWithoutImage = Omit<Category, 'image' | 'banner'>

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
  sizeId: string
  product: Product
  quantity: number
  total: number
}

export interface Gender {
  genderId: string
  name: GENDER
}

export interface ProductDetails extends Product, Details {}
export interface ProductSale extends Omit<Product, 'brand' | 'sizes' | 'categories'> {
  brand: BrandWithOutImage

}
