import { type SizeDetails, type SizeCreate } from '@/types/size'
import { axiosAuth } from '@/utils/axios'
import { AxiosError } from 'axios'

interface UpdateSize {
  sizeId: string
  size: Partial<SizeCreate>
}

export async function getSizeByProduct (productId: string): Promise<SizeDetails[] | undefined> {
  try {
    const response = await axiosAuth.get(`/products/${productId}/sizes`)
    const { data } = response

    return data.sizes
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status } = error

      if (status === 404) return undefined

      console.error(error)
    }

    console.error(error)
  }
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
