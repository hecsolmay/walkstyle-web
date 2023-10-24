import { z } from 'zod'

export const sizeSchema = z.object({
  size: z.number({
    invalid_type_error: 'Se esperaba un numero para la talla',
    required_error: 'Se esperaba un numero para la talla'
  }).gte(0, { message: 'Se esperaba un numero positivo' }),
  stock: z.number({
    invalid_type_error: 'Se esperaba un numero para el stock',
    required_error: 'Se esperaba un numero para el stock'
  }).gte(0, { message: 'Se esperaba un numero positivo' }),
  extraPrice: z.number({
    invalid_type_error: 'Se esperaba un numero para el precio extra',
    required_error: 'Se esperaba un numero para el precio extra'
  }).gte(0, { message: 'Se esperaba un numero positivo' }).optional().default(0)
})
