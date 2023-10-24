'use client'

import { GENDER } from '@/types/enums'
import { cn } from '@/utils/cn'
import Select from 'react-select'

type GenderLabel = Record <string, string>

const genderLabels: GenderLabel = {
  [GENDER.MALE]: 'Hombre',
  [GENDER.FEMALE]: 'Mujer',
  [GENDER.KID]: 'Niño'
}

interface SelectGenderProps {
  className?: string
  error?: string
  register?: any
  onChange?: (...event: any[]) => void
  value: GENDER
}

export default function SelectGender ({ className, error, register, onChange, value }: SelectGenderProps) {
  const options = Object.entries(genderLabels).map(([value, label]) => ({ value, label }))

  return (
    <>
      <label className='mb-2 block text-sm font-medium text-slate-600 '>
        Genero
      </label>

      <div>
        <Select
          options={options}
          value={options.find((gender) => gender.value === value)}
          onChange={(val) => { onChange !== undefined && onChange(val?.value) }}
          className={cn(error !== undefined && 'border-red-500', className)}
          placeholder='Genero...'
        />
      </div>
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>

    </>
  )
}
