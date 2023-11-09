import { type SaleDetails } from '@/types/sale'
import { type User } from '@/types/user'
import { axiosAuth } from '@/utils/axios'
import { getDateQueryFormat } from '@/utils/dates'

interface SaleRow {
  name: string
  totalSales: number
}

interface ProductRow extends SaleRow {
  productId: string
}

interface CategoryRow extends SaleRow {
  categoryId: string
}

interface DashboardResponse {
  totalSales: number
  topProducts: ProductRow[]
  lestSoldProducts: ProductRow[]
  topCategories: CategoryRow[]
}

export async function getDashboardInfo (): Promise<DashboardResponse> {
  const response = await axiosAuth.get('/info/dashboard')
  const { data } = response

  return {
    totalSales: data.totalSales,
    topProducts: data.topProducts,
    lestSoldProducts: data.lestSoldProducts,
    topCategories: data.topCategories
  }
}

interface LatestInfoResponse {
  sales: SaleDetails[]
  users: User[]
}

export async function getLatestInfo (): Promise<LatestInfoResponse> {
  const response = await axiosAuth.get('/info/latest')
  const { data } = response

  return {
    sales: data.sales,
    users: data.users
  }
}

interface InfoCount {
  totalProducts: number
  totalSalesAmount: number
  totalUsers: number
}

export async function getInfoCount (
  { dateStart = new Date() }: { dateStart?: Date } = {}
): Promise<InfoCount> {
  const dateQuery = getDateQueryFormat(dateStart)
  const response = await axiosAuth.get(`/info/count?date=${dateQuery}`)
  const { data } = response

  return {
    totalProducts: data.products,
    totalSalesAmount: data.totalSales,
    totalUsers: data.users
  }
}
