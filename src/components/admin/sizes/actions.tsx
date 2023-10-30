'use client'

import { PencilSquareIcon, RestoreIcon, TrashCanIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteSize, restoreSize } from '@/services/size'
import { STATUS } from '@/types/enums'
import { type SizeDetails } from '@/types/size'
import { WarningAlert } from '@/utils/alerts'
import { toastError, toastSuccess } from '@/utils/toast'
import { SizeUpdateForm } from './form'
import { useState } from 'react'

interface SizeActionsProps {
  size: SizeDetails
}

export default function SizeActions ({ size }: SizeActionsProps) {
  const [show, setShow] = useState(false)
  const { router } = useNextQuery()

  const handleRestore = async () => {
    try {
      const isConfirm = await WarningAlert({
        title: `¿Restaurar La talla numero ${size.size}?`,
        text: 'Al restaurarla sera visible para todos los usuarios',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Restaurar'
      })

      if (!isConfirm) return

      await restoreSize(size.sizeId)
      toastSuccess(`Talla ${size.size} Restaurado`)
      router.refresh()
    } catch (error) {
      console.error('Something Went Wrong', error)
      toastError('No se pudo restaurar la talla')
    }
  }

  if (size.status === STATUS.INACTIVE) {
    return (
      <button className='ml-5' title='Restaurar' onClick={handleRestore}>
        <RestoreIcon />
      </button>
    )
  }

  const handleDelete = async () => {
    try {
      const isConfirm = await WarningAlert({
        title: `¿Eliminar Talla ${size.size}?`,
        text: 'Al eliminarla solo sera visible para administradores',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
      })

      if (!isConfirm) return

      await deleteSize(size.sizeId)
      toastSuccess(`Talla ${size.size} Eliminado`)
      router.refresh()
    } catch (error) {
      console.error('Something Went Wrong', error)
      toastError('No se pudo eliminar la talla')
    }
  }

  const handleUpdate = () => {
    setShow(true)
  }

  return (
    <>
      {show && (
        <Background className='grid place-content-center' close={() => { setShow(false) }} show={show}>
          <SizeUpdateForm closeForm={() => { setShow(false) }} size={size} />
        </Background>
      )}
      <div className='flex items-center gap-6'>
        <button onClick={handleUpdate}>
          <PencilSquareIcon />
        </button>
        <button onClick={handleDelete}>
          <TrashCanIcon />
        </button>
      </div>
    </>
  )
}
