import 'next-auth'
import { type UserWithToken } from './user'

declare module 'next-auth' {
  interface Session {
    user: UserWithToken
  }
}
