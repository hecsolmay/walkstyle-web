import { type Category } from '@/types/category'
import { CategoryBanner } from '@/components/category-banner'

interface ListOfCategoriesProps {
  categories: Category[]
}

export default function ListOfCategories ({ categories }: ListOfCategoriesProps) {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 md:gap-6 '>
      {categories.map(category => (
        <CategoryBanner
          key={category.categoryId}
          category={category}
        />
      ))}
    </div>
  )
}
