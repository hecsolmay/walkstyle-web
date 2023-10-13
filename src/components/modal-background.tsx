import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { cn } from '@/utils/cn'

interface BackgroundProps {
  show?: boolean
  className?: string
  children?: React.ReactNode
  close: () => void
}

export function Background ({ close, show = false, className, children }: BackgroundProps) {
  const prevOverflow = 'auto'

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si se hace clic en el fondo oscurecido, cierra el modal
    if (e.target === e.currentTarget) {
      document.body.style.overflow = prevOverflow
      close()
    }
  }

  if (!show) {
    return null
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])
  const modalContent = (
    <div onClick={handleClick} className={cn('bg-black/40 fixed overflow-hidden block left-0 top-0 z-50 min-h-screen h-screen w-screen ', !show && 'hidden', className)}>
      {children}
    </div>
  )

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root') as HTMLElement)
}
