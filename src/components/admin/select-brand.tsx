'use client'

import { getBrandsOptions } from '@/services/async-options'
import { type Brand } from '@/types/brand'
import { cn } from '@/utils/cn'
import { AsyncPaginate } from 'react-select-async-paginate'

interface SelectBrandProps {
  defaultValue?: Brand
  error?: string
  onChange?: (...event: any[]) => void
}

export function SelectBrand ({ defaultValue, error, onChange }: SelectBrandProps) {
  return (
    <>
      <label className='mb-2 block text-sm font-medium text-slate-600 '>
        Marcas
      </label>
      <div>
        <AsyncPaginate
          defaultValue={defaultValue}
          // @ts-expect-error next-line
          loadOptions={getBrandsOptions}
          getOptionValue={(option: Brand) => option.brandId}
          getOptionLabel={(option: Brand) => option.name}
          additional={{
            page: 1
          }}
          isSearchable={true}
          onChange={(newValue) => { onChange !== undefined && onChange(newValue?.brandId) }}
          placeholder="Marcas..."
          debounceTimeout={500}
        />
      </div>
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>

    </>

  )
}
