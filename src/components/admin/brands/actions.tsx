'use client'

import { PencilSquareIcon, RestoreIcon, TrashCanIcon } from '@/components/icons'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteBrand, restoreBrand } from '@/services/brands'
import { type BrandDetails } from '@/types/brand'
import { STATUS } from '@/types/enums'
import { WarningAlert } from '@/utils/alerts'

interface BrandActionsProps {
  brand: BrandDetails
}

export default function BrandsActions ({ brand }: BrandActionsProps) {
  const { router } = useNextQuery()

  const handleDelete = async () => {
    const isConfirmed = await WarningAlert({
      title: `¿Eliminar ${brand.name}?`,
      text: 'Al eliminarla solo sera visible para administradores',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    })
    if (!isConfirmed) return
    await deleteBrand(brand.brandId)
    router.refresh()
  }

  const handleRestore = async () => {
    const isConfirmed = await WarningAlert({
      title: `¿Restaurar ${brand.name}?`,
      text: 'Al restaurarla sera visible para todos los usuarios',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Restaurar'
    })
    if (!isConfirmed) return

    await restoreBrand(brand.brandId)
    router.refresh()
  }

  if (brand.status === STATUS.INACTIVE) {
    return (
      <button className=' ml-5 ' onClick={handleRestore}>
        <RestoreIcon/>
      </button>
    )
  }

  return (
    <div className='flex items-center gap-6'>
      <button>
        <PencilSquareIcon/>
      </button>
      <button onClick={handleDelete}>
        <TrashCanIcon/>
      </button>
    </div>
  )
}
