import { type SearchParams } from '@/types'
import { type ItemProduct } from '@/types/product'
import { type Info } from '@/types/response'
import { type SaleDetails } from '@/types/sale'
import { axiosAuth } from '@/utils/axios'
import axios from 'axios'

interface SaleResponse {
  info: Info
  sales: SaleDetails[]
}

export async function getAllSales (
  { page = 1, sort = 'recents', limit = 10 }: SearchParams = {}
): Promise<SaleResponse> {
  const { data } = await axiosAuth.get(`/sales?page=${page}&limit=${limit}&order=${sort}`)
  return {
    info: data.info,
    sales: data.sales
  }
}

export async function createStripeSale (
  products: ItemProduct[]
) {
  const items = products.map((item) => {
    const { product, quantity, sizeId } = item

    const size = product.sizes.find((size) => size.sizeId === sizeId)

    return {
      price: product.price,
      details: product.details,
      extraPrice: size?.extraPrice ?? 0,
      image: product.images[0].preview,
      quantity,
      itemId: sizeId,
      name: `${product.name} - Talla ${size?.size ?? ''}`
    }
  })

  try {
    const response = await axios.post('/api/prices', {
      items
    })
    const { data } = response

    return {
      url: data.url as string
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Error al crear la venta'
    }
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

export async function createSale (products: ProductRequest[], userId: string) {
  const response = await axiosAuth.post('/sales', {
    products,
    userId
  }
  )

  return response
}
