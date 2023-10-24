'use client'

import { ConfigIcon, RestoreIcon, TrashCanIcon } from '@/components/icons'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteUserById, restoreUserById } from '@/services/users'
import { STATUS } from '@/types/enums'
import { type UserDetails } from '@/types/user'
import { WarningAlert } from '@/utils/alerts'

interface UserActionsProps {
  user: UserDetails
}

export default function UserActions ({ user }: UserActionsProps) {
  const { status } = user
  const { router } = useNextQuery()

  const handleRestore = async () => {
    const isConfirmed = await WarningAlert({
      title: `¿Restaurar ${user.fullname}?`,
      text: 'Al restaurarla sera visible para todos los usuarios',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Restaurar'
    })

    if (!isConfirmed) return

    await restoreUserById(user.userId)
    router.refresh()
  }

  if (status === STATUS.INACTIVE) {
    return (
      <button className='ml-5' title='Restaurar' onClick={handleRestore}>
        <RestoreIcon />
      </button>
    )
  }

  const handleDelete = async () => {
    const isConfirmed = await WarningAlert({
      title: `¿Eliminar ${user.fullname}?`,
      text: 'Al eliminarla solo sera visible para administradores',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    })

    if (!isConfirmed) return

    await deleteUserById(user.userId)
    router.refresh()
  }

  return (
    <div className='flex items-center gap-6'>
      <button>
        <ConfigIcon />
      </button>
      <button onClick={handleDelete}>
        <TrashCanIcon />
      </button>
    </div>
  )
}
