'use client'

import { LinkButton } from '@/components/link-button'
import { TextButton } from '@/components/text-button'
import useNextQuery from '@/hooks/useNextQuey'
import { createStripeSale } from '@/services/sales'
import useCartStore from '@/store/useCartStore'
import useLoaderStore from '@/store/useLoader'
import { toastError } from '@/utils/toast'
import { useSession } from 'next-auth/react'

export function TotalToPay () {
  const { data: session } = useSession()
  const total = useCartStore((state) => state.total)
  const items = useCartStore((state) => state.items)
  const { router } = useNextQuery()
  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)

  const handleSale = async () => {
    if (items.length === 0) return

    try {
      showLoader()
      const result = await createStripeSale(items)

      if (result.error !== undefined) {
        toastError('Error al realizar la venta')
        return
      }

      const { url } = result

      router.push(url)
    } catch (error) {
      console.error(error)
    } finally {
      hideLoader()
    }
  }

  return (
    <div className="mb-5 ml-6 h-[565px] w-full bg-slate-200 md:my-6 md:mr-4 md:max-w-[334px]">
      <div className="flex flex-col gap-4 bg-slate-200 p-3 pt-12 text-lg font-semibold text-slate-600">
        <div className="flex justify-between border-t border-black px-4 py-2 pt-5">
          <p>Subtotal</p>
          <p>{total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>
        <div className="flex justify-between border-t border-black px-4 py-2 pt-5">
          <p>Descuento</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between border-t border-black px-4 py-2 pt-5 font-bold text-black">
          <p>Total</p>
          <p>{total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>
      </div>
      <div className="mt-32">
        <div className="flex flex-col justify-between gap-4 bg-slate-200 p-2">
          {session?.user === undefined
            ? <LinkButton className="h-11 bg-teal-500" text="Iniciar sesión para terminar la compra" href="/login" />
            : <TextButton onClick={handleSale} className="h-11 bg-teal-500" text="Pagar Compra" />

          }
          <LinkButton className="h-11 bg-black" text="Seguir Explorando" href="/search" />
        </div>
      </div>

    </div>

  )
}
