import { type Details } from '@/types/details'
import { type Role } from '@/types/enums'

export interface UserDTO {
  name: string
  lastname: string
  fullname: string
  email: string
  role: Role
  profileUrl: string | null
}

export interface User extends UserDTO {
  userId: string
  rememberToken: string
}

export interface UserDetails extends User, Details {}
