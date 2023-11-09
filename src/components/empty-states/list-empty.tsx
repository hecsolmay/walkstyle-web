import Image from 'next/image'

interface ListEmptyProps {
  title?: string
  description?: string
}

const DEFAULT_PROPS = {
  title: 'No hay elementos',
  description: 'Intente otra busqueda diferente o similar'
}

export default function ListEmpty (
  { title = DEFAULT_PROPS.title, description = DEFAULT_PROPS.description }: ListEmptyProps
) {
  return (
    <div className="mt-6 grid h-fit place-content-center gap-8 px-4">
      <div className="flex justify-center">
        <Image
          src='/product-not-found.webp'
          alt='size-not-found'
          width={300}
          height={300}
        />
      </div>
      <div className="text-center">
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl" >
          {title}
        </h1>

        <p className="mt-4 text-gray-500">{description}</p>
      </div>
    </div>
  )
}
