import { addToCart, removeFromCart } from "../features/cart.js"
import { getProducts } from "./store.js"
import { main } from "./Router.js"
import Nope from "../pages/Nope.js"

export default function render(component: string) {
  if (!main) throw new Error("No main element found")
  main.innerHTML = component
}

export async function buttonFinderAdd() {
  const products = await getProducts()

  const buttons: FancyButton[] = Array.from(
    document.querySelectorAll(".add-to-cart")
  )
  buttons.forEach((button) => {
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const target = e.target as FancyButton
      const id = target.id
      const product = products.find(
        (product: Product) => product.id === Number(id)
      )
      if (!product) {
        Nope("badID", id)
        return
      }
      addToCart(product)
    })
  })
}

export async function buttonFinderRemove() {
  const products = await getProducts()
  const buttons: FancyButton[] = Array.from(
    document.querySelectorAll(".remove-from-cart")
  )
  buttons.forEach((button) => {
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const target = e.target as FancyButton
      const id = target.id
      const product = products.find((product) => product.id === Number(id))
      if (!product) {
        Nope("badID", id)
        return
      }
      removeFromCart(product)
    })
  })
}
