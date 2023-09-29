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
      className={cn('flex font-medium py-3 w-full items-center justify-center rounded-md bg-black  text-white transition-all duration-200 ease-in-out hover:opacity-100 hover:shadow-lg ', className)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
