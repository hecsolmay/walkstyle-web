'use client'

import { cn } from '@/utils/cn'

type Direction = 'left' | 'right'

interface IconButtonProps {
  direction?: Direction
  children?: React.ReactNode
  text: string
  className?: string
  onclick?: () => void
}

export function IconButton ({
  text,
  onclick,
  direction = 'left',
  className = '',
  children

}: IconButtonProps) {
  return (
    <button
      className={cn('pb-2 pr-2 inline-flex h-12 w-full cursor-pointer flex-row items-center justify-center gap-x-2 rounded-lg bg-red-500 px-5 py-2.5 text-center font-medium text-white transition-all duration-200 ease-in-out hover:opacity-100 hover:shadow-lg md:gap-3', className)}
      onClick={onclick} >
      {direction === 'left' && children}
      {text}
      {direction === 'right' && children}
    </button>
  )
}
