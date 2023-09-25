'use client'

import { SearchIcon, XMarkIcon } from '@/components/icons'
import { MobileSideBar } from '@/components/mobile-sidebar'
import NavActions from '@/components/nav-actions'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function MobileNavbar () {
  // This ref is when is focus you should to shown the search results component
  // const inputRef = useRef<HTMLInputElement>(null)
  const [showSearch, setShowSearch] = useState(false)

  const handleClickSearch = () => {
    setShowSearch(true)
  }

  const handleCloseSearch = () => {
    setShowSearch(false)
  }

  return (
    <nav className='sticky top-0 flex h-24 min-h-[74px] w-full items-center justify-between bg-slate-100 px-4 py-2 shadow-md md:hidden md:px-8'>

      <MobileSideBar />

      <Link href='/' className={cn('ml-12 md:m-0', showSearch && 'hidden')}>
        <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' />
      </Link>

      <div className='flex items-center gap-3'>

        {/* ACTIONS  */}
        <button onClick={handleClickSearch} className={cn('flex items-center px-0.5 text-teal-500', showSearch && 'hidden')}>
          <SearchIcon/>
        </button>

        <div className={cn('relative transition-all duration-200 ease-in-out ', !showSearch && 'hidden')}>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1.5 text-teal-500">
            <SearchIcon/>
          </div>

          <button onClick={handleCloseSearch} className="absolute inset-y-0 right-2 flex items-center pl-1.5 text-slate-400">
            <XMarkIcon />
          </button>
          <input type="text" className="block w-[75vw] rounded-lg border border-gray-300 bg-gray-50 p-1.5 pl-8 text-sm text-gray-900 focus:outline focus:outline-teal-500" placeholder='Search...' />
        </div>

        <NavActions />
      </div>

    </nav>
  )
}
