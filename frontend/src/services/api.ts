import axios from 'axios'

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
export const API_MOCK = (import.meta.env.VITE_API_MOCK ?? 'true') === 'true'

export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})
