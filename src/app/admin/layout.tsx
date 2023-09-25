'use client'

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

      <div className='flex-1'>
        <nav className='sticky top-0 z-10 h-16 overflow-hidden bg-white shadow-lg'>
          <button onClick={toogleShowSideBar}>Mostrar</button>
        </nav>
        <main className='h-[calc(100vh-64px)] overflow-y-scroll scroll-smooth px-5  py-4 scrollbar-none scrollbar-thumb-slate-300 hover:scrollbar-thin'>
          {children}
        </main>
      </div>
    </div>
  )
}
