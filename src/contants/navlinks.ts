export interface NavLinks {
  label: string
  href: string
  divider?: boolean
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
    href: '/register',
    divider: true
  },
  {
    label: 'ir al Admin',
    href: '/admin'
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
