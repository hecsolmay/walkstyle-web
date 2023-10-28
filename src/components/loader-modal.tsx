'use client'

import useLoaderStore from '@/store/useLoader'
import { cn } from '@/utils/cn'

export default function LoaderModal () {
  const showLoader = useLoaderStore((state) => state.show)

  if (!showLoader) {
    return null
  }

  return (
    <div className={cn('bg-black/60 fixed grid place-content-center overflow-hidden left-0 top-0 z-[999] min-h-screen h-screen w-screen ', !showLoader && 'hidden')}>
      <span className="loader"></span>
    </div>
  )
}
