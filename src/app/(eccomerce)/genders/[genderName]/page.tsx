import { ProductFilter } from '@/components/filter-select-category'
import ListOfProducts from '@/components/list-products'
import { Pagination } from '@/components/pagination'
import { GENDER_LABELS } from '@/contants'
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

  const genderLabel = GENDER_LABELS[genderName as any] ?? GENDER.MALE

  const { info, products } = await getProductsByGender({ ...searchParams, gender: genderName as any, limit: 20 })

  return (
    <>
      <div>
        <h1 className="mb-5 p-6 text-xl font-bold">{genderLabel}</h1>
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
