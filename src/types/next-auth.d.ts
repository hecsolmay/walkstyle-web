import 'next-auth'
import { type UserWithToken } from './user'

declare module 'next-auth' {
  interface Session {
    user: UserWithToken
  }

  interface JWT extends UserWithToken {
    token: string
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Partial<UserWithToken> {}
}
