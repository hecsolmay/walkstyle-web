'use client'

import AdminNavbar from '@/components/admin/navbar'
import AdminSideBar, { AdminMobileSideBar } from '@/components/admin/sidebar'
import { cn } from '@/utils/cn'
import { useState } from 'react'

export default function AdminLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const [showSideBar, setShowSideBar] = useState({
    mobile: false,
    desktop: true
  })

  const toogleShowSideBar = () => {
    setShowSideBar(prev => ({ ...prev, desktop: !prev.desktop }))
  }

  const toogleShowMobileBar = () => {
    setShowSideBar(prev => ({ ...prev, mobile: !prev.mobile }))
  }

  return (

    <div className="relative flex min-h-screen">
      <AdminSideBar show={showSideBar.desktop}/>
      <AdminMobileSideBar closeSideBar={() => { setShowSideBar(prev => ({ ...prev, mobile: false })) }} show={showSideBar.mobile} />

      <div className={cn('max-h-screen flex-1 transition-all', showSideBar.desktop && 'md:ml-[20vw] lg:ml-[18vw]')}>
        <AdminNavbar toogleShowMobileBar={toogleShowMobileBar} toogleShowSideBar={toogleShowSideBar} />
        <main className='max-w-[100vw] px-5 py-4 '>
          {children}
        </main>
      </div>
    </div>
  )
}
