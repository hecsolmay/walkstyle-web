import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { API_BASE_URL } from '@/config'
import { refreshToken } from '@/services/auth'
import axios from 'axios'
import { getServerSession } from 'next-auth'

export default axios.create({
  baseURL: API_BASE_URL
})

export const axiosAuth = axios.create({
  baseURL: API_BASE_URL
})

axiosAuth.interceptors.request.use(
  async (request) => {
    const session = await getServerSession(authOptions)

    if (request.headers.Authorization === undefined) {
      const accessToken = await refreshToken(session?.user.rememberToken ?? '')
      request.headers.Authorization = `Bearer ${accessToken}`
    }

    return request
  }
)

axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error
    const prevRequest = error.config

    const isPrevRequestSend = Boolean(prevRequest.send)

    if ((response.status === 401 || response.status === 403) && isPrevRequestSend) {
      prevRequest.send = true

      return await axiosAuth.request(prevRequest)
    }

    return await Promise.reject(error)
  }
)
