'use client'

import { TextButton } from '@/components/text-button'
import { type Product } from '@/types/product'
import { type Size } from '@/types/size'
import { cn } from '@/utils/cn'
import { toastError, toastSuccess } from '@/utils/toast'
import { useState } from 'react'

interface SelectSizeProps {
  product: Product
  children?: React.ReactNode
  closeModal?: () => void
  className?: string
}

export function SelectSizeWithCounter ({ product, className, closeModal }: SelectSizeProps) {
  const { sizes } = product
  const [quantity, setQuantity] = useState(0)
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const avalibleStock = selectedSize?.stock ?? 0
  const leftStock = isNaN(avalibleStock - quantity) ? avalibleStock : avalibleStock - quantity

  const handleSelect = (size: Size) => {
    setSelectedSize(size)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    if (value > avalibleStock || value < 0) {
      toastError('No hay stock suficiente')
      return
    }
    setQuantity(value)
  }

  const handleAdd = () => {
    const parse = Number(quantity)
    const value = isNaN(parse) ? 0 : parse
    const addValue = value + 1

    if (addValue > avalibleStock) {
      toastError('No hay stock suficiente')
      return
    }
    setQuantity(addValue)
  }

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddProduct = () => {
    if (selectedSize === null || quantity === 0) return
    // TODO:AQUI IRIA LA PARTE DE AGREGAR

    if (closeModal !== undefined) closeModal()

    toastSuccess('Producto Agregado al carrito')
  }

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <p className='text-lg text-slate-700'>Tallas:</p>
      <div className='grid max-w-[440px] grid-cols-[repeat(auto-fit,minmax(60px,.1fr))] gap-2'>
        {sizes.map(size => (
          <button key={size.sizeId} className={cn('border w-14 text-center border-slate-400 py-2', selectedSize?.sizeId === size.sizeId ? 'bg-black text-white border-black' : 'bg-white text-black')} onClick={() => { handleSelect(size) }}>{size.size}</button>
        ))}
      </div>

      <div>
        <div className='my-2 flex gap-3'>

          <button onClick={handleRemove} className={cn('w-16 border border-slate-400 py-2 text-center', (quantity === 0) && 'opacity-80 hover:opacity-80 hover:shadow-none cursor-not-allowed')}>-</button>

          <input onChange={handleChange} value={quantity} min={0} className='block flex-1 border border-slate-400 py-2 text-center' type="number" />

          <button disabled={leftStock === 0} onClick={handleAdd} className={cn('w-16 border border-slate-400 py-2 text-center', (leftStock === 0) && 'opacity-80 hover:opacity-80 hover:shadow-none cursor-not-allowed')}>+</button>

        </div>
        {quantity !== 0 && <p className='text-center'>Quedan {leftStock} unidades disponibles</p>}
      </div>
      <TextButton onClick={handleAddProduct} disabled={!(quantity > 0)} text='Agregar al carrito' />

    </div>

  )
}
