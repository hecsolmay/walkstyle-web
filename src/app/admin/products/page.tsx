import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import PaginationSection from '@/components/admin/pagination-section'
import FormProductCreate from '@/components/admin/products/form'
import ProductRow from '@/components/admin/products/product-row'
import { getAdminProducts } from '@/services/products'
import { type ServerProps } from '@/types'

export const dynamic = 'force-dynamic'

export default async function ProductsPage ({ searchParams }: ServerProps) {
  const { info, products } = await getAdminProducts(searchParams)

  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader modalClassName='grid place-content-center' buttonText='Add Product' searchPlaceholder='Search...' title='All Products'>
        <FormProductCreate />
      </AdminHeader>
      <AdminTable headers={['Name', 'Brand', 'Gender', 'Price', 'Status', 'Actions']}>
        {products.map(product =>
          <ProductRow key={product.productId} product={product}/>
        )}
      </AdminTable>
      <PaginationSection info={info}/>
    </div>
  )
}
