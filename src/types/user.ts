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

export interface UserWithToken extends User {
  token: string
  provider: 'google' | 'credentials'
}

export interface GoogleUser {
  name: string
  email: string
  picture?: string
}
