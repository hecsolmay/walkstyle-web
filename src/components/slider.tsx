'use client'

import { LinkButton } from '@/components/link-button'
import { cn } from '@/utils/cn'
import SwiperCore from 'swiper/core'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
SwiperCore.use([Autoplay, Pagination, Navigation])

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
      className='mySwiper my-5 h-[50vh] w-full border-y border-slate-400 md:h-[70vh]'
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
      <SwiperSlide className='px-2md:w-[calc(100%_-_4rem)] w-full  md:px-6'>
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
        'flex h-full w-full',
        direction === 'right' ? 'flex-row-reverse' : ''
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
      <img className='h-full w-1/2 flex-[1] object-cover' src={src} alt={`${title} image`} />
    </div>
  )
}
