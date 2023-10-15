import Form from '@/components/admin/Form'
import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import CategoryRow from '@/components/admin/category-row'
import PaginationSection from '@/components/admin/pagination-section'
import { getCategories } from '@/services/categories'

export default async function CategoriesPage () {
  const response = await getCategories()
  const { categories } = response

  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader modalClassName='grid place-content-center' buttonText='Add Category' searchPlaceholder='Search...' title='All Categories'>
        <Form />
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
