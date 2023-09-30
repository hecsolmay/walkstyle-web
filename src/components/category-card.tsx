'Use client'

interface CategoryProps {
  category: {
    name: string
    imageUrl: string
  }
}

export function Category ({ category }: CategoryProps) {
  return (

    <div className=" flex items-center justify-center">
      <div className="flex h-48 w-40 flex-col items-center justify-center gap-3 ">
        <div className=" grid h-32 w-32  place-content-center rounded-full bg-slate-200">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="h-20 object-cover" />
        </div>
        <h2 className="text-xl font-bold">{category.name}</h2>
      </div>
    </div>
  )
}
