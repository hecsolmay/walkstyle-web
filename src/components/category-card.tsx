'Use client'

import { type Category } from '@/types/category'

interface CategoryProps {
  category: Category
}

export function CategoryCard ({ category }: CategoryProps) {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-3 ">
      <div className="grid h-32 w-32 place-content-center  rounded-full bg-slate-200 p-4">
        <img
          src={category.imgUrl}
          alt={category.name}
          className="h-full w-full object-cover mix-blend-multiply" />
      </div>
      <h2 className="text-xl font-bold">{category.name}</h2>
    </div>
  )
}
