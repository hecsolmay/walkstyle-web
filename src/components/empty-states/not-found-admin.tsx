import Image from 'next/image'
import { LinkButton } from '@/components/link-button'

interface NotFoundComponentProps {
  title?: string
  description?: string
  href?: string
}

export default function NotFoundComponent ({
  description = 'Intente otra busqueda diferente o similar.',
  href = '/',
  title = 'Elemento no encontrado!'
}: NotFoundComponentProps
) {
  return (
    <div className="grid h-screen place-content-center gap-8 bg-white px-4">
      <div className="text-center">
        <Image
          src='/size-not-found.webp'
          alt='size-not-found'
          width={400}
          height={400}
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl" >
          {title}
        </h1>

        <p className="mt-4 text-gray-500">{description}</p>
      </div>
      <LinkButton href={href} className='bg-teal-500 text-xl uppercase' text='Volver' />
    </div>
  )
}
