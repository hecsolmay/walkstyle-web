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

  if (!show) {
    return null
  }

  return (
    <div onClick={handleClick} className={cn('bg-black/40 absolute overflow-hidden block left-0 top-0 z-40 min-h-screen h-screen w-screen ', !show && 'hidden', className)}>
      {children}
    </div>
  )
}
