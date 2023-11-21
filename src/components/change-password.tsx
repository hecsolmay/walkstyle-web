'use client'

import { PencilSquareIcon } from '@/components/icons'
import { InputPassword } from '@/components/input'
import { TextButton } from '@/components/text-button'
import { updatePasswordSchema } from '@/schemas/update-user'
import { changePassword } from '@/services/users'
import useLoaderStore from '@/store/useLoader'
import { type UpdatePassword } from '@/types/schemas'
import { toastError, toastSuccess } from '@/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ChangePasswordSection () {
  const { data: session } = useSession()
  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setError } = useForm<UpdatePassword>({
    resolver: zodResolver(updatePasswordSchema)
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = (value: boolean) => () => {
    setIsEditing(value)
  }

  const onSubmit = async (data: UpdatePassword) => {
    showLoader()
    try {
      console.log({ data })

      const { newPassword, oldPassword } = data
      const response = await changePassword({
        userId: session?.user.userId ?? '',
        newPassword,
        oldPassword
      })

      console.log(response)
      setIsEditing(false)
      toastSuccess('Contraseña actualizada')
      reset()
    } catch (error) {
      setError('oldPassword', { message: 'La contraseña ingresada no es correcta', type: 'validate' })
      console.error(error)
      toastError('No se pudo actualizar la contraseña')
    } finally {
      hideLoader()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
      <div>
        <h3 className='text-slate-500'>Cambiar Contraseña</h3>
        <hr className="my-1 h-px border-0 bg-slate-400" />
      </div>

      <div className='flex w-full justify-start'>
        <button type='button' onClick={handleEdit(!isEditing)} className='text-yellow-600'><PencilSquareIcon className='h-8 w-8'/></button>
      </div>
      {isEditing && (
        <>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='md:col-span-1'>
              <InputPassword
                label='Contraseña actual'
                placeholder='Ingresa tu contraseña actual'
                register={register('oldPassword')}
                error={errors.oldPassword?.message}
              />
            </div>
            <div className='md:col-span-1'>
              <InputPassword
                label='Nueva contraseña'
                placeholder='Ingresa tu nueva contraseña'
                register={register('newPassword')}
                error={errors.newPassword?.message}
              />
            </div>
            <div className='md:col-span-2'>
              <InputPassword
                label='Confirmar Nueva Contraseña'
                placeholder='Confirma tu nueva contraseña'
                register={register('confirmPassword')}
                error={errors.confirmPassword?.message}
              />
            </div>
          </div>

          <div className='flex justify-end'>
            <div className='flex w-full gap-4 md:w-1/2 md:max-w-[500px]'>
              <TextButton onClick={handleEdit(false)} type='button' text="Cancelar" className='border border-slate-400 bg-white text-slate-600' />
              <TextButton disabled={isSubmitting} type='submit' text="Cambiar contraseña" className='bg-blue-600' />
            </div>
          </div>
        </>
      )}
    </form>
  )
}
