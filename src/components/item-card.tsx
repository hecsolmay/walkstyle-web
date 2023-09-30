import { TrashCanIcon } from '@/components/icons'
import { type ItemProduct } from '@/types/product'

interface ItemCardProps {
  product: ItemProduct
}

export default function ItemCard ({ product }: ItemCardProps) {
  const { product: item, quantity, size } = product
  const { brand } = item

  const totalPrice = item.price * quantity

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
          <button className='text-gray-600'>
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
