import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'

const apiRequest = axios.create({
  baseURL: 'https://api.github.com'
})
const handleSuccess = (response: AxiosResponse) => Promise.resolve(response)
const handleFailed = async (error: AxiosError) => Promise.reject(error)

apiRequest.interceptors.response.use(handleSuccess, handleFailed)

export default apiRequest
