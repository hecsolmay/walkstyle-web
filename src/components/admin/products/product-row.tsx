import StatusBadge from '@/components/admin/status-badge'
import { TD, TR } from '@/components/table'
import { type ProductDetails } from '@/types/product'
import ProductActions from './actions'

interface ProductRowProps {
  product: ProductDetails
}

export default function ProductRow ({ product }: ProductRowProps) {
  return (
    <TR className='text-slate-500'>
      <TD className='max-w-xs break-words text-black'>{product.name}</TD>
      <TD>{product.brand.name}</TD>
      <TD>{product.gender.name}</TD>
      <TD>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</TD>
      <TD>
        <StatusBadge status={product.status}/>
      </TD>

      <TD className=' text-black'>
        <ProductActions product={product} />
      </TD>
    </TR>
  )
}
