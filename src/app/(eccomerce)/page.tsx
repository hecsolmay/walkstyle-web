import SectionEccomerce from '@/components/section-ecommerce'
import { Carrusel, SliderBrandSection, SliderCategorySection, SliderProductsSection } from '@/components/slider'
import { type Brand } from '@/types/brand'
import { type Category } from '@/types/category'
import { type Product } from '@/types/product'

const categories: Category[] = []

const brands: Brand[] = []

const products: Product[] = []

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
