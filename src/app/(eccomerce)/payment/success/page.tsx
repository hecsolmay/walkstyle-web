import { createSale } from '@/services/sales'
import useCartStore from '@/store/useCartStore'
import useLoaderStore from '@/store/useLoader'
import { toastError, toastSuccess } from '@/utils/toast'
import { useSession } from 'next-auth/react'
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
      toastSuccess('Venta realizada')
      reset()
    } catch (error) {
      toastError('Error al registrar la venta')
    } finally {
      hideLoader()
    }
  }

  useEffect(() => {
    handleSale()
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // TODO: AGREGAR DISEÑO DE GRACIAS POR TU COMPRA

  return (
    <div>
      <h1>Gracias por tu compra</h1>
    </div>
  )
}
