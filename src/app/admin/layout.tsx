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
  const [showSideBar, setShowSideBar] = useState(true)

  const toogleShowSideBar = () => {
    console.log('Button Pressed')

    setShowSideBar(!showSideBar)
  }

  return (
    <div className="relative flex min-h-screen">
      <AdminSideBar show={showSideBar}/>
      <AdminMobileSideBar closeSideBar={() => { setShowSideBar(true) }} show={!showSideBar} />

      <div className={cn('max-h-screen flex-1 transition-all', showSideBar && 'md:ml-[20vw] lg:ml-[18vw]')}>
        <AdminNavbar toogleShowSideBar={toogleShowSideBar} />
        <main className='max-w-[100vw] px-5 py-4 '>
          {children}
        </main>
      </div>
    </div>
  )
}
