import StatusBadge from '@/components/admin/status-badge'
import { TD, TR } from '@/components/table'
import { type BrandDetails } from '@/types/brand'
import BrandActions from './actions'

interface BrandRowProps {
  brand: BrandDetails
}

export default function BrandRow ({ brand }: BrandRowProps) {
  return (
    <TR className='text-slate-500'>
      <TD>
        <div className='grid w-20 place-items-center'>
          <img className='object-cover' src={brand.banner.preview} alt={brand.name} />
        </div>
      </TD>
      <TD>{brand.name}</TD>
      <TD className='text-center'>{brand.totalProducts ?? 0}</TD>
      <TD>
        <StatusBadge status={brand.status} />
      </TD>

      <TD className=' text-black'>
        <BrandActions brand={brand} />
      </TD>
    </TR>
  )
}
