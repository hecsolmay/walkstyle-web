'use client'

import { getCategoryOptions } from '@/services/async-options'
import { type Category } from '@/types/category'
import { cn } from '@/utils/cn'
import { AsyncPaginate } from 'react-select-async-paginate'

interface SelectCategoriesProps {
  defaultValues?: Category[]
  error?: string
  onChange?: (...event: any[]) => void
}

export function SelectCategories ({ defaultValues = [], error, onChange }: SelectCategoriesProps) {
  return (
    <>
      <label className='mb-2 block text-sm font-medium text-slate-600 '>
        Categorias
      </label>
      <div>
        <AsyncPaginate
          defaultValue={defaultValues}
          // @ts-expect-error next-line
          loadOptions={getCategoryOptions}
          getOptionValue={(option: Category) => option.categoryId}
          getOptionLabel={(option: Category) => option.name}
          additional={{
            page: 1
          }}
          isMulti
          isSearchable={true}
          onChange={(newValue) => { onChange !== undefined && onChange(newValue.map(category => category.categoryId)) }}
          placeholder="Categorias..."
          debounceTimeout={500}
        />
      </div>
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>

    </>

  )
}
