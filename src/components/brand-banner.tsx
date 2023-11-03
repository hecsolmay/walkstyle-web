import { type Brand } from '@/types/brand'
import Link from 'next/link'

interface BrandBannerProps {
  brand: Brand
}

export function BrandBanner ({ brand }: BrandBannerProps) {
  const { banner, brandId, image, name } = brand

  return (
    <Link href={`/brands/${brandId}/products`}>
      <div className="group w-full md:w-64">
        <div className="relative overflow-hidden rounded-xl shadow-md">
          <div className='absolute right-2 top-2 h-10 w-10'>
            <img src={image.thumbnail} className='h-full w-full' alt={`Logo de ${name}`} />
          </div>
          <img
            src={banner.main}
            alt={`Imagen banner de la categoria ${name}`}
            className="h-74 w-full rounded-xl bg-black/5 object-cover transition-transform duration-200 group-hover:scale-110  group-hover:opacity-90"
          />
          <div className="absolute inset-x-0 bottom-0 z-10 bg-black/40 p-4 text-center">
            <p className="text-2xl font-bold text-white">{name}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
