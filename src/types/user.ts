import { type Details } from '@/types/details'
import { type Role } from '@/types/enums'

export interface User {
  userId: string
  name: string
  lastname: string
  fullname: string
  email: string
  role: Role
  imgUrl: string | null
}

export interface UserDetails extends User, Details {}
