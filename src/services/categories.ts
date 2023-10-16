import { type CategoryDetails } from '@/types/category'
import { type Info } from '@/types/response'
import axios from '@/utils/axios'

interface CategoryDetailsResponse {
  info: Info
  categories: CategoryDetails[]
}

export async function getCategories (): Promise<CategoryDetailsResponse> {
  const response = await axios.get('/categories/all')
  const { data } = response

  return {
    info: data.info,
    categories: data.categories
  }
}

export async function createCategory (formData: FormData) {
  try {
    const response = await axios.post('/categories', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return response
  } catch (error) {
    console.log('There was something wrong', error)
  }
}
