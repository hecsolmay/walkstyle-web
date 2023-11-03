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
    <Link href={`/product/${product.productId}`} className={cn('flex w-60 flex-col justify-between gap-6 bg-white p-4 shadow-lg border border-slate-200', className)}>
      <div className='h-56 w-full'>
        <img
          className="h-full w-full object-cover"
          src={product.images[0].preview}
          alt={product.name}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className="truncate text-base font-semibold uppercase">{product.brand.name}<span className="uppercase text-gray-500"> - {label}</span></h3>
        <p className="text-overflow-ellipsis line-clamp-3 min-h-[3rem] text-sm leading-4 text-gray-500">{product.name}</p>
        <p className="mt-3 text-sm font-bold text-black">{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
      </div>

    </Link>
  )
}
