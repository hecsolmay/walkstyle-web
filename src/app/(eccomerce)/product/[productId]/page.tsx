import ProductImagesSlider from '@/components/product-images'
import { SelectSizeWithCounter } from '@/components/select-size'
import { type Product } from '@/types/product'

const product: Product = {
  productId: '1',
  name: 'Tenis Nike Revolution 6 Next Nature',
  brand: {
    brandId: '123',
    name: 'Jordan'
  },
  price: 999.00,
  imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8b6c5d4-f53d-4798-a833-7a7c8b063d66/calzado-air-max-intrlk-lite-Sp1WFC.png',
  gender: {
    genderId: '1',
    name: 'Mujer'
  },
  description: 'Tenis Nike Revolution 6 Next Nature',
  sizes: [21, 22, 23, 24, 24.5, 25, 25.5, 26]
}

export default function ProductPage (
  { params }: { params: { productId: string } }
) {
  console.log({ params })
  const exampleImages = [
    product.imageUrl,
    'https://e7.pngegg.com/pngimages/238/23/png-clipart-shoe-sneakers-nike-mercurial-vapor-tennis-women-shoes-orange-outdoor-shoe-thumbnail.png',
    'https://e7.pngegg.com/pngimages/817/134/png-clipart-sports-shoes-nike-free-adidas-adizero-ubersonic-clay-damen-tennisschuh-tennis-court-60-feet-white-orange-thumbnail.png',
    'https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-thumbnail.png'
  ]

  return (
    <div className='mb-10 grid w-full grid-cols-1 p-4 pt-6 md:h-[90vh] md:grid-cols-2 md:p-10 '>
      <div className='mb-6 flex flex-col gap-6 md:hidden'>
        <p className='text-xl uppercase'>{product.brand.name}</p>
        <div className=' text-black'>
          <h2 className='text-3xl font-bold'>{product.name}</h2>
          <p className='mt-3 text-xl font-semibold'>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>
      </div>

      <div className='grid place-content-center'>
        <ProductImagesSlider images={exampleImages}/>
      </div>
      <div className='mt-5 flex flex-col justify-around gap-10 text-slate-600 md:max-w-[440px] md:gap-0 md:py-3'>
        <div className='hidden flex-col gap-4 md:flex'>
          <p className='text-xl uppercase'>{product.brand.name}</p>
          <div className=' text-black'>
            <h2 className='text-3xl font-bold'>{product.name}</h2>
            <p className='mt-3 text-xl font-semibold'>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
          </div>
        </div>
        <SelectSizeWithCounter sizes={product.sizes} />
      </div>
    </div>

  )
}
