'use client'

import { Background } from '@/components/modal-background'
import ModalCartInfo from '@/components/modal-cart-info'
import ShoppingCartButton from '@/components/shopping-cart-button'
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
      <ShoppingCartButton onClick={handleClick} items={items.length}/>

      {show &&
      <Background className='fixed inset-0 max-h-screen max-w-[100vw] overflow-hidden' close={handleClose} show={show}>
        <ModalCartInfo CloseSideBar={handleClose}/>
      </Background>
      }
    </>
  )
}
