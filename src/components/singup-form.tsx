// SignupForm.tsx
import Link from 'next/link'
import Input from './input'
import { TextButton } from './text-button'
import { IconButton } from './icon-button'
import { GoogleIcon } from './icons'

import Image from 'next/image'

export default function SignupForm () {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center gap-1 p-4">
      <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' className='mb-2' />
      <h2 className="my-3 text-2xl font-semibold text-black">Create your Free Account</h2>

      <IconButton text="Sign in with Google" className='my-5 w-full' >
        <GoogleIcon className="ml-2 h-5" />
      </IconButton>

      <div className="my-5 flex w-full items-center justify-between">
        <hr className=" w-32 border-t-2 border-gray-600" />
        <span className="mx-2 text-sm text-gray-600">Or sign up with</span>
        <hr className=" w-32 border-t-2 border-gray-600  " />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="Name"
          name="name"
          type='name'
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="LastName"
          name="lastname"
          type='lastname'
          placeholder="Enter your lastname"
          required
        />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="Email address"
          name="email"
          type='email'
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-5 w-full">
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-5 w-full">
        <Input
          label="Confirm Password"
          name="confirm password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <TextButton text="Sign in" className="my-3 h-11 w-full bg-cyan-500 text-white" />

      <p className='mt-3 flex gap-1 text-sm text-slate-400'>

        <Link href="/login" className='text-sm font-bold text-blue-700 underline-offset-4 hover:underline'>
        Already have an account?
        </Link>
      </p>

    </div>
  )
}
