import { addToCart, removeFromCart } from "cart"
import { getProducts } from "store"
import { main } from "Router"

/**
 * @typedef {import("../WHATDAFUG.js").Product} Product
 */

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
 * @returns {Promise<void>} - A promise that resolves when the buttons have been found.
 * @async
 */
export async function buttonFinderAdd() {
  /** @type {Product[]} */
  const products = await getProducts()

  /** @type {NodeListOf<HTMLButtonElement>} */
  const buttons = document.querySelectorAll(".add-to-cart")

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const target = e.target
      if (!(target instanceof HTMLButtonElement)) return
      const id = target.id
      const product = products.find((product) => product.id === Number(id))
      if (!product) throw new Error("No product found.")
      addToCart(product)
    })
  })
}

export async function buttonFinderRemove() {
  /** @type {Product[]} */
  const products = await getProducts()
  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const target = e.target
      if (!(target instanceof HTMLButtonElement)) return
      const id = target.id
      /**
       * @param {Product[]} products
       * @returns {Product}
       */
      function findProduct(products) {
        const product = products.find((product) => product.id === Number(id))
        if (!product) throw new Error("No product found.")
        return product
      }
      const product = findProduct(products)
      if (!product) throw new Error("No product found.")
      removeFromCart(product)
    })
  })
}
