import Link from 'next/link'

interface BrandBannerProps {
  imageUrl: string
  linkTo: string
  logoUrl: string
}

export function BrandBanner ({ imageUrl, linkTo, logoUrl }: BrandBannerProps) {
  return (
    <Link href={linkTo}>
      <div className="relative w-full sm:w-96">
        <div className="relative w-full">
          <img
            src={imageUrl}
            alt="Brand Banner"
            className="h-auto w-full rounded-xl object-cover"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="absolute right-2 top-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <img
              src={logoUrl}
              alt="Logo de Nike"
              className="h-8 w-8 "
            />
          </div>
        </div>
        <div className="absolute inset-x-2 bottom-4">
          <button className="w-full rounded-full bg-white px-4 py-2 font-semibold text-black">
            Ver todo Adidas
          </button>
        </div>
      </div>
    </Link>
  )
}
