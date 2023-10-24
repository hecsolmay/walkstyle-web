import { type Details } from '@/types/details'
import { type ROLE } from '@/types/enums'

export interface UserDTO {
  name: string
  lastname: string
  fullname: string
  email: string
  role: ROLE
  profileUrl: string | null
}

export interface User extends UserDTO {
  userId: string
  rememberToken: string
}

export interface UserDetails extends User, Details {}
