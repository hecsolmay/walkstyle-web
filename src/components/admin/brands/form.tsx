'use client'

import FormBannerImage from '@/components/admin/form-banner-image'
import { createBrand } from '@/services/brands'
import { type BannerAndImage } from '@/types/forms'

export default function FormCreate () {
  const onSubmit = async (data: BannerAndImage) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('image', data.image[0])
    formData.append('banner', data.banner[0])
    const result = await createBrand(formData)

    console.log({ result })
  }

  return (
    <FormBannerImage onSubmit={onSubmit}/>
  )
}
