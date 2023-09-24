import { cn } from '@/utils/cn'

interface BackgroundProps {
  show?: boolean
  className?: string
  children?: React.ReactNode
  close: () => void
}

export function Background ({ close, show = false, className, children }: BackgroundProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si se hace clic en el fondo oscurecido, cierra el modal
    if (e.target === e.currentTarget) {
      close()
    }
  }
  return (
    <div onClick={handleClick} className={cn('bg-black/40 fixed top-0 left-0 inset-0 z-20 min-h-screen h-full w-screen ', !show && 'hidden', className)}>
      {children}
    </div>
  )
}
