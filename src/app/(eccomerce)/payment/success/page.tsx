'use client'

import { createSale } from '@/services/sales'
import useCartStore from '@/store/useCartStore'
import useLoaderStore from '@/store/useLoader'
import { toastError } from '@/utils/toast'
import confetti from 'canvas-confetti'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
export default function SuccessPage () {
  const { data: session } = useSession()
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

      await createSale(itemsRequest, session?.user.userId ?? '')
      reset()
    } catch (error) {
      toastError('Error al registrar la venta')
    } finally {
      hideLoader()
    }
  }

  useEffect(() => {
    confetti()
    handleSale()
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // TODO: AGREGAR DISEÑO DE GRACIAS POR TU COMPRA

  return (
    <div className='flex h-fit w-full flex-col items-center justify-center gap-6 px-5 py-24'>
      <Image
        src={'/payment-success.jpg'}
        alt='Gracias por tu compra'
        width={500}
        height={500}
      />
      <h2 className='text-center text-4xl font-semibold'>Pago realizado con exito</h2>
      <h3 className='text-center text-2xl text-slate-600'>Gracias por tu compra</h3>
      <Link href='/' className='text-2xl text-teal-500 underline underline-offset-4'>Volver al Inicio</Link>
    </div>
  )
}
