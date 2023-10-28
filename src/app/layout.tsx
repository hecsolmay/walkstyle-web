import LoaderModal from '@/components/loader-modal'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

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
        {children}
        <div id="modal-root"></div>
        <Toaster richColors />
        <LoaderModal />
      </body>
    </html>
  )
}
