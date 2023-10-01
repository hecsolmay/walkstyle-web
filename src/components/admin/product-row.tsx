import { PencilSquareIcon, TagIcon, TrashCanIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import { type Product } from '@/types/product'
import Link from 'next/link'

interface ProductRowProps {
  product: Product
}

export default function ProductRow ({ product }: ProductRowProps) {
  return (
    <TR className='text-slate-500'>
      <TD className='max-w-xs break-words text-black'>{product.name}</TD>
      <TD>{product.brand.name}</TD>
      <TD>{product.gender.name}</TD>
      <TD>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</TD>
      <TD className='text-black'>
        <Link href='#'>
          <TagIcon />
        </Link>
      </TD>

      <TD className='flex items-center gap-8 text-black'>
        <button>
          <PencilSquareIcon />
        </button>
        <button>
          <TrashCanIcon />
        </button>
      </TD>
    </TR>
  )
}
