'use client'

import AdminSideBar, { AdminMobileSideBar } from '@/components/admin/sidebar'
import { HamburguerIcon, UserCircleIcon } from '@/components/icons'
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
        <nav className='sticky top-0 z-10 flex h-16 items-center justify-between overflow-hidden bg-white pl-6 pr-10 shadow-lg'>
          <div className='flex gap-6 text-slate-700'>
            <button onClick={toogleShowSideBar}>
              <HamburguerIcon className='h-7 w-7' />
            </button>
            <p><span className='text-slate-500'>Dashboard</span> / Analitycs</p>
          </div>
          <div className='text-slate-700'>
            <button>
              <UserCircleIcon className='h-8 w-8 font-light' />
            </button>
          </div>
        </nav>
        <main className='h-[calc(100vh-64px)] overflow-y-scroll scroll-smooth px-5  py-4 scrollbar-none scrollbar-thumb-slate-300 hover:scrollbar-thin'>
          {children}
        </main>
      </div>
    </div>
  )
}
