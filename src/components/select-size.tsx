'use client'

import { TextButton } from '@/components/text-button'
import { type Size } from '@/types/size'
import { cn } from '@/utils/cn'
import { useState } from 'react'

interface SelectSizeProps {
  sizes: Size[]
  children?: React.ReactNode
  className?: string
}

export function SelectSize ({ sizes, children, className }: SelectSizeProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)

  const handleSelect = (size: Size) => {
    setSelectedSize(size)
  }

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <p className='text-lg text-slate-700'>Tallas:</p>
      <div className='grid max-w-[440px] grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-6'>
        {sizes.map(size => (
          <button key={size.sizeId} className={cn('border w-14 text-center border-slate-400 py-2', selectedSize?.sizeId === size.sizeId ? 'bg-black text-white border-black' : 'bg-white text-black')} onClick={() => { handleSelect(size) }}>{size.size}</button>
        ))}
      </div>
      {children}
    </div>
  )
}

export function SelectSizeWithCounter ({ sizes, className }: SelectSizeProps) {
  const [quantity, setQuantity] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value))
  }

  const handleAdd = () => {
    const parse = Number(quantity)
    const value = isNaN(parse) ? 0 : parse
    setQuantity(value + 1)
  }

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <SelectSize sizes={sizes} className={className}>
      <div className='my-2 flex gap-3'>
        <button onClick={handleRemove} className='w-16 border border-slate-400 py-2 text-center'>-</button>
        <input onChange={handleChange} value={quantity} min={0} className='block flex-1 border border-slate-400 py-2 text-center' type="number" />
        <button onClick={handleAdd} className='w-16 border border-slate-400 py-2 text-center'>+</button>
      </div>
      <TextButton disabled={!(quantity > 0)} text='Agregar al carrito' />
    </SelectSize>
  )
}
