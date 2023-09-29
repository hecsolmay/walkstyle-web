'use client'

import { ShoppingCartIcon, UserIcon } from '@/components/icons'
import { dropdownLinks } from '@/contants/navlinks'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function NavActions () {
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
    <div className='flex items-center gap-2 md:gap-5'>

      {/* USER PROFILE */}

      <div className="relative flex items-center">
        <button ref={userRef} className='cursor-pointer text-slate-600' onClick={() => { setShowUser(!showUser) }}>
          <UserIcon />
        </button>
        <div className={cn('absolute -left-14 top-9 w-[7.5rem] divide-y divide-gray-100 rounded-lg bg-slate-600 shadow ', showUser ? 'block' : 'hidden')}>
          <ul ref={menuRef} className="py-2 text-sm text-gray-200" >
            {dropdownLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={cn('block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white', Boolean(link.divider) && 'border-b border-slate-400 pb-3')}>{link.label}</Link>
              </li>
            ))}

          </ul>
        </div>

      </div>
      {/* CART */}

      <div className='cursor-pointer text-slate-600'>
        <ShoppingCartIcon />
      </div>

    </div>
  )
}
