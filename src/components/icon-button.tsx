'use client'

import { cn } from '@/utils/cn'

type Direction = 'left' | 'right'

interface IconButtonProps {
  direction?: Direction
  children?: React.ReactNode
  text: string
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function IconButton ({
  text,
  onClick,
  direction = 'left',
  className = '',
  disabled,
  children
}: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn('pb-2 pr-2 inline-flex h-12 w-full cursor-pointer flex-row items-center justify-center gap-x-2 rounded-lg bg-red-500 px-5 py-2.5 text-center font-medium text-white transition-all duration-200 ease-in-out hover:opacity-100 hover:shadow-lg md:gap-3', className, Boolean(disabled) && 'opacity-50 cursor-default')}
      onClick={onClick} >
      {direction === 'left' && children}
      {text}
      {direction === 'right' && children}
    </button>
  )
}
