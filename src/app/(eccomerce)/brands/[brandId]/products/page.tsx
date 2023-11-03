import { ProductFilter } from '@/components/filter-select-category'
import ListOfProducts from '@/components/list-products'
import { Pagination } from '@/components/pagination'
import { getProductsByBrand } from '@/services/products'
import { type ServerProps } from '@/types'

interface Props extends ServerProps {
  params: {
    brandId: string
  }
}

export default async function ProductsByCategoryPage ({ searchParams, params }: Props) {
  const { brandId = '' } = params

  const { info, products, brand } = await getProductsByBrand({ ...searchParams, brandId, limit: 20 })

  return (
    <>
      <div>
        <h1 className="mb-5 p-6 text-xl font-bold">{brand ?? 'Marca'}</h1>
        <span className="block w-full border-t border-gray-400"></span>
        <div className='flex flex-row items-center justify-between px-7 py-6'>
          <h1 className="font-semibold">{info.items} Productos</h1>
          <ProductFilter />

        </div>

        <span className="block w-full border-t border-gray-400"></span>
        {<ListOfProducts products={products} />}
        <div className='flex justify-center p-10 md:justify-end'>
          <Pagination info={info}/>
        </div>
      </div>
    </>
  )
}
