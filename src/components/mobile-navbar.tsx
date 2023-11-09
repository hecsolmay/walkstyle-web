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
    <>

      <MobileSideBar />

      <Link href='/' className={cn('block lg:hidden ml-12 ', showSearch && 'hidden')}>
        <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' />
      </Link>

      <div className={cn('lg:hidden flex items-center gap-3', showSearch && 'flex-1 ')}>

        {/* ACTIONS  */}
        <button onClick={handleClickSearch} className={cn('lg:hidden flex items-center px-0.5 text-teal-500', showSearch && 'hidden')}>
          <SearchIcon/>
        </button>

        <SearchMobileInput showSearch={showSearch} closeSearch={handleCloseSearch} />

        <NavActions />
      </div>
    </>
  )
}
