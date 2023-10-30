'use client'

import { IconButton } from '@/components/icon-button'
import { PlusIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import { useState } from 'react'
import SizeFormCreate from '@/components/admin/sizes/form'

export default function SizeCreateButton () {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className='flex justify-start'>
      <IconButton onClick={handleClick} text='Agregar Talla' className='h-9 w-fit bg-blue-500 text-white'>
        <PlusIcon />
      </IconButton>

      <Background className='grid place-content-center' close={handleClose} show={show}>
        <SizeFormCreate />
      </Background>
    </div>
  )
}
