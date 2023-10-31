import { ProductFilter } from '@/components/filter-select-category'
import { Pagination } from '@/components/pagination'
import { ProductCard } from '@/components/product-card'
import { getProductsByGender } from '@/services/products'
import { type ServerProps } from '@/types'
import { GENDER } from '@/types/enums'
import { redirect } from 'next/navigation'

interface Props extends ServerProps {
  params: {
    genderName: string
  }
}

const GENDERS_VALUES = Object.values(GENDER)

export default async function GenderPage ({ searchParams, params }: Props) {
  const { genderName = '' } = params

  if (!GENDERS_VALUES.includes(genderName as any)) {
    redirect(`/genders/${GENDER.MALE}`)
  }

  const { info, products } = await getProductsByGender({ ...searchParams, gender: genderName as any })

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
        <div className='my-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center gap-y-5 lg:grid-cols-4'>
          {products.map((product) => (
            <ProductCard key={product.productId} className='h-80 w-60 gap-8 pt-5 shadow-xl' product={product} />
          ))}
        </div>
        <div className='flex justify-center p-10 md:justify-end'>
          <Pagination info={info}/>
        </div>
      </div>
    </>
  )
}
