import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string({
    invalid_type_error: 'Se esperaba un nombre',
    required_error: 'Se esperaba un nombre'
  }).trim().min(1, { message: 'Se esperaba un nombre' }),
  lastName: z.string({
    invalid_type_error: 'Se esperaba un apellido',
    required_error: 'Se esperaba un apellido'
  }).trim().min(1, { message: 'Se esperaba un apellido' }),
  email: z.string({
    invalid_type_error: 'Se esperaba un correo',
    required_error: 'Se esperaba un correo'
  }).trim().email({ message: 'Se esperaba un correo' }).toLowerCase(),
  password: z.string({
    invalid_type_error: 'Se esperaba una contraseña valida',
    required_error: 'Se esperaba una contraseña valida'
  }).min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  confirmPassword: z.string({
    invalid_type_error: 'Se esperaba una contraseña valida',
    required_error: 'Se esperaba una contraseña valida'
  }).min(1, { message: 'Se esperaba una contraseña valida' })
}).refine(data => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword']
})
