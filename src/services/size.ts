import { type SizeDetails, type SizeCreate } from '@/types/size'
import { axiosAuth } from '@/utils/axios'

interface UpdateSize {
  sizeId: string
  size: Partial<SizeCreate>
}

export async function getSizeByProduct (productId: string): Promise<SizeDetails[]> {
  const response = await axiosAuth.get(`/products/${productId}/sizes`)
  const { data } = response

  return data.sizes
}

export async function createSize (size: SizeCreate) {
  const response = await axiosAuth.post('/sizes', size)
  return response
}

export async function updateSize ({ sizeId, size }: UpdateSize) {
  const response = await axiosAuth.put(`/sizes/${sizeId}`, size)
  return response
}

export async function deleteSize (id: string) {
  const response = await axiosAuth.delete(`/sizes/${id}`)
  return response
}

export async function restoreSize (id: string) {
  const response = await axiosAuth.patch(`/sizes/restore/${id}`)
  return response
}
