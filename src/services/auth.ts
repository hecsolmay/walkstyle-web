import { type LoginSchema, type RegisterSchema } from '@/types/schemas'
import { type UserWithToken } from '@/types/user'
import axios from '@/utils/axios'

export async function login (credentials: LoginSchema): Promise<UserWithToken | null> {
  const response = await axios.post('/auth/login', credentials)

  const { data, status } = response

  if (status !== 200) throw new Error('Error al iniciar sesión.')

  const { user: requestUser, token } = data

  const user = { ...requestUser, token }

  return user
}

export async function registerUser (user: RegisterSchema) {
  const response = await axios.post('/auth/register', user)
  const { data, status } = response

  if (status !== 201) throw new Error('Error al registrarse')

  return data
}
