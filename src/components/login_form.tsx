import Image from 'next/image'
import Input from './input'
import { TextButton } from './text_button'
import { IconButton } from './icon-button'
import RememberButton from './remember_buttom'
import Link from 'next/link'
import { GoogleIcon } from './icons'

export default function LoginForm () {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' className='mt-10' />
      <h2 className="text-black-800 mt-4 text-2xl font-semibold">Sign in to your account</h2>

      <div className=' mt-4 items-center justify-center'>
        <Input label='Email' name="email" placeholder="Enter your email" required className='mt-4 w-[410px]' />
      </div>

      <div className="mt-4 items-center justify-center">
        <Input label='Password' name="password" placeholder="Ingrese su contraseña" required className='mt-1 w-[410px]' />
      </div>

      <div className="mt-4 flex w-[410px] items-center justify-between">
        <RememberButton label='Remember me' classname='mr-4' />
        <Link href="/restore-password" className='mb-1 text-sm text-blue-700'>Forgot Password</Link>
      </div>

      <TextButton text="Sign in" className='mt-7  h-11 w-[410px] bg-cyan-500' />
      <div className='mt-4 flex w-[410px] items-center justify-between'>
        <hr className="w-1/3 border-t-2 border-gray-950 sm:w-2/6" />
        <span className="mx-2 text-sm text-black">Or continue with</span>
        <hr className="w-1/3 border-t-2 border-gray-950 sm:w-2/6" />
      </div>
      <IconButton text="Sign in with Google" className="mt-4 w-[450px] items-center">
        <GoogleIcon className="ml-2 h-5 w-5" />
      </IconButton>

      <Link href={'/singup'}>
        <TextButton text="Create an account" className='mt-4 h-11 w-[410px] bg-yellow-500
        ' />
      </Link>
    </div>

  )
}
