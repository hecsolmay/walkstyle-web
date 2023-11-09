// export { default } from 'next-auth/middleware'
import { withAuth } from 'next-auth/middleware'
import { ROLE } from '@/types/enums'

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith('/admin')) {
        return token?.role === ROLE.ADMIN
      }

      return Boolean(token)
    }
  }
})

export const config = {
  matcher: ['/admin/:path*', '/profile']
}
