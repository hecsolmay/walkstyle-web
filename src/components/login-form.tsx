'use client'

import GoogleButton from '@/components/google-button'
import Input, { InputPassword } from '@/components/input'
import { TextButton } from '@/components/text-button'
import useNextQuery from '@/hooks/useNextQuey'
import { loginSchema } from '@/schemas/login'
import useLoaderStore from '@/store/useLoader'
import { type LoginSchema } from '@/types/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function LoginForm () {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)

  const { router, searchParams } = useNextQuery()

  const onSubmit = async (data: LoginSchema) => {
    const { email, password } = data

    showLoader()

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
      const callbackUrl = searchParams.get('callbackUrl')
      const redirect = callbackUrl ?? '/'
      router.push(redirect)
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="mx-auto flex max-w-screen-md flex-col items-center justify-center gap-1 p-4">
      <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' className='mb-2' />
      <h2 className="mb-4 text-2xl font-semibold text-black">Inicia Sesion Con tu Cuenta</h2>

      <div className="my-4 w-full">
        <Input
          label="Correo Electronico"
          name="email"
          type='email'
          register={register('email', { required: true })}
          placeholder="email.example.com"
          required
          error={errors.email?.message}
        />
      </div>

      <div className="mb-4 w-full">

        <InputPassword
          label="Contraseña"
          name="password"
          register={register('password', { required: true })}
          placeholder="tu contraseña"
          error={errors.password?.message}
          required/>
      </div>

      <div className="mb-4 mt-8 flex w-full items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
          />
          <span className="text-sm text-gray-600">Recuerdame</span>
        </label>
        <Link href="/restore-password" className='text-sm text-blue-700 underline-offset-4 hover:underline'>
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <TextButton
        disabled={isSubmitting}
        text="Inicia Sesion"
        className="h-11 w-full bg-cyan-500 text-white"
        type="submit"
      />

      <p className='mt-3 flex gap-1 text-sm text-slate-400'>¿No tienes una cuenta?

        <Link href="/signup" className='text-sm text-blue-700 underline-offset-4 hover:underline'>
          Registrate
        </Link>
      </p>

      <div className="my-4 flex w-full items-center justify-between">
        <hr className=" w-32 border-t-2 border-gray-600" />
        <span className="mx-2 text-sm text-gray-600">O</span>
        <hr className=" w-32 border-t-2 border-gray-600  " />
      </div>

      <GoogleButton
        text="Inicia session con Google"
        className='w-full'
        iconClassName='ml-2 h-5'
      />

    </form>
  )
}
