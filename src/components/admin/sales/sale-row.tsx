import { TD, TR } from '@/components/table'
import { type SaleProduct } from '@/types/sale'

interface SaleRowProps {
  productSale: SaleProduct
}

export default function SaleRow ({ productSale }: SaleRowProps) {
  const { originalPrice, product, quantity, size, total } = productSale

  return (
    <TR className='text-slate-500'>
      <TD>
        <div className='grid w-20 place-items-center'>
          <img className='object-cover' src={product.images[0].main} alt={product.name} />
        </div>
      </TD>
      <TD className='max-w-xs break-words text-black'>{product.name}</TD>
      <TD>{size}</TD>
      <TD>{quantity}</TD>
      <TD>{originalPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</TD>
      <TD>{total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</TD>

    </TR>
  )
}
