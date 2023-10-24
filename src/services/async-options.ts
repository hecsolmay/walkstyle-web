import { getBrands } from './brands'
import { getCategories } from './categories'

interface SearchParams {
  page?: number
}

export async function getCategoryOptions (searchQuery: string,
  loadedOptions: any,
  { page }: SearchParams) {
  const { info, categories } = await getCategories({ q: searchQuery, page })

  return {
    options: categories,
    hasMore: info.hasNext,
    additional: {
      page: info.currentPage + 1
    }
  }
}
export async function getBrandsOptions (searchQuery: string,
  loadedOptions: any,
  { page }: SearchParams) {
  const { info, brands } = await getBrands({ q: searchQuery, page })

  return {
    options: brands,
    hasMore: info.hasNext,
    additional: {
      page: info.currentPage + 1
    }
  }
}
