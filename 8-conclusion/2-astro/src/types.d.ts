export interface FancyButton extends HTMLButtonElement {
  alreadyAdded: boolean
  id: string
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

interface CartItem extends Product {
  quantity: number
}

export interface Cart {
  items: CartItem[]
}
