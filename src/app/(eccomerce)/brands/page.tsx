import ListOfBrands from '@/components/list-banners'
import { Pagination } from '@/components/pagination'
import { getBrands } from '@/services/brands'
import { type ServerProps } from '@/types'

export default async function BrandsPage ({ searchParams }: ServerProps) {
  const page = searchParams?.page ?? 1
  const { brands, info } = await getBrands({ page, limit: 16, sort: 'name-asc' })

  return (
    <div className='flex flex-col gap-10 px-8 py-10'>

      <h1 className='text-3xl font-bold uppercase'>Nuestras Marcas</h1>

      <ListOfBrands brands={brands} />

      <div className='flex justify-center md:justify-end'>
        <Pagination info={info}/>
      </div>

    </div>
  )
}
