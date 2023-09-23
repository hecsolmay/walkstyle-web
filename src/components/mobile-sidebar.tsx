'use client'

import { useState } from 'react'
import { HamburguerIcon } from './icons'

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

      {showSideBar &&
        <div onClick={handleClick} className='bg-black/50z absolute inset-0 z-10 h-screen w-screen '>
          <aside className='fixed left-0 top-0 z-20 h-screen w-[75vw] bg-white'>
            <ul>
              <li>Nav 1</li>
            </ul>
          </aside>
        </div>
      }
    </>
  )
}
