import ProductImagesSlider from '@/components/product-images'
import { SelectSizeWithCounter } from '@/components/select-size'
import { getProductById } from '@/services/products'
import { notFound } from 'next/navigation'

export default async function ProductPage (
  { params }: { params: { productId: string } }
) {
  const product = await getProductById(params.productId)

  if (product === undefined) {
    notFound()
  }

  return (
    <div className='mb-10 grid w-full grid-cols-1 gap-y-4 p-4 pt-6 md:min-h-[90vh] md:grid-cols-2 md:p-10 '>
      {/* MOBILE INFO  */}

      <div className='mb-6 flex flex-col gap-6 md:hidden'>
        <p className='text-xl uppercase'>{product.brand?.name ?? ''}</p>
        <div className='space-y-3 text-black'>
          <h2 className='text-3xl font-bold'>{product.name}</h2>
          <p className='text-xl font-semibold'>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
          <p className='text-slate-700 [text-wrap:balance]'>{product.details}</p>
        </div>
      </div>

      <div className='grid place-content-center'>
        <ProductImagesSlider images={product.images}/>
      </div>

      <div className='mt-5 flex flex-col justify-around gap-10 text-slate-600 md:max-w-[440px] md:gap-4 md:py-3'>
        <div className='hidden flex-col gap-4 md:flex'>
          <p className='text-xl uppercase'>{product.brand?.name}</p>
          <div className=' space-y-3 text-black'>
            <h2 className='text-3xl font-bold'>{product.name}</h2>
            <p className='text-xl font-semibold'>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
            <p className='text-slate-700 [text-wrap:balance]'>{product.details}</p>
          </div>
        </div>
        <SelectSizeWithCounter product={product} />
      </div>
    </div>

  )
}
