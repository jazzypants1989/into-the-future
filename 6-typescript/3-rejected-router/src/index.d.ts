interface FancyButton extends HTMLButtonElement {
  alreadyAdded: boolean
}

interface Product {
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

interface CartItem {
  quantity: number
  product: Product
}

interface Cart {
  [key: number]: CartItem
}

interface CSSStyleDeclaration {
  viewTransitionName: string
}
