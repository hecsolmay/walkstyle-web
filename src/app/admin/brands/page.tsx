import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import BrandRow from '@/components/admin/brand-row'
import PaginationSection from '@/components/admin/pagination-section'
import { type BrandInfo } from '@/types/brand'
import { Status } from '@/types/enums'

const brand: BrandInfo = {
  brandId: '1',
  imgUrl: 'https://1000marcas.net/wp-content/uploads/2020/01/Air-Jordan-logo.png',
  name: 'Brand 1',
  totalProducts: 10,
  status: Status.ACTIVE
}

const brands = Array(15).fill(0).map(() => ({ ...brand, brandId: crypto.randomUUID() }))

export default function BrandsPage () {
  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader buttonText='Add Brand' searchPlaceholder='Search...' title='All Brands'/>
      <AdminTable headers={['Logo', 'Name', 'Total Products', 'Status', 'Actions']}>
        {brands.map(brand =>
          <BrandRow key={brand.brandId} brand={brand}/>
        )}
      </AdminTable>
      <PaginationSection />
    </div>
  )
}
