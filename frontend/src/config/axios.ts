import axios, { AxiosRequestConfig } from 'axios'
import { API_DOMAIN } from '~/constants'

const Axios = axios.create({
  baseURL: API_DOMAIN,
  transformRequest: [(data, headers) => JSON.stringify(data)]
})

const request = {
  async get<T>(url: string, config?: AxiosRequestConfig) {
    return Axios.get<T>(url, config).then((data) => data.data)
  },
  async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return Axios.post<T>(url, data, config).then((data) => data.data)
  },
  async put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return Axios.put<T>(url, data, config).then((data) => data.data)
  },
  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return Axios.patch<T>(url, data, config).then((data) => data.data)
  },
  async delete<T>(url: string, config?: AxiosRequestConfig) {
    return Axios.delete<T>(url, config).then((data) => data.data)
  }
}

export default request
