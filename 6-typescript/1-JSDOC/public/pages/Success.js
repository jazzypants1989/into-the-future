import render from "../components/render.js"
import updateCart from "../features/cart.js"

export default function Success() {
  const cart = JSON.parse(localStorage.getItem("cart") || "{}")

  const cartItems = Object.entries(cart).map(([id, { quantity, product }]) => {
    return `
      <div class="cart-item">
        <img src="${product.images[0]}" alt="${product.title}" />
        <div class="cart-item-details">
          <p>${product.title}</p>
          <p>$${product.price}</p>
          <p>Quantity: ${quantity}</p>
        </div>
      </div>
    `
  })

  const storedStep = localStorage.getItem("step")
  if (storedStep !== "3" || !cart) {
    window.location.href = "/"
  }
  if (storedStep === "3") {
    localStorage.removeItem("step")
    localStorage.removeItem("cart")
  }
  document.title = "Success"
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const name = params.get("name")
  const total = params.get("total")
  const address = params.get("address")

  updateCart()

  render(`
  <h1>Success</h1>
    <p>Thank you for your purchase!</p>
    <p>Order Summary:</p>
    <p>Name: ${name}</p>
    <p>Total: $${total}</p>
    <p>Address: ${address}</p>

    <div class="cart-items">
      ${cartItems.join("")}
    </div>
  `)
}
