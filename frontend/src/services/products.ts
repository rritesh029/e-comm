import { API_MOCK } from './api'
import type { Product } from '../types'
import { mockProducts, findMockProductById } from './products.mock'

export async function listProducts(): Promise<Product[]> {
  if (API_MOCK) {
    await new Promise((r) => setTimeout(r, 200))
    return mockProducts
  }
  // TODO: integrate with backend
  return []
}

export async function getProduct(id: string): Promise<Product | undefined> {
  if (API_MOCK) {
    await new Promise((r) => setTimeout(r, 200))
    return findMockProductById(id)
  }
  // TODO: integrate with backend
  return undefined
}
