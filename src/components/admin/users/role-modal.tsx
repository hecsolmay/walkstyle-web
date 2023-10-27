'use client'

import { ScrewdriverIcon, UserIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import { TextButton } from '@/components/text-button'
import useNextQuery from '@/hooks/useNextQuey'
import { changeRole } from '@/services/users'
import { ROLE } from '@/types/enums'
import { type UserDetails } from '@/types/user'
import { cn } from '@/utils/cn'
import { toastError, toastSuccess } from '@/utils/toast'
import { useState } from 'react'

interface RoleModalProps {
  user: UserDetails
  closeModal: () => void
  showModal: boolean
}

export default function RoleModal ({ closeModal, showModal, user }: RoleModalProps) {
  const [role, setRole] = useState<ROLE>(user.role)
  const { router } = useNextQuery()

  if (!showModal) return null

  const createHandleChange = (role: ROLE) => () => {
    setRole(role)
  }

  const handleSubmit = async (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      console.log('Change Role', role)
      await changeRole({ userId: user.userId, role })
      toastSuccess('Rol cambiado')
      closeModal()
      router.refresh()
    } catch (error) {
      console.error('Something went wrong', error)
      toastError('No se pudo cambiar el rol')
    }
  }

  const isAdmin = role === ROLE.ADMIN
  const isUser = role === ROLE.USER

  return (
    <Background className='grid place-content-center' show={showModal} close={closeModal}>
      <form onSubmit={handleSubmit} className='flex h-[75vh] w-[85vw] flex-col gap-10 rounded-lg bg-white p-4 pt-10 md:max-w-[55vw] lg:max-w-[40vw]'>
        <h1 className='text-center text-2xl font-bold'>¿Deseas Cambiar el rol?</h1>

        <div className='flex flex-1 gap-4'>

          <div onClick={createHandleChange(ROLE.ADMIN)} className='flex h-full w-full cursor-pointer flex-col gap-4 transition-all'>
            <div className={cn('grid flex-1 place-content-center', isAdmin && ' bg-slate-800 text-white')}>
              <ScrewdriverIcon className='h-32 w-32'/>
            </div>
            <h2 className={cn('text-center text-xl font-bold', isAdmin && ' underline decoration-slate-700 underline-offset-4')}>Administrador</h2>
          </div>

          <div onClick={createHandleChange(ROLE.USER)} className='flex h-full w-full cursor-pointer flex-col gap-4 transition-all'>
            <div className={cn('grid flex-1 place-content-center', isUser && ' bg-slate-800 text-white')}>
              <UserIcon className='h-32 w-32'/>
            </div>
            <h2 className={cn('text-center text-xl font-bold', isUser && ' underline decoration-slate-700 underline-offset-4')}>Usuario</h2>
          </div>
        </div>

        <TextButton className='bg-slate-800 py-2' text='Guardar'/>
      </form>
    </Background>
  )
}
