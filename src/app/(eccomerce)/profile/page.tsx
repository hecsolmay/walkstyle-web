import UserProfileImage from '@/components/profile-image'
import UserData from '@/components/user-data'

export default function ProfilePage () {
  return (
    <div className="my-8 flex min-h-screen flex-col gap-8 px-4 text-slate-600 md:px-10">
      <UserProfileImage />

      <UserData />

      {/* <div className='flex flex-col gap-6'>
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
            <InputPassword label='Confirmar Nueva Contraseña' placeholder='Nueva password' showChangeType={false}/>
          </div>
        </div>

        <div className='flex justify-end'>
          <div className='flex w-full gap-4 md:w-1/2 md:max-w-[500px]'>
            <TextButton text="Cancelar" className='border border-slate-400 bg-white text-slate-600' />
            <TextButton text="Cambiar contraseña" className='bg-blue-600' />
          </div>
        </div>
      </div> */}

    </div>
  )
}
