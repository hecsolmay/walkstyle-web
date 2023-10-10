import { type Status, type Role } from '@/types/enums'

export interface User {
  userId: string
  name: string
  lastname: string
  fullname: string
  email: string
  role: Role
  imgUrl: string | null
  status: Status
  createdAt: Date
}