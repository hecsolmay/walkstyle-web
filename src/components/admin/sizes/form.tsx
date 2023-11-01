'use client'

import Input from '@/components/input'
import { TextButton } from '@/components/text-button'
import useNextQuery from '@/hooks/useNextQuey'
import { sizeSchema } from '@/schemas/size'
import { createSize, updateSize } from '@/services/size'
import useLoaderStore from '@/store/useLoader'
import { type SizeDTO } from '@/types/forms'
import { type SizeDetails } from '@/types/size'
import { toastError, toastSuccess } from '@/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function SizeFormCreate () {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SizeDTO>({
    resolver: zodResolver(sizeSchema),
    defaultValues: {
      extraPrice: 0,
      stock: 0
    }
  })

  const params = useParams()
  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)

  const { router } = useNextQuery()

  const onSubmitForm = async (data: SizeDTO) => {
    showLoader()
    try {
      const { productId: paramsId } = params
      const productId = paramsId as string
      await createSize({ ...data, productId })
      toastSuccess('Talla Creada')
      reset()
      router.refresh()
    } catch (error) {
      console.error(error)
      toastError('No se pudo crear la talla')
    } finally {
      hideLoader()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} noValidate className="flex h-fit max-h-[90vh] w-[85vw] flex-col justify-between gap-4 rounded-lg bg-white pb-6 pt-10 md:max-w-[55vw] lg:max-w-[40vw]">
      <div className='flex flex-1 flex-col gap-6 overflow-y-auto  border-t border-slate-400 p-6 scrollbar-thin md:gap-4'>
        <div>
          <Input
            register={register('size', { setValueAs: value => parseFloat(value) })}
            className='p-1.5'
            label='Talla'
            type='number'
            required
            min={0}
            error={errors.size?.message}
          />
        </div>

        <div>
          <Input
            register={register('extraPrice', { setValueAs: value => parseFloat(value) })}
            className='p-1.5'
            label='Precio Extra (opcional)'
            type='number'
            min={0}
            error={errors.extraPrice?.message}
          />
        </div>

        <div>
          <Input
            register={register('stock', { setValueAs: value => parseFloat(value) })}
            className='p-1.5'
            type='number'
            min={0}
            label='Cantidad en inventario (opcional)'
            error={errors.stock?.message}
          />
        </div>

      </div>

      <div className='flex  justify-end pr-6'>
        <TextButton disabled={isSubmitting} className='w-44 bg-blue-500 py-2' text='Crear Talla' />
      </div>

    </form>
  )
}

interface SizeUpdateFormProps {
  size: SizeDetails
  closeForm?: () => void
}

export function SizeUpdateForm ({ size, closeForm }: SizeUpdateFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SizeDTO>({
    resolver: zodResolver(sizeSchema),
    defaultValues: {
      size: size.size,
      extraPrice: size.extraPrice,
      stock: size.stock
    }
  })

  const params = useParams()
  const productId = params.productId as string ?? ''

  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)

  const { router } = useNextQuery()

  const onSubmitForm = async (data: SizeDTO) => {
    showLoader()
    try {
      const newSize = { ...data, productId }
      await updateSize({ size: newSize, sizeId: size.sizeId })
      toastSuccess('Talla Actualizada')
      if (closeForm !== undefined) {
        closeForm()
      }
      reset()
      router.refresh()
    } catch (error) {
      console.error(error)
      toastError('No se pudo actualizar la talla')
    } finally {
      hideLoader()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} noValidate className="flex h-fit max-h-[90vh] w-[85vw] flex-col justify-between gap-4 rounded-lg bg-white pb-6 pt-10 md:max-w-[55vw] lg:max-w-[40vw]">
      <div className='flex flex-1 flex-col gap-6 overflow-y-auto  border-t border-slate-400 p-6 scrollbar-thin md:gap-4'>
        <div>
          <Input
            register={register('size', { setValueAs: value => parseFloat(value) })}
            className='p-1.5'
            label='Talla'
            type='number'
            required
            min={0}
            error={errors.size?.message}
          />
        </div>

        <div>
          <Input
            register={register('extraPrice', { setValueAs: value => parseFloat(value) })}
            className='p-1.5'
            label='Precio Extra (opcional)'
            type='number'
            min={0}
            error={errors.extraPrice?.message}
          />
        </div>

        <div>
          <Input
            register={register('stock', { setValueAs: value => parseInt(value) })}
            className='p-1.5'
            type='number'
            min={0}
            label='Cantidad en inventario (opcional)'
            error={errors.stock?.message}
          />
        </div>

      </div>

      <div className='flex  justify-end pr-6'>
        <TextButton disabled={isSubmitting} className='w-44 bg-yellow-500 py-2' text='Actualizar Talla' />
      </div>

    </form>
  )
}
