import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import CategoryRow from '@/components/admin/categories/category-row'
import FormCreate from '@/components/admin/categories/form'
import PaginationSection from '@/components/admin/pagination-section'
import { getAdminCategories } from '@/services/categories'
import { type ServerProps } from '@/types'

export const dynamic = 'force-dynamic'

export default async function CategoriesPage ({ searchParams }: ServerProps) {
  const response = await getAdminCategories(searchParams)
  const { categories, info } = response

  console.log({ categories })

  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader modalClassName='grid place-content-center' buttonText='Agregar Categoria' searchPlaceholder='Buscar...' title='Categorias'>
        <FormCreate />
      </AdminHeader>
      <AdminTable headers={['Logo', 'Name', 'Total Products', 'Status', 'Actions']}>
        {categories.map(category =>
          <CategoryRow key={category.categoryId} category={category}/>
        )}
      </AdminTable>
      <PaginationSection info={info}/>
    </div>
  )
}
