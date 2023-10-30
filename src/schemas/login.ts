import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string({
    required_error: 'El email no puede estar vacío.',
    invalid_type_error: 'El email debe ser un string.'
  }
  ).trim().email('El email debe ser un correo valido.').toLowerCase(),
  password: z.string({
    required_error: 'La contraseña no puede estar vacío.',
    invalid_type_error: 'La contraseña debe ser un string.'
  }).min(1, 'La contraseña no puede estar vacia.')
})
