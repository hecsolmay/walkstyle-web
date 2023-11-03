import AddProductButton from '@/components/add-product-button'
import { GENDER_LABELS } from '@/contants'
import { type Product } from '@/types/product'
import { cn } from '@/utils/cn'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard ({ product, className }: ProductCardProps) {
  const label = GENDER_LABELS[product?.gender?.name]

  return (
    <div className={cn('flex w-52 flex-col justify-between gap-2 bg-white p-4 shadow-md', className)}>
      <Link href={`/product/${product.productId}`} className='flex flex-col gap-6'>
        <div className='h-56 w-full'>
          <img
            className="h-full w-full object-cover"
            src={product.images[0].preview}
            alt={product.name}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className="truncate text-lg font-semibold uppercase">{product?.brand.name}<span className="uppercase text-gray-500"> - {label}</span></h3>
          <p className="text-overflow-ellipsis line-clamp-3 min-h-[3rem] text-sm text-gray-500">{product.name}</p>
          <p className="text-sm font-bold text-black">{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>
      </Link>
      <div className='flex justify-end'>
        <AddProductButton product={product} />
      </div>
    </div>
  )
}
