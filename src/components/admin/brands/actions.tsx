'use client'

import { PencilSquareIcon, RestoreIcon, TrashCanIcon } from '@/components/icons'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteBrand, restoreBrand, updateBrand } from '@/services/brands'
import { type BrandDetails } from '@/types/brand'
import { STATUS } from '@/types/enums'
import { WarningAlert } from '@/utils/alerts'
import { useState } from 'react'
import { FormBannerImageEdit } from '../form-banner-image'
import { Background } from '@/components/modal-background'
import { type BannerAndImageUpdate } from '@/types/forms'

interface BrandActionsProps {
  brand: BrandDetails
}

export default function BrandsActions ({ brand }: BrandActionsProps) {
  const { router } = useNextQuery()
  const [show, setShow] = useState(false)

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

  const defaultValues = {
    name: brand.name,
    image: brand.image.preview,
    banner: brand.banner.preview
  }

  const handleSubmit = async (data: BannerAndImageUpdate) => {
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
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {show && (
        <Background className='grid place-content-center' close={() => { setShow(false) }} show={show}>
          <FormBannerImageEdit defaultValues={defaultValues} onSubmit={handleSubmit}/>
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
