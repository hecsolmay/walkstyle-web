import StatusBadge from '@/components/admin/status-badge'
import { TD, TR } from '@/components/table'
import { type CategoryDetails } from '@/types/category'
import CategoryActions from '@/components/admin/categories/actions'

interface CategoryRowProps {
  category: CategoryDetails
}

export default function CategoryRow ({ category }: CategoryRowProps) {
  return (
    <TR className='text-slate-500'>
      <TD>
        <div className='grid w-20 place-items-center'>
          <img className='object-cover' src={category.banner.preview} alt={category.name} />
        </div>
      </TD>
      <TD>{category.name}</TD>
      <TD className='text-center'>{category.totalProducts ?? 0}</TD>
      <TD>
        <StatusBadge status={category.status} />
      </TD>

      <TD className=' text-black'>
        <div className='flex items-center gap-6'>
          <CategoryActions category={category} />
        </div>
      </TD>
    </TR>
  )
}
