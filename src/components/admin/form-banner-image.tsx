'use client'

import Input, { InputFile } from '@/components/input'
import { TextButton } from '@/components/text-button'
import useNextQuery from '@/hooks/useNextQuey'
import { bannerAndImageShema } from '@/schemas/category'
import { type BannerAndImage } from '@/types/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface FormBannerImageProps {
  onSubmit: (data: BannerAndImage) => Promise<void>
}

export default function FormBannerImage ({ onSubmit }: FormBannerImageProps) {
  const { register, watch, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<BannerAndImage>({
    resolver: zodResolver(bannerAndImageShema)
  })

  const { router } = useNextQuery()

  const imageWatch = watch('image')
  const bannerWatch = watch('banner')

  const imageFile = imageWatch?.length > 0 ? imageWatch[0] : undefined
  const bannerFile = bannerWatch?.length > 0 ? bannerWatch[0] : undefined

  const imagePreview = imageFile !== undefined ? URL.createObjectURL(imageFile) : undefined

  const bannerPreview = bannerFile !== undefined ? URL.createObjectURL(bannerFile) : undefined

  const onSubmitForm = async (data: BannerAndImage) => {
    try {
      await onSubmit(data)
      reset()
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} noValidate className="flex h-fit max-h-[90vh] w-[85vw] flex-col justify-between gap-8 overflow-y-auto rounded-lg bg-white py-10 scrollbar-thin md:max-w-[55vw] lg:max-w-[40vw]">
      <div className='flex flex-col gap-6 border-t border-slate-400 p-6 md:gap-4'>
        <div>
          <Input
            register={register('name')}
            className='p-1.5'
            label='Nombre'
            error={errors.name?.message}
          />
        </div>

        <div>

          <InputFile
            register={register('image', { required: true })}
            label='Logo'
            accept='image/*'
            error={errors.image?.message}
          />

          {imageFile !== undefined && (
            <div className='mt-3 grid h-full w-full place-content-center'>
              <div className='h-48 w-48'>
                <img className='h-full w-full object-cover' src={imagePreview} alt={imageFile.name} />
              </div>
            </div>
          )}

        </div>

        <div>

          <InputFile
            register={register('banner', { required: true })}
            label='Banner'
            accept='image/*'
            error={errors.banner?.message}
          />

          {bannerFile !== undefined && (
            <div className='mt-3 grid h-full w-full place-content-center'>
              <div className='h-48 w-48'>
                <img className='h-full w-full object-cover' src={bannerPreview} alt={bannerFile.name} />
              </div>
            </div>
          )}

        </div>

      </div>

      <div className='flex flex-1 justify-end pr-6'>
        <TextButton disabled={isSubmitting} className='w-44 bg-blue-500 py-2' text='Agregar' />
      </div>

    </form>
  )
}
