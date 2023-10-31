import { type Info } from '@/types/response'
import { type SaleDetails } from '@/types/sale'
import { axiosAuth } from '@/utils/axios'

interface SaleResponse {
  info: Info
  sales: SaleDetails[]
}

export async function getAllSales (): Promise<SaleResponse> {
  const { data } = await axiosAuth.get('/sales')
  return {
    info: data.info,
    sales: data.sales
  }
}

export async function getSaleById (saleId: string): Promise<SaleDetails | null> {
  try {
    const { data, status } = await axiosAuth.get(`/sales/${saleId}`)

    if (status !== 200) return null

    return data.sale
  } catch (error) {
    console.error(error)
    return null
  }
}

interface ProductRequest {
  sizeId: string
  quantity: number
}

export async function createSale (products: ProductRequest[], userToken: string) {
  const response = await axiosAuth.post('/sales', {
    products
  }, {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  })

  return response
}
