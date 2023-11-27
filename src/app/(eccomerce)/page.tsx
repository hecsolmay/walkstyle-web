import SectionEccomerce from '@/components/section-ecommerce'
import { Carrusel, SliderBrandSection, SliderCategorySection, SliderProductsSection } from '@/components/slider'
import { homeSliderItems } from '@/contants'
import { getBrands } from '@/services/brands'
import { getCategories } from '@/services/categories'
import { getProducts } from '@/services/products'

export const dynamic = 'force-dynamic'

export default async function Home () {
  const [{ categories }, { brands }, { products }] = await Promise.all(
    [
      getCategories({ sort: 'name-asc', limit: 15 }),
      getBrands({ sort: 'name-asc', limit: 15 }),
      getProducts({ limit: 15 })
    ]
  )

  return (
    <div className='mb-14 flex flex-col gap-8'>
      <Carrusel items={homeSliderItems}/>
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
