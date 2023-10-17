import SectionEccomerce from '@/components/section-ecommerce'
import { Carrusel, SliderBrandSection, SliderCategorySection, SliderProductsSection } from '@/components/slider'
import { type BrandInfo } from '@/types/brand'
import { type Category } from '@/types/category'
import { STATUS } from '@/types/enums'
import { type Product } from '@/types/product'

const category: Category = {
  categoryId: '1',
  name: 'Deportes',
  banner: {
    imageId: '1',
    main: 'https://www.pngmart.com/files/1/Nike-Shoes-Transparent-Background.png',
    preview: 'https://www.pngmart.com/files/1/Nike-Shoes-Transparent-Background.png',
    thumbnail: 'https://www.pngmart.com/files/1/Nike-Shoes-Transparent-Background.png'
  },
  image: {
    imageId: '1',
    main: 'https://www.pngmart.com/files/1/Nike-Shoes-Transparent-Background.png',
    preview: 'https://www.pngmart.com/files/1/Nike-Shoes-Transparent-Background.png',
    thumbnail: 'https://www.pngmart.com/files/1/Nike-Shoes-Transparent-Background.png'
  }
}

const brand: BrandInfo = {
  brandId: '1',
  name: 'Nike',
  status: STATUS.ACTIVE,
  totalProducts: 20,
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.png'
}

const categories: Category[] = Array(15).fill(0).map(() => ({
  ...category,
  categoryId: crypto.randomUUID()
}))

const brands: BrandInfo[] = Array(15).fill(0).map(() => ({
  ...brand, brandId: crypto.randomUUID()
}))

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

const products: Product[] = Array(15).fill(0).map(() => ({
  ...product, productId: crypto.randomUUID()
}))

export default function Home () {
  return (
    <div className='mb-14 flex flex-col gap-8'>
      <Carrusel />
      <SectionEccomerce title='Categorías'>
        <SliderCategorySection categories={categories}/>
      </SectionEccomerce>
      <SectionEccomerce title='Busca tus marcas favoritas'>
        <SliderBrandSection brands={brands}/>
      </SectionEccomerce>
      <SectionEccomerce title='Lo mas Nuevo'>
        <SliderProductsSection products={products}/>
      </SectionEccomerce>
    </div>
  )
}
