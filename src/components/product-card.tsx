import Button from '@/components/button-product-card'
import type Product from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard ({ product }: ProductCardProps) {
  return (
    <div className='flex h-72  w-52 flex-col justify-between gap-4 bg-white p-4 shadow-md'>
      <div className='mx-auto  h-20 w-36'>
        <img
          className="h-full w-full object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className="text-lg font-semibold uppercase">{product.name}<span className="uppercase text-gray-500"> - {product.gender.name}</span></h3>
        <p className="text-overflow-ellipsis my-2 line-clamp-2 text-sm text-gray-500">{product.description}</p>
        <p className="text-sm font-bold text-black"><span className='font-bold text-gray-500'>$</span>{product.price.toFixed(2)}</p>
      </div>
      <div className=' flex justify-end'>
        <Button/>
      </div>
    </div>
  )
}
