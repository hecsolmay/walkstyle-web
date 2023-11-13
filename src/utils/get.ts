import { ROLE } from '@/types/enums'

const roleText: Record<ROLE, string> = {
  [ROLE.USER]: 'Usuario',
  [ROLE.ADMIN]: 'Administrador'
}

export function getRoleText (role = ROLE.USER) {
  return roleText[role] ?? roleText[ROLE.USER]
}
