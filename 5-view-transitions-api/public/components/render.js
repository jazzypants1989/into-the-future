import { addToCart, removeFromCart } from "../features/cart.js"
import { getProducts } from "./store.js"
import { main } from "./Router.js"

export default function render(component) {
  main.innerHTML = component
}

export async function buttonFinderAdd() {
  const products = await getProducts()

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const id = e.target.id
      const product = products.find((product) => product.id === Number(id))
      addToCart(product)
    })
  })
}

export async function buttonFinderRemove() {
  const products = await getProducts()
  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const id = e.target.id
      const product = products.find((product) => product.id === Number(id))
      removeFromCart(product)
    })
  })
}
