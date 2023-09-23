import type Brand from './brand'

interface Product {
  productId: string
  name: string
  brand: Brand
  price: number
  imageUrl: string
  gender: Gender
  description: string
}

interface Gender {
  genderId: string
  name: string
}

export default Product
