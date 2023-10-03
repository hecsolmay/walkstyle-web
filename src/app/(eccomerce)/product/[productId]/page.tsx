import { type Product } from '@/types/product'

const product: Product = {
  productId: '1',
  name: 'Jordan',
  brand: {
    brandId: '123',
    name: 'Tenis Nike Revolution 6 Next Nature'
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
  return (
    <div>
      <h1>Product {product.productId}</h1>
    </div>
  )
}
