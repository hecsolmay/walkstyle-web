'use client'

import { TrashCanIcon } from '@/components/icons'
import useCartStore from '@/store/useCartStore'
import { type ItemProduct } from '@/types/product'
import { cn } from '@/utils/cn'

interface ItemCardProps {
  product: ItemProduct
}

export default function ItemCardWithCounter ({ product }: ItemCardProps) {
  const { product: item, quantity, sizeId } = product
  const changeQuantity = useCartStore((state) => state.changeQuantity)
  const removeProduct = useCartStore((state) => state.removeProduct)

  const addQuantity = () => {
    changeQuantity(sizeId, quantity + 1)
  }

  const removeQuantity = () => {
    changeQuantity(sizeId, quantity - 1)
  }

  const handleRemove = () => {
    removeProduct(sizeId)
  }

  const size = item.sizes.find((size) => size.sizeId === sizeId)

  const sizeNumber = size?.size ?? 0
  const avalibleStock = size?.stock ?? 0

  const totalPrice = item.price * quantity

  return (
    <div className='flex h-48 w-full gap-3 rounded-md border-2 bg-white p-3 shadow-md md:px-6'>
      <img src={item.images[0].main} alt={item.name} className='aspect-[2/3] w-32 rounded-lg md:w-44'/>
      <div className='flex w-full flex-col justify-between pb-2 text-gray-400'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl uppercase'>{item?.brand?.name}</p>
            <h3 className='text-lg uppercase text-gray-600'>{item.name}</h3>
            <p className='text-sm text-gray-500'>Talla: {sizeNumber}</p>
          </div>
          <button onClick={handleRemove} className='text-gray-600'>
            <TrashCanIcon />
          </button>
        </div>
        <div className='flex items-center justify-between text-gray-700'> {/* Cambiamos justify-between a justify-end */}
          <div className="flex w-20 items-center justify-between rounded-2xl border border-slate-300 bg-slate-100 px-2 text-slate-800 shadow-sm md:w-24">
            <button
              className={cn('px-2 py-1 text-slate-950', quantity <= 1 && 'opacity-50')}
              disabled={quantity <= 1}
              onClick={removeQuantity}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={addQuantity}
              title={quantity >= avalibleStock ? 'No hay stock disponible' : undefined}
              disabled={quantity >= avalibleStock}
              className={cn('px-2 py-1 text-slate-950', quantity >= avalibleStock && 'opacity-50')}
            >
              +
            </button>
          </div>

          <p>{totalPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>
      </div>
    </div>

  )
}
