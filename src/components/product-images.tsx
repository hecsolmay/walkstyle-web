'use client'

import { ChevronLeftIcon } from '@/components/icons'
import { type Image } from '@/types/image'
import { cn } from '@/utils/cn'
import { useState } from 'react'

interface ProductImagesSliderProps {
  images: Image[]
}

export default function ProductImagesSlider ({ images }: ProductImagesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentImage = images[currentIndex]

  const changeImage = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index)
    }
  }

  const hoverHandler = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index)
    }
  }

  return (
    <div className='flex w-2/3 flex-col gap-4'>

      <div className='grid h-96 w-80 place-content-center rounded-lg bg-transparent shadow-lg'>
        <img className='h-64 w-64 object-contain' src={currentImage.main} />
      </div>

      <div className='grid w-80 grid-cols-4'>
        {images.map((image, index) => (
          <div key={image.imageId} onMouseOver={() => { hoverHandler(index) }} onClick={() => { changeImage(index) }} className={cn('h-16 w-16 p-1 cursor-pointer', currentImage === image && 'border border-amber-500')}>
            <img className={cn('h-full w-full object-contain')} src={image.main} alt="" />
          </div>

        ))}

      </div>
    </div>
  )
}

interface ProductImagesModalProps {
  images: Image[]
}

export function ProductImagesModal ({ images }: ProductImagesModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const currentImage = images[selectedIndex]

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % images.length
    setSelectedIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length
    setSelectedIndex(prevIndex)
  }

  return (
    <div className='relative grid h-96 place-content-center rounded-lg shadow-lg md:h-full'>
      {images.length > 1 && (
        <>
          <button onClick={prevImage} className='absolute left-0 top-1/2 text-slate-600'>
            <ChevronLeftIcon className='h-12 w-8'/>
          </button>
          <button onClick={nextImage} className='absolute right-0 top-1/2 text-slate-600'>
            <ChevronLeftIcon className='h-12 w-8 rotate-180'/>
          </button>
        </>
      )}

      <div className='h-52 w-48'>
        <img className='object-cover mix-blend-darken' src={currentImage.main} />
      </div>

      {images.length > 1 && (
        <ul className='absolute bottom-3 flex w-full justify-center gap-2'>
          {images.map((image, index) => (
            <li key={image.imageId} className={cn('border border-slate-600 rounded-full p-2 md:p-1 cursor-pointer', index === selectedIndex && 'bg-slate-600')} onClick={() => { setSelectedIndex(index) }} />
          ))}
        </ul>
      )}
    </div>
  )
}
