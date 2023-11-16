import { login } from '@/services/auth'
import NextAuth, { type AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith@example.com' },
        password: { label: 'Password', type: 'password' }
      },
      // @ts-expect-error eslint-disable-next-line
      async authorize (credentials, req) {
        try {
          const user = await login({
            email: credentials?.email as string,
            password: credentials?.password as string
          })

          if (user !== null) {
            return user
          } else {
            return null
          }
        } catch (error) {
          console.error(error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt ({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return { ...token, ...session.user }
      }
      return { ...token, ...user }
    },
    async session ({ session, token }) {
      session.user = token as any
      return session
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
