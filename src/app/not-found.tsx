import EcommerceLayout from '@/app/(eccomerce)/layout'
import { LinkButton } from '@/components/link-button'
import Image from 'next/image'

export default function NotFound () {
  return (
    <EcommerceLayout >
      <div className='my-10 flex h-[60vh] flex-col items-center justify-center gap-5'>
        <h1 className='mb-5 text-center text-4xl text-black'>Pagina no encontrada</h1>
        <Image src='/this-is-fine-404.gif' alt='Not found gif' width={500} height={500}></Image>

        <div className='w-48'>
          <LinkButton href='/' className='bg-teal-500 text-xl uppercase' text='Inicio' />
        </div>

      </div>
    </EcommerceLayout >
  )
}
