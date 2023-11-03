import { type Brand } from '@/types/brand'
import { BrandBanner } from '@/components/brand-banner'

interface ListOfBrandsProps {
  brands: Brand[]
}

export default function ListOfBrands ({ brands }: ListOfBrandsProps) {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 md:gap-6 '>
      {brands.map(brand => (
        <BrandBanner key={brand.brandId} brand={brand} />
      ))}
    </div>
  )
}
