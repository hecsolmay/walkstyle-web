'use client'

import AddProductModal from '@/components/add-product-modal'
import { Background } from '@/components/modal-background'
import { type Product } from '@/types/product'
import { useState } from 'react'

interface ButtonProps {
  product: Product
}

export default function AddProductButton ({ product }: ButtonProps) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <Background className='grid place-items-center' close={handleClose} show={show}>
        <AddProductModal product={product} handleClose={handleClose} />
      </Background>
      <button onClick={handleClick} className='rounded-lg border border-slate-400 px-2 py-1 font-semibold text-teal-400'>Add to cart</button>
    </>
  )
}
