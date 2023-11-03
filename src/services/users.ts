import { type SearchParams } from '@/types'
import { type ROLE } from '@/types/enums'
import { type Info } from '@/types/response'
import { type User, type UserDTO, type UserDetails } from '@/types/user'
import axios, { axiosAuth } from '@/utils/axios'

interface UsersResponse {
  info: Info
  users: User[]
}

interface AdminUserResponse {
  info: Info
  users: UserDetails[]
}

interface UpdateUser {
  userId: string
  newUser: Partial<UserDTO>
}

interface ChangeUserRole {
  userId: string
  role: ROLE
}

interface ChangeUserPassword {
  userId: string
  oldPassword: string
  newPassword: string
}

export async function getUsers ({ q = '', page = 1, limit = 10 }: SearchParams = {}): Promise<UsersResponse> {
  const response = await axios.get(`/users?q${q}&page=${page}`)
  const { data } = response

  return {
    info: data.info,
    users: data.users
  }
}

export async function getById (id = ''): Promise<User> {
  const response = await axios.get(`/users/${id}`)
  const { data } = response

  return data.user
}

export async function getAdminUsers ({ q = '', page = 1, limit = 10 }: SearchParams = {}): Promise<AdminUserResponse> {
  const respone = await axiosAuth.get(`/users/all?q=${q}&page=${page}`)
  const { data } = respone

  return {
    info: data.info,
    users: data.users
  }
}

export async function deleteUserById (id = '') {
  const response = await axiosAuth.delete(`/users/${id}`)
  return response
}

export async function restoreUserById (id = '') {
  const response = await axiosAuth.patch(`/users/restore/${id}`)
  return response
}

export async function updateUserById ({ userId, newUser }: UpdateUser) {
  const response = await axiosAuth.put(`/users/${userId}`, newUser)
  return response
}

export async function changeRole ({ role, userId }: ChangeUserRole) {
  const response = await axiosAuth.patch(`/users/${userId}/role`, { role })
  return response
}

export async function changePassword ({ userId, newPassword, oldPassword }: ChangeUserPassword) {
  const response = await axiosAuth.patch(`/users/${userId}/restore-password`, {
    newPassword,
    oldPassword
  })
  return response
}

interface ChangeProfilePicture {
  userId?: string
  formData: FormData
}

export const changeProfilePicture = async ({ formData, userId = '' }: ChangeProfilePicture): Promise<string> => {
  const response = await axiosAuth.post(`/users/${userId}/profile-image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  const { data } = response

  return data.profileUrl
}

export const removeProfilePicture = async (userId = '') => {
  const formData = new FormData()
  const response = await axiosAuth.put(`/users/${userId}/profile-image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}
