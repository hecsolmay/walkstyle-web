import AddProductButton from '@/components/add-product-button'
import { type Product } from '@/types/product'
import { cn } from '@/utils/cn'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard ({ product, className }: ProductCardProps) {
  return (
    <div className={cn('flex h-72  w-52 flex-col justify-between gap-4 bg-white p-4 shadow-md', className)}>
      <div className='mx-auto  h-20 w-36'>
        <img
          className="h-full w-full object-cover"
          src={product.images[0].preview}
          alt={product.name}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className="text-lg font-semibold uppercase">{product.brand.name}<span className="uppercase text-gray-500"> - {product.gender.name}</span></h3>
        <p className="text-overflow-ellipsis my-2 line-clamp-2 text-sm text-gray-500">{product.name}</p>
        <p className="text-sm font-bold text-black">{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
      </div>
      <div className=' flex justify-end'>
        <AddProductButton product={product} />
      </div>
    </div>
  )
}
