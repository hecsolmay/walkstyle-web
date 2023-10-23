import { ProductFilter } from '@/components/filter-select-category'
import { Pagination } from '@/components/pagination'
import { type ServerProps } from '@/types'
// import { ProductCard } from '@/components/product-card'

export default function SearchPage ({ searchParams }: ServerProps) {
  console.log({ searchParams })

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
        <div className='my-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center gap-y-5 lg:grid-cols-4'>
          {/* {Array(16).fill(0).map((_, index) => (
            <ProductCard key={index} className='h-80 w-60 gap-8 pt-5 shadow-xl' product={product} />
          ))} */}
        </div>
        <div className='flex justify-center p-10 md:justify-end'>
          <Pagination />
        </div>
      </div>
    </>
  )
}
