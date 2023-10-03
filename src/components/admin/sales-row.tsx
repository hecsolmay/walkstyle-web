import { EyeOpenIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import { type Sale } from '@/types/sale'
import { getFormatedDate } from '@/utils/dates'
import Link from 'next/link'

interface SalesRowProps {
  sale: Sale
}

export default function SalesRow ({ sale }: SalesRowProps) {
  const { date, quantity, saleId, total, user } = sale

  return (
    <TR className='text-slate-500'>
      <TD>
        {user.fullname}
      </TD>
      <TD className='text-green-600'>
        {total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
      </TD>
      <TD>
        {quantity}
      </TD>
      <TD>
        {getFormatedDate(date)}
      </TD>

      <TD className='grid w-28  place-content-center text-black'>
        <Link className='block w-fit' href={`/admin/sales/${saleId}`}>
          <EyeOpenIcon />
        </Link>
      </TD>
    </TR>
  )
}
