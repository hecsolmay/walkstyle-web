'Use client'

import { type Category } from '@/types/category'
import Link from 'next/link'

interface CategoryProps {
  category: Category
}

export function CategoryCard ({ category }: CategoryProps) {
  return (
    <Link href={`/category/${category.categoryId}/products`} className="flex h-48 flex-col items-center justify-center gap-3 ">
      <div className="grid h-32 w-32 place-content-center  rounded-full bg-slate-200 p-4">
        <img
          src={category.image.preview}
          alt={category.name}
          className="h-full w-full object-cover mix-blend-multiply" />
      </div>
      <h2 className="text-xl font-bold">{category.name}</h2>
    </Link>
  )
}
