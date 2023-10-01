'use client'

import AdminNavbar from '@/components/admin/navbar'
import AdminSideBar, { AdminMobileSideBar } from '@/components/admin/sidebar'
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
    <div className="flex min-h-screen">
      <AdminSideBar show={showSideBar}/>
      <AdminMobileSideBar closeSideBar={() => { setShowSideBar(true) }} show={!showSideBar} />

      <div className='max-h-screen flex-1 overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-slate-300'>
        <AdminNavbar toogleShowSideBar={toogleShowSideBar} />
        <main className='px-5 py-4 '>
          {children}
        </main>
      </div>
    </div>
  )
}
