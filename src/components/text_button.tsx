'use client'

import { cn } from '@/utils/cn'

interface TextButtomProps {
  text: string
  className?: string
  onClick?: () => void
}

export function TextButton ({
  text,
  className,
  onClick
}: TextButtomProps) {
  return (
    <button
      className={cn('flex py-3 w-full items-center justify-center rounded-md bg-black  text-white', className)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
