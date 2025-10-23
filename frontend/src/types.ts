export type Product = {
  id: string
  name: string
  description: string
  priceCents: number
  imageUrl: string
  category?: string
  rating?: number
  stock?: number
}

export type CartItem = {
  product: Product
  quantity: number
}

export type ApiResult<T> = {
  data: T
}
