import { GENDER_LABELS } from '@/contants'
import { type Product } from '@/types/product'
import { cn } from '@/utils/cn'
import Link from 'next/link'

interface ProductLinkCardProps {
  product: Product
  className?: string
}

export default function ProductLinkCard ({ product, className }: ProductLinkCardProps) {
  const label = GENDER_LABELS[product.gender.name]

  return (
    <Link href={`/product/${product.productId}`} className={cn('flex h-72  w-52 flex-col justify-between gap-4 bg-white p-4 shadow-lg border border-slate-200', className)}>
      <div className='h-40 w-44'>
        <img
          className="h-full w-full object-cover"
          src={product.images[0].preview}
          alt={product.name}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className="truncate text-base font-semibold uppercase">{product.brand.name}<span className="uppercase text-gray-500"> - {label}</span></h3>
        <p className="text-overflow-ellipsis my-2 line-clamp-2 text-sm text-gray-500">{product.name}</p>
        <p className="text-sm font-bold text-black">{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
      </div>

    </Link>
  )
}
