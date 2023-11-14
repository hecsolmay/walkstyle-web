import { ROLE } from '@/types/enums'
import { type ItemProductArray } from '@/types/schemas'

const roleText: Record<ROLE, string> = {
  [ROLE.USER]: 'Usuario',
  [ROLE.ADMIN]: 'Administrador'
}

export function getRoleText (role = ROLE.USER) {
  return roleText[role] ?? roleText[ROLE.USER]
}

export function transformProducts (items: ItemProductArray) {
  return items.map(item => ({
    price_data: {
      currency: 'mxn',
      product_data: {
        name: item.name,
        images: [item.image],
        description: item.details
      },
      unit_amount: (item.price + item.extraPrice) * 100
    },
    quantity: item.quantity
  }))
}
