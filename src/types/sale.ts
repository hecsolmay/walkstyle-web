import { type User } from '@/types/user'

export interface Sale {
  saleId: string
  user: User
  total: number
  quantity: number
  date: Date
}
