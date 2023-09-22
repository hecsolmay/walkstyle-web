'use client'

// Define el tipo para el tipo de variante
type ColorVariant = 1 | 2 | 3 | 4 | 5

// Define un objeto de mapeo de variantes a clases de estilo
const colorVariants: { [key in ColorVariant]: string } = {
  1: 'bg-red-400 text-white',
  2: 'bg-yellow-200 text-white',
  3: 'bg-teal-300 text-white',
  4: 'bg-purple-400 text-white',
  5: 'bg-green-300 text-white'
}

// Define la interfaz para las props del componente
interface BrandComponentProps {
  brand: {
    name: string
    logoUrl: string
  }
  colorVariant: ColorVariant
}

// Crea el componente BrandComponent
export function BrandComponent ({ brand, colorVariant }: BrandComponentProps) {
  // Obtén la clase de color según la variante o utiliza una clase por defecto
  const colorClass = colorVariants[colorVariant] ?? 'bg-blue-500 text-white'

  return (
    <div className="flex items-center justify-center">
      <div className="flex h-56 w-44 flex-col items-center justify-center ">
        <div className={` grid h-44 w-44  place-content-center ${colorClass} `}>
          <img
            src={brand.logoUrl}
            alt={brand.name}
            className="h-20 object-cover" />
        </div>
        <h2 className="text-xl font-bold">{brand.name}</h2>
      </div>
    </div>
  )
}
