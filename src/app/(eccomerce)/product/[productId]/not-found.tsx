import { LinkButton } from '@/components/link-button'
import Image from 'next/image'

export default function ProductNotFound () {
  return (
    <div className="grid h-screen place-content-center gap-8 bg-white px-4">
      <div className="text-center">
        <Image
          src='/product-not-found.webp'
          alt='product-not-found'
          width={400}
          height={400}
        />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl" >
        Producto No Encontrado!!
        </h1>

        <p className="mt-4 text-gray-500">Intente otra busqueda diferente o similar.</p>
      </div>
      <LinkButton href='/' className='bg-teal-500 text-xl uppercase' text='Volver' />
    </div>
  )
}
