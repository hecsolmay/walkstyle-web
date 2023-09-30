'use client'

import { SearchIcon } from '@/components/icons'
import { MobileSideBar } from '@/components/mobile-sidebar'
import NavActions from '@/components/nav-actions'
import { SearchMobileInput } from '@/components/search-navbar'
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
    <nav className='sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-slate-100 px-4 py-2 shadow-md md:hidden md:px-8'>

      <MobileSideBar />

      <Link href='/' className={cn('ml-12 md:m-0', showSearch && 'hidden')}>
        <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' />
      </Link>

      <div className={cn('flex items-center gap-3', showSearch && 'flex-1 ')}>

        {/* ACTIONS  */}
        <button onClick={handleClickSearch} className={cn('flex items-center px-0.5 text-teal-500', showSearch && 'hidden')}>
          <SearchIcon/>
        </button>

        <SearchMobileInput showSearch={showSearch} closeSearch={handleCloseSearch} />

        <NavActions />
      </div>

    </nav>
  )
}
