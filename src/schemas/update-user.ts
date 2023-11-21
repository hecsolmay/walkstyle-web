import { z } from 'zod'

export const updateUserDataSchema = z.object({
  name: z.string().trim().toUpperCase().min(1, { message: 'Se esperaba un nombre valido' }).optional(),
  lastname: z.string({
    invalid_type_error: 'Se esperaba un apellido',
    required_error: 'Se esperaba un apellido'
  }).trim().toUpperCase().optional().default(''),
  email: z.string().trim().email({ message: 'Se esperaba un correo valido' }).toLowerCase().optional()
})

export const updatePasswordSchema = z.object({
  oldPassword: z.string().trim().min(1, { message: 'Se esperaba una contraseña valida' }),
  newPassword: z.string().trim().min(1, { message: 'Se esperaba una contraseña valida' }),
  confirmPassword: z.string().trim().min(1, { message: 'Se esperaba una contraseña valida' })
}).refine(data => data.newPassword === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword']
})
