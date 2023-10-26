import { type SearchParams } from '@/types'
import { type Category, type CategoryDetails } from '@/types/category'
import { type Info } from '@/types/response'
import axios, { axiosAuth } from '@/utils/axios'

interface CategoryDetailsResponse {
  info: Info
  categories: CategoryDetails[]
}

interface CategoryResponse {
  info: Info
  categories: Category[]
}

export async function getCategories ({ q = '', page = 1 }: SearchParams = {}): Promise<CategoryResponse> {
  const response = await axios.get(`/categories/all?q=${q}&page=${page}`)
  const { data } = response

  return {
    info: data.info,
    categories: data.categories
  }
}

export async function getCategoryById (id = ''): Promise<Category> {
  const response = await axios.get(`/categories/${id}`)
  const { data } = response

  return data.category
}

export async function getAdminCategories ({ q = '', page = 1 }: SearchParams = {}): Promise<CategoryDetailsResponse> {
  const response = await axiosAuth.get(`/categories/all?q=${q}&page=${page}`)
  const { data } = response

  return {
    info: data.info,
    categories: data.categories
  }
}

export async function deleteCategory (id: string) {
  const response = await axiosAuth.delete(`/categories/${id}`)
  return response
}

export async function restoreCategory (id: string) {
  const response = await axiosAuth.patch(`/categories/restore/${id}`)
  return response
}

export async function createCategory (formData: FormData) {
  try {
    const response = await axiosAuth.post('/categories', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response
  } catch (error) {
    console.log('There was something wrong', error)
  }
}

export async function updateCategory (id: string, formData: FormData) {
  try {
    const response = await axiosAuth.put(`/categories/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response
  } catch (error) {
    console.log('There was something wrong', error)
  }
}
