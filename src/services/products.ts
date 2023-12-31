import { DEFAULT_INFO } from '@/contants'
import { type SearchParams } from '@/types'
import { GENDER } from '@/types/enums'
import { type ProductDetails, type Product } from '@/types/product'
import { type Info } from '@/types/response'
import axios, { axiosAuth } from '@/utils/axios'

interface ProductsResponse {
  info: Info
  products: Product[]
}

interface ProductsAdminResponse {
  info: Info
  products: ProductDetails[]
}

interface UpdateProduct {
  productId: string
  formData: FormData
}

export async function getProducts (
  { q = '', page = 1, sort = '', limit = 10 }: SearchParams = {}
): Promise<ProductsResponse> {
  const response = await axios.get(`/products?q=${q}&page=${page}&order=${sort}&limit=${limit}`)
  const { data } = response

  return {
    info: data.info,
    products: data.products
  }
}

interface SearchParamsByGender extends SearchParams {
  gender?: GENDER
}

export async function getProductsByGender (
  { gender = GENDER.MALE, q = '', page = 1, sort = '', limit }: SearchParamsByGender = {}
): Promise<ProductsResponse> {
  const response = await axios.get(`/genders/${gender}/products?q=${q}&page=${page}&order=${sort}&limit=${limit}`)
  const { data } = response

  return {
    info: data.info,
    products: data.products
  }
}

interface SearchParamsByGender extends SearchParams {
  categoryId?: string
}

interface ProductsByCategory extends ProductsResponse {
  category: string
}

export async function getProductsByCategory (
  { categoryId = '', q = '', page = 1, sort = '', limit = 10 }: SearchParamsByGender = {}
): Promise<ProductsByCategory> {
  try {
    const response = await axios.get(`/categories/${categoryId}/products?q=${q}&page=${page}&order=${sort}&limit=${limit}`)
    const { data, status } = response

    if (status !== 200) {
      return {
        info: DEFAULT_INFO,
        products: [],
        category: 'Categoria No Encontrada'
      }
    }

    return {
      info: data.info,
      products: data.products,
      category: data.category
    }
  } catch (error) {
    console.error(error)
    return {
      info: DEFAULT_INFO,
      products: [],
      category: 'Categoria No Encontrada'
    }
  }
}

interface SearchParamsByBrand extends SearchParams {
  brandId?: string
}

interface ProductsByBrand extends ProductsResponse {
  brand: string
}

export async function getProductsByBrand (
  { brandId = '', q = '', page = 1, sort = '', limit = 10 }: SearchParamsByBrand = {}
): Promise<ProductsByBrand> {
  try {
    const response = await axios.get(`/brands/${brandId}/products?q=${q}&page=${page}&order=${sort}&limit=${limit}`)
    const { data, status } = response

    if (status !== 200) {
      return {
        info: DEFAULT_INFO,
        products: [],
        brand: 'Marca No Encontrada'
      }
    }

    return {
      info: data.info,
      products: data.products,
      brand: data.brand
    }
  } catch (error) {
    console.error(error)
    return {
      info: DEFAULT_INFO,
      products: [],
      brand: 'Marca No Encontrada'
    }
  }
}

export async function getProductById (id: string): Promise<Product | undefined> {
  try {
    const response = await axios.get(`/products/${id}`)

    const { data, status } = response

    if (status !== 200) {
      return undefined
    }

    return data.product
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export async function getAdminProducts (
  { q = '', page = 1, limit = 10 }: SearchParams = {}
): Promise<ProductsAdminResponse> {
  const response = await axiosAuth.get(`/products/all?q=${q}&page=${page}&limit=${limit}`)
  const { data } = response

  return {
    info: data.info,
    products: data.products
  }
}

export async function createProduct (formData: FormData) {
  const response = await axiosAuth.post('/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}

export async function updateProduct ({ productId, formData }: UpdateProduct) {
  const response = await axiosAuth.put(`/products/${productId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}

export async function deleteProduct (id: string) {
  const response = await axiosAuth.delete(`/products/${id}`)
  return response
}

export async function restoreProduct (id: string) {
  const response = await axiosAuth.patch(`/products/restore/${id}`)
  return response
}
