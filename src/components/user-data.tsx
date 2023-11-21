'use client'

import { PencilSquareIcon } from '@/components/icons'
import Input from '@/components/input'
import { TextButton } from '@/components/text-button'
import { updateUserDataSchema } from '@/schemas/update-user'
import { updateUserById } from '@/services/users'
import useLoaderStore from '@/store/useLoader'
import { type UserUpdateData } from '@/types/schemas'
import { filterUndefinedValues } from '@/utils/get'
import { toastError, toastSuccess } from '@/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function UserData () {
  const { data: session, update } = useSession()
  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<UserUpdateData>({
    resolver: zodResolver(updateUserDataSchema),
    defaultValues: {
      name: session?.user?.name,
      email: session?.user?.email,
      lastname: session?.user?.lastname ?? ''
    }
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = (value: boolean) => () => {
    setIsEditing(value)
  }

  const handleCancel = () => {
    reset({
      name: session?.user?.name,
      email: session?.user?.email,
      lastname: session?.user?.lastname
    })
    setIsEditing(false)
  }

  const onSubmit = async (data: UserUpdateData) => {
    showLoader()
    try {
      const filteredData = filterUndefinedValues(data)

      await updateUserById({
        userId: session?.user?.userId ?? '',
        newUser: { ...filteredData }
      })

      await update({ ...session?.user, ...filteredData })
      toastSuccess('Datos Personales Actualizadas')
      setIsEditing(false)
    } catch (error) {
      console.error(error)
      toastError('No se pudieron actualizar las datos personales')
    } finally {
      hideLoader()
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <div>
        <h3 className='text-slate-500'>Datos Personales</h3>
        <hr className="my-1 h-px border-0 bg-slate-400" />
      </div>

      <div className='flex w-full justify-start'>
        <button onClick={handleEdit(!isEditing)} title='Editar' type='button' className='text-yellow-600'>
          <PencilSquareIcon className='h-8 w-8'/>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4 md:grid-cols-2'>

        <div className='md:col-span-1'>
          <Input
            disabled={!isEditing}
            className={!isEditing ? 'cursor-not-allowed opacity-80' : ''}
            label='Nombre'
            register={register('name')}
            defaultValue={session?.user.name}
            error={errors.name?.message}
            placeholder='Nombre'
          />
        </div>

        <div className='md:col-span-1'>
          <Input
            disabled={!isEditing}
            className={!isEditing ? 'cursor-not-allowed opacity-80' : ''}
            defaultValue={session?.user?.lastname}
            label='Apellido'
            register={register('lastname')}
            error={errors.lastname?.message}
            placeholder='Apellido'
          />
        </div>

        <div className='md:col-span-2'>
          {session?.user.provider === 'google'
            ? (
              <Input
                disabled={true}
                className={'cursor-not-allowed opacity-80'}
                defaultValue={session?.user?.email}
                type='email'
                label='Correo Electronico' placeholder='example@.com'
              />

          // eslint-disable-next-line indent
              )
            : (
              <Input
                disabled={!isEditing}
                className={!isEditing ? 'cursor-not-allowed opacity-80' : ''}
                defaultValue={session?.user?.email}
                type='email'
                register={register('email')}
                error={errors.email?.message}
                label='Correo Electronico' placeholder='example@.com'
              />

          // eslint-disable-next-line indent
              )
          }

        </div>

        {isEditing && (
          <div className='mt-4 flex justify-end md:col-span-2 md:mt-0'>
            <div className='flex w-full gap-4 md:w-1/2 md:max-w-[500px]'>
              <TextButton type='button' onClick={handleCancel} text="Cancelar" className='border border-slate-400 bg-white text-slate-600' />
              <TextButton disabled={isSubmitting} type='submit' text="Actualizar Datos" className='bg-yellow-600' />
            </div>
          </div>
        )}
      </form>

    </div>
  )
}
