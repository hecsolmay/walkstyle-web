// LoginForm.tsx
import Link from 'next/link'
import Input from './input'
import { TextButton } from './text_button'
import { IconButton } from './icon-button'
import { GoogleIcon } from './icons'

import Image from 'next/image'

export default function LoginForm () {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center px-4 py-8">
      <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' className='mb-10' />
      <h2 className="mb-4 text-2xl font-semibold text-black">Sign in to your account</h2>

      <div className="mb-4 w-full">
        <Input
          label="Email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4 w-full">
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <div className="mb-4 flex w-full items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
          />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <Link href="/restore-password">
          <span className="text-sm text-blue-700">Forgot password?</span>
        </Link>
      </div>

      <TextButton text="Sign in" className="h-11 w-full bg-cyan-500 text-white" />

      <div className="my-4 flex w-full items-center justify-between">
        <hr className=" w-32 border-t-2 border-gray-950" />
        <span className="mx-2 text-sm text-gray-600">Or continue with</span>
        <hr className=" w-32 border-t-2 border-gray-950  " />
      </div>

      <div className="mt-4 flex w-full"> {/* Envuelve el botón en un div con w-full */}
        <IconButton text="Sign in with Google" >
          <GoogleIcon className="ml-2 h-5 w-5" />
        </IconButton>
      </div>

      <Link href="/signup" className='mt-4  w-full '>
        <TextButton text="Create an account" className="mt-4 h-11 w-full bg-yellow-500 text-white" />
      </Link>
    </div>
  )
}
