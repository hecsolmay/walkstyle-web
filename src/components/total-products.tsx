'use client'
import ItemCardWithCounter from '@/components/item-cart-with-counter'
import { type ItemProduct } from '@/types/product'

const product = {
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
  productId: '1'
}

const itemProduct: ItemProduct = {
  product,
  quantity: 1,
  size: 32
}

export function TotalProducts () {
  const products = Array(15).fill(0).map(_ => ({
    ...itemProduct,
    product: {
      ...product, productId: crypto.randomUUID()
    }
  }))

  return (
    <div className="flex h-[562px] w-full max-w-[827px] grow flex-col gap-4 overflow-y-scroll bg-slate-200 p-3 py-8 scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-400 md:p-11">
      {products.map(product => (
        <ItemCardWithCounter key={product.product.productId} product={product} />

      ))}

    </div>
  )
}
