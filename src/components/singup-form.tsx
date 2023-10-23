// SignupForm.tsx
import { IconButton } from '@/components/icon-button'
import { GoogleIcon } from '@/components/icons'
import Input, { InputPassword } from '@/components/input'
import { TextButton } from '@/components/text-button'
import Link from 'next/link'

import Image from 'next/image'

export default function SignupForm () {
  return (
    <form className="mx-auto flex max-w-screen-md flex-col items-center justify-center gap-1 p-4">
      <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' className='mb-2' />
      <h2 className="my-3 text-center text-2xl font-semibold text-black">Create your Free Account</h2>

      <IconButton text="Sign up with Google" className='my-5 w-full' >
        <GoogleIcon className="ml-2 h-5" />
      </IconButton>

      <div className="my-5 flex w-full items-center justify-between">
        <hr className=" w-32 border-t-2 border-gray-600" />
        <span className="mx-2 text-sm text-gray-600">Or</span>
        <hr className=" w-32 border-t-2 border-gray-600  " />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="Name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="LastName"
          placeholder="Enter your lastname"
          required
        />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="Email address"
          type='email'
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-5 w-full">
        <InputPassword
          label="Password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-5 w-full">

        <InputPassword
          label="Confirm Password"
          placeholder="Enter your password"
          showChangeType={false}
          required
        />
      </div>

      <TextButton text="Sign in" className="my-3 h-11 w-full bg-cyan-500 text-white" />

      <p className='mt-3 flex gap-1 text-sm text-slate-400'>

        <Link href="/login" className='text-sm font-bold text-blue-700 underline-offset-4 hover:underline'>
        Already have an account?
        </Link>
      </p>

    </form>
  )
}
