import SizeActions from '@/components/admin/sizes/actions'
import StatusBadge from '@/components/admin/status-badge'
import { TD, TR } from '@/components/table'
import { type SizeDetails } from '@/types/size'

interface SizeRowProps {
  size: SizeDetails
}

export default function SizeRow ({ size }: SizeRowProps) {
  return (
    <TR className='text-slate-500'>
      <TD>{size.size}</TD>
      <TD>{size.extraPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</TD>
      <TD>{size.stock}</TD>
      <TD>
        <StatusBadge status={size.status}/>
      </TD>

      <TD className=' text-black'>
        <SizeActions size={size}/>
      </TD>
    </TR>
  )
}
