import LoaderModal from '@/components/loader-modal'
import SessionAuthProvider from '@/providers/SessionAuthProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Walkstyle',
  description: 'Walkstyle aplication for e-commerce'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400`}>
        <SessionAuthProvider>
          {children}
          <div id="modal-root"></div>
          <Toaster richColors />
          <LoaderModal />
        </SessionAuthProvider>
      </body>
    </html>
  )
}
