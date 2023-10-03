import EmptyState from '@/components/empty-state'
import { TotalProducts } from '@/components/total-products'
import { TotalToPay } from '@/components/total-to-pay'
import { type ItemProduct, type Product } from '@/types/product'

const product: Product = {
  name: 'Camisa de manga corta',
  price: 10495,
  gender: {
    genderId: 'M',
    name: 'Mujer'
  },
  brand: {
    brandId: '1',
    name: 'Nike'
  },
  imageUrl: 'https://tafmx.vtexassets.com/arquivos/ids/406372-192-auto',
  description: 'Camisa de manga corta',
  productId: '1',
  sizes: [24, 25, 25.5, 26, 26.5, 27]
}

const itemProduct: ItemProduct = {
  product,
  quantity: 1,
  size: 32
}

const products = Array(15).fill(0).map(_ => ({
  ...itemProduct,
  product: {
    ...product, productId: crypto.randomUUID()
  }
}))

export default function CartPage () {
  if (products.length === 0) {
    return (
      <div className='my-10'>
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
      <div className='col-span-2 mx-3 my-6 grid place-items-center'>
        <TotalProducts products={products}/>
      </div>
      <div className='col-span-1 flex justify-center'>
        <TotalToPay/>
      </div>
    </div>
  )
}
