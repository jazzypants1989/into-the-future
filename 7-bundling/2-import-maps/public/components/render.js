import { addToCart, removeFromCart } from "cart"
import { getProducts } from "store"
import { main } from "Router"
import Nope from "Nope"

// /**
//  * @typedef {import("../types.js").Product} Product
//  */

/**
 * The render function-- renders the component to the main element.
 * @param {object} options
 * @param {string} options.component - The component to render.
 * @param {() => void} [options.callback] - A callback to run after the component has been rendered.
 */
export default function render({ component, callback }) {
  addOldActiveClass()
  transitionHelper({
    updateDOM: () => {
      if (!main) throw new Error("No main element found.")
      if (!component) Nope("error", "No component provided.")
      main.innerHTML = component
      main.scrollTop = 0
      addNewActiveClass()
      callback ? callback() : null
    },
  })
}

/**
 * Finds all the add-to-cart buttons and adds an event listener to them.
 * @returns {Promise<void>} - A promise that resolves when the buttons have been found.
 * @async
 */
export async function buttonFinderAdd() {
  const products = await getProducts()

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const target = e.target
      if (!(target instanceof HTMLButtonElement)) return
      const id = target.id
      const product = products?.find((product) => product.id === Number(id))
      if (!product) throw new Error("No product found.")
      addToCart(product)
    })
  })
}

export async function buttonFinderRemove() {
  const products = await getProducts()

  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const target = e.target
      if (!(target instanceof HTMLButtonElement)) return
      const id = target.id
      const product = products?.find((product) => product.id === Number(id))
      if (!product) throw new Error("No product found.")
      removeFromCart(product)
    })
  })
}

/**
 * Helper function to handle view transitions
 * @param {object} options
 * @param {boolean} [options.skipTransition]
 * @param {string[]} [options.classNames]
 * @param {() => void} options.updateDOM
 * @returns {ViewTransition}
 */
export function transitionHelper({ skipTransition = false, updateDOM }) {
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM())

    return {
      ready: Promise.reject(Error("View transitions unsupported")),
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => {},
    }
  }
  const transition = document.startViewTransition(updateDOM)

  return transition
}

/** @type {boolean} */
let clickedImage = false
/** @type {HTMLImageElement | null} */
let oldImage = null

document.addEventListener("click", (e) => {
  let element = e.target
  if (
    element instanceof HTMLImageElement ||
    element instanceof HTMLHeadingElement
  ) {
    if (element instanceof HTMLHeadingElement && element.parentNode) {
      element = element.parentNode.querySelector("img")
    }
    if (element instanceof HTMLImageElement) {
      oldImage = element
      clickedImage = true
    }
  } else {
    clickedImage = false
  }
})

function addOldActiveClass() {
  if (!clickedImage || !oldImage) return
  oldImage.style.viewTransitionName = "activeImage"
}

function addNewActiveClass() {
  if (!clickedImage) return
  const newImage = document.querySelector("img")
  if (!newImage) return

  newImage.classList.add("activeImage")
  newImage.style.viewTransitionName = "activeImage"
}
