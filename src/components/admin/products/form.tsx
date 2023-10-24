'use client'

import Input, { InputFile, InputTextarea } from '@/components/input'
import { TextButton } from '@/components/text-button'
import { productCreateSchema } from '@/schemas/product'
import { type ProductCreate } from '@/types/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import SelectGender from '@/components/admin/select-gender'
import { SelectCategories } from '@/components/select-categories'
import { SelectBrand } from '../select-brand'

export default function FormProductCreate () {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, control } = useForm<ProductCreate>({
    resolver: zodResolver(productCreateSchema)
  })

  const imagesFiles: FileList | undefined = watch('images')
  const brandId = watch('brandId')
  console.log(brandId)

  const imagesArray = imagesFiles?.length > 0 ? Array.from(imagesFiles) : []

  const imagesPreviews = imagesArray.map(image => URL.createObjectURL(image))

  const maxImagesPreviews = imagesPreviews.slice(0, 4)

  const onSubmitForm = async (data: ProductCreate) => {
    console.log(data)
    const formData = new FormData()

    const { images, ...rest } = data

    const imagesArray = Array.from(imagesFiles ?? [])

    imagesArray.forEach(image => {
      formData.append('images', image)
    })

    console.log({ product: rest })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} noValidate className="flex h-fit max-h-[90vh] w-[85vw] flex-col justify-between gap-8 overflow-y-auto rounded-lg bg-white py-10 scrollbar-thin md:max-w-[55vw] lg:max-w-[40vw]">
      <div className='flex flex-col gap-6 border-t border-slate-400 p-6 md:grid md:grid-cols-2 md:gap-4'>

        <div>
          <Input
            register={register('name')}
            className='p-1.5'
            label='Nombre'
            error={errors.name?.message}
          />
        </div>

        <div>
          <Controller
            name="categories"
            control={control}
            render={({ field: { onChange } }) => (
              <SelectCategories onChange={onChange} error={errors.categories?.message}/>
            )}
            rules={{ required: true }}
          />
        </div>

        <div>
          <Controller
            name="brandId"
            control={control}
            render={({ field: { onChange } }) => (
              <SelectBrand onChange={onChange} error={errors.brandId?.message}/>
            )}
            rules={{ required: true }}
          />
        </div>

        <div>
          <Input
            register={register('price', { setValueAs: value => parseFloat(value), required: true })}
            className='p-1.5'
            type='number'
            label='Precio'
            error={errors.price?.message}
          />
        </div>

        <div>
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectGender value={value} onChange={onChange} error={errors.gender?.message}/>
            )}
            rules={{ required: true }}
          />
        </div>

        <div>
          <Input
            register={register('size', { setValueAs: value => parseFloat(value) })}
            className='p-1.5'
            type='number'
            label='Talla (por defecto)'
            error={errors.size?.message}
          />
        </div>

        <div>
          <Input
            register={register('stock', { setValueAs: value => parseInt(value) })}
            className='p-1.5'
            type='number'
            label='Cantidad disponible (talla)'
            error={errors.stock?.message}
          />
        </div>

        <div>
          <Input
            register={register('extraPrice', { setValueAs: value => parseFloat(value) })}
            className='p-1.5'
            type='number'
            label='Precio extra (talla)'
            error={errors.extraPrice?.message}
          />
        </div>

        <div className='col-span-2'>

          <InputTextarea
            rows={5}
            register={register('details')}
            error={errors.details?.message}
            placeholder='Descripción'
            label='Detalles de producto' />

        </div>

        <div className='col-span-2'>

          <InputFile
            register={register('images')}
            label='Imagenes'
            accept='image/*'
            multiple
            error={errors.images?.message}
          />

          {maxImagesPreviews.length > 0 && (
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
              {maxImagesPreviews.map(image => (
                <div key={image} className='mt-3 grid h-full w-full place-content-center'>
                  <div className=''>
                    <img className='h-full w-full object-cover' src={image} alt='' />
                  </div>
                </div>
              ))}

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
