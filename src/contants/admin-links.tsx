import { BrandIcon, CategoryIcon, HomeIcon, ProductIcon, SalesIcon, UsersPairIcon } from '@/components/icons'

export interface NavLinks {
  label: string
  href: string
  icon: React.ReactNode
}

export const links: NavLinks[] = [
  {
    label: 'Dashboard',
    href: '#',
    icon: <HomeIcon />
  },
  {
    label: 'Productos',
    href: '#',
    icon: <ProductIcon />
  },
  {
    label: 'Marcas',
    href: '#',
    icon: <BrandIcon />
  },
  {
    label: 'Categorías',
    href: '#',
    icon: <CategoryIcon />
  },
  {
    label: 'Ventas',
    href: '#',
    icon: <SalesIcon />
  },
  {
    label: 'Usuarios',
    href: '#',
    icon: <UsersPairIcon />
  }
]
