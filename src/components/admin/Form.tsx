'use client'

import Input, { InputFile } from '@/components/input'
import { TextButton } from '@/components/text-button'
import useNextQuery from '@/hooks/useNextQuey'

export default function Form () {
  const { router } = useNextQuery()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('submitted')
    router.refresh()
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-fit max-h-[90vh] w-[85vw] flex-col justify-between gap-8 overflow-y-auto rounded-lg bg-white py-10 scrollbar-thin md:max-w-[55vw]">
      <div className='flex flex-col gap-6 border-t border-slate-400 p-6 md:gap-4'>
        <div>
          <Input className='p-1.5' label='Nombre'/>
        </div>

        <div className='flex flex-col gap-3'>

          <InputFile label='Logo' accept='image/*' />

          {/* <div className='grid h-full w-full place-content-center'>
            <div className='h-48 w-48'>
              <img className='h-full w-full object-cover' src='https://source.unsplash.com/random' alt='random generate picture' />
            </div>
          </div> */}

        </div>

        <div className='flex flex-col gap-3'>

          <InputFile label='Banner' accept='image/*'/>

          {/* <div className='grid h-full w-full place-content-center'>
            <div className='h-48 w-48'>
              <img className='h-full w-full object-cover' src='https://source.unsplash.com/random' alt='random generate picture' />
            </div>
          </div> */}

        </div>

      </div>

      <div className='flex flex-1 justify-end pr-6'>
        <TextButton className='w-44 bg-blue-500 py-2' text='Agregar Categoria' />
      </div>

    </form>
  )
}
