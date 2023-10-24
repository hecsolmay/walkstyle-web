'use client'

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

      <div className='grid h-96 w-80 place-content-center rounded-lg bg-slate-200 shadow-lg'>
        <img className='h-64 w-64 object-contain mix-blend-darken' src={currentImage.main} />
      </div>

      <div className='grid w-80 grid-cols-4'>
        {images.map((image, index) => (
          <div key={image.imageId} onMouseOver={() => { hoverHandler(index) }} onClick={() => { changeImage(index) }} className={cn('h-16 w-16 cursor-pointer bg-slate-200', currentImage === image && 'border-2 border-amber-400')}>
            <img className='h-16 w-16 object-contain mix-blend-darken' src={image.main} alt="" />
          </div>

        ))}

      </div>
    </div>
  )
}
