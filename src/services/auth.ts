import { type LoginSchema, type RegisterSchema } from '@/types/schemas'
import { type GoogleUser, type UserWithToken } from '@/types/user'
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

export async function refreshToken (token: string): Promise<string> {
  try {
    const response = await axios.post('/auth/refresh-token', { refreshToken: token })
    const { data, status } = response

    if (status !== 200) throw new Error('Error al actualizar el token')

    return data.token
  } catch (error) {
    console.error(error)
    return ''
  }
}

export async function googleAuth (user?: GoogleUser): Promise<UserWithToken | undefined> {
  try {
    const response = await axios.post('/auth/login/google', user)

    const { data, status } = response

    if (status !== 200) throw new Error('Error al iniciar sesión.')

    const { user: userFromResponse, token } = data

    return {
      ...userFromResponse,
      token
    }
  } catch (error) {
    console.log('There was something wrong', error)
    return undefined
  }
}
