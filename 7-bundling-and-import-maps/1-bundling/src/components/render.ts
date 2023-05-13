import { addToCart, removeFromCart } from "../features/cart"
import { getProducts } from "./store"
import { main } from "./Router"
import Nope from "../pages/Nope"

import type { Product, FancyButton } from "../types"

interface RenderProps {
  component: string
  callback?: () => void
}

export default function render({ component, callback }: RenderProps) {
  addOldActiveClass()
  transitionHelper({
    updateDOM: () => {
      if (!main) throw new Error("No main element found")
      if (!component) Nope("error", "No component provided")
      main.innerHTML = component
      main.scrollTop = 0
      addNewActiveClass()
      if (callback) callback()
    },
  })
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
      const target = e.target
      if (!target || !isFancyButton(target)) return
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

function isFancyButton(target: EventTarget): target is FancyButton {
  return "alreadyAdded" in target
}

function transitionHelper({
  skipTransition = false,
  classNames = [],
  updateDOM = () => {},
}) {
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM())

    return {
      ready: Promise.reject(Error("View transitions unsupported")),
      updateCallbackDone,
      finished: updateCallbackDone,
    }
  }
  const transition = document.startViewTransition(updateDOM)

  // transition.finished.finally(() => {
  //   removeActiveClass()
  // })

  return transition
}

let clickedImage = false
let oldImage = null as HTMLImageElement | null

document.addEventListener("click", (e) => {
  const element = e.target as HTMLElement
  if (
    element.tagName === "IMG" ||
    element.parentNode instanceof HTMLAnchorElement
  ) {
    clickedImage = true
    if (element.tagName === "IMG") {
      oldImage = element as HTMLImageElement
    } else {
      const image = element.parentNode?.querySelector("img")
      if (image) oldImage = image as HTMLImageElement
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
  if (newImage) {
    newImage.classList.add("activeImage")
    newImage.style.viewTransitionName = "activeImage"
  }
}
