'use client'

import { IconButton } from '@/components/icon-button'
import { PlusIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import { cn } from '@/utils/cn'
import { useState } from 'react'

interface ModalButtonProps {
  text: string
  buttonClassName?: string
  bgClassName?: string
  children?: React.ReactNode
}

export default function ModalButton ({ text, bgClassName, buttonClassName, children }: ModalButtonProps) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <IconButton onClick={handleClick} text={text} className={cn('h-9 w-fit bg-blue-500 text-white', buttonClassName)}>
        <PlusIcon />
      </IconButton>

      <Background className={bgClassName} close={handleClose} show={show}>
        {children}
      </Background>
    </>
  )
}
