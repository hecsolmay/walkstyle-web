import { EyeOpenIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import { type SaleDetails } from '@/types/sale'
import { getFormatedDate } from '@/utils/dates'
import Link from 'next/link'

interface SalesRowProps {
  sale: SaleDetails
}

export default function SalesRow ({ sale }: SalesRowProps) {
  const { saleId, totalPaid, user, createdAt, products } = sale

  return (
    <TR className='text-slate-500'>
      <TD>
        {user.fullname}
      </TD>
      <TD className='text-green-600'>
        {totalPaid.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
      </TD>
      <TD>
        {products.length}
      </TD>
      <TD>
        {products.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
      </TD>
      <TD>
        {getFormatedDate(createdAt)}
      </TD>

      <TD className='grid w-28  place-content-center text-black'>
        <Link className='block w-fit' href={`/admin/sales/${saleId}`}>
          <EyeOpenIcon />
        </Link>
      </TD>
    </TR>
  )
}
