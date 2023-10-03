'use client'
import ItemCardWithCounter from '@/components/item-cart-with-counter'
import { type ItemProduct } from '@/types/product'

interface TotalProductsProps {
  products: ItemProduct[]
}

export function TotalProducts ({ products }: TotalProductsProps) {
  return (
    <div className="flex h-[562px] w-full max-w-[827px] grow flex-col gap-4 overflow-y-scroll bg-slate-200 p-3 py-8 scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-400 md:p-11">
      {products.map(product => (
        <ItemCardWithCounter key={product.product.productId} product={product} />

      ))}

    </div>
  )
}
