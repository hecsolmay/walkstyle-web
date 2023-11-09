'use client'

import { UserIcon } from '@/components/icons'
import ModalCartButton from '@/components/modal-cart-button'
import { protectedLinks, publicLinks, noSessionLinks } from '@/contants/navlinks'
import { ROLE } from '@/types/enums'
import { cn } from '@/utils/cn'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'

export default function NavActions () {
  const { data: session, status } = useSession()

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

  const isLoggedIn = session != null

  const isAdmin = session?.user?.role === ROLE.ADMIN

  const imageUrl = session?.user?.profileUrl ?? '/default-user.png'

  return (
    <div className='flex items-center gap-2 md:gap-5'>

      {/* USER PROFILE */}
      {
        status === 'loading'
          ? <span style={{ height: '2rem', width: '2rem' }} className="loader"></span>
          : <div className="relative flex items-center">
            {
              isLoggedIn
                ? (
                  <button ref={userRef} onClick={() => { setShowUser(!showUser) }} className='h-8 w-8 rounded-full text-center'>
                    <img src={imageUrl} className="h-full w-full rounded-full object-contain" alt={session?.user?.name} />
                  </button>)
                : <button ref={userRef} className='cursor-pointer text-slate-600' onClick={() => { setShowUser(!showUser) }}>
                  <UserIcon />
                </button>
            }
            <div className={cn('absolute z-20 -left-14 top-9 w-[7.5rem] md:w-36 divide-y divide-gray-100 rounded-lg bg-slate-600 shadow ', showUser ? 'block' : 'hidden')}>
              <ul ref={menuRef} className="py-2 text-sm text-gray-200" >

                {!isLoggedIn && (
                  noSessionLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={cn('block px-4 py-2 hover:bg-gray-600 hover:text-white', Boolean(link.divider) && 'border-b border-slate-400 pb-3')}>{link.label}</Link>
                    </li>
                  ))
                )}

                {isLoggedIn && publicLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={cn('block px-4 py-2 hover:bg-gray-600 hover:text-white', Boolean(link.divider) && 'border-b border-slate-400 pb-3')}>{link.label}</Link>
                  </li>
                ))}

                {isLoggedIn && isAdmin && protectedLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={cn('block px-4 py-2 hover:bg-gray-600 hover:text-white', Boolean(link.divider) && 'border-b border-slate-400 pb-3')}>{link.label}</Link>
                  </li>
                ))}

                {isLoggedIn && (
                  <li className='mt-2 border-t border-slate-400'>
                    <button onClick={async () => { await signOut({ callbackUrl: '/login' }) }} className='block px-4 py-2 hover:bg-gray-600 hover:text-white'>Cerrar Sesion</button>
                  </li>
                )}

              </ul>
            </div>

          </div>
      }

      {/* CART */}

      <ModalCartButton />

    </div>
  )
}
