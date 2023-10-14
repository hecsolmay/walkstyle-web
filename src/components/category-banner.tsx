import Link from 'next/link'

interface CategoryBannerProps {
  imageUrl: string
  linkTo: string
  category: string
}

export function CategoryBanner ({ imageUrl, linkTo, category }: CategoryBannerProps) {
  return (
    <Link href={linkTo}>
      <div className="w-full sm:w-64">
        <div className="relative">
          <img
            src={imageUrl}
            alt="Category Banner"
            className="h-74 w-full rounded-xl object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <p className="text-xl font-semibold text-black">{category}</p>
        </div>
      </div>
    </Link>
  )
}
