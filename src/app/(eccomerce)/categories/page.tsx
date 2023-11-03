import ListOfCategories from '@/components/list-categories'
import { Pagination } from '@/components/pagination'
import { getCategories } from '@/services/categories'
import { type ServerProps } from '@/types'

export default async function CategoriesPage ({ searchParams }: ServerProps) {
  const page = searchParams?.page ?? 1
  const { categories, info } = await getCategories({ page, limit: 16, sort: 'name-asc' })

  return (
    <div className='flex flex-col gap-10 px-8 py-10'>
      <h1 className='text-3xl font-bold uppercase'>Nuestras Categorias</h1>
      <ListOfCategories categories={categories} />
      <div className='flex justify-center md:justify-end'>
        <Pagination info={info}/>
      </div>
    </div>
  )
}
