'use client'

import { FilterSearchIcon } from '@/components/icons'
import { SortKeys, sortLinks, type SortKey } from '@/contants/navlinks'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export function ProductFilter () {
  const [showSort, setShowSort] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const sort = searchParams.get('sort') as SortKey | null

  const sortedParam = SortKeys[sort ?? 'recents']

  useEffect(() => {
    const clickOutSide = (e: MouseEvent) => {
      const contains = divRef.current?.contains(e.target as Node) ?? false
      if (!contains && e.target !== divRef.current) {
        setShowSort(false)
      }
    }

    window.addEventListener('click', clickOutSide)

    return () => {
      window.removeEventListener('click', clickOutSide)
    }
  }, [])

  const handleClick = () => {
    setShowSort(!showSort)
  }

  return (
    <div ref={divRef} onClick={handleClick} className="relative flex cursor-pointer items-center gap-2 text-teal-400">
      <FilterSearchIcon />
      <div className='flex'>
        <p>Ordenar Por</p>
        <span className='hidden md:block'>: {sortedParam}</span>
      </div>
      <ul className={cn('text-slate-800 absolute right-14 translate-x-1/2 top-[125%] border border-slate-400 bg-white shadow transition-opacity duration-300', showSort ? 'visible opacity-100' : 'invisible opacity-0')}>
        {sortLinks.map(({ href, label }) => (
          <li key={href} className='cursor-pointer text-center transition-all hover:bg-slate-200 hover:text-slate-600'>
            <Link className='block px-4 py-2 ' href={href}>{label}</Link>
          </li>
        ))}

      </ul>
    </div>
  )
}
