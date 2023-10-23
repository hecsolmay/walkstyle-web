import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import PaginationSection from '@/components/admin/pagination-section'
import { type ServerProps } from '@/types'
// import ProductRow from '@/components/admin/product-row'

export default function ProductsPage ({ searchParams }: ServerProps) {
  console.log({ searchParams })

  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader buttonText='Add Product' searchPlaceholder='Search...' title='All Products'/>
      <AdminTable headers={['Name', 'Brand', 'Gender', 'Price', 'Size', 'Actions']}>
        {/* {productsArray.map(product =>
          <ProductRow key={product.productId} product={product}/>
        )} */}
      </AdminTable>
      <PaginationSection />
    </div>
  )
}
