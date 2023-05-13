import Cart from "../pages/Cart.js"

export let cart: Cart = JSON.parse(localStorage.getItem("cart") || "{}")

export default function updateCart() {
  const cartCount = document.querySelector("#cart-count") as HTMLSpanElement
  const cartAmount = document.querySelector("#cart-total") as HTMLSpanElement
  if (!cartCount || !cartAmount) {
    throw new Error("No cart count or cart amount found")
  }
  cartCount.innerText = Object.keys(cart).length.toString()
  cartAmount.innerText =
    "$" +
    Object.values(cart)
      .map((item: CartItem) => item.product.price * item.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
}

export function addToCart(product: Product) {
  if (cart[product.id]) {
    cart[product.id].quantity++
  } else {
    cart[product.id] = {
      quantity: 1,
      product,
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  alert(`${product.title} added to cart!`)
  updateCart()
}

export function removeFromCart(product: Product) {
  cart[product.id].quantity--
  if (cart[product.id].quantity === 0) {
    delete cart[product.id]
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  alert(`${product.title} removed from cart!`)
  updateCart()
  Cart()
}
