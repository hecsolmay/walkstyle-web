import StatusBadge from '@/components/admin/status-badge'
import { PencilSquareIcon, TrashCanIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import { type BrandInfo } from '@/types/brand'

interface BrandRowProps {
  brand: BrandInfo
}

export default function BrandRow ({ brand }: BrandRowProps) {
  return (
    <TR className='text-slate-500'>
      <TD>
        <div className='grid w-20 place-items-center'>
          <img className='object-cover' src={brand.imgUrl} alt={brand.name} />
        </div>
      </TD>
      <TD>{brand.name}</TD>
      <TD className='text-center'>{brand.totalProducts}</TD>
      <TD>
        <StatusBadge status={brand.status} />
      </TD>

      <TD className=' text-black'>
        <div className='flex items-center gap-6'>
          <button>
            <PencilSquareIcon />
          </button>
          <button>
            <TrashCanIcon />
          </button>
        </div>
      </TD>
    </TR>
  )
}
