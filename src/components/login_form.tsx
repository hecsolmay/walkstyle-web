// LoginForm.tsx
import Link from 'next/link'
import Input from './input'
import { TextButton } from './text_button'
import { IconButton } from './icon-button'
import { GoogleIcon } from './icons'

import Image from 'next/image'

export default function LoginForm () {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center gap-1 px-4 py-8">
      <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' className='mb-2' />
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
        <hr className=" w-32 border-t-2 border-gray-600" />
        <span className="mx-2 text-sm text-gray-600">Or continue with</span>
        <hr className=" w-32 border-t-2 border-gray-600  " />
      </div>

      <IconButton text="Sign in with Google" className='w-full' >
        <GoogleIcon className="ml-2 h-5" />
      </IconButton>

      <div className='my-4  flex w-full items-center justify-center'>
        <Link href="/signup" className='mt-4 text-base font-bold text-black'>
          Create an account
        </Link>
      </div>
    </div>
  )
}
