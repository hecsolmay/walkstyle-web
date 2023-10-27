'use client'

import { FormBannerImageEdit } from '@/components/admin/form-banner-image'
import { PencilSquareIcon, RestoreIcon, TrashCanIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteBrand, restoreBrand, updateBrand } from '@/services/brands'
import { type BrandDetails } from '@/types/brand'
import { STATUS } from '@/types/enums'
import { type BannerAndImageUpdate } from '@/types/forms'
import { WarningAlert } from '@/utils/alerts'
import { toastError, toastSuccess } from '@/utils/toast'
import { useState } from 'react'

interface BrandActionsProps {
  brand: BrandDetails
}

export default function BrandsActions ({ brand }: BrandActionsProps) {
  const { router } = useNextQuery()
  const [show, setShow] = useState(false)

  const handleDelete = async () => {
    try {
      const isConfirmed = await WarningAlert({
        title: `¿Eliminar ${brand.name}?`,
        text: 'Al eliminarla solo sera visible para administradores',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
      })
      if (!isConfirmed) return

      await deleteBrand(brand.brandId)
      toastSuccess(`${brand.name} Eliminado`)
      router.refresh()
    } catch (error) {
      console.error('Something Went Wrong', error)
      toastError('No se pudo eliminar el producto')
    }
  }

  const handleRestore = async () => {
    try {
      const isConfirmed = await WarningAlert({
        title: `¿Restaurar ${brand.name}?`,
        text: 'Al restaurarla sera visible para todos los usuarios',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Restaurar'
      })
      if (!isConfirmed) return

      await restoreBrand(brand.brandId)
      toastSuccess(`${brand.name} Restaurado`)
      router.refresh()
    } catch (error) {
      console.error('Something Went Wrong', error)
      toastError('No se pudo restaurar el producto')
    }
  }

  if (brand.status === STATUS.INACTIVE) {
    return (
      <button className=' ml-5 ' onClick={handleRestore}>
        <RestoreIcon/>
      </button>
    )
  }

  const defaultValues = {
    name: brand.name,
    image: brand.image.preview,
    banner: brand.banner.preview
  }

  const handleSubmitUpdate = async (data: BannerAndImageUpdate) => {
    try {
      const { banner, image, name = '' } = data

      const formData = new FormData()

      formData.append('name', name)

      if (banner.length > 0) {
        formData.append('banner', banner[0])
      }

      if (image.length > 0) {
        formData.append('image', image[0])
      }

      await updateBrand(brand.brandId, formData)
      setShow(false)
      toastSuccess(`${brand.name} Actualizado`)
    } catch (error) {
      console.error(error)
      toastError('No se pudo actualizar el producto')
      throw error
    }
  }

  return (
    <>
      {show && (
        <Background className='grid place-content-center' close={() => { setShow(false) }} show={show}>
          <FormBannerImageEdit defaultValues={defaultValues} onSubmit={handleSubmitUpdate}/>
        </Background>
      )}
      <div className='flex items-center gap-6'>
        <button onClick={() => { setShow(true) }}>
          <PencilSquareIcon/>
        </button>
        <button onClick={handleDelete}>
          <TrashCanIcon/>
        </button>
      </div>
    </>
  )
}
