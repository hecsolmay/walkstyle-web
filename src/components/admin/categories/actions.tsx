'use client'

import { PencilSquareIcon, RestoreIcon, TrashCanIcon } from '@/components/icons'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteCategory, restoreCategory } from '@/services/categories'
import { type CategoryDetails } from '@/types/category'
import { STATUS } from '@/types/enums'
import { WarningAlert } from '@/utils/alerts'

interface CategoryActionsProps {
  category: CategoryDetails
}

export default function CategoryActions ({ category }: CategoryActionsProps) {
  const { router } = useNextQuery()

  const handleDelete = async () => {
    const isConfirmed = await WarningAlert({
      title: `¿Eliminar ${category.name}?`,
      text: 'Al eliminarla solo sera visible para administradores',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    })
    if (!isConfirmed) return

    await deleteCategory(category.categoryId)
    router.refresh()
  }

  const handleRestore = async () => {
    const isConfirmed = await WarningAlert({
      title: `¿Restaurar ${category.name}?`,
      text: 'Al restaurarla sera visible para todos los usuarios',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Restaurar'
    })
    if (!isConfirmed) return

    await restoreCategory(category.categoryId)
    router.refresh()
  }

  if (category.status === STATUS.INACTIVE) {
    return (
      <button className='ml-5' onClick={handleRestore}>
        <RestoreIcon />
      </button>
    )
  }

  return (
    <div className='flex items-center gap-6'>
      <button>
        <PencilSquareIcon />
      </button>
      <button onClick={handleDelete}>
        <TrashCanIcon />
      </button>
    </div>
  )
}
