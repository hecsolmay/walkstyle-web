'use client'

import { IconButton } from '@/components/icon-button'
import { GoogleIcon } from '@/components/icons'
import Input, { InputPassword } from '@/components/input'
import { TextButton } from '@/components/text-button'
import useNextQuery from '@/hooks/useNextQuey'
import { registerSchema } from '@/schemas/register'
import { registerUser } from '@/services/auth'
import useLoaderStore from '@/store/useLoader'
import { type RegisterSchema } from '@/types/schemas'
import { toastError } from '@/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function SignupForm () {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema)
  })

  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)
  const { router } = useNextQuery()

  const onSubmit = async (data: RegisterSchema) => {
    showLoader()
    try {
      await registerUser(data)
      const { email, password } = data
      const responseNextAuth = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      hideLoader()

      if (responseNextAuth === undefined) {
        return
      }

      if (responseNextAuth.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error(error)
      toastError('No se pudo registrar tu cuenta')
      return
    } finally {
      hideLoader()
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="mx-auto flex max-w-screen-md flex-col items-center justify-center gap-1 p-4">
      <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' className='mb-2' />
      <h2 className="my-3 text-center text-2xl font-semibold text-black">Crea tu cuenta gratuita</h2>

      <IconButton text="Registrate con Google" className='my-5 w-full' >
        <GoogleIcon className="ml-2 h-5" />
      </IconButton>

      <div className="my-5 flex w-full items-center justify-between">
        <hr className=" w-32 border-t-2 border-gray-600" />
        <span className="mx-2 text-sm text-gray-600">O</span>
        <hr className=" w-32 border-t-2 border-gray-600  " />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="Name"
          register={register('name', { required: true })}
          placeholder="Ingresa tu nombre"
          error={errors.name?.message}
          required
        />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="LastName"
          register={register('lastName', { required: true })}
          placeholder="Ingresa tu apellido"
          error={errors.lastName?.message}
          required
        />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="Email address"
          type='email'
          register={register('email', { required: true })}
          error={errors.email?.message}
          placeholder="email.example.com"
          required
        />
      </div>

      <div className="mb-5 w-full">
        <InputPassword
          label="Password"
          register={register('password', { required: true })}
          placeholder="Ingresa tu contraseña con al menos 8 caracteres"
          error={errors.password?.message}
          required
        />
      </div>
      <div className="mb-5 w-full">

        <InputPassword
          label="Confirm Password"
          register={register('confirmPassword', { required: true })}
          placeholder="Repite tu contraseña"
          showChangeType={false}
          error={errors.confirmPassword?.message}
          required
        />
      </div>

      <TextButton disabled={isSubmitting} text="Registrate" className="my-3 h-11 w-full bg-cyan-500 text-white" />

      <p className='mt-3 flex gap-1 text-sm text-slate-400'>

        <Link href="/login" className='text-sm font-bold text-blue-700 underline-offset-4 hover:underline'>
        ¿Ya tienes una cuenta?
        </Link>
      </p>

    </form>
  )
}
