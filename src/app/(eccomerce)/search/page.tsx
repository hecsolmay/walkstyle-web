import { ProductFilter } from '@/components/filter-select-category'
import { Pagination } from '@/components/pagination'
import { ProductCard } from '@/components/product-card'

const product = {
  productId: '1',
  name: 'Jordan',
  brand: {
    brandId: '123',
    name: 'Tenis Nike Revolution 6 Next Nature'
  },
  price: 999.00,
  imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8b6c5d4-f53d-4798-a833-7a7c8b063d66/calzado-air-max-intrlk-lite-Sp1WFC.png',
  gender: {
    genderId: '1',
    name: 'Mujer'
  },
  description: 'Tenis Nike Revolution 6 Next Nature'
}

export default function SearchPage ({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  console.log(searchParams)

  return (
    <>
      <div>
        <h1 className="mb-5 p-6 text-xl font-bold">Searched Param</h1>
        <span className="block w-full border-t border-gray-400"></span>
        <div className='flex flex-row items-center justify-between px-7 py-6'>
          <h1 className="font-semibold">2220 Productos</h1>
          <ProductFilter />

        </div>

        <span className="block w-full border-t border-gray-400"></span>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center gap-y-5'>
          {Array(16).fill(0).map((_, index) => (
            <ProductCard key={index} className='h-80 w-60 gap-8 pt-5 shadow-xl' product={product} />
          ))}
        </div>
        <div className='flex justify-center p-10 md:justify-end'>
          <Pagination />
        </div>
      </div>
    </>
  )
}
