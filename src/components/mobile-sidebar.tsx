'use client'

import { HamburguerIcon, XMarkIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import { links } from '@/contants/navlinks'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { useState } from 'react'

export function MobileSideBar () {
  const [showSideBar, setShowSideBar] = useState(false)

  const handleShowSideBar = () => {
    setShowSideBar(true)
  }

  const handleCloseSideBar = () => {
    setShowSideBar(false)
  }

  return (
    <>
      <button onClick={handleShowSideBar}>
        <HamburguerIcon className='md:hidden' />
      </button>

      <Background close={handleCloseSideBar} show={showSideBar}>
        <aside className={cn('fixed left-0 top-0 z-20 h-screen w-[65vw]  rounded-tr-3xl bg-white transform transition-transform duration-500 ease-in-out ', showSideBar ? 'translate-x-0' : '-translate-x-full')}>
          <div className='over flex h-20 items-center justify-between rounded-tr-3xl bg-teal-500 p-5 text-white'>
            <h1 className='text-xl font-bold'>Walkstyle</h1>
            <button onClick={handleCloseSideBar}>
              <XMarkIcon className='h-7 w-7'/>
            </button>
          </div>
          <ul className='flex h-[88%] flex-col gap-6 overflow-y-scroll px-5 py-6'>
            {links.map(link => (
              <li key={link.href} className={cn('text-2xl text-slate-400', link.divider !== undefined && 'border-b border-slate-400 pb-3')}>
                <Link href={link.href} >{link.label}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </Background>

    </>
  )
}
