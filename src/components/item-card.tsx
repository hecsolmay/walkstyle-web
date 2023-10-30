'use client'

import { TrashCanIcon } from '@/components/icons'
import useCartStore from '@/store/useCartStore'
import { type ItemProduct } from '@/types/product'

interface ItemCardProps {
  product: ItemProduct
}

export default function ItemCard ({ product }: ItemCardProps) {
  const removeProduct = useCartStore((state) => state.removeProduct)
  const { product: item, quantity, sizeId } = product
  const { brand } = item

  const size = item.sizes.find((size) => size.sizeId === sizeId)?.size ?? 0

  const totalPrice = item.price * quantity

  const handleDelete = () => {
    removeProduct(sizeId)
  }

  return (
    <div className='flex h-44 w-full gap-3 p-3 md:px-6'>
      <img src="https://tafmx.vtexassets.com/arquivos/ids/406372-192-auto" alt="" className='aspect-[2/3] rounded-lg '/>
      <div className='flex w-full flex-col justify-between pb-2 text-gray-400'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='text-xs uppercase'>{brand.name}</p>
            <h3 className='text-lg uppercase text-gray-600'>{item.name}</h3>
            <p className='text-xs text-gray-500'>Talla: {size}</p>
          </div>
          <button onClick={handleDelete} className='text-gray-600'>
            <TrashCanIcon />
          </button>
        </div>

        <div className='flex justify-between text-gray-700'>
          <p>{totalPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
          <p>Cantidad: {quantity}</p>
        </div>
      </div>

    </div>
  )
}
