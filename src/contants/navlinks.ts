import { GENDER } from '@/types/enums'

export interface NavLinks {
  label: string
  href: string
  divider?: boolean
}

export interface SortLinks {
  label: string
  sort: string
}

export const links: NavLinks[] = [
  {
    label: 'Marcas',
    href: '/brands'
  },
  {
    label: 'Categorias',
    href: '/categories',
    divider: true
  },
  {
    label: 'Hombre',
    href: `/genders/${GENDER.MALE}`
  },
  {
    label: 'Mujer',
    href: `/genders/${GENDER.FEMALE}`
  },
  {
    label: 'Niños',
    href: `/genders/${GENDER.KID}`
  }
]

export const noSessionLinks: NavLinks[] = [
  {
    label: 'Iniciar Sesion',
    href: '/login',
    divider: true
  },
  {
    label: 'Registrarse',
    href: '/signup'
  }
]

export const publicLinks: NavLinks[] = [
  {
    label: 'Perfil',
    href: '/profile'
  }
]

export const protectedLinks: NavLinks[] = [
  {
    label: 'ir al Admin',
    href: '/admin/dashboard'
  }
]

export const dropdownAdminLinks: NavLinks[] = [
  {
    label: 'Perfil',
    href: '/admin/profile',
    divider: true
  },
  {
    label: 'E-commerce',
    href: '/'
  }
]

export const sortLinks: SortLinks[] = [
  {
    label: 'Recientes',
    sort: 'recents'
  },
  {
    label: '$ - $$$',
    sort: 'price-asc'
  },
  {
    label: '$$$ - $',
    sort: 'price-desc'
  },
  {
    label: 'A - Z',
    sort: 'name-asc'
  },
  {
    label: 'Z - A',
    sort: 'name-desc'
  }
]

export type SortKey = 'recents' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'

export const SortKeys: Record<SortKey, string> = {
  recents: 'Recientes',
  'price-asc': '$ - $$$',
  'price-desc': '$$$ - $',
  'name-asc': 'A - Z',
  'name-desc': 'Z - A'
}

interface HeaderTitle {
  main: string
  sub?: string
}

export const NavTitle: Record<string, HeaderTitle> = {
  '/admin/dashboard': {
    main: 'Dashboard',
    sub: 'Analitycs'
  },
  '/admin/products': {
    main: 'Productos',
    sub: 'Tablas de Productos'
  },
  '/admin/brands': {
    main: 'Marcas'
  },
  '/admin/categories': {
    main: 'Categorias'
  },
  '/admin/users': {
    main: 'Usuarios',
    sub: 'Tablas de usuarios'
  },
  '/admin/sales': {
    main: 'Ventas',
    sub: 'Datos de ventas'
  },
  'admin/profile': {
    main: 'Perfil'
  },
  default: {
    main: ''
  }
}

export function getNavTitle (path: string) {
  const title = NavTitle[path]

  return title ?? NavTitle.default
}
