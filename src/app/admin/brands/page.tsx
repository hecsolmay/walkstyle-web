import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import BrandRow from '@/components/admin/brands/brand-row'
import FormCreate from '@/components/admin/brands/form'
import PaginationSection from '@/components/admin/pagination-section'
import { getAdminBrands } from '@/services/brands'

export const dynamic = 'force-dynamic'

export default async function BrandsPage () {
  const response = await getAdminBrands()
  const { brands } = response

  console.log({ brands })
  return (

    <div className=' flex flex-col gap-8'>
      <AdminHeader modalClassName='grid place-content-center' buttonText='Add Brand' searchPlaceholder='Search...' title='All Brands'>
        <FormCreate/>
      </AdminHeader>
      <AdminTable headers={['Logo', 'Name', 'Total Products', 'Status', 'Actions']}>
        {brands.map(brand =>
          <BrandRow key={brand.brandId} brand={brand}/>
        )}
      </AdminTable>
      <PaginationSection/>
    </div>
  )
}
