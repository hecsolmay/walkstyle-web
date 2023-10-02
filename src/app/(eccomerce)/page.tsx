import SectionEccomerce from '@/components/section-ecommerce'
import { Carrusel, SliderCategorySection } from '@/components/slider'
import { type Category } from '@/types/category'
import { Status } from '@/types/enums'

const category: Category = {
  categoryId: '1',
  status: Status.ACTIVE,
  totalProducts: 20,
  name: 'Deportes',
  imgUrl: 'https://www.pngmart.com/files/1/Nike-Shoes-Transparent-Background.png'
}

const categories: Category[] = Array(15).fill(0).map(() => ({
  ...category,
  categoryId: crypto.randomUUID()
}))

export default function Home () {
  return (
    <div className='mb-14 flex flex-col gap-8'>
      <Carrusel />
      <SectionEccomerce title='Categorías'>
        <SliderCategorySection categories={categories}/>
      </SectionEccomerce>
    </div>
  )
}
