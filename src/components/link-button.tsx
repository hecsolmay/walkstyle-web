import { cn } from '@/utils/cn'
import Link from 'next/link'

interface LinkButtonProps {
  text: string
  className?: string
  href: string
}

export function LinkButton ({
  text,
  className,
  href
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn('flex py-3 w-full items-center justify-center rounded-md bg-black text-white transition-all duration-200 ease-in-out hover:opacity-100 hover:shadow-lg ', className)}
    >
      {text}
    </Link>
  )
}
