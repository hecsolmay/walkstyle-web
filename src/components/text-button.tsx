'use client'

import { cn } from '@/utils/cn'

interface TextButtomProps {
  text: string
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function TextButton ({
  text,
  className,
  onClick,
  disabled
}: TextButtomProps) {
  return (
    <button
      disabled={disabled}
      className={cn('flex font-medium py-3 w-full items-center justify-center rounded-md bg-black  text-white transition-all duration-200 ease-in-out hover:opacity-100 hover:shadow-lg', Boolean(disabled) && 'opacity-80 hover:opacity-80 hover:shadow-none', className)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
