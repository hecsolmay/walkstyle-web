import { type SaleDetails } from '@/types/sale'
import { type UserDetails } from '@/types/user'
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

export interface DashboardResponse {
  totalSales: number
  topProducts: ProductRow[]
  lestSoldProducts: ProductRow[]
  topCategories: CategoryRow[]
}

interface DateStart {
  dateStart?: Date
}

interface DateWithEnd extends DateStart {
  dateEnd?: Date
}

const DEFAULT_DATES: DateWithEnd = {
  dateStart: new Date(),
  dateEnd: new Date()
}

export async function getDashboardInfo (
  { dateStart = new Date(), dateEnd = new Date() }: DateWithEnd = DEFAULT_DATES
): Promise<DashboardResponse> {
  const dateStartQuery = getDateQueryFormat(dateStart)
  const dateEndQuery = getDateQueryFormat(dateEnd)
  const response = await axiosAuth.get(`/info/dashboard?dateStart=${dateStartQuery}&dateEnd=${dateEndQuery}`)
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
  users: UserDetails[]
}

export async function getLatestInfo (
  { limit = 5 }: { limit?: number } = {}
): Promise<LatestInfoResponse> {
  const response = await axiosAuth.get(`/info/latest?limit=${limit}`)
  const { data } = response

  return {
    sales: data.sales,
    users: data.users
  }
}

export interface InfoCount {
  totalProducts: number
  totalSalesAmount: number
  totalUsers: number
}

export async function getInfoCount (
  { dateStart = new Date() }: DateStart = DEFAULT_DATES
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
