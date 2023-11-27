'use client'

import { BrandCard } from '@/components/brand-card'
import { CategoryCard } from '@/components/category-card'
import { LinkButton } from '@/components/link-button'
import ProductLinkCard from '@/components/product-link-card'
import { type Brand } from '@/types/brand'
import { type Category } from '@/types/category'
import { type Product } from '@/types/product'
import { cn } from '@/utils/cn'
import SwiperCore from 'swiper/core'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay, Pagination, Navigation, FreeMode])

export function Carrusel () {
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      className='mySwiper my-5 h-[75vh] w-full border-y border-slate-400 md:h-[70vh]'
    >
      <SwiperSlide className='px-2md:w-[calc(100%_-_4rem)] w-full  md:px-6'>
        <SliderContent
          title='Kids'
          subtitle='Hasta 50% de descuento'
          description='En productos para los mas pequenos'
          href='/search'
          linkText='Explorar mas'
          direction='left'
          src='https://tafmx.vtexassets.com/assets/vtex.file-manager-graphql/images/e4e28d41-a7f4-41ef-b02a-848495982c08___0585f82118a943b317747e509853c4ff.jpg'
        />
      </SwiperSlide>
      <SwiperSlide className='w-full px-2 md:w-[calc(100%_-_4rem)]  md:px-6'>
        <SliderContent
          title='Deportes'
          subtitle='Hasta 50% de descuento'
          description='En productos para deportistas'
          href='/search'
          linkText='Ver Productos'
          direction='right'
          src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        />
      </SwiperSlide>
    </Swiper>
  )
}

interface SliderContentProps {
  title: string
  subtitle?: string
  description?: string
  href?: string
  linkText?: string
  direction: 'left' | 'right'
  src: string
}

export function SliderContent ({
  direction,
  title,
  description,
  href = '/search',
  linkText = 'Ver Productos',
  subtitle,
  src
}: SliderContentProps) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse md:flex-row gap-2 h-full w-full',
        direction === 'right' ? 'md:flex-row-reverse' : ''
      )}
    >
      <div className='grid flex-[1] place-content-center'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-3xl font-bold'>{title}</h2>
          {subtitle !== undefined && (
            <p className='text-xl font-bold'>{subtitle}</p>
          )}
          {description !== undefined && <p>{description}</p>}
          <LinkButton className='mt-2' text={linkText} href={href} />
        </div>
      </div>
      <img
        className='w-full flex-[1] object-cover md:h-full md:w-1/2'
        src={src}
        alt={`${title} image`}
      />
    </div>
  )
}

interface BreakpointsConfig {
  slidesPerView: number
  spaceBetween: number
}

type Breakpoints = Record<number, BreakpointsConfig>

const defaultBreackPoints: Breakpoints = {
  350: {
    slidesPerView: 2,
    spaceBetween: 25
  },
  580: {
    slidesPerView: 3,
    spaceBetween: 25
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 25
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 25
  }
}

export function CustomSwipper ({
  breakpoints = defaultBreackPoints,
  className,
  children
}: {
  breakpoints?: Breakpoints
  className?: string
  children?: React.ReactNode
}) {
  return (
    <Swiper
      freeMode={true}
      spaceBetween={25}
      slidesPerView={1}
      breakpoints={breakpoints}
      modules={[FreeMode]}
      style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
      className={cn('mySwiper my-5 w-full cursor-grab px-6', className)}
    >
      {children}
    </Swiper>
  )
}

interface SliderCategorySectionProps {
  categories: Category[]
}

export function SliderCategorySection ({
  categories
}: SliderCategorySectionProps) {
  return (
    <CustomSwipper>
      {categories.map(category => (
        <SwiperSlide key={category.categoryId}>
          <CategoryCard category={category} />
        </SwiperSlide>
      ))}
    </CustomSwipper>
  )
}

interface SliderBrandSectionProps {
  brands: Brand[]
}

export function SliderBrandSection ({ brands }: SliderBrandSectionProps) {
  return (
    <CustomSwipper
      breakpoints={{
        ...defaultBreackPoints,
        350: {
          slidesPerView: 1,
          spaceBetween: 25
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 25
        }
      }}
    >
      {brands.map((brand, index) => (
        <SwiperSlide key={brand.brandId}>
          <BrandCard brand={brand} colorVariant={index % 5} />
        </SwiperSlide>
      ))}
    </CustomSwipper>
  )
}

export function SliderProductsSection ({ products }: { products: Product[] }) {
  return (
    <CustomSwipper
      breakpoints={{
        350: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25
        }
      }}
      className='cursor-grab'
    >
      {products.map(product => (
        <SwiperSlide
          className='grid place-content-center sm:block'
          key={product.productId}
        >
          <ProductLinkCard product={product} />
        </SwiperSlide>
      ))}
    </CustomSwipper>
  )
}
