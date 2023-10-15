import axios from '@/utils/axios'
import { type Info } from '@/types/response'
import { type CategoryDetails } from '@/types/category'

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
