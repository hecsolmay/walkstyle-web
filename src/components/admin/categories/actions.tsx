'use client'

import { PencilSquareIcon, RestoreIcon, TrashCanIcon } from '@/components/icons'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteCategory, restoreCategory, updateCategory } from '@/services/categories'
import { type CategoryDetails } from '@/types/category'
import { STATUS } from '@/types/enums'
import { WarningAlert } from '@/utils/alerts'
import { FormBannerImageEdit } from '../form-banner-image'
import { Background } from '@/components/modal-background'
import { useState } from 'react'
import { type BannerAndImageUpdate } from '@/types/forms'

interface CategoryActionsProps {
  category: CategoryDetails
}

export default function CategoryActions ({ category }: CategoryActionsProps) {
  const { router } = useNextQuery()
  const [show, setShow] = useState(false)

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

  const defaultValues = {
    name: category.name,
    image: category.image.preview,
    banner: category.banner.preview
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

      await updateCategory(category.categoryId, formData)
      setShow(false)
      // router.refresh()
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
          <PencilSquareIcon />
        </button>
        <button onClick={handleDelete}>
          <TrashCanIcon />
        </button>
      </div>
    </>
  )
}
