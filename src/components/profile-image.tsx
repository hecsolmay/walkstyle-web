'use client'

import { TextButton } from '@/components/text-button'
import { changeProfilePicture } from '@/services/users'
import useLoaderStore from '@/store/useLoader'
import { ROLE } from '@/types/enums'
import { toastError, toastSuccess } from '@/utils/toast'
import { useSession } from 'next-auth/react'
import { useRef } from 'react'

const roles: Record<string, string> = {
  [ROLE.ADMIN]: 'Administrador',
  [ROLE.USER]: 'Usuario'
}

export default function UserProfileImage () {
  const { data: session, update } = useSession()
  const showLoader = useLoaderStore((state) => state.showLoader)
  const hideLoader = useLoaderStore((state) => state.hideLoader)
  const role = roles[session?.user.role ?? ROLE.USER]
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleChangeProfile = () => {
    if (inputRef?.current !== null) {
      inputRef.current.click()
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files === null) return

      const preview = URL.createObjectURL(e.target.files[0])
      const formData = new FormData()

      formData.append('image', e.target.files[0])
      showLoader()

      const userId = session?.user.userId ?? ''
      await changeProfilePicture({ userId, formData })
      await update({ ...session, user: { ...session?.user, profileUrl: preview } })

      toastSuccess('Imagen Cambiada')
    } catch (error) {
      toastError('No se pudo cambiar la imagen')
      console.error(error)
    } finally {
      hideLoader()
    }
  }

  const handleRemove = async () => {
    try {
      showLoader()
      await update({ ...session, user: { ...session?.user, profileUrl: 'default-user.png' } })
      // await removeProfilePicture(session?.user.userId ?? '')
      toastSuccess('Imagen Eliminada')
    } catch (error) {
      console.error(error)
      toastError('No se pudo eliminar la imagen')
    } finally {
      hideLoader()
    }
  }

  const image = session?.user.profileUrl ?? '/default-user.png'

  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between">
      <div className="flex items-center gap-8">
        <img src={image} className="h-16 w-16 rounded-full object-cover" alt="" />
        <div className="flex flex-col justify-around gap-2 text-xl">
          <p className="font-semibold text-blue-700">{session?.user.fullname}</p>
          <p className="font-semibold">{role ?? 'Usuario'}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <input onChange={handleChange} type="file" accept='image/*' className="hidden" ref={inputRef}/>
        <TextButton onClick={handleChangeProfile} text="Cambiar Foto" className='bg-blue-800 md:w-40'/>
        <TextButton onClick={handleRemove} text="Quitar Foto" className='border border-slate-400 bg-white text-slate-600 md:w-40'/>
      </div>

    </div>
  )
}
