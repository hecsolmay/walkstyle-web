import { type SearchParams } from '@/types'
import { type Brand, type BrandDetails } from '@/types/brand'
import { type Info } from '@/types/response'
import axios, { axiosAuth } from '@/utils/axios'

interface BrandDetailsResponse {
  info: Info
  brands: BrandDetails[]
}

interface BrandResponse {
  info: Info
  brands: Brand[]
}

export async function getBrands (
  { q = '', page = 1, sort = '', limit = 10 }: SearchParams = {}
): Promise<BrandResponse> {
  const response = await axios.get(`/brands?q=${q}&page=${page}&order=${sort}&limit=${limit}`)
  const { data } = response

  return {
    info: data.info,
    brands: data.brands
  }
}

export async function getAdminBrands (
  { q = '', page = 1, limit = 10 }: SearchParams = {}
): Promise<BrandDetailsResponse> {
  const response = await axiosAuth.get(`/brands/all?q=${q}&page=${page}&limit=${limit}`)
  const { data } = response

  return {
    info: data.info,
    brands: data.brands
  }
}

export async function getBrandById (id = ''): Promise<Brand> {
  const response = await axios.get(`/brands/${id}`)
  const { data } = response

  return data.brand
}

export async function deleteBrand (id: string) {
  const response = await axiosAuth.delete(`/brands/${id}`)
  return response
}

export async function restoreBrand (id: string) {
  const response = await axiosAuth.patch(`/brands/restore/${id}`)
  return response
}

export async function createBrand (formData: FormData) {
  try {
    const response = await axiosAuth.post('/brands', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response
  } catch (error) {
    console.log('There was something wrong', error)
  }
}

export async function updateBrand (brandId: string, formData: FormData) {
  try {
    const response = await axiosAuth.put(`/brands/${brandId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response
  } catch (error) {
    console.log('There was something wrong', error)
  }
}
