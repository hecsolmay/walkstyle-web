import { ProductFilter } from '@/components/filter-select-category'
import ListOfProducts from '@/components/list-products'
import { Pagination } from '@/components/pagination'
import { getProducts } from '@/services/products'
import { type ServerProps } from '@/types'

export default async function SearchPage ({ searchParams }: ServerProps) {
  const { info, products } = await getProducts({ ...searchParams, limit: 20 })

  return (
    <>
      <div>
        <h1 className="mb-5 p-6 text-xl font-bold">Productos</h1>
        <span className="block w-full border-t border-gray-400"></span>
        <div className='flex flex-row items-center justify-between px-7 py-6'>
          <h1 className="font-semibold">{info.items} Productos</h1>
          <ProductFilter />

        </div>

        <span className="block w-full border-t border-gray-400"></span>
        {<ListOfProducts products={products}/>}
        <div className='flex justify-center p-10 md:justify-end'>
          <Pagination info={info}/>
        </div>
      </div>
    </>
  )
}
