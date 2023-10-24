import EmptyState from '@/components/empty-state'
import { TotalProducts } from '@/components/total-products'
import { TotalToPay } from '@/components/total-to-pay'
import { type ItemProduct } from '@/types/product'

const products: ItemProduct[] = []

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
