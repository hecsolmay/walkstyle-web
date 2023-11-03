import { type Product } from '@/types/product'
import { ProductCard } from '@/components/product-card'
import ListEmpty from '@/components/empty-states/list-empty'

interface ListOfProductsProps {
  products: Product[]
}

export default function ListOfProducts ({ products }: ListOfProductsProps) {
  if (products.length === 0) {
    return (
      <ListEmpty
        title='Aun no hay ningun producto para esta busqueda'
        description='Intente con otra busqueda para un mejor resultado'
      />
    )
  }

  return (
    <div className='my-6 grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] justify-items-center gap-x-2 gap-y-5 lg:grid-cols-4'>
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          className='w-64 pt-5 shadow-xl'
          product={product}
        />
      ))}
    </div>
  )
}
