'use client'

import { useSearchStore } from '@/store/useSearchStore'
import ProductLinkCard from '@/components/product-link-card'
import ListEmpty from './empty-states/list-empty'

export default function SearchSugestions () {
  const isSearching = useSearchStore(state => state.isSearching)
  const isLoading = useSearchStore(state => state.isLoading)
  const search = useSearchStore(state => state.search)
  const products = useSearchStore(state => state.products)

  if (!isSearching) return null

  return (
    <div className='absolute right-0 top-24 z-10 min-h-[80vh] w-screen bg-slate-100 px-4 lg:top-20'>
      <div className='flex h-full w-full flex-col gap-4 p-3'>
        <div>
          <h2 className='text-2xl font-semibold'>Resultados de {search}</h2>
          <span className="absolute inset-x-0 mt-2 h-px w-full border-0 bg-gray-400" />
        </div>
        {isLoading && (
          <div className='grid h-96 w-full place-content-center'>
            <div className='loaderBlack' />
          </div>
        )}

        {!isLoading && products.length === 0 && (
          <ListEmpty
            title='No Se encontro ningun resultado'
            description='Intentalo de nuevo con otra busqueda'
          />
        )}

        {!isLoading && products.length > 0 && (
          <div className='flex max-w-[100vw] gap-4 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600'>
            {products.map(product => (
              <ProductLinkCard
                className='min-w-[15rem]'
                key={product.productId}
                product={product}
              />
            ))}
          </div>
        )
        }

      </div>
    </div>
  )
}
