import { addToCart, removeFromCart } from "../features/cart.js"
import { getProducts } from "./store.js"
import { main } from "./Router.js"
import Nope from "../pages/Nope.js"

// export default function render({ component, callback }) {
//  document.startViewTransition(main.innerHTML = component)
//  callback ? callback() : null
// }

export default function render({ component, callback }) {
  addOldActiveClass()
  transitionHelper({
    updateDOM: () => {
      !component ? Nope("404") : null
      main.innerHTML = component
      main.scrollTop = 0
      addNewActiveClass()
      callback ? callback() : null
    },
  })
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

function transitionHelper({
  skipTransition = false,
  classNames = [],
  updateDOM,
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
let oldImage = null

document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" || e.target.parentNode.tagName === "A") {
    clickedImage = true
    if (e.target.tagName === "IMG") {
      oldImage = e.target
    } else {
      oldImage = e.target.parentNode.querySelector("img")
    }
  } else {
    clickedImage = false
  }
})

function addOldActiveClass() {
  if (!clickedImage) return
  oldImage.style.viewTransitionName = "activeImage"
}

function addNewActiveClass() {
  if (!clickedImage) return
  const newImage = document.querySelector("img")
  newImage.style.viewTransitionName = "activeImage"
  newImage.classList.add("activeImage")
}

// function removeActiveClass() {
//   if (!clickedImage) return
//   const newImage = document.querySelector("img")
//   oldImage ?? (oldImage.style.viewTransitionName = "")
//   newImage ?? (newImage.style.viewTransitionName = "")
// }
