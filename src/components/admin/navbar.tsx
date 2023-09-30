'use client'

import { HamburguerIcon, UserCircleIcon } from '@/components/icons'
import { dropdownAdminLinks } from '@/contants/navlinks'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface AdminNavbarProps {
  toogleShowSideBar: () => void
}

export default function AdminNavbar ({ toogleShowSideBar }: AdminNavbarProps) {
  const userRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const [showUser, setShowUser] = useState(false)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const contains = userRef.current?.contains(e.target as Node) ?? false
      if (!contains && e.target !== menuRef.current) {
        setShowUser(false)
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <nav className='sticky top-0 z-10 flex h-16 items-center justify-between bg-white pl-6 pr-10 shadow-lg'>
      <div className='flex gap-6 text-slate-700'>
        <button onClick={toogleShowSideBar}>
          <HamburguerIcon className='h-7 w-7' />
        </button>
        <p><span className='text-slate-500'>Dashboard</span> / Analitycs</p>
      </div>
      <div className='relative flex items-center text-slate-700'>
        <button ref={userRef} onClick={() => { setShowUser(!showUser) }}>
          <UserCircleIcon className='h-8 w-8 font-light' />
        </button>

        <div className={cn('absolute -left-16 top-9 w-[7.5rem] md:w-36 md:-left-[5.5rem] divide-y divide-gray-100 rounded-lg bg-[#293a5a] shadow ', showUser ? 'block' : 'hidden')}>
          <ul ref={menuRef} className="relative py-2 text-sm text-gray-200" >
            {dropdownAdminLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={cn('block px-4 py-2 hover:bg-[#1c273b] hover:text-white', Boolean(link.divider) && 'border-b border-slate-400 pb-3')}>{link.label}</Link>
              </li>
            ))}

          </ul>
        </div>
      </div>

    </nav>
  )
}
