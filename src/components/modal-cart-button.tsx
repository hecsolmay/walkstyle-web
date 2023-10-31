'use client'

import { ShoppingCartIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import ModalCartInfo from '@/components/modal-cart-info'
import useCartStore from '@/store/useCartStore'
import { useState } from 'react'

export default function ModalCartButton () {
  const [show, setShow] = useState(false)
  const items = useCartStore((state) => state.items)

  const handleClick = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <div className='relative '>
        <span className='absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-xs text-white'>{items.length}</span>
        <button onClick={handleClick} className='cursor-pointer text-slate-600'>
          <ShoppingCartIcon />

        </button>
      </div>
      {show &&
      <Background className='fixed inset-0 max-h-screen max-w-[100vw] overflow-hidden' close={handleClose} show={show}>
        <ModalCartInfo CloseSideBar={handleClose}/>
      </Background>
      }
    </>
  )
}
