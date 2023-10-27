'use client'

import Input, { InputFile } from '@/components/input'
import { TextButton } from '@/components/text-button'
import useNextQuery from '@/hooks/useNextQuey'
import { bannerAndImagePartialShema, bannerAndImageShema } from '@/schemas/banner-image'
import { type BannerAndImage, type BannerAndImageUpdate } from '@/types/forms'
import { cn } from '@/utils/cn'
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
    <form onSubmit={handleSubmit(onSubmitForm)} noValidate className="flex h-fit max-h-[90vh] w-[85vw] flex-col justify-between gap-4 rounded-lg bg-white pb-6 pt-10 md:max-w-[55vw] lg:max-w-[40vw]">
      <div className='flex flex-1 flex-col gap-6 overflow-y-auto  border-t border-slate-400 p-6 scrollbar-thin md:gap-4'>
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

      <div className='flex  justify-end pr-6'>
        <TextButton disabled={isSubmitting} className='w-44 bg-blue-500 py-2' text='Agregar' />
      </div>

    </form>
  )
}

interface FormBannerImageEditProps {
  onSubmit: (data: BannerAndImageUpdate) => Promise<void>
  defaultValues?: {
    name: string
    image: string
    banner: string
  }
}

export function FormBannerImageEdit ({ onSubmit, defaultValues }: FormBannerImageEditProps) {
  const { register, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm<BannerAndImageUpdate>({
    resolver: zodResolver(bannerAndImagePartialShema),
    defaultValues: {
      name: defaultValues?.name ?? ''
    }
  })

  const { router } = useNextQuery()

  const imageWatch = watch('image')
  const bannerWatch = watch('banner')

  const imageFile = imageWatch?.length > 0 ? imageWatch[0] : undefined
  const bannerFile = bannerWatch?.length > 0 ? bannerWatch[0] : undefined

  const imagePreview = imageFile !== undefined ? URL.createObjectURL(imageFile) : defaultValues?.image

  const bannerPreview = bannerFile !== undefined ? URL.createObjectURL(bannerFile) : defaultValues?.banner

  const onSubmitForm = async (data: BannerAndImageUpdate) => {
    try {
      await onSubmit(data)
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  const handleImageClick = async () => {
    const imageInput = document.getElementsByName('image')[0]

    if (!(imageInput instanceof HTMLInputElement)) return

    imageInput.click()
  }

  const handleBannerClick = () => {
    const bannerInput = document.getElementsByName('banner')[0]

    if (!(bannerInput instanceof HTMLInputElement)) return

    bannerInput.click()
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} noValidate className="flex h-fit max-h-[90vh] w-[85vw] flex-col justify-between gap-4 rounded-lg bg-white pb-4 pt-10 md:max-w-[55vw] lg:max-w-[40vw]">
      <div className='flex flex-1 flex-col gap-6  overflow-y-auto border-t border-slate-400 p-6 scrollbar-thin md:gap-4'>
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
            className='hidden'
          />

          {imagePreview !== undefined && (
            <div onClick={handleImageClick} className='mt-3 grid h-full w-full cursor-pointer place-content-center'>
              <div className='h-48 w-48'>
                <img className='h-full w-full object-cover' src={imagePreview} alt={`Imagen de ${defaultValues?.name}`} />
              </div>
            </div>
          )}
          <p className={cn('text-center mt-2 text-sm text-red-500', errors.image === undefined ? 'hidden' : '')}>{errors.image?.message}</p>

        </div>

        <div>

          <InputFile
            register={register('banner', { required: true })}
            label='Banner'
            accept='image/*'
            className='hidden'
            error={errors.banner?.message}
          />

          {bannerPreview !== undefined && (
            <div onClick={handleBannerClick} className='mt-3 grid h-full w-full cursor-pointer place-content-center'>
              <div className='h-48 w-48'>
                <img className='h-full w-full object-cover' src={bannerPreview} alt={`Banner de ${defaultValues?.name}`} />
              </div>
            </div>
          )}
          <p className={cn('text-center mt-2 text-sm text-red-500', errors.banner === undefined ? 'hidden' : '')}>{errors.banner?.message}</p>

        </div>

      </div>

      <div className='flex justify-end pr-6'>
        <TextButton disabled={isSubmitting} className='w-44 bg-yellow-500 py-2' text='Editar' />
      </div>

    </form>
  )
}
