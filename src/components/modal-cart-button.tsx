'use client'

import { ShoppingCartIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import ModalCartInfo from '@/components/modal-cart-info'
import { useState } from 'react'

export default function ModalCartButton () {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <button onClick={handleClick} className='cursor-pointer text-slate-600'>
        <ShoppingCartIcon />
      </button>
      {show &&
      <Background className='fixed inset-0 max-h-screen max-w-[100vw] overflow-hidden' close={handleClose} show={show}>
        <ModalCartInfo CloseSideBar={handleClose}/>
      </Background>
      }
    </>
  )
}
