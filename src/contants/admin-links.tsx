import { BrandIcon, CategoryIcon, HomeIcon, ProductIcon, SalesIcon, UsersPairIcon } from '@/components/icons'

export interface NavLinks {
  label: string
  href: string
  icon: React.ReactNode
}

export const links: NavLinks[] = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: <HomeIcon />
  },
  {
    label: 'Productos',
    href: '/admin/products',
    icon: <ProductIcon />
  },
  {
    label: 'Marcas',
    href: '/admin/brands',
    icon: <BrandIcon />
  },
  {
    label: 'Categorías',
    href: '/admin/categories',
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
