import EmptyState from '@/components/empty-state'
import { TotalProducts } from '@/components/total-products'
import { TotalToPay } from '@/components/total-to-pay'
import { type ItemProduct, type Product } from '@/types/product'

const product: Product = {
  productId: '1',
  name: 'Tenis Nike Revolution 6 Next Nature',
  brand: {
    brandId: '123',
    name: 'Jordan',
    banner: {
      imageId: '1234', // Provide a unique imageId value
      main: 'some-main-value',
      preview: 'some-preview-value',
      thumbnail: 'some-thumbnail-value'
    },
    image: {
      imageId: '5678', // Provide a unique imageId value
      main: 'some-main-value',
      preview: 'some-preview-value',
      thumbnail: 'some-thumbnail-value'
    }
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
const itemProduct: ItemProduct = {
  product,
  quantity: 1,
  size: 32
}

const products = Array(15).fill(0).map(_ => ({
  ...itemProduct,
  product: {
    ...product, productId: crypto.randomUUID()
  }
}))

export default function CartPage () {
  if (products.length === 0) {
    return (
      <div className='my-10'>
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
      <div className='col-span-2 mx-3 my-6 grid place-items-center'>
        <TotalProducts products={products}/>
      </div>
      <div className='col-span-1 flex justify-center'>
        <TotalToPay/>
      </div>
    </div>
  )
}
