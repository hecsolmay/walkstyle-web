'use client'

import { IconButton } from '@/components/icon-button'
import { GoogleIcon } from '@/components/icons'
import { signIn } from 'next-auth/react'

interface GoogleButtonProps {
  text?: string
  className?: string
  iconClassName?: string
}

export default function GoogleButton (
  { className, iconClassName, text = '' }: GoogleButtonProps
) {
  const handleGoogleAuth = async () => {
    try {
      const responseNextAuth = await signIn('google', {
        redirect: false
      })

      if (responseNextAuth === undefined) {
        console.log(responseNextAuth)
        console.error('Something went wrong in google sign in')
        return
      }

      if (responseNextAuth.ok) {
        console.log('session succeded')
        console.log(responseNextAuth)
      }
    } catch (error) {
      console.error({ error })
    }
  }

  return (
    <IconButton type='button' onClick={handleGoogleAuth} text={text} className={className} >
      <GoogleIcon className={iconClassName} />
    </IconButton>
  )
}
