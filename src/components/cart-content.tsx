'use client'

import EmptyState from '@/components/empty-states/empty-state'
import { TotalProducts } from '@/components/total-products'
import { TotalToPay } from '@/components/total-to-pay'
import useCartStore from '@/store/useCartStore'

export default function CartContent () {
  const itemProducts = useCartStore((state) => state.items) ?? []

  if (itemProducts.length === 0) {
    return (
      <div className='my-10'>
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
      <div className='col-span-2 mx-3 my-6 grid place-items-center'>
        <TotalProducts products={itemProducts}/>
      </div>
      <div className='col-span-1 flex justify-center'>
        <TotalToPay />
      </div>
    </div>
  )
}
