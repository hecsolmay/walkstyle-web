'use client'

import { createSale } from '@/services/sales'
import useCartStore from '@/store/useCartStore'
import useLoaderStore from '@/store/useLoader'
import { toastError } from '@/utils/toast'
import confetti from 'canvas-confetti'
import Link from 'next/link'
import { useEffect } from 'react'

interface PaymentSuccessRegisterProps {
  userId?: string
}

export default function PaymentSuccessRegister (
  { userId }: PaymentSuccessRegisterProps
) {
  const items = useCartStore((state) => state.items)
  const reset = useCartStore((state) => state.removeAll)
  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)

  const handleSale = async () => {
    if (items.length === 0) return

    try {
      showLoader()
      const itemsRequest = items.map((item) => ({
        sizeId: item.sizeId,
        quantity: item.quantity
      }))

      const response = await createSale(itemsRequest, userId ?? '')
      console.log({ response })
      confetti()
      reset()
    } catch (error) {
      console.error(error)
      toastError('Error al registrar la venta')
    } finally {
      hideLoader()
    }
  }

  useEffect(() => {
    console.log({ userId })
    handleSale()
  }, [items])

  return (
    <>
      <h2 className='text-center text-4xl font-semibold'>Pago realizado con exito</h2>
      <h3 className='text-center text-2xl text-slate-600'>Gracias por tu compra</h3>
      <Link href='/' className='text-2xl text-teal-500 underline underline-offset-4'>Volver al Inicio</Link>
    </>
  )
}
