'use client'

import Input from '@/components/input'
// import { TextButton } from '@/components/text-button'
import { useSession } from 'next-auth/react'
import { PencilSquareIcon } from '@/components/icons'

export default function UserData () {
  const { data: session } = useSession()

  return (
    <div className='flex flex-col gap-6'>
      <div>
        <h3 className='text-slate-500'>Datos Personales</h3>
        <hr className="my-1 h-px border-0 bg-slate-400" />
      </div>

      <div className='flex w-full justify-start'>
        <button className='text-yellow-600'><PencilSquareIcon className='h-8 w-8'/></button>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='md:col-span-1'>
          <Input defaultValue={session?.user?.name} label='Nombre' placeholder='Nombre'/>
        </div>
        <div className='md:col-span-1'>
          <Input defaultValue={session?.user?.lastname} label='Apellido' placeholder='Apellido'/>
        </div>
        <div className='md:col-span-2'>
          <Input defaultValue={session?.user?.email} type='email' label='Correo Electronico' placeholder='example@.com'/>
        </div>
      </div>

      <div className='flex justify-end'>
        <div className='flex w-full gap-4 md:w-1/2 md:max-w-[500px]'>
          {/* <TextButton text="Cancelar" className='border border-slate-400 bg-white text-slate-600' /> */}
          {/* <TextButton text="Actualizar Datos" className='bg-yellow-600' /> */}
        </div>
      </div>
    </div>
  )
}
