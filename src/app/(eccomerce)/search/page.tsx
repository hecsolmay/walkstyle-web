'use client'
import { useState } from 'react'
import { ProductFilter } from '@/components/filter-select-category'
import { Pagination } from '@/components/pagination'
import { ProductCard } from '@/components/product-card'
import { FilterSearchIcon } from '@/components/icons'

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

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const totalPages = 10

  return (
    <>
      <div>
        <h1 className="mb-5 p-6 text-xl font-bold">Searched Param</h1>
        <span className="block w-full border-t border-gray-400"></span>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <h1 className="p-6 font-semibold md:mb-0">2220 Productos</h1>
          <div className='flex gap-4 p-6'>
            <FilterSearchIcon className='text-cyan-500' />
            <ProductFilter />
          </div>

        </div>
        <span className="block w-full border-t border-gray-400"></span>
        <div className='grid grid-cols-2 justify-items-center gap-4 p-4 md:grid-cols-4 '>
          {Array(16).fill(0).map((_, index) => (
            <div key={index} className='p-2'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}
