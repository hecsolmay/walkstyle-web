import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import PaginationSection from '@/components/admin/pagination-section'
import ProductRow from '@/components/admin/product-row'
import { type Product } from '@/types/product'

const product: Product = {
  productId: '1',
  name: 'Product 1 lamvmasc lkams klcmalkwmqlkwmlqkwmkq wmkmlkmasv alkclasmamv ascmaamsvasmca',
  brand: { brandId: '11', name: 'Brand 1' },
  gender: { genderId: '21', name: 'Gender 1' },
  price: 1000,
  description: 'Description',
  imageUrl: 'https://tafmx.vtexassets.com/arquivos/ids/406372-192-auto'
}

const productsArray = Array(15).fill(0).map(() => ({ ...product, productId: crypto.randomUUID() }))

export default function ProductsPage () {
  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader buttonText='Add Product' searchPlaceholder='Search...' title='All Products'/>
      <AdminTable headers={['Name', 'Brand', 'Gender', 'Price', 'Size', 'Actions']}>
        {productsArray.map(product =>
          <ProductRow key={product.productId} product={product}/>
        )}
      </AdminTable>
      <PaginationSection />
    </div>
  )
}
