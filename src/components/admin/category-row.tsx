import StatusBadge from '@/components/admin/status-badge'
import { PencilSquareIcon, TrashCanIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import { type Category } from '@/types/category'

interface CategoryRowProps {
  category: Category
}

export default function CategoryRow ({ category }: CategoryRowProps) {
  return (
    <TR className='text-slate-500'>
      <TD>
        <div className='grid w-20 place-items-center'>
          <img className='object-cover' src={category.imgUrl} alt={category.name} />
        </div>
      </TD>
      <TD>{category.name}</TD>
      <TD className='text-center'>{category.totalProducts}</TD>
      <TD>
        <StatusBadge status={category.status} />
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
