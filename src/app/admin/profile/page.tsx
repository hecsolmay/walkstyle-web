import { PencilSquareIcon } from '@/components/icons'
import Input, { InputPassword } from '@/components/input'
import { TextButton } from '@/components/text-button'

export default function ProfilePage () {
  return (
    <div className="my-8 flex min-h-screen flex-col gap-8 px-4 text-slate-600 md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-8">
          <img src="https://source.unsplash.com/random" className="h-16 w-16 rounded-full object-cover" alt="" />
          <div className="flex flex-col justify-around gap-2 text-xl">
            <p className="font-semibold text-blue-700">Nombre del usuario</p>
            <p className="font-semibold">Administrador</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <TextButton text="Upload New Photo" className='bg-blue-800 md:w-40'/>
          <TextButton text="Remove Image" className='border border-slate-400 bg-white text-slate-600 md:w-40'/>
        </div>

      </div>

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
            <Input label='Nombre' placeholder='Nombre'/>
          </div>
          <div className='md:col-span-1'>
            <Input label='Apellido' placeholder='Apellido'/>
          </div>
          <div className='md:col-span-2'>
            <Input type='email' label='Correo Electronico' placeholder='example@.com'/>
          </div>
        </div>

        <div className='flex justify-end'>
          <div className='flex w-full gap-4 md:w-1/2 md:max-w-[500px]'>
            <TextButton text="Cancelar" className='border border-slate-400 bg-white text-slate-600' />
            <TextButton text="Actualizar Datos" className='bg-yellow-600' />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <div>
          <h3 className='text-slate-500'>Cambiar Contraseña</h3>
          <hr className="my-1 h-px border-0 bg-slate-400" />
        </div>

        <div className='flex w-full justify-start'>
          <button className='text-yellow-600'><PencilSquareIcon className='h-8 w-8'/></button>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='md:col-span-1'>
            <InputPassword label='Contraseña actual' placeholder='password'/>
          </div>
          <div className='md:col-span-1'>
            <InputPassword label='Nueva contraseña' placeholder='new-password'/>
          </div>
          <div className='md:col-span-2'>
            <InputPassword label='Confirmar Nueva Contraseña' placeholder='Nueva password'/>
          </div>
        </div>

        <div className='flex justify-end'>
          <div className='flex w-full gap-4 md:w-1/2 md:max-w-[500px]'>
            <TextButton text="Cancelar" className='border border-slate-400 bg-white text-slate-600' />
            <TextButton text="Cambiar contraseña" className='bg-blue-600' />
          </div>
        </div>
      </div>

    </div>
  )
}
