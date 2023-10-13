import { ChevronLeftIcon, XMarkIcon } from '@/components/icons'
import { SelectSizeWithCounter } from '@/components/select-size'
import { type Product } from '@/types/product'
import Link from 'next/link'

interface AddProductModalProps {
  handleClose: () => void
  product: Product
}

export default function AddProductModal ({ handleClose, product }: AddProductModalProps) {
  return (
    <div className='relative h-[100%] max-h-[88vh] w-[88vw] rounded-lg bg-white md:h-full md:max-h-full md:w-[90vw]'>
      <button onClick={handleClose} className='absolute right-1 top-0 z-10 text-slate-600 md:right-5'>
        <XMarkIcon className='h-12 w-8'/>
      </button>
      <div className='h-full w-full overflow-y-scroll p-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-hidden md:p-10'>

        <div className='relative grid h-96 place-content-center rounded-lg bg-slate-200 shadow-lg md:h-full'>
          <button className='absolute left-0 top-1/2 text-slate-600'>
            <ChevronLeftIcon className='h-12 w-8'/>
          </button>
          <button className='absolute right-0 top-1/2 text-slate-600'>
            <ChevronLeftIcon className='h-12 w-8 rotate-180'/>
          </button>
          <div className='h-52 w-48'>
            <img className='object-cover mix-blend-darken' src={product.imageUrl} alt={product.name} />
          </div>
        </div>
        <div className='col-span-2 mt-8 flex flex-col justify-between gap-10 text-slate-600 md:m-0 md:max-w-[440px] md:gap-1'>
          <div className='flex flex-col gap-4'>
            <p className='text-xl uppercase'>{product.brand.name}</p>
            <div className=' text-black'>
              <h2 className='text-3xl font-bold'>{product.name}</h2>
              <p className='mt-3 text-xl font-semibold'>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
            </div>
          </div>
          <SelectSizeWithCounter sizes={product.sizes} />
          <Link href={`/product/${product.productId}`} className='text-center'>Ver mas detalles del producto</Link>
        </div>
      </div>

    </div>
  )
}
