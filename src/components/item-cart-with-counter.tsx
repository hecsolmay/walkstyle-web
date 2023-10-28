import { TrashCanIcon } from '@/components/icons'
import { type ItemProduct } from '@/types/product'
import { Counter } from './counter'

interface ItemCardProps {
  product: ItemProduct
}

export default function ItemCardWithCounter ({ product }: ItemCardProps) {
  const { product: item, quantity, sizeId } = product

  const size = item.sizes.find((size) => size.sizeId === sizeId)?.size ?? 0
  const { brand } = item

  const totalPrice = item.price * quantity

  return (
    <div className='flex h-48 w-full gap-3 rounded-md border-2 bg-white p-3 shadow-md md:px-6'>
      <img src="https://tafmx.vtexassets.com/arquivos/ids/406372-192-auto" alt="TENIS" className='aspect-[2/3] rounded-lg'/>
      <div className='flex w-full flex-col justify-between pb-2 text-gray-400'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl uppercase'>{brand.name}</p>
            <h3 className='text-lg uppercase text-gray-600'>{item.name}</h3>
            <p className='text-sm text-gray-500'>Talla: {size}</p>
          </div>
          <button className='text-gray-600'>
            <TrashCanIcon />
          </button>
        </div>
        <div className='flex items-center justify-between text-gray-700'> {/* Cambiamos justify-between a justify-end */}
          <Counter/>
          <p>{totalPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>
      </div>
    </div>

  )
}
