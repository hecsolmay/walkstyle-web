'use client'

import { ConfigIcon, RestoreIcon, TrashCanIcon } from '@/components/icons'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteUserById, restoreUserById } from '@/services/users'
import { STATUS } from '@/types/enums'
import { type UserDetails } from '@/types/user'
import { WarningAlert } from '@/utils/alerts'
import { toastError, toastSuccess } from '@/utils/toast'
import { useState } from 'react'
import RoleModal from './role-modal'

interface UserActionsProps {
  user: UserDetails
}

export default function UserActions ({ user }: UserActionsProps) {
  const { status } = user
  const { router } = useNextQuery()
  const [show, setShow] = useState(false)

  const handleRestore = async () => {
    try {
      const isConfirmed = await WarningAlert({
        title: `¿Restaurar ${user.fullname}?`,
        text: 'Al restaurarla sera visible para todos los usuarios',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Restaurar'
      })

      if (!isConfirmed) return

      await restoreUserById(user.userId)
      toastSuccess(`${user.fullname} Restaurado`)
      router.refresh()
    } catch (error) {
      console.error('Something Went Wrong', error)
      toastError('No se pudo restaurar el usuario')
    }
  }

  if (status === STATUS.INACTIVE) {
    return (
      <button className='ml-5' title='Restaurar' onClick={handleRestore}>
        <RestoreIcon />
      </button>
    )
  }

  const handleDelete = async () => {
    try {
      const isConfirmed = await WarningAlert({
        title: `¿Eliminar ${user.fullname}?`,
        text: 'Al eliminarla solo sera visible para administradores',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
      })

      if (!isConfirmed) return

      await deleteUserById(user.userId)
      toastSuccess(`${user.fullname} Eliminado`)
      router.refresh()
    } catch (error) {
      console.error('Something Went Wrong', error)
      toastError('No se pudo eliminar el usuario')
    }
  }

  return (
    <>
      <RoleModal showModal={show} closeModal={() => { setShow(false) }} user={user}/>
      <div className='flex items-center gap-6'>
        <button title='Cambiar Rol' onClick={() => { setShow(true) }}>
          <ConfigIcon />
        </button>
        <button onClick={handleDelete}>
          <TrashCanIcon />
        </button>
      </div>
    </>
  )
}
