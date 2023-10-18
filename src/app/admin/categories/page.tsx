import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import CategoryRow from '@/components/admin/categories/category-row'
import PaginationSection from '@/components/admin/pagination-section'
import { getAdminCategories } from '@/services/categories'

export const dynamic = 'force-dynamic'

export default async function CategoriesPage () {
  const response = await getAdminCategories()
  const { categories } = response

  console.log({ categories })

  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader modalClassName='grid place-content-center' buttonText='Add Category' searchPlaceholder='Search...' title='All Categories'>
      </AdminHeader>
      <AdminTable headers={['Logo', 'Name', 'Total Products', 'Status', 'Actions']}>
        {categories.map(category =>
          <CategoryRow key={category.categoryId} category={category}/>
        )}
      </AdminTable>
      <PaginationSection />
    </div>
  )
}
