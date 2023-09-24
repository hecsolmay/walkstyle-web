'use client'

import AdminSideBar, { AdminMobileSideBar } from '@/components/admin/sidebar'
import { useState } from 'react'

export default function AdminLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const [showSideBar, setShowSideBar] = useState(false)

  const toogleShowSideBar = () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <div className="flex min-h-screen w-screen">
      <AdminSideBar show={showSideBar}/>
      <AdminMobileSideBar closeSideBar={() => { setShowSideBar(false) }} show={showSideBar} />
      <div className='min-h-screen w-full '>
        <nav className='sticky top-0 z-10 h-16 overflow-hidden bg-white shadow-lg'>
          <button onClick={toogleShowSideBar}>Mostrar</button>
        </nav>
        <main className='mx-6 my-7 md:mx-8 lg:mx-12'>
          {children}
          <ul>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
            <li>AdminMobileSideBar</li>
          </ul>

        </main>
      </div>
    </div>
  )
}
