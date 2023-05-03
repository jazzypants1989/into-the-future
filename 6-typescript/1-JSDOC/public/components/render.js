import { addToCart, removeFromCart } from "../features/cart.js"
import { getProducts } from "./store.js"
import { main } from "./Router.js"
import * as Types from "../types.js"

/**
 * The render function-- renders the component to the main element.
 * @param {string} component - The component to render.
 */
export default function render(component) {
  if (!main) throw new Error("No main element found.")
  main.innerHTML = component
}

/**
 * Finds all the add-to-cart buttons and adds an event listener to them.
 * @returns {Promise<void>} - A promise that resolves when the buttons have each been given an event listener.
 * @async
 */
export async function buttonFinderAdd() {
  const products = await getProducts()

  // /** @type {NodeListOf<Types.FancyButton>} */
  // We can bring in our special JSDoc types from types.js
  // /** @type {NodeListOf<HTMLButtonElement & { alreadyAdded: boolean }>} */
  // Or, we can add the property on the fly.
  // /** @type {NodeListOf<HTMLButtonElement>} */
  // Or, we can patch the HTMLButtonElement class in our index.d.ts file. Not recommended.
  // I like writing custom interfaces in the index.d.ts file.
  /** @type {NodeListOf<FancyButton>} */
  const buttons = document.querySelectorAll(".add-to-cart")
  // It just works without importing anything.

  buttons.forEach((button) => {
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const target = /** @type {FancyButton} */ (e.target)
      const id = target.id
      const product = products.find((product) => product.id === Number(id))
      if (!product) throw new Error("No product found.")
      addToCart(product)
    })
  })
}

export async function buttonFinderRemove() {
  const products = await getProducts()
  /** @type {NodeListOf<FancyButton>} */
  const buttons = document.querySelectorAll(".remove-from-cart")
  buttons.forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const target = /** @type {FancyButton} */ (e.target)
      const id = target.id
      const product = products.find((product) => product.id === Number(id))
      if (!product) throw new Error("No product found.")
      removeFromCart(product)
    })
  })
}
