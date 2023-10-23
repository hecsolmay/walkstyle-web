import { type SearchParams } from '@/types'
import { type BrandDetails } from '@/types/brand'
import { type Info } from '@/types/response'
import axios from '@/utils/axios'

interface BrandDetailsResponse {
  info: Info
  brands: BrandDetails[]
}

export async function getAdminBrands ({ q = '' }: SearchParams = {}): Promise<BrandDetailsResponse> {
  const response = await axios.get(`/brands/all?q=${q}`)
  const { data } = response

  return {
    info: data.info,
    brands: data.brand
  }
}

export async function deleteBrand (id: string) {
  const response = await axios.delete(`/brands/${id}`)
  return response
}

export async function restoreBrand (id: string) {
  const response = await axios.patch(`/brands/restore/${id}`)
  return response
}

export async function createBrand (formData: FormData) {
  try {
    const response = await axios.post('/brands', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response
  } catch (error) {
    console.log('There was something wrong', error)
  }
}
