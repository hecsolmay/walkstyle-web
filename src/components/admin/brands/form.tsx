'use client'

import FormBannerImage from '@/components/admin/form-banner-image'
import { createBrand } from '@/services/brands'
import { type BannerAndImage } from '@/types/forms'
import { toastError, toastSuccess } from '@/utils/toast'

export default function FormCreate () {
  const onSubmit = async (data: BannerAndImage) => {
    try {
      const formData = new FormData()

      formData.append('name', data.name)
      formData.append('image', data.image[0])
      formData.append('banner', data.banner[0])
      await createBrand(formData)
      toastSuccess('Marca Creada')
    } catch (error) {
      console.error('Something Went Wrong', error)
      toastError('No se pudo crear la marca')
      throw error
    }
  }

  return (
    <FormBannerImage onSubmit={onSubmit}/>
  )
}
