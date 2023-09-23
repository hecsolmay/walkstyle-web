'use client'

import { HamburguerIcon } from '@/components/icons'
import { cn } from '@/utils/cn'
import { useState } from 'react'

export function MobileSideBar () {
  const [showSideBar, setShowSideBar] = useState(false)

  const handleShowSideBar = () => {
    setShowSideBar(true)
  }

  const handleCloseSideBar = () => {
    setShowSideBar(false)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si se hace clic en el fondo oscurecido, cierra el modal
    if (e.target === e.currentTarget) {
      handleCloseSideBar()
    }
  }

  return (
    <>
      <button onClick={handleShowSideBar}>
        <HamburguerIcon className='md:hidden' />
      </button>

      <div onClick={handleClick} className={cn('bg-black/50 absolute inset-0 z-10 h-screen w-screen ', !showSideBar && 'hidden')}>
        <aside className='fixed left-0 top-0 z-20 h-screen w-[75vw] bg-white'>
          <ul>
            <li>Nav 1</li>
          </ul>
        </aside>
      </div>
    </>
  )
}
