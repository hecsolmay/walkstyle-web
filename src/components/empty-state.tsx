import React from 'react'
import { LinkButton } from './link-button'
import { ShoppingBagIcon } from './icons'

export default function EmptyState () {
  return (
    <div className="mt-16 flex flex-col justify-center gap-5 text-center">
      <h1 className="mb-4 text-2xl font-bold uppercase">Bolsa de compras Vacía</h1>
      <p className="mb-4 text-lg text-gray-500">
        Para seguir comprando, navega por las categorías del sitio, o busca tu producto
      </p>
      <div className="mb-4 flex items-center justify-center">
        <ShoppingBagIcon className="h-32 w-32 text-red-400 md:h-48 md:w-48" />
      </div>
      <div className="mt-11 flex flex-col items-center bg-transparent p-2">
        <LinkButton
          className="h-10 w-40 bg-teal-500 text-sm font-semibold md:h-11 md:w-72"
          text="Elegir productos"
          href="/"
        />
      </div>
    </div>
  )
}
