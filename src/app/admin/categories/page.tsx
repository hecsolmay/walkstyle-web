import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import CategoryRow from '@/components/admin/category-row'
import PaginationSection from '@/components/admin/pagination-section'
import { type Category } from '@/types/category'
import { Status } from '@/types/enums'

const category: Category = {
  categoryId: '1',
  imgUrl: 'https://1000marcas.net/wp-content/uploads/2020/01/Air-Jordan-logo.png',
  name: 'Brand 1',
  totalProducts: 10,
  status: Status.ACTIVE
}

const categories = Array(15).fill(0).map(() => ({ ...category, categoryId: crypto.randomUUID() }))

export default function CategoriesPage () {
  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader buttonText='Add Category' searchPlaceholder='Search...' title='All Categories'/>
      <AdminTable headers={['Logo', 'Name', 'Total Products', 'Status', 'Actions']}>
        {categories.map(category =>
          <CategoryRow key={category.categoryId} category={category}/>
        )}
      </AdminTable>
      <PaginationSection />
    </div>
  )
}
