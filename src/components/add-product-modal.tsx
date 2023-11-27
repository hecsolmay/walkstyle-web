import { XMarkIcon } from '@/components/icons'
import { SelectSizeWithCounter } from '@/components/select-size'
import { type Product } from '@/types/product'
import Link from 'next/link'
import { ProductImagesModal } from './product-images'

interface AddProductModalProps {
  handleClose: () => void
  product: Product
}

export default function AddProductModal ({ handleClose, product }: AddProductModalProps) {
  return (
    <div className='relative h-[100%] max-h-[90vh] w-[88vw] rounded-lg bg-white md:h-full md:w-[90vw]'>
      <button onClick={handleClose} className='absolute right-1 top-0 z-10 text-slate-600 md:right-5'>
        <XMarkIcon className='h-12 w-8'/>
      </button>
      <div className='h-full w-full overflow-y-scroll p-4 scrollbar-thin scrollbar-track-slate-400 md:grid md:grid-cols-3 md:gap-8 md:overflow-hidden md:p-10'>

        <ProductImagesModal images={product.images} />

        <div className='col-span-2 mt-8 flex flex-col justify-between gap-5 text-slate-600 md:m-0 md:max-w-[440px] md:gap-1'>
          <div className='mb-6 flex flex-col gap-4 md:mb-2'>
            <p className='text-xl uppercase'>{product.brand.name}</p>
            <div className='space-y-3 text-black'>
              <h2 className='text-3xl font-bold'>{product.name}</h2>
              <p className='text-xl font-semibold'>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
              <p className='line-clamp-3 min-h-[3rem] text-ellipsis text-sm text-slate-700 [text-wrap:balance]'>{product.details}</p>
            </div>
          </div>
          <SelectSizeWithCounter className='gap-8 md:gap-4' closeModal={handleClose} product={product} />
          <Link href={`/product/${product.productId}`} className='text-center'>Ver mas detalles del producto</Link>
        </div>
      </div>

    </div>
  )
}
