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
    label: 'Hombre',
    href: '/shop/man'
  },
  {
    label: 'Mujer',
    href: '/shop/woman',
    divider: true
  },
  {
    label: 'Marcas',
    href: '/brands'
  },
  {
    label: 'Categorias',
    href: '/categories'
  }
]

export const dropdownLinks: NavLinks[] = [
  {
    label: 'Iniciar Sesion',
    href: '/login'
  },
  {
    label: 'Registrarse',
    href: '/signup',
    divider: true
  },
  {
    label: 'ir al Admin',
    href: '/admin/dashboard'
  }
]

export const dropdownAdminLinks: NavLinks[] = [
  {
    label: 'Perfil',
    href: '/admin/user/profile',
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
