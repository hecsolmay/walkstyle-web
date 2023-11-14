import { z } from 'zod'

export const itemProductSchema = z.object({
  itemId: z.string().uuid(),
  quantity: z.number().gt(0),
  price: z.number().gt(0),
  extraPrice: z.number().optional().default(0),
  image: z.string().url(),
  name: z.string(),
  details: z.string().optional().default('')
})

export const itemProductArray = z.array(itemProductSchema).nonempty()

export function validateItemProductArray (arra: any) {
  return itemProductArray.safeParse(arra)
}
